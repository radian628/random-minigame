var fs = require("fs");
var give = require("./givedata.json")

function getItemName(itemString) {
    var curlyBracketIndex = itemString.indexOf("{");
    if (curlyBracketIndex == -1) {
        return itemString;
    } else {
        return itemString.substring(0, curlyBracketIndex);
    }
}

function toNormalText(name) {
    var name2 = name.replace(/_/g, " ");
    name2 = name2.split("");
    for (var i = 0; name2.length > i; i++) {
        if (i == 0 || name2[i - 1] == " ") {
            name2[i] = name2[i].toUpperCase();
        }
    }
    return name2.join("");
}

function getItemNBT(itemString) {
    var curlyBracketIndex = itemString.indexOf("{");
    if (curlyBracketIndex == -1) {
        return "{}";
    } else {
        return itemString.substring(curlyBracketIndex, itemString.length - 1);
    }
}

give = give.concat(give).concat(give).concat(give).concat(give)

var tools = ["sword", "axe", "pickaxe", "shovel", "hoe"]
var tiers = ["wooden", "golden", "stone", "iron", "diamond", "netherite"]

tools.forEach(tool => {
    tiers.forEach(tier => {
        give.push(
            {
                "items": [
                    {
                        "id": `${tier}_${tool}`,
                        "count": 1
                    }
                ]
            }
        );
    });
});

var armors = ["boots", "leggings", "chestplate", "helmet"]
var armorTiers = ["chainmail", "golden", "iron", "diamond", "netherite"]


armors.forEach(armor => {
    armorTiers.forEach(armorTier => {
        for (var i = 0 ; 2 > i; i++) {
            give.push(
                {
                    "items": [
                        {
                            "id": `${armorTier}_${armor}`,
                            "count": 1
                        }
                    ]
                }
            );
        }
    });
});
var mobs = ["bat", "bee", "blaze", "cat", "cave_spider", "chicken", "cod", "cow", "creeper", "dolphin", "donkey", "drowned", "elder_guardian", "enderman", "endermite", "evoker", "fox", "ghast", "guardian", "hoglin", "horse", "husk", "llama", "magma_cube", "mooshroom", "mule", "ocelot", "panda", "parrot", "phantom", "pig", "piglin", "pillager", "polar_bear", "pufferfish", "rabbit", "ravager", "salmon", "sheep", "shulker", "silverfish", "skeleton", "skeleton_horse", "slime", "spider", "squid", "stray", "strider", "trader_llama", "tropical_fish", "turtle", "vex", "villager", "vindicator", "wandering_trader", "witch", "wither_skeleton", "wolf", "zoglin", "zombie", "zombie_horse", "zombie_villager", "zombified_piglin"]


mobs.forEach(mob => {
    give.push(
        {
            "items": [
                {
                    "id": `${mob}_spawn_egg`,
                    "count": 2
                }
            ]
        }
    );
});



var blocks = ["grass_block", "dirt", "stone", "cobblestone", "white_wool", "oak_leaves", "sand", "gravel", "ice", "blue_ice", "slime_block", "honey_block", "scaffolding"]


blocks.forEach(block => {
    for (var i = 0; 7 > i; i++) {
        give.push(
            {
                "items": [
                    {
                        "id": block,
                        "count": 64
                    }
                ]
            }
        );
    }
});

var foods = ["cooked_beef", "cooked_porkchop", "potato", "carrot", "golden_apple", "sweet_berries"]

foods.forEach(food => {
    for (var i = 0; 6 > i; i++) {
        give.push(
            {
                "items": [
                    {
                        "id": food,
                        "count": 4
                    }
                ]
            }
        );
    }
});

var ores = ["coal", "iron", "gold", "nether_gold", "lapis", "diamond", "redstone", "emerald", "nether_quartz"];


ores.forEach(ore => {
    for (var i = 0; 4 > i; i++) {
        give.push(
            {
                "items": [
                    {
                        "id": ore + "_ore",
                        "count": 12
                    }
                ]
            }
        );
    }
});


