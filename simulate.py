import random
import json
import sys
from itertools import combinations
from collections import defaultdict

# ── LOAD WORLD ─────────────────────────────────────────────────────
with open("world.json") as f:
    world = json.load(f)

config = world["config"]
ingredients = world["ingredients"]
recipes = world["recipes"]
potions = world["potions"]
rarepotions = world["rarepotions"]

BIOMES = config["biomes"]
START_BIOME = BIOMES[0]
DAYS_PER_BIOME = 4
TOTAL_DAYS = 30

SITUATIONAL = {f"Potion_{i}" for i in range(7, 12)}   # 7-10 situational
RARE_SITUATIONAL = {f"Potion_{i}" for i in range(12, 23)}  

# ── LOAD GATHER RESULTS TABLE ──────────────────────────────────────
GATHER_TABLE = []
with open("gatherresults.txt") as f:
    for line in f:
        parts = line.strip().split("|")
        GATHER_TABLE.append((int(parts[1]), int(parts[2])))


def lookup(a, b):
    key = "+".join(sorted([a, b]))
    recipe = recipes.get(key, None)
    if recipe is None:
        return None
    return recipe["potion"]


def forage(biome):
    common_ings = [n for n, d in ingredients.items() if d["biome"] == biome and d["rarity"] == "common"]
    rare_ings   = [n for n, d in ingredients.items() if d["biome"] == biome and d["rarity"] == "rare"]

    num_common, num_rare = random.choice(GATHER_TABLE)

    found = []
    if common_ings and num_common > 0:
        found += random.choices(common_ings, k=num_common)
    if rare_ings and num_rare > 0:
        found += random.choices(rare_ings, k=num_rare)

    return found


# ── SIMULATION ─────────────────────────────────────────────────────
def find_starting_position(rng):
    """Find a valid starting position from the generated world.

    Returns:
        essences:       set of 3 ingredient names the player starts with
        usable_recipes: list of (fresh, essence, potion) - 3 recipes the player can make
        teaser_recipes: list of (ing_a, ing_b, potion) - 2 recipes known but not yet makeable
    """
    a_commons = sorted(n for n, d in ingredients.items()
                       if d["biome"] == START_BIOME and d["rarity"] == "common")
    other_biomes = [b for b in BIOMES if b != START_BIOME]

    for _ in range(2000):
        # 1. Pick 1 common essence from biome a
        ess_a = rng.choice(a_commons)

        used_foreign_biomes = set()

        # available biomes not already used
        available_biomes = [
            b for b in other_biomes
            if b not in used_foreign_biomes
        ]

        if len(available_biomes) < 2:
            continue

        # pick 2 distinct foreign biomes
        foreign_biome_1, foreign_biome_2 = rng.sample(available_biomes, 2)

        used_foreign_biomes.update([foreign_biome_1, foreign_biome_2])

        # get commons from each biome
        commons_1 = [
            n for n, d in ingredients.items()
            if d["biome"] == foreign_biome_1 and d["rarity"] == "common"
        ]

        commons_2 = [
            n for n, d in ingredients.items()
            if d["biome"] == foreign_biome_2 and d["rarity"] == "common"
        ]

        if not commons_1 or not commons_2:
            continue

        ess_f1 = rng.choice(commons_1)
        ess_f2 = rng.choice(commons_2)

        starting_essences = {ess_a, ess_f1, ess_f2}

        # 3. For each essence, find a recipe with a common biome-a fresh ingredient
        usable = []
        ok = True
        for ess in [ess_a, ess_f1, ess_f2]:
            candidates = [ing for ing in a_commons if ing != ess]
            rng.shuffle(candidates)
            found = False
            for fresh in candidates:
                result = lookup(fresh, ess)
                if result is not None:
                    usable.append((fresh, ess, result))
                    found = True
                    break
            if not found:
                ok = False
                break
        if not ok:
            continue

        # 4. Teaser 1: recipe between two common biome-a ingredients,
        #    neither already an acquired essence
        pool_a = [c for c in a_commons if c not in starting_essences]
        pairs_a = list(combinations(pool_a, 2))
        rng.shuffle(pairs_a)
        teaser1 = None
        for a, b in pairs_a:
            result = lookup(a, b)
            if result is not None:
                teaser1 = (a, b, result)
                break
        if teaser1 is None:
            continue

        # 5. Teaser 2: recipe between one common biome-a and one common foreign,
        #    neither already an acquired essence
        non_ess_a = [c for c in a_commons if c not in starting_essences]
        all_foreign_commons = [n for n, d in ingredients.items()
                               if d["biome"] != START_BIOME and d["rarity"] == "common"
                               and n not in starting_essences]
        cross_pairs = [(a, b) for a in non_ess_a for b in all_foreign_commons]
        rng.shuffle(cross_pairs)
        teaser2 = None
        for a, b in cross_pairs:
            result = lookup(a, b)
            if result is not None:
                teaser2 = (a, b, result)
                break
        if teaser2 is None:
            continue

        # 6. Ensure all 5 recipes produce distinct potions
        all_five_potions = (
            [potion for _, _, potion in usable]
            + [teaser1[2], teaser2[2]]
        )
        if len(set(all_five_potions)) < 5:
            continue

        return starting_essences, usable, [teaser1, teaser2]

    raise RuntimeError("Could not find a valid starting position after 2000 attempts")


