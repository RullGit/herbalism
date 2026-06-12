const worldData = {
  "config": {
    "biomes": [
      "Grasland",
      "Kust",
      "Bergen",
      "Grot",
      "Moeras",
      "Oerbos",
      "Woestijn",
      "Poolgebied"
    ],
    "num_common": 5,
    "num_rare": 3,
    "recipe_density": 0.3,
    "num_potions": 11
  },
  "ingredients": {
    "Grasland1c": {
      "biome": "Grasland",
      "rarity": "common",
      "name": "Steppewindkruid",
      "description": "Een dor kruid dat ritselt in de wind en zacht blijft ritselen, ook zonder wind."
    },
    "Grasland2c": {
      "biome": "Grasland",
      "rarity": "common",
      "name": "Gouden ochtendzongras",
      "description": "Gouden grassprieten die al voor zonsopkomst warm aanvoelen in de ochtend"
    },
    "Grasland3c": {
      "biome": "Grasland",
      "rarity": "common",
      "name": "Midzomerbloemenhoning",
      "description": "Te vinden in verlaten bijenkorven. De verhalen gaan dat van zo'n korf de bijen in fairies zijn veranderd."
    },
    "Grasland4c": {
      "biome": "Grasland",
      "rarity": "common",
      "name": "Sterrenklaver",
      "description": "Klaver met vijf zilveren blaadjes"
    },
    "Grasland5c": {
      "biome": "Grasland",
      "rarity": "common",
      "name": "Gezegende ochtenddauw",
      "description": "verschijnt alleen op gras dat nog nooit betreden is"
    },
    "Grasland6r": {
      "biome": "Grasland",
      "rarity": "rare",
      "name": "Paarse Wind",
      "description": "Lavendel die zo sterk van geur is dat het de wind lijkt te kleuren"
    },
    "Grasland7r": {
      "biome": "Grasland",
      "rarity": "rare",
      "name": "Zilver Maanbolsap",
      "description": "glanst als kwik"
    },
    "Grasland8r": {
      "biome": "Grasland",
      "rarity": "rare",
      "name": "Arcaan bronbeekwater",
      "description": "Kristalhelder water waarin licht op een vreemde manier wordt gebroken"
    },
    "Kust1c": {
      "biome": "Kust",
      "rarity": "common",
      "name": "Mystiek getijdenzout",
      "description": "Tien keer zo sterk van smaak als gewoon zout"
    },
    "Kust2c": {
      "biome": "Kust",
      "rarity": "common",
      "name": "Diepzee-sluieralgen",
      "description": "Glad en sterk als zijde. Eetbaar als sushiblad."
    },
    "Kust3c": {
      "biome": "Kust",
      "rarity": "common",
      "name": "Parelmoer brandingkalk",
      "description": "glinstert in alle kleuren wit"
    },
    "Kust4c": {
      "biome": "Kust",
      "rarity": "common",
      "name": "Zeelavendel",
      "description": "Geurt als echte lavendel en is zelfs boven water te ruiken"
    },
    "Kust5c": {
      "biome": "Kust",
      "rarity": "common",
      "name": "Springtijschuim",
      "description": "Alleen te vinden na springtij op magische plekken"
    },
    "Kust6r": {
      "biome": "Kust",
      "rarity": "rare",
      "name": "Spooklichtschelpen",
      "description": "zijn doorzichtig en lijken zelfs licht te versterken als je er doorheen kijkt"
    },
    "Kust7r": {
      "biome": "Kust",
      "rarity": "rare",
      "name": "Altijdglanzende Parels",
      "description": "geven daadwerkelijk licht, maar zijn zacht als bobaparels"
    },
    "Kust8r": {
      "biome": "Kust",
      "rarity": "rare",
      "name": "Onzichtbaar koraal",
      "description": "moeilijk te vinden en kwetsbaar"
    },
    "Bergen1c": {
      "biome": "Bergen",
      "rarity": "common",
      "name": "IJzerhars van rotsdennen",
      "description": "Donkere hars met een metaalachtige glans. Heeft de geur van natte steen en de smaak van bloed"
    },
    "Bergen2c": {
      "biome": "Bergen",
      "rarity": "common",
      "name": "Lawinekruid",
      "description": "groeit alleen op plekken waar recent lawines waren"
    },
    "Bergen3c": {
      "biome": "Bergen",
      "rarity": "common",
      "name": "Stormroos",
      "description": "doornen geven kleine schokjes"
    },
    "Bergen4c": {
      "biome": "Bergen",
      "rarity": "common",
      "name": "Glinsterend zilversparrensap",
      "description": "stroperig sap met zilverwitte schittering"
    },
    "Bergen5c": {
      "biome": "Bergen",
      "rarity": "common",
      "name": "Onweeralsem",
      "description": "donkere bladeren die naar regenlucht ruiken nog voor een storm arriveert"
    },
    "Bergen6r": {
      "biome": "Bergen",
      "rarity": "rare",
      "name": "Verdwaalde dennenaalden",
      "description": "wijzen altijd naar het noorden als ze in water vallen"
    },
    "Bergen7r": {
      "biome": "Bergen",
      "rarity": "rare",
      "name": "Eeuwigfonkelend Diamantzout",
      "description": "fonkelt in het donker"
    },
    "Bergen8r": {
      "biome": "Bergen",
      "rarity": "rare",
      "name": "Bliksemgeladen bergmunt",
      "description": "Tintelt scherp op de tong, als extreem koude lucht"
    },
    "Grot1c": {
      "biome": "Grot",
      "rarity": "common",
      "name": "Druipsteenwater",
      "description": "kalkrijk water met een frisse minerale smaak"
    },
    "Grot2c": {
      "biome": "Grot",
      "rarity": "common",
      "name": "Luminescente Koperzwam",
      "description": "bleke zwam die blauwgroen oplicht in vochtige grotten"
    },
    "Grot3c": {
      "biome": "Grot",
      "rarity": "common",
      "name": "Dieptegloeiende zoutkristallen",
      "description": "geven alleen licht op grote diepte"
    },
    "Grot4c": {
      "biome": "Grot",
      "rarity": "common",
      "name": "Sluimerend spelonkmos",
      "description": "beweegt langzaam alsof het ademt"
    },
    "Grot5c": {
      "biome": "Grot",
      "rarity": "common",
      "name": "Duisteralg",
      "description": "Lost op in het niets zodra deze alg in aanraking komt met licht"
    },
    "Grot6r": {
      "biome": "Grot",
      "rarity": "rare",
      "name": "Oerertsdoortrokken Boleet",
      "description": "Lijkt aders van zilver en goud te hebben"
    },
    "Grot7r": {
      "biome": "Grot",
      "rarity": "rare",
      "name": "Trilgevoelig Dieptemos",
      "description": "donker mos dat trilt bij de kleinste geluiden in de grot"
    },
    "Grot8r": {
      "biome": "Grot",
      "rarity": "rare",
      "name": "Eeuwige fluisterkristallen",
      "description": "Geven eindeloos zachte echo's af, ook in complete stilte"
    },
    "Moeras1c": {
      "biome": "Moeras",
      "rarity": "common",
      "name": "Moeras spirea",
      "description": "ruikt naar amandel"
    },
    "Moeras2c": {
      "biome": "Moeras",
      "rarity": "common",
      "name": "Mistveenschimmel",
      "description": "bleke penseelschimmel die damp afgeeft alsof hij voortdurend koude adem uitblaast"
    },
    "Moeras3c": {
      "biome": "Moeras",
      "rarity": "common",
      "name": "Schaduwglanzende moerasbessen",
      "description": "donker in het licht en licht in het donker"
    },
    "Moeras4c": {
      "biome": "Moeras",
      "rarity": "common",
      "name": "Nachtmistzwam",
      "description": "Verplaatst zich ongezien tijdens de nacht"
    },
    "Moeras5c": {
      "biome": "Moeras",
      "rarity": "common",
      "name": "Zilvertreurwilgenschors",
      "description": "verspreidt een rustgevende geur wanneer gekookt in water"
    },
    "Moeras6r": {
      "biome": "Moeras",
      "rarity": "rare",
      "name": "Zwarte Lotus",
      "description": "Onttrekt maanlicht aan de omgeving"
    },
    "Moeras7r": {
      "biome": "Moeras",
      "rarity": "rare",
      "name": "Vervlochten mistriet",
      "description": "rietpluimen die runes vormen bij het groeien"
    },
    "Moeras8r": {
      "biome": "Moeras",
      "rarity": "rare",
      "name": "Magiedoordrenkt Veenmos",
      "description": "lijkt de werking van spells te absorberen"
    },
    "Oerbos1c": {
      "biome": "Oerbos",
      "rarity": "common",
      "name": "Fluisterboomhars",
      "description": "Dempt geluiden in de omgeving"
    },
    "Oerbos2c": {
      "biome": "Oerbos",
      "rarity": "common",
      "name": "Fluoriserend maanblad",
      "description": "versterkt maanlicht"
    },
    "Oerbos3c": {
      "biome": "Oerbos",
      "rarity": "common",
      "name": "Gloeiwortelsap",
      "description": "Wortels die licht geven wanneer ze worden opgegraven. Opengesneden geven ze een dik, amberkleurig, zoet sap"
    },
    "Oerbos4c": {
      "biome": "Oerbos",
      "rarity": "common",
      "name": "Betoverd dauwmos",
      "description": "Groeit zelfs zonder bron van water door."
    },
    "Oerbos5c": {
      "biome": "Oerbos",
      "rarity": "common",
      "name": "Maanlichtverrijkte Wilgenbladeren",
      "description": "zilveren nerven zijn zichtbaar na volle maan"
    },
    "Oerbos6r": {
      "biome": "Oerbos",
      "rarity": "rare",
      "name": "Nachtbloeiende Bosanemoon",
      "description": "opent zich alleen in volledige duisternis zonder maanlicht"
    },
    "Oerbos7r": {
      "biome": "Oerbos",
      "rarity": "rare",
      "name": "Smaragdgroene sterrenvaren",
      "description": "varenpunten lijken op kleine sterren in het maanlicht"
    },
    "Oerbos8r": {
      "biome": "Oerbos",
      "rarity": "rare",
      "name": "Droomklaproos",
      "description": "ruikt zeer zoet en zwaar vlak voor zonsopkomst"
    },
    "Woestijn1c": {
      "biome": "Woestijn",
      "rarity": "common",
      "name": "Zonverschroeid saffraanstof",
      "description": "Rood poeder dat vloeistoffen goud kleurt"
    },
    "Woestijn2c": {
      "biome": "Woestijn",
      "rarity": "common",
      "name": "Avondgloed-palm bladeren",
      "description": "Licht doorzichtige bladeren met een warme amberkleurige gloed"
    },
    "Woestijn3c": {
      "biome": "Woestijn",
      "rarity": "common",
      "name": "Oasedauw",
      "description": "alleen te vinden in bloemen die 's nachts open zijn en voor de dageraad dicht gaan"
    },
    "Woestijn4c": {
      "biome": "Woestijn",
      "rarity": "common",
      "name": "Zandstormkristal",
      "description": "Glinstert als een regenboog en ontstaat alleen na zandstormen. Een breekbaar mineraal dat verpulvert tot regenboogkleurig stof dat zoet smaakt."
    },
    "Woestijn5c": {
      "biome": "Woestijn",
      "rarity": "common",
      "name": "Versteend Dadelpalmschors",
      "description": "Heeft een kaneelachtige smaak wanneer het tot poeder wordt gemalen"
    },
    "Woestijn6r": {
      "biome": "Woestijn",
      "rarity": "rare",
      "name": "Zelfontvlammende Cactusbloesem-as",
      "description": "Alleen te vinden direct nadat deze bloemen spontaan ontbranden na het bloeien"
    },
    "Woestijn7r": {
      "biome": "Woestijn",
      "rarity": "rare",
      "name": "Vuurbestendig Jojobahars",
      "description": "blijft koel zelfs tussen gloeiende kolen"
    },
    "Woestijn8r": {
      "biome": "Woestijn",
      "rarity": "rare",
      "name": "Onverdampbaar oasewater",
      "description": "veel meer dorstlessend dan gewoon water"
    },
    "Poolgebied1c": {
      "biome": "Poolgebied",
      "rarity": "common",
      "name": "Sneeuwwit ijsmos",
      "description": "Groeit als een plant, maar smelt in zijn geheel"
    },
    "Poolgebied2c": {
      "biome": "Poolgebied",
      "rarity": "common",
      "name": "Maanglansgevangen poolzout",
      "description": "Zoutvlokken die alleen ontstaan tijdens poolnachten waarin maanlicht op vers zee-ijs wordt weerkaatst"
    },
    "Poolgebied3c": {
      "biome": "Poolgebied",
      "rarity": "common",
      "name": "Onbevriesbaar bronwater",
      "description": "Welt op uit warme aders diep onder het ijs en blijft zelfs in sneeuwstormen vloeibaar"
    },
    "Poolgebied4c": {
      "biome": "Poolgebied",
      "rarity": "common",
      "name": "Vorsthars van oude ijsdennen",
      "description": "Helderblauwe hars die warm is als het koud is en koud als het warm is"
    },
    "Poolgebied5c": {
      "biome": "Poolgebied",
      "rarity": "common",
      "name": "Hemelglans Sneeuwbloemen",
      "description": "openen hun bloemblaadjes alleen onder sterrenlicht"
    },
    "Poolgebied6r": {
      "biome": "Poolgebied",
      "rarity": "rare",
      "name": "Bevroren Noorderlichtdauw",
      "description": "dauwdruppels die het noorderlicht lijken vast te houden als kleurige slierten"
    },
    "Poolgebied7r": {
      "biome": "Poolgebied",
      "rarity": "rare",
      "name": "Altijdbevroren Gletsjer-ijs",
      "description": "eeuwenoud ijs dat zelfs boven vuur nauwelijks smelt"
    },
    "Poolgebied8r": {
      "biome": "Poolgebied",
      "rarity": "rare",
      "name": "Etherische aurora-kristallen",
      "description": "Flinterdunne mineraalschilfers die als suiker op de tong oplossen"
    }
  },
  "recipes": {
    "Poolgebied1c+Poolgebied3c": {
      "potion": "Potion_11",
      "description": "the next time you take elemental damage, half that damage. lasts 1 minute or until used",
      "fresh": "Sneeuwwit ijsmos",
      "catalyst": "Onbevriesbaar bronwater"
    },
    "Poolgebied1c+Poolgebied5c": {
      "potion": "Potion_4",
      "description": "this turn, if you didn't move, the next level 1 spell you cast counts as upcasted by 1 more level. lasts 1 minute or until used",
      "fresh": "Sneeuwwit ijsmos",
      "catalyst": "Hemelglans Sneeuwbloemen"
    },
    "Poolgebied1c+Poolgebied8r": {
      "potion": "Potion_5",
      "description": "healing equal to your medicine skill",
      "fresh": "Sneeuwwit ijsmos",
      "catalyst": "Etherische aurora-kristallen"
    },
    "Poolgebied1c+Bergen5c": {
      "potion": "Potion_8",
      "description": "the next AoO against you has disadvantage. lasts 1 minute or until used",
      "fresh": "Sneeuwwit ijsmos",
      "catalyst": "Onweeralsem"
    },
    "Poolgebied1c+Bergen6r": {
      "potion": "Potion_2",
      "description": "this turn, take a cunning action (dash, disengage or hide)",
      "fresh": "Sneeuwwit ijsmos",
      "catalyst": "Verdwaalde dennenaalden"
    },
    "Poolgebied1c+Grasland2c": {
      "potion": "Potion_11",
      "description": "the next time you take elemental damage, half that damage. lasts 1 minute or until used",
      "fresh": "Sneeuwwit ijsmos",
      "catalyst": "Gouden ochtendzongras"
    },
    "Poolgebied1c+Grasland5c": {
      "potion": "Potion_5",
      "description": "healing equal to your medicine skill",
      "fresh": "Sneeuwwit ijsmos",
      "catalyst": "Gezegende ochtenddauw"
    },
    "Poolgebied1c+Grot3c": {
      "potion": "Potion_8",
      "description": "the next AoO against you has disadvantage. lasts 1 minute or until used",
      "fresh": "Sneeuwwit ijsmos",
      "catalyst": "Dieptegloeiende zoutkristallen"
    },
    "Poolgebied1c+Grot4c": {
      "potion": "Potion_3",
      "description": "this turn, if you didn't move, advantage on one attack",
      "fresh": "Sneeuwwit ijsmos",
      "catalyst": "Sluimerend spelonkmos"
    },
    "Poolgebied1c+Grot6r": {
      "potion": "Potion_5",
      "description": "healing equal to your medicine skill",
      "fresh": "Sneeuwwit ijsmos",
      "catalyst": "Oerertsdoortrokken Boleet"
    },
    "Poolgebied1c+Kust1c": {
      "potion": "Potion_9",
      "description": "+1d4 on you next save. lasts 1 minute or until used",
      "fresh": "Sneeuwwit ijsmos",
      "catalyst": "Mystiek getijdenzout"
    },
    "Poolgebied1c+Kust8r": {
      "potion": "Potion_4",
      "description": "this turn, if you didn't move, the next level 1 spell you cast counts as upcasted by 1 more level. lasts 1 minute or until used",
      "fresh": "Sneeuwwit ijsmos",
      "catalyst": "Onzichtbaar koraal"
    },
    "Poolgebied1c+Moeras2c": {
      "potion": "Potion_4",
      "description": "this turn, if you didn't move, the next level 1 spell you cast counts as upcasted by 1 more level. lasts 1 minute or until used",
      "fresh": "Sneeuwwit ijsmos",
      "catalyst": "Mistveenschimmel"
    },
    "Poolgebied1c+Moeras5c": {
      "potion": "Potion_2",
      "description": "this turn, take a cunning action (dash, disengage or hide)",
      "fresh": "Sneeuwwit ijsmos",
      "catalyst": "Zilvertreurwilgenschors"
    },
    "Poolgebied1c+Moeras7r": {
      "potion": "Potion_8",
      "description": "the next AoO against you has disadvantage. lasts 1 minute or until used",
      "fresh": "Sneeuwwit ijsmos",
      "catalyst": "Vervlochten mistriet"
    },
    "Poolgebied1c+Oerbos2c": {
      "potion": "Potion_2",
      "description": "this turn, take a cunning action (dash, disengage or hide)",
      "fresh": "Sneeuwwit ijsmos",
      "catalyst": "Fluoriserend maanblad"
    },
    "Poolgebied1c+Oerbos3c": {
      "potion": "Potion_9",
      "description": "+1d4 on you next save. lasts 1 minute or until used",
      "fresh": "Sneeuwwit ijsmos",
      "catalyst": "Gloeiwortelsap"
    },
    "Poolgebied1c+Oerbos4c": {
      "potion": "Potion_5",
      "description": "healing equal to your medicine skill",
      "fresh": "Sneeuwwit ijsmos",
      "catalyst": "Betoverd dauwmos"
    },
    "Poolgebied1c+Oerbos5c": {
      "potion": "Potion_4",
      "description": "this turn, if you didn't move, the next level 1 spell you cast counts as upcasted by 1 more level. lasts 1 minute or until used",
      "fresh": "Sneeuwwit ijsmos",
      "catalyst": "Maanlichtverrijkte Wilgenbladeren"
    },
    "Poolgebied1c+Oerbos7r": {
      "potion": "Potion_1",
      "description": "this turn, your speed increases by 10 feet and difficult terrain doesn't cost you extra movement",
      "fresh": "Sneeuwwit ijsmos",
      "catalyst": "Smaragdgroene sterrenvaren"
    },
    "Poolgebied1c+Woestijn3c": {
      "potion": "Potion_8",
      "description": "the next AoO against you has disadvantage. lasts 1 minute or until used",
      "fresh": "Sneeuwwit ijsmos",
      "catalyst": "Oasedauw"
    },
    "Poolgebied2c+Poolgebied4c": {
      "potion": "Potion_3",
      "description": "this turn, if you didn't move, advantage on one attack",
      "fresh": "Maanglansgevangen poolzout",
      "catalyst": "Vorsthars van oude ijsdennen"
    },
    "Poolgebied2c+Poolgebied5c": {
      "potion": "Potion_11",
      "description": "the next time you take elemental damage, half that damage. lasts 1 minute or until used",
      "fresh": "Maanglansgevangen poolzout",
      "catalyst": "Hemelglans Sneeuwbloemen"
    },
    "Poolgebied2c+Poolgebied6r": {
      "potion": "Potion_6",
      "description": "for a minute, advantage on all atlethics and acrobatics rolls",
      "fresh": "Maanglansgevangen poolzout",
      "catalyst": "Bevroren Noorderlichtdauw"
    },
    "Poolgebied2c+Bergen3c": {
      "potion": "Potion_10",
      "description": "+1d4 acid damage on your next hit with attack or single target spell that deals damage. if proficient with alchemist supplies, add proficiency as well. lasts 1 minute or until used",
      "fresh": "Maanglansgevangen poolzout",
      "catalyst": "Stormroos"
    },
    "Poolgebied2c+Bergen4c": {
      "potion": "Potion_1",
      "description": "this turn, your speed increases by 10 feet and difficult terrain doesn't cost you extra movement",
      "fresh": "Maanglansgevangen poolzout",
      "catalyst": "Glinsterend zilversparrensap"
    },
    "Poolgebied2c+Bergen5c": {
      "potion": "Potion_10",
      "description": "+1d4 acid damage on your next hit with attack or single target spell that deals damage. if proficient with alchemist supplies, add proficiency as well. lasts 1 minute or until used",
      "fresh": "Maanglansgevangen poolzout",
      "catalyst": "Onweeralsem"
    },
    "Poolgebied2c+Bergen7r": {
      "potion": "Potion_7",
      "description": "medicine temp HP. lasts 1 minute",
      "fresh": "Maanglansgevangen poolzout",
      "catalyst": "Eeuwigfonkelend Diamantzout"
    },
    "Poolgebied2c+Grasland2c": {
      "potion": "Potion_6",
      "description": "for a minute, advantage on all atlethics and acrobatics rolls",
      "fresh": "Maanglansgevangen poolzout",
      "catalyst": "Gouden ochtendzongras"
    },
    "Poolgebied2c+Grot6r": {
      "potion": "Potion_7",
      "description": "medicine temp HP. lasts 1 minute",
      "fresh": "Maanglansgevangen poolzout",
      "catalyst": "Oerertsdoortrokken Boleet"
    },
    "Poolgebied2c+Grot7r": {
      "potion": "Potion_2",
      "description": "this turn, take a cunning action (dash, disengage or hide)",
      "fresh": "Maanglansgevangen poolzout",
      "catalyst": "Trilgevoelig Dieptemos"
    },
    "Poolgebied2c+Kust3c": {
      "potion": "Potion_4",
      "description": "this turn, if you didn't move, the next level 1 spell you cast counts as upcasted by 1 more level. lasts 1 minute or until used",
      "fresh": "Maanglansgevangen poolzout",
      "catalyst": "Parelmoer brandingkalk"
    },
    "Poolgebied2c+Kust4c": {
      "potion": "Potion_7",
      "description": "medicine temp HP. lasts 1 minute",
      "fresh": "Maanglansgevangen poolzout",
      "catalyst": "Zeelavendel"
    },
    "Poolgebied2c+Moeras4c": {
      "potion": "Potion_5",
      "description": "healing equal to your medicine skill",
      "fresh": "Maanglansgevangen poolzout",
      "catalyst": "Nachtmistzwam"
    },
    "Poolgebied2c+Moeras5c": {
      "potion": "Potion_5",
      "description": "healing equal to your medicine skill",
      "fresh": "Maanglansgevangen poolzout",
      "catalyst": "Zilvertreurwilgenschors"
    },
    "Poolgebied2c+Moeras6r": {
      "potion": "Potion_1",
      "description": "this turn, your speed increases by 10 feet and difficult terrain doesn't cost you extra movement",
      "fresh": "Maanglansgevangen poolzout",
      "catalyst": "Zwarte Lotus"
    },
    "Poolgebied2c+Moeras8r": {
      "potion": "Potion_10",
      "description": "+1d4 acid damage on your next hit with attack or single target spell that deals damage. if proficient with alchemist supplies, add proficiency as well. lasts 1 minute or until used",
      "fresh": "Maanglansgevangen poolzout",
      "catalyst": "Magiedoordrenkt Veenmos"
    },
    "Poolgebied2c+Oerbos1c": {
      "potion": "Potion_5",
      "description": "healing equal to your medicine skill",
      "fresh": "Maanglansgevangen poolzout",
      "catalyst": "Fluisterboomhars"
    },
    "Poolgebied2c+Oerbos4c": {
      "potion": "Potion_4",
      "description": "this turn, if you didn't move, the next level 1 spell you cast counts as upcasted by 1 more level. lasts 1 minute or until used",
      "fresh": "Maanglansgevangen poolzout",
      "catalyst": "Betoverd dauwmos"
    },
    "Poolgebied2c+Oerbos5c": {
      "potion": "Potion_2",
      "description": "this turn, take a cunning action (dash, disengage or hide)",
      "fresh": "Maanglansgevangen poolzout",
      "catalyst": "Maanlichtverrijkte Wilgenbladeren"
    },
    "Poolgebied2c+Oerbos6r": {
      "potion": "Potion_7",
      "description": "medicine temp HP. lasts 1 minute",
      "fresh": "Maanglansgevangen poolzout",
      "catalyst": "Nachtbloeiende Bosanemoon"
    },
    "Poolgebied2c+Oerbos8r": {
      "potion": "Potion_11",
      "description": "the next time you take elemental damage, half that damage. lasts 1 minute or until used",
      "fresh": "Maanglansgevangen poolzout",
      "catalyst": "Droomklaproos"
    },
    "Poolgebied2c+Woestijn1c": {
      "potion": "Potion_5",
      "description": "healing equal to your medicine skill",
      "fresh": "Maanglansgevangen poolzout",
      "catalyst": "Zonverschroeid saffraanstof"
    },
    "Poolgebied2c+Woestijn8r": {
      "potion": "Potion_6",
      "description": "for a minute, advantage on all atlethics and acrobatics rolls",
      "fresh": "Maanglansgevangen poolzout",
      "catalyst": "Onverdampbaar oasewater"
    },
    "Poolgebied3c+Poolgebied4c": {
      "potion": "Potion_2",
      "description": "this turn, take a cunning action (dash, disengage or hide)",
      "fresh": "Onbevriesbaar bronwater",
      "catalyst": "Vorsthars van oude ijsdennen"
    },
    "Poolgebied3c+Bergen2c": {
      "potion": "Potion_4",
      "description": "this turn, if you didn't move, the next level 1 spell you cast counts as upcasted by 1 more level. lasts 1 minute or until used",
      "fresh": "Onbevriesbaar bronwater",
      "catalyst": "Lawinekruid"
    },
    "Poolgebied3c+Bergen6r": {
      "potion": "Potion_8",
      "description": "the next AoO against you has disadvantage. lasts 1 minute or until used",
      "fresh": "Onbevriesbaar bronwater",
      "catalyst": "Verdwaalde dennenaalden"
    },
    "Poolgebied3c+Grasland4c": {
      "potion": "Potion_10",
      "description": "+1d4 acid damage on your next hit with attack or single target spell that deals damage. if proficient with alchemist supplies, add proficiency as well. lasts 1 minute or until used",
      "fresh": "Onbevriesbaar bronwater",
      "catalyst": "Sterrenklaver"
    },
    "Poolgebied3c+Grasland5c": {
      "potion": "Potion_6",
      "description": "for a minute, advantage on all atlethics and acrobatics rolls",
      "fresh": "Onbevriesbaar bronwater",
      "catalyst": "Gezegende ochtenddauw"
    },
    "Poolgebied3c+Grasland8r": {
      "potion": "Potion_11",
      "description": "the next time you take elemental damage, half that damage. lasts 1 minute or until used",
      "fresh": "Onbevriesbaar bronwater",
      "catalyst": "Arcaan bronbeekwater"
    },
    "Poolgebied3c+Grot1c": {
      "potion": "Potion_8",
      "description": "the next AoO against you has disadvantage. lasts 1 minute or until used",
      "fresh": "Onbevriesbaar bronwater",
      "catalyst": "Druipsteenwater"
    },
    "Poolgebied3c+Kust6r": {
      "potion": "Potion_6",
      "description": "for a minute, advantage on all atlethics and acrobatics rolls",
      "fresh": "Onbevriesbaar bronwater",
      "catalyst": "Spooklichtschelpen"
    },
    "Poolgebied3c+Kust7r": {
      "potion": "Potion_8",
      "description": "the next AoO against you has disadvantage. lasts 1 minute or until used",
      "fresh": "Onbevriesbaar bronwater",
      "catalyst": "Altijdglanzende Parels"
    },
    "Poolgebied3c+Moeras2c": {
      "potion": "Potion_7",
      "description": "medicine temp HP. lasts 1 minute",
      "fresh": "Onbevriesbaar bronwater",
      "catalyst": "Mistveenschimmel"
    },
    "Poolgebied3c+Moeras3c": {
      "potion": "Potion_5",
      "description": "healing equal to your medicine skill",
      "fresh": "Onbevriesbaar bronwater",
      "catalyst": "Schaduwglanzende moerasbessen"
    },
    "Poolgebied3c+Moeras8r": {
      "potion": "Potion_4",
      "description": "this turn, if you didn't move, the next level 1 spell you cast counts as upcasted by 1 more level. lasts 1 minute or until used",
      "fresh": "Onbevriesbaar bronwater",
      "catalyst": "Magiedoordrenkt Veenmos"
    },
    "Poolgebied3c+Oerbos2c": {
      "potion": "Potion_5",
      "description": "healing equal to your medicine skill",
      "fresh": "Onbevriesbaar bronwater",
      "catalyst": "Fluoriserend maanblad"
    },
    "Poolgebied3c+Oerbos4c": {
      "potion": "Potion_9",
      "description": "+1d4 on you next save. lasts 1 minute or until used",
      "fresh": "Onbevriesbaar bronwater",
      "catalyst": "Betoverd dauwmos"
    },
    "Poolgebied3c+Oerbos7r": {
      "potion": "Potion_8",
      "description": "the next AoO against you has disadvantage. lasts 1 minute or until used",
      "fresh": "Onbevriesbaar bronwater",
      "catalyst": "Smaragdgroene sterrenvaren"
    },
    "Poolgebied3c+Oerbos8r": {
      "potion": "Potion_7",
      "description": "medicine temp HP. lasts 1 minute",
      "fresh": "Onbevriesbaar bronwater",
      "catalyst": "Droomklaproos"
    },
    "Poolgebied4c+Bergen5c": {
      "potion": "Potion_9",
      "description": "+1d4 on you next save. lasts 1 minute or until used",
      "fresh": "Vorsthars van oude ijsdennen",
      "catalyst": "Onweeralsem"
    },
    "Poolgebied4c+Bergen6r": {
      "potion": "Potion_3",
      "description": "this turn, if you didn't move, advantage on one attack",
      "fresh": "Vorsthars van oude ijsdennen",
      "catalyst": "Verdwaalde dennenaalden"
    },
    "Poolgebied4c+Grasland4c": {
      "potion": "Potion_4",
      "description": "this turn, if you didn't move, the next level 1 spell you cast counts as upcasted by 1 more level. lasts 1 minute or until used",
      "fresh": "Vorsthars van oude ijsdennen",
      "catalyst": "Sterrenklaver"
    },
    "Poolgebied4c+Grasland5c": {
      "potion": "Potion_3",
      "description": "this turn, if you didn't move, advantage on one attack",
      "fresh": "Vorsthars van oude ijsdennen",
      "catalyst": "Gezegende ochtenddauw"
    },
    "Poolgebied4c+Grot5c": {
      "potion": "Potion_1",
      "description": "this turn, your speed increases by 10 feet and difficult terrain doesn't cost you extra movement",
      "fresh": "Vorsthars van oude ijsdennen",
      "catalyst": "Duisteralg"
    },
    "Poolgebied4c+Grot8r": {
      "potion": "Potion_9",
      "description": "+1d4 on you next save. lasts 1 minute or until used",
      "fresh": "Vorsthars van oude ijsdennen",
      "catalyst": "Eeuwige fluisterkristallen"
    },
    "Poolgebied4c+Kust2c": {
      "potion": "Potion_5",
      "description": "healing equal to your medicine skill",
      "fresh": "Vorsthars van oude ijsdennen",
      "catalyst": "Diepzee-sluieralgen"
    },
    "Poolgebied4c+Kust4c": {
      "potion": "Potion_5",
      "description": "healing equal to your medicine skill",
      "fresh": "Vorsthars van oude ijsdennen",
      "catalyst": "Zeelavendel"
    },
    "Poolgebied4c+Moeras3c": {
      "potion": "Potion_10",
      "description": "+1d4 acid damage on your next hit with attack or single target spell that deals damage. if proficient with alchemist supplies, add proficiency as well. lasts 1 minute or until used",
      "fresh": "Vorsthars van oude ijsdennen",
      "catalyst": "Schaduwglanzende moerasbessen"
    },
    "Poolgebied4c+Moeras7r": {
      "potion": "Potion_7",
      "description": "medicine temp HP. lasts 1 minute",
      "fresh": "Vorsthars van oude ijsdennen",
      "catalyst": "Vervlochten mistriet"
    },
    "Poolgebied4c+Oerbos5c": {
      "potion": "Potion_1",
      "description": "this turn, your speed increases by 10 feet and difficult terrain doesn't cost you extra movement",
      "fresh": "Vorsthars van oude ijsdennen",
      "catalyst": "Maanlichtverrijkte Wilgenbladeren"
    },
    "Poolgebied4c+Woestijn3c": {
      "potion": "Potion_10",
      "description": "+1d4 acid damage on your next hit with attack or single target spell that deals damage. if proficient with alchemist supplies, add proficiency as well. lasts 1 minute or until used",
      "fresh": "Vorsthars van oude ijsdennen",
      "catalyst": "Oasedauw"
    },
    "Poolgebied4c+Woestijn4c": {
      "potion": "Potion_6",
      "description": "for a minute, advantage on all atlethics and acrobatics rolls",
      "fresh": "Vorsthars van oude ijsdennen",
      "catalyst": "Zandstormkristal"
    },
    "Poolgebied4c+Woestijn5c": {
      "potion": "Potion_1",
      "description": "this turn, your speed increases by 10 feet and difficult terrain doesn't cost you extra movement",
      "fresh": "Vorsthars van oude ijsdennen",
      "catalyst": "Versteend Dadelpalmschors"
    },
    "Poolgebied4c+Woestijn8r": {
      "potion": "Potion_6",
      "description": "for a minute, advantage on all atlethics and acrobatics rolls",
      "fresh": "Vorsthars van oude ijsdennen",
      "catalyst": "Onverdampbaar oasewater"
    },
    "Poolgebied5c+Poolgebied8r": {
      "potion": "Potion_1",
      "description": "this turn, your speed increases by 10 feet and difficult terrain doesn't cost you extra movement",
      "fresh": "Hemelglans Sneeuwbloemen",
      "catalyst": "Etherische aurora-kristallen"
    },
    "Poolgebied5c+Bergen3c": {
      "potion": "Potion_9",
      "description": "+1d4 on you next save. lasts 1 minute or until used",
      "fresh": "Hemelglans Sneeuwbloemen",
      "catalyst": "Stormroos"
    },
    "Poolgebied5c+Bergen5c": {
      "potion": "Potion_5",
      "description": "healing equal to your medicine skill",
      "fresh": "Hemelglans Sneeuwbloemen",
      "catalyst": "Onweeralsem"
    },
    "Poolgebied5c+Bergen7r": {
      "potion": "Potion_1",
      "description": "this turn, your speed increases by 10 feet and difficult terrain doesn't cost you extra movement",
      "fresh": "Hemelglans Sneeuwbloemen",
      "catalyst": "Eeuwigfonkelend Diamantzout"
    },
    "Poolgebied5c+Grasland2c": {
      "potion": "Potion_2",
      "description": "this turn, take a cunning action (dash, disengage or hide)",
      "fresh": "Hemelglans Sneeuwbloemen",
      "catalyst": "Gouden ochtendzongras"
    },
    "Poolgebied5c+Grasland7r": {
      "potion": "Potion_2",
      "description": "this turn, take a cunning action (dash, disengage or hide)",
      "fresh": "Hemelglans Sneeuwbloemen",
      "catalyst": "Zilver Maanbolsap"
    },
    "Poolgebied5c+Grot5c": {
      "potion": "Potion_9",
      "description": "+1d4 on you next save. lasts 1 minute or until used",
      "fresh": "Hemelglans Sneeuwbloemen",
      "catalyst": "Duisteralg"
    },
    "Poolgebied5c+Grot7r": {
      "potion": "Potion_8",
      "description": "the next AoO against you has disadvantage. lasts 1 minute or until used",
      "fresh": "Hemelglans Sneeuwbloemen",
      "catalyst": "Trilgevoelig Dieptemos"
    },
    "Poolgebied5c+Kust2c": {
      "potion": "Potion_8",
      "description": "the next AoO against you has disadvantage. lasts 1 minute or until used",
      "fresh": "Hemelglans Sneeuwbloemen",
      "catalyst": "Diepzee-sluieralgen"
    },
    "Poolgebied5c+Kust5c": {
      "potion": "Potion_4",
      "description": "this turn, if you didn't move, the next level 1 spell you cast counts as upcasted by 1 more level. lasts 1 minute or until used",
      "fresh": "Hemelglans Sneeuwbloemen",
      "catalyst": "Springtijschuim"
    },
    "Poolgebied5c+Moeras1c": {
      "potion": "Potion_9",
      "description": "+1d4 on you next save. lasts 1 minute or until used",
      "fresh": "Hemelglans Sneeuwbloemen",
      "catalyst": "Moeras spirea"
    },
    "Poolgebied5c+Moeras3c": {
      "potion": "Potion_3",
      "description": "this turn, if you didn't move, advantage on one attack",
      "fresh": "Hemelglans Sneeuwbloemen",
      "catalyst": "Schaduwglanzende moerasbessen"
    },
    "Poolgebied5c+Moeras4c": {
      "potion": "Potion_8",
      "description": "the next AoO against you has disadvantage. lasts 1 minute or until used",
      "fresh": "Hemelglans Sneeuwbloemen",
      "catalyst": "Nachtmistzwam"
    },
    "Poolgebied5c+Moeras5c": {
      "potion": "Potion_10",
      "description": "+1d4 acid damage on your next hit with attack or single target spell that deals damage. if proficient with alchemist supplies, add proficiency as well. lasts 1 minute or until used",
      "fresh": "Hemelglans Sneeuwbloemen",
      "catalyst": "Zilvertreurwilgenschors"
    },
    "Poolgebied5c+Oerbos2c": {
      "potion": "Potion_4",
      "description": "this turn, if you didn't move, the next level 1 spell you cast counts as upcasted by 1 more level. lasts 1 minute or until used",
      "fresh": "Hemelglans Sneeuwbloemen",
      "catalyst": "Fluoriserend maanblad"
    },
    "Poolgebied5c+Oerbos5c": {
      "potion": "Potion_9",
      "description": "+1d4 on you next save. lasts 1 minute or until used",
      "fresh": "Hemelglans Sneeuwbloemen",
      "catalyst": "Maanlichtverrijkte Wilgenbladeren"
    },
    "Poolgebied5c+Oerbos6r": {
      "potion": "Potion_5",
      "description": "healing equal to your medicine skill",
      "fresh": "Hemelglans Sneeuwbloemen",
      "catalyst": "Nachtbloeiende Bosanemoon"
    },
    "Poolgebied5c+Woestijn2c": {
      "potion": "Potion_6",
      "description": "for a minute, advantage on all atlethics and acrobatics rolls",
      "fresh": "Hemelglans Sneeuwbloemen",
      "catalyst": "Avondgloed-palm bladeren"
    },
    "Poolgebied5c+Woestijn3c": {
      "potion": "Potion_3",
      "description": "this turn, if you didn't move, advantage on one attack",
      "fresh": "Hemelglans Sneeuwbloemen",
      "catalyst": "Oasedauw"
    },
    "Poolgebied5c+Woestijn7r": {
      "potion": "Potion_7",
      "description": "medicine temp HP. lasts 1 minute",
      "fresh": "Hemelglans Sneeuwbloemen",
      "catalyst": "Vuurbestendig Jojobahars"
    },
    "Poolgebied6r+Poolgebied7r": {
      "potion": "Potion_22",
      "description": "for fire, cold, electric, acid and sonic each, the next time you take damage of that type, half that damage. lasts 1 minute or until used",
      "fresh": "Bevroren Noorderlichtdauw",
      "catalyst": "Altijdbevroren Gletsjer-ijs"
    },
    "Poolgebied6r+Bergen3c": {
      "potion": "Potion_7",
      "description": "medicine temp HP. lasts 1 minute",
      "fresh": "Bevroren Noorderlichtdauw",
      "catalyst": "Stormroos"
    },
    "Poolgebied6r+Bergen4c": {
      "potion": "Potion_5",
      "description": "healing equal to your medicine skill",
      "fresh": "Bevroren Noorderlichtdauw",
      "catalyst": "Glinsterend zilversparrensap"
    },
    "Poolgebied6r+Grasland3c": {
      "potion": "Potion_10",
      "description": "+1d4 acid damage on your next hit with attack or single target spell that deals damage. if proficient with alchemist supplies, add proficiency as well. lasts 1 minute or until used",
      "fresh": "Bevroren Noorderlichtdauw",
      "catalyst": "Midzomerbloemenhoning"
    },
    "Poolgebied6r+Grasland6r": {
      "potion": "Potion_22",
      "description": "for fire, cold, electric, acid and sonic each, the next time you take damage of that type, half that damage. lasts 1 minute or until used",
      "fresh": "Bevroren Noorderlichtdauw",
      "catalyst": "Paarse Wind"
    },
    "Poolgebied6r+Kust3c": {
      "potion": "Potion_5",
      "description": "healing equal to your medicine skill",
      "fresh": "Bevroren Noorderlichtdauw",
      "catalyst": "Parelmoer brandingkalk"
    },
    "Poolgebied6r+Kust7r": {
      "potion": "Potion_21",
      "description": "+2d4 acid damage on your next hit with an attack or single target spell that deals damage. if proficient with alchemist supplies, add proficiency as well. lasts 1 minute or until used",
      "fresh": "Bevroren Noorderlichtdauw",
      "catalyst": "Altijdglanzende Parels"
    },
    "Poolgebied6r+Kust8r": {
      "potion": "Potion_16",
      "description": "healing equal to 2d4 + your medicine skill",
      "fresh": "Bevroren Noorderlichtdauw",
      "catalyst": "Onzichtbaar koraal"
    },
    "Poolgebied6r+Moeras1c": {
      "potion": "Potion_5",
      "description": "healing equal to your medicine skill",
      "fresh": "Bevroren Noorderlichtdauw",
      "catalyst": "Moeras spirea"
    },
    "Poolgebied6r+Moeras4c": {
      "potion": "Potion_2",
      "description": "this turn, take a cunning action (dash, disengage or hide)",
      "fresh": "Bevroren Noorderlichtdauw",
      "catalyst": "Nachtmistzwam"
    },
    "Poolgebied6r+Oerbos1c": {
      "potion": "Potion_1",
      "description": "this turn, your speed increases by 10 feet and difficult terrain doesn't cost you extra movement",
      "fresh": "Bevroren Noorderlichtdauw",
      "catalyst": "Fluisterboomhars"
    },
    "Poolgebied6r+Oerbos5c": {
      "potion": "Potion_7",
      "description": "medicine temp HP. lasts 1 minute",
      "fresh": "Bevroren Noorderlichtdauw",
      "catalyst": "Maanlichtverrijkte Wilgenbladeren"
    },
    "Poolgebied6r+Oerbos7r": {
      "potion": "Potion_13",
      "description": "this turn, take two cunning actions (dash, disengage or hide)",
      "fresh": "Bevroren Noorderlichtdauw",
      "catalyst": "Smaragdgroene sterrenvaren"
    },
    "Poolgebied6r+Woestijn4c": {
      "potion": "Potion_5",
      "description": "healing equal to your medicine skill",
      "fresh": "Bevroren Noorderlichtdauw",
      "catalyst": "Zandstormkristal"
    },
    "Poolgebied6r+Woestijn5c": {
      "potion": "Potion_10",
      "description": "+1d4 acid damage on your next hit with attack or single target spell that deals damage. if proficient with alchemist supplies, add proficiency as well. lasts 1 minute or until used",
      "fresh": "Bevroren Noorderlichtdauw",
      "catalyst": "Versteend Dadelpalmschors"
    },
    "Poolgebied6r+Woestijn7r": {
      "potion": "Potion_14",
      "description": "this turn, if you didn't move, advantage on one attack. crit on 19-20",
      "fresh": "Bevroren Noorderlichtdauw",
      "catalyst": "Vuurbestendig Jojobahars"
    },
    "Poolgebied7r+Bergen4c": {
      "potion": "Potion_1",
      "description": "this turn, your speed increases by 10 feet and difficult terrain doesn't cost you extra movement",
      "fresh": "Altijdbevroren Gletsjer-ijs",
      "catalyst": "Glinsterend zilversparrensap"
    },
    "Poolgebied7r+Grasland4c": {
      "potion": "Potion_8",
      "description": "the next AoO against you has disadvantage. lasts 1 minute or until used",
      "fresh": "Altijdbevroren Gletsjer-ijs",
      "catalyst": "Sterrenklaver"
    },
    "Poolgebied7r+Grot6r": {
      "potion": "Potion_16",
      "description": "healing equal to 2d4 + your medicine skill",
      "fresh": "Altijdbevroren Gletsjer-ijs",
      "catalyst": "Oerertsdoortrokken Boleet"
    },
    "Poolgebied7r+Moeras8r": {
      "potion": "Potion_22",
      "description": "for fire, cold, electric, acid and sonic each, the next time you take damage of that type, half that damage. lasts 1 minute or until used",
      "fresh": "Altijdbevroren Gletsjer-ijs",
      "catalyst": "Magiedoordrenkt Veenmos"
    },
    "Poolgebied7r+Oerbos1c": {
      "potion": "Potion_11",
      "description": "the next time you take elemental damage, half that damage. lasts 1 minute or until used",
      "fresh": "Altijdbevroren Gletsjer-ijs",
      "catalyst": "Fluisterboomhars"
    },
    "Poolgebied7r+Oerbos4c": {
      "potion": "Potion_10",
      "description": "+1d4 acid damage on your next hit with attack or single target spell that deals damage. if proficient with alchemist supplies, add proficiency as well. lasts 1 minute or until used",
      "fresh": "Altijdbevroren Gletsjer-ijs",
      "catalyst": "Betoverd dauwmos"
    },
    "Poolgebied7r+Woestijn1c": {
      "potion": "Potion_5",
      "description": "healing equal to your medicine skill",
      "fresh": "Altijdbevroren Gletsjer-ijs",
      "catalyst": "Zonverschroeid saffraanstof"
    },
    "Poolgebied7r+Woestijn2c": {
      "potion": "Potion_1",
      "description": "this turn, your speed increases by 10 feet and difficult terrain doesn't cost you extra movement",
      "fresh": "Altijdbevroren Gletsjer-ijs",
      "catalyst": "Avondgloed-palm bladeren"
    },
    "Poolgebied7r+Woestijn6r": {
      "potion": "Potion_22",
      "description": "for fire, cold, electric, acid and sonic each, the next time you take damage of that type, half that damage. lasts 1 minute or until used",
      "fresh": "Altijdbevroren Gletsjer-ijs",
      "catalyst": "Zelfontvlammende Cactusbloesem-as"
    },
    "Poolgebied8r+Bergen2c": {
      "potion": "Potion_7",
      "description": "medicine temp HP. lasts 1 minute",
      "fresh": "Etherische aurora-kristallen",
      "catalyst": "Lawinekruid"
    },
    "Poolgebied8r+Bergen7r": {
      "potion": "Potion_22",
      "description": "for fire, cold, electric, acid and sonic each, the next time you take damage of that type, half that damage. lasts 1 minute or until used",
      "fresh": "Etherische aurora-kristallen",
      "catalyst": "Eeuwigfonkelend Diamantzout"
    },
    "Poolgebied8r+Grot2c": {
      "potion": "Potion_9",
      "description": "+1d4 on you next save. lasts 1 minute or until used",
      "fresh": "Etherische aurora-kristallen",
      "catalyst": "Luminescente Koperzwam"
    },
    "Poolgebied8r+Grot5c": {
      "potion": "Potion_9",
      "description": "+1d4 on you next save. lasts 1 minute or until used",
      "fresh": "Etherische aurora-kristallen",
      "catalyst": "Duisteralg"
    },
    "Poolgebied8r+Kust1c": {
      "potion": "Potion_1",
      "description": "this turn, your speed increases by 10 feet and difficult terrain doesn't cost you extra movement",
      "fresh": "Etherische aurora-kristallen",
      "catalyst": "Mystiek getijdenzout"
    },
    "Poolgebied8r+Moeras1c": {
      "potion": "Potion_10",
      "description": "+1d4 acid damage on your next hit with attack or single target spell that deals damage. if proficient with alchemist supplies, add proficiency as well. lasts 1 minute or until used",
      "fresh": "Etherische aurora-kristallen",
      "catalyst": "Moeras spirea"
    },
    "Poolgebied8r+Moeras4c": {
      "potion": "Potion_1",
      "description": "this turn, your speed increases by 10 feet and difficult terrain doesn't cost you extra movement",
      "fresh": "Etherische aurora-kristallen",
      "catalyst": "Nachtmistzwam"
    },
    "Poolgebied8r+Moeras5c": {
      "potion": "Potion_2",
      "description": "this turn, take a cunning action (dash, disengage or hide)",
      "fresh": "Etherische aurora-kristallen",
      "catalyst": "Zilvertreurwilgenschors"
    },
    "Poolgebied8r+Oerbos2c": {
      "potion": "Potion_1",
      "description": "this turn, your speed increases by 10 feet and difficult terrain doesn't cost you extra movement",
      "fresh": "Etherische aurora-kristallen",
      "catalyst": "Fluoriserend maanblad"
    },
    "Poolgebied8r+Oerbos4c": {
      "potion": "Potion_9",
      "description": "+1d4 on you next save. lasts 1 minute or until used",
      "fresh": "Etherische aurora-kristallen",
      "catalyst": "Betoverd dauwmos"
    },
    "Poolgebied8r+Oerbos7r": {
      "potion": "Potion_13",
      "description": "this turn, take two cunning actions (dash, disengage or hide)",
      "fresh": "Etherische aurora-kristallen",
      "catalyst": "Smaragdgroene sterrenvaren"
    },
    "Poolgebied8r+Woestijn2c": {
      "potion": "Potion_1",
      "description": "this turn, your speed increases by 10 feet and difficult terrain doesn't cost you extra movement",
      "fresh": "Etherische aurora-kristallen",
      "catalyst": "Avondgloed-palm bladeren"
    },
    "Poolgebied8r+Woestijn6r": {
      "potion": "Potion_14",
      "description": "this turn, if you didn't move, advantage on one attack. crit on 19-20",
      "fresh": "Etherische aurora-kristallen",
      "catalyst": "Zelfontvlammende Cactusbloesem-as"
    },
    "Bergen1c+Bergen2c": {
      "potion": "Potion_5",
      "description": "healing equal to your medicine skill",
      "fresh": "IJzerhars van rotsdennen",
      "catalyst": "Lawinekruid"
    },
    "Bergen1c+Bergen4c": {
      "potion": "Potion_11",
      "description": "the next time you take elemental damage, half that damage. lasts 1 minute or until used",
      "fresh": "IJzerhars van rotsdennen",
      "catalyst": "Glinsterend zilversparrensap"
    },
    "Bergen1c+Bergen6r": {
      "potion": "Potion_8",
      "description": "the next AoO against you has disadvantage. lasts 1 minute or until used",
      "fresh": "IJzerhars van rotsdennen",
      "catalyst": "Verdwaalde dennenaalden"
    },
    "Bergen1c+Grasland1c": {
      "potion": "Potion_10",
      "description": "+1d4 acid damage on your next hit with attack or single target spell that deals damage. if proficient with alchemist supplies, add proficiency as well. lasts 1 minute or until used",
      "fresh": "IJzerhars van rotsdennen",
      "catalyst": "Steppewindkruid"
    },
    "Bergen1c+Grasland3c": {
      "potion": "Potion_10",
      "description": "+1d4 acid damage on your next hit with attack or single target spell that deals damage. if proficient with alchemist supplies, add proficiency as well. lasts 1 minute or until used",
      "fresh": "IJzerhars van rotsdennen",
      "catalyst": "Midzomerbloemenhoning"
    },
    "Bergen1c+Grot6r": {
      "potion": "Potion_10",
      "description": "+1d4 acid damage on your next hit with attack or single target spell that deals damage. if proficient with alchemist supplies, add proficiency as well. lasts 1 minute or until used",
      "fresh": "IJzerhars van rotsdennen",
      "catalyst": "Oerertsdoortrokken Boleet"
    },
    "Bergen1c+Grot7r": {
      "potion": "Potion_10",
      "description": "+1d4 acid damage on your next hit with attack or single target spell that deals damage. if proficient with alchemist supplies, add proficiency as well. lasts 1 minute or until used",
      "fresh": "IJzerhars van rotsdennen",
      "catalyst": "Trilgevoelig Dieptemos"
    },
    "Bergen1c+Kust1c": {
      "potion": "Potion_9",
      "description": "+1d4 on you next save. lasts 1 minute or until used",
      "fresh": "IJzerhars van rotsdennen",
      "catalyst": "Mystiek getijdenzout"
    },
    "Bergen1c+Kust5c": {
      "potion": "Potion_2",
      "description": "this turn, take a cunning action (dash, disengage or hide)",
      "fresh": "IJzerhars van rotsdennen",
      "catalyst": "Springtijschuim"
    },
    "Bergen1c+Moeras1c": {
      "potion": "Potion_7",
      "description": "medicine temp HP. lasts 1 minute",
      "fresh": "IJzerhars van rotsdennen",
      "catalyst": "Moeras spirea"
    },
    "Bergen1c+Moeras4c": {
      "potion": "Potion_10",
      "description": "+1d4 acid damage on your next hit with attack or single target spell that deals damage. if proficient with alchemist supplies, add proficiency as well. lasts 1 minute or until used",
      "fresh": "IJzerhars van rotsdennen",
      "catalyst": "Nachtmistzwam"
    },
    "Bergen1c+Moeras6r": {
      "potion": "Potion_10",
      "description": "+1d4 acid damage on your next hit with attack or single target spell that deals damage. if proficient with alchemist supplies, add proficiency as well. lasts 1 minute or until used",
      "fresh": "IJzerhars van rotsdennen",
      "catalyst": "Zwarte Lotus"
    },
    "Bergen1c+Oerbos2c": {
      "potion": "Potion_5",
      "description": "healing equal to your medicine skill",
      "fresh": "IJzerhars van rotsdennen",
      "catalyst": "Fluoriserend maanblad"
    },
    "Bergen1c+Oerbos4c": {
      "potion": "Potion_10",
      "description": "+1d4 acid damage on your next hit with attack or single target spell that deals damage. if proficient with alchemist supplies, add proficiency as well. lasts 1 minute or until used",
      "fresh": "IJzerhars van rotsdennen",
      "catalyst": "Betoverd dauwmos"
    },
    "Bergen1c+Oerbos6r": {
      "potion": "Potion_2",
      "description": "this turn, take a cunning action (dash, disengage or hide)",
      "fresh": "IJzerhars van rotsdennen",
      "catalyst": "Nachtbloeiende Bosanemoon"
    },
    "Bergen1c+Woestijn1c": {
      "potion": "Potion_4",
      "description": "this turn, if you didn't move, the next level 1 spell you cast counts as upcasted by 1 more level. lasts 1 minute or until used",
      "fresh": "IJzerhars van rotsdennen",
      "catalyst": "Zonverschroeid saffraanstof"
    },
    "Bergen1c+Woestijn6r": {
      "potion": "Potion_11",
      "description": "the next time you take elemental damage, half that damage. lasts 1 minute or until used",
      "fresh": "IJzerhars van rotsdennen",
      "catalyst": "Zelfontvlammende Cactusbloesem-as"
    },
    "Bergen2c+Bergen4c": {
      "potion": "Potion_8",
      "description": "the next AoO against you has disadvantage. lasts 1 minute or until used",
      "fresh": "Lawinekruid",
      "catalyst": "Glinsterend zilversparrensap"
    },
    "Bergen2c+Bergen6r": {
      "potion": "Potion_4",
      "description": "this turn, if you didn't move, the next level 1 spell you cast counts as upcasted by 1 more level. lasts 1 minute or until used",
      "fresh": "Lawinekruid",
      "catalyst": "Verdwaalde dennenaalden"
    },
    "Bergen2c+Bergen8r": {
      "potion": "Potion_7",
      "description": "medicine temp HP. lasts 1 minute",
      "fresh": "Lawinekruid",
      "catalyst": "Bliksemgeladen bergmunt"
    },
    "Bergen2c+Grasland6r": {
      "potion": "Potion_3",
      "description": "this turn, if you didn't move, advantage on one attack",
      "fresh": "Lawinekruid",
      "catalyst": "Paarse Wind"
    },
    "Bergen2c+Grasland8r": {
      "potion": "Potion_6",
      "description": "for a minute, advantage on all atlethics and acrobatics rolls",
      "fresh": "Lawinekruid",
      "catalyst": "Arcaan bronbeekwater"
    },
    "Bergen2c+Grot4c": {
      "potion": "Potion_4",
      "description": "this turn, if you didn't move, the next level 1 spell you cast counts as upcasted by 1 more level. lasts 1 minute or until used",
      "fresh": "Lawinekruid",
      "catalyst": "Sluimerend spelonkmos"
    },
    "Bergen2c+Grot5c": {
      "potion": "Potion_11",
      "description": "the next time you take elemental damage, half that damage. lasts 1 minute or until used",
      "fresh": "Lawinekruid",
      "catalyst": "Duisteralg"
    },
    "Bergen2c+Kust6r": {
      "potion": "Potion_4",
      "description": "this turn, if you didn't move, the next level 1 spell you cast counts as upcasted by 1 more level. lasts 1 minute or until used",
      "fresh": "Lawinekruid",
      "catalyst": "Spooklichtschelpen"
    },
    "Bergen2c+Moeras4c": {
      "potion": "Potion_6",
      "description": "for a minute, advantage on all atlethics and acrobatics rolls",
      "fresh": "Lawinekruid",
      "catalyst": "Nachtmistzwam"
    },
    "Bergen2c+Moeras7r": {
      "potion": "Potion_10",
      "description": "+1d4 acid damage on your next hit with attack or single target spell that deals damage. if proficient with alchemist supplies, add proficiency as well. lasts 1 minute or until used",
      "fresh": "Lawinekruid",
      "catalyst": "Vervlochten mistriet"
    },
    "Bergen2c+Moeras8r": {
      "potion": "Potion_11",
      "description": "the next time you take elemental damage, half that damage. lasts 1 minute or until used",
      "fresh": "Lawinekruid",
      "catalyst": "Magiedoordrenkt Veenmos"
    },
    "Bergen2c+Woestijn7r": {
      "potion": "Potion_4",
      "description": "this turn, if you didn't move, the next level 1 spell you cast counts as upcasted by 1 more level. lasts 1 minute or until used",
      "fresh": "Lawinekruid",
      "catalyst": "Vuurbestendig Jojobahars"
    },
    "Bergen3c+Bergen7r": {
      "potion": "Potion_4",
      "description": "this turn, if you didn't move, the next level 1 spell you cast counts as upcasted by 1 more level. lasts 1 minute or until used",
      "fresh": "Stormroos",
      "catalyst": "Eeuwigfonkelend Diamantzout"
    },
    "Bergen3c+Grasland3c": {
      "potion": "Potion_8",
      "description": "the next AoO against you has disadvantage. lasts 1 minute or until used",
      "fresh": "Stormroos",
      "catalyst": "Midzomerbloemenhoning"
    },
    "Bergen3c+Grot5c": {
      "potion": "Potion_9",
      "description": "+1d4 on you next save. lasts 1 minute or until used",
      "fresh": "Stormroos",
      "catalyst": "Duisteralg"
    },
    "Bergen3c+Grot6r": {
      "potion": "Potion_7",
      "description": "medicine temp HP. lasts 1 minute",
      "fresh": "Stormroos",
      "catalyst": "Oerertsdoortrokken Boleet"
    },
    "Bergen3c+Grot7r": {
      "potion": "Potion_7",
      "description": "medicine temp HP. lasts 1 minute",
      "fresh": "Stormroos",
      "catalyst": "Trilgevoelig Dieptemos"
    },
    "Bergen3c+Kust3c": {
      "potion": "Potion_2",
      "description": "this turn, take a cunning action (dash, disengage or hide)",
      "fresh": "Stormroos",
      "catalyst": "Parelmoer brandingkalk"
    },
    "Bergen3c+Kust5c": {
      "potion": "Potion_5",
      "description": "healing equal to your medicine skill",
      "fresh": "Stormroos",
      "catalyst": "Springtijschuim"
    },
    "Bergen3c+Kust8r": {
      "potion": "Potion_6",
      "description": "for a minute, advantage on all atlethics and acrobatics rolls",
      "fresh": "Stormroos",
      "catalyst": "Onzichtbaar koraal"
    },
    "Bergen3c+Moeras3c": {
      "potion": "Potion_5",
      "description": "healing equal to your medicine skill",
      "fresh": "Stormroos",
      "catalyst": "Schaduwglanzende moerasbessen"
    },
    "Bergen3c+Oerbos4c": {
      "potion": "Potion_3",
      "description": "this turn, if you didn't move, advantage on one attack",
      "fresh": "Stormroos",
      "catalyst": "Betoverd dauwmos"
    },
    "Bergen3c+Oerbos8r": {
      "potion": "Potion_5",
      "description": "healing equal to your medicine skill",
      "fresh": "Stormroos",
      "catalyst": "Droomklaproos"
    },
    "Bergen3c+Woestijn2c": {
      "potion": "Potion_11",
      "description": "the next time you take elemental damage, half that damage. lasts 1 minute or until used",
      "fresh": "Stormroos",
      "catalyst": "Avondgloed-palm bladeren"
    },
    "Bergen3c+Woestijn4c": {
      "potion": "Potion_1",
      "description": "this turn, your speed increases by 10 feet and difficult terrain doesn't cost you extra movement",
      "fresh": "Stormroos",
      "catalyst": "Zandstormkristal"
    },
    "Bergen3c+Woestijn8r": {
      "potion": "Potion_4",
      "description": "this turn, if you didn't move, the next level 1 spell you cast counts as upcasted by 1 more level. lasts 1 minute or until used",
      "fresh": "Stormroos",
      "catalyst": "Onverdampbaar oasewater"
    },
    "Bergen4c+Bergen5c": {
      "potion": "Potion_1",
      "description": "this turn, your speed increases by 10 feet and difficult terrain doesn't cost you extra movement",
      "fresh": "Glinsterend zilversparrensap",
      "catalyst": "Onweeralsem"
    },
    "Bergen4c+Grasland5c": {
      "potion": "Potion_9",
      "description": "+1d4 on you next save. lasts 1 minute or until used",
      "fresh": "Glinsterend zilversparrensap",
      "catalyst": "Gezegende ochtenddauw"
    },
    "Bergen4c+Grot8r": {
      "potion": "Potion_9",
      "description": "+1d4 on you next save. lasts 1 minute or until used",
      "fresh": "Glinsterend zilversparrensap",
      "catalyst": "Eeuwige fluisterkristallen"
    },
    "Bergen4c+Kust2c": {
      "potion": "Potion_7",
      "description": "medicine temp HP. lasts 1 minute",
      "fresh": "Glinsterend zilversparrensap",
      "catalyst": "Diepzee-sluieralgen"
    },
    "Bergen4c+Kust3c": {
      "potion": "Potion_3",
      "description": "this turn, if you didn't move, advantage on one attack",
      "fresh": "Glinsterend zilversparrensap",
      "catalyst": "Parelmoer brandingkalk"
    },
    "Bergen4c+Kust7r": {
      "potion": "Potion_7",
      "description": "medicine temp HP. lasts 1 minute",
      "fresh": "Glinsterend zilversparrensap",
      "catalyst": "Altijdglanzende Parels"
    },
    "Bergen4c+Kust8r": {
      "potion": "Potion_8",
      "description": "the next AoO against you has disadvantage. lasts 1 minute or until used",
      "fresh": "Glinsterend zilversparrensap",
      "catalyst": "Onzichtbaar koraal"
    },
    "Bergen4c+Moeras2c": {
      "potion": "Potion_3",
      "description": "this turn, if you didn't move, advantage on one attack",
      "fresh": "Glinsterend zilversparrensap",
      "catalyst": "Mistveenschimmel"
    },
    "Bergen4c+Moeras3c": {
      "potion": "Potion_10",
      "description": "+1d4 acid damage on your next hit with attack or single target spell that deals damage. if proficient with alchemist supplies, add proficiency as well. lasts 1 minute or until used",
      "fresh": "Glinsterend zilversparrensap",
      "catalyst": "Schaduwglanzende moerasbessen"
    },
    "Bergen4c+Woestijn1c": {
      "potion": "Potion_5",
      "description": "healing equal to your medicine skill",
      "fresh": "Glinsterend zilversparrensap",
      "catalyst": "Zonverschroeid saffraanstof"
    },
    "Bergen4c+Woestijn4c": {
      "potion": "Potion_4",
      "description": "this turn, if you didn't move, the next level 1 spell you cast counts as upcasted by 1 more level. lasts 1 minute or until used",
      "fresh": "Glinsterend zilversparrensap",
      "catalyst": "Zandstormkristal"
    },
    "Bergen5c+Grasland2c": {
      "potion": "Potion_10",
      "description": "+1d4 acid damage on your next hit with attack or single target spell that deals damage. if proficient with alchemist supplies, add proficiency as well. lasts 1 minute or until used",
      "fresh": "Onweeralsem",
      "catalyst": "Gouden ochtendzongras"
    },
    "Bergen5c+Grasland6r": {
      "potion": "Potion_10",
      "description": "+1d4 acid damage on your next hit with attack or single target spell that deals damage. if proficient with alchemist supplies, add proficiency as well. lasts 1 minute or until used",
      "fresh": "Onweeralsem",
      "catalyst": "Paarse Wind"
    },
    "Bergen5c+Grot4c": {
      "potion": "Potion_11",
      "description": "the next time you take elemental damage, half that damage. lasts 1 minute or until used",
      "fresh": "Onweeralsem",
      "catalyst": "Sluimerend spelonkmos"
    },
    "Bergen5c+Kust2c": {
      "potion": "Potion_7",
      "description": "medicine temp HP. lasts 1 minute",
      "fresh": "Onweeralsem",
      "catalyst": "Diepzee-sluieralgen"
    },
    "Bergen5c+Kust7r": {
      "potion": "Potion_5",
      "description": "healing equal to your medicine skill",
      "fresh": "Onweeralsem",
      "catalyst": "Altijdglanzende Parels"
    },
    "Bergen5c+Kust8r": {
      "potion": "Potion_4",
      "description": "this turn, if you didn't move, the next level 1 spell you cast counts as upcasted by 1 more level. lasts 1 minute or until used",
      "fresh": "Onweeralsem",
      "catalyst": "Onzichtbaar koraal"
    },
    "Bergen5c+Oerbos8r": {
      "potion": "Potion_4",
      "description": "this turn, if you didn't move, the next level 1 spell you cast counts as upcasted by 1 more level. lasts 1 minute or until used",
      "fresh": "Onweeralsem",
      "catalyst": "Droomklaproos"
    },
    "Bergen5c+Woestijn2c": {
      "potion": "Potion_1",
      "description": "this turn, your speed increases by 10 feet and difficult terrain doesn't cost you extra movement",
      "fresh": "Onweeralsem",
      "catalyst": "Avondgloed-palm bladeren"
    },
    "Bergen5c+Woestijn3c": {
      "potion": "Potion_8",
      "description": "the next AoO against you has disadvantage. lasts 1 minute or until used",
      "fresh": "Onweeralsem",
      "catalyst": "Oasedauw"
    },
    "Bergen5c+Woestijn6r": {
      "potion": "Potion_3",
      "description": "this turn, if you didn't move, advantage on one attack",
      "fresh": "Onweeralsem",
      "catalyst": "Zelfontvlammende Cactusbloesem-as"
    },
    "Bergen5c+Woestijn7r": {
      "potion": "Potion_7",
      "description": "medicine temp HP. lasts 1 minute",
      "fresh": "Onweeralsem",
      "catalyst": "Vuurbestendig Jojobahars"
    },
    "Bergen5c+Woestijn8r": {
      "potion": "Potion_10",
      "description": "+1d4 acid damage on your next hit with attack or single target spell that deals damage. if proficient with alchemist supplies, add proficiency as well. lasts 1 minute or until used",
      "fresh": "Onweeralsem",
      "catalyst": "Onverdampbaar oasewater"
    },
    "Bergen6r+Grasland1c": {
      "potion": "Potion_1",
      "description": "this turn, your speed increases by 10 feet and difficult terrain doesn't cost you extra movement",
      "fresh": "Verdwaalde dennenaalden",
      "catalyst": "Steppewindkruid"
    },
    "Bergen6r+Grasland7r": {
      "potion": "Potion_15",
      "description": "this turn, if you didn't move, you next spell casts as 1 level higher. lasts 1 minute or until used",
      "fresh": "Verdwaalde dennenaalden",
      "catalyst": "Zilver Maanbolsap"
    },
    "Bergen6r+Grasland8r": {
      "potion": "Potion_13",
      "description": "this turn, take two cunning actions (dash, disengage or hide)",
      "fresh": "Verdwaalde dennenaalden",
      "catalyst": "Arcaan bronbeekwater"
    },
    "Bergen6r+Grot3c": {
      "potion": "Potion_8",
      "description": "the next AoO against you has disadvantage. lasts 1 minute or until used",
      "fresh": "Verdwaalde dennenaalden",
      "catalyst": "Dieptegloeiende zoutkristallen"
    },
    "Bergen6r+Grot4c": {
      "potion": "Potion_6",
      "description": "for a minute, advantage on all atlethics and acrobatics rolls",
      "fresh": "Verdwaalde dennenaalden",
      "catalyst": "Sluimerend spelonkmos"
    },
    "Bergen6r+Grot5c": {
      "potion": "Potion_5",
      "description": "healing equal to your medicine skill",
      "fresh": "Verdwaalde dennenaalden",
      "catalyst": "Duisteralg"
    },
    "Bergen6r+Kust5c": {
      "potion": "Potion_4",
      "description": "this turn, if you didn't move, the next level 1 spell you cast counts as upcasted by 1 more level. lasts 1 minute or until used",
      "fresh": "Verdwaalde dennenaalden",
      "catalyst": "Springtijschuim"
    },
    "Bergen6r+Kust8r": {
      "potion": "Potion_19",
      "description": "the next attack against you has disadvantage. lasts 1 minute or until used",
      "fresh": "Verdwaalde dennenaalden",
      "catalyst": "Onzichtbaar koraal"
    },
    "Bergen6r+Moeras1c": {
      "potion": "Potion_5",
      "description": "healing equal to your medicine skill",
      "fresh": "Verdwaalde dennenaalden",
      "catalyst": "Moeras spirea"
    },
    "Bergen6r+Moeras2c": {
      "potion": "Potion_7",
      "description": "medicine temp HP. lasts 1 minute",
      "fresh": "Verdwaalde dennenaalden",
      "catalyst": "Mistveenschimmel"
    },
    "Bergen6r+Moeras7r": {
      "potion": "Potion_12",
      "description": "this turn, your speed increases by 30 feet and difficult terrain doesn't cost you extra movement",
      "fresh": "Verdwaalde dennenaalden",
      "catalyst": "Vervlochten mistriet"
    },
    "Bergen6r+Oerbos5c": {
      "potion": "Potion_10",
      "description": "+1d4 acid damage on your next hit with attack or single target spell that deals damage. if proficient with alchemist supplies, add proficiency as well. lasts 1 minute or until used",
      "fresh": "Verdwaalde dennenaalden",
      "catalyst": "Maanlichtverrijkte Wilgenbladeren"
    },
    "Bergen6r+Oerbos7r": {
      "potion": "Potion_15",
      "description": "this turn, if you didn't move, you next spell casts as 1 level higher. lasts 1 minute or until used",
      "fresh": "Verdwaalde dennenaalden",
      "catalyst": "Smaragdgroene sterrenvaren"
    },
    "Bergen6r+Oerbos8r": {
      "potion": "Potion_13",
      "description": "this turn, take two cunning actions (dash, disengage or hide)",
      "fresh": "Verdwaalde dennenaalden",
      "catalyst": "Droomklaproos"
    },
    "Bergen7r+Grasland2c": {
      "potion": "Potion_10",
      "description": "+1d4 acid damage on your next hit with attack or single target spell that deals damage. if proficient with alchemist supplies, add proficiency as well. lasts 1 minute or until used",
      "fresh": "Eeuwigfonkelend Diamantzout",
      "catalyst": "Gouden ochtendzongras"
    },
    "Bergen7r+Grasland5c": {
      "potion": "Potion_1",
      "description": "this turn, your speed increases by 10 feet and difficult terrain doesn't cost you extra movement",
      "fresh": "Eeuwigfonkelend Diamantzout",
      "catalyst": "Gezegende ochtenddauw"
    },
    "Bergen7r+Grot1c": {
      "potion": "Potion_4",
      "description": "this turn, if you didn't move, the next level 1 spell you cast counts as upcasted by 1 more level. lasts 1 minute or until used",
      "fresh": "Eeuwigfonkelend Diamantzout",
      "catalyst": "Druipsteenwater"
    },
    "Bergen7r+Grot3c": {
      "potion": "Potion_6",
      "description": "for a minute, advantage on all atlethics and acrobatics rolls",
      "fresh": "Eeuwigfonkelend Diamantzout",
      "catalyst": "Dieptegloeiende zoutkristallen"
    },
    "Bergen7r+Grot6r": {
      "potion": "Potion_21",
      "description": "+2d4 acid damage on your next hit with an attack or single target spell that deals damage. if proficient with alchemist supplies, add proficiency as well. lasts 1 minute or until used",
      "fresh": "Eeuwigfonkelend Diamantzout",
      "catalyst": "Oerertsdoortrokken Boleet"
    },
    "Bergen7r+Grot7r": {
      "potion": "Potion_18",
      "description": "temp hp equal to 2d4 + your medicine skill. lasts 1 minute",
      "fresh": "Eeuwigfonkelend Diamantzout",
      "catalyst": "Trilgevoelig Dieptemos"
    },
    "Bergen7r+Kust2c": {
      "potion": "Potion_2",
      "description": "this turn, take a cunning action (dash, disengage or hide)",
      "fresh": "Eeuwigfonkelend Diamantzout",
      "catalyst": "Diepzee-sluieralgen"
    },
    "Bergen7r+Kust3c": {
      "potion": "Potion_9",
      "description": "+1d4 on you next save. lasts 1 minute or until used",
      "fresh": "Eeuwigfonkelend Diamantzout",
      "catalyst": "Parelmoer brandingkalk"
    },
    "Bergen7r+Kust5c": {
      "potion": "Potion_2",
      "description": "this turn, take a cunning action (dash, disengage or hide)",
      "fresh": "Eeuwigfonkelend Diamantzout",
      "catalyst": "Springtijschuim"
    },
    "Bergen7r+Moeras6r": {
      "potion": "Potion_16",
      "description": "healing equal to 2d4 + your medicine skill",
      "fresh": "Eeuwigfonkelend Diamantzout",
      "catalyst": "Zwarte Lotus"
    },
    "Bergen7r+Moeras8r": {
      "potion": "Potion_20",
      "description": "+2d4 on your next save. lasts 1 minute or until used",
      "fresh": "Eeuwigfonkelend Diamantzout",
      "catalyst": "Magiedoordrenkt Veenmos"
    },
    "Bergen7r+Oerbos1c": {
      "potion": "Potion_7",
      "description": "medicine temp HP. lasts 1 minute",
      "fresh": "Eeuwigfonkelend Diamantzout",
      "catalyst": "Fluisterboomhars"
    },
    "Bergen7r+Oerbos2c": {
      "potion": "Potion_7",
      "description": "medicine temp HP. lasts 1 minute",
      "fresh": "Eeuwigfonkelend Diamantzout",
      "catalyst": "Fluoriserend maanblad"
    },
    "Bergen7r+Woestijn3c": {
      "potion": "Potion_3",
      "description": "this turn, if you didn't move, advantage on one attack",
      "fresh": "Eeuwigfonkelend Diamantzout",
      "catalyst": "Oasedauw"
    },
    "Bergen7r+Woestijn4c": {
      "potion": "Potion_1",
      "description": "this turn, your speed increases by 10 feet and difficult terrain doesn't cost you extra movement",
      "fresh": "Eeuwigfonkelend Diamantzout",
      "catalyst": "Zandstormkristal"
    },
    "Bergen7r+Woestijn5c": {
      "potion": "Potion_3",
      "description": "this turn, if you didn't move, advantage on one attack",
      "fresh": "Eeuwigfonkelend Diamantzout",
      "catalyst": "Versteend Dadelpalmschors"
    },
    "Bergen7r+Woestijn6r": {
      "potion": "Potion_18",
      "description": "temp hp equal to 2d4 + your medicine skill. lasts 1 minute",
      "fresh": "Eeuwigfonkelend Diamantzout",
      "catalyst": "Zelfontvlammende Cactusbloesem-as"
    },
    "Bergen8r+Grasland2c": {
      "potion": "Potion_9",
      "description": "+1d4 on you next save. lasts 1 minute or until used",
      "fresh": "Bliksemgeladen bergmunt",
      "catalyst": "Gouden ochtendzongras"
    },
    "Bergen8r+Grasland6r": {
      "potion": "Potion_18",
      "description": "temp hp equal to 2d4 + your medicine skill. lasts 1 minute",
      "fresh": "Bliksemgeladen bergmunt",
      "catalyst": "Paarse Wind"
    },
    "Bergen8r+Grot1c": {
      "potion": "Potion_3",
      "description": "this turn, if you didn't move, advantage on one attack",
      "fresh": "Bliksemgeladen bergmunt",
      "catalyst": "Druipsteenwater"
    },
    "Bergen8r+Grot2c": {
      "potion": "Potion_7",
      "description": "medicine temp HP. lasts 1 minute",
      "fresh": "Bliksemgeladen bergmunt",
      "catalyst": "Luminescente Koperzwam"
    },
    "Bergen8r+Grot8r": {
      "potion": "Potion_18",
      "description": "temp hp equal to 2d4 + your medicine skill. lasts 1 minute",
      "fresh": "Bliksemgeladen bergmunt",
      "catalyst": "Eeuwige fluisterkristallen"
    },
    "Bergen8r+Kust1c": {
      "potion": "Potion_7",
      "description": "medicine temp HP. lasts 1 minute",
      "fresh": "Bliksemgeladen bergmunt",
      "catalyst": "Mystiek getijdenzout"
    },
    "Bergen8r+Kust2c": {
      "potion": "Potion_2",
      "description": "this turn, take a cunning action (dash, disengage or hide)",
      "fresh": "Bliksemgeladen bergmunt",
      "catalyst": "Diepzee-sluieralgen"
    },
    "Bergen8r+Kust3c": {
      "potion": "Potion_10",
      "description": "+1d4 acid damage on your next hit with attack or single target spell that deals damage. if proficient with alchemist supplies, add proficiency as well. lasts 1 minute or until used",
      "fresh": "Bliksemgeladen bergmunt",
      "catalyst": "Parelmoer brandingkalk"
    },
    "Bergen8r+Kust7r": {
      "potion": "Potion_18",
      "description": "temp hp equal to 2d4 + your medicine skill. lasts 1 minute",
      "fresh": "Bliksemgeladen bergmunt",
      "catalyst": "Altijdglanzende Parels"
    },
    "Bergen8r+Moeras2c": {
      "potion": "Potion_3",
      "description": "this turn, if you didn't move, advantage on one attack",
      "fresh": "Bliksemgeladen bergmunt",
      "catalyst": "Mistveenschimmel"
    },
    "Bergen8r+Moeras3c": {
      "potion": "Potion_10",
      "description": "+1d4 acid damage on your next hit with attack or single target spell that deals damage. if proficient with alchemist supplies, add proficiency as well. lasts 1 minute or until used",
      "fresh": "Bliksemgeladen bergmunt",
      "catalyst": "Schaduwglanzende moerasbessen"
    },
    "Bergen8r+Moeras4c": {
      "potion": "Potion_1",
      "description": "this turn, your speed increases by 10 feet and difficult terrain doesn't cost you extra movement",
      "fresh": "Bliksemgeladen bergmunt",
      "catalyst": "Nachtmistzwam"
    },
    "Bergen8r+Moeras7r": {
      "potion": "Potion_14",
      "description": "this turn, if you didn't move, advantage on one attack. crit on 19-20",
      "fresh": "Bliksemgeladen bergmunt",
      "catalyst": "Vervlochten mistriet"
    },
    "Bergen8r+Moeras8r": {
      "potion": "Potion_18",
      "description": "temp hp equal to 2d4 + your medicine skill. lasts 1 minute",
      "fresh": "Bliksemgeladen bergmunt",
      "catalyst": "Magiedoordrenkt Veenmos"
    },
    "Bergen8r+Oerbos5c": {
      "potion": "Potion_2",
      "description": "this turn, take a cunning action (dash, disengage or hide)",
      "fresh": "Bliksemgeladen bergmunt",
      "catalyst": "Maanlichtverrijkte Wilgenbladeren"
    },
    "Bergen8r+Woestijn4c": {
      "potion": "Potion_10",
      "description": "+1d4 acid damage on your next hit with attack or single target spell that deals damage. if proficient with alchemist supplies, add proficiency as well. lasts 1 minute or until used",
      "fresh": "Bliksemgeladen bergmunt",
      "catalyst": "Zandstormkristal"
    },
    "Bergen8r+Woestijn5c": {
      "potion": "Potion_7",
      "description": "medicine temp HP. lasts 1 minute",
      "fresh": "Bliksemgeladen bergmunt",
      "catalyst": "Versteend Dadelpalmschors"
    },
    "Grasland1c+Grasland2c": {
      "potion": "Potion_7",
      "description": "medicine temp HP. lasts 1 minute",
      "fresh": "Steppewindkruid",
      "catalyst": "Gouden ochtendzongras"
    },
    "Grasland1c+Grasland3c": {
      "potion": "Potion_8",
      "description": "the next AoO against you has disadvantage. lasts 1 minute or until used",
      "fresh": "Steppewindkruid",
      "catalyst": "Midzomerbloemenhoning"
    },
    "Grasland1c+Grasland8r": {
      "potion": "Potion_2",
      "description": "this turn, take a cunning action (dash, disengage or hide)",
      "fresh": "Steppewindkruid",
      "catalyst": "Arcaan bronbeekwater"
    },
    "Grasland1c+Grot3c": {
      "potion": "Potion_2",
      "description": "this turn, take a cunning action (dash, disengage or hide)",
      "fresh": "Steppewindkruid",
      "catalyst": "Dieptegloeiende zoutkristallen"
    },
    "Grasland1c+Grot6r": {
      "potion": "Potion_8",
      "description": "the next AoO against you has disadvantage. lasts 1 minute or until used",
      "fresh": "Steppewindkruid",
      "catalyst": "Oerertsdoortrokken Boleet"
    },
    "Grasland1c+Grot7r": {
      "potion": "Potion_1",
      "description": "this turn, your speed increases by 10 feet and difficult terrain doesn't cost you extra movement",
      "fresh": "Steppewindkruid",
      "catalyst": "Trilgevoelig Dieptemos"
    },
    "Grasland1c+Grot8r": {
      "potion": "Potion_3",
      "description": "this turn, if you didn't move, advantage on one attack",
      "fresh": "Steppewindkruid",
      "catalyst": "Eeuwige fluisterkristallen"
    },
    "Grasland1c+Kust3c": {
      "potion": "Potion_4",
      "description": "this turn, if you didn't move, the next level 1 spell you cast counts as upcasted by 1 more level. lasts 1 minute or until used",
      "fresh": "Steppewindkruid",
      "catalyst": "Parelmoer brandingkalk"
    },
    "Grasland1c+Oerbos1c": {
      "potion": "Potion_10",
      "description": "+1d4 acid damage on your next hit with attack or single target spell that deals damage. if proficient with alchemist supplies, add proficiency as well. lasts 1 minute or until used",
      "fresh": "Steppewindkruid",
      "catalyst": "Fluisterboomhars"
    },
    "Grasland1c+Oerbos4c": {
      "potion": "Potion_1",
      "description": "this turn, your speed increases by 10 feet and difficult terrain doesn't cost you extra movement",
      "fresh": "Steppewindkruid",
      "catalyst": "Betoverd dauwmos"
    },
    "Grasland1c+Woestijn2c": {
      "potion": "Potion_11",
      "description": "the next time you take elemental damage, half that damage. lasts 1 minute or until used",
      "fresh": "Steppewindkruid",
      "catalyst": "Avondgloed-palm bladeren"
    },
    "Grasland2c+Grasland4c": {
      "potion": "Potion_9",
      "description": "+1d4 on you next save. lasts 1 minute or until used",
      "fresh": "Gouden ochtendzongras",
      "catalyst": "Sterrenklaver"
    },
    "Grasland2c+Grot6r": {
      "potion": "Potion_4",
      "description": "this turn, if you didn't move, the next level 1 spell you cast counts as upcasted by 1 more level. lasts 1 minute or until used",
      "fresh": "Gouden ochtendzongras",
      "catalyst": "Oerertsdoortrokken Boleet"
    },
    "Grasland2c+Grot7r": {
      "potion": "Potion_1",
      "description": "this turn, your speed increases by 10 feet and difficult terrain doesn't cost you extra movement",
      "fresh": "Gouden ochtendzongras",
      "catalyst": "Trilgevoelig Dieptemos"
    },
    "Grasland2c+Grot8r": {
      "potion": "Potion_1",
      "description": "this turn, your speed increases by 10 feet and difficult terrain doesn't cost you extra movement",
      "fresh": "Gouden ochtendzongras",
      "catalyst": "Eeuwige fluisterkristallen"
    },
    "Grasland2c+Kust5c": {
      "potion": "Potion_9",
      "description": "+1d4 on you next save. lasts 1 minute or until used",
      "fresh": "Gouden ochtendzongras",
      "catalyst": "Springtijschuim"
    },
    "Grasland2c+Kust7r": {
      "potion": "Potion_6",
      "description": "for a minute, advantage on all atlethics and acrobatics rolls",
      "fresh": "Gouden ochtendzongras",
      "catalyst": "Altijdglanzende Parels"
    },
    "Grasland2c+Moeras2c": {
      "potion": "Potion_7",
      "description": "medicine temp HP. lasts 1 minute",
      "fresh": "Gouden ochtendzongras",
      "catalyst": "Mistveenschimmel"
    },
    "Grasland2c+Moeras3c": {
      "potion": "Potion_10",
      "description": "+1d4 acid damage on your next hit with attack or single target spell that deals damage. if proficient with alchemist supplies, add proficiency as well. lasts 1 minute or until used",
      "fresh": "Gouden ochtendzongras",
      "catalyst": "Schaduwglanzende moerasbessen"
    },
    "Grasland2c+Moeras5c": {
      "potion": "Potion_3",
      "description": "this turn, if you didn't move, advantage on one attack",
      "fresh": "Gouden ochtendzongras",
      "catalyst": "Zilvertreurwilgenschors"
    },
    "Grasland2c+Moeras6r": {
      "potion": "Potion_8",
      "description": "the next AoO against you has disadvantage. lasts 1 minute or until used",
      "fresh": "Gouden ochtendzongras",
      "catalyst": "Zwarte Lotus"
    },
    "Grasland2c+Moeras7r": {
      "potion": "Potion_1",
      "description": "this turn, your speed increases by 10 feet and difficult terrain doesn't cost you extra movement",
      "fresh": "Gouden ochtendzongras",
      "catalyst": "Vervlochten mistriet"
    },
    "Grasland2c+Oerbos3c": {
      "potion": "Potion_2",
      "description": "this turn, take a cunning action (dash, disengage or hide)",
      "fresh": "Gouden ochtendzongras",
      "catalyst": "Gloeiwortelsap"
    },
    "Grasland2c+Oerbos6r": {
      "potion": "Potion_1",
      "description": "this turn, your speed increases by 10 feet and difficult terrain doesn't cost you extra movement",
      "fresh": "Gouden ochtendzongras",
      "catalyst": "Nachtbloeiende Bosanemoon"
    },
    "Grasland2c+Woestijn1c": {
      "potion": "Potion_8",
      "description": "the next AoO against you has disadvantage. lasts 1 minute or until used",
      "fresh": "Gouden ochtendzongras",
      "catalyst": "Zonverschroeid saffraanstof"
    },
    "Grasland2c+Woestijn5c": {
      "potion": "Potion_7",
      "description": "medicine temp HP. lasts 1 minute",
      "fresh": "Gouden ochtendzongras",
      "catalyst": "Versteend Dadelpalmschors"
    },
    "Grasland2c+Woestijn6r": {
      "potion": "Potion_1",
      "description": "this turn, your speed increases by 10 feet and difficult terrain doesn't cost you extra movement",
      "fresh": "Gouden ochtendzongras",
      "catalyst": "Zelfontvlammende Cactusbloesem-as"
    },
    "Grasland2c+Woestijn8r": {
      "potion": "Potion_1",
      "description": "this turn, your speed increases by 10 feet and difficult terrain doesn't cost you extra movement",
      "fresh": "Gouden ochtendzongras",
      "catalyst": "Onverdampbaar oasewater"
    },
    "Grasland3c+Grasland4c": {
      "potion": "Potion_4",
      "description": "this turn, if you didn't move, the next level 1 spell you cast counts as upcasted by 1 more level. lasts 1 minute or until used",
      "fresh": "Midzomerbloemenhoning",
      "catalyst": "Sterrenklaver"
    },
    "Grasland3c+Grot1c": {
      "potion": "Potion_10",
      "description": "+1d4 acid damage on your next hit with attack or single target spell that deals damage. if proficient with alchemist supplies, add proficiency as well. lasts 1 minute or until used",
      "fresh": "Midzomerbloemenhoning",
      "catalyst": "Druipsteenwater"
    },
    "Grasland3c+Grot3c": {
      "potion": "Potion_1",
      "description": "this turn, your speed increases by 10 feet and difficult terrain doesn't cost you extra movement",
      "fresh": "Midzomerbloemenhoning",
      "catalyst": "Dieptegloeiende zoutkristallen"
    },
    "Grasland3c+Kust8r": {
      "potion": "Potion_11",
      "description": "the next time you take elemental damage, half that damage. lasts 1 minute or until used",
      "fresh": "Midzomerbloemenhoning",
      "catalyst": "Onzichtbaar koraal"
    },
    "Grasland3c+Moeras3c": {
      "potion": "Potion_1",
      "description": "this turn, your speed increases by 10 feet and difficult terrain doesn't cost you extra movement",
      "fresh": "Midzomerbloemenhoning",
      "catalyst": "Schaduwglanzende moerasbessen"
    },
    "Grasland3c+Moeras5c": {
      "potion": "Potion_6",
      "description": "for a minute, advantage on all atlethics and acrobatics rolls",
      "fresh": "Midzomerbloemenhoning",
      "catalyst": "Zilvertreurwilgenschors"
    },
    "Grasland3c+Moeras6r": {
      "potion": "Potion_9",
      "description": "+1d4 on you next save. lasts 1 minute or until used",
      "fresh": "Midzomerbloemenhoning",
      "catalyst": "Zwarte Lotus"
    },
    "Grasland3c+Moeras8r": {
      "potion": "Potion_4",
      "description": "this turn, if you didn't move, the next level 1 spell you cast counts as upcasted by 1 more level. lasts 1 minute or until used",
      "fresh": "Midzomerbloemenhoning",
      "catalyst": "Magiedoordrenkt Veenmos"
    },
    "Grasland3c+Oerbos1c": {
      "potion": "Potion_4",
      "description": "this turn, if you didn't move, the next level 1 spell you cast counts as upcasted by 1 more level. lasts 1 minute or until used",
      "fresh": "Midzomerbloemenhoning",
      "catalyst": "Fluisterboomhars"
    },
    "Grasland3c+Oerbos6r": {
      "potion": "Potion_7",
      "description": "medicine temp HP. lasts 1 minute",
      "fresh": "Midzomerbloemenhoning",
      "catalyst": "Nachtbloeiende Bosanemoon"
    },
    "Grasland3c+Oerbos7r": {
      "potion": "Potion_7",
      "description": "medicine temp HP. lasts 1 minute",
      "fresh": "Midzomerbloemenhoning",
      "catalyst": "Smaragdgroene sterrenvaren"
    },
    "Grasland3c+Woestijn4c": {
      "potion": "Potion_10",
      "description": "+1d4 acid damage on your next hit with attack or single target spell that deals damage. if proficient with alchemist supplies, add proficiency as well. lasts 1 minute or until used",
      "fresh": "Midzomerbloemenhoning",
      "catalyst": "Zandstormkristal"
    },
    "Grasland3c+Woestijn8r": {
      "potion": "Potion_4",
      "description": "this turn, if you didn't move, the next level 1 spell you cast counts as upcasted by 1 more level. lasts 1 minute or until used",
      "fresh": "Midzomerbloemenhoning",
      "catalyst": "Onverdampbaar oasewater"
    },
    "Grasland4c+Grasland6r": {
      "potion": "Potion_4",
      "description": "this turn, if you didn't move, the next level 1 spell you cast counts as upcasted by 1 more level. lasts 1 minute or until used",
      "fresh": "Sterrenklaver",
      "catalyst": "Paarse Wind"
    },
    "Grasland4c+Grot8r": {
      "potion": "Potion_7",
      "description": "medicine temp HP. lasts 1 minute",
      "fresh": "Sterrenklaver",
      "catalyst": "Eeuwige fluisterkristallen"
    },
    "Grasland4c+Kust2c": {
      "potion": "Potion_9",
      "description": "+1d4 on you next save. lasts 1 minute or until used",
      "fresh": "Sterrenklaver",
      "catalyst": "Diepzee-sluieralgen"
    },
    "Grasland4c+Kust8r": {
      "potion": "Potion_9",
      "description": "+1d4 on you next save. lasts 1 minute or until used",
      "fresh": "Sterrenklaver",
      "catalyst": "Onzichtbaar koraal"
    },
    "Grasland4c+Moeras2c": {
      "potion": "Potion_3",
      "description": "this turn, if you didn't move, advantage on one attack",
      "fresh": "Sterrenklaver",
      "catalyst": "Mistveenschimmel"
    },
    "Grasland4c+Moeras6r": {
      "potion": "Potion_6",
      "description": "for a minute, advantage on all atlethics and acrobatics rolls",
      "fresh": "Sterrenklaver",
      "catalyst": "Zwarte Lotus"
    },
    "Grasland4c+Oerbos4c": {
      "potion": "Potion_1",
      "description": "this turn, your speed increases by 10 feet and difficult terrain doesn't cost you extra movement",
      "fresh": "Sterrenklaver",
      "catalyst": "Betoverd dauwmos"
    },
    "Grasland4c+Woestijn1c": {
      "potion": "Potion_9",
      "description": "+1d4 on you next save. lasts 1 minute or until used",
      "fresh": "Sterrenklaver",
      "catalyst": "Zonverschroeid saffraanstof"
    },
    "Grasland4c+Woestijn3c": {
      "potion": "Potion_7",
      "description": "medicine temp HP. lasts 1 minute",
      "fresh": "Sterrenklaver",
      "catalyst": "Oasedauw"
    },
    "Grasland4c+Woestijn5c": {
      "potion": "Potion_2",
      "description": "this turn, take a cunning action (dash, disengage or hide)",
      "fresh": "Sterrenklaver",
      "catalyst": "Versteend Dadelpalmschors"
    },
    "Grasland4c+Woestijn8r": {
      "potion": "Potion_4",
      "description": "this turn, if you didn't move, the next level 1 spell you cast counts as upcasted by 1 more level. lasts 1 minute or until used",
      "fresh": "Sterrenklaver",
      "catalyst": "Onverdampbaar oasewater"
    },
    "Grasland5c+Grasland6r": {
      "potion": "Potion_8",
      "description": "the next AoO against you has disadvantage. lasts 1 minute or until used",
      "fresh": "Gezegende ochtenddauw",
      "catalyst": "Paarse Wind"
    },
    "Grasland5c+Grasland7r": {
      "potion": "Potion_7",
      "description": "medicine temp HP. lasts 1 minute",
      "fresh": "Gezegende ochtenddauw",
      "catalyst": "Zilver Maanbolsap"
    },
    "Grasland5c+Grot3c": {
      "potion": "Potion_9",
      "description": "+1d4 on you next save. lasts 1 minute or until used",
      "fresh": "Gezegende ochtenddauw",
      "catalyst": "Dieptegloeiende zoutkristallen"
    },
    "Grasland5c+Grot4c": {
      "potion": "Potion_9",
      "description": "+1d4 on you next save. lasts 1 minute or until used",
      "fresh": "Gezegende ochtenddauw",
      "catalyst": "Sluimerend spelonkmos"
    },
    "Grasland5c+Grot7r": {
      "potion": "Potion_6",
      "description": "for a minute, advantage on all atlethics and acrobatics rolls",
      "fresh": "Gezegende ochtenddauw",
      "catalyst": "Trilgevoelig Dieptemos"
    },
    "Grasland5c+Kust2c": {
      "potion": "Potion_5",
      "description": "healing equal to your medicine skill",
      "fresh": "Gezegende ochtenddauw",
      "catalyst": "Diepzee-sluieralgen"
    },
    "Grasland5c+Kust3c": {
      "potion": "Potion_10",
      "description": "+1d4 acid damage on your next hit with attack or single target spell that deals damage. if proficient with alchemist supplies, add proficiency as well. lasts 1 minute or until used",
      "fresh": "Gezegende ochtenddauw",
      "catalyst": "Parelmoer brandingkalk"
    },
    "Grasland5c+Moeras4c": {
      "potion": "Potion_6",
      "description": "for a minute, advantage on all atlethics and acrobatics rolls",
      "fresh": "Gezegende ochtenddauw",
      "catalyst": "Nachtmistzwam"
    },
    "Grasland5c+Oerbos3c": {
      "potion": "Potion_4",
      "description": "this turn, if you didn't move, the next level 1 spell you cast counts as upcasted by 1 more level. lasts 1 minute or until used",
      "fresh": "Gezegende ochtenddauw",
      "catalyst": "Gloeiwortelsap"
    },
    "Grasland5c+Oerbos7r": {
      "potion": "Potion_8",
      "description": "the next AoO against you has disadvantage. lasts 1 minute or until used",
      "fresh": "Gezegende ochtenddauw",
      "catalyst": "Smaragdgroene sterrenvaren"
    },
    "Grasland5c+Woestijn6r": {
      "potion": "Potion_3",
      "description": "this turn, if you didn't move, advantage on one attack",
      "fresh": "Gezegende ochtenddauw",
      "catalyst": "Zelfontvlammende Cactusbloesem-as"
    },
    "Grasland6r+Grasland8r": {
      "potion": "Potion_22",
      "description": "for fire, cold, electric, acid and sonic each, the next time you take damage of that type, half that damage. lasts 1 minute or until used",
      "fresh": "Paarse Wind",
      "catalyst": "Arcaan bronbeekwater"
    },
    "Grasland6r+Grot3c": {
      "potion": "Potion_2",
      "description": "this turn, take a cunning action (dash, disengage or hide)",
      "fresh": "Paarse Wind",
      "catalyst": "Dieptegloeiende zoutkristallen"
    },
    "Grasland6r+Grot7r": {
      "potion": "Potion_19",
      "description": "the next attack against you has disadvantage. lasts 1 minute or until used",
      "fresh": "Paarse Wind",
      "catalyst": "Trilgevoelig Dieptemos"
    },
    "Grasland6r+Kust5c": {
      "potion": "Potion_10",
      "description": "+1d4 acid damage on your next hit with attack or single target spell that deals damage. if proficient with alchemist supplies, add proficiency as well. lasts 1 minute or until used",
      "fresh": "Paarse Wind",
      "catalyst": "Springtijschuim"
    },
    "Grasland6r+Kust7r": {
      "potion": "Potion_19",
      "description": "the next attack against you has disadvantage. lasts 1 minute or until used",
      "fresh": "Paarse Wind",
      "catalyst": "Altijdglanzende Parels"
    },
    "Grasland6r+Moeras1c": {
      "potion": "Potion_7",
      "description": "medicine temp HP. lasts 1 minute",
      "fresh": "Paarse Wind",
      "catalyst": "Moeras spirea"
    },
    "Grasland6r+Moeras5c": {
      "potion": "Potion_4",
      "description": "this turn, if you didn't move, the next level 1 spell you cast counts as upcasted by 1 more level. lasts 1 minute or until used",
      "fresh": "Paarse Wind",
      "catalyst": "Zilvertreurwilgenschors"
    },
    "Grasland6r+Moeras7r": {
      "potion": "Potion_14",
      "description": "this turn, if you didn't move, advantage on one attack. crit on 19-20",
      "fresh": "Paarse Wind",
      "catalyst": "Vervlochten mistriet"
    },
    "Grasland6r+Oerbos3c": {
      "potion": "Potion_8",
      "description": "the next AoO against you has disadvantage. lasts 1 minute or until used",
      "fresh": "Paarse Wind",
      "catalyst": "Gloeiwortelsap"
    },
    "Grasland6r+Oerbos4c": {
      "potion": "Potion_5",
      "description": "healing equal to your medicine skill",
      "fresh": "Paarse Wind",
      "catalyst": "Betoverd dauwmos"
    },
    "Grasland6r+Woestijn4c": {
      "potion": "Potion_4",
      "description": "this turn, if you didn't move, the next level 1 spell you cast counts as upcasted by 1 more level. lasts 1 minute or until used",
      "fresh": "Paarse Wind",
      "catalyst": "Zandstormkristal"
    },
    "Grasland6r+Woestijn5c": {
      "potion": "Potion_1",
      "description": "this turn, your speed increases by 10 feet and difficult terrain doesn't cost you extra movement",
      "fresh": "Paarse Wind",
      "catalyst": "Versteend Dadelpalmschors"
    },
    "Grasland7r+Grasland8r": {
      "potion": "Potion_16",
      "description": "healing equal to 2d4 + your medicine skill",
      "fresh": "Zilver Maanbolsap",
      "catalyst": "Arcaan bronbeekwater"
    },
    "Grasland7r+Grot5c": {
      "potion": "Potion_8",
      "description": "the next AoO against you has disadvantage. lasts 1 minute or until used",
      "fresh": "Zilver Maanbolsap",
      "catalyst": "Duisteralg"
    },
    "Grasland7r+Grot7r": {
      "potion": "Potion_20",
      "description": "+2d4 on your next save. lasts 1 minute or until used",
      "fresh": "Zilver Maanbolsap",
      "catalyst": "Trilgevoelig Dieptemos"
    },
    "Grasland7r+Kust8r": {
      "potion": "Potion_18",
      "description": "temp hp equal to 2d4 + your medicine skill. lasts 1 minute",
      "fresh": "Zilver Maanbolsap",
      "catalyst": "Onzichtbaar koraal"
    },
    "Grasland7r+Moeras3c": {
      "potion": "Potion_6",
      "description": "for a minute, advantage on all atlethics and acrobatics rolls",
      "fresh": "Zilver Maanbolsap",
      "catalyst": "Schaduwglanzende moerasbessen"
    },
    "Grasland7r+Moeras6r": {
      "potion": "Potion_21",
      "description": "+2d4 acid damage on your next hit with an attack or single target spell that deals damage. if proficient with alchemist supplies, add proficiency as well. lasts 1 minute or until used",
      "fresh": "Zilver Maanbolsap",
      "catalyst": "Zwarte Lotus"
    },
    "Grasland7r+Oerbos2c": {
      "potion": "Potion_9",
      "description": "+1d4 on you next save. lasts 1 minute or until used",
      "fresh": "Zilver Maanbolsap",
      "catalyst": "Fluoriserend maanblad"
    },
    "Grasland7r+Oerbos3c": {
      "potion": "Potion_1",
      "description": "this turn, your speed increases by 10 feet and difficult terrain doesn't cost you extra movement",
      "fresh": "Zilver Maanbolsap",
      "catalyst": "Gloeiwortelsap"
    },
    "Grasland7r+Oerbos8r": {
      "potion": "Potion_21",
      "description": "+2d4 acid damage on your next hit with an attack or single target spell that deals damage. if proficient with alchemist supplies, add proficiency as well. lasts 1 minute or until used",
      "fresh": "Zilver Maanbolsap",
      "catalyst": "Droomklaproos"
    },
    "Grasland8r+Grot2c": {
      "potion": "Potion_9",
      "description": "+1d4 on you next save. lasts 1 minute or until used",
      "fresh": "Arcaan bronbeekwater",
      "catalyst": "Luminescente Koperzwam"
    },
    "Grasland8r+Grot3c": {
      "potion": "Potion_9",
      "description": "+1d4 on you next save. lasts 1 minute or until used",
      "fresh": "Arcaan bronbeekwater",
      "catalyst": "Dieptegloeiende zoutkristallen"
    },
    "Grasland8r+Grot4c": {
      "potion": "Potion_7",
      "description": "medicine temp HP. lasts 1 minute",
      "fresh": "Arcaan bronbeekwater",
      "catalyst": "Sluimerend spelonkmos"
    },
    "Grasland8r+Grot7r": {
      "potion": "Potion_12",
      "description": "this turn, your speed increases by 30 feet and difficult terrain doesn't cost you extra movement",
      "fresh": "Arcaan bronbeekwater",
      "catalyst": "Trilgevoelig Dieptemos"
    },
    "Grasland8r+Kust8r": {
      "potion": "Potion_17",
      "description": "until rest, advantage on all atlethics and acrobatics rolls",
      "fresh": "Arcaan bronbeekwater",
      "catalyst": "Onzichtbaar koraal"
    },
    "Grasland8r+Moeras5c": {
      "potion": "Potion_2",
      "description": "this turn, take a cunning action (dash, disengage or hide)",
      "fresh": "Arcaan bronbeekwater",
      "catalyst": "Zilvertreurwilgenschors"
    },
    "Grasland8r+Oerbos1c": {
      "potion": "Potion_8",
      "description": "the next AoO against you has disadvantage. lasts 1 minute or until used",
      "fresh": "Arcaan bronbeekwater",
      "catalyst": "Fluisterboomhars"
    },
    "Grasland8r+Woestijn2c": {
      "potion": "Potion_1",
      "description": "this turn, your speed increases by 10 feet and difficult terrain doesn't cost you extra movement",
      "fresh": "Arcaan bronbeekwater",
      "catalyst": "Avondgloed-palm bladeren"
    },
    "Grasland8r+Woestijn6r": {
      "potion": "Potion_22",
      "description": "for fire, cold, electric, acid and sonic each, the next time you take damage of that type, half that damage. lasts 1 minute or until used",
      "fresh": "Arcaan bronbeekwater",
      "catalyst": "Zelfontvlammende Cactusbloesem-as"
    },
    "Grasland8r+Woestijn7r": {
      "potion": "Potion_16",
      "description": "healing equal to 2d4 + your medicine skill",
      "fresh": "Arcaan bronbeekwater",
      "catalyst": "Vuurbestendig Jojobahars"
    },
    "Grot1c+Grot4c": {
      "potion": "Potion_7",
      "description": "medicine temp HP. lasts 1 minute",
      "fresh": "Druipsteenwater",
      "catalyst": "Sluimerend spelonkmos"
    },
    "Grot1c+Kust1c": {
      "potion": "Potion_10",
      "description": "+1d4 acid damage on your next hit with attack or single target spell that deals damage. if proficient with alchemist supplies, add proficiency as well. lasts 1 minute or until used",
      "fresh": "Druipsteenwater",
      "catalyst": "Mystiek getijdenzout"
    },
    "Grot1c+Kust3c": {
      "potion": "Potion_1",
      "description": "this turn, your speed increases by 10 feet and difficult terrain doesn't cost you extra movement",
      "fresh": "Druipsteenwater",
      "catalyst": "Parelmoer brandingkalk"
    },
    "Grot1c+Kust8r": {
      "potion": "Potion_8",
      "description": "the next AoO against you has disadvantage. lasts 1 minute or until used",
      "fresh": "Druipsteenwater",
      "catalyst": "Onzichtbaar koraal"
    },
    "Grot1c+Moeras1c": {
      "potion": "Potion_3",
      "description": "this turn, if you didn't move, advantage on one attack",
      "fresh": "Druipsteenwater",
      "catalyst": "Moeras spirea"
    },
    "Grot1c+Moeras2c": {
      "potion": "Potion_3",
      "description": "this turn, if you didn't move, advantage on one attack",
      "fresh": "Druipsteenwater",
      "catalyst": "Mistveenschimmel"
    },
    "Grot1c+Oerbos2c": {
      "potion": "Potion_9",
      "description": "+1d4 on you next save. lasts 1 minute or until used",
      "fresh": "Druipsteenwater",
      "catalyst": "Fluoriserend maanblad"
    },
    "Grot1c+Oerbos8r": {
      "potion": "Potion_8",
      "description": "the next AoO against you has disadvantage. lasts 1 minute or until used",
      "fresh": "Druipsteenwater",
      "catalyst": "Droomklaproos"
    },
    "Grot1c+Woestijn3c": {
      "potion": "Potion_9",
      "description": "+1d4 on you next save. lasts 1 minute or until used",
      "fresh": "Druipsteenwater",
      "catalyst": "Oasedauw"
    },
    "Grot2c+Grot7r": {
      "potion": "Potion_2",
      "description": "this turn, take a cunning action (dash, disengage or hide)",
      "fresh": "Luminescente Koperzwam",
      "catalyst": "Trilgevoelig Dieptemos"
    },
    "Grot2c+Kust1c": {
      "potion": "Potion_1",
      "description": "this turn, your speed increases by 10 feet and difficult terrain doesn't cost you extra movement",
      "fresh": "Luminescente Koperzwam",
      "catalyst": "Mystiek getijdenzout"
    },
    "Grot2c+Kust3c": {
      "potion": "Potion_4",
      "description": "this turn, if you didn't move, the next level 1 spell you cast counts as upcasted by 1 more level. lasts 1 minute or until used",
      "fresh": "Luminescente Koperzwam",
      "catalyst": "Parelmoer brandingkalk"
    },
    "Grot2c+Kust6r": {
      "potion": "Potion_9",
      "description": "+1d4 on you next save. lasts 1 minute or until used",
      "fresh": "Luminescente Koperzwam",
      "catalyst": "Spooklichtschelpen"
    },
    "Grot2c+Kust8r": {
      "potion": "Potion_1",
      "description": "this turn, your speed increases by 10 feet and difficult terrain doesn't cost you extra movement",
      "fresh": "Luminescente Koperzwam",
      "catalyst": "Onzichtbaar koraal"
    },
    "Grot2c+Moeras7r": {
      "potion": "Potion_6",
      "description": "for a minute, advantage on all atlethics and acrobatics rolls",
      "fresh": "Luminescente Koperzwam",
      "catalyst": "Vervlochten mistriet"
    },
    "Grot2c+Oerbos1c": {
      "potion": "Potion_2",
      "description": "this turn, take a cunning action (dash, disengage or hide)",
      "fresh": "Luminescente Koperzwam",
      "catalyst": "Fluisterboomhars"
    },
    "Grot2c+Oerbos5c": {
      "potion": "Potion_10",
      "description": "+1d4 acid damage on your next hit with attack or single target spell that deals damage. if proficient with alchemist supplies, add proficiency as well. lasts 1 minute or until used",
      "fresh": "Luminescente Koperzwam",
      "catalyst": "Maanlichtverrijkte Wilgenbladeren"
    },
    "Grot3c+Grot5c": {
      "potion": "Potion_9",
      "description": "+1d4 on you next save. lasts 1 minute or until used",
      "fresh": "Dieptegloeiende zoutkristallen",
      "catalyst": "Duisteralg"
    },
    "Grot3c+Grot7r": {
      "potion": "Potion_3",
      "description": "this turn, if you didn't move, advantage on one attack",
      "fresh": "Dieptegloeiende zoutkristallen",
      "catalyst": "Trilgevoelig Dieptemos"
    },
    "Grot3c+Kust2c": {
      "potion": "Potion_9",
      "description": "+1d4 on you next save. lasts 1 minute or until used",
      "fresh": "Dieptegloeiende zoutkristallen",
      "catalyst": "Diepzee-sluieralgen"
    },
    "Grot3c+Kust5c": {
      "potion": "Potion_4",
      "description": "this turn, if you didn't move, the next level 1 spell you cast counts as upcasted by 1 more level. lasts 1 minute or until used",
      "fresh": "Dieptegloeiende zoutkristallen",
      "catalyst": "Springtijschuim"
    },
    "Grot3c+Kust6r": {
      "potion": "Potion_4",
      "description": "this turn, if you didn't move, the next level 1 spell you cast counts as upcasted by 1 more level. lasts 1 minute or until used",
      "fresh": "Dieptegloeiende zoutkristallen",
      "catalyst": "Spooklichtschelpen"
    },
    "Grot3c+Kust7r": {
      "potion": "Potion_1",
      "description": "this turn, your speed increases by 10 feet and difficult terrain doesn't cost you extra movement",
      "fresh": "Dieptegloeiende zoutkristallen",
      "catalyst": "Altijdglanzende Parels"
    },
    "Grot3c+Moeras2c": {
      "potion": "Potion_9",
      "description": "+1d4 on you next save. lasts 1 minute or until used",
      "fresh": "Dieptegloeiende zoutkristallen",
      "catalyst": "Mistveenschimmel"
    },
    "Grot3c+Moeras5c": {
      "potion": "Potion_5",
      "description": "healing equal to your medicine skill",
      "fresh": "Dieptegloeiende zoutkristallen",
      "catalyst": "Zilvertreurwilgenschors"
    },
    "Grot3c+Oerbos2c": {
      "potion": "Potion_3",
      "description": "this turn, if you didn't move, advantage on one attack",
      "fresh": "Dieptegloeiende zoutkristallen",
      "catalyst": "Fluoriserend maanblad"
    },
    "Grot3c+Oerbos8r": {
      "potion": "Potion_11",
      "description": "the next time you take elemental damage, half that damage. lasts 1 minute or until used",
      "fresh": "Dieptegloeiende zoutkristallen",
      "catalyst": "Droomklaproos"
    },
    "Grot3c+Woestijn1c": {
      "potion": "Potion_10",
      "description": "+1d4 acid damage on your next hit with attack or single target spell that deals damage. if proficient with alchemist supplies, add proficiency as well. lasts 1 minute or until used",
      "fresh": "Dieptegloeiende zoutkristallen",
      "catalyst": "Zonverschroeid saffraanstof"
    },
    "Grot3c+Woestijn4c": {
      "potion": "Potion_3",
      "description": "this turn, if you didn't move, advantage on one attack",
      "fresh": "Dieptegloeiende zoutkristallen",
      "catalyst": "Zandstormkristal"
    },
    "Grot3c+Woestijn8r": {
      "potion": "Potion_4",
      "description": "this turn, if you didn't move, the next level 1 spell you cast counts as upcasted by 1 more level. lasts 1 minute or until used",
      "fresh": "Dieptegloeiende zoutkristallen",
      "catalyst": "Onverdampbaar oasewater"
    },
    "Grot4c+Grot5c": {
      "potion": "Potion_2",
      "description": "this turn, take a cunning action (dash, disengage or hide)",
      "fresh": "Sluimerend spelonkmos",
      "catalyst": "Duisteralg"
    },
    "Grot4c+Kust2c": {
      "potion": "Potion_5",
      "description": "healing equal to your medicine skill",
      "fresh": "Sluimerend spelonkmos",
      "catalyst": "Diepzee-sluieralgen"
    },
    "Grot4c+Kust5c": {
      "potion": "Potion_3",
      "description": "this turn, if you didn't move, advantage on one attack",
      "fresh": "Sluimerend spelonkmos",
      "catalyst": "Springtijschuim"
    },
    "Grot4c+Kust7r": {
      "potion": "Potion_5",
      "description": "healing equal to your medicine skill",
      "fresh": "Sluimerend spelonkmos",
      "catalyst": "Altijdglanzende Parels"
    },
    "Grot4c+Moeras3c": {
      "potion": "Potion_11",
      "description": "the next time you take elemental damage, half that damage. lasts 1 minute or until used",
      "fresh": "Sluimerend spelonkmos",
      "catalyst": "Schaduwglanzende moerasbessen"
    },
    "Grot4c+Oerbos2c": {
      "potion": "Potion_3",
      "description": "this turn, if you didn't move, advantage on one attack",
      "fresh": "Sluimerend spelonkmos",
      "catalyst": "Fluoriserend maanblad"
    },
    "Grot4c+Oerbos5c": {
      "potion": "Potion_6",
      "description": "for a minute, advantage on all atlethics and acrobatics rolls",
      "fresh": "Sluimerend spelonkmos",
      "catalyst": "Maanlichtverrijkte Wilgenbladeren"
    },
    "Grot4c+Oerbos6r": {
      "potion": "Potion_4",
      "description": "this turn, if you didn't move, the next level 1 spell you cast counts as upcasted by 1 more level. lasts 1 minute or until used",
      "fresh": "Sluimerend spelonkmos",
      "catalyst": "Nachtbloeiende Bosanemoon"
    },
    "Grot4c+Oerbos7r": {
      "potion": "Potion_2",
      "description": "this turn, take a cunning action (dash, disengage or hide)",
      "fresh": "Sluimerend spelonkmos",
      "catalyst": "Smaragdgroene sterrenvaren"
    },
    "Grot4c+Oerbos8r": {
      "potion": "Potion_4",
      "description": "this turn, if you didn't move, the next level 1 spell you cast counts as upcasted by 1 more level. lasts 1 minute or until used",
      "fresh": "Sluimerend spelonkmos",
      "catalyst": "Droomklaproos"
    },
    "Grot5c+Grot6r": {
      "potion": "Potion_2",
      "description": "this turn, take a cunning action (dash, disengage or hide)",
      "fresh": "Duisteralg",
      "catalyst": "Oerertsdoortrokken Boleet"
    },
    "Grot5c+Grot7r": {
      "potion": "Potion_4",
      "description": "this turn, if you didn't move, the next level 1 spell you cast counts as upcasted by 1 more level. lasts 1 minute or until used",
      "fresh": "Duisteralg",
      "catalyst": "Trilgevoelig Dieptemos"
    },
    "Grot5c+Kust1c": {
      "potion": "Potion_4",
      "description": "this turn, if you didn't move, the next level 1 spell you cast counts as upcasted by 1 more level. lasts 1 minute or until used",
      "fresh": "Duisteralg",
      "catalyst": "Mystiek getijdenzout"
    },
    "Grot5c+Kust7r": {
      "potion": "Potion_11",
      "description": "the next time you take elemental damage, half that damage. lasts 1 minute or until used",
      "fresh": "Duisteralg",
      "catalyst": "Altijdglanzende Parels"
    },
    "Grot5c+Moeras1c": {
      "potion": "Potion_4",
      "description": "this turn, if you didn't move, the next level 1 spell you cast counts as upcasted by 1 more level. lasts 1 minute or until used",
      "fresh": "Duisteralg",
      "catalyst": "Moeras spirea"
    },
    "Grot5c+Oerbos2c": {
      "potion": "Potion_9",
      "description": "+1d4 on you next save. lasts 1 minute or until used",
      "fresh": "Duisteralg",
      "catalyst": "Fluoriserend maanblad"
    },
    "Grot5c+Oerbos5c": {
      "potion": "Potion_7",
      "description": "medicine temp HP. lasts 1 minute",
      "fresh": "Duisteralg",
      "catalyst": "Maanlichtverrijkte Wilgenbladeren"
    },
    "Grot5c+Woestijn5c": {
      "potion": "Potion_2",
      "description": "this turn, take a cunning action (dash, disengage or hide)",
      "fresh": "Duisteralg",
      "catalyst": "Versteend Dadelpalmschors"
    },
    "Grot5c+Woestijn7r": {
      "potion": "Potion_8",
      "description": "the next AoO against you has disadvantage. lasts 1 minute or until used",
      "fresh": "Duisteralg",
      "catalyst": "Vuurbestendig Jojobahars"
    },
    "Grot6r+Kust2c": {
      "potion": "Potion_5",
      "description": "healing equal to your medicine skill",
      "fresh": "Oerertsdoortrokken Boleet",
      "catalyst": "Diepzee-sluieralgen"
    },
    "Grot6r+Kust7r": {
      "potion": "Potion_21",
      "description": "+2d4 acid damage on your next hit with an attack or single target spell that deals damage. if proficient with alchemist supplies, add proficiency as well. lasts 1 minute or until used",
      "fresh": "Oerertsdoortrokken Boleet",
      "catalyst": "Altijdglanzende Parels"
    },
    "Grot6r+Moeras7r": {
      "potion": "Potion_15",
      "description": "this turn, if you didn't move, you next spell casts as 1 level higher. lasts 1 minute or until used",
      "fresh": "Oerertsdoortrokken Boleet",
      "catalyst": "Vervlochten mistriet"
    },
    "Grot6r+Oerbos2c": {
      "potion": "Potion_8",
      "description": "the next AoO against you has disadvantage. lasts 1 minute or until used",
      "fresh": "Oerertsdoortrokken Boleet",
      "catalyst": "Fluoriserend maanblad"
    },
    "Grot6r+Woestijn1c": {
      "potion": "Potion_2",
      "description": "this turn, take a cunning action (dash, disengage or hide)",
      "fresh": "Oerertsdoortrokken Boleet",
      "catalyst": "Zonverschroeid saffraanstof"
    },
    "Grot6r+Woestijn3c": {
      "potion": "Potion_8",
      "description": "the next AoO against you has disadvantage. lasts 1 minute or until used",
      "fresh": "Oerertsdoortrokken Boleet",
      "catalyst": "Oasedauw"
    },
    "Grot6r+Woestijn6r": {
      "potion": "Potion_17",
      "description": "until rest, advantage on all atlethics and acrobatics rolls",
      "fresh": "Oerertsdoortrokken Boleet",
      "catalyst": "Zelfontvlammende Cactusbloesem-as"
    },
    "Grot7r+Kust3c": {
      "potion": "Potion_10",
      "description": "+1d4 acid damage on your next hit with attack or single target spell that deals damage. if proficient with alchemist supplies, add proficiency as well. lasts 1 minute or until used",
      "fresh": "Trilgevoelig Dieptemos",
      "catalyst": "Parelmoer brandingkalk"
    },
    "Grot7r+Kust4c": {
      "potion": "Potion_11",
      "description": "the next time you take elemental damage, half that damage. lasts 1 minute or until used",
      "fresh": "Trilgevoelig Dieptemos",
      "catalyst": "Zeelavendel"
    },
    "Grot7r+Kust8r": {
      "potion": "Potion_13",
      "description": "this turn, take two cunning actions (dash, disengage or hide)",
      "fresh": "Trilgevoelig Dieptemos",
      "catalyst": "Onzichtbaar koraal"
    },
    "Grot7r+Moeras2c": {
      "potion": "Potion_7",
      "description": "medicine temp HP. lasts 1 minute",
      "fresh": "Trilgevoelig Dieptemos",
      "catalyst": "Mistveenschimmel"
    },
    "Grot7r+Moeras5c": {
      "potion": "Potion_1",
      "description": "this turn, your speed increases by 10 feet and difficult terrain doesn't cost you extra movement",
      "fresh": "Trilgevoelig Dieptemos",
      "catalyst": "Zilvertreurwilgenschors"
    },
    "Grot7r+Oerbos1c": {
      "potion": "Potion_10",
      "description": "+1d4 acid damage on your next hit with attack or single target spell that deals damage. if proficient with alchemist supplies, add proficiency as well. lasts 1 minute or until used",
      "fresh": "Trilgevoelig Dieptemos",
      "catalyst": "Fluisterboomhars"
    },
    "Grot7r+Oerbos3c": {
      "potion": "Potion_2",
      "description": "this turn, take a cunning action (dash, disengage or hide)",
      "fresh": "Trilgevoelig Dieptemos",
      "catalyst": "Gloeiwortelsap"
    },
    "Grot7r+Oerbos5c": {
      "potion": "Potion_2",
      "description": "this turn, take a cunning action (dash, disengage or hide)",
      "fresh": "Trilgevoelig Dieptemos",
      "catalyst": "Maanlichtverrijkte Wilgenbladeren"
    },
    "Grot7r+Oerbos6r": {
      "potion": "Potion_15",
      "description": "this turn, if you didn't move, you next spell casts as 1 level higher. lasts 1 minute or until used",
      "fresh": "Trilgevoelig Dieptemos",
      "catalyst": "Nachtbloeiende Bosanemoon"
    },
    "Grot7r+Oerbos7r": {
      "potion": "Potion_20",
      "description": "+2d4 on your next save. lasts 1 minute or until used",
      "fresh": "Trilgevoelig Dieptemos",
      "catalyst": "Smaragdgroene sterrenvaren"
    },
    "Grot7r+Woestijn3c": {
      "potion": "Potion_6",
      "description": "for a minute, advantage on all atlethics and acrobatics rolls",
      "fresh": "Trilgevoelig Dieptemos",
      "catalyst": "Oasedauw"
    },
    "Grot7r+Woestijn8r": {
      "potion": "Potion_18",
      "description": "temp hp equal to 2d4 + your medicine skill. lasts 1 minute",
      "fresh": "Trilgevoelig Dieptemos",
      "catalyst": "Onverdampbaar oasewater"
    },
    "Grot8r+Kust5c": {
      "potion": "Potion_2",
      "description": "this turn, take a cunning action (dash, disengage or hide)",
      "fresh": "Eeuwige fluisterkristallen",
      "catalyst": "Springtijschuim"
    },
    "Grot8r+Kust8r": {
      "potion": "Potion_12",
      "description": "this turn, your speed increases by 30 feet and difficult terrain doesn't cost you extra movement",
      "fresh": "Eeuwige fluisterkristallen",
      "catalyst": "Onzichtbaar koraal"
    },
    "Grot8r+Moeras4c": {
      "potion": "Potion_1",
      "description": "this turn, your speed increases by 10 feet and difficult terrain doesn't cost you extra movement",
      "fresh": "Eeuwige fluisterkristallen",
      "catalyst": "Nachtmistzwam"
    },
    "Grot8r+Oerbos1c": {
      "potion": "Potion_11",
      "description": "the next time you take elemental damage, half that damage. lasts 1 minute or until used",
      "fresh": "Eeuwige fluisterkristallen",
      "catalyst": "Fluisterboomhars"
    },
    "Grot8r+Oerbos7r": {
      "potion": "Potion_18",
      "description": "temp hp equal to 2d4 + your medicine skill. lasts 1 minute",
      "fresh": "Eeuwige fluisterkristallen",
      "catalyst": "Smaragdgroene sterrenvaren"
    },
    "Grot8r+Woestijn2c": {
      "potion": "Potion_9",
      "description": "+1d4 on you next save. lasts 1 minute or until used",
      "fresh": "Eeuwige fluisterkristallen",
      "catalyst": "Avondgloed-palm bladeren"
    },
    "Grot8r+Woestijn4c": {
      "potion": "Potion_9",
      "description": "+1d4 on you next save. lasts 1 minute or until used",
      "fresh": "Eeuwige fluisterkristallen",
      "catalyst": "Zandstormkristal"
    },
    "Grot8r+Woestijn5c": {
      "potion": "Potion_9",
      "description": "+1d4 on you next save. lasts 1 minute or until used",
      "fresh": "Eeuwige fluisterkristallen",
      "catalyst": "Versteend Dadelpalmschors"
    },
    "Grot8r+Woestijn6r": {
      "potion": "Potion_17",
      "description": "until rest, advantage on all atlethics and acrobatics rolls",
      "fresh": "Eeuwige fluisterkristallen",
      "catalyst": "Zelfontvlammende Cactusbloesem-as"
    },
    "Kust1c+Kust7r": {
      "potion": "Potion_5",
      "description": "healing equal to your medicine skill",
      "fresh": "Mystiek getijdenzout",
      "catalyst": "Altijdglanzende Parels"
    },
    "Kust1c+Moeras3c": {
      "potion": "Potion_1",
      "description": "this turn, your speed increases by 10 feet and difficult terrain doesn't cost you extra movement",
      "fresh": "Mystiek getijdenzout",
      "catalyst": "Schaduwglanzende moerasbessen"
    },
    "Kust1c+Moeras8r": {
      "potion": "Potion_8",
      "description": "the next AoO against you has disadvantage. lasts 1 minute or until used",
      "fresh": "Mystiek getijdenzout",
      "catalyst": "Magiedoordrenkt Veenmos"
    },
    "Kust1c+Oerbos3c": {
      "potion": "Potion_11",
      "description": "the next time you take elemental damage, half that damage. lasts 1 minute or until used",
      "fresh": "Mystiek getijdenzout",
      "catalyst": "Gloeiwortelsap"
    },
    "Kust1c+Oerbos6r": {
      "potion": "Potion_5",
      "description": "healing equal to your medicine skill",
      "fresh": "Mystiek getijdenzout",
      "catalyst": "Nachtbloeiende Bosanemoon"
    },
    "Kust1c+Woestijn1c": {
      "potion": "Potion_2",
      "description": "this turn, take a cunning action (dash, disengage or hide)",
      "fresh": "Mystiek getijdenzout",
      "catalyst": "Zonverschroeid saffraanstof"
    },
    "Kust1c+Woestijn8r": {
      "potion": "Potion_11",
      "description": "the next time you take elemental damage, half that damage. lasts 1 minute or until used",
      "fresh": "Mystiek getijdenzout",
      "catalyst": "Onverdampbaar oasewater"
    },
    "Kust2c+Moeras1c": {
      "potion": "Potion_11",
      "description": "the next time you take elemental damage, half that damage. lasts 1 minute or until used",
      "fresh": "Diepzee-sluieralgen",
      "catalyst": "Moeras spirea"
    },
    "Kust2c+Moeras6r": {
      "potion": "Potion_5",
      "description": "healing equal to your medicine skill",
      "fresh": "Diepzee-sluieralgen",
      "catalyst": "Zwarte Lotus"
    },
    "Kust2c+Moeras8r": {
      "potion": "Potion_3",
      "description": "this turn, if you didn't move, advantage on one attack",
      "fresh": "Diepzee-sluieralgen",
      "catalyst": "Magiedoordrenkt Veenmos"
    },
    "Kust2c+Woestijn3c": {
      "potion": "Potion_11",
      "description": "the next time you take elemental damage, half that damage. lasts 1 minute or until used",
      "fresh": "Diepzee-sluieralgen",
      "catalyst": "Oasedauw"
    },
    "Kust2c+Woestijn7r": {
      "potion": "Potion_2",
      "description": "this turn, take a cunning action (dash, disengage or hide)",
      "fresh": "Diepzee-sluieralgen",
      "catalyst": "Vuurbestendig Jojobahars"
    },
    "Kust3c+Kust4c": {
      "potion": "Potion_7",
      "description": "medicine temp HP. lasts 1 minute",
      "fresh": "Parelmoer brandingkalk",
      "catalyst": "Zeelavendel"
    },
    "Kust3c+Kust5c": {
      "potion": "Potion_4",
      "description": "this turn, if you didn't move, the next level 1 spell you cast counts as upcasted by 1 more level. lasts 1 minute or until used",
      "fresh": "Parelmoer brandingkalk",
      "catalyst": "Springtijschuim"
    },
    "Kust3c+Kust6r": {
      "potion": "Potion_11",
      "description": "the next time you take elemental damage, half that damage. lasts 1 minute or until used",
      "fresh": "Parelmoer brandingkalk",
      "catalyst": "Spooklichtschelpen"
    },
    "Kust3c+Kust8r": {
      "potion": "Potion_4",
      "description": "this turn, if you didn't move, the next level 1 spell you cast counts as upcasted by 1 more level. lasts 1 minute or until used",
      "fresh": "Parelmoer brandingkalk",
      "catalyst": "Onzichtbaar koraal"
    },
    "Kust3c+Moeras2c": {
      "potion": "Potion_4",
      "description": "this turn, if you didn't move, the next level 1 spell you cast counts as upcasted by 1 more level. lasts 1 minute or until used",
      "fresh": "Parelmoer brandingkalk",
      "catalyst": "Mistveenschimmel"
    },
    "Kust3c+Moeras5c": {
      "potion": "Potion_6",
      "description": "for a minute, advantage on all atlethics and acrobatics rolls",
      "fresh": "Parelmoer brandingkalk",
      "catalyst": "Zilvertreurwilgenschors"
    },
    "Kust3c+Oerbos3c": {
      "potion": "Potion_10",
      "description": "+1d4 acid damage on your next hit with attack or single target spell that deals damage. if proficient with alchemist supplies, add proficiency as well. lasts 1 minute or until used",
      "fresh": "Parelmoer brandingkalk",
      "catalyst": "Gloeiwortelsap"
    },
    "Kust3c+Oerbos4c": {
      "potion": "Potion_2",
      "description": "this turn, take a cunning action (dash, disengage or hide)",
      "fresh": "Parelmoer brandingkalk",
      "catalyst": "Betoverd dauwmos"
    },
    "Kust3c+Oerbos6r": {
      "potion": "Potion_4",
      "description": "this turn, if you didn't move, the next level 1 spell you cast counts as upcasted by 1 more level. lasts 1 minute or until used",
      "fresh": "Parelmoer brandingkalk",
      "catalyst": "Nachtbloeiende Bosanemoon"
    },
    "Kust3c+Woestijn2c": {
      "potion": "Potion_5",
      "description": "healing equal to your medicine skill",
      "fresh": "Parelmoer brandingkalk",
      "catalyst": "Avondgloed-palm bladeren"
    },
    "Kust3c+Woestijn8r": {
      "potion": "Potion_5",
      "description": "healing equal to your medicine skill",
      "fresh": "Parelmoer brandingkalk",
      "catalyst": "Onverdampbaar oasewater"
    },
    "Kust4c+Kust5c": {
      "potion": "Potion_6",
      "description": "for a minute, advantage on all atlethics and acrobatics rolls",
      "fresh": "Zeelavendel",
      "catalyst": "Springtijschuim"
    },
    "Kust4c+Kust6r": {
      "potion": "Potion_1",
      "description": "this turn, your speed increases by 10 feet and difficult terrain doesn't cost you extra movement",
      "fresh": "Zeelavendel",
      "catalyst": "Spooklichtschelpen"
    },
    "Kust4c+Kust8r": {
      "potion": "Potion_10",
      "description": "+1d4 acid damage on your next hit with attack or single target spell that deals damage. if proficient with alchemist supplies, add proficiency as well. lasts 1 minute or until used",
      "fresh": "Zeelavendel",
      "catalyst": "Onzichtbaar koraal"
    },
    "Kust4c+Moeras1c": {
      "potion": "Potion_1",
      "description": "this turn, your speed increases by 10 feet and difficult terrain doesn't cost you extra movement",
      "fresh": "Zeelavendel",
      "catalyst": "Moeras spirea"
    },
    "Kust4c+Moeras2c": {
      "potion": "Potion_9",
      "description": "+1d4 on you next save. lasts 1 minute or until used",
      "fresh": "Zeelavendel",
      "catalyst": "Mistveenschimmel"
    },
    "Kust4c+Oerbos5c": {
      "potion": "Potion_11",
      "description": "the next time you take elemental damage, half that damage. lasts 1 minute or until used",
      "fresh": "Zeelavendel",
      "catalyst": "Maanlichtverrijkte Wilgenbladeren"
    },
    "Kust4c+Woestijn1c": {
      "potion": "Potion_11",
      "description": "the next time you take elemental damage, half that damage. lasts 1 minute or until used",
      "fresh": "Zeelavendel",
      "catalyst": "Zonverschroeid saffraanstof"
    },
    "Kust4c+Woestijn3c": {
      "potion": "Potion_11",
      "description": "the next time you take elemental damage, half that damage. lasts 1 minute or until used",
      "fresh": "Zeelavendel",
      "catalyst": "Oasedauw"
    },
    "Kust4c+Woestijn4c": {
      "potion": "Potion_8",
      "description": "the next AoO against you has disadvantage. lasts 1 minute or until used",
      "fresh": "Zeelavendel",
      "catalyst": "Zandstormkristal"
    },
    "Kust5c+Kust7r": {
      "potion": "Potion_11",
      "description": "the next time you take elemental damage, half that damage. lasts 1 minute or until used",
      "fresh": "Springtijschuim",
      "catalyst": "Altijdglanzende Parels"
    },
    "Kust5c+Moeras4c": {
      "potion": "Potion_5",
      "description": "healing equal to your medicine skill",
      "fresh": "Springtijschuim",
      "catalyst": "Nachtmistzwam"
    },
    "Kust5c+Oerbos1c": {
      "potion": "Potion_5",
      "description": "healing equal to your medicine skill",
      "fresh": "Springtijschuim",
      "catalyst": "Fluisterboomhars"
    },
    "Kust5c+Oerbos6r": {
      "potion": "Potion_8",
      "description": "the next AoO against you has disadvantage. lasts 1 minute or until used",
      "fresh": "Springtijschuim",
      "catalyst": "Nachtbloeiende Bosanemoon"
    },
    "Kust5c+Woestijn2c": {
      "potion": "Potion_2",
      "description": "this turn, take a cunning action (dash, disengage or hide)",
      "fresh": "Springtijschuim",
      "catalyst": "Avondgloed-palm bladeren"
    },
    "Kust5c+Woestijn5c": {
      "potion": "Potion_5",
      "description": "healing equal to your medicine skill",
      "fresh": "Springtijschuim",
      "catalyst": "Versteend Dadelpalmschors"
    },
    "Kust5c+Woestijn7r": {
      "potion": "Potion_4",
      "description": "this turn, if you didn't move, the next level 1 spell you cast counts as upcasted by 1 more level. lasts 1 minute or until used",
      "fresh": "Springtijschuim",
      "catalyst": "Vuurbestendig Jojobahars"
    },
    "Kust5c+Woestijn8r": {
      "potion": "Potion_3",
      "description": "this turn, if you didn't move, advantage on one attack",
      "fresh": "Springtijschuim",
      "catalyst": "Onverdampbaar oasewater"
    },
    "Kust6r+Oerbos2c": {
      "potion": "Potion_7",
      "description": "medicine temp HP. lasts 1 minute",
      "fresh": "Spooklichtschelpen",
      "catalyst": "Fluoriserend maanblad"
    },
    "Kust6r+Oerbos7r": {
      "potion": "Potion_19",
      "description": "the next attack against you has disadvantage. lasts 1 minute or until used",
      "fresh": "Spooklichtschelpen",
      "catalyst": "Smaragdgroene sterrenvaren"
    },
    "Kust6r+Woestijn1c": {
      "potion": "Potion_2",
      "description": "this turn, take a cunning action (dash, disengage or hide)",
      "fresh": "Spooklichtschelpen",
      "catalyst": "Zonverschroeid saffraanstof"
    },
    "Kust6r+Woestijn7r": {
      "potion": "Potion_15",
      "description": "this turn, if you didn't move, you next spell casts as 1 level higher. lasts 1 minute or until used",
      "fresh": "Spooklichtschelpen",
      "catalyst": "Vuurbestendig Jojobahars"
    },
    "Kust7r+Kust8r": {
      "potion": "Potion_19",
      "description": "the next attack against you has disadvantage. lasts 1 minute or until used",
      "fresh": "Altijdglanzende Parels",
      "catalyst": "Onzichtbaar koraal"
    },
    "Kust7r+Moeras2c": {
      "potion": "Potion_1",
      "description": "this turn, your speed increases by 10 feet and difficult terrain doesn't cost you extra movement",
      "fresh": "Altijdglanzende Parels",
      "catalyst": "Mistveenschimmel"
    },
    "Kust7r+Moeras7r": {
      "potion": "Potion_18",
      "description": "temp hp equal to 2d4 + your medicine skill. lasts 1 minute",
      "fresh": "Altijdglanzende Parels",
      "catalyst": "Vervlochten mistriet"
    },
    "Kust7r+Woestijn6r": {
      "potion": "Potion_22",
      "description": "for fire, cold, electric, acid and sonic each, the next time you take damage of that type, half that damage. lasts 1 minute or until used",
      "fresh": "Altijdglanzende Parels",
      "catalyst": "Zelfontvlammende Cactusbloesem-as"
    },
    "Kust7r+Woestijn7r": {
      "potion": "Potion_20",
      "description": "+2d4 on your next save. lasts 1 minute or until used",
      "fresh": "Altijdglanzende Parels",
      "catalyst": "Vuurbestendig Jojobahars"
    },
    "Kust8r+Moeras8r": {
      "potion": "Potion_14",
      "description": "this turn, if you didn't move, advantage on one attack. crit on 19-20",
      "fresh": "Onzichtbaar koraal",
      "catalyst": "Magiedoordrenkt Veenmos"
    },
    "Kust8r+Oerbos6r": {
      "potion": "Potion_13",
      "description": "this turn, take two cunning actions (dash, disengage or hide)",
      "fresh": "Onzichtbaar koraal",
      "catalyst": "Nachtbloeiende Bosanemoon"
    },
    "Kust8r+Woestijn5c": {
      "potion": "Potion_7",
      "description": "medicine temp HP. lasts 1 minute",
      "fresh": "Onzichtbaar koraal",
      "catalyst": "Versteend Dadelpalmschors"
    },
    "Kust8r+Woestijn8r": {
      "potion": "Potion_12",
      "description": "this turn, your speed increases by 30 feet and difficult terrain doesn't cost you extra movement",
      "fresh": "Onzichtbaar koraal",
      "catalyst": "Onverdampbaar oasewater"
    },
    "Moeras1c+Moeras2c": {
      "potion": "Potion_8",
      "description": "the next AoO against you has disadvantage. lasts 1 minute or until used",
      "fresh": "Moeras spirea",
      "catalyst": "Mistveenschimmel"
    },
    "Moeras1c+Moeras5c": {
      "potion": "Potion_4",
      "description": "this turn, if you didn't move, the next level 1 spell you cast counts as upcasted by 1 more level. lasts 1 minute or until used",
      "fresh": "Moeras spirea",
      "catalyst": "Zilvertreurwilgenschors"
    },
    "Moeras1c+Moeras7r": {
      "potion": "Potion_2",
      "description": "this turn, take a cunning action (dash, disengage or hide)",
      "fresh": "Moeras spirea",
      "catalyst": "Vervlochten mistriet"
    },
    "Moeras1c+Oerbos1c": {
      "potion": "Potion_3",
      "description": "this turn, if you didn't move, advantage on one attack",
      "fresh": "Moeras spirea",
      "catalyst": "Fluisterboomhars"
    },
    "Moeras1c+Oerbos4c": {
      "potion": "Potion_7",
      "description": "medicine temp HP. lasts 1 minute",
      "fresh": "Moeras spirea",
      "catalyst": "Betoverd dauwmos"
    },
    "Moeras1c+Oerbos5c": {
      "potion": "Potion_10",
      "description": "+1d4 acid damage on your next hit with attack or single target spell that deals damage. if proficient with alchemist supplies, add proficiency as well. lasts 1 minute or until used",
      "fresh": "Moeras spirea",
      "catalyst": "Maanlichtverrijkte Wilgenbladeren"
    },
    "Moeras1c+Oerbos6r": {
      "potion": "Potion_7",
      "description": "medicine temp HP. lasts 1 minute",
      "fresh": "Moeras spirea",
      "catalyst": "Nachtbloeiende Bosanemoon"
    },
    "Moeras1c+Woestijn2c": {
      "potion": "Potion_3",
      "description": "this turn, if you didn't move, advantage on one attack",
      "fresh": "Moeras spirea",
      "catalyst": "Avondgloed-palm bladeren"
    },
    "Moeras1c+Woestijn4c": {
      "potion": "Potion_5",
      "description": "healing equal to your medicine skill",
      "fresh": "Moeras spirea",
      "catalyst": "Zandstormkristal"
    },
    "Moeras1c+Woestijn7r": {
      "potion": "Potion_1",
      "description": "this turn, your speed increases by 10 feet and difficult terrain doesn't cost you extra movement",
      "fresh": "Moeras spirea",
      "catalyst": "Vuurbestendig Jojobahars"
    },
    "Moeras2c+Moeras5c": {
      "potion": "Potion_10",
      "description": "+1d4 acid damage on your next hit with attack or single target spell that deals damage. if proficient with alchemist supplies, add proficiency as well. lasts 1 minute or until used",
      "fresh": "Mistveenschimmel",
      "catalyst": "Zilvertreurwilgenschors"
    },
    "Moeras2c+Oerbos4c": {
      "potion": "Potion_10",
      "description": "+1d4 acid damage on your next hit with attack or single target spell that deals damage. if proficient with alchemist supplies, add proficiency as well. lasts 1 minute or until used",
      "fresh": "Mistveenschimmel",
      "catalyst": "Betoverd dauwmos"
    },
    "Moeras2c+Woestijn3c": {
      "potion": "Potion_1",
      "description": "this turn, your speed increases by 10 feet and difficult terrain doesn't cost you extra movement",
      "fresh": "Mistveenschimmel",
      "catalyst": "Oasedauw"
    },
    "Moeras2c+Woestijn4c": {
      "potion": "Potion_9",
      "description": "+1d4 on you next save. lasts 1 minute or until used",
      "fresh": "Mistveenschimmel",
      "catalyst": "Zandstormkristal"
    },
    "Moeras2c+Woestijn6r": {
      "potion": "Potion_4",
      "description": "this turn, if you didn't move, the next level 1 spell you cast counts as upcasted by 1 more level. lasts 1 minute or until used",
      "fresh": "Mistveenschimmel",
      "catalyst": "Zelfontvlammende Cactusbloesem-as"
    },
    "Moeras2c+Woestijn7r": {
      "potion": "Potion_6",
      "description": "for a minute, advantage on all atlethics and acrobatics rolls",
      "fresh": "Mistveenschimmel",
      "catalyst": "Vuurbestendig Jojobahars"
    },
    "Moeras3c+Moeras5c": {
      "potion": "Potion_4",
      "description": "this turn, if you didn't move, the next level 1 spell you cast counts as upcasted by 1 more level. lasts 1 minute or until used",
      "fresh": "Schaduwglanzende moerasbessen",
      "catalyst": "Zilvertreurwilgenschors"
    },
    "Moeras3c+Moeras6r": {
      "potion": "Potion_11",
      "description": "the next time you take elemental damage, half that damage. lasts 1 minute or until used",
      "fresh": "Schaduwglanzende moerasbessen",
      "catalyst": "Zwarte Lotus"
    },
    "Moeras3c+Moeras7r": {
      "potion": "Potion_1",
      "description": "this turn, your speed increases by 10 feet and difficult terrain doesn't cost you extra movement",
      "fresh": "Schaduwglanzende moerasbessen",
      "catalyst": "Vervlochten mistriet"
    },
    "Moeras3c+Oerbos2c": {
      "potion": "Potion_9",
      "description": "+1d4 on you next save. lasts 1 minute or until used",
      "fresh": "Schaduwglanzende moerasbessen",
      "catalyst": "Fluoriserend maanblad"
    },
    "Moeras3c+Oerbos5c": {
      "potion": "Potion_10",
      "description": "+1d4 acid damage on your next hit with attack or single target spell that deals damage. if proficient with alchemist supplies, add proficiency as well. lasts 1 minute or until used",
      "fresh": "Schaduwglanzende moerasbessen",
      "catalyst": "Maanlichtverrijkte Wilgenbladeren"
    },
    "Moeras3c+Woestijn4c": {
      "potion": "Potion_8",
      "description": "the next AoO against you has disadvantage. lasts 1 minute or until used",
      "fresh": "Schaduwglanzende moerasbessen",
      "catalyst": "Zandstormkristal"
    },
    "Moeras3c+Woestijn5c": {
      "potion": "Potion_8",
      "description": "the next AoO against you has disadvantage. lasts 1 minute or until used",
      "fresh": "Schaduwglanzende moerasbessen",
      "catalyst": "Versteend Dadelpalmschors"
    },
    "Moeras3c+Woestijn6r": {
      "potion": "Potion_11",
      "description": "the next time you take elemental damage, half that damage. lasts 1 minute or until used",
      "fresh": "Schaduwglanzende moerasbessen",
      "catalyst": "Zelfontvlammende Cactusbloesem-as"
    },
    "Moeras3c+Woestijn8r": {
      "potion": "Potion_1",
      "description": "this turn, your speed increases by 10 feet and difficult terrain doesn't cost you extra movement",
      "fresh": "Schaduwglanzende moerasbessen",
      "catalyst": "Onverdampbaar oasewater"
    },
    "Moeras4c+Moeras5c": {
      "potion": "Potion_4",
      "description": "this turn, if you didn't move, the next level 1 spell you cast counts as upcasted by 1 more level. lasts 1 minute or until used",
      "fresh": "Nachtmistzwam",
      "catalyst": "Zilvertreurwilgenschors"
    },
    "Moeras4c+Oerbos4c": {
      "potion": "Potion_9",
      "description": "+1d4 on you next save. lasts 1 minute or until used",
      "fresh": "Nachtmistzwam",
      "catalyst": "Betoverd dauwmos"
    },
    "Moeras4c+Oerbos5c": {
      "potion": "Potion_7",
      "description": "medicine temp HP. lasts 1 minute",
      "fresh": "Nachtmistzwam",
      "catalyst": "Maanlichtverrijkte Wilgenbladeren"
    },
    "Moeras4c+Woestijn4c": {
      "potion": "Potion_10",
      "description": "+1d4 acid damage on your next hit with attack or single target spell that deals damage. if proficient with alchemist supplies, add proficiency as well. lasts 1 minute or until used",
      "fresh": "Nachtmistzwam",
      "catalyst": "Zandstormkristal"
    },
    "Moeras4c+Woestijn5c": {
      "potion": "Potion_9",
      "description": "+1d4 on you next save. lasts 1 minute or until used",
      "fresh": "Nachtmistzwam",
      "catalyst": "Versteend Dadelpalmschors"
    },
    "Moeras4c+Woestijn8r": {
      "potion": "Potion_8",
      "description": "the next AoO against you has disadvantage. lasts 1 minute or until used",
      "fresh": "Nachtmistzwam",
      "catalyst": "Onverdampbaar oasewater"
    },
    "Moeras5c+Moeras6r": {
      "potion": "Potion_10",
      "description": "+1d4 acid damage on your next hit with attack or single target spell that deals damage. if proficient with alchemist supplies, add proficiency as well. lasts 1 minute or until used",
      "fresh": "Zilvertreurwilgenschors",
      "catalyst": "Zwarte Lotus"
    },
    "Moeras5c+Oerbos2c": {
      "potion": "Potion_6",
      "description": "for a minute, advantage on all atlethics and acrobatics rolls",
      "fresh": "Zilvertreurwilgenschors",
      "catalyst": "Fluoriserend maanblad"
    },
    "Moeras5c+Oerbos6r": {
      "potion": "Potion_3",
      "description": "this turn, if you didn't move, advantage on one attack",
      "fresh": "Zilvertreurwilgenschors",
      "catalyst": "Nachtbloeiende Bosanemoon"
    },
    "Moeras5c+Oerbos8r": {
      "potion": "Potion_10",
      "description": "+1d4 acid damage on your next hit with attack or single target spell that deals damage. if proficient with alchemist supplies, add proficiency as well. lasts 1 minute or until used",
      "fresh": "Zilvertreurwilgenschors",
      "catalyst": "Droomklaproos"
    },
    "Moeras5c+Woestijn5c": {
      "potion": "Potion_7",
      "description": "medicine temp HP. lasts 1 minute",
      "fresh": "Zilvertreurwilgenschors",
      "catalyst": "Versteend Dadelpalmschors"
    },
    "Moeras5c+Woestijn6r": {
      "potion": "Potion_11",
      "description": "the next time you take elemental damage, half that damage. lasts 1 minute or until used",
      "fresh": "Zilvertreurwilgenschors",
      "catalyst": "Zelfontvlammende Cactusbloesem-as"
    },
    "Moeras5c+Woestijn7r": {
      "potion": "Potion_3",
      "description": "this turn, if you didn't move, advantage on one attack",
      "fresh": "Zilvertreurwilgenschors",
      "catalyst": "Vuurbestendig Jojobahars"
    },
    "Moeras6r+Moeras8r": {
      "potion": "Potion_12",
      "description": "this turn, your speed increases by 30 feet and difficult terrain doesn't cost you extra movement",
      "fresh": "Zwarte Lotus",
      "catalyst": "Magiedoordrenkt Veenmos"
    },
    "Moeras6r+Oerbos1c": {
      "potion": "Potion_3",
      "description": "this turn, if you didn't move, advantage on one attack",
      "fresh": "Zwarte Lotus",
      "catalyst": "Fluisterboomhars"
    },
    "Moeras6r+Oerbos3c": {
      "potion": "Potion_5",
      "description": "healing equal to your medicine skill",
      "fresh": "Zwarte Lotus",
      "catalyst": "Gloeiwortelsap"
    },
    "Moeras6r+Oerbos7r": {
      "potion": "Potion_16",
      "description": "healing equal to 2d4 + your medicine skill",
      "fresh": "Zwarte Lotus",
      "catalyst": "Smaragdgroene sterrenvaren"
    },
    "Moeras6r+Woestijn6r": {
      "potion": "Potion_20",
      "description": "+2d4 on your next save. lasts 1 minute or until used",
      "fresh": "Zwarte Lotus",
      "catalyst": "Zelfontvlammende Cactusbloesem-as"
    },
    "Moeras7r+Oerbos1c": {
      "potion": "Potion_10",
      "description": "+1d4 acid damage on your next hit with attack or single target spell that deals damage. if proficient with alchemist supplies, add proficiency as well. lasts 1 minute or until used",
      "fresh": "Vervlochten mistriet",
      "catalyst": "Fluisterboomhars"
    },
    "Moeras7r+Oerbos2c": {
      "potion": "Potion_4",
      "description": "this turn, if you didn't move, the next level 1 spell you cast counts as upcasted by 1 more level. lasts 1 minute or until used",
      "fresh": "Vervlochten mistriet",
      "catalyst": "Fluoriserend maanblad"
    },
    "Moeras7r+Oerbos7r": {
      "potion": "Potion_18",
      "description": "temp hp equal to 2d4 + your medicine skill. lasts 1 minute",
      "fresh": "Vervlochten mistriet",
      "catalyst": "Smaragdgroene sterrenvaren"
    },
    "Moeras7r+Woestijn2c": {
      "potion": "Potion_2",
      "description": "this turn, take a cunning action (dash, disengage or hide)",
      "fresh": "Vervlochten mistriet",
      "catalyst": "Avondgloed-palm bladeren"
    },
    "Moeras7r+Woestijn6r": {
      "potion": "Potion_22",
      "description": "for fire, cold, electric, acid and sonic each, the next time you take damage of that type, half that damage. lasts 1 minute or until used",
      "fresh": "Vervlochten mistriet",
      "catalyst": "Zelfontvlammende Cactusbloesem-as"
    },
    "Moeras8r+Oerbos2c": {
      "potion": "Potion_3",
      "description": "this turn, if you didn't move, advantage on one attack",
      "fresh": "Magiedoordrenkt Veenmos",
      "catalyst": "Fluoriserend maanblad"
    },
    "Moeras8r+Oerbos4c": {
      "potion": "Potion_7",
      "description": "medicine temp HP. lasts 1 minute",
      "fresh": "Magiedoordrenkt Veenmos",
      "catalyst": "Betoverd dauwmos"
    },
    "Moeras8r+Woestijn5c": {
      "potion": "Potion_9",
      "description": "+1d4 on you next save. lasts 1 minute or until used",
      "fresh": "Magiedoordrenkt Veenmos",
      "catalyst": "Versteend Dadelpalmschors"
    },
    "Oerbos1c+Oerbos2c": {
      "potion": "Potion_11",
      "description": "the next time you take elemental damage, half that damage. lasts 1 minute or until used",
      "fresh": "Fluisterboomhars",
      "catalyst": "Fluoriserend maanblad"
    },
    "Oerbos1c+Oerbos3c": {
      "potion": "Potion_6",
      "description": "for a minute, advantage on all atlethics and acrobatics rolls",
      "fresh": "Fluisterboomhars",
      "catalyst": "Gloeiwortelsap"
    },
    "Oerbos1c+Oerbos6r": {
      "potion": "Potion_4",
      "description": "this turn, if you didn't move, the next level 1 spell you cast counts as upcasted by 1 more level. lasts 1 minute or until used",
      "fresh": "Fluisterboomhars",
      "catalyst": "Nachtbloeiende Bosanemoon"
    },
    "Oerbos1c+Woestijn1c": {
      "potion": "Potion_5",
      "description": "healing equal to your medicine skill",
      "fresh": "Fluisterboomhars",
      "catalyst": "Zonverschroeid saffraanstof"
    },
    "Oerbos1c+Woestijn5c": {
      "potion": "Potion_7",
      "description": "medicine temp HP. lasts 1 minute",
      "fresh": "Fluisterboomhars",
      "catalyst": "Versteend Dadelpalmschors"
    },
    "Oerbos2c+Oerbos5c": {
      "potion": "Potion_9",
      "description": "+1d4 on you next save. lasts 1 minute or until used",
      "fresh": "Fluoriserend maanblad",
      "catalyst": "Maanlichtverrijkte Wilgenbladeren"
    },
    "Oerbos2c+Woestijn1c": {
      "potion": "Potion_2",
      "description": "this turn, take a cunning action (dash, disengage or hide)",
      "fresh": "Fluoriserend maanblad",
      "catalyst": "Zonverschroeid saffraanstof"
    },
    "Oerbos2c+Woestijn3c": {
      "potion": "Potion_9",
      "description": "+1d4 on you next save. lasts 1 minute or until used",
      "fresh": "Fluoriserend maanblad",
      "catalyst": "Oasedauw"
    },
    "Oerbos2c+Woestijn4c": {
      "potion": "Potion_1",
      "description": "this turn, your speed increases by 10 feet and difficult terrain doesn't cost you extra movement",
      "fresh": "Fluoriserend maanblad",
      "catalyst": "Zandstormkristal"
    },
    "Oerbos2c+Woestijn6r": {
      "potion": "Potion_5",
      "description": "healing equal to your medicine skill",
      "fresh": "Fluoriserend maanblad",
      "catalyst": "Zelfontvlammende Cactusbloesem-as"
    },
    "Oerbos2c+Woestijn7r": {
      "potion": "Potion_7",
      "description": "medicine temp HP. lasts 1 minute",
      "fresh": "Fluoriserend maanblad",
      "catalyst": "Vuurbestendig Jojobahars"
    },
    "Oerbos3c+Oerbos6r": {
      "potion": "Potion_7",
      "description": "medicine temp HP. lasts 1 minute",
      "fresh": "Gloeiwortelsap",
      "catalyst": "Nachtbloeiende Bosanemoon"
    },
    "Oerbos3c+Woestijn1c": {
      "potion": "Potion_8",
      "description": "the next AoO against you has disadvantage. lasts 1 minute or until used",
      "fresh": "Gloeiwortelsap",
      "catalyst": "Zonverschroeid saffraanstof"
    },
    "Oerbos3c+Woestijn5c": {
      "potion": "Potion_1",
      "description": "this turn, your speed increases by 10 feet and difficult terrain doesn't cost you extra movement",
      "fresh": "Gloeiwortelsap",
      "catalyst": "Versteend Dadelpalmschors"
    },
    "Oerbos4c+Oerbos7r": {
      "potion": "Potion_9",
      "description": "+1d4 on you next save. lasts 1 minute or until used",
      "fresh": "Betoverd dauwmos",
      "catalyst": "Smaragdgroene sterrenvaren"
    },
    "Oerbos4c+Woestijn2c": {
      "potion": "Potion_5",
      "description": "healing equal to your medicine skill",
      "fresh": "Betoverd dauwmos",
      "catalyst": "Avondgloed-palm bladeren"
    },
    "Oerbos4c+Woestijn8r": {
      "potion": "Potion_1",
      "description": "this turn, your speed increases by 10 feet and difficult terrain doesn't cost you extra movement",
      "fresh": "Betoverd dauwmos",
      "catalyst": "Onverdampbaar oasewater"
    },
    "Oerbos5c+Oerbos6r": {
      "potion": "Potion_9",
      "description": "+1d4 on you next save. lasts 1 minute or until used",
      "fresh": "Maanlichtverrijkte Wilgenbladeren",
      "catalyst": "Nachtbloeiende Bosanemoon"
    },
    "Oerbos5c+Oerbos8r": {
      "potion": "Potion_7",
      "description": "medicine temp HP. lasts 1 minute",
      "fresh": "Maanlichtverrijkte Wilgenbladeren",
      "catalyst": "Droomklaproos"
    },
    "Oerbos5c+Woestijn3c": {
      "potion": "Potion_5",
      "description": "healing equal to your medicine skill",
      "fresh": "Maanlichtverrijkte Wilgenbladeren",
      "catalyst": "Oasedauw"
    },
    "Oerbos5c+Woestijn7r": {
      "potion": "Potion_2",
      "description": "this turn, take a cunning action (dash, disengage or hide)",
      "fresh": "Maanlichtverrijkte Wilgenbladeren",
      "catalyst": "Vuurbestendig Jojobahars"
    },
    "Oerbos6r+Oerbos7r": {
      "potion": "Potion_16",
      "description": "healing equal to 2d4 + your medicine skill",
      "fresh": "Nachtbloeiende Bosanemoon",
      "catalyst": "Smaragdgroene sterrenvaren"
    },
    "Oerbos6r+Oerbos8r": {
      "potion": "Potion_20",
      "description": "+2d4 on your next save. lasts 1 minute or until used",
      "fresh": "Nachtbloeiende Bosanemoon",
      "catalyst": "Droomklaproos"
    },
    "Oerbos6r+Woestijn5c": {
      "potion": "Potion_6",
      "description": "for a minute, advantage on all atlethics and acrobatics rolls",
      "fresh": "Nachtbloeiende Bosanemoon",
      "catalyst": "Versteend Dadelpalmschors"
    },
    "Oerbos6r+Woestijn8r": {
      "potion": "Potion_14",
      "description": "this turn, if you didn't move, advantage on one attack. crit on 19-20",
      "fresh": "Nachtbloeiende Bosanemoon",
      "catalyst": "Onverdampbaar oasewater"
    },
    "Oerbos7r+Woestijn1c": {
      "potion": "Potion_9",
      "description": "+1d4 on you next save. lasts 1 minute or until used",
      "fresh": "Smaragdgroene sterrenvaren",
      "catalyst": "Zonverschroeid saffraanstof"
    },
    "Oerbos7r+Woestijn3c": {
      "potion": "Potion_7",
      "description": "medicine temp HP. lasts 1 minute",
      "fresh": "Smaragdgroene sterrenvaren",
      "catalyst": "Oasedauw"
    },
    "Oerbos7r+Woestijn4c": {
      "potion": "Potion_1",
      "description": "this turn, your speed increases by 10 feet and difficult terrain doesn't cost you extra movement",
      "fresh": "Smaragdgroene sterrenvaren",
      "catalyst": "Zandstormkristal"
    },
    "Oerbos7r+Woestijn5c": {
      "potion": "Potion_3",
      "description": "this turn, if you didn't move, advantage on one attack",
      "fresh": "Smaragdgroene sterrenvaren",
      "catalyst": "Versteend Dadelpalmschors"
    },
    "Oerbos7r+Woestijn7r": {
      "potion": "Potion_16",
      "description": "healing equal to 2d4 + your medicine skill",
      "fresh": "Smaragdgroene sterrenvaren",
      "catalyst": "Vuurbestendig Jojobahars"
    },
    "Oerbos8r+Woestijn1c": {
      "potion": "Potion_6",
      "description": "for a minute, advantage on all atlethics and acrobatics rolls",
      "fresh": "Droomklaproos",
      "catalyst": "Zonverschroeid saffraanstof"
    },
    "Oerbos8r+Woestijn2c": {
      "potion": "Potion_9",
      "description": "+1d4 on you next save. lasts 1 minute or until used",
      "fresh": "Droomklaproos",
      "catalyst": "Avondgloed-palm bladeren"
    },
    "Oerbos8r+Woestijn3c": {
      "potion": "Potion_4",
      "description": "this turn, if you didn't move, the next level 1 spell you cast counts as upcasted by 1 more level. lasts 1 minute or until used",
      "fresh": "Droomklaproos",
      "catalyst": "Oasedauw"
    },
    "Oerbos8r+Woestijn8r": {
      "potion": "Potion_12",
      "description": "this turn, your speed increases by 30 feet and difficult terrain doesn't cost you extra movement",
      "fresh": "Droomklaproos",
      "catalyst": "Onverdampbaar oasewater"
    },
    "Woestijn1c+Woestijn4c": {
      "potion": "Potion_2",
      "description": "this turn, take a cunning action (dash, disengage or hide)",
      "fresh": "Zonverschroeid saffraanstof",
      "catalyst": "Zandstormkristal"
    },
    "Woestijn1c+Woestijn8r": {
      "potion": "Potion_6",
      "description": "for a minute, advantage on all atlethics and acrobatics rolls",
      "fresh": "Zonverschroeid saffraanstof",
      "catalyst": "Onverdampbaar oasewater"
    },
    "Woestijn2c+Woestijn7r": {
      "potion": "Potion_6",
      "description": "for a minute, advantage on all atlethics and acrobatics rolls",
      "fresh": "Avondgloed-palm bladeren",
      "catalyst": "Vuurbestendig Jojobahars"
    },
    "Woestijn3c+Woestijn5c": {
      "potion": "Potion_4",
      "description": "this turn, if you didn't move, the next level 1 spell you cast counts as upcasted by 1 more level. lasts 1 minute or until used",
      "fresh": "Oasedauw",
      "catalyst": "Versteend Dadelpalmschors"
    },
    "Woestijn3c+Woestijn6r": {
      "potion": "Potion_6",
      "description": "for a minute, advantage on all atlethics and acrobatics rolls",
      "fresh": "Oasedauw",
      "catalyst": "Zelfontvlammende Cactusbloesem-as"
    },
    "Woestijn4c+Woestijn5c": {
      "potion": "Potion_11",
      "description": "the next time you take elemental damage, half that damage. lasts 1 minute or until used",
      "fresh": "Zandstormkristal",
      "catalyst": "Versteend Dadelpalmschors"
    },
    "Woestijn4c+Woestijn7r": {
      "potion": "Potion_3",
      "description": "this turn, if you didn't move, advantage on one attack",
      "fresh": "Zandstormkristal",
      "catalyst": "Vuurbestendig Jojobahars"
    },
    "Woestijn6r+Woestijn7r": {
      "potion": "Potion_22",
      "description": "for fire, cold, electric, acid and sonic each, the next time you take damage of that type, half that damage. lasts 1 minute or until used",
      "fresh": "Zelfontvlammende Cactusbloesem-as",
      "catalyst": "Vuurbestendig Jojobahars"
    },
    "Woestijn6r+Woestijn8r": {
      "potion": "Potion_18",
      "description": "temp hp equal to 2d4 + your medicine skill. lasts 1 minute",
      "fresh": "Zelfontvlammende Cactusbloesem-as",
      "catalyst": "Onverdampbaar oasewater"
    }
  },
  "potions": {
    "Potion_1": {
      "rarity": "common",
      "description": "Elixer of Striding\nThis turn, your speed increases by 10 feet and difficult terrain doesn't cost you extra movement"
    },
    "Potion_2": {
      "rarity": "common",
      "description": "Elixer of Guile\nthis turn, take a cunning action (dash, disengage or hide)"
    },
    "Potion_3": {
      "rarity": "common",
      "description": "Elixer of Focussing\nthis turn, if you didn't move, advantage on one attack"
    },
    "Potion_4": {
      "rarity": "common",
      "description": "Elixer of Channeling\nthis turn, if you didn't move, the next level 1 spell you cast counts as upcasted by 1 more level. lasts 1 minute or until used"
    },
    "Potion_5": {
      "rarity": "common",
      "description": "Elixer of Health\nhealing equal to your medicine skill"
    },
    "Potion_6": {
      "rarity": "common",
      "description": "Elixer of Grace\nfor a minute, advantage on all atlethics and acrobatics rolls"
    },
    "Potion_7": {
      "rarity": "common",
      "description": "Elixer of Vitality\nmedicine temp HP. lasts 1 minute"
    },
    "Potion_8": {
      "rarity": "common",
      "description": "Elixer of Weaving\nthe next AoO against you has disadvantage. lasts 1 minute or until used"
    },
    "Potion_9": {
      "rarity": "common",
      "description": "Elixer of Bracing\n+1d4 on you next save. lasts 1 minute or until used"
    },
    "Potion_10": {
      "rarity": "common",
      "description": "Elixer of Coating\n+1d4 acid damage on your next hit with attack or single target spell that deals damage. if proficient with alchemist supplies, add proficiency as well. lasts 1 minute or until used"
    },
    "Potion_11": {
      "rarity": "common",
      "description": "Elixer of Aegis\nthe next time you take elemental damage, half that damage. lasts 1 minute or until used"
    }
  },
  "rarepotions": {
    "Potion_12": {
      "rarity": "rare",
      "description": "Elixer of Great Strides\nthis turn, your speed increases by 30 feet and difficult terrain doesn't cost you extra movement"
    },
    "Potion_13": {
      "rarity": "rare",
      "description": "Elixer of Cunning Guile\nthis turn, take two cunning actions (dash, disengage or hide)"
    },
    "Potion_14": {
      "rarity": "rare",
      "description": "Elixer of Sharp Focus\nthis turn, if you didn't move, advantage on one attack. crit on 19-20"
    },
    "Potion_15": {
      "rarity": "rare",
      "description": "Elixer of Potent Channeling\nthis turn, if you didn't move, you next spell casts as 1 level higher. lasts 1 minute or until used"
    },
    "Potion_16": {
      "rarity": "rare",
      "description": "Elixer of Good Health\nhealing equal to 2d4 + your medicine skill"
    },
    "Potion_17": {
      "rarity": "rare",
      "description": "Elixer of Swift Grace\nuntil rest, advantage on all atlethics and acrobatics rolls"
    },
    "Potion_18": {
      "rarity": "rare",
      "description": "Elixer of Strong Vitals\ntemp hp equal to 2d4 + your medicine skill. lasts 1 minute"
    },
    "Potion_19": {
      "rarity": "rare",
      "description": "Elixer of Intricate Weaving\nthe next attack against you has disadvantage. lasts 1 minute or until used"
    },
    "Potion_20": {
      "rarity": "rare",
      "description": "Elixer of Sturdy Bracing\n+2d4 on your next save. lasts 1 minute or until used"
    },
    "Potion_21": {
      "rarity": "rare",
      "description": "Elixer of Deadly Coating\n+2d4 acid damage on your next hit with an attack or single target spell that deals damage. if proficient with alchemist supplies, add proficiency as well. lasts 1 minute or until used"
    },
    "Potion_22": {
      "rarity": "rare",
      "description": "Elixer of Superior Aegis\nfor fire, cold, electric, acid and sonic each, the next time you take damage of that type, half that damage. lasts 1 minute or until used"
    }
  }
};
