
scoreboard players set @a deaths 0
gamemode survival @a
title @a title {"text":"The game has started."}
worldborder set 128
execute if score @e[tag=sk,limit=1] contractTime matches 1 run worldborder set 16 1200
execute if score @e[tag=sk,limit=1] contractTime matches 2 run worldborder set 16 600
effect clear @a
effect give @a minecraft:instant_health 1 4
effect give @a minecraft:mining_fatigue 4 4
effect give @a minecraft:levitation 4 0
effect give @a minecraft:slowness 4 5
effect give @a minecraft:resistance 6 5
clear @a
