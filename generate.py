import random
import json
import sys
from itertools import combinations


def generate_world(seed):
    random.seed(seed)

    config = {
        "biomes": ["Grasland", "Kust", "Bergen", "Grot", "Moeras", "Oerbos", "Woestijn", "Poolgebied"],
        "num_common": 5,
        "num_rare": 3,
        "recipe_density": 0.30,
        "num_potions": 11,
    }

    # ── Load biome ingredient data from biomes.txt ────────────────
    biome_data = {}  # (biome, rarity_lower, number) -> (name, description)
    with open("biomes.txt", "r", encoding="utf-8") as bf:
        for line in bf:
            line = line.strip()
            if not line:
                continue
            biome_name, rarity_str, number_str, name, description = line.split("|")
            biome_data[(biome_name, rarity_str.lower(), int(number_str))] = (name, description)

    # ── Ingredients ────────────────────────────────────────────────
    ingredients = {}
    for biome in config["biomes"]:
        for i in range(1, config["num_common"] + 1):
            name, description = biome_data[(biome, "common", i)]
            ingredients[f"{biome}{i}c"] = {"biome": biome, "rarity": "common", "name": name, "description": description}
        for i in range(1, config["num_rare"] + 1):
            name, description = biome_data[(biome, "rare", i)]
            ingredients[f"{biome}{config['num_common'] + i}r"] = {"biome": biome, "rarity": "rare", "name": name, "description": description}

    # ── Load potion data from potions.txt ──────────────────────────
    potion_data = {}  # (rarity, number) -> description
    with open("potions.txt", "r", encoding="utf-8") as pf:
        for line in pf:
            line = line.strip()
            if not line:
                continue
            rarity_str, number_str, desc = line.split("|", 2)
            potion_data[(rarity_str.lower(), int(number_str))] = desc

    # ── Recipe grid ────────────────────────────────────────────────
    potions = {}
    for i in range(1, config["num_potions"] + 1):
        potions[f"Potion_{i}"] = {"rarity": "common", "description": potion_data[("common", i)]}
    rarepotions = {}
    for i in range(1, config["num_potions"] + 1):
        rarepotions[f"Potion_{i + 11}"] = {"rarity": "rare", "description": potion_data[("rare", i)]}

    potion_ids = list(potions.keys())
    rarepotion_ids = list(rarepotions.keys())
    ing_names = sorted(ingredients.keys())
    all_pairs = list(combinations(ing_names, 2))

    recipes = {}
    for a, b in all_pairs:
        if random.random() < config["recipe_density"]:
            fresh_name = ingredients[a]["name"]
            catalyst_name = ingredients[b]["name"]
            if (a.endswith("r") and b.endswith("r")):
                pid = random.choice(rarepotion_ids)
                recipes[f"{a}+{b}"] = {"potion": pid, "description": rarepotions[pid]["description"], "fresh": fresh_name, "catalyst": catalyst_name}
            else:
                pid = random.choice(potion_ids)
                recipes[f"{a}+{b}"] = {"potion": pid, "description": potions[pid]["description"], "fresh": fresh_name, "catalyst": catalyst_name}

    world = {
        "config": config,
        "ingredients": ingredients,
        "recipes": recipes,
        "potions": potions,
        "rarepotions": rarepotions,
    }

    # ── Stats ──────────────────────────────────────────────────────
    print(f"World generated (seed={seed})")
    print(f"  Ingredients:    {len(ingredients)} "
          f"({config['num_common']}c + {config['num_rare']}r) x "
          f"{len(config['biomes'])} biomes")
    print(f"  Possible pairs: {len(all_pairs)}")
    print(f"  Recipes:        {len(recipes)} "
          f"({100 * len(recipes) / len(all_pairs):.1f}% density)")

    # Per-potion distribution
    potion_counts = {p: 0 for p in potions}
    for r in recipes.values():
        pid = r["potion"]
        if pid in potion_counts:
            potion_counts[pid] += 1
    print(f"\n  Recipe distribution (common):")
    for p in potions:
        print(f"    {p:>12}: {potion_counts[p]:>3}")

    # Per-rare-potion distribution
    rare_potion_counts = {p: 0 for p in rarepotions}
    for r in recipes.values():
        pid = r["potion"]
        if pid in rare_potion_counts:
            rare_potion_counts[pid] += 1
    print(f"\n  Recipe distribution (rare):")
    for p in rarepotions:
        print(f"    {p:>12}: {rare_potion_counts[p]:>3}")

    # Per-biome: how many recipes are within the same biome?
    print(f"\n  Intra-biome recipes (both ingredients same biome):")
    for biome in config["biomes"]:
        biome_ings = sorted(n for n, d in ingredients.items() if d["biome"] == biome)
        biome_pairs = list(combinations(biome_ings, 2))
        count = sum(1 for a, b in biome_pairs if f"{a}+{b}" in recipes)
        print(f"    Biome {biome.upper()}: {count}/{len(biome_pairs)} pairs")

    # Cross-biome recipe counts
    cross = sum(1 for key in recipes
                if ingredients[key.split("+")[0]]["biome"]
                != ingredients[key.split("+")[1]]["biome"])
    intra = len(recipes) - cross
    print(f"\n  Intra-biome total: {intra}")
    print(f"  Cross-biome total: {cross}")

    # Per-ingredient breakdown for biome 'a'
    print(f"\n  Grasland ingredient combination counts:")
    biome_a_ings = sorted(n for n, d in ingredients.items() if d["biome"] == "Grasland")
    biome_a_common = [n for n in biome_a_ings if ingredients[n]["rarity"] == "common"]
    biome_a_rare   = [n for n in biome_a_ings if ingredients[n]["rarity"] == "rare"]
    other_common   = sorted(n for n, d in ingredients.items() if d["biome"] != "Grasland" and d["rarity"] == "common")
    other_rare     = sorted(n for n, d in ingredients.items() if d["biome"] != "Grasland" and d["rarity"] == "rare")

    for ing in biome_a_ings:
        def count_recipes(partners):
            return sum(1 for p in partners if ing != p and
                       (f"{min(ing,p)}+{max(ing,p)}" in recipes))

        cc = count_recipes(biome_a_common)
        cr = count_recipes(biome_a_rare)
        oc = count_recipes(other_common)
        or_ = count_recipes(other_rare)
        print(f"    {ing}: Grasland-common={cc}, Grasland-rare={cr}, other-common={oc}, other-rare={or_}")

    return world


if __name__ == "__main__":
    seed = int(sys.argv[1]) if len(sys.argv) > 1 else 42
    world = generate_world(seed)

    with open("world.json", "w") as f:
        json.dump(world, f, indent=2)

    print(f"\nSaved to world.json")
