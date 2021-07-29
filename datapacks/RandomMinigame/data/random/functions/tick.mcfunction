execute if score @e[tag=sk,limit=1] isGamePlaying matches 1.. run function random:game_tick
scoreboard players reset * deaths2
execute as @a run scoreboard players operation @s deaths2 = @s deaths