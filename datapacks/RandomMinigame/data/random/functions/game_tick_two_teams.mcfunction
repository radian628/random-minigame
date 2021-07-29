
gamemode spectator @a[scores={deaths=1..}]
execute unless entity @a[gamemode=survival,team=red] run function random:bluewin
execute unless entity @a[gamemode=survival,team=red] run function random:end_game
execute unless entity @a[gamemode=survival,team=blue] run function random:redwin
execute unless entity @a[gamemode=survival,team=blue] run function random:end_game
