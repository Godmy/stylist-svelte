# Актуальное состояние домена `graph`, итерация 3

## Уточнение целевой границы

`graph` должен содержать только минимальную необходимую базу чистого трехмерного WebGL-графа.

Все, что не требуется для WebGL/3D graph-core, должно быть вынесено из `graph` в `architecture` или другой более подходящий домен. В текущем состоянии `graph` содержит лишние для этой цели слои: 2D editor UI, litegraph compatibility, minimap, ontology/workspace UI, palette, properties panel, toolbar и связанные type/interface/state/const/class сущности.

Новая цель итерации 3: не стабилизировать весь перенесенный `graph`, а очистить его до минимального 3D graph-core и подготовить перенос не-WebGL частей в `architecture`.

Предварительная классификация:

- Оставить или переработать в `graph`: `stage`, `viewport`, минимальные graph node/edge/connection модели, 3D position/bounds, renderer-facing contracts.
- Перенести в `architecture`: `graph-editor`, `litegraph-canvas`, `litegraph-node`, `graph-toolbar`, `connection-line`, `minimap`, `resolve-minimap-*`, `node-palette`, `node-properties-panel`, `node-header`, `node-property`, `node-title`, `port-group`, `ontology-*`, `graph-node-card`, `stylist-graph-workspace` и их dependency islands.
- Удалить или заменить: 2D-only структуры вроде `graph-position-2d`, если они не нужны для WebGL core.

`architecture` уже содержит WebGL scene runtime, semantic zoom, scene graph, scene node, scene camera, shader data и UI shells. Поэтому не-core graph UI должен сходиться туда, а `graph` должен остаться минимальным доменом трехмерного графа.

## Контекст

Документ фиксирует состояние `stylist-svelte/src/lib/graph` после отчетов:

- `stylist-svelte/domain-graph-create-from-science.md`
- `stylist-svelte/domain-graph-create-from-science-interation-2.md`

Предыдущие итерации уже выделили graph-сущности из `science`, перенесли litegraph/minimap/workspace/ontology-связанные части в `graph` и очистили `science` от graph-хвоста.

## Текущий вывод

Домен `graph` уже существует как самостоятельный предметный домен и содержит полный набор основных кластеров:

- `class`
- `component`
- `const`
- `data`
- `function`
- `interface`
- `type`

Контрольный поиск по текущему состоянию:

- В `stylist-svelte/src/lib/graph` не найдено ссылок на `$stylist/science`, `ScienceGraph`, `GraphGraph` и `science/...graph`.
- В `stylist-svelte/src/lib/science` не найдено graph/ontology/workspace/minimap/litegraph терминов по контрольному поиску.
- `stylist-svelte/src/lib/graph/data` сейчас пустой.

Это означает, что следующая итерация должна быть не продолжением механического переноса из `science`, а стабилизацией и приведением самого `graph` к целевому runtime-направлению.

## Состав домена

### Class

`graph/class/object-manager` содержит менеджеры:

- `node-palette`
- `node-properties-panel`

### Component

`graph/component/atom` содержит базовые визуальные единицы:

- `graph-canvas`
- `graph-edge`
- `graph-node`
- `graph-port`
- `node-property`
- `node-title`
- `stage`
- `viewport`

`graph/component/molecule` содержит составные элементы:

- `connection-line`
- `graph-toolbar`
- `graphviz-directed-edge`
- `litegraph-node`
- `node-header`
- `node-properties-panel`
- `ontology-edge-component`
- `ontology-node-component`
- `port-group`

`graph/component/organism` содержит крупные рабочие области:

- `graph-editor`
- `graph-node-card`
- `litegraph-canvas`
- `minimap`
- `node-palette`
- `stylist-graph-workspace`

Отдельная деталь текущего состояния: `graph-editor` и `litegraph-canvas` сейчас представлены story-файлами без основного `index.svelte` в соответствующих папках. Это нужно проверить в следующей итерации: либо это осознанные demo-only семьи, либо незавершенный перенос/сборка компонента.

### Const

`graph/const` содержит:

- `enum/property-type`
- `record/graph-canvas`
- `record/litegraph-canvas-icons`

### Function

`graph/function/script` содержит minimap-скрипты:

- `minimap`
- `resolve-minimap-canvas-point`
- `resolve-minimap-fit-offset`
- `resolve-minimap-fit-zoom`
- `resolve-minimap-node-rect`
- `resolve-minimap-offset-for-point`
- `resolve-minimap-viewport`

`graph/function/state` содержит состояния для canvas, graph, litegraph, minimap, node, ontology, stage и viewport семей.

### Interface

`graph/interface` сейчас использует DSIAP-слои:

- `contract`: litegraph boundary-интерфейсы.
- `slot`: атомарные surfaces для toolbar, litegraph connection, palette и property.
- `recipe`: композиционные интерфейсы компонентов и рабочих областей.

Recipe-слой уже включает:

- `connection-line`
- `graph`
- `graph-canvas`
- `graph-edge`
- `graph-node`
- `graph-node-card`
- `graph-port`
- `graph-toolbar`
- `graphviz-directed-edge`
- `litegraph-node`
- `node-header`
- `node-palette`
- `node-properties-panel`
- `node-property`
- `node-title`
- `port-group`
- `stylist-graph-workspace`

### Type

`graph/type` содержит:

- `alias/graph-workspace-connection-input`
- `enum/graph-node-category`
- `enum/graph-tool-mode`
- `enum/node-title-variant`
- `enum/property-type`
- `struct` семьи для graph, workspace, minimap, litegraph, ontology, stage и viewport.

В `type/struct` есть вложенные refinement-семьи:

- `ontology-edge-component/*`
- `ontology-node-component/*`
- `stage/*`
- `viewport/*`

Их нужно отдельно проверить на соответствие семейной модели и на необходимость плоской нормализации имен.

## Известное качество после прошлой проверки

По отчету `stylist-svelte/domain-graph-create-from-science-interation-2.md`, финальная проверка после очистки фиксировала:

- `npx tsc --noEmit`: 126 errors in 34 files.
- `yarn check`: 494 issues in 159 files.
- Отчет: `stylist/errors/output/20260617-071959/README.md`.

В том отчете `graph` больше не фигурировал в списке файлов с ошибками. Эти цифры нужно считать историческими до нового прогона unified errors CLI.

## Главный риск

Миграционный слой выглядит завершенным, но домен еще не выглядит доведенным до заявленной цели из первого документа: высокопроизводительный graph runtime для 5000+ узлов, 3D/WebGL2/instanced rendering и semantic zoom на базе `architecture`.

Следующая итерация должна сначала подтвердить runtime-цель и затем выбрать узкий вертикальный срез: либо стабилизация текущего Svelte graph UI, либо начало интеграции stage/viewport как основы будущего 3D/WebGL graph.
