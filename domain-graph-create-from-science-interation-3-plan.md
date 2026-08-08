# План итерации 3 для домена `graph`

## Уточненное решение

Предыдущая развилка между стабилизацией 2D/Svelte UI и runtime-направлением больше не актуальна.

Итерация 3 должна очистить `graph` до минимального чистого 3D/WebGL graph-core. Все, что не нужно для WebGL-графа, переносится в `architecture`: litegraph/editor UI, minimap, palette, properties panel, toolbar, ontology/workspace presentation и связанные dependency islands.

Точная рабочая таблица переноса зафиксирована в `stylist-svelte/domain-graph-create-from-science-interation-3-transfer-table.md`.

Целевой итог:

- `graph`: минимальные 3D graph data/contracts/stage/viewport сущности.
- `architecture`: editor, presentation, semantic zoom, scene runtime, minimap, litegraph compatibility и UI composition.

Рабочий порядок:

1. Собрать baseline и карту импортов `$stylist/graph`.
2. Для каждой семьи в `graph` определить dependency island.
3. Составить таблицу: `оставить`, `перенести в architecture`, `удалить как дубль`, `переработать в 3D`.
4. Первым пакетом перенести litegraph/editor island.
5. Вторым пакетом перенести minimap island.
6. Третьим пакетом перенести ontology/workspace UI island.
7. Нормализовать оставшийся `graph` до 3D core: node, edge/connection, 3D position, 3D bounds, stage, viewport, optional renderer contract.

После каждого пакета переноса обязательно запускать indexation и unified errors CLI.

## Цель итерации

Превратить завершенную миграцию `graph` из `science` в управляемую инженерную итерацию: подтвердить текущее качество домена, убрать очевидные структурные хвосты и выбрать следующий вертикальный срез для движения к целевой graph-системе.

## Граница итерации

Итерация не должна снова переносить сущности из `science`, если контрольный поиск не покажет новый остаток. Основная работа находится внутри `stylist-svelte/src/lib/graph`.

Итерация не должна вручную редактировать barrel `index.ts` в `stylist-svelte/src/lib/**`. Если будут изменения кода или экспортов, индексы нужно обновлять только через:

```powershell
python -u "D:\2026\projects\vibe-management.pro\packages\stylist\indexation\cli.py"
```

Ошибки проверяются только unified CLI:

```powershell
python -u "D:\2026\projects\vibe-management.pro\packages\stylist\errors\cli.py"
```

## Шаг 1. Зафиксировать baseline

Действия:

- Повторить контрольный поиск graph-хвостов в `science`.
- Повторить контрольный поиск science-зависимостей в `graph`.
- Запустить indexation, если перед baseline уже есть изменения в `src/lib/**`.
- Запустить unified errors CLI и зафиксировать новый отчет.

Ожидаемый результат:

- Подтверждено, что миграционная часть завершена.
- Есть свежий timestamp отчета ошибок.
- Понятно, появились ли ошибки именно в `graph`.

## Шаг 2. Провести структурный аудит `graph`

Действия:

- Проверить component-папки `graph-editor` и `litegraph-canvas`, которые сейчас выглядят story-only.
- Проверить вложенные type families:
  - `type/struct/ontology-edge-component/*`
  - `type/struct/ontology-node-component/*`
  - `type/struct/stage/*`
  - `type/struct/viewport/*`
- Проверить, нет ли файлов с несколькими экспортируемыми сущностями.
- Проверить, что DSIAP-направление `behavior` / `slot` / `contract` -> `recipe` не нарушено.
- Проверить dependency direction `data` -> `const` -> `type` -> `interface` -> `class` -> `function` -> `component`.

Ожидаемый результат:

- Список точечных структурных правок, если они нужны.
- Отдельно зафиксировано, какие вложенные families оставляем как refinement, а какие нормализуем.

## Шаг 3. Выбрать рабочий вертикальный срез

Нужно согласовать один из двух вариантов.

### Вариант A. Стабилизация текущего 2D/Svelte graph UI

Фокус:

- `graph-canvas`
- `graph-node`
- `graph-edge`
- `graph-port`
- `connection-line`
- `graph-toolbar`
- `minimap`
- `stylist-graph-workspace`

Подходит, если следующая цель - надежно использовать уже перенесенный UI и закрыть структурные хвосты.

### Вариант B. Начало runtime-направления stage/viewport

Фокус:

- `stage`
- `viewport`
- workspace bounds/node/connection types
- минимальный мост к будущему WebGL2/semantic zoom runtime

Подходит, если следующая цель - идти к исходной цели про 5000+ узлов, 3D/WebGL2/instanced rendering и semantic zoom.

## Шаг 4. Выполнить минимальный набор правок

Правки зависят от выбранного варианта, но должны быть ограничены одним вертикальным срезом.

Для варианта A:

- Нормализовать story-only organism-папки, если они действительно незавершенные.
- Проверить и при необходимости поправить интерфейсы и state для текущих UI-компонентов.
- Убедиться, что workspace story не импортирует устаревшие или временные graph-сущности.

Для варианта B:

- Зафиксировать минимальный contract/props слой для `stage` и `viewport`.
- Проверить, что `stage` и `viewport` не зависят от component-слоя ниже своего направления.
- Подготовить маленькую точку расширения под renderer, не создавая новый cluster или joint.

## Шаг 5. Проверить и обновить чек-лист

После правок:

- Запустить indexation.
- Запустить unified errors CLI.
- Обновить `stylist-svelte/domain-graph-create-from-science-interation-3-check-list.md`.
- Зафиксировать, изменился ли список ошибок `graph`.

## Решение для согласования

Перед началом кодовой части нужно выбрать направление:

- Вариант A: стабилизировать текущий 2D/Svelte graph UI.
- Вариант B: начать runtime-направление stage/viewport для будущего WebGL/semantic zoom.

Рекомендуемый следующий шаг: сначала выполнить baseline и структурный аудит, затем выбрать A или B по фактам свежего отчета.
