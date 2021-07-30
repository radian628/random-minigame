spawnpoint @a 500 77 500
tp @a 500 77 500
worldborder set 10000
forceload add -1 -1 1 1
clear @a

function random:test/armor_stand2

team add red
team add blue
team modify red color red
team modify blue color blue
team modify red friendlyFire false
team modify blue friendlyFire false

scoreboard objectives add stillAlive dummy
scoreboard objectives add time dummy
scoreboard objectives add random dummy
scoreboard objectives add walk minecraft.custom:minecraft.walk_one_cm
scoreboard objectives add itemCount dummy
scoreboard objectives add isGamePlaying dummy
scoreboard objectives add deaths deathCount
scoreboard objectives add deaths2 dummy {"text":"Deaths"}
scoreboard objectives add contractTime dummy
scoreboard objectives add respawnDetector deathCount

scoreboard players set @a walk 0
kill @e[type=armor_stand]
summon minecraft:armor_stand 0 255 0 {"Marker":true,"Invisible":true}
execute positioned 0 255 0 run tag @e[type=minecraft:armor_stand,limit=1] add sk

scoreboard players set @e[tag=sk] random 234234	
scoreboard players set @e[tag=sk] itemCount 1061
scoreboard players set @e[tag=sk] isGamePlaying 0
scoreboard players set @e[tag=sk] time 0
scoreboard players set @e[tag=sk] stillAlive 0
scoreboard players set @e[tag=sk] contractTime 0

bossbar add blue {"text":"Blue HP"}
bossbar set minecraft:blue color blue
bossbar set minecraft:blue visible false

bossbar add red {"text":"Red HP"}
bossbar set minecraft:red color red
bossbar set minecraft:red visible false