var woods = ["oak", "dark_oak", "acacia", "birch", "spruce", "jungle"];
var woodProducts = ["planks", "log"]

woods.forEach(wood => {
    woodProducts.forEach(woodProduct => {
        for (var i = 0 ; 2 > i; i++) {
            give.push(
                {
                    "items": [
                        {
                            "id": `${wood}_${woodProduct}`,
                            "count": 32
                        }
                    ]
                }
            );
        }
    });
});

woods.forEach(wood => {
    for (var i = 0 ; 1 > i; i++) {
        give.push(
            {
                "items": [
                    {
                        "id": `${wood}_sapling`,
                        "count": 16
                    },
                    {
                        "id": `dirt`,
                        "count": 16
                    },
                    {
                        "id": `bone_meal`,
                        "count": 64
                    }
                ]
            }
        );
    }
});

give = give.concat(give);

var goodEffects = [
    1, 3, 5, 6, 8, 10, 11, 12, 13, 14, 16, 21, 22, 23, 24, 25, 26, 28, 29, 30
]

var effects = [
    "",
    "speed",
    "slowness",
    "haste",
    "mining_fatigue",
    "strength",
    "instant_health",
    "instant_damage",
    "jump_boost",
    "nausea",
    "regeneration",
    "resistance",
    "fire_resistance",
    "water_breathing",
    "invisibility",
    "blindness",
    "night_vision",
    "hunger",
    "weakness",
    "poison",
    "wither",
    "health_boost",
    "absorption",
    "saturation",
    "glowing",
    "levitation",
    "luck",
    "unluck",
    "slow_falling",
    "conduit_power",
    "dolphins_grace",
    "bad_omen",
    "hero_of_the_village"
]

//potion{"CustomPotionEffects":[{"Id":22,"Amplifier":0,"Duration":2000}]}
for (var i = 1; goodEffects.length > i; i++) {
    give.push(
        {
            "items": [
                {
                    "id": `potion{"CustomPotionColor":${64 * (goodEffects[i] % 4) + 64 * 256 * (Math.floor(goodEffects[i] / 4) % 4) + 64 * 256 * 256 * Math.floor(goodEffects[i] / 16)}f,"CustomPotionEffects":[{"Id":${goodEffects[i]},"Amplifier":0,"Duration":6000}],"display":{"Name":'{"text":"${toNormalText(effects[goodEffects[i]])} Potion"}'}}`,
                    "count": 1
                }
            ]
        }
    );
}
for (var i = 1; 31 > i; i++) {
    give.push(
        {
            "items": [
                {
                    "id": `splash_potion{"CustomPotionColor":${64 * (i % 4) + 64 * 256 * (Math.floor(i / 4) % 4) + 64 * 256 * 256 * Math.floor(i / 16)}f,"CustomPotionEffects":[{"Id":${i},"Amplifier":0,"Duration":6000}],"display":{"Name":'{"text":"${toNormalText(effects[i])} Splash Potion"}'}}`,
                    "count": 1
                }
            ]
        }
    );
}
for (var i = 1; 31 > i; i++) {
    give.push(
        {
            "items": [
                {
                    "id": `lingering_potion{"CustomPotionColor":${64 * (i % 4) + 64 * 256 * (Math.floor(i / 4) % 4) + 64 * 256 * 256 * Math.floor(i / 16)}f,"CustomPotionEffects":[{"Id":${i},"Amplifier":0,"Duration":1500}],"display":{"Name":'{"text":"${toNormalText(effects[i])} Lingering Potion"}'}}`,
                    "count": 1
                }
            ]
        }
    );
}

function valueCopy(json) {
    return JSON.parse(JSON.stringify(json));
}

var mobStackFormat = {id:"", Passengers:[]}

var mobStack = valueCopy(mobStackFormat);
var mobStack2 = mobStack
for (var i = 1; 20 > i; i++) {
    mobStack2.id = mobs[i];
    mobStack2.Passengers.push(valueCopy(mobStackFormat));
    mobStack2 = mobStack2.Passengers[0];
}
fs.writeFileSync("mobStack.txt", JSON.stringify({Passengers: [mobStack] }));

