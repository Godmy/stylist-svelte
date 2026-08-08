# Отчет по миграции: `graph` из `science`, итерация 2

## Цель итерации

Продолжить выделение графовой логики из `stylist-svelte/src/lib/science` в домен `stylist-svelte/src/lib/graph` после первой итерации, описанной в `stylist-svelte/domain-graph-create-from-science.md`.

## Выполнено

### Перенесены классы

- `class/object-manager/node-palette`
- `class/object-manager/node-properties-panel`

### Перенесены компоненты

Атомы:

- `component/atom/node-property`
- `component/atom/node-title`

Молекулы:

- `component/molecule/litegraph-node`
- `component/molecule/node-header`
- `component/molecule/node-properties-panel`
- `component/molecule/port-group`

Организмы:

- `component/organism/graph-editor`
- `component/organism/litegraph-canvas`
- `component/organism/minimap`
- `component/organism/node-palette`

### Перенесены состояния

- `function/state/graph-editor`
- `function/state/litegraph-canvas`
- `function/state/litegraph-node`
- `function/state/minimap`
- `function/state/node-header`
- `function/state/node-palette`
- `function/state/node-properties-panel`
- `function/state/node-property`
- `function/state/node-title`
- `function/state/port-group`

### Дозавершен перенос minimap scripts

В `graph/function/script` добавлены недостающие функции:

- `resolve-minimap-fit-offset`
- `resolve-minimap-fit-zoom`

После итерации в `graph/function/script` присутствует полный набор minimap-функций:

- `minimap`
- `resolve-minimap-canvas-point`
- `resolve-minimap-fit-offset`
- `resolve-minimap-fit-zoom`
- `resolve-minimap-node-rect`
- `resolve-minimap-offset-for-point`
- `resolve-minimap-viewport`

### Перенесены интерфейсы

Contracts:

- `interface/contract/litegraph-node`
- `interface/contract/litegraph-node-property`
- `interface/contract/litegraph-port`

Recipes:

- `interface/recipe/graph-editor`
- `interface/recipe/litegraph-canvas`
- `interface/recipe/node-header`
- `interface/recipe/node-properties-panel`
- `interface/recipe/node-property`
- `interface/recipe/node-title`

Slots:

- `interface/slot/graph-toolbar-item`
- `interface/slot/litegraph-connection`
- `interface/slot/node-palette`
- `interface/slot/node-palette-item`
- `interface/slot/node-property`

### Перенесены типы и константы

Const:

- `const/record/litegraph-canvas-icons`

Types:

- `type/enum/node-title-variant`
- `type/struct/graph-editor-connection-data`
- `type/struct/graph-editor-node-data`
- `type/struct/graph-editor-palette-node`
- `type/struct/graph-editor-props`
- `type/struct/graph-grid-mode`
- `type/struct/graph-pan-mode`
- `type/struct/graph-port-dimensions`
- `type/struct/litegraph-canvas-node-add-payload`
- `type/struct/minimap-offset`
- `type/struct/minimap-point`
- `type/struct/minimap-props`
- `type/struct/minimap-viewport`
- `type/struct/port-group-props`

## Нормализация после переноса

- Все перенесенные импорты `$stylist/science/...` в домене `graph` были переведены на `$stylist/graph/...`.
- Старые пути `litegraph-port`, `litegraph-node-property`, `litegraph-node-presentation` приведены к уже принятому в `graph` виду:
  - `lite-graph-port`
  - `lite-graph-node-property`
  - `lite-graph-node-presentation`
- Старые minimap-пути вида `type/struct/minimap/minimap-*` приведены к плоской структуре `graph/type/struct/minimap-*`.
- Исправлена ошибочная механическая замена `GraphGraphMinimapContract` обратно на `GraphMinimapContract`.
- `MinimapProps` переведен с несуществующего `LiteGraphNodeProps` на `RecipeLitegraphNode`.
- `GraphEditorConnectionData` и story `GraphEditor` оставлены на `canvas/interface/recipe/connection-line`, потому что `ConnectionLine` является canvas-сущностью, а не graph-сущностью.
- В `graph/function/state/graph-toolbar` исправлена локальная типовая ошибка `props.class` для `mergeClassNames`.

## Индексация

После переноса был запущен генератор индексов:

```powershell
python -u "D:\2026\projects\vibe-management.pro\packages\stylist\indexation\cli.py"
```

Результат: индексация завершилась успешно. Генератор обновил barrel `index.ts` файлы в `graph` и корневой `src/lib/index.ts`.

После точечных import-правок индексация была запущена повторно и также завершилась успешно.

## Проверка ошибок

Был запущен unified errors CLI:

