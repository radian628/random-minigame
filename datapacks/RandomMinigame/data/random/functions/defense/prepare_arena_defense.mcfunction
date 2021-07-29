function random:prepare_arena

fill -128 100 -128 0 100 0
fill 14 220 14 26 220 26 minecraft:red_concrete
fill -14 220 -14 -26 220 -26 minecraft:blue_concrete
fill 15 220 15 25 220 25 minecraft:stone
fill -15 220 -15 -25 220 -25 minecraft:stone
setblock 20 220 20 minecraft:bedrock
setblock -20 220 -20 minecraft:bedrock


summon iron_golem 20 221 20 {"NoAI":true,Attributes:[{Name:"generic.max_health",Base:100.0f}],Health:100.0f}
execute positioned 20 222 20 run tag @e[type=minecraft:iron_golem,limit=1,sort=nearest] add red
summon iron_golem -20 221 -20 {"NoAI":true,Attributes:[{Name:"generic.max_health",Base:100.0f}],Health:100.0f}
execute positioned -20 222 -20 run tag @e[type=minecraft:iron_golem,limit=1,sort=nearest] add blue

scoreboard players set @e[tag=sk] isGamePlaying 3