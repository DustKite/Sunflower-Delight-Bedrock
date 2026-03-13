const cookingPotRecipes = [
    {
        "identifer": "sunflowerdelight:lilac_tincture",
        "container": {
            "item": "minecraft:glass_bottle"
        },
        "tags": ["cooking_pot"],
        "priority": 0,
        "time": 600,
        "experience": 3.0,
        "ingredients": [
            { "item": "sunflowerdelight:lilac_flower" },
            { "item": "minecraft:torchflower" },
            { "item": "minecraft:glow_berries" },
            { "item": "minecraft:glow_berries" }
        ],
        "result": {
            "item": "sunflowerdelight:lilac_tincture"
        }
    },
    {
        "identifer": "sunflowerdelight:peony_syrup",
        "container": {
            "item": "minecraft:glass_bottle"
        },
        "tags": ["cooking_pot"],
        "priority": 0,
        "time": 600,
        "experience": 3.0,
        "ingredients": [
            { "item": "sunflowerdelight:peony_flower" },
            { "item": "minecraft:sugar" },
            { "item": "minecraft:chorus_fruit" },
            { "item": "minecraft:chorus_fruit" }
        ],
        "result": {
            "item": "sunflowerdelight:peony_syrup"
        }
    },
    {
        "identifer": "sunflowerdelight:rose_lemonade",
        "container": {
            "item": "minecraft:glass_bottle"
        },
        "tags": ["cooking_pot"],
        "priority": 0,
        "time": 400,
        "experience": 2.0,
        "ingredients": [
            { "item": "sunflowerdelight:rosebud" },
            { "item": "minecraft:sugar" },
            { "item": "minecraft:melon_slice" },
            { "item": "minecraft:melon_slice" },
            { "item": "minecraft:nether_wart" }
        ],
        "result": {
            "item": "sunflowerdelight:rose_lemonade"
        }
    },
    {
        "identifer": "sunflowerdelight:sunflower_oil",
        "container": {
            "item": "minecraft:glass_bottle"
        },
        "tags": ["cooking_pot"],
        "priority": 0,
        "time": 400,
        "experience": 2.0,
        "ingredients": [
            { "item": "sunflowerdelight:peeled_sunflower_seed" },
            { "item": "sunflowerdelight:peeled_sunflower_seed" }
        ],
        "result": {
            "item": "sunflowerdelight:sunflower_oil"
        }
    },
    {
        "identifer": "sunflowerdelight:taiga_custard",
        "container": {
            "item": "minecraft:glass_bottle"
        },
        "tags": ["cooking_pot"],
        "priority": 0,
        "time": 200,
        "experience": 1.0,
        "ingredients": [
            { "item": "minecraft:sweet_berries" },
            [
                { "item": "minecraft:milk_bucket" },
                { "item": "farmersdelight:milk_bottle" }
            ],
            { "item": "minecraft:egg" },
            { "item": "sunflowerdelight:lilac_flower" },
            { "item": "sunflowerdelight:rosebud" },
            { "item": "minecraft:sugar" }
        ],
        "result": {
            "item": "sunflowerdelight:taiga_custard"
        }
    },
    {
        "identifer": "sunflowerdelight:tom_kha_kai",
        "container": {
            "item": "minecraft:bowl"
        },
        "tags": ["cooking_pot"],
        "priority": 0,
        "time": 200,
        "experience": 1.0,
        "ingredients": [
            [
                { "item": "minecraft:chicken" },
                { "item": "farmersdelight:chicken_cuts" }
            ],
            [
                { "item": "minecraft:milk_bucket" },
                { "item": "farmersdelight:milk_bottle" }
            ],
            { "item": "sunflowerdelight:sunflower_oil" },
            { "item": "minecraft:brown_mushroom" }
        ],
        "result": {
            "item": "sunflowerdelight:tom_kha_kai"
        }
    },
    {
        "identifer": "sunflowerdelight:brown_mushroom_sauce",
        "time": 100,
        "container": {
            "item": "minecraft:bowl"
        },
        "tags": ["cooking_pot"],
        "experience": 0.35,
        "ingredients": [
            {
                "item": "minecraft:brown_mushroom"
            },
            {
                "tag": "farmersdelight:is_onion"
            }
        ],
        "result": {
            "item": "sunflowerdelight:brown_mushroom_sauce"
        }
    },
    {
        "identifer": "sunflowerdelight:mutton_stew",
        "time": 200,
        "experience": 1.0,
        "tags": ["cooking_pot"],
        "ingredients": [
            [
                {
                    "item": "minecraft:mutton"
                },
                {
                    "tag": "farmersdelight:is_raw_mutton"
                },
                { "item": "better_on_bedrock:raw_mutton_chops" }
            ],
            {
                "item": "sunflowerdelight:brown_mushroom_sauce"
            },
            {
                "item": "minecraft:carrot"
            }
        ],
        "result": {
            "item": "sunflowerdelight:mutton_stew"
        }
    },
    {
        "identifer": "sunflowerdelight:pitcher_plant_drink",
        "container": {
            "item": "minecraft:glass_bottle"
        },
        "time": 600,
        "tags": ["cooking_pot"],
        "experience": 3.0,
        "ingredients": [
            {
                "item": "sunflowerdelight:big_pitcher_plant_petal"
            },
            {
                "item": "sunflowerdelight:small_pitcher_plant_petal"
            },
            {
                "item": "minecraft:apple"
            },
            {
                "item": "minecraft:apple"
            }
        ],
        "result": {
            "item": "sunflowerdelight:pitcher_plant_drink"
        }
    },
    {
        "identifer": "sunflowerdelight:pitcher_pod_decoction",
        "container": {
            "item": "minecraft:glass_bottle"
        },
        "time": 600,
        "tags": ["cooking_pot"],
        "experience": 3.0,
        "ingredients": [
            {
                "item": "minecraft:brown_mushroom"
            },
            {
                "item": "minecraft:hanging_roots"
            },
            {
                "item": "sunflowerdelight:pitcher_pod_pulp"
            },
            {
                "item": "sunflowerdelight:pitcher_pod_pulp"
            }
        ],
        "result": {
            "item": "sunflowerdelight:pitcher_pod_decoction"
        }
    },
    {
        "identifer": "sunflowerdelight:starving_tisan",
        "container": {
            "item": "minecraft:glass_bottle"
        },
        "time": 400,
        "tags": ["cooking_pot"],
        "experience": 2.0,
        "ingredients": [
            {
                "item": "minecraft:poppy"
            },
            {
                "item": "minecraft:dandelion"
            },
            [
                { "item": "minecraft:glow_berries" },
                { "item": "minecraft:sweet_berries" }
            ],
            [
                { "item": "minecraft:glow_berries" },
                { "item": "minecraft:sweet_berries" }
            ]
        ],
        "result": {
            "item": "sunflowerdelight:starving_tisan"
        }
    }
];

export { cookingPotRecipes };