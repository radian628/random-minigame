
execute if score @e[tag=sk,limit=1] globalTime matches ..2400 run function random:give_function/give1
execute if score @e[tag=sk,limit=1] globalTime matches 2401..4800 run function random:give_function/give2
execute if score @e[tag=sk,limit=1] globalTime matches 4801.. run function random:give_function/give3