var giveString = ""
for (var i = 0; give.length > i; i++) {
    var itemChoice = give[i];
    for (var j = 0; itemChoice.items.length > j; j++) {
        var item = itemChoice.items[j]
        giveString += `execute as @e[tag=sk,scores={random=${i}}] run give @a minecraft:${item.id} ${item.count}\n`;

        var itemName = getItemName(item.id);
        var itemNBT = getItemNBT(item.id);
        var displayName = "";
        var writing = false;
        for (var k = 0; itemNBT.length > k; k++) {
            if (writing && itemNBT[k] != "'") {
                displayName += itemNBT[k];
            }
            if (itemNBT[k] == "'") {
                writing = !writing;
            }
        }
        var displayedText = `{"text":"${toNormalText(itemName)}","color":"white"}`;
        if (displayName) {
            displayedText = displayName;
        }

        giveString += `execute as @e[tag=sk,scores={random=${i}}] run tellraw @a [{"text":"Everyone received ","color":"green"},{"text":"${item.count} ","color":"red","bold":true},${displayedText},{"text":"!","color":"green"}]\n`;
    }
}


fs.writeFileSync("give.mcfunction", giveString);



var prepareArenaCommands = ""

for (var i = 0; 8 > i; i++) {
    for (var j = 0; 8 > j; j++) {
        for (var k = 0; 8 > k; k++) {
            prepareArenaCommands += `fill ${i * 32 - 128} ${j * 32} ${k * 32 - 128} ${i * 32 + 31 - 128} ${j * 32 + 31} ${k * 32 + 31 - 128} minecraft:air \n`
        }
    }
}

prepareArenaCommands += `
kill @e[type=!player,tag=!sk]
schedule function random:give 20t append
schedule function random:give 40t append
schedule function random:give 60t append
schedule function random:give 80t append
schedule function random:give 100t append
`;

fs.writeFileSync("prepare_arena.mcfunction", prepareArenaCommands);





function imageDataToArmorStands(data, width, height, x, y, z) {
    var white = `{"text":"█","color":"white"}`;
    var black = `{"text":"█","color":"black"}`;
    var rows = [];
    for (var i = 0; height > i; i++) {
        rows.push([]);
        for (var j = 0; width > j; j++) {
            rows[i].push(`{"text":"█","color":"#${data[(i * width + j) * 4].toString(16).padStart(2, "0") + data[(i * width + j) * 4 + 1].toString(16).padStart(2, "0") + data[(i * width + j) * 4 + 2].toString(16).padStart(2, "0")}"}`);
        }
    }
    var endStr = [];
    for (var i = 0; rows.length > i; i++) {
        endStr.push(`summon minecraft:armor_stand ${x} ${y + (rows.length - i) * 0.2} ${z} {Invisible:true,CustomName:'[${rows[i].join()}]',CustomNameVisible:true,Marker:true,Tags:["nokill"]}`);
    }
    return endStr.join("\n");
}




var canvas = require("canvas");
var c = canvas.createCanvas(132, 132);
var ctx = c.getContext("2d");

canvas.loadImage("bigtext.png").then(image => {
    ctx.drawImage(image, 0, 0);

    var armorStandString = imageDataToArmorStands(ctx.getImageData(0, 0, 19, 7).data, 19, 7, 500, 76, 513) + 
    "\n\n" + imageDataToArmorStands(ctx.getImageData(0, 6, 31, 7).data, 31, 7, 490, 76, 513) + 
    "\n\n" + imageDataToArmorStands(ctx.getImageData(0, 12, 43, 7).data, 43, 7, 510, 76, 513) +  
    "\n\n" + imageDataToArmorStands(ctx.getImageData(0, 18, 45, 7).data, 45, 7, 487, 76, 500) +  
    "\n\n" + imageDataToArmorStands(ctx.getImageData(0, 24, 51, 7).data, 51, 7, 513, 76, 500);

    fs.writeFileSync("test/armor_stand2.mcfunction", armorStandString);  
});  