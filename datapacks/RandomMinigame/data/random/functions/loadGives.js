var fs = require("fs");
var giveTier1 = require("./givedata/tier1.json");
var giveTier2 = require("./givedata/tier2.json");
var giveTier3 = require("./givedata/tier3.json");

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

function itemIdAndCount(id, count) {
  return {
    items: [{ id: id, count: count }],
  };
}

function forCartesianProduct(callback, ...arrays) {
  _cartesianProduct(callback, [], arrays);
}
function _cartesianProduct(callback, accumulatedArgs, arrays) {
  for (let i = 0; i < arrays[0].length; i++) {
    if (arrays.length == 1) {
      callback(...accumulatedArgs, arrays[0][i]);
    } else {
      _cartesianProduct(
        callback,
        accumulatedArgs.concat([arrays[0][i]]),
        arrays.slice(1, arrays.length)
      );
    }
  }
}

function duplicateAndJoin(arr, n) {
  let newArr = [];
  for (let i = 0; i < n; i++) {
    newArr = newArr.concat(arr);
  }
  return newArr;
}

module.exports = function () {
  giveTier1 = giveTier1.concat(giveTier1).concat(giveTier1);
  giveTier2 = giveTier2.concat(giveTier2).concat(giveTier2);
  giveTier3 = giveTier3.concat(giveTier3).concat(giveTier3);
  giveTier1 = giveTier1.concat(giveTier1);
  giveTier2 = giveTier2.concat(giveTier2);
  giveTier3 = giveTier3.concat(giveTier3);
  //give = giveTier1.concat(giveTier2).concat(giveTier3);
  //give = give.concat(give).concat(give).concat(give).concat(give);

  var tools = ["sword", "axe", "pickaxe", "shovel", "hoe"];
  //var tiers = ["wooden", "golden", "stone", "iron", "diamond", "netherite"];
  forCartesianProduct(
    (tool, tier) => {
      giveTier1.push(itemIdAndCount(`${tier}_${tool}`, 1));
    },
    tools,
    ["wooden", "stone", "golden"]
  );
  forCartesianProduct(
    (tool, tier) => {
      giveTier2.push(itemIdAndCount(`${tier}_${tool}`, 1));
    },
    tools,
    ["iron", "diamond"]
  );
  forCartesianProduct(
    (tool, tier) => {
      giveTier3.push(itemIdAndCount(`${tier}_${tool}`, 1));
    },
    tools,
    ["netherite", "netherite"]
  );

  var armors = ["boots", "leggings", "chestplate", "helmet"];
  //var armorTiers = ["chainmail", "golden", "iron", "diamond", "netherite"];
  forCartesianProduct(
    (armor, tier) => {
      giveTier1.push(itemIdAndCount(`${tier}_${armor}`, 1));
    },
    armors,
    ["chainmail", "golden"]
  );
  forCartesianProduct(
    (armor, tier) => {
      giveTier2.push(itemIdAndCount(`${tier}_${armor}`, 1));
    },
    armors,
    ["iron", "diamond"]
  );
  forCartesianProduct(
    (armor, tier) => {
      giveTier3.push(itemIdAndCount(`${tier}_${armor}`, 1));
    },
    armors,
    ["netherite", "netherite"]
  );

  let hostileMobs = [
    "blaze",
    "cave_spider",
    "creeper",
    "drowned",
    "elder_guardian",
    "enderman",
    "endermite",
    "evoker",
    "ghast",
    "guardian",
    "hoglin",
    "husk",
    "magma_cube",
    "phantom",
    "piglin",
    "pillager",
    "ravager",
    "shulker",
    "silverfish",
    "skeleton",
    "slime",
    "spider",
    "stray",
    "vex",
    "vindicator",
    "witch",
    "wither_skeleton",
    "zoglin",
    "zombie",
    "zombie_villager",
    "zombified_piglin"
  ];

  var mobs = [
    "bat",
    "bee",
    "blaze",
    "cat",
    "cave_spider",
    "chicken",
    "cod",
    "cow",
    "creeper",
    "dolphin",
    "donkey",
    "drowned",
    "elder_guardian",
    "enderman",
    "endermite",
    "evoker",
    "fox",
    "ghast",
    "guardian",
    "hoglin",
    "horse",
    "husk",
    "llama",
    "magma_cube",
    "mooshroom",
    "mule",
    "ocelot",
    "panda",
    "parrot",
    "phantom",
    "pig",
    "piglin",
    "pillager",
    "polar_bear",
    "pufferfish",
    "rabbit",
    "ravager",
    "salmon",
    "sheep",
    "shulker",
    "silverfish",
    "skeleton",
    "skeleton_horse",
    "slime",
    "spider",
    "squid",
    "stray",
    "strider",
    "trader_llama",
    "tropical_fish",
    "turtle",
    "vex",
    "villager",
    "vindicator",
    "wandering_trader",
    "witch",
    "wither_skeleton",
    "wolf",
    "zoglin",
    "zombie",
    "zombie_horse",
    "zombie_villager",
    "zombified_piglin",
  ];
  mobs.forEach((mob) => {
    giveTier1.push({
      items: [
        {
          id: `${mob}_spawn_egg`,
          count: 2,
        },
      ],
    });
    // giveTier2.push({
    //   items: [
    //     {
    //       id: `${mob}_spawn_egg`,
    //       count: 6,
    //     },
    //   ],
    // });
  });
  hostileMobs.forEach((mob) => {
    giveTier3.push({
      items: [
        {
          id: `${mob}_spawn_egg`,
          count: 16,
        },
      ],
    });
  })

  var blocks = [
    "sponge",
    "grass_block",
    "dirt",
    "stone",
    "cobblestone",
    "white_wool",
    "oak_leaves",
    "sand",
    "gravel",
    "ice",
    "blue_ice",
    "slime_block",
    "honey_block",
    "scaffolding",
  ];
  blocks.forEach((block) => {
      [giveTier1].forEach((arr, j) => {
        for (var i = 0; 7 > i; i++) {
          arr.push({
            items: [
              {
                id: block,
                count: 64,
              },
            ],
          });
        }
      })
  });

  var foods = [
    "cooked_beef",
    "cooked_porkchop",
    "potato",
    "carrot",
    "golden_apple",
    "sweet_berries",
  ];
  foods.forEach((food) => {
    for (var i = 0; 6 > i; i++) {
      giveTier1.push({
        items: [
          {
            id: food,
            count: 4,
          },
        ],
      });
    }
  });

  var ores = [
    "coal",
    "iron",
    "gold",
    "nether_gold",
    "lapis",
    "diamond",
    "redstone",
    "emerald",
    "nether_quartz",
  ];
  ores.forEach((ore) => {
    for (var i = 0; 4 > i; i++) {
      giveTier1.push({
        items: [
          {
            id: ore + "_ore",
            count: 12,
          },
        ],
      });
    }
  });

  var woods = ["oak", "dark_oak", "acacia", "birch", "spruce", "jungle"];
  var woodProducts = ["planks", "log"];
  forCartesianProduct(
    (wood, woodProduct) => {
      giveTier1.push(itemIdAndCount(`${wood}_${woodProduct}`, 64));
    },
    woods,
    woodProducts
  );
  woods.forEach((wood) => {
    for (var i = 0; 1 > i; i++) {
      giveTier1.push({
        items: [
          {
            id: `${wood}_sapling`,
            count: 16,
          },
          {
            id: `dirt`,
            count: 16,
          },
          {
            id: `bone_meal`,
            count: 64,
          },
        ],
      });
    }
  });

  giveTier1 = giveTier1.concat(giveTier1);
  giveTier2 = giveTier2.concat(giveTier2);
  giveTier3 = giveTier3.concat(giveTier3);
  var goodEffects = [
    1, 3, 5, 6, 8, 10, 11, 12, 13, 14, 16, 21, 22, 23, 24, 25, 26, 28, 29, 30,
  ];
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
    "hero_of_the_village",
  ];
  for (var i = 1; goodEffects.length > i; i++) {
    giveTier1.push({
      items: [
        {
          id: `potion{"CustomPotionColor":${
            64 * (goodEffects[i] % 4) +
            64 * 256 * (Math.floor(goodEffects[i] / 4) % 4) +
            64 * 256 * 256 * Math.floor(goodEffects[i] / 16)
          }f,"CustomPotionEffects":[{"Id":${
            goodEffects[i]
          },"Amplifier":0,"Duration":6000}],"display":{"Name":'{"text":"${toNormalText(
            effects[goodEffects[i]]
          )} Potion"}'}}`,
          count: 1,
        },
      ],
    });
  }
  for (var i = 1; 31 > i; i++) {
    giveTier1.push({
      items: [
        {
          id: `splash_potion{"CustomPotionColor":${
            64 * (i % 4) +
            64 * 256 * (Math.floor(i / 4) % 4) +
            64 * 256 * 256 * Math.floor(i / 16)
          }f,"CustomPotionEffects":[{"Id":${i},"Amplifier":0,"Duration":6000}],"display":{"Name":'{"text":"${toNormalText(
            effects[i]
          )} Splash Potion"}'}}`,
          count: 1,
        },
      ],
    });
  }
  for (var i = 1; 31 > i; i++) {
    giveTier1.push({
      items: [
        {
          id: `lingering_potion{"CustomPotionColor":${
            64 * (i % 4) +
            64 * 256 * (Math.floor(i / 4) % 4) +
            64 * 256 * 256 * Math.floor(i / 16)
          }f,"CustomPotionEffects":[{"Id":${i},"Amplifier":0,"Duration":1500}],"display":{"Name":'{"text":"${toNormalText(
            effects[i]
          )} Lingering Potion"}'}}`,
          count: 1,
        },
      ],
    });
  }

  
  //============================= GENERATE MCFUNCTION ==========================
  let giveString1 = giveListToMCFunction(
    duplicateAndJoin(giveTier1, 1)
    .concat(duplicateAndJoin(giveTier2, 1))
    .concat(duplicateAndJoin(giveTier3, 1)));
  let giveString2 = giveListToMCFunction(
    duplicateAndJoin(giveTier1, 1)
    .concat(duplicateAndJoin(giveTier2, 2))
    .concat(duplicateAndJoin(giveTier3, 2)));
  let giveString3 = giveListToMCFunction(
    duplicateAndJoin(giveTier1, 1)
    .concat(duplicateAndJoin(giveTier2, 2))
    .concat(duplicateAndJoin(giveTier3, 3)));

  fs.writeFileSync("./give_function/give1.mcfunction", giveString1);
  fs.writeFileSync("./give_function/give2.mcfunction", giveString2);
  fs.writeFileSync("./give_function/give3.mcfunction", giveString3);
};

function giveListToMCFunction(give) {
  var giveString = "";
  let randomCounter = 0;
  giveString += `scoreboard players set @e[tag=sk] itemCount ${give.length}\n`
  for (var i = 0; give.length > i; i++) {
    var itemChoice = give[i];
    let weight = itemChoice.weight;
    if (!weight) weight = 1;
    for (var l = 0; l < weight; l++) {
      for (var j = 0; itemChoice.items.length > j; j++) {
        var item = itemChoice.items[j];
        giveString += `execute as @e[tag=sk,scores={random=${randomCounter}}] run give @a minecraft:${item.id} ${item.count}\n`;

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

        giveString += `execute as @e[tag=sk,scores={random=${randomCounter}}] run tellraw @a [{"text":"Everyone received ","color":"green"},{"text":"${item.count} ","color":"red","bold":true},${displayedText},{"text":"!","color":"green"}]\n`;
      }
      randomCounter++;
    }
  }
  return giveString;
}
