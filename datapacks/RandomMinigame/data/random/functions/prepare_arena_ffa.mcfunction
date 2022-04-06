function random:prepare_arena

fill -32 286 -32 32 286 32 minecraft:bedrock
spreadplayers 0 0 12 32 false @a
fill -32 286 -32 32 286 32 minecraft:air
execute at @a run fill ~-3 284 ~-3 ~3 284 ~3 minecraft:stone
execute at @a run setblock ~ 284 ~ minecraft:bedrock