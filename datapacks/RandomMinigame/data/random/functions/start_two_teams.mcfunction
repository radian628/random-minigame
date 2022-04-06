spawnpoint @a 0 220 0

tp @a[team=red] 20 286 20
tp @a[team=blue] -20 286 -20

scoreboard players set @e[tag=sk] isGamePlaying 1
function random:start_game

schedule function random:prepare_arena_two_teams 2t