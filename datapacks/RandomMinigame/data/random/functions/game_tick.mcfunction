scoreboard players add @e[tag=sk] time 1
scoreboard players add @e[tag=sk] globalTime 1
scoreboard players operation @e[tag=sk] random += @r walk
scoreboard players operation @e[tag=sk] random %= @e[tag=sk,limit=1] itemCount
execute if score @e[tag=sk,limit=1] time matches 317.. run function random:give
execute if score @e[tag=sk,limit=1] time matches 317.. run scoreboard players set @e[tag=sk] time 0

#COMMENT FIRST LINE = TESTING;    COMMENT SECOND LINE = PRODUCTION
scoreboard players set @e[tag=sk] stillAlive 0
#scoreboard players set @e[tag=sk] stillAlive 2



execute as @a[gamemode=survival] run scoreboard players add @e[tag=sk] stillAlive 1




#title @a[x=-128,y=95,z=-128,dx=256,dy=5,dz=256] actionbar {"text":"Warning: Approaching Height Limit!"}
#effect give @a[x=-128,y=100,z=-128,dx=256,dy=156,dz=256] minecraft:wither 3 3
#execute at @a[x=-128,y=90,z=-128,dx=256,dy=156,dz=256] run particle minecraft:barrier ~ 100 ~ 5 0 5 10 10 force

execute if score @e[tag=sk,limit=1] isGamePlaying matches 1 run function random:game_tick_two_teams
execute if score @e[tag=sk,limit=1] isGamePlaying matches 2 run function random:game_tick_ffa
execute if score @e[tag=sk,limit=1] isGamePlaying matches 3 run function random:defense/game_tick_defense

clear @a[gamemode=spectator]



execute at @e[type=snowball,scores={time=10..}] run summon lightning_bolt
scoreboard players add @e[type=snowball] time 1

execute at @e[name="Depths of the Ocean"] run fill ~-6 ~-6 ~-6 ~6 ~6 ~6 minecraft:water replace minecraft:air
kill @e[name="Depths of the Ocean"]

execute at @e[name="Fire Ball"] run summon fireball ~ ~1 ~
kill @e[name="Fire Ball"]

execute at @e[name="Charged Creeper"] run summon creeper ~ ~ ~ {powered:true}
tp @e[name="Charged Creeper"] ~ ~-1000 ~

execute at @e[tag=instant_platform] run fill ~-5 ~-1 ~-5 ~5 ~-1 ~5 stone
kill @e[tag=instant_platform]

execute as @e[tag=instant_bridge] run execute at @p run tp @p ~ ~ ~ ~ 0
execute at @e[tag=instant_bridge] run execute at @p run setblock ^ ^ ^1 stone
execute at @e[tag=instant_bridge] run execute at @p run setblock ^ ^ ^2 stone
execute at @e[tag=instant_bridge] run execute at @p run setblock ^ ^ ^3 stone
execute at @e[tag=instant_bridge] run execute at @p run setblock ^ ^ ^4 stone
execute at @e[tag=instant_bridge] run execute at @p run setblock ^ ^ ^5 stone
execute at @e[tag=instant_bridge] run execute at @p run setblock ^ ^ ^6 stone
execute at @e[tag=instant_bridge] run execute at @p run setblock ^ ^ ^7 stone
execute at @e[tag=instant_bridge] run execute at @p run setblock ^ ^ ^8 stone
execute at @e[tag=instant_bridge] run execute at @p run setblock ^ ^ ^9 stone
execute at @e[tag=instant_bridge] run execute at @p run setblock ^ ^ ^10 stone
execute at @e[tag=instant_bridge] run execute at @p run setblock ^ ^ ^11 stone
execute at @e[tag=instant_bridge] run execute at @p run setblock ^ ^ ^12 stone
execute at @e[tag=instant_bridge] run execute at @p run setblock ^ ^ ^13 stone
execute at @e[tag=instant_bridge] run execute at @p run setblock ^ ^ ^14 stone
execute at @e[tag=instant_bridge] run execute at @p run setblock ^ ^ ^15 stone
execute at @e[tag=instant_bridge] run execute at @p run setblock ^ ^ ^16 stone
execute at @e[tag=instant_bridge] run execute at @p run setblock ^ ^ ^17 stone
execute at @e[tag=instant_bridge] run execute at @p run setblock ^ ^ ^18 stone
execute at @e[tag=instant_bridge] run execute at @p run setblock ^ ^ ^19 stone
execute at @e[tag=instant_bridge] run execute at @p run setblock ^ ^ ^20 stone
kill @e[tag=instant_bridge]

execute at @e[tag=chicken_jockey] run summon chicken ~ ~ ~ {"Passengers":[{"id":"zombie","IsBaby":true}]}
kill @e[tag=chicken_jockey]

execute at @e[tag=skeleton_stack] run summon bat ~ ~ ~ {"Passengers":[{"id":"skeleton",HandItems:[{Count:1,id:bow},{}],"Passengers":[{"id":"skeleton",HandItems:[{Count:1,id:bow},{}],"Passengers":[{"id":"skeleton",HandItems:[{Count:1,id:bow},{}],"Passengers":[{"id":"skeleton",}]}]}]}]}
kill @e[tag=skeleton_stack]

execute at @e[tag=thermonuclear_bomb] run summon tnt ~ ~4 ~ {"Fuse":120}
execute at @e[tag=thermonuclear_bomb] run fill ~-2 ~-5 ~-2 ~2 ~-1 ~2 tnt
kill @e[tag=thermonuclear_bomb]

execute as @e[type=wither] run attribute @s minecraft:generic.follow_range base set 256.0