# CI Тесты
[![Build status](https://ci.appveyor.com/api/projects/status/29d4dcvf4lv7529a?svg=true)](https://ci.appveyor.com/project/Natasha01013/ajs-hw9-task1-math)

# Домашнее задание к лекции «ArrayBuffer»

## Задача 1. Math (log/trig) 
### Легенда 

Мощь атаки магов и демонов привела к разбалансировке игрового мира. Поэтому вы ввели для игроков несколько новых правил и возможностей: 

1. Сила урона зависит от расстояния (для `Magician`, `Daemon`) - линейно падает, а именно: на ближайшую клетку 100%, на 5 клетку от себя - 60% (соответственно, на 2-ую клетку - 90%, на 3-ую - 80%, на 4-ую - 70%)   
2. Возможность насылать «дурман» на магов и демонов. При этом их сила атаки падает уже не только линейно, а по формуле: `attack - Math.log2(x) * 5`, где `x` - это расстояние в клетках. `attack` рассчитывается с учётом п.1. 

Пример:   

* Базовая атака персонажа = 100 единиц  
* Атакуем 2 клетку от себя  

Получаем вместе с дурманом: 85 (вместо 90).  

### Описание  
Реализуйте классы `Magician` и `Daemon` с `get/set stoned`. При этом `get/set attack` должен учитывать логику, описанную в легенде.  

**Подсказка**: используйте класс `Math` и наследование, чтобы не дублировать код.  

Не забудьте написать unit-тесты, которые обеспечивают 100% покрытие функций и классов, которые вы тестируете.  
