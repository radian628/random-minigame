spawnpoint @a 0 284 0

team leave @a 
scoreboard players set @e[tag=sk] isGamePlaying 2
tp @a 0 95 0
function random:start_game

schedule function random:prepare_arena_ffa 2t