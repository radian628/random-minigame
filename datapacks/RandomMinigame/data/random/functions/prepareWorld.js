let fs = require("fs");
module.exports = function () {
  function valueCopy(json) {
    return JSON.parse(JSON.stringify(json));
  }
  
  //==================== SOME DUMB MOB STACK THING IDK =============================
  // var mobStackFormat = { id: "", Passengers: [] };
  
  // var mobStack = valueCopy(mobStackFormat);
  // var mobStack2 = mobStack;
  // for (var i = 1; 20 > i; i++) {
  //   mobStack2.id = mobs[i];
  //   mobStack2.Passengers.push(valueCopy(mobStackFormat));
  //   mobStack2 = mobStack2.Passengers[0];
  // }
  // fs.writeFileSync("mobStack.txt", JSON.stringify({ Passengers: [mobStack] }));
  
  
  //========================== PREPARE ARENA ===============================
  var prepareArenaCommands = "";
  
  for (var i = 0; 8 > i; i++) {
    for (var j = 0; 8 > j; j++) {
      for (var k = 0; 8 > k; k++) {
        prepareArenaCommands += `fill ${i * 32 - 128} ${j * 32} ${k * 32 - 128} ${
          i * 32 + 31 - 128
        } ${j * 32 + 31} ${k * 32 + 31 - 128} minecraft:air \n`;
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
        rows[i].push(
          `{"text":"█","color":"#${
            data[(i * width + j) * 4].toString(16).padStart(2, "0") +
            data[(i * width + j) * 4 + 1].toString(16).padStart(2, "0") +
            data[(i * width + j) * 4 + 2].toString(16).padStart(2, "0")
          }"}`
        );
      }
    }
    var endStr = [];
    for (var i = 0; rows.length > i; i++) {
      endStr.push(
        `summon minecraft:armor_stand ${x} ${
          y + (rows.length - i) * 0.2
        } ${z} {Invisible:true,CustomName:'[${rows[
          i
        ].join()}]',CustomNameVisible:true,Marker:true,Tags:["nokill"]}`
      );
    }
    return endStr.join("\n");
  }
  
  var canvas = require("canvas");
  var c = canvas.createCanvas(132, 132);
  var ctx = c.getContext("2d");
  
  canvas.loadImage("bigtext.png").then((image) => {
    ctx.drawImage(image, 0, 0);
  
    var armorStandString =
      imageDataToArmorStands(
        ctx.getImageData(0, 0, 19, 7).data,
        19,
        7,
        500,
        76,
        513
      ) +
      "\n\n" +
      imageDataToArmorStands(
        ctx.getImageData(0, 6, 31, 7).data,
        31,
        7,
        490,
        76,
        513
      ) +
      "\n\n" +
      imageDataToArmorStands(
        ctx.getImageData(0, 12, 43, 7).data,
        43,
        7,
        510,
        76,
        513
      ) +
      "\n\n" +
      imageDataToArmorStands(
        ctx.getImageData(0, 18, 45, 7).data,
        45,
        7,
        487,
        76,
        500
      ) +
      "\n\n" +
      imageDataToArmorStands(
        ctx.getImageData(0, 24, 51, 7).data,
        51,
        7,
        513,
        76,
        500
      );
  
    fs.writeFileSync("test/armor_stand2.mcfunction", armorStandString);
  });
  
}