def simulate(seed):
    random.seed(seed)

    # ── Biome order: start with START_BIOME, then random every period ─
    biome_order = [START_BIOME]

    # ── Starting position ──────────────────────────────────────────
    setup_rng = random.Random(seed + 1000)  # separate rng so setup doesn't shift sim
    starting_essences, usable_recipes, teaser_recipes = find_starting_position(setup_rng)

    # ── Player state ───────────────────────────────────────────────
    known_essences = set(starting_essences)
    known_results = {}          # tuple(sorted pair) -> potion or None

    for fresh, ess, potion in usable_recipes:
        known_results[tuple(sorted([fresh, ess]))] = potion
    for a, b, potion in teaser_recipes:
        known_results[tuple(sorted([a, b]))] = potion

    # ── Tracking ───────────────────────────────────────────────────
    potions_brewed = defaultdict(int)
    total_experiments = 0
    total_exp_success = 0
    daily_log = []

    print(f"\nStarting essences: {', '.join(sorted(starting_essences))}")
    print(f"\nUsable recipes (essence + fresh from biome A):")
    for fresh, ess, potion in usable_recipes:
        marker = "  [have essence]" if ess in starting_essences else ""
        print(f"  {fresh} + {ess} -> {potion}{marker}")
    print(f"\nTeaser recipes (known but missing essences):")
    for a, b, potion in teaser_recipes:
        print(f"  {a} + {b} -> {potion}")
    print("=" * 72)

    for day in range(1, TOTAL_DAYS + 1):
        if ((day - 1) % DAYS_PER_BIOME == 0 and day != 1):
            biome = random.choice(BIOMES[:6]);
            biome_order.append(biome);

        biome = biome_order[(day - 1) // DAYS_PER_BIOME]
        biome_day = (day - 1) % DAYS_PER_BIOME + 1

        if biome_day == 1:
            known_good = sum(1 for v in known_results.values() if v)
            known_dud = sum(1 for v in known_results.values() if v is None)
            print(f"\n{'=' * 72}")
            print(f"  BIOME '{biome.upper()}' (days {day}-{day + DAYS_PER_BIOME - 1})")
            print(f"  Essences: {len(known_essences)} | "
                  f"Recipes: {known_good} good + {known_dud} duds")
            print(f"{'=' * 72}")

        # 1. Forage
        fresh = forage(biome)
        new_essences = [f for f in fresh if f not in known_essences]
        known_essences.update(fresh)

        # 2. Allocate catalysts
        used_essences = set()
        assigned_fresh = set()
        day_assignments = []

        def assign_known(pool, target_set):
            """Greedy assignment: most-constrained fresh first.
            Each recipe pair can only be used once per day."""
            used_pairs = {tuple(sorted([a[0], a[1]])) for a in day_assignments if a[1]}
            options = {}
            for f in pool:
                if f in assigned_fresh:
                    continue
                opts = []
                for ess in known_essences:
                    if ess == f or ess in used_essences:
                        continue
                    pair = tuple(sorted([f, ess]))
                    if pair in used_pairs:
                        continue
                    if pair in known_results and known_results[pair] in target_set:
                        opts.append((ess, known_results[pair]))
                options[f] = opts

            for f in sorted(options, key=lambda x: len(options[x])):
                for ess, potion in options[f]:
                    if ess not in used_essences:
                        pair = tuple(sorted([f, ess]))
                        if pair not in used_pairs:
                            day_assignments.append((f, ess, potion, False))
                            used_essences.add(ess)
                            assigned_fresh.add(f)
                            used_pairs.add(pair)
                            potions_brewed[potion] += 1
                            break

        # Phase 2: sometimes make known recipes
        if (random.random() < 0.25):
            assign_known(fresh, RARE_SITUATIONAL)
            assign_known(fresh, SITUATIONAL)

        # Phase 3: experiment with remaining fresh
        remaining = [f for f in fresh if f not in assigned_fresh]
        still_remaining = []

        for f in remaining:
            candidates = [ess for ess in known_essences
                          if ess != f
                          and ess not in used_essences
                          and tuple(sorted([f, ess])) not in known_results]
            if candidates:
                ess = random.choice(candidates)
                pair = tuple(sorted([f, ess]))
                result = lookup(f, ess)
                known_results[pair] = result
                total_experiments += 1
                if result:
                    total_exp_success += 1
                    potions_brewed[result] += 1
                day_assignments.append((f, ess, result, True))
                used_essences.add(ess)
                assigned_fresh.add(f)
            else:
                still_remaining.append(f)

        # Phase 4: fall back to situational potions
        if still_remaining:
            assign_known(fresh, RARE_SITUATIONAL)
            assign_known(still_remaining, SITUATIONAL)

        # Phase 5: wasted
        for f in fresh:
            if f not in assigned_fresh:
                day_assignments.append((f, None, None, False))

        # ── Day output ─────────────────────────────────────────────
        day_potions = [a[2] for a in day_assignments if a[2]]
        day_exps = [a for a in day_assignments if a[3]]
        day_exp_hits = [a for a in day_exps if a[2]]

        daily_log.append({
            "day": day, "biome": biome,
            "fresh": len(fresh), "potions": len(day_potions),
            "experiments": len(day_exps), "exp_hits": len(day_exp_hits),
        })

        new_tag = ""
        if new_essences:
            new_tag = f"  NEW: {', '.join(new_essences)}"
        print(f"\n  Day {day:>2} [{biome.upper()}-{biome_day:>2}]  "
              f"Foraged {len(fresh)}{fresh}{new_tag}")

        for f, ess, potion, was_exp in day_assignments:
            if ess is None:
                print(f"    {f:>6} + {'---':>6} -> (wasted)")
            elif was_exp:
                sym = "+" if potion else "-"
                res = potion or "nothing"
                print(f"    {f:>6} + {ess:>6} -> {res}  [EXPERIMENT {sym}]")
            else:
                tier = ("!" if potion in RARE_SITUATIONAL else ".")
                print(f"    {f:>6} + {ess:>6} -> {potion}  [{tier}]")

        print(f"    -- Potions: {len(day_potions)} | "
              f"Experiments: {len(day_exps)} ({len(day_exp_hits)} hit)")

    # ── FINAL SUMMARY ──────────────────────────────────────────────
    known_good = sum(1 for v in known_results.values() if v)
    known_dud = sum(1 for v in known_results.values() if v is None)
    total_recipes_in_world = len(recipes)

    print(f"\n\n{'=' * 72}")
    print("  FINAL SUMMARY")
    print(f"{'=' * 72}")
    print(f"  Days:              {TOTAL_DAYS}")
    print(f"  Essences:          {len(known_essences)} / {len(ingredients)}")
    print(f"  Recipes found:     {known_good} good + {known_dud} duds "
          f"= {known_good + known_dud}")
    print(f"  Recipe coverage:   {known_good}/{total_recipes_in_world} "
          f"({100 * known_good / max(1, total_recipes_in_world):.1f}%)")
    print(f"  Experiments:       {total_experiments} "
          f"({100 * total_exp_success / max(1, total_experiments):.1f}% hit rate)")
    print()
    print(f"  Potions brewed:")
    total = 0
    for p in list(potions.keys()) + list(rarepotions.keys()):
        count = potions_brewed[p]
        total += count
        tier = ("!" if p in RARE_SITUATIONAL else ".")
        bar = "#" * count
        print(f"    {tier} {p:>12}: {count:>3}  {bar}")
    print(f"      {'TOTAL':>12}: {total:>3}")
    print()
    avg = sum(d["potions"] for d in daily_log) / len(daily_log)
    zeros = sum(1 for d in daily_log if d["potions"] == 0)
    print(f"  Avg potions/day:   {avg:.2f}")
    print(f"  Days with 0:       {zeros}")

    # Per-biome breakdown (aggregate across all visits)
    visited_biomes = list(dict.fromkeys(biome_order))  # unique, in visit order
    print(f"\n  Per-biome breakdown:")
    print(f"  {'Biome':>10} | {'Visits':>6} | {'Potions':>7} | {'Experiments':>11} | {'Exp Hits':>8} | {'Wasted':>6}")
    print(f"  {'-' * 10}-+-{'-' * 6}-+-{'-' * 7}-+-{'-' * 11}-+-{'-' * 8}-+-{'-' * 6}")
    for biome in visited_biomes:
        visits = biome_order.count(biome)
        b_days = [d for d in daily_log if d["biome"] == biome]
        b_potions = sum(d["potions"] for d in b_days)
        b_exps = sum(d["experiments"] for d in b_days)
        b_hits = sum(d["exp_hits"] for d in b_days)
        b_fresh = sum(d["fresh"] for d in b_days)
        b_wasted = b_fresh - b_potions - (b_exps - b_hits)
        print(f"  {biome.upper():>10} | {visits:>6} | {b_potions:>7} | {b_exps:>11} | "
              f"{b_hits:>8} | {b_wasted:>6}")


if __name__ == "__main__":
    seed = int(sys.argv[1]) if len(sys.argv) > 1 else 42
    world = simulate(seed)