
gamemode spectator @a[scores={deaths=1..}]
execute if score @e[tag=sk,limit=1] stillAlive matches 1 run execute as @a[gamemode=survival] run title @a title [{"selector":"@s"},{"text":" wins!"}]
execute if score @e[tag=sk,limit=1] stillAlive matches 1 run function random:end_game
execute if score @e[tag=sk,limit=1] stillAlive matches 0 run function random:end_game