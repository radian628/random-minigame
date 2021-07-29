kill @e[tag=!sk]
spawnpoint @a 500 77 500
tp @a 500 77 500
clear @a
worldborder set 10000
scoreboard players set @e[tag=sk] isGamePlaying 0
gamemode survival @a
effect clear @a
clear @a
bossbar set minecraft:blue visible false
bossbar set minecraft:red visible false


schedule function random:test/armor_stand2 2t