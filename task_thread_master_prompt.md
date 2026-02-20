# Общий промпт для запуска 9 потоков обработки дизайн-системы

## Инструкция
Используйте этот промпт как шаблон для запуска каждого из 9 потоков. Просто замените название файла задания в соответствии с потоком, который вы запускаете.

## Поток 1: Атомарные компоненты - Architecture
**Файл задания:** `task_thread_1_architecture_atoms.md`
**Команда запуска:** Запустите обработку всех компонентов в папке `stylist-svelte\src\lib\components\atoms\architecture`

## Поток 2: Атомарные компоненты - Information
**Файл задания:** `task_thread_2_information_atoms.md`
**Команда запуска:** Запустите обработку всех компонентов в папке `stylist-svelte\src\lib\components\atoms\information`

## Поток 3: Атомарные компоненты - Interaction
**Файл задания:** `task_thread_3_interaction_atoms.md`
**Команда запуска:** Запустите обработку всех компонентов в папке `stylist-svelte\src\lib\components\atoms\interaction`

## Поток 4: Молекулярные компоненты - Architecture
**Файл задания:** `task_thread_4_architecture_molecules.md`
**Команда запуска:** Запустите обработку всех компонентов в папке `stylist-svelte\src\lib\components\molecules\architecture`

## Поток 5: Молекулярные компоненты - Information
**Файл задания:** `task_thread_5_information_molecules.md`
**Команда запуска:** Запустите обработку всех компонентов в папке `stylist-svelte\src\lib\components\molecules\information`

## Поток 6: Молекулярные компоненты - Interaction
**Файл задания:** `task_thread_6_interaction_molecules.md`
**Команда запуска:** Запустите обработку всех компонентов в папке `stylist-svelte\src\lib\components\molecules\interaction`

## Поток 7: Организменные компоненты - Architecture
**Файл задания:** `task_thread_7_architecture_organisms.md`
**Команда запуска:** Запустите обработку всех компонентов в папке `stylist-svelte\src\lib\components\organisms\architecture`

## Поток 8: Организменные компоненты - Information
**Файл задания:** `task_thread_8_information_organisms.md`
**Команда запуска:** Запустите обработку всех компонентов в папке `stylist-svelte\src\lib\components\organisms\information`

## Поток 9: Организменные компоненты - Interaction
**Файл задания:** `task_thread_9_interaction_organisms.md`
**Команда запуска:** Запустите обработку всех компонентов в папке `stylist-svelte\src\lib\components\organisms\interaction`

## Общий промпт для запуска потока:
```
Вам нужно пройтись по всем компонентам в указанной папке и привести каждый компонент к эталонному стандарту дизайн-системы.

Архитектура дизайн-системы:
Каждый компонент должен включать следующие файлы:

1. Компонент в src/lib/components:
   - index.svelte - сам компонент с использованием runes
   - index.ts - экспорт компонента
   - index.story.svelte - интерактивная демонстрация с компонентом Story

2. Файлы в src/lib/design-system:
   - props/[component-name].ts - типы пропсов
   - styles/[component-name].ts - стилевой менеджер
   - classes/[component-name].ts - CSS-классы (если специфичны)
   - models/[component-name].svelte.ts - модель состояния
   - state/[component-name].ts - пресеты и значения по умолчанию

Подробные требования и список файлов смотрите в файле задания: [НАЗВАНИЕ ФАЙЛА ЗАДАНИЯ]
```

## Рекомендации по запуску:
1. Запустите потоки параллельно для максимальной эффективности
2. Каждый поток может работать независимо от других
3. После завершения каждого потока проведите проверку качества
4. Используйте эталонный компонент (Button) как образец для всех новых компонентов