tp @a[team=red] 20 222 20
tp @a[team=blue] -20 222 -20

function random:start_game

spawnpoint @a[team=red] 25 256 25
spawnpoint @a[team=blue] -25 256 -25

bossbar set minecraft:blue visible true
bossbar set minecraft:red visible true
bossbar set minecraft:blue players @a
bossbar set minecraft:red players @a

schedule function random:defense/prepare_arena_defense 2t
