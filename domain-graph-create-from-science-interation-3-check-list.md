# Чек-лист итерации 3 для домена `graph`

## Уточнение цели

- [x] Зафиксировано: `graph` должен быть минимальным чистым 3D/WebGL graph-core.
- [x] Зафиксировано: не-WebGL UI/editor/litegraph/minimap/ontology/workspace части должны быть перенесены в `architecture`.
- [x] Составлена точная таблица переноса: `stylist-svelte/domain-graph-create-from-science-interation-3-transfer-table.md`.
- [ ] Согласован запуск кодовой части переноса.

## Новая таблица переноса

- [ ] Составить список `оставить в graph`.
- [ ] Составить список `перенести в architecture`.
- [ ] Составить список `удалить как дубль`.
- [ ] Составить список `переработать в 3D`.
- [ ] Для каждой семьи определить dependency island.
- [ ] Для каждой семьи определить внешних потребителей.

## Пакеты переноса

- [ ] Пакет 1: litegraph/editor island.
- [ ] Пакет 2: minimap island.
- [ ] Пакет 3: ontology/workspace UI island.
- [ ] Пакет 4: нормализация оставшегося 3D graph-core.

## Статус

- [x] Изучен `stylist-svelte/domain-graph-create-from-science.md`.
- [x] Изучен `stylist-svelte/domain-graph-create-from-science-interation-2.md`.
- [x] Изучена текущая структура `stylist-svelte/src/lib/graph`.
- [x] Создан документ актуального состояния.
- [x] Создан документ плана итерации.
- [x] Создан этот чек-лист.
- [ ] Согласован следующий рабочий шаг.

## Baseline

- [ ] Повторить контрольный поиск graph-хвостов в `stylist-svelte/src/lib/science`.
- [ ] Повторить контрольный поиск science-зависимостей в `stylist-svelte/src/lib/graph`.
- [ ] Зафиксировать, нужен ли запуск indexation перед проверкой.
- [ ] Запустить unified errors CLI.
- [ ] Зафиксировать свежий путь к отчету `stylist/errors/output/<timestamp>/README.md`.
- [ ] Зафиксировать, есть ли ошибки в `graph`.

## Структурный аудит

- [ ] Проверить `graph/component/organism/graph-editor`.
- [ ] Проверить `graph/component/organism/litegraph-canvas`.
- [ ] Решить, являются ли story-only organism-папки допустимым текущим состоянием.
- [ ] Проверить `graph/type/struct/ontology-edge-component/*`.
- [ ] Проверить `graph/type/struct/ontology-node-component/*`.
- [ ] Проверить `graph/type/struct/stage/*`.
- [ ] Проверить `graph/type/struct/viewport/*`.
- [ ] Проверить соответствие dependency direction.
- [ ] Проверить DSIAP-направление в `graph/interface`.
- [ ] Проверить, нет ли ручных barrel-правок, которые нужно заменить генерацией.

## Согласование направления

- [ ] Выбрать вариант A: стабилизация текущего 2D/Svelte graph UI.
- [ ] Или выбрать вариант B: начало runtime-направления stage/viewport.
- [ ] Зафиксировать выбранный вертикальный срез.
- [ ] Зафиксировать список файлов, которые можно менять в рамках итерации.

## Выполнение

- [ ] Внести согласованные правки.
- [ ] Не редактировать вручную generated `index.ts`.
- [ ] После изменений в `stylist-svelte/src/lib/**` запустить indexation.
- [ ] После indexation запустить unified errors CLI.
- [ ] Исправить ошибки, относящиеся к выбранному срезу `graph`.
- [ ] Повторить проверку, если были правки после первого отчета.

## Завершение

- [ ] Обновить этот чек-лист по факту выполнения.
- [ ] Зафиксировать итоговый отчет ошибок.
- [ ] Зафиксировать оставшиеся риски.
- [ ] Зафиксировать следующий шаг после итерации 3.

## Итог выполнения переноса

- [x] Перенесены UI/editor/litegraph/minimap/ontology/workspace dependency islands из `graph` в `architecture`.
- [x] `graph` очищен до минимального 3D graph-core:
  - `type/struct/graph-bounds-3d`
  - `type/struct/graph-connection`
  - `type/struct/graph-node`
  - `type/struct/graph-position-3d`
- [x] Старые импорты перенесенных сущностей с `$stylist/graph` заменены на `$stylist/architecture`.
- [x] Indexation запущена в стандартном full-режиме после переноса.
- [x] Root exports обновлены генератором.
- [x] Unified errors CLI запущен.
- [x] `npx tsc --noEmit`: 0 errors in 0 files.
- [x] `yarn check`: 17 issues in 14 files, только `stylist-svelte/src/lib/table/**`.
- [x] Итоговый отчет: `stylist/errors/output/20260625-104058/README.md`.

## Итог выполнения переноса WebGL из `architecture` в `graph`

- [x] Перенесены WebGL runtime entities из `architecture` в `graph`: `SceneObjectManager`, `Camera`, `Matrix4`, WebGL scene component/state/control, shader data, scene buffers, geometry, picking, material palette, scene atom/graph/material/molecule/debug props types.
- [x] В `architecture` оставлены presentation/semantic/prezi/workspace сущности, не являющиеся минимально необходимой WebGL-базой графа.
- [x] Старые absolute imports на перенесенные WebGL-семьи с `$stylist/architecture` заменены на `$stylist/graph`.
- [x] Удалены stale generated-only barrels/folders после переноса: `architecture/function/script/index.ts`, `architecture/function/script/scene/index.ts`, `architecture/class/manager`.
- [x] Indexation запущена повторно после очистки stale generated barrels; актуальные `graph` и `architecture` exports пересобраны генератором.
- [x] Unified errors CLI запущен повторно.
- [x] `npx tsc --noEmit`: 0 errors in 0 files.
- [x] `yarn check`: 20 issues in 16 files, только `stylist-svelte/src/lib/table/**`.
- [x] Итоговый отчет: `stylist/errors/output/20260625-115203/README.md`.

## Итог самостоятельной WebGL graph-сцены

- [x] `GraphNode` расширен до самостоятельной runtime-модели ноды: `label`, `position`, optional `size`, `accent`, `description`.
- [x] `GraphConnection` расширен до runtime-модели связи: `startId`, `endId`, optional `label`, `strength`, `accent`.
- [x] `SceneGraph` теперь содержит `nodes` и `connections`, а WebGL atoms строятся из graph-модели.
- [x] `createDemoSceneGraph` заменен на самостоятельный 3D graph dataset с визуальными нодами, halo-слоем, surface-подложкой и WebGL-связями.
- [x] Удалены устаревшие architecture-demo builders из `graph`: layout/card/dashboard/mobile/grid/flatten/room helpers.
- [x] Graph scene HUD переработан в компактный визуальный overlay без debug-полотна и architecture wording.
- [x] Контрольный поиск `$stylist/architecture` внутри `stylist-svelte/src/lib/graph`: пусто.
- [x] Контрольный поиск старых demo-builder ссылок внутри `stylist-svelte/src/lib/graph`: пусто.
- [x] Indexation запущена после очистки и обновления модели.
- [x] Unified errors CLI запущен повторно.
- [x] `npx tsc --noEmit`: 0 errors in 0 files.
- [x] `yarn check`: 20 issues in 16 files, только `stylist-svelte/src/lib/table/**`.
- [x] Итоговый отчет: `stylist/errors/output/20260625-115930/README.md`.