```powershell
python -u "D:\2026\projects\vibe-management.pro\packages\stylist\errors\cli.py"
```

Первый прогон завершился успешно как процесс, но нашел существующие ошибки проекта:

- `npx tsc --noEmit`: 129 errors in 37 files.
- `yarn check`: 500 issues in 165 files.
- отчет: `stylist/errors/output/20260617-065107/README.md`.

В этом прогоне по перенесенному `graph` были обнаружены и затем исправлены ошибки:

- `graph/type/struct/graph-editor-connection-data/index.ts`: неверный импорт `connection-line` из `graph`.
- `graph/component/organism/graph-editor/index.story.svelte`: неверный импорт `connection-line` из `graph`.
- `graph/function/state/graph-toolbar/index.svelte.ts`: несовместимый тип `props.class` для `mergeClassNames`.

Повторный финальный запуск errors CLI был начат после исправлений, но был прерван пользователем. Поэтому финальный чистый отчет именно после последних трех исправлений не зафиксирован.

## Текущий статус

Итерация 2 переноса `graph`-связок из `science` выполнена на уровне файлов, импортов и barrel-индексов.

## Очистка `science` после переноса

После фиксации результата итерации были удалены старые `science`-дубли, у которых уже есть аналоги в `graph`.

Удалены группы:

- `science/component/atom/graph-canvas`
- `science/component/atom/graph-edge`
- `science/component/atom/graph-node`
- `science/component/atom/graph-port`
- `science/component/atom/node-property`
- `science/component/atom/node-title`
- `science/component/molecule/graph-toolbar`
- `science/component/molecule/litegraph-node`
- `science/component/molecule/node-header`
- `science/component/molecule/node-properties-panel`
- `science/component/molecule/port-group`
- `science/component/organism/graph-editor`
- `science/component/organism/litegraph-canvas`
- `science/component/organism/minimap`
- `science/component/organism/node-palette`
- `science/class/object-manager/node-palette`
- `science/class/object-manager/node-properties-panel`
- `science/const/record/graph-canvas`
- `science/const/record/litegraph-canvas-icons`
- `science/function/script/minimap`
- `science/function/script/resolve-minimap-*`
- `science/function/state/graph-canvas`
- `science/function/state/graph-edge`
- `science/function/state/graph-editor`
- `science/function/state/graph-node`
- `science/function/state/graph-port`
- `science/function/state/graph-toolbar`
- `science/function/state/litegraph-canvas`
- `science/function/state/litegraph-node`
- `science/function/state/minimap`
- `science/function/state/node-header`
- `science/function/state/node-palette`
- `science/function/state/node-properties-panel`
- `science/function/state/node-property`
- `science/function/state/node-title`
- `science/function/state/port-group`
- `science/interface/contract/litegraph-*`
- `science/interface/recipe/graph-canvas`
- `science/interface/recipe/graph-edge`
- `science/interface/recipe/graph-editor`
- `science/interface/recipe/graph-node`
- `science/interface/recipe/graph-port`
- `science/interface/recipe/graph-toolbar`
- `science/interface/recipe/litegraph-canvas`
- `science/interface/recipe/litegraph-node`
- `science/interface/recipe/node-header`
- `science/interface/recipe/node-properties-panel`
- `science/interface/recipe/node-property`
- `science/interface/recipe/node-title`
- `science/interface/slot/graph-port`
- `science/interface/slot/graph-toolbar-item`
- `science/interface/slot/litegraph-*`
- `science/interface/slot/node-palette`
- `science/interface/slot/node-palette-item`
- `science/interface/slot/node-property`
- `science/type/enum/graph-theme-id`
- `science/type/enum/graph-tool-mode`
- `science/type/enum/node-title-variant`
- `science/type/struct/graph`
- `science/type/struct/graph-canvas*`
- `science/type/struct/graph-editor-*`
- `science/type/struct/graph-grid-mode`
- `science/type/struct/graph-pan-mode`
- `science/type/struct/graph-port*`
- `science/type/struct/litegraph-*`
- `science/type/struct/minimap`
- `science/type/struct/port-group-props`

После удаления были исправлены живые ссылки:

- `architecture/component/organism/prezi-scene` теперь импортирует `Minimap` из `graph`.
- `science/interface/recipe/map-science` теперь берет `RecipeLitegraphCanvas` из `graph`.
- `science/interface/recipe/graph` теперь берет `RecipeGraphNode` и `RecipeGraphEdge` из `graph`.
- `science/component/organism/stylist-graph-workspace` теперь берет `GraphThemeId` и `GraphToolMode` из `graph` с локальными alias-именами.

Также удалены stale generated директории, оставшиеся пустыми после очистки:

