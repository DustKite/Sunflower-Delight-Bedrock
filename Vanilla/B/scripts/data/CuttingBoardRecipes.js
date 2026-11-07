const cuttingBoardRecipes = [
    {
        "ingredients": { "item": "minecraft:rose_bush" },
        "tool": { "tag": "farmersdelight:is_knife" },
        "result": [
            { "item": "sunflowerdelight:rosebud", "count": 2, "chance": 0.3 },
            { "item": "minecraft:red_dye", "count": 2, "chance": 0.6 }
        ],
        "is_block_type": false,
        "sound": "use.wood"
    },
    {
        "ingredients": { "item": "minecraft:lilac" },
        "tool": { "tag": "farmersdelight:is_knife" },
        "result": [
            { "item": "sunflowerdelight:lilac_flower", "count": 2, "chance": 0.3 },
            { "item": "minecraft:magenta_dye", "count": 2, "chance": 0.6 }
        ],
        "is_block_type": false,
        "sound": "use.wood"
    },
    {
        "ingredients": { "item": "minecraft:peony" },
        "tool": { "tag": "farmersdelight:is_knife" },
        "result": [
            { "item": "sunflowerdelight:peony_flower", "count": 2, "chance": 0.3 },
            { "item": "minecraft:pink_dye", "count": 2, "chance": 0.6 }
        ],
        "is_block_type": false,
        "sound": "use.wood"
    },
    {
        "ingredients": { "item": "minecraft:sunflower" },
        "tool": { "tag": "farmersdelight:is_knife" },
        "result": [
            { "item": "minecraft:sunflower_seed", "count": 2, "chance": 0.3 },
            { "item": "minecraft:yellow_dye", "count": 2, "chance": 0.6 }
        ],
        "is_block_type": false,
        "sound": "use.wood"
    },
    {
        "ingredients": { "item": "minecraft:pitcher_plant" },
        "tool": { "tag": "farmersdelight:is_knife" },
        "result": [
            { "item": "sunflowerdelight:small_pitcher_plant_petal", "count": 2, "chance": 0.5 },
            { "item": "sunflowerdelight:big_pitcher_plant_petal", "count": 2, "chance": 0.5 },
            { "item": "minecraft:cyan_dye", "count": 2, "chance": 0.6 }
        ],
        "is_block_type": false,
        "sound": "use.wood"
    },
    {
        "ingredients": { "item": "sunflowerdelight:sunflower_seed" },
        "tool": { "tag": "farmersdelight:is_knife" },
        "result": [
            { "item": "sunflowerdelight:peeled_sunflower_seed", "count": 1 }
        ],
        "is_block_type": false,
        "sound": "use.wood"
    }
];

export { cuttingBoardRecipes };
