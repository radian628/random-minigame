execute store result bossbar minecraft:blue value run data get entity @e[tag=blue,limit=1] Health
execute store result bossbar minecraft:red value run data get entity @e[tag=red,limit=1] Health

effect give @e[scores={respawnDetector=1..},type=player] minecraft:resistance 9 5
effect give @e[scores={respawnDetector=1..},type=player] minecraft:slow_falling 8 1
scoreboard players set @e[type=player] respawnDetector 0

execute unless entity @e[tag=red] run function random:bluewin
execute unless entity @e[tag=blue] run function random:redwin
execute unless entity @e[tag=red] run function random:end_game
execute unless entity @e[tag=blue] run function random:end_game