- `science/class`
- `science/const/record`
- `science/function/script`

Индексация после очистки запускалась несколько раз и завершилась успешно.

Финальный unified errors CLI после очистки:

```powershell
python -u "D:\2026\projects\vibe-management.pro\packages\stylist\errors\cli.py"
```

Результат:

- `npx tsc --noEmit`: 126 errors in 34 files.
- `yarn check`: 496 issues in 161 files.
- отчет: `stylist/errors/output/20260617-070912/README.md`.

Ошибки, связанные со stale удаленными `science` graph-дублями, устранены. Домен `graph` не фигурирует в списке файлов с ошибками финального отчета.

## Итерация 3: Полная очистка `science` от graph

По требованию полной очистки `science` от graph-сущностей был перенесен и удален оставшийся хвост:

- `science/component/organism/graph-node-card`
- `science/component/organism/stylist-graph-workspace`
- `science/component/molecule/graphviz-directed-edge`
- `science/component/molecule/ontology-edge-component`
- `science/component/molecule/ontology-node-component`
- `science/function/state/graph-node-card`
- `science/function/state/graphviz-directed-edge`
- `science/function/state/ontology-edge-component`
- `science/function/state/ontology-node-component`
- `science/interface/recipe/graph`
- `science/interface/recipe/graph-node-card`
- `science/interface/recipe/graphviz-directed-edge`
- `science/interface/recipe/stylist-graph-workspace`
- `science/type/enum/graph-node-category`
- `science/type/struct/graph-node-card-*`
- `science/type/struct/graph-node-draft`
- `science/type/struct/graph-workspace-*`
- `science/type/struct/ontology-edge-component`
- `science/type/struct/ontology-node-component`
- `science/type/type/graph-workspace-connection-input`
- graph/ontology-related science SVG data: `graph-toolbar.svg`, `ontology.svg`, `palette.svg`

Соответствующие сущности перенесены в `graph`:

- `graph/component/organism/graph-node-card`
- `graph/component/organism/stylist-graph-workspace`
- `graph/component/molecule/graphviz-directed-edge`
- `graph/component/molecule/ontology-edge-component`
- `graph/component/molecule/ontology-node-component`
- `graph/function/state/graph-node-card`
- `graph/function/state/graphviz-directed-edge`
- `graph/function/state/ontology-edge-component`
- `graph/function/state/ontology-node-component`
- `graph/interface/recipe/graph`
- `graph/interface/recipe/graph-node-card`
- `graph/interface/recipe/graphviz-directed-edge`
- `graph/interface/recipe/stylist-graph-workspace`
- `graph/type/alias/graph-workspace-connection-input`
- `graph/type/struct/graph-node-card-*`
- `graph/type/struct/graph-node-draft`
- `graph/type/struct/graph-workspace-*`
- `graph/type/struct/ontology-edge-component`
- `graph/type/struct/ontology-node-component`

Дополнительная нормализация:

- `ScienceGraph*` имена в перенесенных graph-файлах заменены на `Graph*`.
- `type/type/graph-workspace-connection-input` перенесен в допустимый joint `type/alias/graph-workspace-connection-input`.
- `RecipeMapScience` очищен от `LitegraphCanvas`.
- `TOKEN_SCIENCE_ICON` очищен от `graph-toolbar`, `ontology`, `palette`.
- `GraphNodeCardData` исправлен как самостоятельный data-тип, без рекурсивного расширения `RecipeGraphNodeCard`.
- В `StylistGraphWorkspace` удален неподдерживаемый `size={30}` у `NodeIcon`.

Проверки после итерации 3:

- Контрольный поиск по `science`:

```powershell
rg -n "\b(Graph|graph|LiteGraph|Litegraph|litegraph|Minimap|minimap|Ontology|ontology|Workspace|workspace)\b" stylist-svelte\src\lib\science
```

Результат: совпадений нет.

- Индексация:

```powershell
python -u "D:\2026\projects\vibe-management.pro\packages\stylist\indexation\cli.py"
```

Результат: успешно.

- Unified errors CLI:

```powershell
python -u "D:\2026\projects\vibe-management.pro\packages\stylist\errors\cli.py"
```

Результат:

- `npx tsc --noEmit`: 126 errors in 34 files.
- `yarn check`: 494 issues in 159 files.
- отчет: `stylist/errors/output/20260617-071959/README.md`.

`graph` больше не фигурирует в списке файлов с ошибками финального отчета. Ошибки проекта остаются в других доменах и не относятся к этой миграции.

Открытые пункты для следующей итерации:

- Остались только общие ошибки проекта вне `graph`/`science graph` миграции.
