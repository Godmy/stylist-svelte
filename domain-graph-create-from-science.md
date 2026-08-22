# Отчет по миграции: Создание домена `graph` из `science`

## 1. Цель

Выделение чистой графовой логики в отдельный домен `graph` для реализации высокопроизводительного 3D-рендеринга (5000+ узлов) с поддержкой семантического зума (Prezi-style в объеме), используя наработки из `architecture`.

## 2. Статус миграции (Зафиксировано)

### Перенесенные и переименованные сущности (Типы и Интерфейсы)

| Было в `science`                  | Стало в `graph`     | Изменения            |
| :-------------------------------- | :------------------ | :------------------- |
| `ScienceGraphWorkspaceNode`       | `GraphNode`         | Очистка префикса     |
| `ScienceGraphWorkspaceConnection` | `GraphConnection`   | Очистка префикса     |
| `ScienceGraphWorkspaceBounds`     | `GraphBounds`       | Очистка префикса     |
| `GraphCanvasPosition`             | `GraphPosition2D`   | Унификация имен      |
| `GraphCanvasViewport`             | `GraphViewport`     | Унификация имен      |
| `LitegraphPort`                   | `LiteGraphPort`     | Исправление регистра |
| `ScienceGraphNodeCategory`        | `GraphNodeCategory` | Перенос в enum       |

### Компоненты (Атомы и Молекулы)

Перенесены в `stylist-svelte/src/lib/graph/component/`:

- **Atoms:** `GraphCanvas`, `GraphNode`, `GraphEdge`, `GraphPort`.
- **Molecules:** `GraphToolbar`.

### Логика состояния (Functions/State)

Перенесены в `stylist-svelte/src/lib/graph/function/state/`:

- `createGraphCanvasState`
- `createGraphNodeState`
- `createGraphEdgeState`
- `createGraphPortState`
- `createGraphToolbarState`

### Константы

- `DEFAULT_GRAPH_CANVAS` перенесен в `graph/const/record/graph-canvas`.

## 3. Оставшиеся задачи (Backlog миграции)

### Организмы для переноса:

- `StylistGraphWorkspace` (Будет заменен на WebGL-версию).
- `GraphEditor`
- `Minimap`
- `LitegraphCanvas`

### Скрипты для переноса (`function/script`):

- Вся группа `resolve-minimap-*`.
- Скрипты позиционирования и хит-тестинга.

### Классы:

- `ObjectManagerNodePalette`.
- `ObjectManagerNodePropertiesPanel`.

## 4. План очистки `science`

После проверки импортов, из `science` будут удалены все файлы, имеющие аналоги в `graph`.
**Science сфокусируется исключительно на:**

- AI (PromptBuilder, SentimentAnalysis).
- IDEF0 (Функциональные блоки и диаграммы).

## 5. Архитектурный вектор `graph`

- Использование **WebGL2 + Instanced Rendering** для 5000 объектов.
- Реализация **Semantic Zoom** на базе `architecture/const/enum/tier/index.ts`.
- Интеграция 3D-движка из `architecture` как рендер-движка для `graph`.
