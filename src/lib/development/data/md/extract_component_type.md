# Анализ типов в Svelte компонентах

**Дата генерации:** 2026-04-08T15-26-58-891Z
**Всего типов найдено:** 395
**Циклических зависимостей:** 0

## 📊 Сводка по доменам

| Домен | Кол-во типов | enum | struct | map | record | unknown |
|---|---:|---:|---:|---:|---:|---:|
| control | 77 | 21 | 55 | 0 | 1 | 0 |
| development | 62 | 20 | 39 | 0 | 0 | 3 |
| input | 34 | 13 | 17 | 0 | 0 | 4 |
| media | 25 | 17 | 8 | 0 | 0 | 0 |
| science | 25 | 1 | 23 | 0 | 0 | 1 |
| file | 22 | 8 | 13 | 0 | 0 | 1 |
| geo | 22 | 5 | 17 | 0 | 0 | 0 |
| social | 22 | 6 | 16 | 0 | 0 | 0 |
| commerce | 17 | 4 | 13 | 0 | 0 | 0 |
| communication | 15 | 4 | 11 | 0 | 0 | 0 |
| marketing | 13 | 6 | 7 | 0 | 0 | 0 |
| layout | 11 | 4 | 7 | 0 | 0 | 0 |
| management | 11 | 5 | 6 | 0 | 0 | 0 |
| navigation | 11 | 5 | 6 | 0 | 0 | 0 |
| canvas | 9 | 3 | 6 | 0 | 0 | 0 |
| notification | 7 | 4 | 3 | 0 | 0 | 0 |
| form | 5 | 3 | 2 | 0 | 0 | 0 |
| analytics | 3 | 0 | 3 | 0 | 0 | 0 |
| calendar | 3 | 0 | 3 | 0 | 0 | 0 |
| architecture | 1 | 0 | 1 | 0 | 0 | 0 |

## 📋 Детальный анализ типов

---

## Домен: `analytics` (3 типов)

### `AnalyticsChartCanvasProps`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/analytics/svelte/molecule/charts/chart-canvas/index.svelte` |
| **Строка** | 15 |
| **Целевой путь** | `analytics/type/struct/analytics-chart-canvas-props/index.ts` |

#### 📝 Определение типа

```typescript
type AnalyticsChartCanvasProps = ChartCanvasRecipe & {
		xAxisLabel?: string;
		yAxisLabel?: string;
		zAxisLabel?: string;
	};
```

#### 🔗 Зависимости

**Используемые типы:**

- `AnalyticsChartCanvasProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `ChartCanvasRecipe` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/analytics/interface/recipe/chart-canvas';
import ... from '$stylist/analytics/interface/recipe/chart-canvas';
import ... from '$stylist/layout/function/script/merge-class-names';
import ... from '$stylist/analytics/function/state/chart-function';
import ... from '$stylist/analytics/svelte/atom/charts/chart-axis-x/index.svelte';
import ... from '$stylist/analytics/svelte/atom/charts/chart-axis-y/index.svelte';
import ... from '$stylist/analytics/svelte/atom/charts/chart-axis-z/index.svelte';
import ... from '$stylist/analytics/svelte/atom/charts/chart-background/index.svelte';
import ... from '$stylist/analytics/svelte/atom/charts/chart-name/index.svelte';
import ... from '$stylist/analytics/svelte/atom/charts/chart-polyline/index.svelte';
import ... from '$stylist/analytics/class/object-manager/chart-canvas';
```

#### 💡 Рекомендация по миграции

Создать файл: `analytics/type/struct/analytics-chart-canvas-props/index.ts`

```typescript
// Extracted from: lib/analytics/svelte/molecule/charts/chart-canvas/index.svelte:15
export type AnalyticsChartCanvasProps = ChartCanvasRecipe & {
		xAxisLabel?: string;
		yAxisLabel?: string;
		zAxisLabel?: string;
	};
```

---

### `CanvasChartProps`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/analytics/svelte/organism/charts/canvas-chart/index.svelte` |
| **Строка** | 7 |
| **Целевой путь** | `analytics/type/struct/canvas-chart-props/index.ts` |

#### 📝 Определение типа

```typescript
type CanvasChartProps = CanvasChartRecipe & {
    xAxisLabel?: string;
    yAxisLabel?: string;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `CanvasChartProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `CanvasChartRecipe` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/analytics/interface/recipe/canvas-chart';
import ... from '$stylist/analytics/class/object-manager/canvas-chart';
import ... from '$stylist/analytics/class/style-manager/canvas-chart';
```

#### 💡 Рекомендация по миграции

Создать файл: `analytics/type/struct/canvas-chart-props/index.ts`

```typescript
// Extracted from: lib/analytics/svelte/organism/charts/canvas-chart/index.svelte:7
export type CanvasChartProps = CanvasChartRecipe & {
    xAxisLabel?: string;
    yAxisLabel?: string;
  };
```

---

### `AnalyticsChartProps`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/analytics/svelte/organism/charts/chart/index.svelte` |
| **Строка** | 11 |
| **Целевой путь** | `analytics/type/struct/analytics-chart-props/index.ts` |

#### 📝 Определение типа

```typescript
type AnalyticsChartProps = ChartRecipe & {
		xAxisLabel?: string;
		yAxisLabel?: string;
		zAxisLabel?: string;
	};
```

#### 🔗 Зависимости

**Используемые типы:**

- `AnalyticsChartProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `ChartRecipe` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/analytics/interface/recipe/chart';
import ... from '$stylist/analytics/interface/recipe/chart';
import ... from '$stylist/analytics/function/state/chart-function';
import ... from '$stylist/layout/function/script/merge-class-names';
import ... from '$stylist/analytics/svelte/molecule/charts/chart-canvas/index.svelte';
import ... from '$stylist/analytics/svelte/molecule/charts/chart-legend/index.svelte';
import ... from '$stylist/analytics/class/object-manager/chart';
```

#### 💡 Рекомендация по миграции

Создать файл: `analytics/type/struct/analytics-chart-props/index.ts`

```typescript
// Extracted from: lib/analytics/svelte/organism/charts/chart/index.svelte:11
export type AnalyticsChartProps = ChartRecipe & {
		xAxisLabel?: string;
		yAxisLabel?: string;
		zAxisLabel?: string;
	};
```

---

---

## Домен: `architecture` (1 типов)

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/architecture/svelte/organism/canvas/presenter-scene/story-demo.svelte` |
| **Строка** | 6 |
| **Целевой путь** | `architecture/type/struct/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = {
		title?: string;
		depth?: number;
		zoom?: number;
	};
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from './index.svelte';
import ... from '$stylist/architecture/type/struct/scene-node';
```

#### 💡 Рекомендация по миграции

Создать файл: `architecture/type/struct/props/index.ts`

```typescript
// Extracted from: lib/architecture/svelte/organism/canvas/presenter-scene/story-demo.svelte:6
export type Props = {
		title?: string;
		depth?: number;
		zoom?: number;
	};
```

---

---

## Домен: `calendar` (3 типов)

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/calendar/svelte/molecule/controls/calendar/timeline/index.svelte` |
| **Строка** | 6 |
| **Целевой путь** | `calendar/type/struct/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = TimelineContract & InteractionHTMLAttributes<HTMLDivElement>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `TimelineContract` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `InteractionHTMLAttributes` → импортируется из `$stylist//...`
- `HTMLDivElement` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/calendar/interface/record/calendar';
import ... from '$stylist/interaction/type/struct/interaction';
```

#### 💡 Рекомендация по миграции

Создать файл: `calendar/type/struct/props/index.ts`

```typescript
// Extracted from: lib/calendar/svelte/molecule/controls/calendar/timeline/index.svelte:6
export type Props = TimelineContract & InteractionHTMLAttributes<HTMLDivElement>;
```

---

### `CalendarEvent`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/calendar/svelte/organism/calendar/calendar-view/index.svelte` |
| **Строка** | 31 |
| **Целевой путь** | `calendar/type/struct/calendar-event/index.ts` |

#### 📝 Определение типа

```typescript
type CalendarEvent = {
		id: string;
		title: string;
		start: Date;
		end: Date;
		color?: string;
		allDay?: boolean;
	};
```

#### 🔗 Зависимости

**Используемые типы:**

- `CalendarEvent` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Date` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Date` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/calendar/interface/record/calendar';
import ... from '$stylist';
import ... from '$stylist/calendar/class/style-manager/calendar-view';
```

#### 💡 Рекомендация по миграции

Создать файл: `calendar/type/struct/calendar-event/index.ts`

```typescript
// Extracted from: lib/calendar/svelte/organism/calendar/calendar-view/index.svelte:31
export type CalendarEvent = {
		id: string;
		title: string;
		start: Date;
		end: Date;
		color?: string;
		allDay?: boolean;
	};
```

---

### `CalendarDay`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/calendar/svelte/organism/calendar/calendar-view/index.svelte` |
| **Строка** | 40 |
| **Целевой путь** | `calendar/type/struct/calendar-day/index.ts` |

#### 📝 Определение типа

```typescript
type CalendarDay = {
		date: Date;
		isCurrentMonth: boolean;
		isToday: boolean;
		events: CalendarEvent[];
	};
```

#### 🔗 Зависимости

**Используемые типы:**

- `CalendarDay` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Date` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `CalendarEvent` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/calendar/interface/record/calendar';
import ... from '$stylist';
import ... from '$stylist/calendar/class/style-manager/calendar-view';
```

#### 💡 Рекомендация по миграции

Создать файл: `calendar/type/struct/calendar-day/index.ts`

```typescript
// Extracted from: lib/calendar/svelte/organism/calendar/calendar-view/index.svelte:40
export type CalendarDay = {
		date: Date;
		isCurrentMonth: boolean;
		isToday: boolean;
		events: CalendarEvent[];
	};
```

---

---

## Домен: `canvas` (9 типов)

### `CanvasGraphEdgeProps`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/canvas/svelte/atom/graph/graph-edge/index.svelte` |
| **Строка** | 6 |
| **Целевой путь** | `canvas/type/struct/canvas-graph-edge-props/index.ts` |

#### 📝 Определение типа

```typescript
type CanvasGraphEdgeProps = GraphEdgeRecipe & {
		fromNodeId: string;
		toNodeId: string;
		label?: string;
	};
```

#### 🔗 Зависимости

**Используемые типы:**

- `CanvasGraphEdgeProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `GraphEdgeRecipe` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/science/interface/recipe/graph-edge';
import ... from '$stylist/canvas/function/state/graph-edge';
```

#### 💡 Рекомендация по миграции

Создать файл: `canvas/type/struct/canvas-graph-edge-props/index.ts`

```typescript
// Extracted from: lib/canvas/svelte/atom/graph/graph-edge/index.svelte:6
export type CanvasGraphEdgeProps = GraphEdgeRecipe & {
		fromNodeId: string;
		toNodeId: string;
		label?: string;
	};
```

---

### `CanvasGraphNodeProps`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/canvas/svelte/atom/graph/graph-node/index.svelte` |
| **Строка** | 6 |
| **Целевой путь** | `canvas/type/struct/canvas-graph-node-props/index.ts` |

#### 📝 Определение типа

```typescript
type CanvasGraphNodeProps = GraphNodeRecipe & {
		id: string;
		label?: string;
		type?: string;
		interactive?: boolean;
	};
```

#### 🔗 Зависимости

**Используемые типы:**

- `CanvasGraphNodeProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `GraphNodeRecipe` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/science/interface/recipe/graph-node';
import ... from '$stylist/canvas/function/state/graph-node';
```

#### 💡 Рекомендация по миграции

Создать файл: `canvas/type/struct/canvas-graph-node-props/index.ts`

```typescript
// Extracted from: lib/canvas/svelte/atom/graph/graph-node/index.svelte:6
export type CanvasGraphNodeProps = GraphNodeRecipe & {
		id: string;
		label?: string;
		type?: string;
		interactive?: boolean;
	};
```

---

### `GraphCanvasProps`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/canvas/svelte/atom/graph-canvas/index.svelte` |
| **Строка** | 8 |
| **Целевой путь** | `canvas/type/enum/graph-canvas-props/index.ts` |

#### 📝 Определение типа

```typescript
type GraphCanvasProps = GraphCanvasContract & {
		minZoom?: number;
		maxZoom?: number;
		panMode?: 'drag' | 'space' | 'always';
		panEnabled?: boolean;
		zoomEnabled?: boolean;
		snapThreshold?: number;
		onzoomchange?: (zoom: number) => void;
		onoffsetchange?: (offset: { x: number; y: number }) => void;
		onpanstart?: (event: MouseEvent) => void;
		onpan?: (event: MouseEvent) => void;
		onpanend?: (event: MouseEvent) => void;
		oncanvasclick?: (event: MouseEvent) => void;
	};
```

#### 🔗 Зависимости

**Используемые типы:**

- `GraphCanvasProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `GraphCanvasContract` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `MouseEvent` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `MouseEvent` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `MouseEvent` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `MouseEvent` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/canvas/type/struct/graph-canvas';
import ... from '$stylist/canvas/class/style-manager/graph-canvas';
import ... from '$stylist/canvas/function/state/graph-canvas';
import ... from '$stylist/information/const/struct/graph-canvas';
```

#### 💡 Рекомендация по миграции

Создать файл: `canvas/type/enum/graph-canvas-props/index.ts`

```typescript
// Extracted from: lib/canvas/svelte/atom/graph-canvas/index.svelte:8
export type GraphCanvasProps = GraphCanvasContract & {
		minZoom?: number;
		maxZoom?: number;
		panMode?: 'drag' | 'space' | 'always';
		panEnabled?: boolean;
		zoomEnabled?: boolean;
		snapThreshold?: number;
		onzoomchange?: (zoom: number) => void;
		onoffsetchange?: (offset: { x: number; y: number }) => void;
		onpanstart?: (event: MouseEvent) => void;
		onpan?: (event: MouseEvent) => void;
		onpanend?: (event: MouseEvent) => void;
		oncanvasclick?: (event: MouseEvent) => void;
	};
```

---

### `StageProps`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/canvas/svelte/atom/stage/index.svelte` |
| **Строка** | 6 |
| **Целевой путь** | `canvas/type/struct/stage-props/index.ts` |

#### 📝 Определение типа

```typescript
type StageProps = StageContract & {
		camera: { x: number; y: number; zoom: number };
		worldWidth?: number;
		worldHeight?: number;
	};
```

#### 🔗 Зависимости

**Используемые типы:**

- `StageProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `StageContract` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/canvas/type/struct/stage';
import ... from '$stylist/canvas/class/style-manager/stage';
```

#### 💡 Рекомендация по миграции

Создать файл: `canvas/type/struct/stage-props/index.ts`

```typescript
// Extracted from: lib/canvas/svelte/atom/stage/index.svelte:6
export type StageProps = StageContract & {
		camera: { x: number; y: number; zoom: number };
		worldWidth?: number;
		worldHeight?: number;
	};
```

---

### `ViewportProps`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/canvas/svelte/atom/viewport/index.svelte` |
| **Строка** | 8 |
| **Целевой путь** | `canvas/type/struct/viewport-props/index.ts` |

#### 📝 Определение типа

```typescript
type ViewportProps = ViewportContract & {
		camera: { x: number; y: number; zoom: number };
		interactive?: boolean;
		showGrid?: boolean;
		worldWidth?: number;
		worldHeight?: number;
	};
```

#### 🔗 Зависимости

**Используемые типы:**

- `ViewportProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `ViewportContract` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/canvas/type/struct/viewport';
import ... from '$stylist/canvas/class/style-manager/viewport';
import ... from '$stylist/canvas/svelte/atom/stage/index.svelte';
import ... from '$stylist/layout/svelte/atom/grid/index.svelte';
```

#### 💡 Рекомендация по миграции

Создать файл: `canvas/type/struct/viewport-props/index.ts`

```typescript
// Extracted from: lib/canvas/svelte/atom/viewport/index.svelte:8
export type ViewportProps = ViewportContract & {
		camera: { x: number; y: number; zoom: number };
		interactive?: boolean;
		showGrid?: boolean;
		worldWidth?: number;
		worldHeight?: number;
	};
```

---

### `DrawingTool`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/canvas/svelte/molecule/canvas-toolbar/index.svelte` |
| **Строка** | 4 |
| **Целевой путь** | `canvas/type/enum/drawing-tool/index.ts` |

#### 📝 Определение типа

```typescript
type DrawingTool = 'pen' | 'eraser' | 'select' | 'text' | 'shape';
```

#### 🔗 Зависимости

**Используемые типы:**

- `DrawingTool` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from 'svelte';
```

#### 💡 Рекомендация по миграции

Создать файл: `canvas/type/enum/drawing-tool/index.ts`

```typescript
// Extracted from: lib/canvas/svelte/molecule/canvas-toolbar/index.svelte:4
export type DrawingTool = 'pen' | 'eraser' | 'select' | 'text' | 'shape';
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/canvas/svelte/molecule/canvas-toolbar/index.svelte` |
| **Строка** | 23 |
| **Целевой путь** | `canvas/type/struct/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = {
    selectedTool?: DrawingTool;
    drawingOptions?: DrawingOptions;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `DrawingTool` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `DrawingOptions` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from 'svelte';
```

#### 💡 Рекомендация по миграции

Создать файл: `canvas/type/struct/props/index.ts`

```typescript
// Extracted from: lib/canvas/svelte/molecule/canvas-toolbar/index.svelte:23
export type Props = {
    selectedTool?: DrawingTool;
    drawingOptions?: DrawingOptions;
  };
```

---

### `GraphToolbarItem`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/canvas/svelte/molecule/graph-toolbar/index.svelte` |
| **Строка** | 7 |
| **Целевой путь** | `canvas/type/enum/graph-toolbar-item/index.ts` |

#### 📝 Определение типа

```typescript
type GraphToolbarItem = {
		id: string;
		type: 'button' | 'select' | 'input' | 'separator';
		label?: string;
		tooltip?: string;
		icon?: string;
		active?: boolean;
		disabled?: boolean;
		value?: unknown;
		options?: string[];
		onclick?: () => void;
	};
```

#### 🔗 Зависимости

**Используемые типы:**

- `GraphToolbarItem` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/science/interface/recipe/graph-toolbar';
import ... from '$stylist/information/function/state/graph-toolbar';
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `canvas/type/enum/graph-toolbar-item/index.ts`

```typescript
// Extracted from: lib/canvas/svelte/molecule/graph-toolbar/index.svelte:7
export type GraphToolbarItem = {
		id: string;
		type: 'button' | 'select' | 'input' | 'separator';
		label?: string;
		tooltip?: string;
		icon?: string;
		active?: boolean;
		disabled?: boolean;
		value?: unknown;
		options?: string[];
		onclick?: () => void;
	};
```

---

### `GraphToolbarProps`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/canvas/svelte/molecule/graph-toolbar/index.svelte` |
| **Строка** | 20 |
| **Целевой путь** | `canvas/type/struct/graph-toolbar-props/index.ts` |

#### 📝 Определение типа

```typescript
type GraphToolbarProps = GraphToolbarRecipe & {
		items?: GraphToolbarItem[];
		onItemClick?: (id: string) => void;
		onValueChange?: (id: string, value: unknown) => void;
	};
```

#### 🔗 Зависимости

**Используемые типы:**

- `GraphToolbarProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `GraphToolbarRecipe` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `GraphToolbarItem` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/science/interface/recipe/graph-toolbar';
import ... from '$stylist/information/function/state/graph-toolbar';
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `canvas/type/struct/graph-toolbar-props/index.ts`

```typescript
// Extracted from: lib/canvas/svelte/molecule/graph-toolbar/index.svelte:20
export type GraphToolbarProps = GraphToolbarRecipe & {
		items?: GraphToolbarItem[];
		onItemClick?: (id: string) => void;
		onValueChange?: (id: string, value: unknown) => void;
	};
```

---

---

## Домен: `commerce` (17 типов)

### `ProductSortOption`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/commerce/svelte/atom/controls/product-sort/index.svelte` |
| **Строка** | 6 |
| **Целевой путь** | `commerce/type/enum/product-sort-option/index.ts` |

#### 📝 Определение типа

```typescript
type ProductSortOption = string | { value: string; label: string };
```

#### 🔗 Зависимости

**Используемые типы:**

- `ProductSortOption` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/interaction/type/struct/interaction';
import ... from '$stylist/commerce/function/state/product-sort';
```

#### 💡 Рекомендация по миграции

Создать файл: `commerce/type/enum/product-sort-option/index.ts`

```typescript
// Extracted from: lib/commerce/svelte/atom/controls/product-sort/index.svelte:6
export type ProductSortOption = string | { value: string; label: string };
```

---

### `ProductSortProps`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/commerce/svelte/atom/controls/product-sort/index.svelte` |
| **Строка** | 7 |
| **Целевой путь** | `commerce/type/struct/product-sort-props/index.ts` |

#### 📝 Определение типа

```typescript
type ProductSortProps = {
		options?: ProductSortOption[];
		selectedOption?: string;
		onValueChange?: (option: string) => void;
		class?: string;
	};
```

#### 🔗 Зависимости

**Используемые типы:**

- `ProductSortProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `ProductSortOption` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/interaction/type/struct/interaction';
import ... from '$stylist/commerce/function/state/product-sort';
```

#### 💡 Рекомендация по миграции

Создать файл: `commerce/type/struct/product-sort-props/index.ts`

```typescript
// Extracted from: lib/commerce/svelte/atom/controls/product-sort/index.svelte:7
export type ProductSortProps = {
		options?: ProductSortOption[];
		selectedOption?: string;
		onValueChange?: (option: string) => void;
		class?: string;
	};
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/commerce/svelte/atom/controls/product-sort/index.svelte` |
| **Строка** | 14 |
| **Целевой путь** | `commerce/type/struct/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = ProductSortProps & InteractionHTMLAttributes<HTMLDivElement>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `ProductSortProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `InteractionHTMLAttributes` → импортируется из `$stylist//...`
- `HTMLDivElement` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/interaction/type/struct/interaction';
import ... from '$stylist/commerce/function/state/product-sort';
```

#### 💡 Рекомендация по миграции

Создать файл: `commerce/type/struct/props/index.ts`

```typescript
// Extracted from: lib/commerce/svelte/atom/controls/product-sort/index.svelte:14
export type Props = ProductSortProps & InteractionHTMLAttributes<HTMLDivElement>;
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/commerce/svelte/molecule/cards/base-card/index.svelte` |
| **Строка** | 5 |
| **Целевой путь** | `commerce/type/struct/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = HTMLAttributes<HTMLDivElement> & {
		title?: string;
		description?: string;
		headerClass?: string;
		bodyClass?: string;
		footerClass?: string;
	};
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `HTMLAttributes` → импортируется из `svelte/elements`
- `HTMLDivElement` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from 'svelte/elements';
```

#### 💡 Рекомендация по миграции

Создать файл: `commerce/type/struct/props/index.ts`

```typescript
// Extracted from: lib/commerce/svelte/molecule/cards/base-card/index.svelte:5
export type Props = HTMLAttributes<HTMLDivElement> & {
		title?: string;
		description?: string;
		headerClass?: string;
		bodyClass?: string;
		footerClass?: string;
	};
```

---

### `RestProps`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/commerce/svelte/organism/bulk-order-form/index.svelte` |
| **Строка** | 32 |
| **Целевой путь** | `commerce/type/struct/rest-props/index.ts` |

#### 📝 Определение типа

```typescript
type RestProps = Omit<InteractionHTMLAttributes<HTMLElement>, 'class'>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `RestProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `InteractionHTMLAttributes` → импортируется из `$stylist//...`
- `HTMLElement` → импортируется из `svelte/elements`

**Все импорты компонента:**

```typescript
import ... from '$stylist/interaction/type/struct/interaction';
import ... from '$stylist';
import ... from '$stylist';
import ... from '$stylist/layout/function/script/merge-class-names';
import ... from '$stylist/commerce/function/state/bulk-order-form';
import ... from '$stylist/commerce/type/struct/bulk-order-form';
import ... from '$stylist/commerce/class/style-manager/bulk-order-form';
```

#### 💡 Рекомендация по миграции

Создать файл: `commerce/type/struct/rest-props/index.ts`

```typescript
// Extracted from: lib/commerce/svelte/organism/bulk-order-form/index.svelte:32
export type RestProps = Omit<InteractionHTMLAttributes<HTMLElement>, 'class'>;
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/commerce/svelte/organism/bulk-order-form/index.svelte` |
| **Строка** | 34 |
| **Целевой путь** | `commerce/type/struct/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = RestProps & BulkOrderFormProps;
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `RestProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `BulkOrderFormProps` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/interaction/type/struct/interaction';
import ... from '$stylist';
import ... from '$stylist';
import ... from '$stylist/layout/function/script/merge-class-names';
import ... from '$stylist/commerce/function/state/bulk-order-form';
import ... from '$stylist/commerce/type/struct/bulk-order-form';
import ... from '$stylist/commerce/class/style-manager/bulk-order-form';
```

#### 💡 Рекомендация по миграции

Создать файл: `commerce/type/struct/props/index.ts`

```typescript
// Extracted from: lib/commerce/svelte/organism/bulk-order-form/index.svelte:34
export type Props = RestProps & BulkOrderFormProps;
```

---

### `CheckoutStep`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/commerce/svelte/organism/checkout-form/index.svelte` |
| **Строка** | 24 |
| **Целевой путь** | `commerce/type/enum/checkout-step/index.ts` |

#### 📝 Определение типа

```typescript
type CheckoutStep = 'cart' | 'information' | 'shipping' | 'payment' | 'review' | 'confirmation';
```

#### 🔗 Зависимости

**Используемые типы:**

- `CheckoutStep` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/interaction/type/struct/interaction';
import ... from '$stylist';
import ... from '$stylist';
import ... from '$stylist/layout/function/script/merge-class-names';
```

#### 💡 Рекомендация по миграции

Создать файл: `commerce/type/enum/checkout-step/index.ts`

```typescript
// Extracted from: lib/commerce/svelte/organism/checkout-form/index.svelte:24
export type CheckoutStep = 'cart' | 'information' | 'shipping' | 'payment' | 'review' | 'confirmation';
```

---

### `CartItem`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/commerce/svelte/organism/checkout-form/index.svelte` |
| **Строка** | 26 |
| **Целевой путь** | `commerce/type/struct/cart-item/index.ts` |

#### 📝 Определение типа

```typescript
type CartItem = {
    id: string;
    name: string;
    price: number;
    quantity: number;
    thumbnail?: string;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `CartItem` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/interaction/type/struct/interaction';
import ... from '$stylist';
import ... from '$stylist';
import ... from '$stylist/layout/function/script/merge-class-names';
```

#### 💡 Рекомендация по миграции

Создать файл: `commerce/type/struct/cart-item/index.ts`

```typescript
// Extracted from: lib/commerce/svelte/organism/checkout-form/index.svelte:26
export type CartItem = {
    id: string;
    name: string;
    price: number;
    quantity: number;
    thumbnail?: string;
  };
```

---

### `Address`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/commerce/svelte/organism/checkout-form/index.svelte` |
| **Строка** | 34 |
| **Целевой путь** | `commerce/type/struct/address/index.ts` |

#### 📝 Определение типа

```typescript
type Address = {
    firstName: string;
    lastName: string;
    company?: string;
    address1: string;
    address2?: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
    phone?: string;
    email?: string;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `Address` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/interaction/type/struct/interaction';
import ... from '$stylist';
import ... from '$stylist';
import ... from '$stylist/layout/function/script/merge-class-names';
```

#### 💡 Рекомендация по миграции

Создать файл: `commerce/type/struct/address/index.ts`

```typescript
// Extracted from: lib/commerce/svelte/organism/checkout-form/index.svelte:34
export type Address = {
    firstName: string;
    lastName: string;
    company?: string;
    address1: string;
    address2?: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
    phone?: string;
    email?: string;
  };
```

---

### `PaymentMethod`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/commerce/svelte/organism/checkout-form/index.svelte` |
| **Строка** | 48 |
| **Целевой путь** | `commerce/type/enum/payment-method/index.ts` |

#### 📝 Определение типа

```typescript
type PaymentMethod = {
    id: string;
    type: 'credit_card' | 'paypal' | 'bank_transfer' | 'digital_wallet';
    lastFour?: string;
    expiry?: string;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `PaymentMethod` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/interaction/type/struct/interaction';
import ... from '$stylist';
import ... from '$stylist';
import ... from '$stylist/layout/function/script/merge-class-names';
```

#### 💡 Рекомендация по миграции

Создать файл: `commerce/type/enum/payment-method/index.ts`

```typescript
// Extracted from: lib/commerce/svelte/organism/checkout-form/index.svelte:48
export type PaymentMethod = {
    id: string;
    type: 'credit_card' | 'paypal' | 'bank_transfer' | 'digital_wallet';
    lastFour?: string;
    expiry?: string;
  };
```

---

### `ShippingOption`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/commerce/svelte/organism/checkout-form/index.svelte` |
| **Строка** | 55 |
| **Целевой путь** | `commerce/type/struct/shipping-option/index.ts` |

#### 📝 Определение типа

```typescript
type ShippingOption = {
    id: string;
    name: string;
    description: string;
    price: number;
    estimatedDays: number;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `ShippingOption` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/interaction/type/struct/interaction';
import ... from '$stylist';
import ... from '$stylist';
import ... from '$stylist/layout/function/script/merge-class-names';
```

#### 💡 Рекомендация по миграции

Создать файл: `commerce/type/struct/shipping-option/index.ts`

```typescript
// Extracted from: lib/commerce/svelte/organism/checkout-form/index.svelte:55
export type ShippingOption = {
    id: string;
    name: string;
    description: string;
    price: number;
    estimatedDays: number;
  };
```

---

### `RestProps`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/commerce/svelte/organism/checkout-form/index.svelte` |
| **Строка** | 63 |
| **Целевой путь** | `commerce/type/struct/rest-props/index.ts` |

#### 📝 Определение типа

```typescript
type RestProps = Omit<InteractionHTMLAttributes<HTMLDivElement>, 'class'>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `RestProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `InteractionHTMLAttributes` → импортируется из `$stylist//...`
- `HTMLDivElement` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/interaction/type/struct/interaction';
import ... from '$stylist';
import ... from '$stylist';
import ... from '$stylist/layout/function/script/merge-class-names';
```

#### 💡 Рекомендация по миграции

Создать файл: `commerce/type/struct/rest-props/index.ts`

```typescript
// Extracted from: lib/commerce/svelte/organism/checkout-form/index.svelte:63
export type RestProps = Omit<InteractionHTMLAttributes<HTMLDivElement>, 'class'>;
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/commerce/svelte/organism/checkout-form/index.svelte` |
| **Строка** | 65 |
| **Целевой путь** | `commerce/type/struct/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = RestProps & {
    cartItems: CartItem[];
    subtotal: number;
    tax: number;
    shipping: number;
    total: number;
    class?: string;
    step?: CheckoutStep;
    onStepChange?: (step: CheckoutStep) => void;
    onComplete?: () => void;
    onError?: (error: string) => void;
    countries?: { value: string; label: string }[];
    states?: { value: string; label: string }[];
    shippingOptions?: ShippingOption[];
    defaultAddress?: Address;
    defaultPaymentMethod?: PaymentMethod;
    showProgress?: boolean;
    allowGuestCheckout?: boolean;
    requireAccount?: boolean;
    currency?: string;
    locale?: string;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `RestProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `CartItem` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `CheckoutStep` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `CheckoutStep` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `ShippingOption` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Address` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `PaymentMethod` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/interaction/type/struct/interaction';
import ... from '$stylist';
import ... from '$stylist';
import ... from '$stylist/layout/function/script/merge-class-names';
```

#### 💡 Рекомендация по миграции

Создать файл: `commerce/type/struct/props/index.ts`

```typescript
// Extracted from: lib/commerce/svelte/organism/checkout-form/index.svelte:65
export type Props = RestProps & {
    cartItems: CartItem[];
    subtotal: number;
    tax: number;
    shipping: number;
    total: number;
    class?: string;
    step?: CheckoutStep;
    onStepChange?: (step: CheckoutStep) => void;
    onComplete?: () => void;
    onError?: (error: string) => void;
    countries?: { value: string; label: string }[];
    states?: { value: string; label: string }[];
    shippingOptions?: ShippingOption[];
    defaultAddress?: Address;
    defaultPaymentMethod?: PaymentMethod;
    showProgress?: boolean;
    allowGuestCheckout?: boolean;
    requireAccount?: boolean;
    currency?: string;
    locale?: string;
  };
```

---

### `StepStatus`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/commerce/svelte/organism/checkout-form/index.svelte` |
| **Строка** | 276 |
| **Целевой путь** | `commerce/type/enum/step-status/index.ts` |

#### 📝 Определение типа

```typescript
type StepStatus = 'completed' | 'current' | 'upcoming';
```

#### 🔗 Зависимости

**Используемые типы:**

- `StepStatus` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/interaction/type/struct/interaction';
import ... from '$stylist';
import ... from '$stylist';
import ... from '$stylist/layout/function/script/merge-class-names';
```

#### 💡 Рекомендация по миграции

Создать файл: `commerce/type/enum/step-status/index.ts`

```typescript
// Extracted from: lib/commerce/svelte/organism/checkout-form/index.svelte:276
export type StepStatus = 'completed' | 'current' | 'upcoming';
```

---

### `RFQProduct`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/commerce/svelte/organism/rfqform/index.svelte` |
| **Строка** | 27 |
| **Целевой путь** | `commerce/type/struct/r-f-q-product/index.ts` |

#### 📝 Определение типа

```typescript
type RFQProduct = {
    id: string;
    name: string;
    description?: string;
    quantity: number;
    unit?: string;
    unitPrice?: number;
    totalValue?: number;
    specifications?: string;
    deliveryDate?: string;
    notes?: string;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `RFQProduct` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/interaction/type/struct/interaction';
import ... from '$stylist';
import ... from '$stylist';
import ... from '$stylist/input/svelte/atom/input/field/input-field/index.svelte';
import ... from '$stylist/input/svelte/atom/input/field/text-area/index.svelte';
import ... from '$stylist/control/svelte/molecule/selectors/selector/index.svelte';
```

#### 💡 Рекомендация по миграции

Создать файл: `commerce/type/struct/r-f-q-product/index.ts`

```typescript
// Extracted from: lib/commerce/svelte/organism/rfqform/index.svelte:27
export type RFQProduct = {
    id: string;
    name: string;
    description?: string;
    quantity: number;
    unit?: string;
    unitPrice?: number;
    totalValue?: number;
    specifications?: string;
    deliveryDate?: string;
    notes?: string;
  };
```

---

### `RestProps`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/commerce/svelte/organism/rfqform/index.svelte` |
| **Строка** | 57 |
| **Целевой путь** | `commerce/type/struct/rest-props/index.ts` |

#### 📝 Определение типа

```typescript
type RestProps = Omit<InteractionHTMLAttributes<HTMLDivElement>, 'class'>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `RestProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `InteractionHTMLAttributes` → импортируется из `$stylist//...`
- `HTMLDivElement` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/interaction/type/struct/interaction';
import ... from '$stylist';
import ... from '$stylist';
import ... from '$stylist/input/svelte/atom/input/field/input-field/index.svelte';
import ... from '$stylist/input/svelte/atom/input/field/text-area/index.svelte';
import ... from '$stylist/control/svelte/molecule/selectors/selector/index.svelte';
```

#### 💡 Рекомендация по миграции

Создать файл: `commerce/type/struct/rest-props/index.ts`

```typescript
// Extracted from: lib/commerce/svelte/organism/rfqform/index.svelte:57
export type RestProps = Omit<InteractionHTMLAttributes<HTMLDivElement>, 'class'>;
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/commerce/svelte/organism/rfqform/index.svelte` |
| **Строка** | 59 |
| **Целевой путь** | `commerce/type/struct/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = RestProps & {
    title?: string;
    description?: string;
    onSubmit?: (rfq: RFQFormData) => void;
    onCancel?: () => void;
    class?: string;
    formClass?: string;
    sectionClass?: string;
    inputClass?: string;
    buttonClass?: string;
    showCompanyFields?: boolean;
    showShippingFields?: boolean;
    showUrgentOption?: boolean;
    showValidUntil?: boolean;
    showDeliveryTerms?: boolean;
    showPaymentTerms?: boolean;
    showAttachments?: boolean;
    defaultCurrency?: string;
    maxAttachments?: number;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `RestProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `RFQFormData` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/interaction/type/struct/interaction';
import ... from '$stylist';
import ... from '$stylist';
import ... from '$stylist/input/svelte/atom/input/field/input-field/index.svelte';
import ... from '$stylist/input/svelte/atom/input/field/text-area/index.svelte';
import ... from '$stylist/control/svelte/molecule/selectors/selector/index.svelte';
```

#### 💡 Рекомендация по миграции

Создать файл: `commerce/type/struct/props/index.ts`

```typescript
// Extracted from: lib/commerce/svelte/organism/rfqform/index.svelte:59
export type Props = RestProps & {
    title?: string;
    description?: string;
    onSubmit?: (rfq: RFQFormData) => void;
    onCancel?: () => void;
    class?: string;
    formClass?: string;
    sectionClass?: string;
    inputClass?: string;
    buttonClass?: string;
    showCompanyFields?: boolean;
    showShippingFields?: boolean;
    showUrgentOption?: boolean;
    showValidUntil?: boolean;
    showDeliveryTerms?: boolean;
    showPaymentTerms?: boolean;
    showAttachments?: boolean;
    defaultCurrency?: string;
    maxAttachments?: number;
  };
```

---

---

## Домен: `communication` (15 типов)

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/communication/svelte/atom/chat/atoms/chat-status-indicator/index.svelte` |
| **Строка** | 7 |
| **Целевой путь** | `communication/type/struct/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = ChatStatusIndicatorProps & InteractionHTMLAttributes<HTMLSpanElement>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `ChatStatusIndicatorProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `InteractionHTMLAttributes` → импортируется из `$stylist//...`
- `HTMLSpanElement` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/communication/function/state/chat-status-indicator';
import ... from '$stylist/communication/interface/component/chat-status-indicator/other';
import ... from '$stylist/interaction/type/struct/interaction';
```

#### 💡 Рекомендация по миграции

Создать файл: `communication/type/struct/props/index.ts`

```typescript
// Extracted from: lib/communication/svelte/atom/chat/atoms/chat-status-indicator/index.svelte:7
export type Props = ChatStatusIndicatorProps & InteractionHTMLAttributes<HTMLSpanElement>;
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/communication/svelte/atom/chat/atoms/message-timestamp/index.svelte` |
| **Строка** | 7 |
| **Целевой путь** | `communication/type/struct/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = MessageTimestampProps & InteractionHTMLAttributes<HTMLTimeElement>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `MessageTimestampProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `InteractionHTMLAttributes` → импортируется из `$stylist//...`
- `HTMLTimeElement` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/communication/function/state/message-timestamp';
import ... from '$stylist/communication/interface/component/message-timestamp/other';
import ... from '$stylist/interaction/type/struct/interaction';
```

#### 💡 Рекомендация по миграции

Создать файл: `communication/type/struct/props/index.ts`

```typescript
// Extracted from: lib/communication/svelte/atom/chat/atoms/message-timestamp/index.svelte:7
export type Props = MessageTimestampProps & InteractionHTMLAttributes<HTMLTimeElement>;
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/communication/svelte/atom/chat/chat-preview/index.svelte` |
| **Строка** | 11 |
| **Целевой путь** | `communication/type/struct/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = ChatPreviewProps & InteractionHTMLAttributes<HTMLDivElement>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `ChatPreviewProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `InteractionHTMLAttributes` → импортируется из `$stylist//...`
- `HTMLDivElement` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/interaction/type/struct/interaction';
import ... from '$stylist';
import ... from '$stylist/communication/function/state/chat-preview';
import ... from '$stylist/communication/type/struct/chat-preview';
```

#### 💡 Рекомендация по миграции

Создать файл: `communication/type/struct/props/index.ts`

```typescript
// Extracted from: lib/communication/svelte/atom/chat/chat-preview/index.svelte:11
export type Props = ChatPreviewProps & InteractionHTMLAttributes<HTMLDivElement>;
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/communication/svelte/atom/input/message-input/index.svelte` |
| **Строка** | 8 |
| **Целевой путь** | `communication/type/struct/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = MessageInputProps & InteractionHTMLAttributes<HTMLDivElement>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `MessageInputProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `InteractionHTMLAttributes` → импортируется из `$stylist//...`
- `HTMLDivElement` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/interaction/type/struct/interaction';
import ... from '$stylist';
import ... from '$stylist/communication/interface/component/chat/other';
import ... from '$stylist/communication/function/state/message-input';
```

#### 💡 Рекомендация по миграции

Создать файл: `communication/type/struct/props/index.ts`

```typescript
// Extracted from: lib/communication/svelte/atom/input/message-input/index.svelte:8
export type Props = MessageInputProps & InteractionHTMLAttributes<HTMLDivElement>;
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/communication/svelte/molecule/chat/chat-item/index.svelte` |
| **Строка** | 9 |
| **Целевой путь** | `communication/type/struct/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = {
    chat: Chat;
    currentUser: User;
    isActive?: boolean;
  } & InteractionHTMLAttributes<HTMLDivElement>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Chat` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `User` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `InteractionHTMLAttributes` → импортируется из `$stylist//...`
- `HTMLDivElement` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/communication/interface/component/chat/other';
import ... from '$stylist';
import ... from '$stylist/communication/svelte/atom/chat/atoms/message-timestamp';
import ... from 'svelte';
import ... from '$stylist/interaction/type/struct/interaction';
```

#### 💡 Рекомендация по миграции

Создать файл: `communication/type/struct/props/index.ts`

```typescript
// Extracted from: lib/communication/svelte/molecule/chat/chat-item/index.svelte:9
export type Props = {
    chat: Chat;
    currentUser: User;
    isActive?: boolean;
  } & InteractionHTMLAttributes<HTMLDivElement>;
```

---

### `MessageStatus`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/communication/svelte/molecule/chat/chat-message/index.svelte` |
| **Строка** | 10 |
| **Целевой путь** | `communication/type/enum/message-status/index.ts` |

#### 📝 Определение типа

```typescript
type MessageStatus = 'sent' | 'delivered' | 'read';
```

#### 🔗 Зависимости

**Используемые типы:**

- `MessageStatus` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/interaction/type/struct/interaction';
import ... from 'svelte';
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `communication/type/enum/message-status/index.ts`

```typescript
// Extracted from: lib/communication/svelte/molecule/chat/chat-message/index.svelte:10
export type MessageStatus = 'sent' | 'delivered' | 'read';
```

---

### `RestProps`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/communication/svelte/molecule/chat/chat-message/index.svelte` |
| **Строка** | 12 |
| **Целевой путь** | `communication/type/struct/rest-props/index.ts` |

#### 📝 Определение типа

```typescript
type RestProps = Omit<InteractionHTMLAttributes<HTMLDivElement>, 'class'>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `RestProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `InteractionHTMLAttributes` → импортируется из `$stylist//...`
- `HTMLDivElement` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/interaction/type/struct/interaction';
import ... from 'svelte';
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `communication/type/struct/rest-props/index.ts`

```typescript
// Extracted from: lib/communication/svelte/molecule/chat/chat-message/index.svelte:12
export type RestProps = Omit<InteractionHTMLAttributes<HTMLDivElement>, 'class'>;
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/communication/svelte/molecule/chat/chat-message/index.svelte` |
| **Строка** | 14 |
| **Целевой путь** | `communication/type/enum/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = RestProps & {
    text?: string;
    sender?: string;
    senderAvatar?: string;
    timestamp?: string;
    status?: MessageStatus;
    isOwn?: boolean;
    children?: Snippet;
    class?: string;
    contentClass?: string;
    headerClass?: string;
    footerClass?: string;
    variant?: 'default' | 'primary' | 'secondary';
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `RestProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `MessageStatus` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Snippet` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/interaction/type/struct/interaction';
import ... from 'svelte';
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `communication/type/enum/props/index.ts`

```typescript
// Extracted from: lib/communication/svelte/molecule/chat/chat-message/index.svelte:14
export type Props = RestProps & {
    text?: string;
    sender?: string;
    senderAvatar?: string;
    timestamp?: string;
    status?: MessageStatus;
    isOwn?: boolean;
    children?: Snippet;
    class?: string;
    contentClass?: string;
    headerClass?: string;
    footerClass?: string;
    variant?: 'default' | 'primary' | 'secondary';
  };
```

---

### `Message`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/communication/svelte/molecule/chat/chat-room/index.svelte` |
| **Строка** | 8 |
| **Целевой путь** | `communication/type/enum/message/index.ts` |

#### 📝 Определение типа

```typescript
export type Message = {
    id: string;
    text: string;
    sender: string;
    senderAvatar?: string;
    timestamp: string;
    status?: 'sent' | 'delivered' | 'read';
    isOwn: boolean;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `Message` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/interaction/type/struct/interaction';
import ... from 'svelte';
import ... from '../chat-message/index.svelte';
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `communication/type/enum/message/index.ts`

```typescript
// Extracted from: lib/communication/svelte/molecule/chat/chat-room/index.svelte:8
export type Message = {
    id: string;
    text: string;
    sender: string;
    senderAvatar?: string;
    timestamp: string;
    status?: 'sent' | 'delivered' | 'read';
    isOwn: boolean;
  };
```

---

### `RestProps`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/communication/svelte/molecule/chat/chat-room/index.svelte` |
| **Строка** | 18 |
| **Целевой путь** | `communication/type/struct/rest-props/index.ts` |

#### 📝 Определение типа

```typescript
type RestProps = Omit<InteractionHTMLAttributes<HTMLDivElement>, 'class'>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `RestProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `InteractionHTMLAttributes` → импортируется из `$stylist//...`
- `HTMLDivElement` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/interaction/type/struct/interaction';
import ... from 'svelte';
import ... from '../chat-message/index.svelte';
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `communication/type/struct/rest-props/index.ts`

```typescript
// Extracted from: lib/communication/svelte/molecule/chat/chat-room/index.svelte:18
export type RestProps = Omit<InteractionHTMLAttributes<HTMLDivElement>, 'class'>;
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/communication/svelte/molecule/chat/chat-room/index.svelte` |
| **Строка** | 20 |
| **Целевой путь** | `communication/type/enum/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = RestProps & {
    messages: Message[];
    currentUser: {
      id: string;
      name: string;
      avatar?: string;
    };
    participants: {
      id: string;
      name: string;
      avatar?: string;
    }[];
    title?: string;
    subtitle?: string;
    class?: string;
    messagesClass?: string;
    headerClass?: string;
    footerClass?: string;
    onMessageSend?: (text: string) => void;
    loading?: boolean;
    variant?: 'default' | 'compact' | 'spacious';
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `RestProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Message` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/interaction/type/struct/interaction';
import ... from 'svelte';
import ... from '../chat-message/index.svelte';
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `communication/type/enum/props/index.ts`

```typescript
// Extracted from: lib/communication/svelte/molecule/chat/chat-room/index.svelte:20
export type Props = RestProps & {
    messages: Message[];
    currentUser: {
      id: string;
      name: string;
      avatar?: string;
    };
    participants: {
      id: string;
      name: string;
      avatar?: string;
    }[];
    title?: string;
    subtitle?: string;
    class?: string;
    messagesClass?: string;
    headerClass?: string;
    footerClass?: string;
    onMessageSend?: (text: string) => void;
    loading?: boolean;
    variant?: 'default' | 'compact' | 'spacious';
  };
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/communication/svelte/organism/ai/auth-guard/index.svelte` |
| **Строка** | 9 |
| **Целевой путь** | `communication/type/struct/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = AuthGuardRecipe & {
    fallback?: Snippet;
    unauthorizedFallback?: Snippet;
    children?: Snippet;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `AuthGuardRecipe` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Snippet` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Snippet` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Snippet` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from 'svelte';
import ... from '$stylist/information/interface/recipe/auth-guard';
import ... from '$stylist/communication/function/script/resolve-auth-guard-state';
import ... from '$stylist/communication/class/style-manager/auth-guard';
import ... from '$stylist/layout/function/script/merge-class-names';
```

#### 💡 Рекомендация по миграции

Создать файл: `communication/type/struct/props/index.ts`

```typescript
// Extracted from: lib/communication/svelte/organism/ai/auth-guard/index.svelte:9
export type Props = AuthGuardRecipe & {
    fallback?: Snippet;
    unauthorizedFallback?: Snippet;
    children?: Snippet;
  };
```

---

### `CollaborativeUser`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/communication/svelte/organism/collaborate/collaborative-editor/index.svelte` |
| **Строка** | 19 |
| **Целевой путь** | `communication/type/struct/collaborative-user/index.ts` |

#### 📝 Определение типа

```typescript
type CollaborativeUser = {
    id: string;
    name: string;
    color: string;
    avatar?: string;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `CollaborativeUser` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/interaction/type/struct/interaction';
import ... from 'svelte';
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `communication/type/struct/collaborative-user/index.ts`

```typescript
// Extracted from: lib/communication/svelte/organism/collaborate/collaborative-editor/index.svelte:19
export type CollaborativeUser = {
    id: string;
    name: string;
    color: string;
    avatar?: string;
  };
```

---

### `EditEvent`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/communication/svelte/organism/collaborate/collaborative-editor/index.svelte` |
| **Строка** | 26 |
| **Целевой путь** | `communication/type/struct/edit-event/index.ts` |

#### 📝 Определение типа

```typescript
type EditEvent = {
    userId: string;
    position: number;
    text: string;
    timestamp: Date;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `EditEvent` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Date` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/interaction/type/struct/interaction';
import ... from 'svelte';
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `communication/type/struct/edit-event/index.ts`

```typescript
// Extracted from: lib/communication/svelte/organism/collaborate/collaborative-editor/index.svelte:26
export type EditEvent = {
    userId: string;
    position: number;
    text: string;
    timestamp: Date;
  };
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/communication/svelte/organism/collaborate/collaborative-editor/index.svelte` |
| **Строка** | 33 |
| **Целевой путь** | `communication/type/struct/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = {
    content?: string;
    users?: CollaborativeUser[];
    currentUser?: CollaborativeUser;
    onContentChange?: (content: string) => void;
    showToolbar?: boolean;
    showUserList?: boolean;
    class?: string;
    toolbarClass?: string;
    editorClass?: string;
    userListClass?: string;
  } & InteractionHTMLAttributes<HTMLDivElement>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `CollaborativeUser` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `CollaborativeUser` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `InteractionHTMLAttributes` → импортируется из `$stylist//...`
- `HTMLDivElement` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/interaction/type/struct/interaction';
import ... from 'svelte';
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `communication/type/struct/props/index.ts`

```typescript
// Extracted from: lib/communication/svelte/organism/collaborate/collaborative-editor/index.svelte:33
export type Props = {
    content?: string;
    users?: CollaborativeUser[];
    currentUser?: CollaborativeUser;
    onContentChange?: (content: string) => void;
    showToolbar?: boolean;
    showUserList?: boolean;
    class?: string;
    toolbarClass?: string;
    editorClass?: string;
    userListClass?: string;
  } & InteractionHTMLAttributes<HTMLDivElement>;
```

---

---

## Домен: `control` (77 типов)

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/control/svelte/atom/accordion/accordion-header/index.svelte` |
| **Строка** | 9 |
| **Целевой путь** | `control/type/struct/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = AccordionHeaderProps & HTMLButtonAttributes;
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `AccordionHeaderProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `HTMLButtonAttributes` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from 'svelte';
import ... from 'svelte/elements';
import ... from '$stylist';
import ... from '$stylist/control/interface/component/accordion/other';
import ... from '$stylist/control/function/state/accordion-header';
```

#### 💡 Рекомендация по миграции

Создать файл: `control/type/struct/props/index.ts`

```typescript
// Extracted from: lib/control/svelte/atom/accordion/accordion-header/index.svelte:9
export type Props = AccordionHeaderProps & HTMLButtonAttributes;
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/control/svelte/atom/accordion/accordion-header-double/index.svelte` |
| **Строка** | 10 |
| **Целевой путь** | `control/type/struct/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = AccordionHeaderDoubleProps & HTMLButtonAttributes;
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `AccordionHeaderDoubleProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `HTMLButtonAttributes` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from 'svelte/elements';
import ... from '$stylist';
import ... from '$stylist/control/interface/component/accordion/other';
import ... from '$stylist/control/function/state/accordion-header-double';
```

#### 💡 Рекомендация по миграции

Создать файл: `control/type/struct/props/index.ts`

```typescript
// Extracted from: lib/control/svelte/atom/accordion/accordion-header-double/index.svelte:10
export type Props = AccordionHeaderDoubleProps & HTMLButtonAttributes;
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/control/svelte/atom/accordion/accordion-item/index.svelte` |
| **Строка** | 8 |
| **Целевой путь** | `control/type/struct/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = AccordionItemProps & InteractionHTMLAttributes<HTMLDivElement>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `AccordionItemProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `InteractionHTMLAttributes` → импортируется из `$stylist//...`
- `HTMLDivElement` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from 'svelte';
import ... from '$stylist/interaction/type/struct/interaction';
import ... from '$stylist/control/interface/component/accordion/other';
import ... from '$stylist/control/function/state/accordion-item';
```

#### 💡 Рекомендация по миграции

Создать файл: `control/type/struct/props/index.ts`

```typescript
// Extracted from: lib/control/svelte/atom/accordion/accordion-item/index.svelte:8
export type Props = AccordionItemProps & InteractionHTMLAttributes<HTMLDivElement>;
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/control/svelte/atom/accordion/accordion-panel/index.svelte` |
| **Строка** | 8 |
| **Целевой путь** | `control/type/struct/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = AccordionPanelProps & InteractionHTMLAttributes<HTMLDivElement>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `AccordionPanelProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `InteractionHTMLAttributes` → импортируется из `$stylist//...`
- `HTMLDivElement` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from 'svelte';
import ... from '$stylist/interaction/type/struct/interaction';
import ... from '$stylist/control/interface/component/accordion/other';
import ... from '$stylist/control/function/state/accordion-panel';
```

#### 💡 Рекомендация по миграции

Создать файл: `control/type/struct/props/index.ts`

```typescript
// Extracted from: lib/control/svelte/atom/accordion/accordion-panel/index.svelte:8
export type Props = AccordionPanelProps & InteractionHTMLAttributes<HTMLDivElement>;
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/control/svelte/atom/action-segmented-control/index.svelte` |
| **Строка** | 7 |
| **Целевой путь** | `control/type/struct/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = ActionSegmentedControlProps & InteractionHTMLAttributes<HTMLDivElement>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `ActionSegmentedControlProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `InteractionHTMLAttributes` → импортируется из `$stylist//...`
- `HTMLDivElement` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/interaction/type/struct/interaction';
import ... from '$stylist/control/interface/component/toggles';
import ... from '$stylist/control/function/state/action-segmented-control';
```

#### 💡 Рекомендация по миграции

Создать файл: `control/type/struct/props/index.ts`

```typescript
// Extracted from: lib/control/svelte/atom/action-segmented-control/index.svelte:7
export type Props = ActionSegmentedControlProps & InteractionHTMLAttributes<HTMLDivElement>;
```

---

### `RestProps`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/control/svelte/atom/buttons/follow-button/index.svelte` |
| **Строка** | 12 |
| **Целевой путь** | `control/type/struct/rest-props/index.ts` |

#### 📝 Определение типа

```typescript
type RestProps = Omit<InteractionHTMLAttributes<HTMLButtonElement>, 'class'>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `RestProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `InteractionHTMLAttributes` → импортируется из `$stylist//...`
- `HTMLButtonElement` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/interaction/type/struct/interaction';
import ... from '$stylist';
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `control/type/struct/rest-props/index.ts`

```typescript
// Extracted from: lib/control/svelte/atom/buttons/follow-button/index.svelte:12
export type RestProps = Omit<InteractionHTMLAttributes<HTMLButtonElement>, 'class'>;
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/control/svelte/atom/buttons/follow-button/index.svelte` |
| **Строка** | 14 |
| **Целевой путь** | `control/type/enum/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = RestProps & {
    isFollowing?: boolean;
    showText?: boolean;
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    class?: string;
    followingText?: string;
    unfollowText?: string;
    onFollow?: () => void;
    onUnfollow?: () => void;
    disabled?: boolean;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `RestProps` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/interaction/type/struct/interaction';
import ... from '$stylist';
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `control/type/enum/props/index.ts`

```typescript
// Extracted from: lib/control/svelte/atom/buttons/follow-button/index.svelte:14
export type Props = RestProps & {
    isFollowing?: boolean;
    showText?: boolean;
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    class?: string;
    followingText?: string;
    unfollowText?: string;
    onFollow?: () => void;
    onUnfollow?: () => void;
    disabled?: boolean;
  };
```

---

### `ButtonAttributes`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/control/svelte/atom/buttons/page-button/index.svelte` |
| **Строка** | 11 |
| **Целевой путь** | `control/type/enum/button-attributes/index.ts` |

#### 📝 Определение типа

```typescript
type ButtonAttributes = Omit<HTMLButtonAttributes, 'children' | 'class' | 'disabled'>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `ButtonAttributes` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `HTMLButtonAttributes` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist';
import ... from 'svelte/elements';
import ... from '$stylist/control/interface/component/button/other';
import ... from '$stylist/interaction/class/style-manager/interaction';
import ... from '$stylist/control/function/state/button';
import ... from '$stylist/interaction/preset/base';
import ... from '$stylist/layout/const/enum/size';
```

#### 💡 Рекомендация по миграции

Создать файл: `control/type/enum/button-attributes/index.ts`

```typescript
// Extracted from: lib/control/svelte/atom/buttons/page-button/index.svelte:11
export type ButtonAttributes = Omit<HTMLButtonAttributes, 'children' | 'class' | 'disabled'>;
```

---

### `IPageButtonProps`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/control/svelte/atom/buttons/page-button/index.svelte` |
| **Строка** | 13 |
| **Целевой путь** | `control/type/struct/i-page-button-props/index.ts` |

#### 📝 Определение типа

```typescript
export type IPageButtonProps = PageButtonProps &
		ButtonAttributes & {
			page: number;
			isActive?: boolean;
		};
```

#### 🔗 Зависимости

**Используемые типы:**

- `IPageButtonProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `PageButtonProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `ButtonAttributes` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist';
import ... from 'svelte/elements';
import ... from '$stylist/control/interface/component/button/other';
import ... from '$stylist/interaction/class/style-manager/interaction';
import ... from '$stylist/control/function/state/button';
import ... from '$stylist/interaction/preset/base';
import ... from '$stylist/layout/const/enum/size';
```

#### 💡 Рекомендация по миграции

Создать файл: `control/type/struct/i-page-button-props/index.ts`

```typescript
// Extracted from: lib/control/svelte/atom/buttons/page-button/index.svelte:13
export type IPageButtonProps = PageButtonProps &
		ButtonAttributes & {
			page: number;
			isActive?: boolean;
		};
```

---

### `ButtonAttributes`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/control/svelte/atom/buttons/split-button/index.svelte` |
| **Строка** | 13 |
| **Целевой путь** | `control/type/enum/button-attributes/index.ts` |

#### 📝 Определение типа

```typescript
type ButtonAttributes = Omit<HTMLButtonAttributes, 'children' | 'class' | 'disabled'>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `ButtonAttributes` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `HTMLButtonAttributes` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist';
import ... from 'svelte/elements';
import ... from '$stylist/control/interface/component/button/other';
import ... from '$stylist/interaction/class/style-manager/interaction';
import ... from '$stylist/control/function/state/button';
import ... from '$stylist/interaction/preset/base';
import ... from '$stylist/layout/const/enum/size';
```

#### 💡 Рекомендация по миграции

Создать файл: `control/type/enum/button-attributes/index.ts`

```typescript
// Extracted from: lib/control/svelte/atom/buttons/split-button/index.svelte:13
export type ButtonAttributes = Omit<HTMLButtonAttributes, 'children' | 'class' | 'disabled'>;
```

---

### `ISplitButtonElementProps`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/control/svelte/atom/buttons/split-button/index.svelte` |
| **Строка** | 21 |
| **Целевой путь** | `control/type/struct/i-split-button-element-props/index.ts` |

#### 📝 Определение типа

```typescript
export type ISplitButtonElementProps = ButtonElementProps &
		ButtonAttributes & {
			items: ISplitButtonItem[];
			primaryAction: () => void;
			primaryLabel?: string;
		};
```

#### 🔗 Зависимости

**Используемые типы:**

- `ISplitButtonElementProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `ButtonElementProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `ButtonAttributes` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `ISplitButtonItem` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist';
import ... from 'svelte/elements';
import ... from '$stylist/control/interface/component/button/other';
import ... from '$stylist/interaction/class/style-manager/interaction';
import ... from '$stylist/control/function/state/button';
import ... from '$stylist/interaction/preset/base';
import ... from '$stylist/layout/const/enum/size';
```

#### 💡 Рекомендация по миграции

Создать файл: `control/type/struct/i-split-button-element-props/index.ts`

```typescript
// Extracted from: lib/control/svelte/atom/buttons/split-button/index.svelte:21
export type ISplitButtonElementProps = ButtonElementProps &
		ButtonAttributes & {
			items: ISplitButtonItem[];
			primaryAction: () => void;
			primaryLabel?: string;
		};
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/control/svelte/atom/chip/index.svelte` |
| **Строка** | 10 |
| **Целевой путь** | `control/type/struct/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = ChipRecipe & {
		text?: string;
		icon?: Snippet;
		content?: Snippet;
	};
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `ChipRecipe` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Snippet` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Snippet` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist';
import ... from 'svelte';
import ... from '$stylist/typography/interface/recipe/chip';
import ... from '$stylist/control/function/state/chip';
```

#### 💡 Рекомендация по миграции

Создать файл: `control/type/struct/props/index.ts`

```typescript
// Extracted from: lib/control/svelte/atom/chip/index.svelte:10
export type Props = ChipRecipe & {
		text?: string;
		icon?: Snippet;
		content?: Snippet;
	};
```

---

### `CubeRotation`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/control/svelte/atom/cube-control/index.svelte` |
| **Строка** | 48 |
| **Целевой путь** | `control/type/struct/cube-rotation/index.ts` |

#### 📝 Определение типа

```typescript
export type CubeRotation = {
    x: number;
    y: number;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `CubeRotation` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist';
import ... from '$stylist/interaction/type/struct/interaction';
```

#### 💡 Рекомендация по миграции

Создать файл: `control/type/struct/cube-rotation/index.ts`

```typescript
// Extracted from: lib/control/svelte/atom/cube-control/index.svelte:48
export type CubeRotation = {
    x: number;
    y: number;
  };
```

---

### `CubeSelectionState`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/control/svelte/atom/cube-control/index.svelte` |
| **Строка** | 53 |
| **Целевой путь** | `control/type/enum/cube-selection-state/index.ts` |

#### 📝 Определение типа

```typescript
export type CubeSelectionState = {
    selectedIconId: string | null;
    selectedTitleFace: number | null;
    selectedCellByFace: number[];
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `CubeSelectionState` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist';
import ... from '$stylist/interaction/type/struct/interaction';
```

#### 💡 Рекомендация по миграции

Создать файл: `control/type/enum/cube-selection-state/index.ts`

```typescript
// Extracted from: lib/control/svelte/atom/cube-control/index.svelte:53
export type CubeSelectionState = {
    selectedIconId: string | null;
    selectedTitleFace: number | null;
    selectedCellByFace: number[];
  };
```

---

### `CubeDebugLogEntry`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/control/svelte/atom/cube-control/index.svelte` |
| **Строка** | 59 |
| **Целевой путь** | `control/type/enum/cube-debug-log-entry/index.ts` |

#### 📝 Определение типа

```typescript
export type CubeDebugLogEntry = {
    ts: number;
    source: 'stage' | 'icon' | 'title' | 'cell';
    action: string;
    id?: string;
    faceIndex?: number;
    cellIndex?: number;
    pointerType?: string;
    x?: number;
    y?: number;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `CubeDebugLogEntry` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist';
import ... from '$stylist/interaction/type/struct/interaction';
```

#### 💡 Рекомендация по миграции

Создать файл: `control/type/enum/cube-debug-log-entry/index.ts`

```typescript
// Extracted from: lib/control/svelte/atom/cube-control/index.svelte:59
export type CubeDebugLogEntry = {
    ts: number;
    source: 'stage' | 'icon' | 'title' | 'cell';
    action: string;
    id?: string;
    faceIndex?: number;
    cellIndex?: number;
    pointerType?: string;
    x?: number;
    y?: number;
  };
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/control/svelte/atom/cube-control/index.svelte` |
| **Строка** | 71 |
| **Целевой путь** | `control/type/struct/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = {
    size?: number;
    perspective?: number;
    autoRotate?: boolean;
    rotationDuration?: number;
    interactive?: boolean;
    inertiaEnabled?: boolean;
    inertiaFriction?: number;
    inertiaSensitivity?: number;
    faceLabels?: boolean;
    class?: string;
    onRotate?: (rotation: CubeRotation) => void;
    onSelectionChange?: (selection: CubeSelectionState) => void;
    onDebugLog?: (entry: CubeDebugLogEntry) => void;
  } & InteractionHTMLAttributes<HTMLDivElement>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `CubeRotation` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `CubeSelectionState` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `CubeDebugLogEntry` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `InteractionHTMLAttributes` → импортируется из `$stylist//...`
- `HTMLDivElement` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist';
import ... from '$stylist/interaction/type/struct/interaction';
```

#### 💡 Рекомендация по миграции

Создать файл: `control/type/struct/props/index.ts`

```typescript
// Extracted from: lib/control/svelte/atom/cube-control/index.svelte:71
export type Props = {
    size?: number;
    perspective?: number;
    autoRotate?: boolean;
    rotationDuration?: number;
    interactive?: boolean;
    inertiaEnabled?: boolean;
    inertiaFriction?: number;
    inertiaSensitivity?: number;
    faceLabels?: boolean;
    class?: string;
    onRotate?: (rotation: CubeRotation) => void;
    onSelectionChange?: (selection: CubeSelectionState) => void;
    onDebugLog?: (entry: CubeDebugLogEntry) => void;
  } & InteractionHTMLAttributes<HTMLDivElement>;
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/control/svelte/atom/menus/burger-menu/index.svelte` |
| **Строка** | 7 |
| **Целевой путь** | `control/type/struct/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = BurgerMenuProps & HTMLButtonAttributes;
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `BurgerMenuProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `HTMLButtonAttributes` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/control/function/state/burger-menu';
import ... from '$stylist/control/interface/component/burger-menu/other';
import ... from 'svelte/elements';
```

#### 💡 Рекомендация по миграции

Создать файл: `control/type/struct/props/index.ts`

```typescript
// Extracted from: lib/control/svelte/atom/menus/burger-menu/index.svelte:7
export type Props = BurgerMenuProps & HTMLButtonAttributes;
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/control/svelte/atom/menus/menu-item/index.svelte` |
| **Строка** | 8 |
| **Целевой путь** | `control/type/struct/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = MenuItemProps & InteractionHTMLAttributes<HTMLElement>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `MenuItemProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `InteractionHTMLAttributes` → импортируется из `$stylist//...`
- `HTMLElement` → импортируется из `svelte/elements`

**Все импорты компонента:**

```typescript
import ... from '$stylist';
import ... from '$stylist/control/function/state/menu-item';
import ... from '$stylist/control/interface/component/menu-item/other';
import ... from '$stylist/interaction/type/struct/interaction';
```

#### 💡 Рекомендация по миграции

Создать файл: `control/type/struct/props/index.ts`

```typescript
// Extracted from: lib/control/svelte/atom/menus/menu-item/index.svelte:8
export type Props = MenuItemProps & InteractionHTMLAttributes<HTMLElement>;
```

---

### `SliderTickProps`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/control/svelte/atom/sliders/tick/index.svelte` |
| **Строка** | 6 |
| **Целевой путь** | `control/type/struct/slider-tick-props/index.ts` |

#### 📝 Определение типа

```typescript
type SliderTickProps = {
		value?: number;
		position?: number;
		active?: boolean;
		label?: string;
		class?: string;
	};
```

#### 🔗 Зависимости

**Используемые типы:**

- `SliderTickProps` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/interaction/type/struct/interaction';
import ... from '$stylist/control/function/state/tick';
```

#### 💡 Рекомендация по миграции

Создать файл: `control/type/struct/slider-tick-props/index.ts`

```typescript
// Extracted from: lib/control/svelte/atom/sliders/tick/index.svelte:6
export type SliderTickProps = {
		value?: number;
		position?: number;
		active?: boolean;
		label?: string;
		class?: string;
	};
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/control/svelte/atom/sliders/tick/index.svelte` |
| **Строка** | 14 |
| **Целевой путь** | `control/type/struct/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = SliderTickProps & InteractionHTMLAttributes<HTMLDivElement>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `SliderTickProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `InteractionHTMLAttributes` → импортируется из `$stylist//...`
- `HTMLDivElement` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/interaction/type/struct/interaction';
import ... from '$stylist/control/function/state/tick';
```

#### 💡 Рекомендация по миграции

Создать файл: `control/type/struct/props/index.ts`

```typescript
// Extracted from: lib/control/svelte/atom/sliders/tick/index.svelte:14
export type Props = SliderTickProps & InteractionHTMLAttributes<HTMLDivElement>;
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/control/svelte/atom/tables/sortable-table-header/index.svelte` |
| **Строка** | 12 |
| **Целевой путь** | `control/type/struct/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = SortableTableHeaderProps & HTMLAttributes<HTMLTableHeaderCellElement>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `SortableTableHeaderProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `HTMLAttributes` → импортируется из `svelte/elements`
- `HTMLTableHeaderCellElement` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist';
import ... from '$stylist/control/function/state/sortable-table-header';
import ... from '$stylist/control/interface/component/sortable-table-header/other';
import ... from 'svelte/elements';
```

#### 💡 Рекомендация по миграции

Создать файл: `control/type/struct/props/index.ts`

```typescript
// Extracted from: lib/control/svelte/atom/tables/sortable-table-header/index.svelte:12
export type Props = SortableTableHeaderProps & HTMLAttributes<HTMLTableHeaderCellElement>;
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/control/svelte/atom/tag/index.svelte` |
| **Строка** | 12 |
| **Целевой путь** | `control/type/struct/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = TagRecipe &
		InteractionHTMLAttributes<HTMLSpanElement> & {
			text?: string;
			icon?: Snippet;
			content?: Snippet;
		};
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `TagRecipe` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `InteractionHTMLAttributes` → импортируется из `$stylist//...`
- `HTMLSpanElement` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Snippet` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Snippet` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/interaction/type/struct/interaction';
import ... from '$stylist';
import ... from 'svelte';
import ... from '$stylist/typography/interface/recipe/tag';
import ... from '$stylist/control/function/state/tag';
```

#### 💡 Рекомендация по миграции

Создать файл: `control/type/struct/props/index.ts`

```typescript
// Extracted from: lib/control/svelte/atom/tag/index.svelte:12
export type Props = TagRecipe &
		InteractionHTMLAttributes<HTMLSpanElement> & {
			text?: string;
			icon?: Snippet;
			content?: Snippet;
		};
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/control/svelte/atom/toggles/advanced-toggle/index.svelte` |
| **Строка** | 7 |
| **Целевой путь** | `control/type/struct/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = AdvancedToggleProps & InteractionHTMLAttributes<HTMLDivElement>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `AdvancedToggleProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `InteractionHTMLAttributes` → импортируется из `$stylist//...`
- `HTMLDivElement` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/interaction/type/struct/interaction';
import ... from '$stylist/control/interface/component/toggles';
import ... from '$stylist/control/function/state/advanced-toggle';
```

#### 💡 Рекомендация по миграции

Создать файл: `control/type/struct/props/index.ts`

```typescript
// Extracted from: lib/control/svelte/atom/toggles/advanced-toggle/index.svelte:7
export type Props = AdvancedToggleProps & InteractionHTMLAttributes<HTMLDivElement>;
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/control/svelte/atom/toggles/switch/index.svelte` |
| **Строка** | 7 |
| **Целевой путь** | `control/type/enum/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = {
		/** Уникальный ID для switch */
		id?: string;
		/** Лейбл переключателя */
		label?: string;
		/** Описание переключателя */
		description?: string;
		/** Размер переключателя */
		size?: TokenSize;
		/** Отключен ли переключатель */
		disabled?: boolean;
		/** Состояние checked (поддерживает two-way binding) */
		checked?: boolean;
		/** Обязательное ли поле */
		required?: boolean;
		/** Дополнительные CSS классы */
		class?: string;
		/** Aria label */
		ariaLabel?: string;
	} & Omit<HTMLInputAttributes, 'size' | 'checked'>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `ID` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `TokenSize` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `CSS` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Aria` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `HTMLInputAttributes` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from 'svelte/elements';
import ... from '$stylist/control/class/style-manager/toggles';
import ... from '$stylist/layout/type/enum/size';
```

#### 💡 Рекомендация по миграции

Создать файл: `control/type/enum/props/index.ts`

```typescript
// Extracted from: lib/control/svelte/atom/toggles/switch/index.svelte:7
export type Props = {
		/** Уникальный ID для switch */
		id?: string;
		/** Лейбл переключателя */
		label?: string;
		/** Описание переключателя */
		description?: string;
		/** Размер переключателя */
		size?: TokenSize;
		/** Отключен ли переключатель */
		disabled?: boolean;
		/** Состояние checked (поддерживает two-way binding) */
		checked?: boolean;
		/** Обязательное ли поле */
		required?: boolean;
		/** Дополнительные CSS классы */
		class?: string;
		/** Aria label */
		ariaLabel?: string;
	} & Omit<HTMLInputAttributes, 'size' | 'checked'>;
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/control/svelte/atom/toggles/toggle/index.svelte` |
| **Строка** | 7 |
| **Целевой путь** | `control/type/enum/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = {
		/** ������ ������������� */
		size?: TokenSize;
		/** �������� �� ������������� */
		disabled?: boolean;
		/** ��������� checked (������������ two-way binding) */
		checked?: boolean;
		/** �������������� CSS ������ */
		class?: string;
		/** Aria label */
		ariaLabel?: string;
		/** HTML name attribute */
		name?: string;
	} & Omit<InteractionHTMLAttributes<HTMLInputElement>, 'size' | 'checked'>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `TokenSize` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `CSS` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Aria` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `HTML` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `InteractionHTMLAttributes` → импортируется из `$stylist//...`
- `HTMLInputElement` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/interaction/type/struct/interaction';
import ... from '$stylist/control/class/style-manager/toggles';
import ... from '$stylist/layout/type/enum/size';
```

#### 💡 Рекомендация по миграции

Создать файл: `control/type/enum/props/index.ts`

```typescript
// Extracted from: lib/control/svelte/atom/toggles/toggle/index.svelte:7
export type Props = {
		/** ������ ������������� */
		size?: TokenSize;
		/** �������� �� ������������� */
		disabled?: boolean;
		/** ��������� checked (������������ two-way binding) */
		checked?: boolean;
		/** �������������� CSS ������ */
		class?: string;
		/** Aria label */
		ariaLabel?: string;
		/** HTML name attribute */
		name?: string;
	} & Omit<InteractionHTMLAttributes<HTMLInputElement>, 'size' | 'checked'>;
```

---

### `ToggleGroupContext`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/control/svelte/atom/toggles/toggle-group-item/index.svelte` |
| **Строка** | 9 |
| **Целевой путь** | `control/type/enum/toggle-group-context/index.ts` |

#### 📝 Определение типа

```typescript
type ToggleGroupContext = {
		updateValue: (val: string) => void;
		value: string | string[] | null | undefined;
		disabled: boolean;
	};
```

#### 🔗 Зависимости

**Используемые типы:**

- `ToggleGroupContext` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from 'svelte';
import ... from '$stylist/control/interface/component/toggles';
import ... from '$stylist/layout/function/script/join-class-names';
```

#### 💡 Рекомендация по миграции

Создать файл: `control/type/enum/toggle-group-context/index.ts`

```typescript
// Extracted from: lib/control/svelte/atom/toggles/toggle-group-item/index.svelte:9
export type ToggleGroupContext = {
		updateValue: (val: string) => void;
		value: string | string[] | null | undefined;
		disabled: boolean;
	};
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/control/svelte/atom/toggles/toggle-with-description/index.svelte` |
| **Строка** | 5 |
| **Целевой путь** | `control/type/struct/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = {
    checked?: boolean;
    disabled?: boolean;
    label: string;
    description: string;
    class?: string;
    toggleClass?: string;
    labelClass?: string;
    descriptionClass?: string;
    onValueInput?: (checked: boolean) => void;
    onValueChange?: (checked: boolean) => void;
    onInput?: (checked: boolean) => void;
    onChange?: (checked: boolean) => void;
  } & InteractionHTMLAttributes<HTMLDivElement>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `InteractionHTMLAttributes` → импортируется из `$stylist//...`
- `HTMLDivElement` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/interaction/type/struct/interaction';
```

#### 💡 Рекомендация по миграции

Создать файл: `control/type/struct/props/index.ts`

```typescript
// Extracted from: lib/control/svelte/atom/toggles/toggle-with-description/index.svelte:5
export type Props = {
    checked?: boolean;
    disabled?: boolean;
    label: string;
    description: string;
    class?: string;
    toggleClass?: string;
    labelClass?: string;
    descriptionClass?: string;
    onValueInput?: (checked: boolean) => void;
    onValueChange?: (checked: boolean) => void;
    onInput?: (checked: boolean) => void;
    onChange?: (checked: boolean) => void;
  } & InteractionHTMLAttributes<HTMLDivElement>;
```

---

### `TokenArrayControlProps`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/control/svelte/atom/token-array-control/index.svelte` |
| **Строка** | 3 |
| **Целевой путь** | `control/type/struct/token-array-control-props/index.ts` |

#### 📝 Определение типа

```typescript
type TokenArrayControlProps = {
		title: string;
		tokens: readonly string[];
		value?: string;
		class?: string;
		dedupe?: boolean;
		onSelect?: (token: string) => void;
	};
```

#### 🔗 Зависимости

**Используемые типы:**

- `TokenArrayControlProps` → ⚠️ источник не найден (возможно, глобальный или локальный)

#### 💡 Рекомендация по миграции

Создать файл: `control/type/struct/token-array-control-props/index.ts`

```typescript
// Extracted from: lib/control/svelte/atom/token-array-control/index.svelte:3
export type TokenArrayControlProps = {
		title: string;
		tokens: readonly string[];
		value?: string;
		class?: string;
		dedupe?: boolean;
		onSelect?: (token: string) => void;
	};
```

---

### `TokenControlBaseProps`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/control/svelte/atom/token-control-base/index.svelte` |
| **Строка** | 6 |
| **Целевой путь** | `control/type/enum/token-control-base-props/index.ts` |

#### 📝 Определение типа

```typescript
type TokenControlBaseProps = {
		definition: TokenControlDefinition;
		layout?: 'stack' | 'inline';
		class?: string;
		children?: Snippet;
	};
```

#### 🔗 Зависимости

**Используемые типы:**

- `TokenControlBaseProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `TokenControlDefinition` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Snippet` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from 'svelte';
import ... from '$stylist/control/type/struct/token-control-definition';
```

#### 💡 Рекомендация по миграции

Создать файл: `control/type/enum/token-control-base-props/index.ts`

```typescript
// Extracted from: lib/control/svelte/atom/token-control-base/index.svelte:6
export type TokenControlBaseProps = {
		definition: TokenControlDefinition;
		layout?: 'stack' | 'inline';
		class?: string;
		children?: Snippet;
	};
```

---

### `TokenIconKind`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/control/svelte/atom/token-control-base/index.svelte` |
| **Строка** | 27 |
| **Целевой путь** | `control/type/enum/token-icon-kind/index.ts` |

#### 📝 Определение типа

```typescript
type TokenIconKind =
		| 'layout'
		| 'shape'
		| 'size'
		| 'SPACING'
		| 'radius'
		| 'SHADOW'
		| 'border'
		| 'TOKEN_OPACITY'
		| 'blur'
		| 'container'
		| 'grid'
		| 'aspect'
		| 'layers'
		| 'palette'
		| 'gradient'
		| 'TYPOGRAPHY'
		| 'variant'
		| 'state'
		| 'graph'
		| 'motion'
		| 'default';
```

#### 🔗 Зависимости

**Используемые типы:**

- `TokenIconKind` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `SPACING` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `SHADOW` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `TOKEN_OPACITY` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `TYPOGRAPHY` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from 'svelte';
import ... from '$stylist/control/type/struct/token-control-definition';
```

#### 💡 Рекомендация по миграции

Создать файл: `control/type/enum/token-icon-kind/index.ts`

```typescript
// Extracted from: lib/control/svelte/atom/token-control-base/index.svelte:27
export type TokenIconKind =
		| 'layout'
		| 'shape'
		| 'size'
		| 'SPACING'
		| 'radius'
		| 'SHADOW'
		| 'border'
		| 'TOKEN_OPACITY'
		| 'blur'
		| 'container'
		| 'grid'
		| 'aspect'
		| 'layers'
		| 'palette'
		| 'gradient'
		| 'TYPOGRAPHY'
		| 'variant'
		| 'state'
		| 'graph'
		| 'motion'
		| 'default';
```

---

### `TokenControlComposerProps`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/control/svelte/atom/token-control-composer/index.svelte` |
| **Строка** | 10 |
| **Целевой путь** | `control/type/struct/token-control-composer-props/index.ts` |

#### 📝 Определение типа

```typescript
type TokenControlComposerProps = {
		definition: TokenControlDefinition;
		value?: TokenValue;
		onChange?: (value: TokenValue) => void;
	};
```

#### 🔗 Зависимости

**Используемые типы:**

- `TokenControlComposerProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `TokenControlDefinition` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `TokenValue` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `TokenValue` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/control/svelte/atom/token-radio/index.svelte';
import ... from '$stylist/control/svelte/atom/token-range/index.svelte';
import ... from '$stylist/control/svelte/atom/token-select/index.svelte';
import ... from '$stylist/control/svelte/atom/token-text/index.svelte';
import ... from '$stylist/control/type/struct/token-control-definition';
import ... from '$stylist/control/type/struct/token-value';
```

#### 💡 Рекомендация по миграции

Создать файл: `control/type/struct/token-control-composer-props/index.ts`

```typescript
// Extracted from: lib/control/svelte/atom/token-control-composer/index.svelte:10
export type TokenControlComposerProps = {
		definition: TokenControlDefinition;
		value?: TokenValue;
		onChange?: (value: TokenValue) => void;
	};
```

---

### `TokenRadioControlProps`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/control/svelte/atom/token-radio/index.svelte` |
| **Строка** | 7 |
| **Целевой путь** | `control/type/struct/token-radio-control-props/index.ts` |

#### 📝 Определение типа

```typescript
type TokenRadioControlProps = {
		definition: TokenRadioControlDefinition;
		value?: TokenValue;
		onChange?: (value: TokenValue) => void;
	};
```

#### 🔗 Зависимости

**Используемые типы:**

- `TokenRadioControlProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `TokenRadioControlDefinition` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `TokenValue` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `TokenValue` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '../token-control-base/index.svelte';
import ... from '$stylist/control/type/struct/radio-control-definition';
import ... from '$stylist/control/type/struct/token-value';
```

#### 💡 Рекомендация по миграции

Создать файл: `control/type/struct/token-radio-control-props/index.ts`

```typescript
// Extracted from: lib/control/svelte/atom/token-radio/index.svelte:7
export type TokenRadioControlProps = {
		definition: TokenRadioControlDefinition;
		value?: TokenValue;
		onChange?: (value: TokenValue) => void;
	};
```

---

### `TokenRangeControlProps`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/control/svelte/atom/token-range/index.svelte` |
| **Строка** | 6 |
| **Целевой путь** | `control/type/struct/token-range-control-props/index.ts` |

#### 📝 Определение типа

```typescript
type TokenRangeControlProps = {
		definition: TokenRangeControlDefinition;
		value?: number;
		onChange?: (value: number) => void;
	};
```

#### 🔗 Зависимости

**Используемые типы:**

- `TokenRangeControlProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `TokenRangeControlDefinition` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '../token-control-base/index.svelte';
import ... from '$stylist/control/type/struct/range-control-definition';
```

#### 💡 Рекомендация по миграции

Создать файл: `control/type/struct/token-range-control-props/index.ts`

```typescript
// Extracted from: lib/control/svelte/atom/token-range/index.svelte:6
export type TokenRangeControlProps = {
		definition: TokenRangeControlDefinition;
		value?: number;
		onChange?: (value: number) => void;
	};
```

---

### `TokenSelectControlProps`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/control/svelte/atom/token-select/index.svelte` |
| **Строка** | 7 |
| **Целевой путь** | `control/type/struct/token-select-control-props/index.ts` |

#### 📝 Определение типа

```typescript
type TokenSelectControlProps = {
		definition: TokenSelectControlDefinition;
		value?: TokenValue;
		onChange?: (value: TokenValue) => void;
	};
```

#### 🔗 Зависимости

**Используемые типы:**

- `TokenSelectControlProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `TokenSelectControlDefinition` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `TokenValue` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `TokenValue` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '../token-control-base/index.svelte';
import ... from '$stylist/control/type/struct/select-control-definition';
import ... from '$stylist/control/type/struct/token-value';
```

#### 💡 Рекомендация по миграции

Создать файл: `control/type/struct/token-select-control-props/index.ts`

```typescript
// Extracted from: lib/control/svelte/atom/token-select/index.svelte:7
export type TokenSelectControlProps = {
		definition: TokenSelectControlDefinition;
		value?: TokenValue;
		onChange?: (value: TokenValue) => void;
	};
```

---

### `TokenTextControlProps`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/control/svelte/atom/token-text/index.svelte` |
| **Строка** | 6 |
| **Целевой путь** | `control/type/struct/token-text-control-props/index.ts` |

#### 📝 Определение типа

```typescript
type TokenTextControlProps = {
		definition: TokenTextControlDefinition;
		value?: string;
		placeholder?: string;
		onChange?: (value: string) => void;
	};
```

#### 🔗 Зависимости

**Используемые типы:**

- `TokenTextControlProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `TokenTextControlDefinition` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '../token-control-base/index.svelte';
import ... from '$stylist/control/type/struct/text-control-definition';
```

#### 💡 Рекомендация по миграции

Создать файл: `control/type/struct/token-text-control-props/index.ts`

```typescript
// Extracted from: lib/control/svelte/atom/token-text/index.svelte:6
export type TokenTextControlProps = {
		definition: TokenTextControlDefinition;
		value?: string;
		placeholder?: string;
		onChange?: (value: string) => void;
	};
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/control/svelte/atom/tooltip/index.svelte` |
| **Строка** | 7 |
| **Целевой путь** | `control/type/struct/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = TooltipProps & InteractionHTMLAttributes<HTMLElement>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `TooltipProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `InteractionHTMLAttributes` → импортируется из `$stylist//...`
- `HTMLElement` → импортируется из `svelte/elements`

**Все импорты компонента:**

```typescript
import ... from '$stylist/control/function/state/tooltip';
import ... from '$stylist/control/interface/component/tooltip/other';
import ... from '$stylist/interaction/type/struct/interaction';
```

#### 💡 Рекомендация по миграции

Создать файл: `control/type/struct/props/index.ts`

```typescript
// Extracted from: lib/control/svelte/atom/tooltip/index.svelte:7
export type Props = TooltipProps & InteractionHTMLAttributes<HTMLElement>;
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/control/svelte/atom/zoom/zoom-controls/index.svelte` |
| **Строка** | 12 |
| **Целевой путь** | `control/type/struct/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = ZoomControlsProps & InteractionHTMLAttributes<HTMLDivElement>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `ZoomControlsProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `InteractionHTMLAttributes` → импортируется из `$stylist//...`
- `HTMLDivElement` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist';
import ... from '$stylist/control/function/state/zoom-controls';
import ... from '$stylist/control/interface/component/zoom-controls/other';
import ... from '$stylist/interaction/type/struct/interaction';
```

#### 💡 Рекомендация по миграции

Создать файл: `control/type/struct/props/index.ts`

```typescript
// Extracted from: lib/control/svelte/atom/zoom/zoom-controls/index.svelte:12
export type Props = ZoomControlsProps & InteractionHTMLAttributes<HTMLDivElement>;
```

---

### `ButtonMouseEvent`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/control/svelte/molecule/buttons/button/index.svelte` |
| **Строка** | 34 |
| **Целевой путь** | `control/type/struct/button-mouse-event/index.ts` |

#### 📝 Определение типа

```typescript
type ButtonMouseEvent = MouseEvent & { currentTarget: EventTarget & HTMLButtonElement };
```

#### 🔗 Зависимости

**Используемые типы:**

- `ButtonMouseEvent` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `MouseEvent` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `EventTarget` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `HTMLButtonElement` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from 'svelte/elements';
import ... from 'svelte';
import ... from '$stylist/layout/type/struct/container';
import ... from '$stylist/layout/interface/recipe/background';
import ... from '$stylist/layout/interface/recipe/border';
import ... from '$stylist/control/interface/component/click/other';
import ... from '$stylist/interaction/type/record/appearance';
import ... from '$stylist/layout/type/enum/size';
import ... from '$stylist/interaction/factory/atoms';
```

#### 💡 Рекомендация по миграции

Создать файл: `control/type/struct/button-mouse-event/index.ts`

```typescript
// Extracted from: lib/control/svelte/molecule/buttons/button/index.svelte:34
export type ButtonMouseEvent = MouseEvent & { currentTarget: EventTarget & HTMLButtonElement };
```

---

### `ButtonPropsRecord`

| Параметр | Значение |
|---|---|
| **Категория** | record |
| **Компонент** | `lib/control/svelte/molecule/buttons/button/index.svelte` |
| **Строка** | 35 |
| **Целевой путь** | `control/type/record/button-props-record/index.ts` |

#### 📝 Определение типа

```typescript
type ButtonPropsRecord = ButtonProps & Record<string, unknown>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `ButtonPropsRecord` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `ButtonProps` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from 'svelte/elements';
import ... from 'svelte';
import ... from '$stylist/layout/type/struct/container';
import ... from '$stylist/layout/interface/recipe/background';
import ... from '$stylist/layout/interface/recipe/border';
import ... from '$stylist/control/interface/component/click/other';
import ... from '$stylist/interaction/type/record/appearance';
import ... from '$stylist/layout/type/enum/size';
import ... from '$stylist/interaction/factory/atoms';
```

#### 💡 Рекомендация по миграции

Создать файл: `control/type/record/button-props-record/index.ts`

```typescript
// Extracted from: lib/control/svelte/molecule/buttons/button/index.svelte:35
export type ButtonPropsRecord = ButtonProps & Record<string, unknown>;
```

---

### `ButtonProps`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/control/svelte/molecule/buttons/button/index.svelte` |
| **Строка** | 37 |
| **Целевой путь** | `control/type/struct/button-props/index.ts` |

#### 📝 Определение типа

```typescript
export type ButtonProps = HTMLButtonAttributes &
		ContainerProps &
		ThemeBackgroundRecipe &
		BorderRecipe &
		ClickProps & {
		variant?: TokenAppearance;
		size?: TokenSize;
		loading?: boolean;
		block?: boolean;
		loadingLabel?: string;
		children?: Snippet;
		class?: string;
	};
```

#### 🔗 Зависимости

**Используемые типы:**

- `ButtonProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `HTMLButtonAttributes` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `ContainerProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `ThemeBackgroundRecipe` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `BorderRecipe` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `ClickProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `TokenAppearance` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `TokenSize` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Snippet` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from 'svelte/elements';
import ... from 'svelte';
import ... from '$stylist/layout/type/struct/container';
import ... from '$stylist/layout/interface/recipe/background';
import ... from '$stylist/layout/interface/recipe/border';
import ... from '$stylist/control/interface/component/click/other';
import ... from '$stylist/interaction/type/record/appearance';
import ... from '$stylist/layout/type/enum/size';
import ... from '$stylist/interaction/factory/atoms';
```

#### 💡 Рекомендация по миграции

Создать файл: `control/type/struct/button-props/index.ts`

```typescript
// Extracted from: lib/control/svelte/molecule/buttons/button/index.svelte:37
export type ButtonProps = HTMLButtonAttributes &
		ContainerProps &
		ThemeBackgroundRecipe &
		BorderRecipe &
		ClickProps & {
		variant?: TokenAppearance;
		size?: TokenSize;
		loading?: boolean;
		block?: boolean;
		loadingLabel?: string;
		children?: Snippet;
		class?: string;
	};
```

---

### `DragItem`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/control/svelte/molecule/lists/drag-and-drop-list/index.svelte` |
| **Строка** | 9 |
| **Целевой путь** | `control/type/struct/drag-item/index.ts` |

#### 📝 Определение типа

```typescript
type DragItem = {
    id: string;
    title: string;
    content?: string;
    data?: any;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `DragItem` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/interaction/type/struct/interaction';
import ... from '$stylist';
import ... from '$stylist/commerce/svelte/molecule/cards/base-card/index.svelte';
```

#### 💡 Рекомендация по миграции

Создать файл: `control/type/struct/drag-item/index.ts`

```typescript
// Extracted from: lib/control/svelte/molecule/lists/drag-and-drop-list/index.svelte:9
export type DragItem = {
    id: string;
    title: string;
    content?: string;
    data?: any;
  };
```

---

### `RestProps`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/control/svelte/molecule/lists/drag-and-drop-list/index.svelte` |
| **Строка** | 16 |
| **Целевой путь** | `control/type/struct/rest-props/index.ts` |

#### 📝 Определение типа

```typescript
type RestProps = Omit<InteractionHTMLAttributes<HTMLDivElement>, 'class'>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `RestProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `InteractionHTMLAttributes` → импортируется из `$stylist//...`
- `HTMLDivElement` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/interaction/type/struct/interaction';
import ... from '$stylist';
import ... from '$stylist/commerce/svelte/molecule/cards/base-card/index.svelte';
```

#### 💡 Рекомендация по миграции

Создать файл: `control/type/struct/rest-props/index.ts`

```typescript
// Extracted from: lib/control/svelte/molecule/lists/drag-and-drop-list/index.svelte:16
export type RestProps = Omit<InteractionHTMLAttributes<HTMLDivElement>, 'class'>;
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/control/svelte/molecule/lists/drag-and-drop-list/index.svelte` |
| **Строка** | 18 |
| **Целевой путь** | `control/type/enum/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = RestProps & {
    items: DragItem[];
    class?: string;
    itemClass?: string;
    headerClass?: string;
    bodyClass?: string;
    onItemsChange?: (items: DragItem[]) => void;
    onItemDragStart?: (item: DragItem) => void;
    onItemDragEnd?: (item: DragItem) => void;
    disabled?: boolean;
    variant?: 'minimal' | 'card';
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `RestProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `DragItem` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `DragItem` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `DragItem` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `DragItem` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/interaction/type/struct/interaction';
import ... from '$stylist';
import ... from '$stylist/commerce/svelte/molecule/cards/base-card/index.svelte';
```

#### 💡 Рекомендация по миграции

Создать файл: `control/type/enum/props/index.ts`

```typescript
// Extracted from: lib/control/svelte/molecule/lists/drag-and-drop-list/index.svelte:18
export type Props = RestProps & {
    items: DragItem[];
    class?: string;
    itemClass?: string;
    headerClass?: string;
    bodyClass?: string;
    onItemsChange?: (items: DragItem[]) => void;
    onItemDragStart?: (item: DragItem) => void;
    onItemDragEnd?: (item: DragItem) => void;
    disabled?: boolean;
    variant?: 'minimal' | 'card';
  };
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/control/svelte/molecule/selectors/selector/index.svelte` |
| **Строка** | 10 |
| **Целевой путь** | `control/type/struct/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = ISelectProps;
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `ISelectProps` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/control/interface/component/selector/other';
```

#### 💡 Рекомендация по миграции

Создать файл: `control/type/struct/props/index.ts`

```typescript
// Extracted from: lib/control/svelte/molecule/selectors/selector/index.svelte:10
export type Props = ISelectProps;
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/control/svelte/molecule/sliders/range-slider/index.svelte` |
| **Строка** | 28 |
| **Целевой путь** | `control/type/struct/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = IRangeSliderProps;
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `IRangeSliderProps` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/input/interface/component/range-slider/other';
```

#### 💡 Рекомендация по миграции

Создать файл: `control/type/struct/props/index.ts`

```typescript
// Extracted from: lib/control/svelte/molecule/sliders/range-slider/index.svelte:28
export type Props = IRangeSliderProps;
```

---

### `Feature`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/control/svelte/molecule/tables/comparison-table/index.svelte` |
| **Строка** | 5 |
| **Целевой путь** | `control/type/struct/feature/index.ts` |

#### 📝 Определение типа

```typescript
type Feature = {
    id: string;
    name: string;
    description?: string;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `Feature` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/interaction/type/struct/interaction';
```

#### 💡 Рекомендация по миграции

Создать файл: `control/type/struct/feature/index.ts`

```typescript
// Extracted from: lib/control/svelte/molecule/tables/comparison-table/index.svelte:5
export type Feature = {
    id: string;
    name: string;
    description?: string;
  };
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/control/svelte/molecule/tables/comparison-table/index.svelte` |
| **Строка** | 21 |
| **Целевой путь** | `control/type/struct/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = {
    features: Feature[];
    products: Product[];
    showHeader?: boolean;
    showDescription?: boolean;
    class?: string;
    headerClass?: string;
    featureClass?: string;
    productClass?: string;
    valueClass?: string;
    primaryProductClass?: string;
  } & InteractionHTMLAttributes<HTMLDivElement>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Feature` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Product` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `InteractionHTMLAttributes` → импортируется из `$stylist//...`
- `HTMLDivElement` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/interaction/type/struct/interaction';
```

#### 💡 Рекомендация по миграции

Создать файл: `control/type/struct/props/index.ts`

```typescript
// Extracted from: lib/control/svelte/molecule/tables/comparison-table/index.svelte:21
export type Props = {
    features: Feature[];
    products: Product[];
    showHeader?: boolean;
    showDescription?: boolean;
    class?: string;
    headerClass?: string;
    featureClass?: string;
    productClass?: string;
    valueClass?: string;
    primaryProductClass?: string;
  } & InteractionHTMLAttributes<HTMLDivElement>;
```

---

### `RestProps`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/control/svelte/molecule/tables/expandable-table-row/index.svelte` |
| **Строка** | 10 |
| **Целевой путь** | `control/type/struct/rest-props/index.ts` |

#### 📝 Определение типа

```typescript
type RestProps = Omit<ArchitectureHTMLAttributes<HTMLTableRowElement>, 'class'>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `RestProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `ArchitectureHTMLAttributes` → импортируется из `$stylist//...`
- `HTMLTableRowElement` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/layout/type/struct';
import ... from 'svelte';
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `control/type/struct/rest-props/index.ts`

```typescript
// Extracted from: lib/control/svelte/molecule/tables/expandable-table-row/index.svelte:10
export type RestProps = Omit<ArchitectureHTMLAttributes<HTMLTableRowElement>, 'class'>;
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/control/svelte/molecule/tables/expandable-table-row/index.svelte` |
| **Строка** | 12 |
| **Целевой путь** | `control/type/struct/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = RestProps & {
    expandableContent: Snippet;
    rowContent: Snippet;
    isExpanded?: boolean;
    class?: string;
    cellClass?: string;
    headerCellClass?: string;
    onToggle?: (expanded: boolean) => void;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `RestProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Snippet` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Snippet` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/layout/type/struct';
import ... from 'svelte';
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `control/type/struct/props/index.ts`

```typescript
// Extracted from: lib/control/svelte/molecule/tables/expandable-table-row/index.svelte:12
export type Props = RestProps & {
    expandableContent: Snippet;
    rowContent: Snippet;
    isExpanded?: boolean;
    class?: string;
    cellClass?: string;
    headerCellClass?: string;
    onToggle?: (expanded: boolean) => void;
  };
```

---

### `StylistTabItem`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/control/svelte/molecule/tabs/stylist-tab/index.svelte` |
| **Строка** | 6 |
| **Целевой путь** | `control/type/struct/stylist-tab-item/index.ts` |

#### 📝 Определение типа

```typescript
type StylistTabItem = {
		id: string;
		label: string;
		icon: string;
	};
```

#### 🔗 Зависимости

**Используемые типы:**

- `StylistTabItem` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/interaction/type/struct/interaction';
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `control/type/struct/stylist-tab-item/index.ts`

```typescript
// Extracted from: lib/control/svelte/molecule/tabs/stylist-tab/index.svelte:6
export type StylistTabItem = {
		id: string;
		label: string;
		icon: string;
	};
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/control/svelte/molecule/tabs/stylist-tab/index.svelte` |
| **Строка** | 12 |
| **Целевой путь** | `control/type/struct/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = Omit<InteractionHTMLAttributes<HTMLDivElement>, 'class'> & {
		class?: string;
		items?: StylistTabItem[];
		selectedId?: string;
		onSelect?: (item: StylistTabItem) => void;
	};
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `InteractionHTMLAttributes` → импортируется из `$stylist//...`
- `HTMLDivElement` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `StylistTabItem` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `StylistTabItem` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/interaction/type/struct/interaction';
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `control/type/struct/props/index.ts`

```typescript
// Extracted from: lib/control/svelte/molecule/tabs/stylist-tab/index.svelte:12
export type Props = Omit<InteractionHTMLAttributes<HTMLDivElement>, 'class'> & {
		class?: string;
		items?: StylistTabItem[];
		selectedId?: string;
		onSelect?: (item: StylistTabItem) => void;
	};
```

---

### `Option`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/control/svelte/molecule/toggles/checkbox-group/index.svelte` |
| **Строка** | 7 |
| **Целевой путь** | `control/type/struct/option/index.ts` |

#### 📝 Определение типа

```typescript
type Option = {
    id: string;
    label: string;
    value: string;
    disabled?: boolean;
    description?: string;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `Option` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/interaction/type/struct/interaction';
import ... from '$stylist/control/svelte/atom/toggles/checkbox/index.svelte';
import ... from '$stylist/control/class/style-manager/checkbox-group';
```

#### 💡 Рекомендация по миграции

Создать файл: `control/type/struct/option/index.ts`

```typescript
// Extracted from: lib/control/svelte/molecule/toggles/checkbox-group/index.svelte:7
export type Option = {
    id: string;
    label: string;
    value: string;
    disabled?: boolean;
    description?: string;
  };
```

---

### `RestProps`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/control/svelte/molecule/toggles/checkbox-group/index.svelte` |
| **Строка** | 15 |
| **Целевой путь** | `control/type/struct/rest-props/index.ts` |

#### 📝 Определение типа

```typescript
type RestProps = Omit<InteractionHTMLAttributes<HTMLFieldSetElement>, 'class'>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `RestProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `InteractionHTMLAttributes` → импортируется из `$stylist//...`
- `HTMLFieldSetElement` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/interaction/type/struct/interaction';
import ... from '$stylist/control/svelte/atom/toggles/checkbox/index.svelte';
import ... from '$stylist/control/class/style-manager/checkbox-group';
```

#### 💡 Рекомендация по миграции

Создать файл: `control/type/struct/rest-props/index.ts`

```typescript
// Extracted from: lib/control/svelte/molecule/toggles/checkbox-group/index.svelte:15
export type RestProps = Omit<InteractionHTMLAttributes<HTMLFieldSetElement>, 'class'>;
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/control/svelte/molecule/toggles/checkbox-group/index.svelte` |
| **Строка** | 17 |
| **Целевой путь** | `control/type/struct/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = RestProps & {
    options: Option[];
    value?: string[];
    label?: string;
    description?: string;
    class?: string;
    itemClass?: string;
    disabled?: boolean;
    required?: boolean;
    name?: string;
    onValueInput?: (values: string[]) => void;
    onValueChange?: (values: string[]) => void;
    /** @deprecated use onValueInput/onValueChange */
    onInput?: (values: string[]) => void;
    /** @deprecated use onValueChange */
    onChange?: (values: string[]) => void;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `RestProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Option` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/interaction/type/struct/interaction';
import ... from '$stylist/control/svelte/atom/toggles/checkbox/index.svelte';
import ... from '$stylist/control/class/style-manager/checkbox-group';
```

#### 💡 Рекомендация по миграции

Создать файл: `control/type/struct/props/index.ts`

```typescript
// Extracted from: lib/control/svelte/molecule/toggles/checkbox-group/index.svelte:17
export type Props = RestProps & {
    options: Option[];
    value?: string[];
    label?: string;
    description?: string;
    class?: string;
    itemClass?: string;
    disabled?: boolean;
    required?: boolean;
    name?: string;
    onValueInput?: (values: string[]) => void;
    onValueChange?: (values: string[]) => void;
    /** @deprecated use onValueInput/onValueChange */
    onInput?: (values: string[]) => void;
    /** @deprecated use onValueChange */
    onChange?: (values: string[]) => void;
  };
```

---

### `Option`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/control/svelte/molecule/toggles/toggle-button-group/index.svelte` |
| **Строка** | 5 |
| **Целевой путь** | `control/type/struct/option/index.ts` |

#### 📝 Определение типа

```typescript
type Option = {
    value: string;
    label: string;
    icon?: string; // Could be a string identifier for an icon
    disabled?: boolean;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `Option` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Could` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/interaction/type/struct/interaction';
```

#### 💡 Рекомендация по миграции

Создать файл: `control/type/struct/option/index.ts`

```typescript
// Extracted from: lib/control/svelte/molecule/toggles/toggle-button-group/index.svelte:5
export type Option = {
    value: string;
    label: string;
    icon?: string; // Could be a string identifier for an icon
    disabled?: boolean;
  };
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/control/svelte/molecule/toggles/toggle-button-group/index.svelte` |
| **Строка** | 12 |
| **Целевой путь** | `control/type/enum/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = {
    options: Option[];
    value?: string | string[]; // Single value for single selection, array for multi selection
    multiple?: boolean;
    disabled?: boolean;
    size?: 'sm' | 'md' | 'lg';
    class?: string;
    buttonClass?: string;
    activeButtonClass?: string;
    inactiveButtonClass?: string;
    onValueInput?: (value: string | string[]) => void;
    onValueChange?: (value: string | string[]) => void;
    /** @deprecated use onValueInput/onValueChange */
    onInput?: (value: string | string[]) => void;
    /** @deprecated use onValueChange */
    onChange?: (value: string | string[]) => void;
  } & InteractionHTMLAttributes<HTMLDivElement>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Option` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Single` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `InteractionHTMLAttributes` → импортируется из `$stylist//...`
- `HTMLDivElement` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/interaction/type/struct/interaction';
```

#### 💡 Рекомендация по миграции

Создать файл: `control/type/enum/props/index.ts`

```typescript
// Extracted from: lib/control/svelte/molecule/toggles/toggle-button-group/index.svelte:12
export type Props = {
    options: Option[];
    value?: string | string[]; // Single value for single selection, array for multi selection
    multiple?: boolean;
    disabled?: boolean;
    size?: 'sm' | 'md' | 'lg';
    class?: string;
    buttonClass?: string;
    activeButtonClass?: string;
    inactiveButtonClass?: string;
    onValueInput?: (value: string | string[]) => void;
    onValueChange?: (value: string | string[]) => void;
    /** @deprecated use onValueInput/onValueChange */
    onInput?: (value: string | string[]) => void;
    /** @deprecated use onValueChange */
    onChange?: (value: string | string[]) => void;
  } & InteractionHTMLAttributes<HTMLDivElement>;
```

---

### `PictureToolbarTool`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/control/svelte/molecule/toolbars/picture-toolbar/index.svelte` |
| **Строка** | 7 |
| **Целевой путь** | `control/type/struct/picture-toolbar-tool/index.ts` |

#### 📝 Определение типа

```typescript
type PictureToolbarTool = {
		id: string;
		label: string;
		icon?: string;
	};
```

#### 🔗 Зависимости

**Используемые типы:**

- `PictureToolbarTool` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from 'svelte';
import ... from '$stylist/media/interface/recipe/picture-toolbar';
import ... from '$stylist/control/function/state/picture-toolbar';
```

#### 💡 Рекомендация по миграции

Создать файл: `control/type/struct/picture-toolbar-tool/index.ts`

```typescript
// Extracted from: lib/control/svelte/molecule/toolbars/picture-toolbar/index.svelte:7
export type PictureToolbarTool = {
		id: string;
		label: string;
		icon?: string;
	};
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/control/svelte/molecule/toolbars/picture-toolbar/index.svelte` |
| **Строка** | 13 |
| **Целевой путь** | `control/type/struct/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = PictureToolbarRecipe & {
		tools: PictureToolbarTool[];
		activeTool?: string;
		onToolSelect?: (toolId: string) => void;
		children?: Snippet;
	};
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `PictureToolbarRecipe` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `PictureToolbarTool` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Snippet` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from 'svelte';
import ... from '$stylist/media/interface/recipe/picture-toolbar';
import ... from '$stylist/control/function/state/picture-toolbar';
```

#### 💡 Рекомендация по миграции

Создать файл: `control/type/struct/props/index.ts`

```typescript
// Extracted from: lib/control/svelte/molecule/toolbars/picture-toolbar/index.svelte:13
export type Props = PictureToolbarRecipe & {
		tools: PictureToolbarTool[];
		activeTool?: string;
		onToolSelect?: (toolId: string) => void;
		children?: Snippet;
	};
```

---

### `AccessibilityToolbarProps`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/control/svelte/organism/accessibility-toolbar/index.svelte` |
| **Строка** | 16 |
| **Целевой путь** | `control/type/enum/accessibility-toolbar-props/index.ts` |

#### 📝 Определение типа

```typescript
type AccessibilityToolbarProps = {
    showFontSizeControls?: boolean;
    showScreenReaderTester?: boolean;
    showFocusIndicator?: boolean;
    showTokenAnimationToggle?: boolean;
    class?: string;
    toolbarClass?: string;
    buttonClass?: string;
    variant?: 'default' | 'minimal' | 'compact';
    size?: 'sm' | 'md' | 'lg';
  } & ArchitectureHTMLAttributes<HTMLDivElement>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `AccessibilityToolbarProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `ArchitectureHTMLAttributes` → импортируется из `$stylist//...`
- `HTMLDivElement` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from 'svelte/elements';
import ... from '$stylist/layout/type/struct';
import ... from '$stylist';
import ... from '$stylist/control/function/state/accessibility-toolbar';
```

#### 💡 Рекомендация по миграции

Создать файл: `control/type/enum/accessibility-toolbar-props/index.ts`

```typescript
// Extracted from: lib/control/svelte/organism/accessibility-toolbar/index.svelte:16
export type AccessibilityToolbarProps = {
    showFontSizeControls?: boolean;
    showScreenReaderTester?: boolean;
    showFocusIndicator?: boolean;
    showTokenAnimationToggle?: boolean;
    class?: string;
    toolbarClass?: string;
    buttonClass?: string;
    variant?: 'default' | 'minimal' | 'compact';
    size?: 'sm' | 'md' | 'lg';
  } & ArchitectureHTMLAttributes<HTMLDivElement>;
```

---

### `ComboboxItem`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/control/svelte/organism/combobox/index.svelte` |
| **Строка** | 3 |
| **Целевой путь** | `control/type/struct/combobox-item/index.ts` |

#### 📝 Определение типа

```typescript
type ComboboxItem = {
    id: string;
    label: string;
    description?: string;
    disabled?: boolean;
    meta?: string;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `ComboboxItem` → ⚠️ источник не найден (возможно, глобальный или локальный)

#### 💡 Рекомендация по миграции

Создать файл: `control/type/struct/combobox-item/index.ts`

```typescript
// Extracted from: lib/control/svelte/organism/combobox/index.svelte:3
export type ComboboxItem = {
    id: string;
    label: string;
    description?: string;
    disabled?: boolean;
    meta?: string;
  };
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/control/svelte/organism/combobox/index.svelte` |
| **Строка** | 11 |
| **Целевой путь** | `control/type/enum/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = {
    id: string;
    items: ComboboxItem[];
    value?: string | null;
    label?: string;
    description?: string;
    placeholder?: string;
    emptyText?: string;
    disabled?: boolean;
    clearable?: boolean;
    loading?: boolean;
    class?: string;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `ComboboxItem` → ⚠️ источник не найден (возможно, глобальный или локальный)

#### 💡 Рекомендация по миграции

Создать файл: `control/type/enum/props/index.ts`

```typescript
// Extracted from: lib/control/svelte/organism/combobox/index.svelte:11
export type Props = {
    id: string;
    items: ComboboxItem[];
    value?: string | null;
    label?: string;
    description?: string;
    placeholder?: string;
    emptyText?: string;
    disabled?: boolean;
    clearable?: boolean;
    loading?: boolean;
    class?: string;
  };
```

---

### `ToggleFilter`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/control/svelte/organism/filter-bar/index.svelte` |
| **Строка** | 5 |
| **Целевой путь** | `control/type/struct/toggle-filter/index.ts` |

#### 📝 Определение типа

```typescript
type ToggleFilter = {
    id: string;
    label: string;
    description?: string;
    checked?: boolean;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `ToggleFilter` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `control/type/struct/toggle-filter/index.ts`

```typescript
// Extracted from: lib/control/svelte/organism/filter-bar/index.svelte:5
export type ToggleFilter = {
    id: string;
    label: string;
    description?: string;
    checked?: boolean;
  };
```

---

### `TagFilter`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/control/svelte/organism/filter-bar/index.svelte` |
| **Строка** | 12 |
| **Целевой путь** | `control/type/struct/tag-filter/index.ts` |

#### 📝 Определение типа

```typescript
type TagFilter = {
    id: string;
    label: string;
    active?: boolean;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `TagFilter` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `control/type/struct/tag-filter/index.ts`

```typescript
// Extracted from: lib/control/svelte/organism/filter-bar/index.svelte:12
export type TagFilter = {
    id: string;
    label: string;
    active?: boolean;
  };
```

---

### `RangeFilter`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/control/svelte/organism/filter-bar/index.svelte` |
| **Строка** | 18 |
| **Целевой путь** | `control/type/struct/range-filter/index.ts` |

#### 📝 Определение типа

```typescript
type RangeFilter = {
    id: string;
    label: string;
    min: number;
    max: number;
    step?: number;
    value?: number;
    unit?: string;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `RangeFilter` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `control/type/struct/range-filter/index.ts`

```typescript
// Extracted from: lib/control/svelte/organism/filter-bar/index.svelte:18
export type RangeFilter = {
    id: string;
    label: string;
    min: number;
    max: number;
    step?: number;
    value?: number;
    unit?: string;
  };
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/control/svelte/organism/filter-bar/index.svelte` |
| **Строка** | 28 |
| **Целевой путь** | `control/type/struct/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = {
    toggles?: ToggleFilter[];
    tags?: TagFilter[];
    range?: RangeFilter;
    onClear?: () => void;
    class?: string;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `ToggleFilter` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `TagFilter` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `RangeFilter` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `control/type/struct/props/index.ts`

```typescript
// Extracted from: lib/control/svelte/organism/filter-bar/index.svelte:28
export type Props = {
    toggles?: ToggleFilter[];
    tags?: TagFilter[];
    range?: RangeFilter;
    onClear?: () => void;
    class?: string;
  };
```

---

### `SortableGridItem`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/control/svelte/organism/grids/sortable-grid/index.svelte` |
| **Строка** | 41 |
| **Целевой путь** | `control/type/struct/sortable-grid-item/index.ts` |

#### 📝 Определение типа

```typescript
type SortableGridItem = {
    id: string;
    title: string;
    content?: string;
    render?: Snippet;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `SortableGridItem` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Snippet` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/layout/type/struct';
import ... from 'svelte';
import ... from '$stylist';
import ... from '$stylist/control/class/style-manager/sortable-grid';
```

#### 💡 Рекомендация по миграции

Создать файл: `control/type/struct/sortable-grid-item/index.ts`

```typescript
// Extracted from: lib/control/svelte/organism/grids/sortable-grid/index.svelte:41
export type SortableGridItem = {
    id: string;
    title: string;
    content?: string;
    render?: Snippet;
  };
```

---

### `SortableGridProps`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/control/svelte/organism/grids/sortable-grid/index.svelte` |
| **Строка** | 48 |
| **Целевой путь** | `control/type/struct/sortable-grid-props/index.ts` |

#### 📝 Определение типа

```typescript
type SortableGridProps = {
    items?: SortableGridItem[];
    class?: string;
    itemClass?: string;
    gridClass?: string;
    onItemsChange?: (items: SortableGridItem[]) => void;
    onItemDragStart?: (item: SortableGridItem) => void;
    onItemDragEnd?: (item: SortableGridItem) => void;
    disabled?: boolean;
    cols?: keyof typeof gridColsMap;
    gap?: keyof typeof gapMap;
    variant?: string;
    size?: string;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `SortableGridProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `SortableGridItem` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `SortableGridItem` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `SortableGridItem` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `SortableGridItem` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/layout/type/struct';
import ... from 'svelte';
import ... from '$stylist';
import ... from '$stylist/control/class/style-manager/sortable-grid';
```

#### 💡 Рекомендация по миграции

Создать файл: `control/type/struct/sortable-grid-props/index.ts`

```typescript
// Extracted from: lib/control/svelte/organism/grids/sortable-grid/index.svelte:48
export type SortableGridProps = {
    items?: SortableGridItem[];
    class?: string;
    itemClass?: string;
    gridClass?: string;
    onItemsChange?: (items: SortableGridItem[]) => void;
    onItemDragStart?: (item: SortableGridItem) => void;
    onItemDragEnd?: (item: SortableGridItem) => void;
    disabled?: boolean;
    cols?: keyof typeof gridColsMap;
    gap?: keyof typeof gapMap;
    variant?: string;
    size?: string;
  };
```

---

### `ListItem`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/control/svelte/organism/list-with-avatars/index.svelte` |
| **Строка** | 5 |
| **Целевой путь** | `control/type/enum/list-item/index.ts` |

#### 📝 Определение типа

```typescript
type ListItem = {
    id: string;
    title: string;
    subtitle?: string;
    avatar?: string;
    status?: 'online' | 'offline' | 'away' | 'busy';
    description?: string;
    actions?: Array<{
      label: string;
      onClick: () => void;
      variant?: 'primary' | 'secondary' | 'danger';
    }>;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `ListItem` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/interaction/type/struct/interaction';
```

#### 💡 Рекомендация по миграции

Создать файл: `control/type/enum/list-item/index.ts`

```typescript
// Extracted from: lib/control/svelte/organism/list-with-avatars/index.svelte:5
export type ListItem = {
    id: string;
    title: string;
    subtitle?: string;
    avatar?: string;
    status?: 'online' | 'offline' | 'away' | 'busy';
    description?: string;
    actions?: Array<{
      label: string;
      onClick: () => void;
      variant?: 'primary' | 'secondary' | 'danger';
    }>;
  };
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/control/svelte/organism/list-with-avatars/index.svelte` |
| **Строка** | 19 |
| **Целевой путь** | `control/type/enum/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = {
    items: ListItem[];
    showAvatar?: boolean;
    showStatus?: boolean;
    showSubtitle?: boolean;
    showDescription?: boolean;
    showActions?: boolean;
    size?: 'sm' | 'md' | 'lg';
    class?: string;
    itemClass?: string;
    avatarClass?: string;
    contentClass?: string;
    actionsClass?: string;
  } & InteractionHTMLAttributes<HTMLDivElement>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `ListItem` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `InteractionHTMLAttributes` → импортируется из `$stylist//...`
- `HTMLDivElement` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/interaction/type/struct/interaction';
```

#### 💡 Рекомендация по миграции

Создать файл: `control/type/enum/props/index.ts`

```typescript
// Extracted from: lib/control/svelte/organism/list-with-avatars/index.svelte:19
export type Props = {
    items: ListItem[];
    showAvatar?: boolean;
    showStatus?: boolean;
    showSubtitle?: boolean;
    showDescription?: boolean;
    showActions?: boolean;
    size?: 'sm' | 'md' | 'lg';
    class?: string;
    itemClass?: string;
    avatarClass?: string;
    contentClass?: string;
    actionsClass?: string;
  } & InteractionHTMLAttributes<HTMLDivElement>;
```

---

### `SearchResultItem`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/control/svelte/organism/search/search-results/index.svelte` |
| **Строка** | 11 |
| **Целевой путь** | `control/type/enum/search-result-item/index.ts` |

#### 📝 Определение типа

```typescript
type SearchResultItem = {
    id: string;
    type: 'user' | 'event' | 'document' | 'generic';
    title: string;
    description?: string;
    metadata?: {
      date?: string;
      author?: string;
      location?: string;
    };
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `SearchResultItem` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist';
import ... from '$stylist/control/class/style-manager/search-results';
```

#### 💡 Рекомендация по миграции

Создать файл: `control/type/enum/search-result-item/index.ts`

```typescript
// Extracted from: lib/control/svelte/organism/search/search-results/index.svelte:11
export type SearchResultItem = {
    id: string;
    type: 'user' | 'event' | 'document' | 'generic';
    title: string;
    description?: string;
    metadata?: {
      date?: string;
      author?: string;
      location?: string;
    };
  };
```

---

### `SearchResultsProps`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/control/svelte/organism/search/search-results/index.svelte` |
| **Строка** | 23 |
| **Целевой путь** | `control/type/enum/search-results-props/index.ts` |

#### 📝 Определение типа

```typescript
type SearchResultsProps = {
    results?: SearchResultItem[];
    query?: string;
    loading?: boolean;
    class?: string | null;
    onResultClick?: (result: SearchResultItem) => void;
    showMetadata?: boolean;
    maxResults?: number;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `SearchResultsProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `SearchResultItem` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `SearchResultItem` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist';
import ... from '$stylist/control/class/style-manager/search-results';
```

#### 💡 Рекомендация по миграции

Создать файл: `control/type/enum/search-results-props/index.ts`

```typescript
// Extracted from: lib/control/svelte/organism/search/search-results/index.svelte:23
export type SearchResultsProps = {
    results?: SearchResultItem[];
    query?: string;
    loading?: boolean;
    class?: string | null;
    onResultClick?: (result: SearchResultItem) => void;
    showMetadata?: boolean;
    maxResults?: number;
  };
```

---

### `PrimaryMenuItem`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/control/svelte/organism/stylist-menu/index.svelte` |
| **Строка** | 8 |
| **Целевой путь** | `control/type/struct/primary-menu-item/index.ts` |

#### 📝 Определение типа

```typescript
type PrimaryMenuItem = {
		id: string;
		label: string;
		icon: string;
	};
```

#### 🔗 Зависимости

**Используемые типы:**

- `PrimaryMenuItem` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from 'svelte';
import ... from '$stylist/interaction/type/struct/interaction';
import ... from '$stylist/media/svelte/atom/icon/index.svelte';
import ... from '$stylist/control/svelte/molecule/tabs/stylist-tab/index.svelte';
```

#### 💡 Рекомендация по миграции

Создать файл: `control/type/struct/primary-menu-item/index.ts`

```typescript
// Extracted from: lib/control/svelte/organism/stylist-menu/index.svelte:8
export type PrimaryMenuItem = {
		id: string;
		label: string;
		icon: string;
	};
```

---

### `FunctionalTabId`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/control/svelte/organism/stylist-menu/index.svelte` |
| **Строка** | 14 |
| **Целевой путь** | `control/type/enum/functional-tab-id/index.ts` |

#### 📝 Определение типа

```typescript
type FunctionalTabId = 'architecture' | 'information' | 'interaction';
```

#### 🔗 Зависимости

**Используемые типы:**

- `FunctionalTabId` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from 'svelte';
import ... from '$stylist/interaction/type/struct/interaction';
import ... from '$stylist/media/svelte/atom/icon/index.svelte';
import ... from '$stylist/control/svelte/molecule/tabs/stylist-tab/index.svelte';
```

#### 💡 Рекомендация по миграции

Создать файл: `control/type/enum/functional-tab-id/index.ts`

```typescript
// Extracted from: lib/control/svelte/organism/stylist-menu/index.svelte:14
export type FunctionalTabId = 'architecture' | 'information' | 'interaction';
```

---

### `AtomicTabId`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/control/svelte/organism/stylist-menu/index.svelte` |
| **Строка** | 15 |
| **Целевой путь** | `control/type/enum/atomic-tab-id/index.ts` |

#### 📝 Определение типа

```typescript
type AtomicTabId = 'atoms' | 'molecules' | 'organisms';
```

#### 🔗 Зависимости

**Используемые типы:**

- `AtomicTabId` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from 'svelte';
import ... from '$stylist/interaction/type/struct/interaction';
import ... from '$stylist/media/svelte/atom/icon/index.svelte';
import ... from '$stylist/control/svelte/molecule/tabs/stylist-tab/index.svelte';
```

#### 💡 Рекомендация по миграции

Создать файл: `control/type/enum/atomic-tab-id/index.ts`

```typescript
// Extracted from: lib/control/svelte/organism/stylist-menu/index.svelte:15
export type AtomicTabId = 'atoms' | 'molecules' | 'organisms';
```

---

### `TabItem`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/control/svelte/organism/stylist-menu/index.svelte` |
| **Строка** | 17 |
| **Целевой путь** | `control/type/struct/tab-item/index.ts` |

#### 📝 Определение типа

```typescript
type TabItem = {
		id: string;
		label: string;
		icon: string;
	};
```

#### 🔗 Зависимости

**Используемые типы:**

- `TabItem` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from 'svelte';
import ... from '$stylist/interaction/type/struct/interaction';
import ... from '$stylist/media/svelte/atom/icon/index.svelte';
import ... from '$stylist/control/svelte/molecule/tabs/stylist-tab/index.svelte';
```

#### 💡 Рекомендация по миграции

Создать файл: `control/type/struct/tab-item/index.ts`

```typescript
// Extracted from: lib/control/svelte/organism/stylist-menu/index.svelte:17
export type TabItem = {
		id: string;
		label: string;
		icon: string;
	};
```

---

### `FunctionalTabItem`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/control/svelte/organism/stylist-menu/index.svelte` |
| **Строка** | 23 |
| **Целевой путь** | `control/type/struct/functional-tab-item/index.ts` |

#### 📝 Определение типа

```typescript
type FunctionalTabItem = {
		id: FunctionalTabId;
		label: string;
		icon: string;
	};
```

#### 🔗 Зависимости

**Используемые типы:**

- `FunctionalTabItem` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `FunctionalTabId` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from 'svelte';
import ... from '$stylist/interaction/type/struct/interaction';
import ... from '$stylist/media/svelte/atom/icon/index.svelte';
import ... from '$stylist/control/svelte/molecule/tabs/stylist-tab/index.svelte';
```

#### 💡 Рекомендация по миграции

Создать файл: `control/type/struct/functional-tab-item/index.ts`

```typescript
// Extracted from: lib/control/svelte/organism/stylist-menu/index.svelte:23
export type FunctionalTabItem = {
		id: FunctionalTabId;
		label: string;
		icon: string;
	};
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/control/svelte/organism/stylist-menu/index.svelte` |
| **Строка** | 29 |
| **Целевой путь** | `control/type/enum/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = Omit<InteractionHTMLAttributes<HTMLElement>, 'class'> & {
		class?: string;
		triggerIcon?: string;
		currentItemId?: string;
		avatarLabel?: string;
		avatarName?: string;
		avatarEmail?: string;
		activeAvatarRoute?: 'profile' | 'settings' | '';
		functionalTabId?: FunctionalTabId;
		atomicTabId?: AtomicTabId;
		onItemClick?: (item: PrimaryMenuItem) => void;
		onFunctionalTabClick?: (tabId: FunctionalTabId) => void;
		onAtomicTabClick?: (tabId: AtomicTabId) => void;
		onThemeButtonClick?: () => void;
		onSettingsButtonClick?: () => void;
		onAvatarProfileClick?: () => void;
		onAvatarSettingsClick?: () => void;
		onAvatarLogoutClick?: () => void;
	};
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `InteractionHTMLAttributes` → импортируется из `$stylist//...`
- `HTMLElement` → импортируется из `svelte/elements`
- `FunctionalTabId` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `AtomicTabId` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `PrimaryMenuItem` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `FunctionalTabId` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `AtomicTabId` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from 'svelte';
import ... from '$stylist/interaction/type/struct/interaction';
import ... from '$stylist/media/svelte/atom/icon/index.svelte';
import ... from '$stylist/control/svelte/molecule/tabs/stylist-tab/index.svelte';
```

#### 💡 Рекомендация по миграции

Создать файл: `control/type/enum/props/index.ts`

```typescript
// Extracted from: lib/control/svelte/organism/stylist-menu/index.svelte:29
export type Props = Omit<InteractionHTMLAttributes<HTMLElement>, 'class'> & {
		class?: string;
		triggerIcon?: string;
		currentItemId?: string;
		avatarLabel?: string;
		avatarName?: string;
		avatarEmail?: string;
		activeAvatarRoute?: 'profile' | 'settings' | '';
		functionalTabId?: FunctionalTabId;
		atomicTabId?: AtomicTabId;
		onItemClick?: (item: PrimaryMenuItem) => void;
		onFunctionalTabClick?: (tabId: FunctionalTabId) => void;
		onAtomicTabClick?: (tabId: AtomicTabId) => void;
		onThemeButtonClick?: () => void;
		onSettingsButtonClick?: () => void;
		onAvatarProfileClick?: () => void;
		onAvatarSettingsClick?: () => void;
		onAvatarLogoutClick?: () => void;
	};
```

---

---

## Домен: `development` (62 типов)

### `RestProps`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/development/svelte/molecule/code-block/index.svelte` |
| **Строка** | 11 |
| **Целевой путь** | `development/type/struct/rest-props/index.ts` |

#### 📝 Определение типа

```typescript
type RestProps = Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `RestProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `InformationHTMLAttributes` → импортируется из `$stylist//...`
- `HTMLDivElement` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/information/type/struct';
import ... from '$stylist';
import ... from '$stylist';
import ... from '$stylist/development/class/style-manager/code-block';
```

#### 💡 Рекомендация по миграции

Создать файл: `development/type/struct/rest-props/index.ts`

```typescript
// Extracted from: lib/development/svelte/molecule/code-block/index.svelte:11
export type RestProps = Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'>;
```

---

### `CodeBlockProps`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/development/svelte/molecule/code-block/index.svelte` |
| **Строка** | 25 |
| **Целевой путь** | `development/type/struct/code-block-props/index.ts` |

#### 📝 Определение типа

```typescript
type CodeBlockProps = RestProps & {
    code?: string;
    language?: string;
    showLineNumbers?: boolean;
    highlightLines?: number[];
    title?: string;
    copyable?: boolean;
    class?: string;
    contentClass?: string;
    lineNumberClass?: string;
    codeClass?: string;
    headerClass?: string;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `CodeBlockProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `RestProps` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/information/type/struct';
import ... from '$stylist';
import ... from '$stylist';
import ... from '$stylist/development/class/style-manager/code-block';
```

#### 💡 Рекомендация по миграции

Создать файл: `development/type/struct/code-block-props/index.ts`

```typescript
// Extracted from: lib/development/svelte/molecule/code-block/index.svelte:25
export type CodeBlockProps = RestProps & {
    code?: string;
    language?: string;
    showLineNumbers?: boolean;
    highlightLines?: number[];
    title?: string;
    copyable?: boolean;
    class?: string;
    contentClass?: string;
    lineNumberClass?: string;
    codeClass?: string;
    headerClass?: string;
  };
```

---

### `RestProps`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/development/svelte/molecule/code-block-with-line-numbers/index.svelte` |
| **Строка** | 11 |
| **Целевой путь** | `development/type/struct/rest-props/index.ts` |

#### 📝 Определение типа

```typescript
type RestProps = Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `RestProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `InformationHTMLAttributes` → импортируется из `$stylist//...`
- `HTMLDivElement` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '../code-block/index.svelte';
import ... from '$stylist/information/type/struct';
```

#### 💡 Рекомендация по миграции

Создать файл: `development/type/struct/rest-props/index.ts`

```typescript
// Extracted from: lib/development/svelte/molecule/code-block-with-line-numbers/index.svelte:11
export type RestProps = Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'>;
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/development/svelte/molecule/code-block-with-line-numbers/index.svelte` |
| **Строка** | 13 |
| **Целевой путь** | `development/type/struct/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = RestProps & {
    code?: string;
    language?: string;
    highlightLines?: number[];
    title?: string;
    copyable?: boolean;
    class?: string;
    contentClass?: string;
    lineNumberClass?: string;
    codeClass?: string;
    headerClass?: string;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `RestProps` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '../code-block/index.svelte';
import ... from '$stylist/information/type/struct';
```

#### 💡 Рекомендация по миграции

Создать файл: `development/type/struct/props/index.ts`

```typescript
// Extracted from: lib/development/svelte/molecule/code-block-with-line-numbers/index.svelte:13
export type Props = RestProps & {
    code?: string;
    language?: string;
    highlightLines?: number[];
    title?: string;
    copyable?: boolean;
    class?: string;
    contentClass?: string;
    lineNumberClass?: string;
    codeClass?: string;
    headerClass?: string;
  };
```

---

### `RestProps`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/development/svelte/molecule/code-diff/index.svelte` |
| **Строка** | 6 |
| **Целевой путь** | `development/type/struct/rest-props/index.ts` |

#### 📝 Определение типа

```typescript
type RestProps = Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `RestProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `InformationHTMLAttributes` → импортируется из `$stylist//...`
- `HTMLDivElement` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/information/type/struct';
import ... from '$stylist/development/class/style-manager/code-diff';
```

#### 💡 Рекомендация по миграции

Создать файл: `development/type/struct/rest-props/index.ts`

```typescript
// Extracted from: lib/development/svelte/molecule/code-diff/index.svelte:6
export type RestProps = Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'>;
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/development/svelte/molecule/code-diff/index.svelte` |
| **Строка** | 8 |
| **Целевой путь** | `development/type/struct/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = RestProps & {
    original?: string;
    modified?: string;
    language?: string;
    class?: string;
    contentClass?: string;
    headerClass?: string;
    showLineNumbers?: boolean;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `RestProps` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/information/type/struct';
import ... from '$stylist/development/class/style-manager/code-diff';
```

#### 💡 Рекомендация по миграции

Создать файл: `development/type/struct/props/index.ts`

```typescript
// Extracted from: lib/development/svelte/molecule/code-diff/index.svelte:8
export type Props = RestProps & {
    original?: string;
    modified?: string;
    language?: string;
    class?: string;
    contentClass?: string;
    headerClass?: string;
    showLineNumbers?: boolean;
  };
```

---

### `DiffLine`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/development/svelte/molecule/code-diff/index.svelte` |
| **Строка** | 18 |
| **Целевой путь** | `development/type/enum/diff-line/index.ts` |

#### 📝 Определение типа

```typescript
type DiffLine = {
    type: 'unchanged' | 'added' | 'removed' | 'changed';
    original: string | null;
    modified: string | null;
    lineNumber: number;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `DiffLine` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/information/type/struct';
import ... from '$stylist/development/class/style-manager/code-diff';
```

#### 💡 Рекомендация по миграции

Создать файл: `development/type/enum/diff-line/index.ts`

```typescript
// Extracted from: lib/development/svelte/molecule/code-diff/index.svelte:18
export type DiffLine = {
    type: 'unchanged' | 'added' | 'removed' | 'changed';
    original: string | null;
    modified: string | null;
    lineNumber: number;
  };
```

---

### `CodeEditorProps`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/development/svelte/molecule/code-editor-legacy/index.svelte` |
| **Строка** | 9 |
| **Целевой путь** | `development/type/struct/code-editor-props/index.ts` |

#### 📝 Определение типа

```typescript
type CodeEditorProps = {
    code?: string;
    language?: string;
    showLineNumbers?: boolean;
    showCopyButton?: boolean;
    class?: string;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `CodeEditorProps` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '../code-block/index.svelte';
```

#### 💡 Рекомендация по миграции

Создать файл: `development/type/struct/code-editor-props/index.ts`

```typescript
// Extracted from: lib/development/svelte/molecule/code-editor-legacy/index.svelte:9
export type CodeEditorProps = {
    code?: string;
    language?: string;
    showLineNumbers?: boolean;
    showCopyButton?: boolean;
    class?: string;
  };
```

---

### `CodeSectionVariant`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/development/svelte/molecule/code-section/index.svelte` |
| **Строка** | 8 |
| **Целевой путь** | `development/type/enum/code-section-variant/index.ts` |

#### 📝 Определение типа

```typescript
type CodeSectionVariant = 'default' | 'terminal' | 'diff';
```

#### 🔗 Зависимости

**Используемые типы:**

- `CodeSectionVariant` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/information/type/struct';
import ... from '$stylist/development/class/style-manager/code-section';
import ... from '$stylist/development/svelte/molecule/code-editor-legacy/index.svelte';
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `development/type/enum/code-section-variant/index.ts`

```typescript
// Extracted from: lib/development/svelte/molecule/code-section/index.svelte:8
export type CodeSectionVariant = 'default' | 'terminal' | 'diff';
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/development/svelte/molecule/code-section/index.svelte` |
| **Строка** | 10 |
| **Целевой путь** | `development/type/struct/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = {
    /**
     * Title for the code section
     */
    title?: string;
    /**
     * Language for syntax highlighting
     */
    language?: string; // Using string instead of CodeLanguage for simplicity
    /**
     * Code content to display
     */
    code: string;
    /**
     * Variant style
     */
    variant?: CodeSectionVariant;
    /**
     * Whether to show line numbers
     */
    showLineNumbers?: boolean;
    /**
     * Starting line number
     */
    startLineNumber?: number;
    /**
     * Whether to show copy button
     */
    showCopyButton?: boolean;
    /**
     * Custom copy success message
     */
    copySuccessMessage?: string;
    /**
     * Custom copy error message
     */
    copyErrorMessage?: string;
    /**
     * Optional tags to display
     */
    tags?: string[];
  } & InformationHTMLAttributes<HTMLElement>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Title` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Language` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Using` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `CodeLanguage` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Code` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Variant` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `CodeSectionVariant` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Whether` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Starting` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Whether` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Custom` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Custom` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Optional` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `InformationHTMLAttributes` → импортируется из `$stylist//...`
- `HTMLElement` → импортируется из `svelte/elements`

**Все импорты компонента:**

```typescript
import ... from '$stylist/information/type/struct';
import ... from '$stylist/development/class/style-manager/code-section';
import ... from '$stylist/development/svelte/molecule/code-editor-legacy/index.svelte';
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `development/type/struct/props/index.ts`

```typescript
// Extracted from: lib/development/svelte/molecule/code-section/index.svelte:10
export type Props = {
    /**
     * Title for the code section
     */
    title?: string;
    /**
     * Language for syntax highlighting
     */
    language?: string; // Using string instead of CodeLanguage for simplicity
    /**
     * Code content to display
     */
    code: string;
    /**
     * Variant style
     */
    variant?: CodeSectionVariant;
    /**
     * Whether to show line numbers
     */
    showLineNumbers?: boolean;
    /**
     * Starting line number
     */
    startLineNumber?: number;
    /**
     * Whether to show copy button
     */
    showCopyButton?: boolean;
    /**
     * Custom copy success message
     */
    copySuccessMessage?: string;
    /**
     * Custom copy error message
     */
    copyErrorMessage?: string;
    /**
     * Optional tags to display
     */
    tags?: string[];
  } & InformationHTMLAttributes<HTMLElement>;
```

---

### `CodeWithCopyVariant`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/development/svelte/molecule/code-with-copy/index.svelte` |
| **Строка** | 11 |
| **Целевой путь** | `development/type/enum/code-with-copy-variant/index.ts` |

#### 📝 Определение типа

```typescript
type CodeWithCopyVariant = 'default' | 'terminal' | 'diff';
```

#### 🔗 Зависимости

**Используемые типы:**

- `CodeWithCopyVariant` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/information/type/struct';
import ... from '$stylist';
import ... from 'svelte';
import ... from '$stylist/development/class/style-manager/code-with-copy';
```

#### 💡 Рекомендация по миграции

Создать файл: `development/type/enum/code-with-copy-variant/index.ts`

```typescript
// Extracted from: lib/development/svelte/molecule/code-with-copy/index.svelte:11
export type CodeWithCopyVariant = 'default' | 'terminal' | 'diff';
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/development/svelte/molecule/code-with-copy/index.svelte` |
| **Строка** | 13 |
| **Целевой путь** | `development/type/struct/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = {
    /**
     * Language for syntax highlighting
     */
    language?: string;
    /**
     * Variant style
     */
    variant?: CodeWithCopyVariant;
    /**
     * Whether to show line numbers
     */
    showLineNumbers?: boolean;
    /**
     * Starting line number
     */
    startLineNumber?: number;
    /**
     * Custom copy success message
     */
    copySuccessMessage?: string;
    /**
     * Custom copy error message
     */
    copyErrorMessage?: string;
    /**
     * Content to render inside the component
     */
    children: import('svelte').Snippet;
  } & InformationHTMLAttributes<HTMLElement>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Language` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Variant` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `CodeWithCopyVariant` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Whether` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Starting` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Custom` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Custom` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Content` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Snippet` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `InformationHTMLAttributes` → импортируется из `$stylist//...`
- `HTMLElement` → импортируется из `svelte/elements`

**Все импорты компонента:**

```typescript
import ... from '$stylist/information/type/struct';
import ... from '$stylist';
import ... from 'svelte';
import ... from '$stylist/development/class/style-manager/code-with-copy';
```

#### 💡 Рекомендация по миграции

Создать файл: `development/type/struct/props/index.ts`

```typescript
// Extracted from: lib/development/svelte/molecule/code-with-copy/index.svelte:13
export type Props = {
    /**
     * Language for syntax highlighting
     */
    language?: string;
    /**
     * Variant style
     */
    variant?: CodeWithCopyVariant;
    /**
     * Whether to show line numbers
     */
    showLineNumbers?: boolean;
    /**
     * Starting line number
     */
    startLineNumber?: number;
    /**
     * Custom copy success message
     */
    copySuccessMessage?: string;
    /**
     * Custom copy error message
     */
    copyErrorMessage?: string;
    /**
     * Content to render inside the component
     */
    children: import('svelte').Snippet;
  } & InformationHTMLAttributes<HTMLElement>;
```

---

### `RestProps`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/development/svelte/molecule/copyable-code-block/index.svelte` |
| **Строка** | 11 |
| **Целевой путь** | `development/type/struct/rest-props/index.ts` |

#### 📝 Определение типа

```typescript
type RestProps = Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `RestProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `InformationHTMLAttributes` → импортируется из `$stylist//...`
- `HTMLDivElement` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '../code-block/index.svelte';
import ... from '$stylist/information/type/struct';
```

#### 💡 Рекомендация по миграции

Создать файл: `development/type/struct/rest-props/index.ts`

```typescript
// Extracted from: lib/development/svelte/molecule/copyable-code-block/index.svelte:11
export type RestProps = Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'>;
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/development/svelte/molecule/copyable-code-block/index.svelte` |
| **Строка** | 13 |
| **Целевой путь** | `development/type/struct/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = RestProps & {
    code?: string;
    language?: string;
    title?: string;
    class?: string;
    contentClass?: string;
    headerClass?: string;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `RestProps` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '../code-block/index.svelte';
import ... from '$stylist/information/type/struct';
```

#### 💡 Рекомендация по миграции

Создать файл: `development/type/struct/props/index.ts`

```typescript
// Extracted from: lib/development/svelte/molecule/copyable-code-block/index.svelte:13
export type Props = RestProps & {
    code?: string;
    language?: string;
    title?: string;
    class?: string;
    contentClass?: string;
    headerClass?: string;
  };
```

---

### `DocumentationBlockVariant`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/development/svelte/molecule/documentation-block/index.svelte` |
| **Строка** | 9 |
| **Целевой путь** | `development/type/enum/documentation-block-variant/index.ts` |

#### 📝 Определение типа

```typescript
type DocumentationBlockVariant = 'default' | 'info' | 'warning' | 'success' | 'danger';
```

#### 🔗 Зависимости

**Используемые типы:**

- `DocumentationBlockVariant` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/information/type/struct';
import ... from '$stylist/development/class/style-manager/documentation-block';
import ... from '$stylist/development/svelte/molecule/code-section/index.svelte';
import ... from '$stylist';
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `development/type/enum/documentation-block-variant/index.ts`

```typescript
// Extracted from: lib/development/svelte/molecule/documentation-block/index.svelte:9
export type DocumentationBlockVariant = 'default' | 'info' | 'warning' | 'success' | 'danger';
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/development/svelte/molecule/documentation-block/index.svelte` |
| **Строка** | 11 |
| **Целевой путь** | `development/type/struct/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = {
    /**
     * Title for the documentation block
     */
    title?: string;
    /**
     * Content of the documentation block
     */
    content: string;
    /**
     * Variant style
     */
    variant?: DocumentationBlockVariant;
    /**
     * List of code examples
     */
    codeExamples?: {
      title?: string;
      code: string;
      language?: string; // Using string instead of CodeLanguage for simplicity
      showLineNumbers?: boolean;
    }[];
    /**
     * Optional tags to display
     */
    tags?: string[];
  } & InformationHTMLAttributes<HTMLElement>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Title` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Content` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Variant` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `DocumentationBlockVariant` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `List` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Using` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `CodeLanguage` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Optional` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `InformationHTMLAttributes` → импортируется из `$stylist//...`
- `HTMLElement` → импортируется из `svelte/elements`

**Все импорты компонента:**

```typescript
import ... from '$stylist/information/type/struct';
import ... from '$stylist/development/class/style-manager/documentation-block';
import ... from '$stylist/development/svelte/molecule/code-section/index.svelte';
import ... from '$stylist';
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `development/type/struct/props/index.ts`

```typescript
// Extracted from: lib/development/svelte/molecule/documentation-block/index.svelte:11
export type Props = {
    /**
     * Title for the documentation block
     */
    title?: string;
    /**
     * Content of the documentation block
     */
    content: string;
    /**
     * Variant style
     */
    variant?: DocumentationBlockVariant;
    /**
     * List of code examples
     */
    codeExamples?: {
      title?: string;
      code: string;
      language?: string; // Using string instead of CodeLanguage for simplicity
      showLineNumbers?: boolean;
    }[];
    /**
     * Optional tags to display
     */
    tags?: string[];
  } & InformationHTMLAttributes<HTMLElement>;
```

---

### `AtomicPrinciplesProps`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/development/svelte/organism/atomic-principles-showcase/index.svelte` |
| **Строка** | 12 |
| **Целевой путь** | `development/type/struct/atomic-principles-props/index.ts` |

#### 📝 Определение типа

```typescript
type AtomicPrinciplesProps = AtomicPrinciplesRecipe & InformationHTMLAttributes<HTMLElement>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `AtomicPrinciplesProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `AtomicPrinciplesRecipe` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `InformationHTMLAttributes` → импортируется из `$stylist//...`
- `HTMLElement` → импортируется из `svelte/elements`

**Все импорты компонента:**

```typescript
import ... from '$stylist';
import ... from '$stylist/information/type/struct';
import ... from '$stylist/information/interface/recipe/atomic-principles';
```

#### 💡 Рекомендация по миграции

Создать файл: `development/type/struct/atomic-principles-props/index.ts`

```typescript
// Extracted from: lib/development/svelte/organism/atomic-principles-showcase/index.svelte:12
export type AtomicPrinciplesProps = AtomicPrinciplesRecipe & InformationHTMLAttributes<HTMLElement>;
```

---

### `ComponentStats`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/development/svelte/organism/component-library-stats/index.svelte` |
| **Строка** | 6 |
| **Целевой путь** | `development/type/struct/component-stats/index.ts` |

#### 📝 Определение типа

```typescript
type ComponentStats = {
    totalComponents: number;
    atoms: number;
    molecules: number;
    organisms: number;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `ComponentStats` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from 'svelte';
import ... from '$stylist/information/type/struct';
```

#### 💡 Рекомендация по миграции

Создать файл: `development/type/struct/component-stats/index.ts`

```typescript
// Extracted from: lib/development/svelte/organism/component-library-stats/index.svelte:6
export type ComponentStats = {
    totalComponents: number;
    atoms: number;
    molecules: number;
    organisms: number;
  };
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/development/svelte/organism/component-library-stats/index.svelte` |
| **Строка** | 13 |
| **Целевой путь** | `development/type/struct/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = {
    stats: ComponentStats;
    sectionId?: string;
    animateOnVisible?: boolean;
    durationMs?: number;
    steps?: number;
    class?: string;
  } & InformationHTMLAttributes<HTMLDivElement>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `ComponentStats` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `InformationHTMLAttributes` → импортируется из `$stylist//...`
- `HTMLDivElement` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from 'svelte';
import ... from '$stylist/information/type/struct';
```

#### 💡 Рекомендация по миграции

Создать файл: `development/type/struct/props/index.ts`

```typescript
// Extracted from: lib/development/svelte/organism/component-library-stats/index.svelte:13
export type Props = {
    stats: ComponentStats;
    sectionId?: string;
    animateOnVisible?: boolean;
    durationMs?: number;
    steps?: number;
    class?: string;
  } & InformationHTMLAttributes<HTMLDivElement>;
```

---

### `LogLevel`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/development/svelte/organism/debug-console/index.svelte` |
| **Строка** | 14 |
| **Целевой путь** | `development/type/enum/log-level/index.ts` |

#### 📝 Определение типа

```typescript
type LogLevel = 'log' | 'info' | 'warn' | 'error' | 'debug';
```

#### 🔗 Зависимости

**Используемые типы:**

- `LogLevel` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/interaction/type/struct/interaction';
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `development/type/enum/log-level/index.ts`

```typescript
// Extracted from: lib/development/svelte/organism/debug-console/index.svelte:14
export type LogLevel = 'log' | 'info' | 'warn' | 'error' | 'debug';
```

---

### `LogEntry`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/development/svelte/organism/debug-console/index.svelte` |
| **Строка** | 16 |
| **Целевой путь** | `development/type/struct/log-entry/index.ts` |

#### 📝 Определение типа

```typescript
type LogEntry = {
    id: string;
    timestamp: Date;
    level: LogLevel;
    message: string;
    data?: any;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `LogEntry` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Date` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `LogLevel` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/interaction/type/struct/interaction';
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `development/type/struct/log-entry/index.ts`

```typescript
// Extracted from: lib/development/svelte/organism/debug-console/index.svelte:16
export type LogEntry = {
    id: string;
    timestamp: Date;
    level: LogLevel;
    message: string;
    data?: any;
  };
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/development/svelte/organism/debug-console/index.svelte` |
| **Строка** | 24 |
| **Целевой путь** | `development/type/struct/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = {
    logs?: LogEntry[];
    title?: string;
    showTimestamps?: boolean;
    showLogLevel?: boolean;
    maxHeight?: string;
    allowClear?: boolean;
    allowFilter?: boolean;
    initialLogLevelFilter?: LogLevel[];
    onClear?: () => void;
    onLog?: (entry: LogEntry) => void;
    class?: string;
    headerClass?: string;
    consoleClass?: string;
    entryClass?: string;
    footerClass?: string;
  } & InteractionHTMLAttributes<HTMLDivElement>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `LogEntry` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `LogLevel` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `LogEntry` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `InteractionHTMLAttributes` → импортируется из `$stylist//...`
- `HTMLDivElement` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/interaction/type/struct/interaction';
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `development/type/struct/props/index.ts`

```typescript
// Extracted from: lib/development/svelte/organism/debug-console/index.svelte:24
export type Props = {
    logs?: LogEntry[];
    title?: string;
    showTimestamps?: boolean;
    showLogLevel?: boolean;
    maxHeight?: string;
    allowClear?: boolean;
    allowFilter?: boolean;
    initialLogLevelFilter?: LogLevel[];
    onClear?: () => void;
    onLog?: (entry: LogEntry) => void;
    class?: string;
    headerClass?: string;
    consoleClass?: string;
    entryClass?: string;
    footerClass?: string;
  } & InteractionHTMLAttributes<HTMLDivElement>;
```

---

### `Theme`

| Параметр | Значение |
|---|---|
| **Категория** | unknown |
| **Компонент** | `lib/development/svelte/organism/design-tokens/index.svelte` |
| **Строка** | 7 |
| **Целевой путь** | `development/type/unknown/theme/index.ts` |

#### 📝 Определение типа

```typescript
type Theme = typeof THEME_MODE_LIGHT;
```

#### 🔗 Зависимости

**Используемые типы:**

- `Theme` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `THEME_MODE_LIGHT` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/theme/const/map/theme-mode-dark';
import ... from '$stylist/theme/const/map/theme-mode-light';
import ... from 'svelte';
```

#### 💡 Рекомендация по миграции

Создать файл: `development/type/unknown/theme/index.ts`

```typescript
// Extracted from: lib/development/svelte/organism/design-tokens/index.svelte:7
export type Theme = typeof THEME_MODE_LIGHT;
```

---

### `ErrorInfo`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/development/svelte/organism/development-error-boundary/index.svelte` |
| **Строка** | 13 |
| **Целевой путь** | `development/type/struct/error-info/index.ts` |

#### 📝 Определение типа

```typescript
type ErrorInfo = {
    error: Error;
    errorInfo: { componentStack: string };
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `ErrorInfo` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Error` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/interaction/type/struct/interaction';
import ... from '$stylist';
import ... from 'svelte';
```

#### 💡 Рекомендация по миграции

Создать файл: `development/type/struct/error-info/index.ts`

```typescript
// Extracted from: lib/development/svelte/organism/development-error-boundary/index.svelte:13
export type ErrorInfo = {
    error: Error;
    errorInfo: { componentStack: string };
  };
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/development/svelte/organism/development-error-boundary/index.svelte` |
| **Строка** | 18 |
| **Целевой путь** | `development/type/struct/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = {
    fallback?: (errorInfo: ErrorInfo) => HTMLElement;
    onError?: (error: Error, errorInfo: { componentStack: string }) => void;
    showDetails?: boolean;
    showReload?: boolean;
    showCopyError?: boolean;
    showReportIssue?: boolean;
    reportUrl?: string;
    title?: string;
    message?: string;
    class?: string;
    fallbackClass?: string;
    headerClass?: string;
    detailsClass?: string;
    actionsClass?: string;
    children?: Snippet;
  } & InteractionHTMLAttributes<HTMLDivElement>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `ErrorInfo` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `HTMLElement` → импортируется из `svelte/elements`
- `Error` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Snippet` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `InteractionHTMLAttributes` → импортируется из `$stylist//...`
- `HTMLDivElement` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/interaction/type/struct/interaction';
import ... from '$stylist';
import ... from 'svelte';
```

#### 💡 Рекомендация по миграции

Создать файл: `development/type/struct/props/index.ts`

```typescript
// Extracted from: lib/development/svelte/organism/development-error-boundary/index.svelte:18
export type Props = {
    fallback?: (errorInfo: ErrorInfo) => HTMLElement;
    onError?: (error: Error, errorInfo: { componentStack: string }) => void;
    showDetails?: boolean;
    showReload?: boolean;
    showCopyError?: boolean;
    showReportIssue?: boolean;
    reportUrl?: string;
    title?: string;
    message?: string;
    class?: string;
    fallbackClass?: string;
    headerClass?: string;
    detailsClass?: string;
    actionsClass?: string;
    children?: Snippet;
  } & InteractionHTMLAttributes<HTMLDivElement>;
```

---

### `MockDataSchema`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/development/svelte/organism/mock-data-selector/index.svelte` |
| **Строка** | 13 |
| **Целевой путь** | `development/type/enum/mock-data-schema/index.ts` |

#### 📝 Определение типа

```typescript
type MockDataSchema = {
    id: string;
    name: string;
    description: string;
    fields: Array<{
      name: string;
      type: 'string' | 'number' | 'boolean' | 'date' | 'email' | 'id';
      required: boolean;
      example?: string;
    }>;
    sampleData: any[];
    tags: string[];
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `MockDataSchema` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/interaction/type/struct/interaction';
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `development/type/enum/mock-data-schema/index.ts`

```typescript
// Extracted from: lib/development/svelte/organism/mock-data-selector/index.svelte:13
export type MockDataSchema = {
    id: string;
    name: string;
    description: string;
    fields: Array<{
      name: string;
      type: 'string' | 'number' | 'boolean' | 'date' | 'email' | 'id';
      required: boolean;
      example?: string;
    }>;
    sampleData: any[];
    tags: string[];
  };
```

---

### `DataSelection`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/development/svelte/organism/mock-data-selector/index.svelte` |
| **Строка** | 27 |
| **Целевой путь** | `development/type/struct/data-selection/index.ts` |

#### 📝 Определение типа

```typescript
type DataSelection = {
    schemaId: string;
    count: number;
    selectedFields?: string[]; // If undefined, all fields are included
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `DataSelection` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `If` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/interaction/type/struct/interaction';
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `development/type/struct/data-selection/index.ts`

```typescript
// Extracted from: lib/development/svelte/organism/mock-data-selector/index.svelte:27
export type DataSelection = {
    schemaId: string;
    count: number;
    selectedFields?: string[]; // If undefined, all fields are included
  };
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/development/svelte/organism/mock-data-selector/index.svelte` |
| **Строка** | 33 |
| **Целевой путь** | `development/type/struct/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = {
    schemas: MockDataSchema[];
    initialSelections?: DataSelection[];
    title?: string;
    description?: string;
    allowMultipleSelections?: boolean;
    allowFieldSelection?: boolean;
    allowCustomCount?: boolean;
    showSearch?: boolean;
    showTagsFilter?: boolean;
    onSelectionChange?: (selections: DataSelection[]) => void;
    onLoadMockData?: (selections: DataSelection[]) => void;
    class?: string;
    headerClass?: string;
    selectorClass?: string;
    previewClass?: string;
    footerClass?: string;
  } & InteractionHTMLAttributes<HTMLDivElement>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `MockDataSchema` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `DataSelection` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `DataSelection` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `DataSelection` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `InteractionHTMLAttributes` → импортируется из `$stylist//...`
- `HTMLDivElement` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/interaction/type/struct/interaction';
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `development/type/struct/props/index.ts`

```typescript
// Extracted from: lib/development/svelte/organism/mock-data-selector/index.svelte:33
export type Props = {
    schemas: MockDataSchema[];
    initialSelections?: DataSelection[];
    title?: string;
    description?: string;
    allowMultipleSelections?: boolean;
    allowFieldSelection?: boolean;
    allowCustomCount?: boolean;
    showSearch?: boolean;
    showTagsFilter?: boolean;
    onSelectionChange?: (selections: DataSelection[]) => void;
    onLoadMockData?: (selections: DataSelection[]) => void;
    class?: string;
    headerClass?: string;
    selectorClass?: string;
    previewClass?: string;
    footerClass?: string;
  } & InteractionHTMLAttributes<HTMLDivElement>;
```

---

### `AIProviderId`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/development/svelte/organism/playground-ai-assistant/index.svelte` |
| **Строка** | 12 |
| **Целевой путь** | `development/type/enum/a-i-provider-id/index.ts` |

#### 📝 Определение типа

```typescript
type AIProviderId = 'gemini' | 'qwen' | 'claude' | 'codex';
```

#### 🔗 Зависимости

**Используемые типы:**

- `AIProviderId` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist';
import ... from 'svelte';
```

#### 💡 Рекомендация по миграции

Создать файл: `development/type/enum/a-i-provider-id/index.ts`

```typescript
// Extracted from: lib/development/svelte/organism/playground-ai-assistant/index.svelte:12
export type AIProviderId = 'gemini' | 'qwen' | 'claude' | 'codex';
```

---

### `CreateAIClient`

| Параметр | Значение |
|---|---|
| **Категория** | unknown |
| **Компонент** | `lib/development/svelte/organism/playground-ai-assistant/index.svelte` |
| **Строка** | 30 |
| **Целевой путь** | `development/type/unknown/create-a-i-client/index.ts` |

#### 📝 Определение типа

```typescript
type CreateAIClient = (providerId: AIProviderId) => AIClientLike;
```

#### 🔗 Зависимости

**Используемые типы:**

- `CreateAIClient` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `AIProviderId` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `AIClientLike` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist';
import ... from 'svelte';
```

#### 💡 Рекомендация по миграции

Создать файл: `development/type/unknown/create-a-i-client/index.ts`

```typescript
// Extracted from: lib/development/svelte/organism/playground-ai-assistant/index.svelte:30
export type CreateAIClient = (providerId: AIProviderId) => AIClientLike;
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/development/svelte/organism/playground-animated-background/index.svelte` |
| **Строка** | 5 |
| **Целевой путь** | `development/type/struct/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = {
    children?: Snippet;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Snippet` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from 'svelte';
```

#### 💡 Рекомендация по миграции

Создать файл: `development/type/struct/props/index.ts`

```typescript
// Extracted from: lib/development/svelte/organism/playground-animated-background/index.svelte:5
export type Props = {
    children?: Snippet;
  };
```

---

### `ViewportSize`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/development/svelte/organism/playground-canvas-shell/index.svelte` |
| **Строка** | 7 |
| **Целевой путь** | `development/type/enum/viewport-size/index.ts` |

#### 📝 Определение типа

```typescript
type ViewportSize = 'mobile' | 'tablet' | 'desktop' | 'fullscreen';
```

#### 🔗 Зависимости

**Используемые типы:**

- `ViewportSize` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from 'svelte';
import ... from '../playground-device-frame/index.svelte';
import ... from '../playground-error-boundary/index.svelte';
```

#### 💡 Рекомендация по миграции

Создать файл: `development/type/enum/viewport-size/index.ts`

```typescript
// Extracted from: lib/development/svelte/organism/playground-canvas-shell/index.svelte:7
export type ViewportSize = 'mobile' | 'tablet' | 'desktop' | 'fullscreen';
```

---

### `BackgroundType`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/development/svelte/organism/playground-canvas-shell/index.svelte` |
| **Строка** | 8 |
| **Целевой путь** | `development/type/enum/background-type/index.ts` |

#### 📝 Определение типа

```typescript
type BackgroundType = 'white' | 'gray' | 'dark' | 'transparent';
```

#### 🔗 Зависимости

**Используемые типы:**

- `BackgroundType` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from 'svelte';
import ... from '../playground-device-frame/index.svelte';
import ... from '../playground-error-boundary/index.svelte';
```

#### 💡 Рекомендация по миграции

Создать файл: `development/type/enum/background-type/index.ts`

```typescript
// Extracted from: lib/development/svelte/organism/playground-canvas-shell/index.svelte:8
export type BackgroundType = 'white' | 'gray' | 'dark' | 'transparent';
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/development/svelte/organism/playground-code-viewer/index.svelte` |
| **Строка** | 6 |
| **Целевой путь** | `development/type/enum/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = {
    code?: string;
    componentName?: string;
    props?: Record<string, any>;
    language?: string;
    theme?: 'light' | 'dark' | 'github-light' | 'github-dark';
    onCopySuccess?: () => void;
    onCopyError?: (error: unknown) => void;
    onDownloadSuccess?: () => void;
    onDownloadError?: (error: unknown) => void;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from 'svelte';
import ... from '$stylist/development/function/script/build-component-preview-code';
```

#### 💡 Рекомендация по миграции

Создать файл: `development/type/enum/props/index.ts`

```typescript
// Extracted from: lib/development/svelte/organism/playground-code-viewer/index.svelte:6
export type Props = {
    code?: string;
    componentName?: string;
    props?: Record<string, any>;
    language?: string;
    theme?: 'light' | 'dark' | 'github-light' | 'github-dark';
    onCopySuccess?: () => void;
    onCopyError?: (error: unknown) => void;
    onDownloadSuccess?: () => void;
    onDownloadError?: (error: unknown) => void;
  };
```

---

### `ViewMode`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/development/svelte/organism/playground-component-catalog/index.svelte` |
| **Строка** | 18 |
| **Целевой путь** | `development/type/enum/view-mode/index.ts` |

#### 📝 Определение типа

```typescript
export type ViewMode = 'grid' | 'list';
```

#### 🔗 Зависимости

**Используемые типы:**

- `ViewMode` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `development/type/enum/view-mode/index.ts`

```typescript
// Extracted from: lib/development/svelte/organism/playground-component-catalog/index.svelte:18
export type ViewMode = 'grid' | 'list';
```

---

### `SortBy`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/development/svelte/organism/playground-component-catalog/index.svelte` |
| **Строка** | 19 |
| **Целевой путь** | `development/type/enum/sort-by/index.ts` |

#### 📝 Определение типа

```typescript
export type SortBy = 'name' | 'category' | 'recent';
```

#### 🔗 Зависимости

**Используемые типы:**

- `SortBy` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `development/type/enum/sort-by/index.ts`

```typescript
// Extracted from: lib/development/svelte/organism/playground-component-catalog/index.svelte:19
export type SortBy = 'name' | 'category' | 'recent';
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/development/svelte/organism/playground-component-catalog/index.svelte` |
| **Строка** | 33 |
| **Целевой путь** | `development/type/struct/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = {
    stories: ComponentCatalogStory[];
    categories: string[];
    categoryCounts: Record<string, number>;
    tags: string[];
    searchQuery: string;
    selectedCategories: Set<string>;
    selectedTags: Set<string>;
    viewMode: ViewMode;
    sortBy: SortBy;
    showFilters: boolean;
    stats: ComponentCatalogStats;
    onSearchQueryChange: (value: string) => void;
    onToggleCategory: (category: string) => void;
    onToggleTag: (tag: string) => void;
    onViewModeChange: (mode: ViewMode) => void;
    onSortByChange: (sortBy: SortBy) => void;
    onToggleFilters: () => void;
    onClearFilters: () => void;
    onOpenStory: (storyId: string) => void;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `ComponentCatalogStory` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Set` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Set` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `ViewMode` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `SortBy` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `ComponentCatalogStats` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `ViewMode` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `SortBy` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `development/type/struct/props/index.ts`

```typescript
// Extracted from: lib/development/svelte/organism/playground-component-catalog/index.svelte:33
export type Props = {
    stories: ComponentCatalogStory[];
    categories: string[];
    categoryCounts: Record<string, number>;
    tags: string[];
    searchQuery: string;
    selectedCategories: Set<string>;
    selectedTags: Set<string>;
    viewMode: ViewMode;
    sortBy: SortBy;
    showFilters: boolean;
    stats: ComponentCatalogStats;
    onSearchQueryChange: (value: string) => void;
    onToggleCategory: (category: string) => void;
    onToggleTag: (tag: string) => void;
    onViewModeChange: (mode: ViewMode) => void;
    onSortByChange: (sortBy: SortBy) => void;
    onToggleFilters: () => void;
    onClearFilters: () => void;
    onOpenStory: (storyId: string) => void;
  };
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/development/svelte/organism/playground-cta-buttons/index.svelte` |
| **Строка** | 10 |
| **Целевой путь** | `development/type/struct/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = {
    totalComponents: number;
    componentsHref?: string;
    playgroundHref?: string;
    componentsTitle?: string;
    componentsDescriptionPrefix?: string;
    playgroundTitle?: string;
    playgroundDescription?: string;
    class?: string;
  } & InformationHTMLAttributes<HTMLDivElement>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `InformationHTMLAttributes` → импортируется из `$stylist//...`
- `HTMLDivElement` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist';
import ... from '$stylist/information/type/struct';
```

#### 💡 Рекомендация по миграции

Создать файл: `development/type/struct/props/index.ts`

```typescript
// Extracted from: lib/development/svelte/organism/playground-cta-buttons/index.svelte:10
export type Props = {
    totalComponents: number;
    componentsHref?: string;
    playgroundHref?: string;
    componentsTitle?: string;
    componentsDescriptionPrefix?: string;
    playgroundTitle?: string;
    playgroundDescription?: string;
    class?: string;
  } & InformationHTMLAttributes<HTMLDivElement>;
```

---

### `ViewportSize`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/development/svelte/organism/playground-device-frame/index.svelte` |
| **Строка** | 5 |
| **Целевой путь** | `development/type/enum/viewport-size/index.ts` |

#### 📝 Определение типа

```typescript
type ViewportSize = 'mobile' | 'tablet' | 'desktop' | 'fullscreen';
```

#### 🔗 Зависимости

**Используемые типы:**

- `ViewportSize` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from 'svelte';
```

#### 💡 Рекомендация по миграции

Создать файл: `development/type/enum/viewport-size/index.ts`

```typescript
// Extracted from: lib/development/svelte/organism/playground-device-frame/index.svelte:5
export type ViewportSize = 'mobile' | 'tablet' | 'desktop' | 'fullscreen';
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/development/svelte/organism/playground-error-boundary/index.svelte` |
| **Строка** | 6 |
| **Целевой путь** | `development/type/enum/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = {
    component: ComponentType | null | undefined;
    props?: Record<string, any>;
    children?: Snippet;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `ComponentType` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Snippet` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from 'svelte';
import ... from 'svelte';
```

#### 💡 Рекомендация по миграции

Создать файл: `development/type/enum/props/index.ts`

```typescript
// Extracted from: lib/development/svelte/organism/playground-error-boundary/index.svelte:6
export type Props = {
    component: ComponentType | null | undefined;
    props?: Record<string, any>;
    children?: Snippet;
  };
```

---

### `FeatureCard`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/development/svelte/organism/playground-feature-grid/index.svelte` |
| **Строка** | 13 |
| **Целевой путь** | `development/type/enum/feature-card/index.ts` |

#### 📝 Определение типа

```typescript
type FeatureCard = {
    title: string;
    description: string;
    palette: string;
    iconBg: string;
    icon: 'sparkles' | 'zap' | 'git-branch' | 'code' | 'layers' | 'users';
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `FeatureCard` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist';
import ... from '$stylist/information/type/struct';
```

#### 💡 Рекомендация по миграции

Создать файл: `development/type/enum/feature-card/index.ts`

```typescript
// Extracted from: lib/development/svelte/organism/playground-feature-grid/index.svelte:13
export type FeatureCard = {
    title: string;
    description: string;
    palette: string;
    iconBg: string;
    icon: 'sparkles' | 'zap' | 'git-branch' | 'code' | 'layers' | 'users';
  };
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/development/svelte/organism/playground-feature-grid/index.svelte` |
| **Строка** | 21 |
| **Целевой путь** | `development/type/struct/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = {
    title?: string;
    subtitle?: string;
    features?: FeatureCard[];
    class?: string;
  } & InformationHTMLAttributes<HTMLElement>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `FeatureCard` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `InformationHTMLAttributes` → импортируется из `$stylist//...`
- `HTMLElement` → импортируется из `svelte/elements`

**Все импорты компонента:**

```typescript
import ... from '$stylist';
import ... from '$stylist/information/type/struct';
```

#### 💡 Рекомендация по миграции

Создать файл: `development/type/struct/props/index.ts`

```typescript
// Extracted from: lib/development/svelte/organism/playground-feature-grid/index.svelte:21
export type Props = {
    title?: string;
    subtitle?: string;
    features?: FeatureCard[];
    class?: string;
  } & InformationHTMLAttributes<HTMLElement>;
```

---

### `AIModel`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/development/svelte/organism/playground-hero/index.svelte` |
| **Строка** | 11 |
| **Целевой путь** | `development/type/struct/a-i-model/index.ts` |

#### 📝 Определение типа

```typescript
type AIModel = {
    name: string;
    url: string;
    logo: string;
    bgColor: string;
    description: string;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `AIModel` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist';
import ... from '$stylist/information/type/struct';
```

#### 💡 Рекомендация по миграции

Создать файл: `development/type/struct/a-i-model/index.ts`

```typescript
// Extracted from: lib/development/svelte/organism/playground-hero/index.svelte:11
export type AIModel = {
    name: string;
    url: string;
    logo: string;
    bgColor: string;
    description: string;
  };
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/development/svelte/organism/playground-hero/index.svelte` |
| **Строка** | 19 |
| **Целевой путь** | `development/type/struct/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = {
    title?: string;
    subtitle?: string;
    description?: string;
    badgeLabel?: string;
    badgeHref?: string;
    poweredByLabel?: string;
    aiModels?: AIModel[];
    class?: string;
  } & InformationHTMLAttributes<HTMLDivElement>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `AIModel` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `InformationHTMLAttributes` → импортируется из `$stylist//...`
- `HTMLDivElement` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist';
import ... from '$stylist/information/type/struct';
```

#### 💡 Рекомендация по миграции

Создать файл: `development/type/struct/props/index.ts`

```typescript
// Extracted from: lib/development/svelte/organism/playground-hero/index.svelte:19
export type Props = {
    title?: string;
    subtitle?: string;
    description?: string;
    badgeLabel?: string;
    badgeHref?: string;
    poweredByLabel?: string;
    aiModels?: AIModel[];
    class?: string;
  } & InformationHTMLAttributes<HTMLDivElement>;
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/development/svelte/organism/playground-live-code-section/index.svelte` |
| **Строка** | 10 |
| **Целевой путь** | `development/type/struct/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = {
    badgeText?: string;
    title?: string;
    description?: string;
    code?: string;
    ctaText?: string;
    ctaHref?: string;
    class?: string;
    children?: Snippet;
  } & InformationHTMLAttributes<HTMLElement>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Snippet` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `InformationHTMLAttributes` → импортируется из `$stylist//...`
- `HTMLElement` → импортируется из `svelte/elements`

**Все импорты компонента:**

```typescript
import ... from '$stylist';
import ... from 'svelte';
import ... from '$stylist/information/type/struct';
```

#### 💡 Рекомендация по миграции

Создать файл: `development/type/struct/props/index.ts`

```typescript
// Extracted from: lib/development/svelte/organism/playground-live-code-section/index.svelte:10
export type Props = {
    badgeText?: string;
    title?: string;
    description?: string;
    code?: string;
    ctaText?: string;
    ctaHref?: string;
    class?: string;
    children?: Snippet;
  } & InformationHTMLAttributes<HTMLElement>;
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/development/svelte/organism/playground-markdown-renderer/index.svelte` |
| **Строка** | 6 |
| **Целевой путь** | `development/type/struct/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = {
    content: string;
    class?: string;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from 'marked';
import ... from 'svelte';
```

#### 💡 Рекомендация по миграции

Создать файл: `development/type/struct/props/index.ts`

```typescript
// Extracted from: lib/development/svelte/organism/playground-markdown-renderer/index.svelte:6
export type Props = {
    content: string;
    class?: string;
  };
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/development/svelte/organism/playground-mission-banner/index.svelte` |
| **Строка** | 8 |
| **Целевой путь** | `development/type/struct/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = {
    badgeText?: string;
    title?: string;
    description?: string;
    primaryLabel?: string;
    primaryHref?: string;
    secondaryLabel?: string;
    secondaryHref?: string;
    class?: string;
  } & InformationHTMLAttributes<HTMLElement>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `InformationHTMLAttributes` → импортируется из `$stylist//...`
- `HTMLElement` → импортируется из `svelte/elements`

**Все импорты компонента:**

```typescript
import ... from '$stylist';
import ... from '$stylist/information/type/struct';
```

#### 💡 Рекомендация по миграции

Создать файл: `development/type/struct/props/index.ts`

```typescript
// Extracted from: lib/development/svelte/organism/playground-mission-banner/index.svelte:8
export type Props = {
    badgeText?: string;
    title?: string;
    description?: string;
    primaryLabel?: string;
    primaryHref?: string;
    secondaryLabel?: string;
    secondaryHref?: string;
    class?: string;
  } & InformationHTMLAttributes<HTMLElement>;
```

---

### `ViewportSize`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/development/svelte/organism/playground-shell-header/index.svelte` |
| **Строка** | 18 |
| **Целевой путь** | `development/type/enum/viewport-size/index.ts` |

#### 📝 Определение типа

```typescript
type ViewportSize = 'mobile' | 'tablet' | 'desktop' | 'fullscreen';
```

#### 🔗 Зависимости

**Используемые типы:**

- `ViewportSize` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist';
import ... from '$stylist/information/type/struct';
```

#### 💡 Рекомендация по миграции

Создать файл: `development/type/enum/viewport-size/index.ts`

```typescript
// Extracted from: lib/development/svelte/organism/playground-shell-header/index.svelte:18
export type ViewportSize = 'mobile' | 'tablet' | 'desktop' | 'fullscreen';
```

---

### `ColorScheme`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/development/svelte/organism/playground-shell-header/index.svelte` |
| **Строка** | 20 |
| **Целевой путь** | `development/type/struct/color-scheme/index.ts` |

#### 📝 Определение типа

```typescript
type ColorScheme = {
    id: string;
    name: string;
    accent: string;
    accentStrong: string;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `ColorScheme` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist';
import ... from '$stylist/information/type/struct';
```

#### 💡 Рекомендация по миграции

Создать файл: `development/type/struct/color-scheme/index.ts`

```typescript
// Extracted from: lib/development/svelte/organism/playground-shell-header/index.svelte:20
export type ColorScheme = {
    id: string;
    name: string;
    accent: string;
    accentStrong: string;
  };
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/development/svelte/organism/playground-shell-header/index.svelte` |
| **Строка** | 27 |
| **Целевой путь** | `development/type/struct/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = {
    showComponentTree?: boolean;
    showAIPanel?: boolean;
    drawingMode?: boolean;
    drawColor?: string;
    currentViewport?: ViewportSize;
    showDeviceFrame?: boolean;
    showGrid?: boolean;
    zoom?: number;
    darkMode?: boolean;
    colorSchemes?: ColorScheme[];
    activeColorScheme?: ColorScheme;
    onToggleComponentTree?: () => void;
    onToggleAIPanel?: () => void;
    onToggleDrawingMode?: () => void;
    onTakeScreenshot?: () => void;
    onChangeDrawColor?: (color: string) => void;
    onSetViewport?: (id: ViewportSize) => void;
    onToggleDeviceFrame?: () => void;
    onZoomOut?: () => void;
    onZoomIn?: () => void;
    onToggleGrid?: () => void;
    onToggleDarkMode?: () => void;
    onSetColorScheme?: (id: string) => void;
    class?: string;
  } & InformationHTMLAttributes<HTMLDivElement>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `ViewportSize` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `ColorScheme` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `ColorScheme` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `ViewportSize` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `InformationHTMLAttributes` → импортируется из `$stylist//...`
- `HTMLDivElement` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist';
import ... from '$stylist/information/type/struct';
```

#### 💡 Рекомендация по миграции

Создать файл: `development/type/struct/props/index.ts`

```typescript
// Extracted from: lib/development/svelte/organism/playground-shell-header/index.svelte:27
export type Props = {
    showComponentTree?: boolean;
    showAIPanel?: boolean;
    drawingMode?: boolean;
    drawColor?: string;
    currentViewport?: ViewportSize;
    showDeviceFrame?: boolean;
    showGrid?: boolean;
    zoom?: number;
    darkMode?: boolean;
    colorSchemes?: ColorScheme[];
    activeColorScheme?: ColorScheme;
    onToggleComponentTree?: () => void;
    onToggleAIPanel?: () => void;
    onToggleDrawingMode?: () => void;
    onTakeScreenshot?: () => void;
    onChangeDrawColor?: (color: string) => void;
    onSetViewport?: (id: ViewportSize) => void;
    onToggleDeviceFrame?: () => void;
    onZoomOut?: () => void;
    onZoomIn?: () => void;
    onToggleGrid?: () => void;
    onToggleDarkMode?: () => void;
    onSetColorScheme?: (id: string) => void;
    class?: string;
  } & InformationHTMLAttributes<HTMLDivElement>;
```

---

### `ViewportChoice`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/development/svelte/organism/playground-shell-header/index.svelte` |
| **Строка** | 82 |
| **Целевой путь** | `development/type/struct/viewport-choice/index.ts` |

#### 📝 Определение типа

```typescript
type ViewportChoice = {
    id: ViewportSize;
    label: string;
    description: string;
    icon: string;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `ViewportChoice` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `ViewportSize` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist';
import ... from '$stylist/information/type/struct';
```

#### 💡 Рекомендация по миграции

Создать файл: `development/type/struct/viewport-choice/index.ts`

```typescript
// Extracted from: lib/development/svelte/organism/playground-shell-header/index.svelte:82
export type ViewportChoice = {
    id: ViewportSize;
    label: string;
    description: string;
    icon: string;
  };
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/development/svelte/organism/playground-toast/index.svelte` |
| **Строка** | 8 |
| **Целевой путь** | `development/type/struct/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = {
    message: string;
    duration?: number;
    onClose?: () => void;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist';
import ... from 'svelte';
```

#### 💡 Рекомендация по миграции

Создать файл: `development/type/struct/props/index.ts`

```typescript
// Extracted from: lib/development/svelte/organism/playground-toast/index.svelte:8
export type Props = {
    message: string;
    duration?: number;
    onClose?: () => void;
  };
```

---

### `ResourceType`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/development/svelte/organism/resource-optimizer/index.svelte` |
| **Строка** | 15 |
| **Целевой путь** | `development/type/enum/resource-type/index.ts` |

#### 📝 Определение типа

```typescript
type ResourceType = 'image' | 'script' | 'stylesheet' | 'font' | 'api' | 'other';
```

#### 🔗 Зависимости

**Используемые типы:**

- `ResourceType` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/information/type/struct';
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `development/type/enum/resource-type/index.ts`

```typescript
// Extracted from: lib/development/svelte/organism/resource-optimizer/index.svelte:15
export type ResourceType = 'image' | 'script' | 'stylesheet' | 'font' | 'api' | 'other';
```

---

### `Resource`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/development/svelte/organism/resource-optimizer/index.svelte` |
| **Строка** | 17 |
| **Целевой путь** | `development/type/enum/resource/index.ts` |

#### 📝 Определение типа

```typescript
type Resource = {
    id: string;
    name: string;
    url: string;
    type: ResourceType;
    size: number; // in bytes
    transferSize?: number; // compressed size in bytes
    loadTime?: number; // in milliseconds
    status: 'loading' | 'loaded' | 'error' | 'cached';
    priority: 'high' | 'normal' | 'low';
    isOptimized: boolean;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `Resource` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `ResourceType` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/information/type/struct';
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `development/type/enum/resource/index.ts`

```typescript
// Extracted from: lib/development/svelte/organism/resource-optimizer/index.svelte:17
export type Resource = {
    id: string;
    name: string;
    url: string;
    type: ResourceType;
    size: number; // in bytes
    transferSize?: number; // compressed size in bytes
    loadTime?: number; // in milliseconds
    status: 'loading' | 'loaded' | 'error' | 'cached';
    priority: 'high' | 'normal' | 'low';
    isOptimized: boolean;
  };
```

---

### `OptimizationSuggestion`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/development/svelte/organism/resource-optimizer/index.svelte` |
| **Строка** | 30 |
| **Целевой путь** | `development/type/enum/optimization-suggestion/index.ts` |

#### 📝 Определение типа

```typescript
type OptimizationSuggestion = {
    id: string;
    resourceId: string;
    type: 'compress' | 'resize' | 'cache' | 'preload' | 'lazy-load' | 'cdn';
    description: string;
    estimatedSavings: number; // in bytes or percentage
    implementationEffort: 'low' | 'medium' | 'high';
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `OptimizationSuggestion` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/information/type/struct';
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `development/type/enum/optimization-suggestion/index.ts`

```typescript
// Extracted from: lib/development/svelte/organism/resource-optimizer/index.svelte:30
export type OptimizationSuggestion = {
    id: string;
    resourceId: string;
    type: 'compress' | 'resize' | 'cache' | 'preload' | 'lazy-load' | 'cdn';
    description: string;
    estimatedSavings: number; // in bytes or percentage
    implementationEffort: 'low' | 'medium' | 'high';
  };
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/development/svelte/organism/resource-optimizer/index.svelte` |
| **Строка** | 39 |
| **Целевой путь** | `development/type/struct/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = {
    resources: Resource[];
    suggestions?: OptimizationSuggestion[];
    showResourceDetails?: boolean;
    showOptimizationSuggestions?: boolean;
    showPrioritization?: boolean;
    showSizeComparison?: boolean;
    onResourceOptimize?: (resourceId: string) => void;
    onApplySuggestions?: () => void;
    title?: string;
    description?: string;
    class?: string;
    headerClass?: string;
    resourceClass?: string;
    suggestionClass?: string;
    footerClass?: string;
  } & InformationHTMLAttributes<HTMLDivElement>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Resource` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `OptimizationSuggestion` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `InformationHTMLAttributes` → импортируется из `$stylist//...`
- `HTMLDivElement` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/information/type/struct';
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `development/type/struct/props/index.ts`

```typescript
// Extracted from: lib/development/svelte/organism/resource-optimizer/index.svelte:39
export type Props = {
    resources: Resource[];
    suggestions?: OptimizationSuggestion[];
    showResourceDetails?: boolean;
    showOptimizationSuggestions?: boolean;
    showPrioritization?: boolean;
    showSizeComparison?: boolean;
    onResourceOptimize?: (resourceId: string) => void;
    onApplySuggestions?: () => void;
    title?: string;
    description?: string;
    class?: string;
    headerClass?: string;
    resourceClass?: string;
    suggestionClass?: string;
    footerClass?: string;
  } & InformationHTMLAttributes<HTMLDivElement>;
```

---

### `StylistCategoryId`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/development/svelte/organism/stylist/index.svelte` |
| **Строка** | 22 |
| **Целевой путь** | `development/type/enum/stylist-category-id/index.ts` |

#### 📝 Определение типа

```typescript
type StylistCategoryId = 'architecture' | 'information' | 'interaction';
```

#### 🔗 Зависимости

**Используемые типы:**

- `StylistCategoryId` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/interaction/type/struct/interaction';
import ... from '$stylist/control/svelte/atom/tooltip/index.svelte';
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `development/type/enum/stylist-category-id/index.ts`

```typescript
// Extracted from: lib/development/svelte/organism/stylist/index.svelte:22
export type StylistCategoryId = 'architecture' | 'information' | 'interaction';
```

---

### `StylistOption`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/development/svelte/organism/stylist/index.svelte` |
| **Строка** | 24 |
| **Целевой путь** | `development/type/struct/stylist-option/index.ts` |

#### 📝 Определение типа

```typescript
type StylistOption = {
		id: string;
		label: string;
		description: string;
		hint: string;
		accent: string;
		icon: any;
	};
```

#### 🔗 Зависимости

**Используемые типы:**

- `StylistOption` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/interaction/type/struct/interaction';
import ... from '$stylist/control/svelte/atom/tooltip/index.svelte';
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `development/type/struct/stylist-option/index.ts`

```typescript
// Extracted from: lib/development/svelte/organism/stylist/index.svelte:24
export type StylistOption = {
		id: string;
		label: string;
		description: string;
		hint: string;
		accent: string;
		icon: any;
	};
```

---

### `StylistCategory`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/development/svelte/organism/stylist/index.svelte` |
| **Строка** | 33 |
| **Целевой путь** | `development/type/struct/stylist-category/index.ts` |

#### 📝 Определение типа

```typescript
type StylistCategory = {
		id: StylistCategoryId;
		label: string;
		description: string;
		accent: string;
		icon: any;
		options: StylistOption[];
	};
```

#### 🔗 Зависимости

**Используемые типы:**

- `StylistCategory` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `StylistCategoryId` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `StylistOption` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/interaction/type/struct/interaction';
import ... from '$stylist/control/svelte/atom/tooltip/index.svelte';
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `development/type/struct/stylist-category/index.ts`

```typescript
// Extracted from: lib/development/svelte/organism/stylist/index.svelte:33
export type StylistCategory = {
		id: StylistCategoryId;
		label: string;
		description: string;
		accent: string;
		icon: any;
		options: StylistOption[];
	};
```

---

### `StylistSelection`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/development/svelte/organism/stylist/index.svelte` |
| **Строка** | 42 |
| **Целевой путь** | `development/type/struct/stylist-selection/index.ts` |

#### 📝 Определение типа

```typescript
export type StylistSelection = {
		category: StylistCategoryId;
		option: string;
		selections: Record<StylistCategoryId, string>;
	};
```

#### 🔗 Зависимости

**Используемые типы:**

- `StylistSelection` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `StylistCategoryId` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `StylistCategoryId` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/interaction/type/struct/interaction';
import ... from '$stylist/control/svelte/atom/tooltip/index.svelte';
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `development/type/struct/stylist-selection/index.ts`

```typescript
// Extracted from: lib/development/svelte/organism/stylist/index.svelte:42
export type StylistSelection = {
		category: StylistCategoryId;
		option: string;
		selections: Record<StylistCategoryId, string>;
	};
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/development/svelte/organism/stylist/index.svelte` |
| **Строка** | 48 |
| **Целевой путь** | `development/type/struct/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = Omit<InteractionHTMLAttributes<HTMLDivElement>, 'class'> & {
		initialCategory?: StylistCategoryId;
		class?: string;
		onSelectionChange?: (selection: StylistSelection) => void;
	};
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `InteractionHTMLAttributes` → импортируется из `$stylist//...`
- `HTMLDivElement` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `StylistCategoryId` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `StylistSelection` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/interaction/type/struct/interaction';
import ... from '$stylist/control/svelte/atom/tooltip/index.svelte';
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `development/type/struct/props/index.ts`

```typescript
// Extracted from: lib/development/svelte/organism/stylist/index.svelte:48
export type Props = Omit<InteractionHTMLAttributes<HTMLDivElement>, 'class'> & {
		initialCategory?: StylistCategoryId;
		class?: string;
		onSelectionChange?: (selection: StylistSelection) => void;
	};
```

---

### `ChildrenFn`

| Параметр | Значение |
|---|---|
| **Категория** | unknown |
| **Компонент** | `lib/development/svelte/playground/Story.svelte` |
| **Строка** | 6 |
| **Целевой путь** | `development/type/unknown/children-fn/index.ts` |

#### 📝 Определение типа

```typescript
type ChildrenFn = (values: any) => any;
```

#### 🔗 Зависимости

**Используемые типы:**

- `ChildrenFn` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/development/type/struct/interface-controller-settings';
import ... from 'svelte';
```

#### 💡 Рекомендация по миграции

Создать файл: `development/type/unknown/children-fn/index.ts`

```typescript
// Extracted from: lib/development/svelte/playground/Story.svelte:6
export type ChildrenFn = (values: any) => any;
```

---

---

## Домен: `file` (22 типов)

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/file/svelte/atom/input/file-input/index.svelte` |
| **Строка** | 10 |
| **Целевой путь** | `file/type/enum/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = {
		value?: File | File[];
		multiple?: boolean;
		accept?: string;
		disabled?: boolean;
		variant?: TokenAppearance;
		size?: (typeof TOKEN_SIZE)[number];
		placeholder?: string;
		onFileChange?: (files: File | File[] | null) => void;
		class?: string;
	} & Omit<HTMLInputAttributes, 'size'>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `File` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `File` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `TokenAppearance` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `TOKEN_SIZE` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `File` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `File` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `HTMLInputAttributes` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/interaction/preset/component/index';
import ... from '$stylist/input/preset/input';
import ... from '$stylist/file/function/script/resolve-file-selection-label';
import ... from 'svelte/elements';
import ... from '$stylist/interaction/type/record/appearance';
import ... from '$stylist/layout/const/enum/size';
```

#### 💡 Рекомендация по миграции

Создать файл: `file/type/enum/props/index.ts`

```typescript
// Extracted from: lib/file/svelte/atom/input/file-input/index.svelte:10
export type Props = {
		value?: File | File[];
		multiple?: boolean;
		accept?: string;
		disabled?: boolean;
		variant?: TokenAppearance;
		size?: (typeof TOKEN_SIZE)[number];
		placeholder?: string;
		onFileChange?: (files: File | File[] | null) => void;
		class?: string;
	} & Omit<HTMLInputAttributes, 'size'>;
```

---

### `ExportFormat`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/file/svelte/molecule/data-exporter/index.svelte` |
| **Строка** | 5 |
| **Целевой путь** | `file/type/enum/export-format/index.ts` |

#### 📝 Определение типа

```typescript
type ExportFormat = 'csv' | 'json' | 'excel';
```

#### 🔗 Зависимости

**Используемые типы:**

- `ExportFormat` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from 'svelte';
```

#### 💡 Рекомендация по миграции

Создать файл: `file/type/enum/export-format/index.ts`

```typescript
// Extracted from: lib/file/svelte/molecule/data-exporter/index.svelte:5
export type ExportFormat = 'csv' | 'json' | 'excel';
```

---

### `DataItem`

| Параметр | Значение |
|---|---|
| **Категория** | unknown |
| **Компонент** | `lib/file/svelte/molecule/data-exporter/index.svelte` |
| **Строка** | 12 |
| **Целевой путь** | `file/type/unknown/data-item/index.ts` |

#### 📝 Определение типа

```typescript
type DataItem = Record<string, any>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `DataItem` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from 'svelte';
```

#### 💡 Рекомендация по миграции

Создать файл: `file/type/unknown/data-item/index.ts`

```typescript
// Extracted from: lib/file/svelte/molecule/data-exporter/index.svelte:12
export type DataItem = Record<string, any>;
```

---

### `UploadStatus`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/file/svelte/molecule/forms/file-upload/index.svelte` |
| **Строка** | 7 |
| **Целевой путь** | `file/type/enum/upload-status/index.ts` |

#### 📝 Определение типа

```typescript
type UploadStatus = 'idle' | 'uploading' | 'success' | 'error';
```

#### 🔗 Зависимости

**Используемые типы:**

- `UploadStatus` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/interaction/type/struct/interaction';
import ... from 'svelte';
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `file/type/enum/upload-status/index.ts`

```typescript
// Extracted from: lib/file/svelte/molecule/forms/file-upload/index.svelte:7
export type UploadStatus = 'idle' | 'uploading' | 'success' | 'error';
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/file/svelte/molecule/forms/file-upload/index.svelte` |
| **Строка** | 9 |
| **Целевой путь** | `file/type/enum/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = {
    /**
     * Acceptable file types
     */
    accept?: string;
    /**
     * Maximum file size in bytes
     */
    maxSize?: number;
    /**
     * Whether multiple files can be selected
     */
    multiple?: boolean;
    /**
     * Upload status
     */
    status?: UploadStatus;
    /**
     * Uploaded file
     */
    file?: File | null;
    /**
     * On file selection handler
     */
    onFileSelect?: (file: File | FileList | null) => void;
    /**
     * On upload handler
     */
    onUpload?: (file: File) => Promise<void>;
    /**
     * Content snippet for customization
     */
    children?: Snippet;
    /**
     * Whether the file upload is disabled
     */
    disabled?: boolean;
    /**
     * Text to display in the upload area
     */
    uploadText?: string;
  } & InteractionHTMLAttributes<HTMLDivElement>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Acceptable` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Maximum` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Whether` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Upload` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `UploadStatus` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Uploaded` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `File` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `On` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `File` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `FileList` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `On` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `File` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Content` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Snippet` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Whether` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Text` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `InteractionHTMLAttributes` → импортируется из `$stylist//...`
- `HTMLDivElement` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/interaction/type/struct/interaction';
import ... from 'svelte';
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `file/type/enum/props/index.ts`

```typescript
// Extracted from: lib/file/svelte/molecule/forms/file-upload/index.svelte:9
export type Props = {
    /**
     * Acceptable file types
     */
    accept?: string;
    /**
     * Maximum file size in bytes
     */
    maxSize?: number;
    /**
     * Whether multiple files can be selected
     */
    multiple?: boolean;
    /**
     * Upload status
     */
    status?: UploadStatus;
    /**
     * Uploaded file
     */
    file?: File | null;
    /**
     * On file selection handler
     */
    onFileSelect?: (file: File | FileList | null) => void;
    /**
     * On upload handler
     */
    onUpload?: (file: File) => Promise<void>;
    /**
     * Content snippet for customization
     */
    children?: Snippet;
    /**
     * Whether the file upload is disabled
     */
    disabled?: boolean;
    /**
     * Text to display in the upload area
     */
    uploadText?: string;
  } & InteractionHTMLAttributes<HTMLDivElement>;
```

---

### `DropItem`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/file/svelte/organism/controls/files/drop-zone/index.svelte` |
| **Строка** | 12 |
| **Целевой путь** | `file/type/struct/drop-item/index.ts` |

#### 📝 Определение типа

```typescript
type DropItem = {
    id: string;
    name: string;
    type: string;
    size?: number;
    data?: any;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `DropItem` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/interaction/type/struct/interaction';
import ... from 'svelte';
import ... from '$stylist';
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `file/type/struct/drop-item/index.ts`

```typescript
// Extracted from: lib/file/svelte/organism/controls/files/drop-zone/index.svelte:12
export type DropItem = {
    id: string;
    name: string;
    type: string;
    size?: number;
    data?: any;
  };
```

---

### `RestProps`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/file/svelte/organism/controls/files/drop-zone/index.svelte` |
| **Строка** | 20 |
| **Целевой путь** | `file/type/struct/rest-props/index.ts` |

#### 📝 Определение типа

```typescript
type RestProps = Omit<InteractionHTMLAttributes<HTMLDivElement>, 'class'>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `RestProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `InteractionHTMLAttributes` → импортируется из `$stylist//...`
- `HTMLDivElement` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/interaction/type/struct/interaction';
import ... from 'svelte';
import ... from '$stylist';
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `file/type/struct/rest-props/index.ts`

```typescript
// Extracted from: lib/file/svelte/organism/controls/files/drop-zone/index.svelte:20
export type RestProps = Omit<InteractionHTMLAttributes<HTMLDivElement>, 'class'>;
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/file/svelte/organism/controls/files/drop-zone/index.svelte` |
| **Строка** | 22 |
| **Целевой путь** | `file/type/struct/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = RestProps & {
    children?: Snippet;
    class?: string;
    accept?: string;
    multiple?: boolean;
    disabled?: boolean;
    maxSize?: number; // in bytes
    maxItems?: number;
    onDrop?: (items: DropItem[]) => void;
    onDragOver?: (items: DragEvent) => void;
    onDragLeave?: (items: DragEvent) => void;
    onItemAdded?: (item: DropItem) => void;
    onItemRemoved?: (item: DropItem) => void;
    preview?: boolean;
    label?: string;
    description?: string;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `RestProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Snippet` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `DropItem` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `DragEvent` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `DragEvent` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `DropItem` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `DropItem` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/interaction/type/struct/interaction';
import ... from 'svelte';
import ... from '$stylist';
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `file/type/struct/props/index.ts`

```typescript
// Extracted from: lib/file/svelte/organism/controls/files/drop-zone/index.svelte:22
export type Props = RestProps & {
    children?: Snippet;
    class?: string;
    accept?: string;
    multiple?: boolean;
    disabled?: boolean;
    maxSize?: number; // in bytes
    maxItems?: number;
    onDrop?: (items: DropItem[]) => void;
    onDragOver?: (items: DragEvent) => void;
    onDragLeave?: (items: DragEvent) => void;
    onItemAdded?: (item: DropItem) => void;
    onItemRemoved?: (item: DropItem) => void;
    preview?: boolean;
    label?: string;
    description?: string;
  };
```

---

### `RestProps`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/file/svelte/organism/controls/files/file-explorer/index.svelte` |
| **Строка** | 20 |
| **Целевой путь** | `file/type/struct/rest-props/index.ts` |

#### 📝 Определение типа

```typescript
type RestProps = Omit<InteractionHTMLAttributes<HTMLDivElement>, 'class'>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `RestProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `InteractionHTMLAttributes` → импортируется из `$stylist//...`
- `HTMLDivElement` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/interaction/type/struct/interaction';
import ... from '$stylist';
import ... from '$stylist';
import ... from '$stylist/file/type/struct/file-explorer/file-system-item';
import ... from '$stylist/file/type/struct/file-explorer/view-mode';
```

#### 💡 Рекомендация по миграции

Создать файл: `file/type/struct/rest-props/index.ts`

```typescript
// Extracted from: lib/file/svelte/organism/controls/files/file-explorer/index.svelte:20
export type RestProps = Omit<InteractionHTMLAttributes<HTMLDivElement>, 'class'>;
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/file/svelte/organism/controls/files/file-explorer/index.svelte` |
| **Строка** | 22 |
| **Целевой путь** | `file/type/struct/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = RestProps & {
    items: FileSystemItem[];
    viewMode?: ViewMode;
    currentPath?: string;
    searchable?: boolean;
    showPath?: boolean;
    enableSelection?: boolean;
    multiselect?: boolean;
    onItemSelect?: (item: FileSystemItem) => void;
    onItemDoubleClick?: (item: FileSystemItem) => void;
    onItemAction?: (item: FileSystemItem, action: string) => void;
    class?: string;
    itemClass?: string;
    headerClass?: string;
    toolbarClass?: string;
    searchClass?: string;
    pathClass?: string;
    onUpload?: (files: FileList) => void;
    onDownload?: (item: FileSystemItem) => void;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `RestProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `FileSystemItem` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `ViewMode` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `FileSystemItem` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `FileSystemItem` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `FileSystemItem` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `FileList` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `FileSystemItem` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/interaction/type/struct/interaction';
import ... from '$stylist';
import ... from '$stylist';
import ... from '$stylist/file/type/struct/file-explorer/file-system-item';
import ... from '$stylist/file/type/struct/file-explorer/view-mode';
```

#### 💡 Рекомендация по миграции

Создать файл: `file/type/struct/props/index.ts`

```typescript
// Extracted from: lib/file/svelte/organism/controls/files/file-explorer/index.svelte:22
export type Props = RestProps & {
    items: FileSystemItem[];
    viewMode?: ViewMode;
    currentPath?: string;
    searchable?: boolean;
    showPath?: boolean;
    enableSelection?: boolean;
    multiselect?: boolean;
    onItemSelect?: (item: FileSystemItem) => void;
    onItemDoubleClick?: (item: FileSystemItem) => void;
    onItemAction?: (item: FileSystemItem, action: string) => void;
    class?: string;
    itemClass?: string;
    headerClass?: string;
    toolbarClass?: string;
    searchClass?: string;
    pathClass?: string;
    onUpload?: (files: FileList) => void;
    onDownload?: (item: FileSystemItem) => void;
  };
```

---

### `ZipEntryType`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/file/svelte/organism/controls/files/zip-viewer/index.svelte` |
| **Строка** | 18 |
| **Целевой путь** | `file/type/enum/zip-entry-type/index.ts` |

#### 📝 Определение типа

```typescript
type ZipEntryType = 'file' | 'directory';
```

#### 🔗 Зависимости

**Используемые типы:**

- `ZipEntryType` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/information/type/struct';
import ... from '$stylist';
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `file/type/enum/zip-entry-type/index.ts`

```typescript
// Extracted from: lib/file/svelte/organism/controls/files/zip-viewer/index.svelte:18
export type ZipEntryType = 'file' | 'directory';
```

---

### `ZipEntry`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/file/svelte/organism/controls/files/zip-viewer/index.svelte` |
| **Строка** | 20 |
| **Целевой путь** | `file/type/struct/zip-entry/index.ts` |

#### 📝 Определение типа

```typescript
type ZipEntry = {
    id: string;
    name: string;
    type: ZipEntryType;
    size?: number; // in bytes
    compressedSize?: number;
    modified?: Date;
    isText?: boolean; // Is it a text file that can be viewed
    path: string;
    parentPath?: string;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `ZipEntry` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `ZipEntryType` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Date` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Is` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/information/type/struct';
import ... from '$stylist';
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `file/type/struct/zip-entry/index.ts`

```typescript
// Extracted from: lib/file/svelte/organism/controls/files/zip-viewer/index.svelte:20
export type ZipEntry = {
    id: string;
    name: string;
    type: ZipEntryType;
    size?: number; // in bytes
    compressedSize?: number;
    modified?: Date;
    isText?: boolean; // Is it a text file that can be viewed
    path: string;
    parentPath?: string;
  };
```

---

### `RestProps`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/file/svelte/organism/controls/files/zip-viewer/index.svelte` |
| **Строка** | 32 |
| **Целевой путь** | `file/type/struct/rest-props/index.ts` |

#### 📝 Определение типа

```typescript
type RestProps = Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `RestProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `InformationHTMLAttributes` → импортируется из `$stylist//...`
- `HTMLDivElement` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/information/type/struct';
import ... from '$stylist';
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `file/type/struct/rest-props/index.ts`

```typescript
// Extracted from: lib/file/svelte/organism/controls/files/zip-viewer/index.svelte:32
export type RestProps = Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'>;
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/file/svelte/organism/controls/files/zip-viewer/index.svelte` |
| **Строка** | 34 |
| **Целевой путь** | `file/type/struct/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = RestProps & {
    entries: ZipEntry[];
    archiveName?: string;
    class?: string;
    entryClass?: string;
    headerClass?: string;
    onEntryClick?: (entry: ZipEntry) => void;
    onEntryPreview?: (entry: ZipEntry) => void;
    onEntryDownload?: (entry: ZipEntry) => void;
    onEntryExtract?: (entry: ZipEntry) => void;
    searchable?: boolean;
    showPath?: boolean;
    enableFiltering?: boolean;
    defaultExpanded?: boolean;
    disabled?: boolean;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `RestProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `ZipEntry` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `ZipEntry` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `ZipEntry` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `ZipEntry` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `ZipEntry` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/information/type/struct';
import ... from '$stylist';
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `file/type/struct/props/index.ts`

```typescript
// Extracted from: lib/file/svelte/organism/controls/files/zip-viewer/index.svelte:34
export type Props = RestProps & {
    entries: ZipEntry[];
    archiveName?: string;
    class?: string;
    entryClass?: string;
    headerClass?: string;
    onEntryClick?: (entry: ZipEntry) => void;
    onEntryPreview?: (entry: ZipEntry) => void;
    onEntryDownload?: (entry: ZipEntry) => void;
    onEntryExtract?: (entry: ZipEntry) => void;
    searchable?: boolean;
    showPath?: boolean;
    enableFiltering?: boolean;
    defaultExpanded?: boolean;
    disabled?: boolean;
  };
```

---

### `FileType`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/file/svelte/organism/drag-drop-file-upload/index.svelte` |
| **Строка** | 10 |
| **Целевой путь** | `file/type/enum/file-type/index.ts` |

#### 📝 Определение типа

```typescript
type FileType = {
    id: string;
    name: string;
    size: number;
    type: string;
    status: 'uploading' | 'success' | 'error';
    progress?: number;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `FileType` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/interaction/type/struct/interaction';
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `file/type/enum/file-type/index.ts`

```typescript
// Extracted from: lib/file/svelte/organism/drag-drop-file-upload/index.svelte:10
export type FileType = {
    id: string;
    name: string;
    size: number;
    type: string;
    status: 'uploading' | 'success' | 'error';
    progress?: number;
  };
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/file/svelte/organism/drag-drop-file-upload/index.svelte` |
| **Строка** | 19 |
| **Целевой путь** | `file/type/struct/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = {
    multiple?: boolean;
    accept?: string;
    maxSize?: number; // in bytes
    disabled?: boolean;
    class?: string;
    dropZoneClass?: string;
    fileListClass?: string;
    fileItemClass?: string;
    buttonClass?: string;
    preview?: boolean;
    onFileSelect?: (files: FileList) => void;
    onFileUpload?: (file: File) => void;
  } & InteractionHTMLAttributes<HTMLDivElement>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `FileList` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `File` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `InteractionHTMLAttributes` → импортируется из `$stylist//...`
- `HTMLDivElement` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/interaction/type/struct/interaction';
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `file/type/struct/props/index.ts`

```typescript
// Extracted from: lib/file/svelte/organism/drag-drop-file-upload/index.svelte:19
export type Props = {
    multiple?: boolean;
    accept?: string;
    maxSize?: number; // in bytes
    disabled?: boolean;
    class?: string;
    dropZoneClass?: string;
    fileListClass?: string;
    fileItemClass?: string;
    buttonClass?: string;
    preview?: boolean;
    onFileSelect?: (files: FileList) => void;
    onFileUpload?: (file: File) => void;
  } & InteractionHTMLAttributes<HTMLDivElement>;
```

---

### `RestProps`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/file/svelte/organism/file-browser/index.svelte` |
| **Строка** | 13 |
| **Целевой путь** | `file/type/struct/rest-props/index.ts` |

#### 📝 Определение типа

```typescript
type RestProps = Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `RestProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `InformationHTMLAttributes` → импортируется из `$stylist//...`
- `HTMLDivElement` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/information/type/struct';
import ... from '$stylist';
import ... from '$stylist/file/type/struct/file-browser/folder-item';
```

#### 💡 Рекомендация по миграции

Создать файл: `file/type/struct/rest-props/index.ts`

```typescript
// Extracted from: lib/file/svelte/organism/file-browser/index.svelte:13
export type RestProps = Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'>;
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/file/svelte/organism/file-browser/index.svelte` |
| **Строка** | 15 |
| **Целевой путь** | `file/type/struct/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = RestProps & {
    items: FolderItem[];
    class?: string;
    itemClass?: string;
    contentClass?: string;
    onItemSelect?: (item: FolderItem) => void;
    onItemToggle?: (item: FolderItem, expanded: boolean) => void;
    onItemAction?: (item: FolderItem, action: string) => void;
    showItemCount?: boolean;
    enableSelection?: boolean;
    defaultExpanded?: boolean;
    disabled?: boolean;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `RestProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `FolderItem` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `FolderItem` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `FolderItem` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `FolderItem` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/information/type/struct';
import ... from '$stylist';
import ... from '$stylist/file/type/struct/file-browser/folder-item';
```

#### 💡 Рекомендация по миграции

Создать файл: `file/type/struct/props/index.ts`

```typescript
// Extracted from: lib/file/svelte/organism/file-browser/index.svelte:15
export type Props = RestProps & {
    items: FolderItem[];
    class?: string;
    itemClass?: string;
    contentClass?: string;
    onItemSelect?: (item: FolderItem) => void;
    onItemToggle?: (item: FolderItem, expanded: boolean) => void;
    onItemAction?: (item: FolderItem, action: string) => void;
    showItemCount?: boolean;
    enableSelection?: boolean;
    defaultExpanded?: boolean;
    disabled?: boolean;
  };
```

---

### `FileType`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/file/svelte/organism/file-list-item/index.svelte` |
| **Строка** | 19 |
| **Целевой путь** | `file/type/enum/file-type/index.ts` |

#### 📝 Определение типа

```typescript
type FileType = 'file' | 'folder' | 'image' | 'video' | 'audio' | 'archive' | 'text' | 'code' | 'document';
```

#### 🔗 Зависимости

**Используемые типы:**

- `FileType` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/information/type/struct';
import ... from '$stylist';
import ... from '$lib';
```

#### 💡 Рекомендация по миграции

Создать файл: `file/type/enum/file-type/index.ts`

```typescript
// Extracted from: lib/file/svelte/organism/file-list-item/index.svelte:19
export type FileType = 'file' | 'folder' | 'image' | 'video' | 'audio' | 'archive' | 'text' | 'code' | 'document';
```

---

### `FileItem`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/file/svelte/organism/file-list-item/index.svelte` |
| **Строка** | 21 |
| **Целевой путь** | `file/type/struct/file-item/index.ts` |

#### 📝 Определение типа

```typescript
type FileItem = {
    id: string;
    name: string;
    type: FileType;
    size?: number; // in bytes
    modified?: Date;
    created?: Date;
    path?: string;
    thumbnail?: string; // For preview
    permissions?: string; // 'read', 'write', 'execute'
    owner?: string;
    icon?: string; // Custom icon
    selected?: boolean;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `FileItem` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `FileType` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Date` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Date` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `For` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Custom` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/information/type/struct';
import ... from '$stylist';
import ... from '$lib';
```

#### 💡 Рекомендация по миграции

Создать файл: `file/type/struct/file-item/index.ts`

```typescript
// Extracted from: lib/file/svelte/organism/file-list-item/index.svelte:21
export type FileItem = {
    id: string;
    name: string;
    type: FileType;
    size?: number; // in bytes
    modified?: Date;
    created?: Date;
    path?: string;
    thumbnail?: string; // For preview
    permissions?: string; // 'read', 'write', 'execute'
    owner?: string;
    icon?: string; // Custom icon
    selected?: boolean;
  };
```

---

### `RestProps`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/file/svelte/organism/file-list-item/index.svelte` |
| **Строка** | 36 |
| **Целевой путь** | `file/type/struct/rest-props/index.ts` |

#### 📝 Определение типа

```typescript
type RestProps = Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `RestProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `InformationHTMLAttributes` → импортируется из `$stylist//...`
- `HTMLDivElement` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/information/type/struct';
import ... from '$stylist';
import ... from '$lib';
```

#### 💡 Рекомендация по миграции

Создать файл: `file/type/struct/rest-props/index.ts`

```typescript
// Extracted from: lib/file/svelte/organism/file-list-item/index.svelte:36
export type RestProps = Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'>;
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/file/svelte/organism/file-list-item/index.svelte` |
| **Строка** | 38 |
| **Целевой путь** | `file/type/enum/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = RestProps & {
    item: FileItem;
    class?: string;
    cellClass?: string;
    onItemSelect?: (item: FileItem) => void;
    onItemDoubleClick?: (item: FileItem) => void;
    onItemAction?: (item: FileItem, action: string) => void;
    showThumbnail?: boolean;
    showSize?: boolean;
    showModified?: boolean;
    showOwner?: boolean;
    enableSelection?: boolean;
    disabled?: boolean;
    variant?: 'default' | 'compact';
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `RestProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `FileItem` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `FileItem` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `FileItem` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `FileItem` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/information/type/struct';
import ... from '$stylist';
import ... from '$lib';
```

#### 💡 Рекомендация по миграции

Создать файл: `file/type/enum/props/index.ts`

```typescript
// Extracted from: lib/file/svelte/organism/file-list-item/index.svelte:38
export type Props = RestProps & {
    item: FileItem;
    class?: string;
    cellClass?: string;
    onItemSelect?: (item: FileItem) => void;
    onItemDoubleClick?: (item: FileItem) => void;
    onItemAction?: (item: FileItem, action: string) => void;
    showThumbnail?: boolean;
    showSize?: boolean;
    showModified?: boolean;
    showOwner?: boolean;
    enableSelection?: boolean;
    disabled?: boolean;
    variant?: 'default' | 'compact';
  };
```

---

---

## Домен: `form` (5 типов)

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/form/svelte/molecule/forms/form-selection/index.svelte` |
| **Строка** | 9 |
| **Целевой путь** | `form/type/struct/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = {
    title?: string;
    description?: string;
    collapsible?: boolean;
    initiallyCollapsed?: boolean;
    required?: boolean;
    border?: boolean;
    padding?: boolean;
    class?: string;
    headerClass?: string;
    contentClass?: string;
    children: Snippet;
  } & InteractionHTMLAttributes<HTMLElement>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Snippet` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `InteractionHTMLAttributes` → импортируется из `$stylist//...`
- `HTMLElement` → импортируется из `svelte/elements`

**Все импорты компонента:**

```typescript
import ... from '$stylist/interaction/type/struct/interaction';
import ... from 'svelte';
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `form/type/struct/props/index.ts`

```typescript
// Extracted from: lib/form/svelte/molecule/forms/form-selection/index.svelte:9
export type Props = {
    title?: string;
    description?: string;
    collapsible?: boolean;
    initiallyCollapsed?: boolean;
    required?: boolean;
    border?: boolean;
    padding?: boolean;
    class?: string;
    headerClass?: string;
    contentClass?: string;
    children: Snippet;
  } & InteractionHTMLAttributes<HTMLElement>;
```

---

### `RadioOption`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/form/svelte/molecule/forms/radio-group/index.svelte` |
| **Строка** | 5 |
| **Целевой путь** | `form/type/struct/radio-option/index.ts` |

#### 📝 Определение типа

```typescript
type RadioOption = {
    value: string;
    label: string;
    description?: string;
    disabled?: boolean;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `RadioOption` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from 'svelte/elements';
```

#### 💡 Рекомендация по миграции

Создать файл: `form/type/struct/radio-option/index.ts`

```typescript
// Extracted from: lib/form/svelte/molecule/forms/radio-group/index.svelte:5
export type RadioOption = {
    value: string;
    label: string;
    description?: string;
    disabled?: boolean;
  };
```

---

### `Orientation`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/form/svelte/molecule/forms/radio-group/index.svelte` |
| **Строка** | 12 |
| **Целевой путь** | `form/type/enum/orientation/index.ts` |

#### 📝 Определение типа

```typescript
type Orientation = 'vertical' | 'horizontal';
```

#### 🔗 Зависимости

**Используемые типы:**

- `Orientation` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from 'svelte/elements';
```

#### 💡 Рекомендация по миграции

Создать файл: `form/type/enum/orientation/index.ts`

```typescript
// Extracted from: lib/form/svelte/molecule/forms/radio-group/index.svelte:12
export type Orientation = 'vertical' | 'horizontal';
```

---

### `GroupProps`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/form/svelte/molecule/forms/radio-group/index.svelte` |
| **Строка** | 14 |
| **Целевой путь** | `form/type/enum/group-props/index.ts` |

#### 📝 Определение типа

```typescript
type GroupProps = {
    name: string;
    value?: string;
    options: RadioOption[];
    label?: string;
    description?: string;
    orientation?: Orientation;
    disabled?: boolean;
    required?: boolean;
    error?: string;
    class?: string;
  } & Omit<HTMLInputAttributes, 'type' | 'value' | 'name' | 'checked'>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `GroupProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `RadioOption` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Orientation` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `HTMLInputAttributes` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from 'svelte/elements';
```

#### 💡 Рекомендация по миграции

Создать файл: `form/type/enum/group-props/index.ts`

```typescript
// Extracted from: lib/form/svelte/molecule/forms/radio-group/index.svelte:14
export type GroupProps = {
    name: string;
    value?: string;
    options: RadioOption[];
    label?: string;
    description?: string;
    orientation?: Orientation;
    disabled?: boolean;
    required?: boolean;
    error?: string;
    class?: string;
  } & Omit<HTMLInputAttributes, 'type' | 'value' | 'name' | 'checked'>;
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/form/svelte/molecule/forms/validation/index.svelte` |
| **Строка** | 6 |
| **Целевой путь** | `form/type/enum/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = {
    label?: string;
    description?: string;
    required?: boolean;
    error?: string;
    hint?: string;
    disabled?: boolean;
    orientation?: 'horizontal' | 'vertical';
    class?: string;
    id?: string; // Added for accessibility
    children: Snippet; // Explicitly define children as a slot prop
  } & InteractionHTMLAttributes<HTMLDivElement>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Added` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Snippet` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Explicitly` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `InteractionHTMLAttributes` → импортируется из `$stylist//...`
- `HTMLDivElement` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/interaction/type/struct/interaction';
import ... from 'svelte';
```

#### 💡 Рекомендация по миграции

Создать файл: `form/type/enum/props/index.ts`

```typescript
// Extracted from: lib/form/svelte/molecule/forms/validation/index.svelte:6
export type Props = {
    label?: string;
    description?: string;
    required?: boolean;
    error?: string;
    hint?: string;
    disabled?: boolean;
    orientation?: 'horizontal' | 'vertical';
    class?: string;
    id?: string; // Added for accessibility
    children: Snippet; // Explicitly define children as a slot prop
  } & InteractionHTMLAttributes<HTMLDivElement>;
```

---

---

## Домен: `geo` (22 типов)

### `Coordinates`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/geo/svelte/organism/location-picker/index.svelte` |
| **Строка** | 14 |
| **Целевой путь** | `geo/type/struct/coordinates/index.ts` |

#### 📝 Определение типа

```typescript
type Coordinates = {
    lat: number;
    lng: number;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `Coordinates` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/interaction/type/struct/interaction';
import ... from '$stylist';
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `geo/type/struct/coordinates/index.ts`

```typescript
// Extracted from: lib/geo/svelte/organism/location-picker/index.svelte:14
export type Coordinates = {
    lat: number;
    lng: number;
  };
```

---

### `MapMarker`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/geo/svelte/organism/location-picker/index.svelte` |
| **Строка** | 19 |
| **Целевой путь** | `geo/type/struct/map-marker/index.ts` |

#### 📝 Определение типа

```typescript
type MapMarker = {
    id: string;
    coordinates: Coordinates;
    title?: string;
    description?: string;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `MapMarker` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Coordinates` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/interaction/type/struct/interaction';
import ... from '$stylist';
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `geo/type/struct/map-marker/index.ts`

```typescript
// Extracted from: lib/geo/svelte/organism/location-picker/index.svelte:19
export type MapMarker = {
    id: string;
    coordinates: Coordinates;
    title?: string;
    description?: string;
  };
```

---

### `RestProps`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/geo/svelte/organism/location-picker/index.svelte` |
| **Строка** | 26 |
| **Целевой путь** | `geo/type/struct/rest-props/index.ts` |

#### 📝 Определение типа

```typescript
type RestProps = Omit<InteractionHTMLAttributes<HTMLDivElement>, 'class'>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `RestProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `InteractionHTMLAttributes` → импортируется из `$stylist//...`
- `HTMLDivElement` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/interaction/type/struct/interaction';
import ... from '$stylist';
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `geo/type/struct/rest-props/index.ts`

```typescript
// Extracted from: lib/geo/svelte/organism/location-picker/index.svelte:26
export type RestProps = Omit<InteractionHTMLAttributes<HTMLDivElement>, 'class'>;
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/geo/svelte/organism/location-picker/index.svelte` |
| **Строка** | 28 |
| **Целевой путь** | `geo/type/struct/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = RestProps & {
    center?: Coordinates;
    zoom?: number;
    markers?: MapMarker[];
    selectedMarker?: string;
    class?: string;
    mapClass?: string;
    onLocationSelect?: (coordinates: Coordinates) => void;
    onMarkerClick?: (marker: MapMarker) => void;
    onMapClick?: (coordinates: Coordinates) => void;
    showSearch?: boolean;
    showCoordinates?: boolean;
    showCurrentLocation?: boolean;
    disableInteraction?: boolean;
    maxZoom?: number;
    minZoom?: number;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `RestProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Coordinates` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `MapMarker` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Coordinates` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `MapMarker` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Coordinates` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/interaction/type/struct/interaction';
import ... from '$stylist';
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `geo/type/struct/props/index.ts`

```typescript
// Extracted from: lib/geo/svelte/organism/location-picker/index.svelte:28
export type Props = RestProps & {
    center?: Coordinates;
    zoom?: number;
    markers?: MapMarker[];
    selectedMarker?: string;
    class?: string;
    mapClass?: string;
    onLocationSelect?: (coordinates: Coordinates) => void;
    onMarkerClick?: (marker: MapMarker) => void;
    onMapClick?: (coordinates: Coordinates) => void;
    showSearch?: boolean;
    showCoordinates?: boolean;
    showCurrentLocation?: boolean;
    disableInteraction?: boolean;
    maxZoom?: number;
    minZoom?: number;
  };
```

---

### `Location`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/geo/svelte/organism/location-selector/index.svelte` |
| **Строка** | 14 |
| **Целевой путь** | `geo/type/struct/location/index.ts` |

#### 📝 Определение типа

```typescript
type Location = {
    id: string;
    name: string;
    address?: string;
    latitude: number;
    longitude: number;
    description?: string;
    category?: string;
    rating?: number;
    distance?: number; // Distance from current location in km
    tags?: string[];
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `Location` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Distance` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/interaction/type/struct/interaction';
import ... from '$stylist';
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `geo/type/struct/location/index.ts`

```typescript
// Extracted from: lib/geo/svelte/organism/location-selector/index.svelte:14
export type Location = {
    id: string;
    name: string;
    address?: string;
    latitude: number;
    longitude: number;
    description?: string;
    category?: string;
    rating?: number;
    distance?: number; // Distance from current location in km
    tags?: string[];
  };
```

---

### `RestProps`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/geo/svelte/organism/location-selector/index.svelte` |
| **Строка** | 27 |
| **Целевой путь** | `geo/type/struct/rest-props/index.ts` |

#### 📝 Определение типа

```typescript
type RestProps = Omit<InteractionHTMLAttributes<HTMLDivElement>, 'class'>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `RestProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `InteractionHTMLAttributes` → импортируется из `$stylist//...`
- `HTMLDivElement` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/interaction/type/struct/interaction';
import ... from '$stylist';
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `geo/type/struct/rest-props/index.ts`

```typescript
// Extracted from: lib/geo/svelte/organism/location-selector/index.svelte:27
export type RestProps = Omit<InteractionHTMLAttributes<HTMLDivElement>, 'class'>;
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/geo/svelte/organism/location-selector/index.svelte` |
| **Строка** | 29 |
| **Целевой путь** | `geo/type/enum/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = RestProps & {
    locations: Location[];
    currentView?: 'list' | 'grid' | 'map';
    showSearch?: boolean;
    showCategoryFilter?: boolean;
    showMapToggle?: boolean;
    showDistance?: boolean;
    searchPlaceholder?: string;
    defaultCategory?: string;
    maxLocations?: number;
    onLocationSelect?: (location: Location) => void;
    onSearch?: (query: string) => void;
    onCategoryChange?: (category: string) => void;
    class?: string;
    itemClass?: string;
    headerClass?: string;
    searchClass?: string;
    viewToggleClass?: string;
    mapView?: boolean; // If true, renders a simplified map view
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `RestProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Location` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Location` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `If` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/interaction/type/struct/interaction';
import ... from '$stylist';
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `geo/type/enum/props/index.ts`

```typescript
// Extracted from: lib/geo/svelte/organism/location-selector/index.svelte:29
export type Props = RestProps & {
    locations: Location[];
    currentView?: 'list' | 'grid' | 'map';
    showSearch?: boolean;
    showCategoryFilter?: boolean;
    showMapToggle?: boolean;
    showDistance?: boolean;
    searchPlaceholder?: string;
    defaultCategory?: string;
    maxLocations?: number;
    onLocationSelect?: (location: Location) => void;
    onSearch?: (query: string) => void;
    onCategoryChange?: (category: string) => void;
    class?: string;
    itemClass?: string;
    headerClass?: string;
    searchClass?: string;
    viewToggleClass?: string;
    mapView?: boolean; // If true, renders a simplified map view
  };
```

---

### `MapProvider`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/geo/svelte/organism/map-selector/index.svelte` |
| **Строка** | 14 |
| **Целевой путь** | `geo/type/enum/map-provider/index.ts` |

#### 📝 Определение типа

```typescript
type MapProvider = 'google' | 'osm' | 'mapbox' | 'here' | 'tomtom';
```

#### 🔗 Зависимости

**Используемые типы:**

- `MapProvider` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/interaction/type/struct/interaction';
import ... from '$stylist';
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `geo/type/enum/map-provider/index.ts`

```typescript
// Extracted from: lib/geo/svelte/organism/map-selector/index.svelte:14
export type MapProvider = 'google' | 'osm' | 'mapbox' | 'here' | 'tomtom';
```

---

### `Location`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/geo/svelte/organism/map-selector/index.svelte` |
| **Строка** | 16 |
| **Целевой путь** | `geo/type/struct/location/index.ts` |

#### 📝 Определение типа

```typescript
type Location = {
    id: string;
    name: string;
    latitude: number;
    longitude: number;
    description?: string;
    metadata?: Record<string, any>;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `Location` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/interaction/type/struct/interaction';
import ... from '$stylist';
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `geo/type/struct/location/index.ts`

```typescript
// Extracted from: lib/geo/svelte/organism/map-selector/index.svelte:16
export type Location = {
    id: string;
    name: string;
    latitude: number;
    longitude: number;
    description?: string;
    metadata?: Record<string, any>;
  };
```

---

### `RestProps`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/geo/svelte/organism/map-selector/index.svelte` |
| **Строка** | 25 |
| **Целевой путь** | `geo/type/struct/rest-props/index.ts` |

#### 📝 Определение типа

```typescript
type RestProps = Omit<InteractionHTMLAttributes<HTMLDivElement>, 'class'>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `RestProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `InteractionHTMLAttributes` → импортируется из `$stylist//...`
- `HTMLDivElement` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/interaction/type/struct/interaction';
import ... from '$stylist';
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `geo/type/struct/rest-props/index.ts`

```typescript
// Extracted from: lib/geo/svelte/organism/map-selector/index.svelte:25
export type RestProps = Omit<InteractionHTMLAttributes<HTMLDivElement>, 'class'>;
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/geo/svelte/organism/map-selector/index.svelte` |
| **Строка** | 27 |
| **Целевой путь** | `geo/type/struct/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = RestProps & {
    locations: Location[];
    initialCenter?: { lat: number; lng: number };
    initialZoom?: number;
    provider?: MapProvider;
    apiKey?: string;
    showSearch?: boolean;
    showZoomControls?: boolean;
    showCurrentLocation?: boolean;
    showMarkers?: boolean;
    enableMarkerClustering?: boolean;
    maxZoom?: number;
    minZoom?: number;
    class?: string;
    mapClass?: string;
    searchClass?: string;
    controlsClass?: string;
    onLocationSelect?: (location: Location) => void;
    onMapClick?: (coordinates: { lat: number; lng: number }) => void;
    onMarkerClick?: (location: Location) => void;
    height?: string;
    width?: string;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `RestProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Location` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `MapProvider` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Location` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Location` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/interaction/type/struct/interaction';
import ... from '$stylist';
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `geo/type/struct/props/index.ts`

```typescript
// Extracted from: lib/geo/svelte/organism/map-selector/index.svelte:27
export type Props = RestProps & {
    locations: Location[];
    initialCenter?: { lat: number; lng: number };
    initialZoom?: number;
    provider?: MapProvider;
    apiKey?: string;
    showSearch?: boolean;
    showZoomControls?: boolean;
    showCurrentLocation?: boolean;
    showMarkers?: boolean;
    enableMarkerClustering?: boolean;
    maxZoom?: number;
    minZoom?: number;
    class?: string;
    mapClass?: string;
    searchClass?: string;
    controlsClass?: string;
    onLocationSelect?: (location: Location) => void;
    onMapClick?: (coordinates: { lat: number; lng: number }) => void;
    onMarkerClick?: (location: Location) => void;
    height?: string;
    width?: string;
  };
```

---

### `MapMarker`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/geo/svelte/organism/map-with-markers/index.svelte` |
| **Строка** | 15 |
| **Целевой путь** | `geo/type/enum/map-marker/index.ts` |

#### 📝 Определение типа

```typescript
type MapMarker = {
    id: string;
    lat: number;
    lng: number;
    title?: string;
    description?: string;
    color?: string;
    size?: 'sm' | 'md' | 'lg';
    icon?: string; // Custom icon identifier
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `MapMarker` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Custom` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/information/type/struct';
import ... from '$stylist';
import ... from '$lib';
```

#### 💡 Рекомендация по миграции

Создать файл: `geo/type/enum/map-marker/index.ts`

```typescript
// Extracted from: lib/geo/svelte/organism/map-with-markers/index.svelte:15
export type MapMarker = {
    id: string;
    lat: number;
    lng: number;
    title?: string;
    description?: string;
    color?: string;
    size?: 'sm' | 'md' | 'lg';
    icon?: string; // Custom icon identifier
  };
```

---

### `MapView`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/geo/svelte/organism/map-with-markers/index.svelte` |
| **Строка** | 26 |
| **Целевой путь** | `geo/type/struct/map-view/index.ts` |

#### 📝 Определение типа

```typescript
type MapView = {
    center: { lat: number; lng: number };
    zoom: number;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `MapView` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/information/type/struct';
import ... from '$stylist';
import ... from '$lib';
```

#### 💡 Рекомендация по миграции

Создать файл: `geo/type/struct/map-view/index.ts`

```typescript
// Extracted from: lib/geo/svelte/organism/map-with-markers/index.svelte:26
export type MapView = {
    center: { lat: number; lng: number };
    zoom: number;
  };
```

---

### `RestProps`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/geo/svelte/organism/map-with-markers/index.svelte` |
| **Строка** | 31 |
| **Целевой путь** | `geo/type/struct/rest-props/index.ts` |

#### 📝 Определение типа

```typescript
type RestProps = Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `RestProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `InformationHTMLAttributes` → импортируется из `$stylist//...`
- `HTMLDivElement` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/information/type/struct';
import ... from '$stylist';
import ... from '$lib';
```

#### 💡 Рекомендация по миграции

Создать файл: `geo/type/struct/rest-props/index.ts`

```typescript
// Extracted from: lib/geo/svelte/organism/map-with-markers/index.svelte:31
export type RestProps = Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'>;
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/geo/svelte/organism/map-with-markers/index.svelte` |
| **Строка** | 33 |
| **Целевой путь** | `geo/type/enum/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = RestProps & {
    markers?: MapMarker[];
    class?: string;
    mapClass?: string;
    markerClass?: string;
    showTooltip?: boolean;
    showSearch?: boolean;
    showZoomControls?: boolean;
    showCurrentLocation?: boolean;
    showScale?: boolean;
    showCompass?: boolean;
    showResetView?: boolean;
    initialView?: MapView;
    maxZoom?: number;
    minZoom?: number;
    mapType?: 'roadmap' | 'satellite' | 'terrain' | 'hybrid';
    onMarkerClick?: (marker: MapMarker) => void;
    onMapClick?: (coordinates: { lat: number; lng: number }) => void;
    onMapMove?: (view: MapView) => void;
    onMapZoom?: (zoom: number) => void;
    currency?: string;
    locale?: string;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `RestProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `MapMarker` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `MapView` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `MapMarker` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `MapView` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/information/type/struct';
import ... from '$stylist';
import ... from '$lib';
```

#### 💡 Рекомендация по миграции

Создать файл: `geo/type/enum/props/index.ts`

```typescript
// Extracted from: lib/geo/svelte/organism/map-with-markers/index.svelte:33
export type Props = RestProps & {
    markers?: MapMarker[];
    class?: string;
    mapClass?: string;
    markerClass?: string;
    showTooltip?: boolean;
    showSearch?: boolean;
    showZoomControls?: boolean;
    showCurrentLocation?: boolean;
    showScale?: boolean;
    showCompass?: boolean;
    showResetView?: boolean;
    initialView?: MapView;
    maxZoom?: number;
    minZoom?: number;
    mapType?: 'roadmap' | 'satellite' | 'terrain' | 'hybrid';
    onMarkerClick?: (marker: MapMarker) => void;
    onMapClick?: (coordinates: { lat: number; lng: number }) => void;
    onMapMove?: (view: MapView) => void;
    onMapZoom?: (zoom: number) => void;
    currency?: string;
    locale?: string;
  };
```

---

### `Location`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/geo/svelte/organism/route-planner/index.svelte` |
| **Строка** | 17 |
| **Целевой путь** | `geo/type/struct/location/index.ts` |

#### 📝 Определение типа

```typescript
type Location = {
    id: string;
    name: string;
    address: string;
    latitude: number;
    longitude: number;
    arrivalTime?: Date;
    departureTime?: Date;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `Location` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Date` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Date` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/information/type/struct';
import ... from '$stylist';
import ... from '$lib';
```

#### 💡 Рекомендация по миграции

Создать файл: `geo/type/struct/location/index.ts`

```typescript
// Extracted from: lib/geo/svelte/organism/route-planner/index.svelte:17
export type Location = {
    id: string;
    name: string;
    address: string;
    latitude: number;
    longitude: number;
    arrivalTime?: Date;
    departureTime?: Date;
  };
```

---

### `RouteOption`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/geo/svelte/organism/route-planner/index.svelte` |
| **Строка** | 27 |
| **Целевой путь** | `geo/type/struct/route-option/index.ts` |

#### 📝 Определение типа

```typescript
type RouteOption = {
    id: string;
    name: string;
    duration: number; // in minutes
    distance: number; // in km
    tolls?: boolean;
    highways?: boolean;
    ecoFriendly?: boolean;
    cost?: number;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `RouteOption` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/information/type/struct';
import ... from '$stylist';
import ... from '$lib';
```

#### 💡 Рекомендация по миграции

Создать файл: `geo/type/struct/route-option/index.ts`

```typescript
// Extracted from: lib/geo/svelte/organism/route-planner/index.svelte:27
export type RouteOption = {
    id: string;
    name: string;
    duration: number; // in minutes
    distance: number; // in km
    tolls?: boolean;
    highways?: boolean;
    ecoFriendly?: boolean;
    cost?: number;
  };
```

---

### `RestProps`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/geo/svelte/organism/route-planner/index.svelte` |
| **Строка** | 38 |
| **Целевой путь** | `geo/type/struct/rest-props/index.ts` |

#### 📝 Определение типа

```typescript
type RestProps = Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `RestProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `InformationHTMLAttributes` → импортируется из `$stylist//...`
- `HTMLDivElement` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/information/type/struct';
import ... from '$stylist';
import ... from '$lib';
```

#### 💡 Рекомендация по миграции

Создать файл: `geo/type/struct/rest-props/index.ts`

```typescript
// Extracted from: lib/geo/svelte/organism/route-planner/index.svelte:38
export type RestProps = Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'>;
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/geo/svelte/organism/route-planner/index.svelte` |
| **Строка** | 40 |
| **Целевой путь** | `geo/type/enum/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = RestProps & {
    startLocation?: Location;
    endLocation?: Location;
    waypoints?: Location[];
    routeOptions?: RouteOption[];
    selectedRoute?: string;
    showSearch?: boolean;
    showRouteOptions?: boolean;
    showDirections?: boolean;
    showMap?: boolean;
    showTravelMode?: boolean;
    travelModes?: ('driving' | 'walking' | 'cycling' | 'transit')[];
    class?: string;
    mapClass?: string;
    inputClass?: string;
    directionsClass?: string;
    optionClass?: string;
    onRouteCalculated?: (route: RouteOption) => void;
    onRouteSelect?: (routeId: string) => void;
    onLocationChange?: (type: 'start' | 'end' | 'waypoint', location: Location) => void;
    height?: string;
    width?: string;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `RestProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Location` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Location` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Location` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `RouteOption` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `RouteOption` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Location` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/information/type/struct';
import ... from '$stylist';
import ... from '$lib';
```

#### 💡 Рекомендация по миграции

Создать файл: `geo/type/enum/props/index.ts`

```typescript
// Extracted from: lib/geo/svelte/organism/route-planner/index.svelte:40
export type Props = RestProps & {
    startLocation?: Location;
    endLocation?: Location;
    waypoints?: Location[];
    routeOptions?: RouteOption[];
    selectedRoute?: string;
    showSearch?: boolean;
    showRouteOptions?: boolean;
    showDirections?: boolean;
    showMap?: boolean;
    showTravelMode?: boolean;
    travelModes?: ('driving' | 'walking' | 'cycling' | 'transit')[];
    class?: string;
    mapClass?: string;
    inputClass?: string;
    directionsClass?: string;
    optionClass?: string;
    onRouteCalculated?: (route: RouteOption) => void;
    onRouteSelect?: (routeId: string) => void;
    onLocationChange?: (type: 'start' | 'end' | 'waypoint', location: Location) => void;
    height?: string;
    width?: string;
  };
```

---

### `Store`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/geo/svelte/organism/store-locator/index.svelte` |
| **Строка** | 16 |
| **Целевой путь** | `geo/type/struct/store/index.ts` |

#### 📝 Определение типа

```typescript
export type Store = {
    id: string;
    name: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
    phone: string;
    hours: string; // Business hours
    rating: number;
    distance: number; // Distance from user in km
    latitude: number;
    longitude: number;
    inventory?: Record<string, number>; // Product ID to quantity mapping
    services?: string[]; // Services offered at this location
    pickupAvailable?: boolean;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `Store` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Business` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Distance` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Product` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `ID` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Services` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/information/type/struct';
import ... from '$stylist';
import ... from '$lib';
```

#### 💡 Рекомендация по миграции

Создать файл: `geo/type/struct/store/index.ts`

```typescript
// Extracted from: lib/geo/svelte/organism/store-locator/index.svelte:16
export type Store = {
    id: string;
    name: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
    phone: string;
    hours: string; // Business hours
    rating: number;
    distance: number; // Distance from user in km
    latitude: number;
    longitude: number;
    inventory?: Record<string, number>; // Product ID to quantity mapping
    services?: string[]; // Services offered at this location
    pickupAvailable?: boolean;
  };
```

---

### `RestProps`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/geo/svelte/organism/store-locator/index.svelte` |
| **Строка** | 35 |
| **Целевой путь** | `geo/type/struct/rest-props/index.ts` |

#### 📝 Определение типа

```typescript
type RestProps = Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `RestProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `InformationHTMLAttributes` → импортируется из `$stylist//...`
- `HTMLDivElement` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/information/type/struct';
import ... from '$stylist';
import ... from '$lib';
```

#### 💡 Рекомендация по миграции

Создать файл: `geo/type/struct/rest-props/index.ts`

```typescript
// Extracted from: lib/geo/svelte/organism/store-locator/index.svelte:35
export type RestProps = Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'>;
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/geo/svelte/organism/store-locator/index.svelte` |
| **Строка** | 37 |
| **Целевой путь** | `geo/type/struct/props/index.ts` |

#### 📝 Определение типа

```typescript
export type Props = RestProps & {
    stores: Store[];
    showSearch?: boolean;
    showFilters?: boolean;
    showDistance?: boolean;
    showRating?: boolean;
    showHours?: boolean;
    showServices?: boolean;
    enablePickupFilter?: boolean;
    enableServiceFilter?: boolean;
    maxStores?: number;
    radius?: number; // Search radius in km
    showMap?: boolean;
    onStoreSelect?: (store: Store) => void;
    onGetDirections?: (store: Store) => void;
    onCallStore?: (store: Store) => void;
    class?: string;
    headerClass?: string;
    searchClass?: string;
    storeClass?: string;
    mapClass?: string;
    filterClass?: string;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `RestProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Store` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Search` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Store` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Store` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Store` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/information/type/struct';
import ... from '$stylist';
import ... from '$lib';
```

#### 💡 Рекомендация по миграции

Создать файл: `geo/type/struct/props/index.ts`

```typescript
// Extracted from: lib/geo/svelte/organism/store-locator/index.svelte:37
export type Props = RestProps & {
    stores: Store[];
    showSearch?: boolean;
    showFilters?: boolean;
    showDistance?: boolean;
    showRating?: boolean;
    showHours?: boolean;
    showServices?: boolean;
    enablePickupFilter?: boolean;
    enableServiceFilter?: boolean;
    maxStores?: number;
    radius?: number; // Search radius in km
    showMap?: boolean;
    onStoreSelect?: (store: Store) => void;
    onGetDirections?: (store: Store) => void;
    onCallStore?: (store: Store) => void;
    class?: string;
    headerClass?: string;
    searchClass?: string;
    storeClass?: string;
    mapClass?: string;
    filterClass?: string;
  };
```

---

---

## Домен: `input` (34 типов)

### `InputSize`

| Параметр | Значение |
|---|---|
| **Категория** | unknown |
| **Компонент** | `lib/input/svelte/atom/input/advanced-input/index.svelte` |
| **Строка** | 21 |
| **Целевой путь** | `input/type/unknown/input-size/index.ts` |

#### 📝 Определение типа

```typescript
type InputSize = (typeof TOKEN_SIZE)[number];
```

#### 🔗 Зависимости

**Используемые типы:**

- `InputSize` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `TOKEN_SIZE` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from 'svelte/elements';
import ... from '$stylist/interaction/preset/component/index';
import ... from '$stylist/input/preset/input';
import ... from '$stylist/interaction/type/record/appearance';
import ... from '$stylist/layout/const/enum/size';
```

#### 💡 Рекомендация по миграции

Создать файл: `input/type/unknown/input-size/index.ts`

```typescript
// Extracted from: lib/input/svelte/atom/input/advanced-input/index.svelte:21
export type InputSize = (typeof TOKEN_SIZE)[number];
```

---

### `AdvancedInputProps`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/input/svelte/atom/input/advanced-input/index.svelte` |
| **Строка** | 23 |
| **Целевой путь** | `input/type/struct/advanced-input-props/index.ts` |

#### 📝 Определение типа

```typescript
type AdvancedInputProps = {
		label?: string;
		value?: string;
		placeholder?: string;
		type?: string;
		disabled?: boolean;
		error?: boolean;
		variant?: TokenAppearance;
		size?: InputSize;
		class?: string;
	} & Omit<HTMLInputAttributes, 'size'>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `AdvancedInputProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `TokenAppearance` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `InputSize` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `HTMLInputAttributes` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from 'svelte/elements';
import ... from '$stylist/interaction/preset/component/index';
import ... from '$stylist/input/preset/input';
import ... from '$stylist/interaction/type/record/appearance';
import ... from '$stylist/layout/const/enum/size';
```

#### 💡 Рекомендация по миграции

Создать файл: `input/type/struct/advanced-input-props/index.ts`

```typescript
// Extracted from: lib/input/svelte/atom/input/advanced-input/index.svelte:23
export type AdvancedInputProps = {
		label?: string;
		value?: string;
		placeholder?: string;
		type?: string;
		disabled?: boolean;
		error?: boolean;
		variant?: TokenAppearance;
		size?: InputSize;
		class?: string;
	} & Omit<HTMLInputAttributes, 'size'>;
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/input/svelte/atom/input/field/input-double/index.svelte` |
| **Строка** | 23 |
| **Целевой путь** | `input/type/struct/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = IInputDoubleProps;
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `IInputDoubleProps` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/input/function/state/input-text';
import ... from '$stylist/input/class/style-manager/input';
import ... from '$stylist/input/interface/component/input/other';
```

#### 💡 Рекомендация по миграции

Создать файл: `input/type/struct/props/index.ts`

```typescript
// Extracted from: lib/input/svelte/atom/input/field/input-double/index.svelte:23
export type Props = IInputDoubleProps;
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/input/svelte/atom/input/field/input-email/index.svelte` |
| **Строка** | 24 |
| **Целевой путь** | `input/type/enum/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = IInputEmailProps &
		Omit<HTMLInputAttributes, 'type' | 'size' | 'class' | 'autocomplete' | 'id' | 'disabled'>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `IInputEmailProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `HTMLInputAttributes` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from 'svelte/elements';
import ... from '$stylist/input/interface/component/input/other';
import ... from '../input-text/index.svelte';
```

#### 💡 Рекомендация по миграции

Создать файл: `input/type/enum/props/index.ts`

```typescript
// Extracted from: lib/input/svelte/atom/input/field/input-email/index.svelte:24
export type Props = IInputEmailProps &
		Omit<HTMLInputAttributes, 'type' | 'size' | 'class' | 'autocomplete' | 'id' | 'disabled'>;
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/input/svelte/atom/input/field/input-group/index.svelte` |
| **Строка** | 24 |
| **Целевой путь** | `input/type/enum/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = IInputGroupProps &
		Omit<HTMLInputAttributes, 'type' | 'size' | 'class' | 'autocomplete' | 'id' | 'disabled'>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `IInputGroupProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `HTMLInputAttributes` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from 'svelte/elements';
import ... from 'svelte';
import ... from '$stylist/input/function/state/input-text';
import ... from '$stylist/input/class/style-manager/input';
import ... from '$stylist/input/interface/component/input/other';
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `input/type/enum/props/index.ts`

```typescript
// Extracted from: lib/input/svelte/atom/input/field/input-group/index.svelte:24
export type Props = IInputGroupProps &
		Omit<HTMLInputAttributes, 'type' | 'size' | 'class' | 'autocomplete' | 'id' | 'disabled'>;
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/input/svelte/atom/input/field/input-long/index.svelte` |
| **Строка** | 24 |
| **Целевой путь** | `input/type/enum/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = IInputLongProps &
		Omit<HTMLTextareaAttributes, 'class' | 'autocomplete' | 'id' | 'disabled'>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `IInputLongProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `HTMLTextareaAttributes` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from 'svelte/elements';
import ... from 'svelte';
import ... from '$stylist/input/function/state/input-text';
import ... from '$stylist/input/class/style-manager/input';
import ... from '$stylist/input/interface/component/input/other';
```

#### 💡 Рекомендация по миграции

Создать файл: `input/type/enum/props/index.ts`

```typescript
// Extracted from: lib/input/svelte/atom/input/field/input-long/index.svelte:24
export type Props = IInputLongProps &
		Omit<HTMLTextareaAttributes, 'class' | 'autocomplete' | 'id' | 'disabled'>;
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/input/svelte/atom/input/field/input-password/index.svelte` |
| **Строка** | 14 |
| **Целевой путь** | `input/type/enum/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = IInputPasswordProps &
		Omit<HTMLInputAttributes, 'type' | 'size' | 'class' | 'autocomplete' | 'id' | 'disabled'>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `IInputPasswordProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `HTMLInputAttributes` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from 'svelte/elements';
import ... from 'svelte';
import ... from '$stylist';
import ... from '$stylist/input/function/state/input-text';
import ... from '$stylist/input/class/style-manager/input';
import ... from '$stylist/input/interface/component/input/other';
import ... from '$stylist/interaction/type/record/appearance';
```

#### 💡 Рекомендация по миграции

Создать файл: `input/type/enum/props/index.ts`

```typescript
// Extracted from: lib/input/svelte/atom/input/field/input-password/index.svelte:14
export type Props = IInputPasswordProps &
		Omit<HTMLInputAttributes, 'type' | 'size' | 'class' | 'autocomplete' | 'id' | 'disabled'>;
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/input/svelte/atom/input/field/input-text/index.svelte` |
| **Строка** | 28 |
| **Целевой путь** | `input/type/enum/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = IInputBaseProps<TokenAppearance, TokenSize> &
		Omit<HTMLInputAttributes, 'size' | 'class' | 'autocomplete' | 'id' | 'disabled'>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `IInputBaseProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `TokenAppearance` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `TokenSize` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `HTMLInputAttributes` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from 'svelte/elements';
import ... from 'svelte';
import ... from '$stylist/input/function/state/input-text';
import ... from '$stylist/input/class/style-manager/input';
import ... from '$stylist/input/interface/component/input/other';
import ... from '$stylist';
import ... from '$stylist/layout/type/enum/size';
```

#### 💡 Рекомендация по миграции

Создать файл: `input/type/enum/props/index.ts`

```typescript
// Extracted from: lib/input/svelte/atom/input/field/input-text/index.svelte:28
export type Props = IInputBaseProps<TokenAppearance, TokenSize> &
		Omit<HTMLInputAttributes, 'size' | 'class' | 'autocomplete' | 'id' | 'disabled'>;
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/input/svelte/atom/input/field/text-area/index.svelte` |
| **Строка** | 26 |
| **Целевой путь** | `input/type/enum/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = ITextareaProps &
		Omit<HTMLTextareaAttributes, 'class' | 'autocomplete' | 'id' | 'disabled'>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `ITextareaProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `HTMLTextareaAttributes` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from 'svelte/elements';
import ... from 'svelte';
import ... from '$stylist/input/function/state/text-area';
import ... from '$stylist/input/class/style-manager/input';
import ... from '$stylist/input/interface/component/input/other';
```

#### 💡 Рекомендация по миграции

Создать файл: `input/type/enum/props/index.ts`

```typescript
// Extracted from: lib/input/svelte/atom/input/field/text-area/index.svelte:26
export type Props = ITextareaProps &
		Omit<HTMLTextareaAttributes, 'class' | 'autocomplete' | 'id' | 'disabled'>;
```

---

### `CharacterCountProps`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/input/svelte/atom/input/helpers/characters-count/index.svelte` |
| **Строка** | 19 |
| **Целевой путь** | `input/type/struct/character-count-props/index.ts` |

#### 📝 Определение типа

```typescript
type CharacterCountProps = {
		current?: number;
		max?: number;
		showPercentage?: boolean;
		content?: import('svelte').Snippet;
		class?: string;
		variant?: TokenAppearance;
		size?: (typeof TOKEN_SIZE)[number];
	};
```

#### 🔗 Зависимости

**Используемые типы:**

- `CharacterCountProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Snippet` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `TokenAppearance` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `TOKEN_SIZE` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/input/function/script/create-character-count-state';
import ... from '$stylist/interaction/type/struct/interaction';
import ... from '$stylist/interaction/type/record/appearance';
import ... from '$stylist/layout/const/enum/size';
```

#### 💡 Рекомендация по миграции

Создать файл: `input/type/struct/character-count-props/index.ts`

```typescript
// Extracted from: lib/input/svelte/atom/input/helpers/characters-count/index.svelte:19
export type CharacterCountProps = {
		current?: number;
		max?: number;
		showPercentage?: boolean;
		content?: import('svelte').Snippet;
		class?: string;
		variant?: TokenAppearance;
		size?: (typeof TOKEN_SIZE)[number];
	};
```

---

### `FormErrorVariant`

| Параметр | Значение |
|---|---|
| **Категория** | unknown |
| **Компонент** | `lib/input/svelte/atom/input/helpers/form-error-message/index.svelte` |
| **Строка** | 17 |
| **Целевой путь** | `input/type/unknown/form-error-variant/index.ts` |

#### 📝 Определение типа

```typescript
type FormErrorVariant = TokenAppearance;
```

#### 🔗 Зависимости

**Используемые типы:**

- `FormErrorVariant` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `TokenAppearance` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/input/function/script/create-form-error-message-state';
import ... from '$stylist/interaction/type/struct/interaction';
import ... from '$stylist/layout/type/enum/size';
import ... from '$stylist/interaction/type/record/appearance';
```

#### 💡 Рекомендация по миграции

Создать файл: `input/type/unknown/form-error-variant/index.ts`

```typescript
// Extracted from: lib/input/svelte/atom/input/helpers/form-error-message/index.svelte:17
export type FormErrorVariant = TokenAppearance;
```

---

### `FormErrorMessageProps`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/input/svelte/atom/input/helpers/form-error-message/index.svelte` |
| **Строка** | 18 |
| **Целевой путь** | `input/type/struct/form-error-message-props/index.ts` |

#### 📝 Определение типа

```typescript
type FormErrorMessageProps = {
		variant?: TokenAppearance;
		size?: TokenSize;
		visible?: boolean;
		text?: string;
		content?: import('svelte').Snippet;
		class?: string;
	};
```

#### 🔗 Зависимости

**Используемые типы:**

- `FormErrorMessageProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `TokenAppearance` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `TokenSize` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Snippet` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/input/function/script/create-form-error-message-state';
import ... from '$stylist/interaction/type/struct/interaction';
import ... from '$stylist/layout/type/enum/size';
import ... from '$stylist/interaction/type/record/appearance';
```

#### 💡 Рекомендация по миграции

Создать файл: `input/type/struct/form-error-message-props/index.ts`

```typescript
// Extracted from: lib/input/svelte/atom/input/helpers/form-error-message/index.svelte:18
export type FormErrorMessageProps = {
		variant?: TokenAppearance;
		size?: TokenSize;
		visible?: boolean;
		text?: string;
		content?: import('svelte').Snippet;
		class?: string;
	};
```

---

### `FormHelperVariant`

| Параметр | Значение |
|---|---|
| **Категория** | unknown |
| **Компонент** | `lib/input/svelte/atom/input/helpers/form-helper-text/index.svelte` |
| **Строка** | 17 |
| **Целевой путь** | `input/type/unknown/form-helper-variant/index.ts` |

#### 📝 Определение типа

```typescript
type FormHelperVariant = TokenAppearance;
```

#### 🔗 Зависимости

**Используемые типы:**

- `FormHelperVariant` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `TokenAppearance` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/input/function/script/create-form-helper-text-state';
import ... from '$stylist/interaction/type/struct/interaction';
import ... from '$stylist/layout/type/enum/size';
import ... from '$stylist/interaction/type/record/appearance';
```

#### 💡 Рекомендация по миграции

Создать файл: `input/type/unknown/form-helper-variant/index.ts`

```typescript
// Extracted from: lib/input/svelte/atom/input/helpers/form-helper-text/index.svelte:17
export type FormHelperVariant = TokenAppearance;
```

---

### `FormHelperTextProps`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/input/svelte/atom/input/helpers/form-helper-text/index.svelte` |
| **Строка** | 18 |
| **Целевой путь** | `input/type/struct/form-helper-text-props/index.ts` |

#### 📝 Определение типа

```typescript
type FormHelperTextProps = {
		variant?: TokenAppearance;
		size?: TokenSize;
		text?: string;
		content?: import('svelte').Snippet;
		class?: string;
	};
```

#### 🔗 Зависимости

**Используемые типы:**

- `FormHelperTextProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `TokenAppearance` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `TokenSize` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Snippet` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/input/function/script/create-form-helper-text-state';
import ... from '$stylist/interaction/type/struct/interaction';
import ... from '$stylist/layout/type/enum/size';
import ... from '$stylist/interaction/type/record/appearance';
```

#### 💡 Рекомендация по миграции

Создать файл: `input/type/struct/form-helper-text-props/index.ts`

```typescript
// Extracted from: lib/input/svelte/atom/input/helpers/form-helper-text/index.svelte:18
export type FormHelperTextProps = {
		variant?: TokenAppearance;
		size?: TokenSize;
		text?: string;
		content?: import('svelte').Snippet;
		class?: string;
	};
```

---

### `InputAddonProps`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/input/svelte/atom/input/helpers/input-addon/index.svelte` |
| **Строка** | 8 |
| **Целевой путь** | `input/type/enum/input-addon-props/index.ts` |

#### 📝 Определение типа

```typescript
type InputAddonProps = {
		position?: 'left' | 'right';
		variant?: TokenAppearance;
		size?: TokenSize;
		class?: string;
		children?: import('svelte').Snippet;
	};
```

#### 🔗 Зависимости

**Используемые типы:**

- `InputAddonProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `TokenAppearance` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `TokenSize` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Snippet` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/input/function/script/create-input-addon-state';
import ... from '$stylist/interaction/type/struct/interaction';
import ... from '$stylist/layout/type/enum/size';
import ... from '$stylist/interaction/type/record/appearance';
```

#### 💡 Рекомендация по миграции

Создать файл: `input/type/enum/input-addon-props/index.ts`

```typescript
// Extracted from: lib/input/svelte/atom/input/helpers/input-addon/index.svelte:8
export type InputAddonProps = {
		position?: 'left' | 'right';
		variant?: TokenAppearance;
		size?: TokenSize;
		class?: string;
		children?: import('svelte').Snippet;
	};
```

---

### `PinInputSize`

| Параметр | Значение |
|---|---|
| **Категория** | unknown |
| **Компонент** | `lib/input/svelte/atom/input/helpers/input-pin-digit/index.svelte` |
| **Строка** | 8 |
| **Целевой путь** | `input/type/unknown/pin-input-size/index.ts` |

#### 📝 Определение типа

```typescript
type PinInputSize = (typeof TOKEN_SIZE)[number];
```

#### 🔗 Зависимости

**Используемые типы:**

- `PinInputSize` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `TOKEN_SIZE` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/input/function/script/create-pin-input-digit-state';
import ... from 'svelte/elements';
import ... from '$stylist/layout/const/enum/size';
import ... from '$stylist/interaction/type/record/appearance';
```

#### 💡 Рекомендация по миграции

Создать файл: `input/type/unknown/pin-input-size/index.ts`

```typescript
// Extracted from: lib/input/svelte/atom/input/helpers/input-pin-digit/index.svelte:8
export type PinInputSize = (typeof TOKEN_SIZE)[number];
```

---

### `InputAttributes`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/input/svelte/atom/input/helpers/input-pin-digit/index.svelte` |
| **Строка** | 10 |
| **Целевой путь** | `input/type/enum/input-attributes/index.ts` |

#### 📝 Определение типа

```typescript
type InputAttributes = Omit<
		HTMLInputAttributes,
		'size' | 'class' | 'onchange' | 'onfocus' | 'onblur' | 'onkeydown'
	>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `InputAttributes` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `HTMLInputAttributes` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/input/function/script/create-pin-input-digit-state';
import ... from 'svelte/elements';
import ... from '$stylist/layout/const/enum/size';
import ... from '$stylist/interaction/type/record/appearance';
```

#### 💡 Рекомендация по миграции

Создать файл: `input/type/enum/input-attributes/index.ts`

```typescript
// Extracted from: lib/input/svelte/atom/input/helpers/input-pin-digit/index.svelte:10
export type InputAttributes = Omit<
		HTMLInputAttributes,
		'size' | 'class' | 'onchange' | 'onfocus' | 'onblur' | 'onkeydown'
	>;
```

---

### `PinInputDigitProps`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/input/svelte/atom/input/helpers/input-pin-digit/index.svelte` |
| **Строка** | 15 |
| **Целевой путь** | `input/type/struct/pin-input-digit-props/index.ts` |

#### 📝 Определение типа

```typescript
type PinInputDigitProps = {
		id?: string;
		label?: string;
		errors?: string[];
		focused?: boolean;
		invalid?: boolean;
		class?: string;
		variant?: TokenAppearance;
		size?: PinInputSize;
		value?: string;
		onChange?: (value: string, index: number) => void;
		onFocus?: (index: number) => void;
		onBlur?: () => void;
		onKeyDown?: (e: KeyboardEvent, index: number) => void;
	} & InputAttributes;
```

#### 🔗 Зависимости

**Используемые типы:**

- `PinInputDigitProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `TokenAppearance` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `PinInputSize` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `KeyboardEvent` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `InputAttributes` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/input/function/script/create-pin-input-digit-state';
import ... from 'svelte/elements';
import ... from '$stylist/layout/const/enum/size';
import ... from '$stylist/interaction/type/record/appearance';
```

#### 💡 Рекомендация по миграции

Создать файл: `input/type/struct/pin-input-digit-props/index.ts`

```typescript
// Extracted from: lib/input/svelte/atom/input/helpers/input-pin-digit/index.svelte:15
export type PinInputDigitProps = {
		id?: string;
		label?: string;
		errors?: string[];
		focused?: boolean;
		invalid?: boolean;
		class?: string;
		variant?: TokenAppearance;
		size?: PinInputSize;
		value?: string;
		onChange?: (value: string, index: number) => void;
		onFocus?: (index: number) => void;
		onBlur?: () => void;
		onKeyDown?: (e: KeyboardEvent, index: number) => void;
	} & InputAttributes;
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/input/svelte/atom/input/number-input/index.svelte` |
| **Строка** | 10 |
| **Целевой путь** | `input/type/struct/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = {
    value?: number;
    min?: number;
    max?: number;
    step?: number;
    disabled?: boolean;
    readonly?: boolean;
    class?: string;
    inputClass?: string;
    buttonClass?: string;
    buttonWrapperClass?: string;
    onValueInput?: (value: number) => void;
    onValueChange?: (value: number) => void;
    onChange?: (value: number) => void;
  } & InteractionHTMLAttributes<HTMLInputElement>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `InteractionHTMLAttributes` → импортируется из `$stylist//...`
- `HTMLInputElement` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/interaction/type/struct/interaction';
import ... from '$stylist';
import ... from '$stylist/input/function/state/number-input';
```

#### 💡 Рекомендация по миграции

Создать файл: `input/type/struct/props/index.ts`

```typescript
// Extracted from: lib/input/svelte/atom/input/number-input/index.svelte:10
export type Props = {
    value?: number;
    min?: number;
    max?: number;
    step?: number;
    disabled?: boolean;
    readonly?: boolean;
    class?: string;
    inputClass?: string;
    buttonClass?: string;
    buttonWrapperClass?: string;
    onValueInput?: (value: number) => void;
    onValueChange?: (value: number) => void;
    onChange?: (value: number) => void;
  } & InteractionHTMLAttributes<HTMLInputElement>;
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/input/svelte/molecule/input/field-highlighter/index.svelte` |
| **Строка** | 26 |
| **Целевой путь** | `input/type/enum/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = {
    data: GraphVisualizationData;
    selectedNode?: GraphNode | null;
    selectedField?: any | null;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `GraphVisualizationData` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `GraphNode` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from 'svelte';
```

#### 💡 Рекомендация по миграции

Создать файл: `input/type/enum/props/index.ts`

```typescript
// Extracted from: lib/input/svelte/molecule/input/field-highlighter/index.svelte:26
export type Props = {
    data: GraphVisualizationData;
    selectedNode?: GraphNode | null;
    selectedField?: any | null;
  };
```

---

### `RestProps`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/input/svelte/molecule/input/pickers/color-picker/index.svelte` |
| **Строка** | 8 |
| **Целевой путь** | `input/type/enum/rest-props/index.ts` |

#### 📝 Определение типа

```typescript
type RestProps = Omit<InteractionHTMLAttributes<HTMLInputElement>, 'class' | 'value' | 'on:input' | 'on:change'>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `RestProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `InteractionHTMLAttributes` → импортируется из `$stylist//...`
- `HTMLInputElement` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/interaction/type/struct/interaction';
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `input/type/enum/rest-props/index.ts`

```typescript
// Extracted from: lib/input/svelte/molecule/input/pickers/color-picker/index.svelte:8
export type RestProps = Omit<InteractionHTMLAttributes<HTMLInputElement>, 'class' | 'value' | 'on:input' | 'on:change'>;
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/input/svelte/molecule/input/pickers/color-picker/index.svelte` |
| **Строка** | 10 |
| **Целевой путь** | `input/type/struct/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = RestProps & {
    value?: string;
    class?: string;
    inputClass?: string;
    pickerClass?: string;
    label?: string;
    helperText?: string;
    error?: string;
    onValueInput?: (value: string, event?: Event) => void;
    onValueChange?: (value: string, event?: Event) => void;
    /** @deprecated use onValueInput/onValueChange */
    onInput?: (value: string, event?: Event) => void;
    /** @deprecated use onValueChange */
    onChange?: (value: string, event?: Event) => void;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `RestProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Event` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Event` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Event` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Event` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/interaction/type/struct/interaction';
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `input/type/struct/props/index.ts`

```typescript
// Extracted from: lib/input/svelte/molecule/input/pickers/color-picker/index.svelte:10
export type Props = RestProps & {
    value?: string;
    class?: string;
    inputClass?: string;
    pickerClass?: string;
    label?: string;
    helperText?: string;
    error?: string;
    onValueInput?: (value: string, event?: Event) => void;
    onValueChange?: (value: string, event?: Event) => void;
    /** @deprecated use onValueInput/onValueChange */
    onInput?: (value: string, event?: Event) => void;
    /** @deprecated use onValueChange */
    onChange?: (value: string, event?: Event) => void;
  };
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/input/svelte/molecule/input/pickers/date-picker/index.svelte` |
| **Строка** | 5 |
| **Целевой путь** | `input/type/struct/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = {
    value?: Date;
    minDate?: Date;
    maxDate?: Date;
    disabled?: boolean;
    placeholder?: string;
    dateFormat?: string; // Could implement custom formatting
  } & HTMLInputAttributes;
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Date` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Date` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Date` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Could` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `HTMLInputAttributes` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from 'svelte/elements';
```

#### 💡 Рекомендация по миграции

Создать файл: `input/type/struct/props/index.ts`

```typescript
// Extracted from: lib/input/svelte/molecule/input/pickers/date-picker/index.svelte:5
export type Props = {
    value?: Date;
    minDate?: Date;
    maxDate?: Date;
    disabled?: boolean;
    placeholder?: string;
    dateFormat?: string; // Could implement custom formatting
  } & HTMLInputAttributes;
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/input/svelte/molecule/input/pickers/date-time-picker/index.svelte` |
| **Строка** | 9 |
| **Целевой путь** | `input/type/struct/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = {
    value?: Date;
    minDate?: Date;
    maxDate?: Date;
    disabled?: boolean;
    class?: string;
    dateClass?: string;
    timeClass?: string;
    dropdownClass?: string;
  } & InteractionHTMLAttributes<HTMLInputElement>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Date` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Date` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Date` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `InteractionHTMLAttributes` → импортируется из `$stylist//...`
- `HTMLInputElement` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/interaction/type/struct/interaction';
import ... from '../form-date-picker/index.svelte';
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `input/type/struct/props/index.ts`

```typescript
// Extracted from: lib/input/svelte/molecule/input/pickers/date-time-picker/index.svelte:9
export type Props = {
    value?: Date;
    minDate?: Date;
    maxDate?: Date;
    disabled?: boolean;
    class?: string;
    dateClass?: string;
    timeClass?: string;
    dropdownClass?: string;
  } & InteractionHTMLAttributes<HTMLInputElement>;
```

---

### `RestProps`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/input/svelte/molecule/input/pickers/form-date-picker/index.svelte` |
| **Строка** | 8 |
| **Целевой путь** | `input/type/enum/rest-props/index.ts` |

#### 📝 Определение типа

```typescript
type RestProps = Omit<InteractionHTMLAttributes<HTMLInputElement>, 'class' | 'value' | 'on:input' | 'on:change'>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `RestProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `InteractionHTMLAttributes` → импортируется из `$stylist//...`
- `HTMLInputElement` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/interaction/type/struct/interaction';
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `input/type/enum/rest-props/index.ts`

```typescript
// Extracted from: lib/input/svelte/molecule/input/pickers/form-date-picker/index.svelte:8
export type RestProps = Omit<InteractionHTMLAttributes<HTMLInputElement>, 'class' | 'value' | 'on:input' | 'on:change'>;
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/input/svelte/molecule/input/pickers/form-date-picker/index.svelte` |
| **Строка** | 10 |
| **Целевой путь** | `input/type/struct/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = RestProps & {
    value?: string;
    class?: string;
    inputClass?: string;
    calendarClass?: string;
    label?: string;
    helperText?: string;
    error?: string;
    minDate?: string;
    maxDate?: string;
    placeholder?: string;
    onValueInput?: (value: string, event?: Event) => void;
    onValueChange?: (value: string, event?: Event) => void;
    /** @deprecated use onValueInput/onValueChange */
    onInput?: (value: string, event?: Event) => void;
    /** @deprecated use onValueChange */
    onChange?: (value: string, event?: Event) => void;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `RestProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Event` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Event` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Event` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Event` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/interaction/type/struct/interaction';
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `input/type/struct/props/index.ts`

```typescript
// Extracted from: lib/input/svelte/molecule/input/pickers/form-date-picker/index.svelte:10
export type Props = RestProps & {
    value?: string;
    class?: string;
    inputClass?: string;
    calendarClass?: string;
    label?: string;
    helperText?: string;
    error?: string;
    minDate?: string;
    maxDate?: string;
    placeholder?: string;
    onValueInput?: (value: string, event?: Event) => void;
    onValueChange?: (value: string, event?: Event) => void;
    /** @deprecated use onValueInput/onValueChange */
    onInput?: (value: string, event?: Event) => void;
    /** @deprecated use onValueChange */
    onChange?: (value: string, event?: Event) => void;
  };
```

---

### `ReactionType`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/input/svelte/molecule/input/pickers/reaction-picker/index.svelte` |
| **Строка** | 19 |
| **Целевой путь** | `input/type/enum/reaction-type/index.ts` |

#### 📝 Определение типа

```typescript
type ReactionType = 'like' | 'love' | 'laugh' | 'wow' | 'sad' | 'angry' | 'care' | 'share' | 'save' | 'view';
```

#### 🔗 Зависимости

**Используемые типы:**

- `ReactionType` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/interaction/type/struct/interaction';
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `input/type/enum/reaction-type/index.ts`

```typescript
// Extracted from: lib/input/svelte/molecule/input/pickers/reaction-picker/index.svelte:19
export type ReactionType = 'like' | 'love' | 'laugh' | 'wow' | 'sad' | 'angry' | 'care' | 'share' | 'save' | 'view';
```

---

### `Reaction`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/input/svelte/molecule/input/pickers/reaction-picker/index.svelte` |
| **Строка** | 21 |
| **Целевой путь** | `input/type/struct/reaction/index.ts` |

#### 📝 Определение типа

```typescript
type Reaction = {
    type: ReactionType;
    count: number;
    active: boolean;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `Reaction` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `ReactionType` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/interaction/type/struct/interaction';
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `input/type/struct/reaction/index.ts`

```typescript
// Extracted from: lib/input/svelte/molecule/input/pickers/reaction-picker/index.svelte:21
export type Reaction = {
    type: ReactionType;
    count: number;
    active: boolean;
  };
```

---

### `RestProps`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/input/svelte/molecule/input/pickers/reaction-picker/index.svelte` |
| **Строка** | 27 |
| **Целевой путь** | `input/type/struct/rest-props/index.ts` |

#### 📝 Определение типа

```typescript
type RestProps = Omit<InteractionHTMLAttributes<HTMLDivElement>, 'class'>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `RestProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `InteractionHTMLAttributes` → импортируется из `$stylist//...`
- `HTMLDivElement` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/interaction/type/struct/interaction';
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `input/type/struct/rest-props/index.ts`

```typescript
// Extracted from: lib/input/svelte/molecule/input/pickers/reaction-picker/index.svelte:27
export type RestProps = Omit<InteractionHTMLAttributes<HTMLDivElement>, 'class'>;
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/input/svelte/molecule/input/pickers/reaction-picker/index.svelte` |
| **Строка** | 29 |
| **Целевой путь** | `input/type/enum/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = RestProps & {
    reactions: Reaction[];
    maxReactions?: number;
    showCounts?: boolean;
    showPicker?: boolean;
    size?: 'sm' | 'md' | 'lg';
    class?: string;
    reactionClass?: string;
    pickerClass?: string;
    onReactionToggle?: (reaction: ReactionType) => void;
    showPickerOnHover?: boolean;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `RestProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Reaction` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `ReactionType` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/interaction/type/struct/interaction';
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `input/type/enum/props/index.ts`

```typescript
// Extracted from: lib/input/svelte/molecule/input/pickers/reaction-picker/index.svelte:29
export type Props = RestProps & {
    reactions: Reaction[];
    maxReactions?: number;
    showCounts?: boolean;
    showPicker?: boolean;
    size?: 'sm' | 'md' | 'lg';
    class?: string;
    reactionClass?: string;
    pickerClass?: string;
    onReactionToggle?: (reaction: ReactionType) => void;
    showPickerOnHover?: boolean;
  };
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/input/svelte/molecule/input/pickers/time-picker/index.svelte` |
| **Строка** | 9 |
| **Целевой путь** | `input/type/struct/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = {
    value?: string;
    disabled?: boolean;
    class?: string;
    dropdownClass?: string;
    showSeconds?: boolean;
    onValueInput?: (time: string) => void;
    onValueChange?: (time: string) => void;
    /** @deprecated use onValueChange */
    onChange?: (time: string) => void;
  } & InteractionHTMLAttributes<HTMLInputElement>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `InteractionHTMLAttributes` → импортируется из `$stylist//...`
- `HTMLInputElement` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist';
import ... from 'svelte';
import ... from '$stylist/interaction/type/struct/interaction';
```

#### 💡 Рекомендация по миграции

Создать файл: `input/type/struct/props/index.ts`

```typescript
// Extracted from: lib/input/svelte/molecule/input/pickers/time-picker/index.svelte:9
export type Props = {
    value?: string;
    disabled?: boolean;
    class?: string;
    dropdownClass?: string;
    showSeconds?: boolean;
    onValueInput?: (time: string) => void;
    onValueChange?: (time: string) => void;
    /** @deprecated use onValueChange */
    onChange?: (time: string) => void;
  } & InteractionHTMLAttributes<HTMLInputElement>;
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/input/svelte/molecule/input/slider-with-input/index.svelte` |
| **Строка** | 5 |
| **Целевой путь** | `input/type/struct/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = {
    value?: number;
    min?: number;
    max?: number;
    step?: number;
    disabled?: boolean;
    showInput?: boolean;
    inputWidth?: string;
    class?: string;
    sliderClass?: string;
    inputClass?: string;
    onValueInput?: (value: number) => void;
    onValueChange?: (value: number) => void;
    /** @deprecated use onValueInput/onValueChange */
    onInput?: (value: number) => void;
    /** @deprecated use onValueChange */
    onChange?: (value: number) => void;
  } & InteractionHTMLAttributes<HTMLDivElement>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `InteractionHTMLAttributes` → импортируется из `$stylist//...`
- `HTMLDivElement` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/interaction/type/struct/interaction';
```

#### 💡 Рекомендация по миграции

Создать файл: `input/type/struct/props/index.ts`

```typescript
// Extracted from: lib/input/svelte/molecule/input/slider-with-input/index.svelte:5
export type Props = {
    value?: number;
    min?: number;
    max?: number;
    step?: number;
    disabled?: boolean;
    showInput?: boolean;
    inputWidth?: string;
    class?: string;
    sliderClass?: string;
    inputClass?: string;
    onValueInput?: (value: number) => void;
    onValueChange?: (value: number) => void;
    /** @deprecated use onValueInput/onValueChange */
    onInput?: (value: number) => void;
    /** @deprecated use onValueChange */
    onChange?: (value: number) => void;
  } & InteractionHTMLAttributes<HTMLDivElement>;
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/input/svelte/molecule/search/search-bar/index.svelte` |
| **Строка** | 21 |
| **Целевой путь** | `input/type/struct/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = ISearchBarProps & InteractionHTMLAttributes<HTMLDivElement>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `ISearchBarProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `InteractionHTMLAttributes` → импортируется из `$stylist//...`
- `HTMLDivElement` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist';
import ... from '$stylist/input/function/state/search-bar';
import ... from '$stylist/control/class/style-manager/search-bar';
import ... from '$stylist/control/interface/component/search-bar/other';
import ... from '$stylist/interaction/type/struct/interaction';
```

#### 💡 Рекомендация по миграции

Создать файл: `input/type/struct/props/index.ts`

```typescript
// Extracted from: lib/input/svelte/molecule/search/search-bar/index.svelte:21
export type Props = ISearchBarProps & InteractionHTMLAttributes<HTMLDivElement>;
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/input/svelte/organism/content/content-editor/index.svelte` |
| **Строка** | 25 |
| **Целевой путь** | `input/type/struct/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = {
		initialContent?: Array<{ id: string; type: ContentType; content: string; attributes?: Record<string, any> }>;
		onSave?: (content: Array<{ id: string; type: ContentType; content: string; attributes?: Record<string, any> }>) => void;
		onPreview?: () => void;
		placeholder?: string;
		showToolbar?: boolean;
		showPreviewButton?: boolean;
		class?: string;
		toolbarClass?: string;
		editorClass?: string;
		contentClass?: string;
	} & InteractionHTMLAttributes<HTMLDivElement>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `ContentType` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `ContentType` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `InteractionHTMLAttributes` → импортируется из `$stylist//...`
- `HTMLDivElement` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/interaction/type/struct/interaction';
import ... from '$stylist';
import ... from '$stylist/input/function/state/content-editor';
import ... from '$stylist/input/class/style-manager/content-editor';
```

#### 💡 Рекомендация по миграции

Создать файл: `input/type/struct/props/index.ts`

```typescript
// Extracted from: lib/input/svelte/organism/content/content-editor/index.svelte:25
export type Props = {
		initialContent?: Array<{ id: string; type: ContentType; content: string; attributes?: Record<string, any> }>;
		onSave?: (content: Array<{ id: string; type: ContentType; content: string; attributes?: Record<string, any> }>) => void;
		onPreview?: () => void;
		placeholder?: string;
		showToolbar?: boolean;
		showPreviewButton?: boolean;
		class?: string;
		toolbarClass?: string;
		editorClass?: string;
		contentClass?: string;
	} & InteractionHTMLAttributes<HTMLDivElement>;
```

---

---

## Домен: `layout` (11 типов)

### `GridProps`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/layout/svelte/atom/grid/index.svelte` |
| **Строка** | 6 |
| **Целевой путь** | `layout/type/struct/grid-props/index.ts` |

#### 📝 Определение типа

```typescript
type GridProps = SVGAttributes<SVGSVGElement> & {
		class?: string;
		zoom?: number;
		gridSize?: number;
		color?: string;
		visible?: boolean;
	};
```

#### 🔗 Зависимости

**Используемые типы:**

- `GridProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `SVGAttributes` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `SVGSVGElement` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from 'svelte/elements';
import ... from '$stylist/layout/class/style-manager/grid';
```

#### 💡 Рекомендация по миграции

Создать файл: `layout/type/struct/grid-props/index.ts`

```typescript
// Extracted from: lib/layout/svelte/atom/grid/index.svelte:6
export type GridProps = SVGAttributes<SVGSVGElement> & {
		class?: string;
		zoom?: number;
		gridSize?: number;
		color?: string;
		visible?: boolean;
	};
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/layout/svelte/molecule/animated-expandable-table-row/index.svelte` |
| **Строка** | 10 |
| **Целевой путь** | `layout/type/struct/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = {
    expanded?: boolean;
    expandable?: boolean;
    expandIcon?: string;
    collapseIcon?: string;
    colspan?: number;
    children: Snippet;
    details: Snippet;
  } & ArchitectureHTMLAttributes<HTMLTableRowElement>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Snippet` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Snippet` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `ArchitectureHTMLAttributes` → импортируется из `$stylist//...`
- `HTMLTableRowElement` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/layout/type/struct';
import ... from 'svelte';
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `layout/type/struct/props/index.ts`

```typescript
// Extracted from: lib/layout/svelte/molecule/animated-expandable-table-row/index.svelte:10
export type Props = {
    expanded?: boolean;
    expandable?: boolean;
    expandIcon?: string;
    collapseIcon?: string;
    colspan?: number;
    children: Snippet;
    details: Snippet;
  } & ArchitectureHTMLAttributes<HTMLTableRowElement>;
```

---

### `RestProps`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/layout/svelte/molecule/grid/index.svelte` |
| **Строка** | 6 |
| **Целевой путь** | `layout/type/struct/rest-props/index.ts` |

#### 📝 Определение типа

```typescript
type RestProps = Omit<ArchitectureHTMLAttributes<HTMLDivElement>, 'class'>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `RestProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `ArchitectureHTMLAttributes` → импортируется из `$stylist//...`
- `HTMLDivElement` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/layout/type/struct';
import ... from 'svelte';
```

#### 💡 Рекомендация по миграции

Создать файл: `layout/type/struct/rest-props/index.ts`

```typescript
// Extracted from: lib/layout/svelte/molecule/grid/index.svelte:6
export type RestProps = Omit<ArchitectureHTMLAttributes<HTMLDivElement>, 'class'>;
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/layout/svelte/molecule/grid/index.svelte` |
| **Строка** | 8 |
| **Целевой путь** | `layout/type/enum/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = RestProps & {
    children: Snippet;
    class?: string;
    cols?: number;
    gap?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
    responsive?: boolean;
    alignItems?: 'start' | 'center' | 'end' | 'stretch';
    justifyContent?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `RestProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Snippet` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/layout/type/struct';
import ... from 'svelte';
```

#### 💡 Рекомендация по миграции

Создать файл: `layout/type/enum/props/index.ts`

```typescript
// Extracted from: lib/layout/svelte/molecule/grid/index.svelte:8
export type Props = RestProps & {
    children: Snippet;
    class?: string;
    cols?: number;
    gap?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
    responsive?: boolean;
    alignItems?: 'start' | 'center' | 'end' | 'stretch';
    justifyContent?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  };
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/layout/svelte/molecule/layout/animated-expandable-table-row/index.svelte` |
| **Строка** | 10 |
| **Целевой путь** | `layout/type/struct/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = {
    expanded?: boolean;
    expandable?: boolean;
    expandIcon?: string;
    collapseIcon?: string;
    colspan?: number;
    children: Snippet;
    details: Snippet;
  } & ArchitectureHTMLAttributes<HTMLTableRowElement>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Snippet` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Snippet` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `ArchitectureHTMLAttributes` → импортируется из `$stylist//...`
- `HTMLTableRowElement` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/layout/type/struct';
import ... from 'svelte';
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `layout/type/struct/props/index.ts`

```typescript
// Extracted from: lib/layout/svelte/molecule/layout/animated-expandable-table-row/index.svelte:10
export type Props = {
    expanded?: boolean;
    expandable?: boolean;
    expandIcon?: string;
    collapseIcon?: string;
    colspan?: number;
    children: Snippet;
    details: Snippet;
  } & ArchitectureHTMLAttributes<HTMLTableRowElement>;
```

---

### `RestProps`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/layout/svelte/molecule/layout/grid/index.svelte` |
| **Строка** | 6 |
| **Целевой путь** | `layout/type/struct/rest-props/index.ts` |

#### 📝 Определение типа

```typescript
type RestProps = Omit<ArchitectureHTMLAttributes<HTMLDivElement>, 'class'>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `RestProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `ArchitectureHTMLAttributes` → импортируется из `$stylist//...`
- `HTMLDivElement` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/layout/type/struct';
import ... from 'svelte';
```

#### 💡 Рекомендация по миграции

Создать файл: `layout/type/struct/rest-props/index.ts`

```typescript
// Extracted from: lib/layout/svelte/molecule/layout/grid/index.svelte:6
export type RestProps = Omit<ArchitectureHTMLAttributes<HTMLDivElement>, 'class'>;
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/layout/svelte/molecule/layout/grid/index.svelte` |
| **Строка** | 8 |
| **Целевой путь** | `layout/type/enum/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = RestProps & {
    children: Snippet;
    class?: string;
    cols?: number;
    gap?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
    responsive?: boolean;
    alignItems?: 'start' | 'center' | 'end' | 'stretch';
    justifyContent?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `RestProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Snippet` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/layout/type/struct';
import ... from 'svelte';
```

#### 💡 Рекомендация по миграции

Создать файл: `layout/type/enum/props/index.ts`

```typescript
// Extracted from: lib/layout/svelte/molecule/layout/grid/index.svelte:8
export type Props = RestProps & {
    children: Snippet;
    class?: string;
    cols?: number;
    gap?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
    responsive?: boolean;
    alignItems?: 'start' | 'center' | 'end' | 'stretch';
    justifyContent?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
  };
```

---

### `RestProps`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/layout/svelte/molecule/layout/split-layout/index.svelte` |
| **Строка** | 6 |
| **Целевой путь** | `layout/type/struct/rest-props/index.ts` |

#### 📝 Определение типа

```typescript
type RestProps = Omit<ArchitectureHTMLAttributes<HTMLDivElement>, 'class'>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `RestProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `ArchitectureHTMLAttributes` → импортируется из `$stylist//...`
- `HTMLDivElement` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/layout/type/struct';
import ... from 'svelte';
```

#### 💡 Рекомендация по миграции

Создать файл: `layout/type/struct/rest-props/index.ts`

```typescript
// Extracted from: lib/layout/svelte/molecule/layout/split-layout/index.svelte:6
export type RestProps = Omit<ArchitectureHTMLAttributes<HTMLDivElement>, 'class'>;
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/layout/svelte/molecule/layout/split-layout/index.svelte` |
| **Строка** | 8 |
| **Целевой путь** | `layout/type/enum/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = RestProps & {
    primary: Snippet;
    secondary: Snippet;
    class?: string;
    gap?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
    direction?: 'horizontal' | 'vertical';
    primarySize?: '1/4' | '1/3' | '2/5' | '1/2' | '3/5' | '2/3' | '3/4';
    secondarySize?: '1/4' | '1/3' | '2/5' | '1/2' | '3/5' | '2/3' | '3/4';
    responsive?: boolean;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `RestProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Snippet` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Snippet` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/layout/type/struct';
import ... from 'svelte';
```

#### 💡 Рекомендация по миграции

Создать файл: `layout/type/enum/props/index.ts`

```typescript
// Extracted from: lib/layout/svelte/molecule/layout/split-layout/index.svelte:8
export type Props = RestProps & {
    primary: Snippet;
    secondary: Snippet;
    class?: string;
    gap?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
    direction?: 'horizontal' | 'vertical';
    primarySize?: '1/4' | '1/3' | '2/5' | '1/2' | '3/5' | '2/3' | '3/4';
    secondarySize?: '1/4' | '1/3' | '2/5' | '1/2' | '3/5' | '2/3' | '3/4';
    responsive?: boolean;
  };
```

---

### `RestProps`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/layout/svelte/molecule/split-layout/index.svelte` |
| **Строка** | 6 |
| **Целевой путь** | `layout/type/struct/rest-props/index.ts` |

#### 📝 Определение типа

```typescript
type RestProps = Omit<ArchitectureHTMLAttributes<HTMLDivElement>, 'class'>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `RestProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `ArchitectureHTMLAttributes` → импортируется из `$stylist//...`
- `HTMLDivElement` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/layout/type/struct';
import ... from 'svelte';
```

#### 💡 Рекомендация по миграции

Создать файл: `layout/type/struct/rest-props/index.ts`

```typescript
// Extracted from: lib/layout/svelte/molecule/split-layout/index.svelte:6
export type RestProps = Omit<ArchitectureHTMLAttributes<HTMLDivElement>, 'class'>;
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/layout/svelte/molecule/split-layout/index.svelte` |
| **Строка** | 8 |
| **Целевой путь** | `layout/type/enum/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = RestProps & {
    primary: Snippet;
    secondary: Snippet;
    class?: string;
    gap?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
    direction?: 'horizontal' | 'vertical';
    primarySize?: '1/4' | '1/3' | '2/5' | '1/2' | '3/5' | '2/3' | '3/4';
    secondarySize?: '1/4' | '1/3' | '2/5' | '1/2' | '3/5' | '2/3' | '3/4';
    responsive?: boolean;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `RestProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Snippet` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Snippet` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/layout/type/struct';
import ... from 'svelte';
```

#### 💡 Рекомендация по миграции

Создать файл: `layout/type/enum/props/index.ts`

```typescript
// Extracted from: lib/layout/svelte/molecule/split-layout/index.svelte:8
export type Props = RestProps & {
    primary: Snippet;
    secondary: Snippet;
    class?: string;
    gap?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
    direction?: 'horizontal' | 'vertical';
    primarySize?: '1/4' | '1/3' | '2/5' | '1/2' | '3/5' | '2/3' | '3/4';
    secondarySize?: '1/4' | '1/3' | '2/5' | '1/2' | '3/5' | '2/3' | '3/4';
    responsive?: boolean;
  };
```

---

---

## Домен: `management` (11 типов)

### `KanbanBoardType`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/management/svelte/molecule/kanban/kanban-board/index.svelte` |
| **Строка** | 11 |
| **Целевой путь** | `management/type/struct/kanban-board-type/index.ts` |

#### 📝 Определение типа

```typescript
export type KanbanBoardType = {
    id: string;
    title?: string;
    columns: KanbanColumnType[];
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `KanbanBoardType` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `KanbanColumnType` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist';
import ... from '$stylist/management/class/style-manager/kanban-board';
import ... from '$stylist/management/svelte/organism/card/kanban-card/index.svelte';
import ... from 'svelte';
```

#### 💡 Рекомендация по миграции

Создать файл: `management/type/struct/kanban-board-type/index.ts`

```typescript
// Extracted from: lib/management/svelte/molecule/kanban/kanban-board/index.svelte:11
export type KanbanBoardType = {
    id: string;
    title?: string;
    columns: KanbanColumnType[];
  };
```

---

### `KanbanBoardAction`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/management/svelte/molecule/kanban/kanban-board/index.svelte` |
| **Строка** | 17 |
| **Целевой путь** | `management/type/enum/kanban-board-action/index.ts` |

#### 📝 Определение типа

```typescript
export type KanbanBoardAction =
    | { type: 'move-card'; cardId: string; fromColumnId: string; toColumnId: string; position: number }
    | { type: 'add-card'; columnId: string; cardId: string }
    | { type: 'add-column'; columnId: string }
    | { type: 'rename-column'; columnId: string; title: string }
    | { type: 'rename-card'; columnId: string; cardId: string; title: string }
    | { type: 'archive-card'; columnId: string; cardId: string }
    | { type: 'delete-card'; columnId: string; cardId: string };
```

#### 🔗 Зависимости

**Используемые типы:**

- `KanbanBoardAction` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist';
import ... from '$stylist/management/class/style-manager/kanban-board';
import ... from '$stylist/management/svelte/organism/card/kanban-card/index.svelte';
import ... from 'svelte';
```

#### 💡 Рекомендация по миграции

Создать файл: `management/type/enum/kanban-board-action/index.ts`

```typescript
// Extracted from: lib/management/svelte/molecule/kanban/kanban-board/index.svelte:17
export type KanbanBoardAction =
    | { type: 'move-card'; cardId: string; fromColumnId: string; toColumnId: string; position: number }
    | { type: 'add-card'; columnId: string; cardId: string }
    | { type: 'add-column'; columnId: string }
    | { type: 'rename-column'; columnId: string; title: string }
    | { type: 'rename-card'; columnId: string; cardId: string; title: string }
    | { type: 'archive-card'; columnId: string; cardId: string }
    | { type: 'delete-card'; columnId: string; cardId: string };
```

---

### `KanbanColumnType`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/management/svelte/molecule/kanban/kanban-column/index.svelte` |
| **Строка** | 13 |
| **Целевой путь** | `management/type/struct/kanban-column-type/index.ts` |

#### 📝 Определение типа

```typescript
export type KanbanColumnType = {
    id: string;
    title: string;
    description?: string;
    cards: KanbanCardType[];
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `KanbanColumnType` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `KanbanCardType` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist';
import ... from '$stylist/management/class/style-manager/kanban-column';
import ... from 'svelte';
```

#### 💡 Рекомендация по миграции

Создать файл: `management/type/struct/kanban-column-type/index.ts`

```typescript
// Extracted from: lib/management/svelte/molecule/kanban/kanban-column/index.svelte:13
export type KanbanColumnType = {
    id: string;
    title: string;
    description?: string;
    cards: KanbanCardType[];
  };
```

---

### `DragPayload`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/management/svelte/molecule/kanban/kanban-column/index.svelte` |
| **Строка** | 20 |
| **Целевой путь** | `management/type/struct/drag-payload/index.ts` |

#### 📝 Определение типа

```typescript
type DragPayload = {
    cardId: string;
    fromColumnId: string;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `DragPayload` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist';
import ... from '$stylist/management/class/style-manager/kanban-column';
import ... from 'svelte';
```

#### 💡 Рекомендация по миграции

Создать файл: `management/type/struct/drag-payload/index.ts`

```typescript
// Extracted from: lib/management/svelte/molecule/kanban/kanban-column/index.svelte:20
export type DragPayload = {
    cardId: string;
    fromColumnId: string;
  };
```

---

### `LegendItemType`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/management/svelte/molecule/legend-item/index.svelte` |
| **Строка** | 6 |
| **Целевой путь** | `management/type/enum/legend-item-type/index.ts` |

#### 📝 Определение типа

```typescript
type LegendItemType = 'object' | 'interface' | 'union' | 'enum' | 'scalar' | 'input';
```

#### 🔗 Зависимости

**Используемые типы:**

- `LegendItemType` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/management/class/style-manager/legend-item';
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `management/type/enum/legend-item-type/index.ts`

```typescript
// Extracted from: lib/management/svelte/molecule/legend-item/index.svelte:6
export type LegendItemType = 'object' | 'interface' | 'union' | 'enum' | 'scalar' | 'input';
```

---

### `LegendItemVariant`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/management/svelte/molecule/legend-item/index.svelte` |
| **Строка** | 8 |
| **Целевой путь** | `management/type/enum/legend-item-variant/index.ts` |

#### 📝 Определение типа

```typescript
type LegendItemVariant = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
```

#### 🔗 Зависимости

**Используемые типы:**

- `LegendItemVariant` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/management/class/style-manager/legend-item';
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `management/type/enum/legend-item-variant/index.ts`

```typescript
// Extracted from: lib/management/svelte/molecule/legend-item/index.svelte:8
export type LegendItemVariant = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
```

---

### `CardData`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/management/svelte/organism/card/draggable-card/index.svelte` |
| **Строка** | 12 |
| **Целевой путь** | `management/type/struct/card-data/index.ts` |

#### 📝 Определение типа

```typescript
type CardData = {
    id: string;
    title: string;
    description?: string;
    content?: any;
    status?: string;
    tags?: string[];
    dueDate?: Date;
    assignedTo?: string;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `CardData` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Date` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/interaction/type/struct/interaction';
import ... from '$stylist';
import ... from '$stylist';
import ... from '$stylist/commerce/svelte/molecule/cards/base-card/index.svelte';
import ... from '$stylist/management/class/style-manager/draggable-card';
```

#### 💡 Рекомендация по миграции

Создать файл: `management/type/struct/card-data/index.ts`

```typescript
// Extracted from: lib/management/svelte/organism/card/draggable-card/index.svelte:12
export type CardData = {
    id: string;
    title: string;
    description?: string;
    content?: any;
    status?: string;
    tags?: string[];
    dueDate?: Date;
    assignedTo?: string;
  };
```

---

### `RestProps`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/management/svelte/organism/card/draggable-card/index.svelte` |
| **Строка** | 23 |
| **Целевой путь** | `management/type/struct/rest-props/index.ts` |

#### 📝 Определение типа

```typescript
type RestProps = Omit<InteractionHTMLAttributes<HTMLElement>, 'class'>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `RestProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `InteractionHTMLAttributes` → импортируется из `$stylist//...`
- `HTMLElement` → импортируется из `svelte/elements`

**Все импорты компонента:**

```typescript
import ... from '$stylist/interaction/type/struct/interaction';
import ... from '$stylist';
import ... from '$stylist';
import ... from '$stylist/commerce/svelte/molecule/cards/base-card/index.svelte';
import ... from '$stylist/management/class/style-manager/draggable-card';
```

#### 💡 Рекомендация по миграции

Создать файл: `management/type/struct/rest-props/index.ts`

```typescript
// Extracted from: lib/management/svelte/organism/card/draggable-card/index.svelte:23
export type RestProps = Omit<InteractionHTMLAttributes<HTMLElement>, 'class'>;
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/management/svelte/organism/card/draggable-card/index.svelte` |
| **Строка** | 25 |
| **Целевой путь** | `management/type/enum/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = RestProps & {
    data: CardData;
    class?: string;
    contentClass?: string;
    headerClass?: string;
    bodyClass?: string;
    footerClass?: string;
    onDragStart?: (data: CardData) => void;
    onDragEnd?: (data: CardData) => void;
    onCardClick?: (data: CardData) => void;
    onContextMenu?: (data: CardData, event: MouseEvent) => void;
    disabled?: boolean;
    draggable?: boolean;
    showHandle?: boolean;
    showMenu?: boolean;
    variant?: 'default' | 'minimal' | 'compact';
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `RestProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `CardData` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `CardData` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `CardData` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `CardData` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `CardData` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `MouseEvent` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/interaction/type/struct/interaction';
import ... from '$stylist';
import ... from '$stylist';
import ... from '$stylist/commerce/svelte/molecule/cards/base-card/index.svelte';
import ... from '$stylist/management/class/style-manager/draggable-card';
```

#### 💡 Рекомендация по миграции

Создать файл: `management/type/enum/props/index.ts`

```typescript
// Extracted from: lib/management/svelte/organism/card/draggable-card/index.svelte:25
export type Props = RestProps & {
    data: CardData;
    class?: string;
    contentClass?: string;
    headerClass?: string;
    bodyClass?: string;
    footerClass?: string;
    onDragStart?: (data: CardData) => void;
    onDragEnd?: (data: CardData) => void;
    onCardClick?: (data: CardData) => void;
    onContextMenu?: (data: CardData, event: MouseEvent) => void;
    disabled?: boolean;
    draggable?: boolean;
    showHandle?: boolean;
    showMenu?: boolean;
    variant?: 'default' | 'minimal' | 'compact';
  };
```

---

### `User`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/management/svelte/organism/card/kanban-card/index.svelte` |
| **Строка** | 3 |
| **Целевой путь** | `management/type/struct/user/index.ts` |

#### 📝 Определение типа

```typescript
type User = { id?: string; name: string; avatar?: string };
```

#### 🔗 Зависимости

**Используемые типы:**

- `User` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from 'svelte';
import ... from '$stylist';
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `management/type/struct/user/index.ts`

```typescript
// Extracted from: lib/management/svelte/organism/card/kanban-card/index.svelte:3
export type User = { id?: string; name: string; avatar?: string };
```

---

### `KanbanCardType`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/management/svelte/organism/card/kanban-card/index.svelte` |
| **Строка** | 4 |
| **Целевой путь** | `management/type/enum/kanban-card-type/index.ts` |

#### 📝 Определение типа

```typescript
export type KanbanCardType = {
    id: string;
    title: string;
    description?: string;
    assignee?: string | User;
    priority?: 'low' | 'medium' | 'high';
    status?: 'todo' | 'in-progress' | 'review' | 'done' | 'archived';
	tags?: string[];
	updatedAt?: Date;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `KanbanCardType` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `User` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Date` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from 'svelte';
import ... from '$stylist';
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `management/type/enum/kanban-card-type/index.ts`

```typescript
// Extracted from: lib/management/svelte/organism/card/kanban-card/index.svelte:4
export type KanbanCardType = {
    id: string;
    title: string;
    description?: string;
    assignee?: string | User;
    priority?: 'low' | 'medium' | 'high';
    status?: 'todo' | 'in-progress' | 'review' | 'done' | 'archived';
	tags?: string[];
	updatedAt?: Date;
  };
```

---

---

## Домен: `marketing` (13 типов)

### `FunnelStep`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/marketing/svelte/molecule/conversion-funnel/index.svelte` |
| **Строка** | 10 |
| **Целевой путь** | `marketing/type/struct/funnel-step/index.ts` |

#### 📝 Определение типа

```typescript
type FunnelStep = {
    id: string;
    name: string;
    value: number;
    color?: string;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `FunnelStep` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/information/type/struct';
import ... from '$stylist';
import ... from '$stylist/marketing/class/style-manager/conversion-funnel';
```

#### 💡 Рекомендация по миграции

Создать файл: `marketing/type/struct/funnel-step/index.ts`

```typescript
// Extracted from: lib/marketing/svelte/molecule/conversion-funnel/index.svelte:10
export type FunnelStep = {
    id: string;
    name: string;
    value: number;
    color?: string;
  };
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/marketing/svelte/molecule/conversion-funnel/index.svelte` |
| **Строка** | 17 |
| **Целевой путь** | `marketing/type/struct/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = {
    title?: string;
    subtitle?: string;
    steps: FunnelStep[];
    showPercentage?: boolean;
    showValues?: boolean;
    showTrend?: boolean;
    showConversionRate?: boolean;
    height?: number;
    class?: string;
    headerClass?: string;
    stepClass?: string;
  } & InformationHTMLAttributes<HTMLDivElement>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `FunnelStep` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `InformationHTMLAttributes` → импортируется из `$stylist//...`
- `HTMLDivElement` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/information/type/struct';
import ... from '$stylist';
import ... from '$stylist/marketing/class/style-manager/conversion-funnel';
```

#### 💡 Рекомендация по миграции

Создать файл: `marketing/type/struct/props/index.ts`

```typescript
// Extracted from: lib/marketing/svelte/molecule/conversion-funnel/index.svelte:17
export type Props = {
    title?: string;
    subtitle?: string;
    steps: FunnelStep[];
    showPercentage?: boolean;
    showValues?: boolean;
    showTrend?: boolean;
    showConversionRate?: boolean;
    height?: number;
    class?: string;
    headerClass?: string;
    stepClass?: string;
  } & InformationHTMLAttributes<HTMLDivElement>;
```

---

### `CtaBannerButton`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/marketing/svelte/molecule/cta-banner/index.svelte` |
| **Строка** | 6 |
| **Целевой путь** | `marketing/type/enum/cta-banner-button/index.ts` |

#### 📝 Определение типа

```typescript
type CtaBannerButton = {
    label: string;
    variant: 'primary' | 'secondary' | 'outline';
    onClick: () => void;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `CtaBannerButton` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/marketing/class/style-manager/cta-banner';
import ... from '$stylist/layout/type/enum/background';
```

#### 💡 Рекомендация по миграции

Создать файл: `marketing/type/enum/cta-banner-button/index.ts`

```typescript
// Extracted from: lib/marketing/svelte/molecule/cta-banner/index.svelte:6
export type CtaBannerButton = {
    label: string;
    variant: 'primary' | 'secondary' | 'outline';
    onClick: () => void;
  };
```

---

### `TestResult`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/marketing/svelte/organism/test-results-viewer/index.svelte` |
| **Строка** | 15 |
| **Целевой путь** | `marketing/type/enum/test-result/index.ts` |

#### 📝 Определение типа

```typescript
type TestResult = {
    id: string;
    testName: string;
    variantName: string;
    visitors: number;
    conversions: number;
    conversionRate: number;
    statisticalSignificance: number; // 0-100%
    improvement: number; // percentage difference
    status: 'winning' | 'losing' | 'inconclusive';
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `TestResult` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/information/type/struct';
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `marketing/type/enum/test-result/index.ts`

```typescript
// Extracted from: lib/marketing/svelte/organism/test-results-viewer/index.svelte:15
export type TestResult = {
    id: string;
    testName: string;
    variantName: string;
    visitors: number;
    conversions: number;
    conversionRate: number;
    statisticalSignificance: number; // 0-100%
    improvement: number; // percentage difference
    status: 'winning' | 'losing' | 'inconclusive';
  };
```

---

### `TestOverview`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/marketing/svelte/organism/test-results-viewer/index.svelte` |
| **Строка** | 27 |
| **Целевой путь** | `marketing/type/enum/test-overview/index.ts` |

#### 📝 Определение типа

```typescript
type TestOverview = {
    testName: string;
    startDate: Date;
    endDate?: Date;
    status: 'running' | 'completed' | 'paused';
    winningVariant?: string;
    confidence: number; // 0-100%
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `TestOverview` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Date` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Date` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/information/type/struct';
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `marketing/type/enum/test-overview/index.ts`

```typescript
// Extracted from: lib/marketing/svelte/organism/test-results-viewer/index.svelte:27
export type TestOverview = {
    testName: string;
    startDate: Date;
    endDate?: Date;
    status: 'running' | 'completed' | 'paused';
    winningVariant?: string;
    confidence: number; // 0-100%
  };
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/marketing/svelte/organism/test-results-viewer/index.svelte` |
| **Строка** | 36 |
| **Целевой путь** | `marketing/type/struct/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = {
    testResults: TestResult[];
    testOverview: TestOverview;
    title?: string;
    description?: string;
    showCharts?: boolean;
    showStatisticalSignificance?: boolean;
    class?: string;
    headerClass?: string;
    resultsClass?: string;
    chartClass?: string;
    footerClass?: string;
  } & InformationHTMLAttributes<HTMLDivElement>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `TestResult` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `TestOverview` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `InformationHTMLAttributes` → импортируется из `$stylist//...`
- `HTMLDivElement` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/information/type/struct';
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `marketing/type/struct/props/index.ts`

```typescript
// Extracted from: lib/marketing/svelte/organism/test-results-viewer/index.svelte:36
export type Props = {
    testResults: TestResult[];
    testOverview: TestOverview;
    title?: string;
    description?: string;
    showCharts?: boolean;
    showStatisticalSignificance?: boolean;
    class?: string;
    headerClass?: string;
    resultsClass?: string;
    chartClass?: string;
    footerClass?: string;
  } & InformationHTMLAttributes<HTMLDivElement>;
```

---

### `TrafficSource`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/marketing/svelte/organism/traffic-analytics/index.svelte` |
| **Строка** | 14 |
| **Целевой путь** | `marketing/type/struct/traffic-source/index.ts` |

#### 📝 Определение типа

```typescript
type TrafficSource = {
    id: string;
    name: string;
    value: number;
    percentage: number;
    color: string;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `TrafficSource` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/information/type/struct';
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `marketing/type/struct/traffic-source/index.ts`

```typescript
// Extracted from: lib/marketing/svelte/organism/traffic-analytics/index.svelte:14
export type TrafficSource = {
    id: string;
    name: string;
    value: number;
    percentage: number;
    color: string;
  };
```

---

### `TrafficDataPoint`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/marketing/svelte/organism/traffic-analytics/index.svelte` |
| **Строка** | 22 |
| **Целевой путь** | `marketing/type/struct/traffic-data-point/index.ts` |

#### 📝 Определение типа

```typescript
type TrafficDataPoint = {
    date: Date;
    value: number;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `TrafficDataPoint` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Date` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/information/type/struct';
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `marketing/type/struct/traffic-data-point/index.ts`

```typescript
// Extracted from: lib/marketing/svelte/organism/traffic-analytics/index.svelte:22
export type TrafficDataPoint = {
    date: Date;
    value: number;
  };
```

---

### `TimeRange`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/marketing/svelte/organism/traffic-analytics/index.svelte` |
| **Строка** | 27 |
| **Целевой путь** | `marketing/type/enum/time-range/index.ts` |

#### 📝 Определение типа

```typescript
type TimeRange = '1d' | '7d' | '30d' | '90d' | '1y';
```

#### 🔗 Зависимости

**Используемые типы:**

- `TimeRange` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/information/type/struct';
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `marketing/type/enum/time-range/index.ts`

```typescript
// Extracted from: lib/marketing/svelte/organism/traffic-analytics/index.svelte:27
export type TimeRange = '1d' | '7d' | '30d' | '90d' | '1y';
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/marketing/svelte/organism/traffic-analytics/index.svelte` |
| **Строка** | 29 |
| **Целевой путь** | `marketing/type/struct/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = {
    title?: string;
    subtitle?: string;
    totalVisitors: number;
    uniqueVisitors: number;
    pageViews: number;
    timeOnPage: string; // e.g., "2m 30s"
    bounceRate: number; // percentage
    trafficSources: TrafficSource[];
    trafficData: TrafficDataPoint[];
    timeRange?: TimeRange;
    onTimeRangeChange?: (range: TimeRange) => void;
    class?: string;
    headerClass?: string;
    summaryClass?: string;
    chartClass?: string;
    sourcesClass?: string;
  } & InformationHTMLAttributes<HTMLDivElement>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `TrafficSource` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `TrafficDataPoint` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `TimeRange` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `TimeRange` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `InformationHTMLAttributes` → импортируется из `$stylist//...`
- `HTMLDivElement` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/information/type/struct';
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `marketing/type/struct/props/index.ts`

```typescript
// Extracted from: lib/marketing/svelte/organism/traffic-analytics/index.svelte:29
export type Props = {
    title?: string;
    subtitle?: string;
    totalVisitors: number;
    uniqueVisitors: number;
    pageViews: number;
    timeOnPage: string; // e.g., "2m 30s"
    bounceRate: number; // percentage
    trafficSources: TrafficSource[];
    trafficData: TrafficDataPoint[];
    timeRange?: TimeRange;
    onTimeRangeChange?: (range: TimeRange) => void;
    class?: string;
    headerClass?: string;
    summaryClass?: string;
    chartClass?: string;
    sourcesClass?: string;
  } & InformationHTMLAttributes<HTMLDivElement>;
```

---

### `UserBehaviorMetric`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/marketing/svelte/organism/user-behavior-metrics/index.svelte` |
| **Строка** | 14 |
| **Целевой путь** | `marketing/type/enum/user-behavior-metric/index.ts` |

#### 📝 Определение типа

```typescript
type UserBehaviorMetric = {
    id: string;
    name: string;
    value: string | number;
    previousValue?: string | number;
    change?: number; // Percentage change
    changeType?: 'positive' | 'negative';
    description: string;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `UserBehaviorMetric` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Percentage` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/information/type/struct';
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `marketing/type/enum/user-behavior-metric/index.ts`

```typescript
// Extracted from: lib/marketing/svelte/organism/user-behavior-metrics/index.svelte:14
export type UserBehaviorMetric = {
    id: string;
    name: string;
    value: string | number;
    previousValue?: string | number;
    change?: number; // Percentage change
    changeType?: 'positive' | 'negative';
    description: string;
  };
```

---

### `TimeRange`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/marketing/svelte/organism/user-behavior-metrics/index.svelte` |
| **Строка** | 24 |
| **Целевой путь** | `marketing/type/enum/time-range/index.ts` |

#### 📝 Определение типа

```typescript
type TimeRange = '1d' | '7d' | '30d' | '90d';
```

#### 🔗 Зависимости

**Используемые типы:**

- `TimeRange` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/information/type/struct';
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `marketing/type/enum/time-range/index.ts`

```typescript
// Extracted from: lib/marketing/svelte/organism/user-behavior-metrics/index.svelte:24
export type TimeRange = '1d' | '7d' | '30d' | '90d';
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/marketing/svelte/organism/user-behavior-metrics/index.svelte` |
| **Строка** | 26 |
| **Целевой путь** | `marketing/type/struct/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = {
    title?: string;
    subtitle?: string;
    metrics: UserBehaviorMetric[];
    timeRange?: TimeRange;
    onTimeRangeChange?: (range: TimeRange) => void;
    class?: string;
    headerClass?: string;
    metricsClass?: string;
    metricCardClass?: string;
  } & InformationHTMLAttributes<HTMLDivElement>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `UserBehaviorMetric` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `TimeRange` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `TimeRange` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `InformationHTMLAttributes` → импортируется из `$stylist//...`
- `HTMLDivElement` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/information/type/struct';
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `marketing/type/struct/props/index.ts`

```typescript
// Extracted from: lib/marketing/svelte/organism/user-behavior-metrics/index.svelte:26
export type Props = {
    title?: string;
    subtitle?: string;
    metrics: UserBehaviorMetric[];
    timeRange?: TimeRange;
    onTimeRangeChange?: (range: TimeRange) => void;
    class?: string;
    headerClass?: string;
    metricsClass?: string;
    metricCardClass?: string;
  } & InformationHTMLAttributes<HTMLDivElement>;
```

---

---

## Домен: `media` (25 типов)

### `AvatarSize`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/media/svelte/atom/avatar/index.svelte` |
| **Строка** | 6 |
| **Целевой путь** | `media/type/enum/avatar-size/index.ts` |

#### 📝 Определение типа

```typescript
export type AvatarSize = 'sm' | 'md' | 'lg' | 'xl';
```

#### 🔗 Зависимости

**Используемые типы:**

- `AvatarSize` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/information/type/struct';
```

#### 💡 Рекомендация по миграции

Создать файл: `media/type/enum/avatar-size/index.ts`

```typescript
// Extracted from: lib/media/svelte/atom/avatar/index.svelte:6
export type AvatarSize = 'sm' | 'md' | 'lg' | 'xl';
```

---

### `AvatarUserStatus`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/media/svelte/atom/avatar/index.svelte` |
| **Строка** | 7 |
| **Целевой путь** | `media/type/enum/avatar-user-status/index.ts` |

#### 📝 Определение типа

```typescript
export type AvatarUserStatus = 'online' | 'away' | 'offline' | 'typing' | 'idle';
```

#### 🔗 Зависимости

**Используемые типы:**

- `AvatarUserStatus` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/information/type/struct';
```

#### 💡 Рекомендация по миграции

Создать файл: `media/type/enum/avatar-user-status/index.ts`

```typescript
// Extracted from: lib/media/svelte/atom/avatar/index.svelte:7
export type AvatarUserStatus = 'online' | 'away' | 'offline' | 'typing' | 'idle';
```

---

### `AvatarProps`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/media/svelte/atom/avatar/index.svelte` |
| **Строка** | 9 |
| **Целевой путь** | `media/type/struct/avatar-props/index.ts` |

#### 📝 Определение типа

```typescript
export type AvatarProps = {
		variant?: 'default';
		size?: AvatarSize;
		src?: string;
		alt?: string;
		id?: string;
		name?: string;
		status?: AvatarUserStatus;
		showStatus?: boolean;
		children?: any;
		class?: string;
	};
```

#### 🔗 Зависимости

**Используемые типы:**

- `AvatarProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `AvatarSize` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `AvatarUserStatus` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/information/type/struct';
```

#### 💡 Рекомендация по миграции

Создать файл: `media/type/struct/avatar-props/index.ts`

```typescript
// Extracted from: lib/media/svelte/atom/avatar/index.svelte:9
export type AvatarProps = {
		variant?: 'default';
		size?: AvatarSize;
		src?: string;
		alt?: string;
		id?: string;
		name?: string;
		status?: AvatarUserStatus;
		showStatus?: boolean;
		children?: any;
		class?: string;
	};
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/media/svelte/atom/country-flag/index.svelte` |
| **Строка** | 7 |
| **Целевой путь** | `media/type/struct/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = CountryFlagRecipe & InformationHTMLAttributes<HTMLSpanElement>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `CountryFlagRecipe` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `InformationHTMLAttributes` → импортируется из `$stylist//...`
- `HTMLSpanElement` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/information/type/struct';
import ... from '$stylist/information/interface/recipe/country-flag';
import ... from '$stylist/information/function/state/country-flag';
```

#### 💡 Рекомендация по миграции

Создать файл: `media/type/struct/props/index.ts`

```typescript
// Extracted from: lib/media/svelte/atom/country-flag/index.svelte:7
export type Props = CountryFlagRecipe & InformationHTMLAttributes<HTMLSpanElement>;
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/media/svelte/atom/favicon/index.svelte` |
| **Строка** | 7 |
| **Целевой путь** | `media/type/struct/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = FaviconContract & HTMLImgAttributes;
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `FaviconContract` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `HTMLImgAttributes` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from 'svelte/elements';
import ... from '$stylist/media/interface/component/favicon/contract';
import ... from '$stylist/information/function/state/favicon';
```

#### 💡 Рекомендация по миграции

Создать файл: `media/type/struct/props/index.ts`

```typescript
// Extracted from: lib/media/svelte/atom/favicon/index.svelte:7
export type Props = FaviconContract & HTMLImgAttributes;
```

---

### `IconSize`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/media/svelte/atom/icon/index.svelte` |
| **Строка** | 8 |
| **Целевой путь** | `media/type/enum/icon-size/index.ts` |

#### 📝 Определение типа

```typescript
export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | number;
```

#### 🔗 Зависимости

**Используемые типы:**

- `IconSize` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/information/type/struct';
import ... from '$stylist/layout/type/enum/shape';
import ... from '../svg/index.svelte';
import ... from '$stylist/media/class/style-manager/icons';
```

#### 💡 Рекомендация по миграции

Создать файл: `media/type/enum/icon-size/index.ts`

```typescript
// Extracted from: lib/media/svelte/atom/icon/index.svelte:8
export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | number;
```

---

### `IconDirection`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/media/svelte/atom/icon/index.svelte` |
| **Строка** | 9 |
| **Целевой путь** | `media/type/enum/icon-direction/index.ts` |

#### 📝 Определение типа

```typescript
export type IconDirection = 'up' | 'down' | 'left' | 'right';
```

#### 🔗 Зависимости

**Используемые типы:**

- `IconDirection` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/information/type/struct';
import ... from '$stylist/layout/type/enum/shape';
import ... from '../svg/index.svelte';
import ... from '$stylist/media/class/style-manager/icons';
```

#### 💡 Рекомендация по миграции

Создать файл: `media/type/enum/icon-direction/index.ts`

```typescript
// Extracted from: lib/media/svelte/atom/icon/index.svelte:9
export type IconDirection = 'up' | 'down' | 'left' | 'right';
```

---

### `IconVariant`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/media/svelte/atom/icon/index.svelte` |
| **Строка** | 10 |
| **Целевой путь** | `media/type/enum/icon-variant/index.ts` |

#### 📝 Определение типа

```typescript
export type IconVariant =
		| 'default'
		| 'primary'
		| 'secondary'
		| 'success'
		| 'warning'
		| 'danger'
		| 'info'
		| 'solid'
		| 'outline'
		| 'ghost'
		| 'link'
		| 'subtle'
		| 'neutral'
		| 'dark'
		| 'light';
```

#### 🔗 Зависимости

**Используемые типы:**

- `IconVariant` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/information/type/struct';
import ... from '$stylist/layout/type/enum/shape';
import ... from '../svg/index.svelte';
import ... from '$stylist/media/class/style-manager/icons';
```

#### 💡 Рекомендация по миграции

Создать файл: `media/type/enum/icon-variant/index.ts`

```typescript
// Extracted from: lib/media/svelte/atom/icon/index.svelte:10
export type IconVariant =
		| 'default'
		| 'primary'
		| 'secondary'
		| 'success'
		| 'warning'
		| 'danger'
		| 'info'
		| 'solid'
		| 'outline'
		| 'ghost'
		| 'link'
		| 'subtle'
		| 'neutral'
		| 'dark'
		| 'light';
```

---

### `IconShape`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/media/svelte/atom/icon/index.svelte` |
| **Строка** | 26 |
| **Целевой путь** | `media/type/enum/icon-shape/index.ts` |

#### 📝 Определение типа

```typescript
export type IconShape = TokenShape | 'rounded';
```

#### 🔗 Зависимости

**Используемые типы:**

- `IconShape` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `TokenShape` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/information/type/struct';
import ... from '$stylist/layout/type/enum/shape';
import ... from '../svg/index.svelte';
import ... from '$stylist/media/class/style-manager/icons';
```

#### 💡 Рекомендация по миграции

Создать файл: `media/type/enum/icon-shape/index.ts`

```typescript
// Extracted from: lib/media/svelte/atom/icon/index.svelte:26
export type IconShape = TokenShape | 'rounded';
```

---

### `IconColor`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/media/svelte/atom/icon/index.svelte` |
| **Строка** | 27 |
| **Целевой путь** | `media/type/enum/icon-color/index.ts` |

#### 📝 Определение типа

```typescript
export type IconColor = IconVariant | 'gray';
```

#### 🔗 Зависимости

**Используемые типы:**

- `IconColor` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `IconVariant` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/information/type/struct';
import ... from '$stylist/layout/type/enum/shape';
import ... from '../svg/index.svelte';
import ... from '$stylist/media/class/style-manager/icons';
```

#### 💡 Рекомендация по миграции

Создать файл: `media/type/enum/icon-color/index.ts`

```typescript
// Extracted from: lib/media/svelte/atom/icon/index.svelte:27
export type IconColor = IconVariant | 'gray';
```

---

### `IconProps`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/media/svelte/atom/icon/index.svelte` |
| **Строка** | 29 |
| **Целевой путь** | `media/type/enum/icon-props/index.ts` |

#### 📝 Определение типа

```typescript
export type IconProps = InformationHTMLAttributes<HTMLSpanElement> & {
		name?: string;
		svg?: string;
		size?: IconSize;
		strokeWidth?: number;
		variant?: IconVariant;
		direction?: IconDirection;
		isOpen?: boolean;
		disabled?: boolean;
		class?: string;
		containerClass?: string;
		container?: 'none' | 'wrapper' | 'circle';
		containerSize?: Exclude<IconSize, number>;
		shape?: IconShape;
		color?: IconColor;
		filled?: boolean;
	};
```

#### 🔗 Зависимости

**Используемые типы:**

- `IconProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `InformationHTMLAttributes` → импортируется из `$stylist//...`
- `HTMLSpanElement` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `IconSize` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `IconVariant` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `IconDirection` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `IconSize` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `IconShape` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `IconColor` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/information/type/struct';
import ... from '$stylist/layout/type/enum/shape';
import ... from '../svg/index.svelte';
import ... from '$stylist/media/class/style-manager/icons';
```

#### 💡 Рекомендация по миграции

Создать файл: `media/type/enum/icon-props/index.ts`

```typescript
// Extracted from: lib/media/svelte/atom/icon/index.svelte:29
export type IconProps = InformationHTMLAttributes<HTMLSpanElement> & {
		name?: string;
		svg?: string;
		size?: IconSize;
		strokeWidth?: number;
		variant?: IconVariant;
		direction?: IconDirection;
		isOpen?: boolean;
		disabled?: boolean;
		class?: string;
		containerClass?: string;
		container?: 'none' | 'wrapper' | 'circle';
		containerSize?: Exclude<IconSize, number>;
		shape?: IconShape;
		color?: IconColor;
		filled?: boolean;
	};
```

---

### `ImageSize`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/media/svelte/atom/image/index.svelte` |
| **Строка** | 9 |
| **Целевой путь** | `media/type/enum/image-size/index.ts` |

#### 📝 Определение типа

```typescript
export type ImageSize = 'sm' | 'md' | 'lg' | 'xl';
```

#### 🔗 Зависимости

**Используемые типы:**

- `ImageSize` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from 'svelte/elements';
import ... from 'svelte';
```

#### 💡 Рекомендация по миграции

Создать файл: `media/type/enum/image-size/index.ts`

```typescript
// Extracted from: lib/media/svelte/atom/image/index.svelte:9
export type ImageSize = 'sm' | 'md' | 'lg' | 'xl';
```

---

### `ImageProps`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/media/svelte/atom/image/index.svelte` |
| **Строка** | 10 |
| **Целевой путь** | `media/type/enum/image-props/index.ts` |

#### 📝 Определение типа

```typescript
export type ImageProps = {
		variant?: 'default';
		size?: ImageSize;
		src: string;
		alt?: string;
		fallback?: string;
		loading?: 'lazy' | 'eager';
		width?: number | string;
		height?: number | string;
		content?: Snippet;
		onLoad?: () => void;
		onError?: () => void;
		children?: any;
		class?: string;
	};
```

#### 🔗 Зависимости

**Используемые типы:**

- `ImageProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `ImageSize` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Snippet` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from 'svelte/elements';
import ... from 'svelte';
```

#### 💡 Рекомендация по миграции

Создать файл: `media/type/enum/image-props/index.ts`

```typescript
// Extracted from: lib/media/svelte/atom/image/index.svelte:10
export type ImageProps = {
		variant?: 'default';
		size?: ImageSize;
		src: string;
		alt?: string;
		fallback?: string;
		loading?: 'lazy' | 'eager';
		width?: number | string;
		height?: number | string;
		content?: Snippet;
		onLoad?: () => void;
		onError?: () => void;
		children?: any;
		class?: string;
	};
```

---

### `SvgProps`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/media/svelte/atom/svg/index.svelte` |
| **Строка** | 5 |
| **Целевой путь** | `media/type/enum/svg-props/index.ts` |

#### 📝 Определение типа

```typescript
export type SvgProps = InformationHTMLAttributes<HTMLSpanElement> & {
		svg: string;
		size?: number | string;
		strokeWidth?: number;
		class?: string;
	};
```

#### 🔗 Зависимости

**Используемые типы:**

- `SvgProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `InformationHTMLAttributes` → импортируется из `$stylist//...`
- `HTMLSpanElement` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/information/type/struct';
```

#### 💡 Рекомендация по миграции

Создать файл: `media/type/enum/svg-props/index.ts`

```typescript
// Extracted from: lib/media/svelte/atom/svg/index.svelte:5
export type SvgProps = InformationHTMLAttributes<HTMLSpanElement> & {
		svg: string;
		size?: number | string;
		strokeWidth?: number;
		class?: string;
	};
```

---

### `Avatar`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/media/svelte/molecule/avatar-group/index.svelte` |
| **Строка** | 5 |
| **Целевой путь** | `media/type/enum/avatar/index.ts` |

#### 📝 Определение типа

```typescript
type Avatar = {
    id: string;
    name: string;
    src?: string;
    status?: 'online' | 'offline' | 'away' | 'busy';
    onClick?: () => void;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `Avatar` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/information/type/struct';
```

#### 💡 Рекомендация по миграции

Создать файл: `media/type/enum/avatar/index.ts`

```typescript
// Extracted from: lib/media/svelte/molecule/avatar-group/index.svelte:5
export type Avatar = {
    id: string;
    name: string;
    src?: string;
    status?: 'online' | 'offline' | 'away' | 'busy';
    onClick?: () => void;
  };
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/media/svelte/molecule/avatar-group/index.svelte` |
| **Строка** | 13 |
| **Целевой путь** | `media/type/enum/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = {
    avatars: Avatar[];
    maxVisible?: number;
    size?: 'sm' | 'md' | 'lg';
    showTooltip?: boolean;
    tooltipPosition?: 'top' | 'bottom' | 'left' | 'right';
    class?: string;
    avatarClass?: string;
    overflowClass?: string;
  } & InformationHTMLAttributes<HTMLDivElement>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Avatar` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `InformationHTMLAttributes` → импортируется из `$stylist//...`
- `HTMLDivElement` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/information/type/struct';
```

#### 💡 Рекомендация по миграции

Создать файл: `media/type/enum/props/index.ts`

```typescript
// Extracted from: lib/media/svelte/molecule/avatar-group/index.svelte:13
export type Props = {
    avatars: Avatar[];
    maxVisible?: number;
    size?: 'sm' | 'md' | 'lg';
    showTooltip?: boolean;
    tooltipPosition?: 'top' | 'bottom' | 'left' | 'right';
    class?: string;
    avatarClass?: string;
    overflowClass?: string;
  } & InformationHTMLAttributes<HTMLDivElement>;
```

---

### `TeamMember`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/media/svelte/molecule/team-avatar-stack/index.svelte` |
| **Строка** | 9 |
| **Целевой путь** | `media/type/enum/team-member/index.ts` |

#### 📝 Определение типа

```typescript
type TeamMember = {
    id: string;
    name: string;
    avatar?: string;
    role?: string;
    status?: 'online' | 'away' | 'busy' | 'offline';
    presence?: boolean;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `TeamMember` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/information/type/struct';
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `media/type/enum/team-member/index.ts`

```typescript
// Extracted from: lib/media/svelte/molecule/team-avatar-stack/index.svelte:9
export type TeamMember = {
    id: string;
    name: string;
    avatar?: string;
    role?: string;
    status?: 'online' | 'away' | 'busy' | 'offline';
    presence?: boolean;
  };
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/media/svelte/molecule/team-avatar-stack/index.svelte` |
| **Строка** | 18 |
| **Целевой путь** | `media/type/enum/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = {
    members: TeamMember[];
    maxVisible?: number;
    showStatus?: boolean;
    showTooltip?: boolean;
    size?: 'sm' | 'md' | 'lg';
    stackDirection?: 'horizontal' | 'vertical';
    class?: string;
    avatarClass?: string;
    tooltipClass?: string;
  } & InformationHTMLAttributes<HTMLDivElement>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `TeamMember` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `InformationHTMLAttributes` → импортируется из `$stylist//...`
- `HTMLDivElement` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/information/type/struct';
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `media/type/enum/props/index.ts`

```typescript
// Extracted from: lib/media/svelte/molecule/team-avatar-stack/index.svelte:18
export type Props = {
    members: TeamMember[];
    maxVisible?: number;
    showStatus?: boolean;
    showTooltip?: boolean;
    size?: 'sm' | 'md' | 'lg';
    stackDirection?: 'horizontal' | 'vertical';
    class?: string;
    avatarClass?: string;
    tooltipClass?: string;
  } & InformationHTMLAttributes<HTMLDivElement>;
```

---

### `RestProps`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/media/svelte/organism/audio-player/index.svelte` |
| **Строка** | 13 |
| **Целевой путь** | `media/type/struct/rest-props/index.ts` |

#### 📝 Определение типа

```typescript
type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `RestProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `HTMLAttributes` → импортируется из `svelte/elements`
- `HTMLDivElement` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from 'svelte/elements';
import ... from '$stylist';
import ... from '$lib';
```

#### 💡 Рекомендация по миграции

Создать файл: `media/type/struct/rest-props/index.ts`

```typescript
// Extracted from: lib/media/svelte/organism/audio-player/index.svelte:13
export type RestProps = Omit<HTMLAttributes<HTMLDivElement>, 'class'>;
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/media/svelte/organism/audio-player/index.svelte` |
| **Строка** | 15 |
| **Целевой путь** | `media/type/struct/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = RestProps & {
    src?: string;
    title?: string;
    showControls?: boolean;
    autoPlay?: boolean;
    loop?: boolean;
    muted?: boolean;
    class?: string;
    controlsClass?: string;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `RestProps` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from 'svelte/elements';
import ... from '$stylist';
import ... from '$lib';
```

#### 💡 Рекомендация по миграции

Создать файл: `media/type/struct/props/index.ts`

```typescript
// Extracted from: lib/media/svelte/organism/audio-player/index.svelte:15
export type Props = RestProps & {
    src?: string;
    title?: string;
    showControls?: boolean;
    autoPlay?: boolean;
    loop?: boolean;
    muted?: boolean;
    class?: string;
    controlsClass?: string;
  };
```

---

### `MediaType`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/media/svelte/organism/media-library/index.svelte` |
| **Строка** | 20 |
| **Целевой путь** | `media/type/enum/media-type/index.ts` |

#### 📝 Определение типа

```typescript
type MediaType = 'image' | 'video' | 'audio' | 'document' | 'other';
```

#### 🔗 Зависимости

**Используемые типы:**

- `MediaType` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/information/type/struct';
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `media/type/enum/media-type/index.ts`

```typescript
// Extracted from: lib/media/svelte/organism/media-library/index.svelte:20
export type MediaType = 'image' | 'video' | 'audio' | 'document' | 'other';
```

---

### `MediaItem`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/media/svelte/organism/media-library/index.svelte` |
| **Строка** | 22 |
| **Целевой путь** | `media/type/struct/media-item/index.ts` |

#### 📝 Определение типа

```typescript
type MediaItem = {
    id: string;
    name: string;
    type: MediaType;
    size: number; // in bytes
    url: string;
    thumbnail?: string;
    uploadDate: Date;
    tags?: string[];
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `MediaItem` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `MediaType` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Date` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/information/type/struct';
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `media/type/struct/media-item/index.ts`

```typescript
// Extracted from: lib/media/svelte/organism/media-library/index.svelte:22
export type MediaItem = {
    id: string;
    name: string;
    type: MediaType;
    size: number; // in bytes
    url: string;
    thumbnail?: string;
    uploadDate: Date;
    tags?: string[];
  };
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/media/svelte/organism/media-library/index.svelte` |
| **Строка** | 33 |
| **Целевой путь** | `media/type/enum/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = {
    items: MediaItem[];
    onItemSelect?: (item: MediaItem) => void;
    onItemDelete?: (id: string) => void;
    onItemDownload?: (id: string) => void;
    onUpload?: (files: FileList) => void;
    viewMode?: 'grid' | 'list';
    allowDelete?: boolean;
    allowDownload?: boolean;
    allowUpload?: boolean;
    searchPlaceholder?: string;
    class?: string;
    headerClass?: string;
    toolbarClass?: string;
    gridClass?: string;
    itemClass?: string;
  } & InformationHTMLAttributes<HTMLDivElement>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `MediaItem` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `MediaItem` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `FileList` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `InformationHTMLAttributes` → импортируется из `$stylist//...`
- `HTMLDivElement` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/information/type/struct';
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `media/type/enum/props/index.ts`

```typescript
// Extracted from: lib/media/svelte/organism/media-library/index.svelte:33
export type Props = {
    items: MediaItem[];
    onItemSelect?: (item: MediaItem) => void;
    onItemDelete?: (id: string) => void;
    onItemDownload?: (id: string) => void;
    onUpload?: (files: FileList) => void;
    viewMode?: 'grid' | 'list';
    allowDelete?: boolean;
    allowDownload?: boolean;
    allowUpload?: boolean;
    searchPlaceholder?: string;
    class?: string;
    headerClass?: string;
    toolbarClass?: string;
    gridClass?: string;
    itemClass?: string;
  } & InformationHTMLAttributes<HTMLDivElement>;
```

---

### `RestProps`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/media/svelte/organism/video-player/index.svelte` |
| **Строка** | 14 |
| **Целевой путь** | `media/type/struct/rest-props/index.ts` |

#### 📝 Определение типа

```typescript
type RestProps = Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `RestProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `InformationHTMLAttributes` → импортируется из `$stylist//...`
- `HTMLDivElement` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/information/type/struct';
import ... from '$stylist';
import ... from '$lib';
```

#### 💡 Рекомендация по миграции

Создать файл: `media/type/struct/rest-props/index.ts`

```typescript
// Extracted from: lib/media/svelte/organism/video-player/index.svelte:14
export type RestProps = Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'>;
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/media/svelte/organism/video-player/index.svelte` |
| **Строка** | 16 |
| **Целевой путь** | `media/type/struct/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = RestProps & {
    src?: string;
    poster?: string;
    title?: string;
    width?: string;
    height?: string;
    showControls?: boolean;
    autoPlay?: boolean;
    loop?: boolean;
    muted?: boolean;
    class?: string;
    videoClass?: string;
    controlsClass?: string;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `RestProps` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/information/type/struct';
import ... from '$stylist';
import ... from '$lib';
```

#### 💡 Рекомендация по миграции

Создать файл: `media/type/struct/props/index.ts`

```typescript
// Extracted from: lib/media/svelte/organism/video-player/index.svelte:16
export type Props = RestProps & {
    src?: string;
    poster?: string;
    title?: string;
    width?: string;
    height?: string;
    showControls?: boolean;
    autoPlay?: boolean;
    loop?: boolean;
    muted?: boolean;
    class?: string;
    videoClass?: string;
    controlsClass?: string;
  };
```

---

---

## Домен: `navigation` (11 типов)

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/navigation/svelte/atom/breadcrumb-link/index.svelte` |
| **Строка** | 19 |
| **Целевой путь** | `navigation/type/struct/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = {
		current?: boolean;
		href?: string;
		class?: string;
		children?: Snippet;
	};
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Snippet` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from 'svelte';
import ... from '$stylist/layout/function/script/join-class-names';
```

#### 💡 Рекомендация по миграции

Создать файл: `navigation/type/struct/props/index.ts`

```typescript
// Extracted from: lib/navigation/svelte/atom/breadcrumb-link/index.svelte:19
export type Props = {
		current?: boolean;
		href?: string;
		class?: string;
		children?: Snippet;
	};
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/navigation/svelte/atom/breadcrumb-separator/index.svelte` |
| **Строка** | 5 |
| **Целевой путь** | `navigation/type/struct/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = {
		class?: string;
		children?: Snippet;
	} & InteractionHTMLAttributes<HTMLSpanElement>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Snippet` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `InteractionHTMLAttributes` → импортируется из `$stylist//...`
- `HTMLSpanElement` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from 'svelte';
import ... from '$stylist/interaction/type/struct/interaction';
```

#### 💡 Рекомендация по миграции

Создать файл: `navigation/type/struct/props/index.ts`

```typescript
// Extracted from: lib/navigation/svelte/atom/breadcrumb-separator/index.svelte:5
export type Props = {
		class?: string;
		children?: Snippet;
	} & InteractionHTMLAttributes<HTMLSpanElement>;
```

---

### `BreadcrumbItem`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/navigation/svelte/atom/breadcrumbs/index.svelte` |
| **Строка** | 9 |
| **Целевой путь** | `navigation/type/struct/breadcrumb-item/index.ts` |

#### 📝 Определение типа

```typescript
type BreadcrumbItem = {
		label: string;
		href?: string;
	};
```

#### 🔗 Зависимости

**Используемые типы:**

- `BreadcrumbItem` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist';
import ... from '$stylist/interaction/type/struct/interaction';
import ... from '$stylist/navigation/interface/recipe/breadcrumbs';
```

#### 💡 Рекомендация по миграции

Создать файл: `navigation/type/struct/breadcrumb-item/index.ts`

```typescript
// Extracted from: lib/navigation/svelte/atom/breadcrumbs/index.svelte:9
export type BreadcrumbItem = {
		label: string;
		href?: string;
	};
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/navigation/svelte/atom/breadcrumbs/index.svelte` |
| **Строка** | 14 |
| **Целевой путь** | `navigation/type/struct/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = BreadcrumbsRecipe &
		InteractionHTMLAttributes<HTMLElement> & {
			crumbs?: BreadcrumbItem[];
		};
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `BreadcrumbsRecipe` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `InteractionHTMLAttributes` → импортируется из `$stylist//...`
- `HTMLElement` → импортируется из `svelte/elements`
- `BreadcrumbItem` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist';
import ... from '$stylist/interaction/type/struct/interaction';
import ... from '$stylist/navigation/interface/recipe/breadcrumbs';
```

#### 💡 Рекомендация по миграции

Создать файл: `navigation/type/struct/props/index.ts`

```typescript
// Extracted from: lib/navigation/svelte/atom/breadcrumbs/index.svelte:14
export type Props = BreadcrumbsRecipe &
		InteractionHTMLAttributes<HTMLElement> & {
			crumbs?: BreadcrumbItem[];
		};
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/navigation/svelte/molecule/dialogs/dialog-confirm/index.svelte` |
| **Строка** | 9 |
| **Целевой путь** | `navigation/type/enum/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    title: string;
    message: string;
    confirmText?: string;
    cancelText?: string;
    variant?: 'danger' | 'warning' | 'info';
    isLoading?: boolean;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `navigation/type/enum/props/index.ts`

```typescript
// Extracted from: lib/navigation/svelte/molecule/dialogs/dialog-confirm/index.svelte:9
export type Props = {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    title: string;
    message: string;
    confirmText?: string;
    cancelText?: string;
    variant?: 'danger' | 'warning' | 'info';
    isLoading?: boolean;
  };
```

---

### `ToolbarItem`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/navigation/svelte/molecule/general-toolbar/index.svelte` |
| **Строка** | 6 |
| **Целевой путь** | `navigation/type/struct/toolbar-item/index.ts` |

#### 📝 Определение типа

```typescript
type ToolbarItem = {
    id: string;
    label: string;
    icon: string;
    action: () => void;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `ToolbarItem` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist';
import ... from 'svelte';
```

#### 💡 Рекомендация по миграции

Создать файл: `navigation/type/struct/toolbar-item/index.ts`

```typescript
// Extracted from: lib/navigation/svelte/molecule/general-toolbar/index.svelte:6
export type ToolbarItem = {
    id: string;
    label: string;
    icon: string;
    action: () => void;
  };
```

---

### `SideBySideSection`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/navigation/svelte/molecule/side-by-side-layout/index.svelte` |
| **Строка** | 6 |
| **Целевой путь** | `navigation/type/enum/side-by-side-section/index.ts` |

#### 📝 Определение типа

```typescript
type SideBySideSection = {
    id: string;
    content: Snippet;
    size?: '1/4' | '1/3' | '2/5' | '1/2' | '3/5' | '2/3' | '3/4' | 'full';
    className?: string;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `SideBySideSection` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Snippet` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/layout/type/struct';
import ... from 'svelte';
```

#### 💡 Рекомендация по миграции

Создать файл: `navigation/type/enum/side-by-side-section/index.ts`

```typescript
// Extracted from: lib/navigation/svelte/molecule/side-by-side-layout/index.svelte:6
export type SideBySideSection = {
    id: string;
    content: Snippet;
    size?: '1/4' | '1/3' | '2/5' | '1/2' | '3/5' | '2/3' | '3/4' | 'full';
    className?: string;
  };
```

---

### `RestProps`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/navigation/svelte/molecule/side-by-side-layout/index.svelte` |
| **Строка** | 13 |
| **Целевой путь** | `navigation/type/struct/rest-props/index.ts` |

#### 📝 Определение типа

```typescript
type RestProps = Omit<ArchitectureHTMLAttributes<HTMLDivElement>, 'class'>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `RestProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `ArchitectureHTMLAttributes` → импортируется из `$stylist//...`
- `HTMLDivElement` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/layout/type/struct';
import ... from 'svelte';
```

#### 💡 Рекомендация по миграции

Создать файл: `navigation/type/struct/rest-props/index.ts`

```typescript
// Extracted from: lib/navigation/svelte/molecule/side-by-side-layout/index.svelte:13
export type RestProps = Omit<ArchitectureHTMLAttributes<HTMLDivElement>, 'class'>;
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/navigation/svelte/molecule/side-by-side-layout/index.svelte` |
| **Строка** | 15 |
| **Целевой путь** | `navigation/type/enum/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = RestProps & {
    sections: SideBySideSection[];
    class?: string;
    gap?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
    alignItems?: 'start' | 'center' | 'end' | 'stretch';
    justifyContent?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
    responsive?: boolean;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `RestProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `SideBySideSection` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/layout/type/struct';
import ... from 'svelte';
```

#### 💡 Рекомендация по миграции

Создать файл: `navigation/type/enum/props/index.ts`

```typescript
// Extracted from: lib/navigation/svelte/molecule/side-by-side-layout/index.svelte:15
export type Props = RestProps & {
    sections: SideBySideSection[];
    class?: string;
    gap?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
    alignItems?: 'start' | 'center' | 'end' | 'stretch';
    justifyContent?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
    responsive?: boolean;
  };
```

---

### `Step`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/navigation/svelte/molecule/stepper/index.svelte` |
| **Строка** | 5 |
| **Целевой путь** | `navigation/type/enum/step/index.ts` |

#### 📝 Определение типа

```typescript
export type Step = {
    id: string;
    title: string;
    description?: string;
    status: 'completed' | 'current' | 'upcoming';
    onClick?: () => void;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `Step` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/layout/type/struct';
```

#### 💡 Рекомендация по миграции

Создать файл: `navigation/type/enum/step/index.ts`

```typescript
// Extracted from: lib/navigation/svelte/molecule/stepper/index.svelte:5
export type Step = {
    id: string;
    title: string;
    description?: string;
    status: 'completed' | 'current' | 'upcoming';
    onClick?: () => void;
  };
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/navigation/svelte/molecule/stepper/index.svelte` |
| **Строка** | 13 |
| **Целевой путь** | `navigation/type/enum/props/index.ts` |

#### 📝 Определение типа

```typescript
export type Props = {
    steps: Step[];
    orientation?: 'horizontal' | 'vertical';
    class?: string;
    stepClass?: string;
    connectorClass?: string;
    labelClass?: string;
    descriptionClass?: string;
  } & ArchitectureHTMLAttributes<HTMLDivElement>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Step` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `ArchitectureHTMLAttributes` → импортируется из `$stylist//...`
- `HTMLDivElement` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/layout/type/struct';
```

#### 💡 Рекомендация по миграции

Создать файл: `navigation/type/enum/props/index.ts`

```typescript
// Extracted from: lib/navigation/svelte/molecule/stepper/index.svelte:13
export type Props = {
    steps: Step[];
    orientation?: 'horizontal' | 'vertical';
    class?: string;
    stepClass?: string;
    connectorClass?: string;
    labelClass?: string;
    descriptionClass?: string;
  } & ArchitectureHTMLAttributes<HTMLDivElement>;
```

---

---

## Домен: `notification` (7 типов)

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/notification/svelte/atom/alerts/error-message/index.svelte` |
| **Строка** | 6 |
| **Целевой путь** | `notification/type/struct/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = ErrorMessageProps;
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `ErrorMessageProps` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/notification/function/state/error-message';
import ... from '$stylist/notification/interface/component/error-message/other';
```

#### 💡 Рекомендация по миграции

Создать файл: `notification/type/struct/props/index.ts`

```typescript
// Extracted from: lib/notification/svelte/atom/alerts/error-message/index.svelte:6
export type Props = ErrorMessageProps;
```

---

### `SpinnerVariant`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/notification/svelte/atom/spinner/index.svelte` |
| **Строка** | 8 |
| **Целевой путь** | `notification/type/enum/spinner-variant/index.ts` |

#### 📝 Определение типа

```typescript
type SpinnerVariant = 'css' | 'svg' | 'icon';
```

#### 🔗 Зависимости

**Используемые типы:**

- `SpinnerVariant` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/interaction/type/struct/interaction';
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `notification/type/enum/spinner-variant/index.ts`

```typescript
// Extracted from: lib/notification/svelte/atom/spinner/index.svelte:8
export type SpinnerVariant = 'css' | 'svg' | 'icon';
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/notification/svelte/atom/spinner/index.svelte` |
| **Строка** | 10 |
| **Целевой путь** | `notification/type/enum/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = {
    /** Visual style variant of the spinner */
    variant?: SpinnerVariant;
    /** Size of the spinner */
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    /** Color of the spinner (for svg variant) */
    color?: 'blue' | 'gray' | 'green' | 'red' | 'yellow' | 'white' | string;
    /** Label text displayed below the spinner */
    label?: string;
    /** Whether to show the label */
    showLabel?: boolean;
    /** Additional CSS classes for the container */
    class?: string;
    /** Additional CSS classes for the spinner element */
    spinnerClass?: string;
  } & InteractionHTMLAttributes<HTMLDivElement>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Visual` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `SpinnerVariant` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Size` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Color` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Label` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Whether` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Additional` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `CSS` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Additional` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `CSS` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `InteractionHTMLAttributes` → импортируется из `$stylist//...`
- `HTMLDivElement` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/interaction/type/struct/interaction';
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `notification/type/enum/props/index.ts`

```typescript
// Extracted from: lib/notification/svelte/atom/spinner/index.svelte:10
export type Props = {
    /** Visual style variant of the spinner */
    variant?: SpinnerVariant;
    /** Size of the spinner */
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    /** Color of the spinner (for svg variant) */
    color?: 'blue' | 'gray' | 'green' | 'red' | 'yellow' | 'white' | string;
    /** Label text displayed below the spinner */
    label?: string;
    /** Whether to show the label */
    showLabel?: boolean;
    /** Additional CSS classes for the container */
    class?: string;
    /** Additional CSS classes for the spinner element */
    spinnerClass?: string;
  } & InteractionHTMLAttributes<HTMLDivElement>;
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/notification/svelte/atom/states/state/index.svelte` |
| **Строка** | 15 |
| **Целевой путь** | `notification/type/struct/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = {
    title: string;
    description?: string;
    action?: {
      label: string;
      onClick: () => void;
    };
    class?: string;
    icon?: Snippet; // Add icon prop
    children?: Snippet;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Snippet` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Add` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Snippet` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from 'svelte';
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `notification/type/struct/props/index.ts`

```typescript
// Extracted from: lib/notification/svelte/atom/states/state/index.svelte:15
export type Props = {
    title: string;
    description?: string;
    action?: {
      label: string;
      onClick: () => void;
    };
    class?: string;
    icon?: Snippet; // Add icon prop
    children?: Snippet;
  };
```

---

### `ToastType`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/notification/svelte/molecule/toasts/toast-stack/index.svelte` |
| **Строка** | 13 |
| **Целевой путь** | `notification/type/enum/toast-type/index.ts` |

#### 📝 Определение типа

```typescript
type ToastType = 'info' | 'success' | 'warning' | 'error';
```

#### 🔗 Зависимости

**Используемые типы:**

- `ToastType` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/interaction/type/struct/interaction';
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `notification/type/enum/toast-type/index.ts`

```typescript
// Extracted from: lib/notification/svelte/molecule/toasts/toast-stack/index.svelte:13
export type ToastType = 'info' | 'success' | 'warning' | 'error';
```

---

### `Toast`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/notification/svelte/molecule/toasts/toast-stack/index.svelte` |
| **Строка** | 15 |
| **Целевой путь** | `notification/type/struct/toast/index.ts` |

#### 📝 Определение типа

```typescript
type Toast = {
    id: string;
    title?: string;
    message: string;
    type: ToastType;
    duration?: number; // in milliseconds, 0 means persistent
    actions?: Array<{
      label: string;
      onClick: () => void;
    }>;
    onDismiss?: () => void;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `Toast` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `ToastType` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/interaction/type/struct/interaction';
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `notification/type/struct/toast/index.ts`

```typescript
// Extracted from: lib/notification/svelte/molecule/toasts/toast-stack/index.svelte:15
export type Toast = {
    id: string;
    title?: string;
    message: string;
    type: ToastType;
    duration?: number; // in milliseconds, 0 means persistent
    actions?: Array<{
      label: string;
      onClick: () => void;
    }>;
    onDismiss?: () => void;
  };
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/notification/svelte/molecule/toasts/toast-stack/index.svelte` |
| **Строка** | 28 |
| **Целевой путь** | `notification/type/enum/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = {
    toasts: Toast[];
    position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center';
    maxToasts?: number;
    class?: string;
    toastClass?: string;
  } & InteractionHTMLAttributes<HTMLDivElement>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Toast` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `InteractionHTMLAttributes` → импортируется из `$stylist//...`
- `HTMLDivElement` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/interaction/type/struct/interaction';
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `notification/type/enum/props/index.ts`

```typescript
// Extracted from: lib/notification/svelte/molecule/toasts/toast-stack/index.svelte:28
export type Props = {
    toasts: Toast[];
    position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center';
    maxToasts?: number;
    class?: string;
    toastClass?: string;
  } & InteractionHTMLAttributes<HTMLDivElement>;
```

---

---

## Домен: `science` (25 типов)

### `Idef0Port`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/science/svelte/molecule/diagrams/idef-zero-black-box/index.svelte` |
| **Строка** | 3 |
| **Целевой путь** | `science/type/struct/idef0-port/index.ts` |

#### 📝 Определение типа

```typescript
type Idef0Port = { id: string; label?: string; color?: string };
```

#### 🔗 Зависимости

**Используемые типы:**

- `Idef0Port` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/information/function/state/idef0';
import ... from '$stylist/science/svelte/atom/diagrams/idef-zero-function-box/index.svelte';
import ... from '$stylist/science/svelte/molecule/diagrams/idef-zero-inputs/index.svelte';
import ... from '$stylist/science/svelte/molecule/diagrams/idef-zero-outputs/index.svelte';
```

#### 💡 Рекомендация по миграции

Создать файл: `science/type/struct/idef0-port/index.ts`

```typescript
// Extracted from: lib/science/svelte/molecule/diagrams/idef-zero-black-box/index.svelte:3
export type Idef0Port = { id: string; label?: string; color?: string };
```

---

### `Idef0BlackBoxProps`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/science/svelte/molecule/diagrams/idef-zero-black-box/index.svelte` |
| **Строка** | 4 |
| **Целевой путь** | `science/type/struct/idef0-black-box-props/index.ts` |

#### 📝 Определение типа

```typescript
type Idef0BlackBoxProps = {
		title?: string;
		subtitle?: string;
		inputs: Idef0Port[];
		outputs: Idef0Port[];
		width?: number;
		height?: number;
	};
```

#### 🔗 Зависимости

**Используемые типы:**

- `Idef0BlackBoxProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Idef0Port` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Idef0Port` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/information/function/state/idef0';
import ... from '$stylist/science/svelte/atom/diagrams/idef-zero-function-box/index.svelte';
import ... from '$stylist/science/svelte/molecule/diagrams/idef-zero-inputs/index.svelte';
import ... from '$stylist/science/svelte/molecule/diagrams/idef-zero-outputs/index.svelte';
```

#### 💡 Рекомендация по миграции

Создать файл: `science/type/struct/idef0-black-box-props/index.ts`

```typescript
// Extracted from: lib/science/svelte/molecule/diagrams/idef-zero-black-box/index.svelte:4
export type Idef0BlackBoxProps = {
		title?: string;
		subtitle?: string;
		inputs: Idef0Port[];
		outputs: Idef0Port[];
		width?: number;
		height?: number;
	};
```

---

### `Idef0Port`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/science/svelte/molecule/diagrams/idef-zero-inputs/index.svelte` |
| **Строка** | 3 |
| **Целевой путь** | `science/type/struct/idef0-port/index.ts` |

#### 📝 Определение типа

```typescript
type Idef0Port = { id: string; label?: string; color?: string };
```

#### 🔗 Зависимости

**Используемые типы:**

- `Idef0Port` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/information/function/state/idef0';
import ... from '$stylist/science/svelte/atom/diagrams/idef-zero-connector/index.svelte';
```

#### 💡 Рекомендация по миграции

Создать файл: `science/type/struct/idef0-port/index.ts`

```typescript
// Extracted from: lib/science/svelte/molecule/diagrams/idef-zero-inputs/index.svelte:3
export type Idef0Port = { id: string; label?: string; color?: string };
```

---

### `Idef0InputsProps`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/science/svelte/molecule/diagrams/idef-zero-inputs/index.svelte` |
| **Строка** | 4 |
| **Целевой путь** | `science/type/struct/idef0-inputs-props/index.ts` |

#### 📝 Определение типа

```typescript
type Idef0InputsProps = {
		ports: Idef0Port[];
		boxX: number;
		boxY?: number;
		boxHeight: number;
		startX?: number;
	};
```

#### 🔗 Зависимости

**Используемые типы:**

- `Idef0InputsProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Idef0Port` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/information/function/state/idef0';
import ... from '$stylist/science/svelte/atom/diagrams/idef-zero-connector/index.svelte';
```

#### 💡 Рекомендация по миграции

Создать файл: `science/type/struct/idef0-inputs-props/index.ts`

```typescript
// Extracted from: lib/science/svelte/molecule/diagrams/idef-zero-inputs/index.svelte:4
export type Idef0InputsProps = {
		ports: Idef0Port[];
		boxX: number;
		boxY?: number;
		boxHeight: number;
		startX?: number;
	};
```

---

### `Idef0Port`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/science/svelte/molecule/diagrams/idef-zero-outputs/index.svelte` |
| **Строка** | 3 |
| **Целевой путь** | `science/type/struct/idef0-port/index.ts` |

#### 📝 Определение типа

```typescript
type Idef0Port = { id: string; label?: string; color?: string };
```

#### 🔗 Зависимости

**Используемые типы:**

- `Idef0Port` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/information/function/state/idef0';
import ... from '$stylist/science/svelte/atom/diagrams/idef-zero-connector/index.svelte';
```

#### 💡 Рекомендация по миграции

Создать файл: `science/type/struct/idef0-port/index.ts`

```typescript
// Extracted from: lib/science/svelte/molecule/diagrams/idef-zero-outputs/index.svelte:3
export type Idef0Port = { id: string; label?: string; color?: string };
```

---

### `Idef0OutputsProps`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/science/svelte/molecule/diagrams/idef-zero-outputs/index.svelte` |
| **Строка** | 4 |
| **Целевой путь** | `science/type/struct/idef0-outputs-props/index.ts` |

#### 📝 Определение типа

```typescript
type Idef0OutputsProps = {
		ports: Idef0Port[];
		boxX: number;
		boxY?: number;
		boxWidth: number;
		boxHeight: number;
		endX?: number;
	};
```

#### 🔗 Зависимости

**Используемые типы:**

- `Idef0OutputsProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Idef0Port` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/information/function/state/idef0';
import ... from '$stylist/science/svelte/atom/diagrams/idef-zero-connector/index.svelte';
```

#### 💡 Рекомендация по миграции

Создать файл: `science/type/struct/idef0-outputs-props/index.ts`

```typescript
// Extracted from: lib/science/svelte/molecule/diagrams/idef-zero-outputs/index.svelte:4
export type Idef0OutputsProps = {
		ports: Idef0Port[];
		boxX: number;
		boxY?: number;
		boxWidth: number;
		boxHeight: number;
		endX?: number;
	};
```

---

### `LitegraphNodeProps`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/science/svelte/molecule/ontology/litegraph-node/index.svelte` |
| **Строка** | 9 |
| **Целевой путь** | `science/type/enum/litegraph-node-props/index.ts` |

#### 📝 Определение типа

```typescript
type LitegraphNodeProps = LitegraphNodeRecipe & {
		selectable?: boolean;
		resizable?: boolean;
		deletable?: boolean;
		duplicable?: boolean;
		showActions?: boolean;
		onNodeSelect?: (nodeId?: string) => void;
		onNodeDrag?: (nodeId: string | undefined, position: { x: number; y: number }) => void;
		onNodeResize?: (nodeId: string | undefined, size: { width?: number; height?: number | 'auto' }) => void;
		ondelete?: (nodeId?: string) => void;
		onduplicate?: (nodeId?: string) => void;
		onConnectionStart?: (port: LiteGraphPort, event: MouseEvent) => void;
		onConnectionEnd?: (port: LiteGraphPort, event: MouseEvent) => void;
		onPropertyChange?: (propertyId: string, value: unknown) => void;
		headerContent?: Snippet;
		bodyContent?: Snippet;
	};
```

#### 🔗 Зависимости

**Используемые типы:**

- `LitegraphNodeProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `LitegraphNodeRecipe` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `LiteGraphPort` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `MouseEvent` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `LiteGraphPort` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `MouseEvent` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Snippet` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Snippet` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from 'svelte';
import ... from '$stylist/science/interface/recipe/litegraph-node';
import ... from '$stylist/science/function/state/litegraph-node';
import ... from '$stylist';
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `science/type/enum/litegraph-node-props/index.ts`

```typescript
// Extracted from: lib/science/svelte/molecule/ontology/litegraph-node/index.svelte:9
export type LitegraphNodeProps = LitegraphNodeRecipe & {
		selectable?: boolean;
		resizable?: boolean;
		deletable?: boolean;
		duplicable?: boolean;
		showActions?: boolean;
		onNodeSelect?: (nodeId?: string) => void;
		onNodeDrag?: (nodeId: string | undefined, position: { x: number; y: number }) => void;
		onNodeResize?: (nodeId: string | undefined, size: { width?: number; height?: number | 'auto' }) => void;
		ondelete?: (nodeId?: string) => void;
		onduplicate?: (nodeId?: string) => void;
		onConnectionStart?: (port: LiteGraphPort, event: MouseEvent) => void;
		onConnectionEnd?: (port: LiteGraphPort, event: MouseEvent) => void;
		onPropertyChange?: (propertyId: string, value: unknown) => void;
		headerContent?: Snippet;
		bodyContent?: Snippet;
	};
```

---

### `NodeHeaderProps`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/science/svelte/molecule/ontology/node-header/index.svelte` |
| **Строка** | 13 |
| **Целевой путь** | `science/type/struct/node-header-props/index.ts` |

#### 📝 Определение типа

```typescript
type NodeHeaderProps = NodeHeaderRecipe & {
		id?: string;
		title?: string;
		actions?: Snippet;
		onTitleChange?: (value: string) => void;
		onclose?: () => void;
		onsettings?: () => void;
		onduplicate?: () => void;
		ondelete?: () => void;
	};
```

#### 🔗 Зависимости

**Используемые типы:**

- `NodeHeaderProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `NodeHeaderRecipe` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Snippet` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from 'svelte';
import ... from '$stylist/science/interface/recipe/node-header';
import ... from '$stylist/information/function/state/node-header';
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `science/type/struct/node-header-props/index.ts`

```typescript
// Extracted from: lib/science/svelte/molecule/ontology/node-header/index.svelte:13
export type NodeHeaderProps = NodeHeaderRecipe & {
		id?: string;
		title?: string;
		actions?: Snippet;
		onTitleChange?: (value: string) => void;
		onclose?: () => void;
		onsettings?: () => void;
		onduplicate?: () => void;
		ondelete?: () => void;
	};
```

---

### `Position2D`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/science/svelte/molecule/ontology/ontology-edge-component/index.svelte` |
| **Строка** | 5 |
| **Целевой путь** | `science/type/struct/position2-d/index.ts` |

#### 📝 Определение типа

```typescript
type Position2D = { x: number; y: number };
```

#### 🔗 Зависимости

**Используемые типы:**

- `Position2D` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/science/class/style-manager/ontology-edge-component';
```

#### 💡 Рекомендация по миграции

Создать файл: `science/type/struct/position2-d/index.ts`

```typescript
// Extracted from: lib/science/svelte/molecule/ontology/ontology-edge-component/index.svelte:5
export type Position2D = { x: number; y: number };
```

---

### `OntologyNode`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/science/svelte/molecule/ontology/ontology-edge-component/index.svelte` |
| **Строка** | 7 |
| **Целевой путь** | `science/type/struct/ontology-node/index.ts` |

#### 📝 Определение типа

```typescript
type OntologyNode = {
    id: string;
    name: string;
    type?: string;
    label?: string;
    position?: Position2D;
    width?: number;
    height?: number;
    attributes?: string[];
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `OntologyNode` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Position2D` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/science/class/style-manager/ontology-edge-component';
```

#### 💡 Рекомендация по миграции

Создать файл: `science/type/struct/ontology-node/index.ts`

```typescript
// Extracted from: lib/science/svelte/molecule/ontology/ontology-edge-component/index.svelte:7
export type OntologyNode = {
    id: string;
    name: string;
    type?: string;
    label?: string;
    position?: Position2D;
    width?: number;
    height?: number;
    attributes?: string[];
  };
```

---

### `OntologyEdge`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/science/svelte/molecule/ontology/ontology-edge-component/index.svelte` |
| **Строка** | 18 |
| **Целевой путь** | `science/type/struct/ontology-edge/index.ts` |

#### 📝 Определение типа

```typescript
type OntologyEdge = {
    id: string;
    source: string;
    target: string;
    relationship: string;
    label?: string;
    cardinality?: string;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `OntologyEdge` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/science/class/style-manager/ontology-edge-component';
```

#### 💡 Рекомендация по миграции

Создать файл: `science/type/struct/ontology-edge/index.ts`

```typescript
// Extracted from: lib/science/svelte/molecule/ontology/ontology-edge-component/index.svelte:18
export type OntologyEdge = {
    id: string;
    source: string;
    target: string;
    relationship: string;
    label?: string;
    cardinality?: string;
  };
```

---

### `Position2D`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/science/svelte/molecule/ontology/ontology-node-component/index.svelte` |
| **Строка** | 6 |
| **Целевой путь** | `science/type/struct/position2-d/index.ts` |

#### 📝 Определение типа

```typescript
type Position2D = { x: number; y: number };
```

#### 🔗 Зависимости

**Используемые типы:**

- `Position2D` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/science/class/style-manager/ontology-node-component';
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `science/type/struct/position2-d/index.ts`

```typescript
// Extracted from: lib/science/svelte/molecule/ontology/ontology-node-component/index.svelte:6
export type Position2D = { x: number; y: number };
```

---

### `OntologyNode`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/science/svelte/molecule/ontology/ontology-node-component/index.svelte` |
| **Строка** | 8 |
| **Целевой путь** | `science/type/struct/ontology-node/index.ts` |

#### 📝 Определение типа

```typescript
type OntologyNode = {
    id: string;
    name: string;
    type: string;
    label?: string;
    position?: Position2D;
    width?: number;
    height?: number;
    attributes?: string[];
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `OntologyNode` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Position2D` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/science/class/style-manager/ontology-node-component';
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `science/type/struct/ontology-node/index.ts`

```typescript
// Extracted from: lib/science/svelte/molecule/ontology/ontology-node-component/index.svelte:8
export type OntologyNode = {
    id: string;
    name: string;
    type: string;
    label?: string;
    position?: Position2D;
    width?: number;
    height?: number;
    attributes?: string[];
  };
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/science/svelte/molecule/ontology/ontology-node-component/index.svelte` |
| **Строка** | 19 |
| **Целевой путь** | `science/type/struct/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = {
    node: OntologyNode;
    showLabel?: boolean;
    class?: string;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `OntologyNode` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/science/class/style-manager/ontology-node-component';
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `science/type/struct/props/index.ts`

```typescript
// Extracted from: lib/science/svelte/molecule/ontology/ontology-node-component/index.svelte:19
export type Props = {
    node: OntologyNode;
    showLabel?: boolean;
    class?: string;
  };
```

---

### `PortGroupProps`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/science/svelte/molecule/ontology/port-group/index.svelte` |
| **Строка** | 8 |
| **Целевой путь** | `science/type/struct/port-group-props/index.ts` |

#### 📝 Определение типа

```typescript
type PortGroupProps = PortGroupRecipe & {
		id?: string;
		ports?: GraphPortRecipe[];
		showTypeIcons?: boolean;
		onPortClick?: (portId: string, event: MouseEvent) => void;
		onConnectionStart?: (port: GraphPortRecipe, event: MouseEvent) => void;
		onConnectionEnd?: (port: GraphPortRecipe, event: MouseEvent) => void;
	};
```

#### 🔗 Зависимости

**Используемые типы:**

- `PortGroupProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `PortGroupRecipe` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `GraphPortRecipe` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `MouseEvent` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `GraphPortRecipe` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `MouseEvent` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `GraphPortRecipe` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `MouseEvent` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/media/interface/recipe/port-group';
import ... from '$stylist/science/interface/recipe/graph-port';
import ... from '$stylist';
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `science/type/struct/port-group-props/index.ts`

```typescript
// Extracted from: lib/science/svelte/molecule/ontology/port-group/index.svelte:8
export type PortGroupProps = PortGroupRecipe & {
		id?: string;
		ports?: GraphPortRecipe[];
		showTypeIcons?: boolean;
		onPortClick?: (portId: string, event: MouseEvent) => void;
		onConnectionStart?: (port: GraphPortRecipe, event: MouseEvent) => void;
		onConnectionEnd?: (port: GraphPortRecipe, event: MouseEvent) => void;
	};
```

---

### `Idef0Port`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/science/svelte/organism/diagrams/idef-zero-diagram/index.svelte` |
| **Строка** | 7 |
| **Целевой путь** | `science/type/struct/idef0-port/index.ts` |

#### 📝 Определение типа

```typescript
type Idef0Port = { id: string; label?: string; color?: string };
```

#### 🔗 Зависимости

**Используемые типы:**

- `Idef0Port` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/science/interface/recipe/idef0-diagram';
import ... from '$stylist/information/function/state/idef0';
import ... from '$stylist/science/svelte/molecule/diagrams/idef-zero-black-box/index.svelte';
```

#### 💡 Рекомендация по миграции

Создать файл: `science/type/struct/idef0-port/index.ts`

```typescript
// Extracted from: lib/science/svelte/organism/diagrams/idef-zero-diagram/index.svelte:7
export type Idef0Port = { id: string; label?: string; color?: string };
```

---

### `Idef0Model`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/science/svelte/organism/diagrams/idef-zero-diagram/index.svelte` |
| **Строка** | 8 |
| **Целевой путь** | `science/type/struct/idef0-model/index.ts` |

#### 📝 Определение типа

```typescript
type Idef0Model = {
		title: string;
		subtitle?: string;
		inputs: Idef0Port[];
		outputs: Idef0Port[];
	};
```

#### 🔗 Зависимости

**Используемые типы:**

- `Idef0Model` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Idef0Port` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Idef0Port` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/science/interface/recipe/idef0-diagram';
import ... from '$stylist/information/function/state/idef0';
import ... from '$stylist/science/svelte/molecule/diagrams/idef-zero-black-box/index.svelte';
```

#### 💡 Рекомендация по миграции

Создать файл: `science/type/struct/idef0-model/index.ts`

```typescript
// Extracted from: lib/science/svelte/organism/diagrams/idef-zero-diagram/index.svelte:8
export type Idef0Model = {
		title: string;
		subtitle?: string;
		inputs: Idef0Port[];
		outputs: Idef0Port[];
	};
```

---

### `Idef0DiagramProps`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/science/svelte/organism/diagrams/idef-zero-diagram/index.svelte` |
| **Строка** | 14 |
| **Целевой путь** | `science/type/struct/idef0-diagram-props/index.ts` |

#### 📝 Определение типа

```typescript
type Idef0DiagramProps = Idef0DiagramRecipe & {
		model: Idef0Model;
	};
```

#### 🔗 Зависимости

**Используемые типы:**

- `Idef0DiagramProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Idef0DiagramRecipe` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Idef0Model` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/science/interface/recipe/idef0-diagram';
import ... from '$stylist/information/function/state/idef0';
import ... from '$stylist/science/svelte/molecule/diagrams/idef-zero-black-box/index.svelte';
```

#### 💡 Рекомендация по миграции

Создать файл: `science/type/struct/idef0-diagram-props/index.ts`

```typescript
// Extracted from: lib/science/svelte/organism/diagrams/idef-zero-diagram/index.svelte:14
export type Idef0DiagramProps = Idef0DiagramRecipe & {
		model: Idef0Model;
	};
```

---

### `NodeData`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/science/svelte/organism/ontology/graph-editor/index.svelte` |
| **Строка** | 16 |
| **Целевой путь** | `science/type/struct/node-data/index.ts` |

#### 📝 Определение типа

```typescript
type NodeData = LitegraphNodeRecipe & {
		properties?: readonly { id: string; name: string; type?: string; value?: unknown; label?: string }[];
	};
```

#### 🔗 Зависимости

**Используемые типы:**

- `NodeData` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `LitegraphNodeRecipe` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from 'svelte';
import ... from '$stylist';
import ... from '$stylist';
import ... from '$stylist';
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `science/type/struct/node-data/index.ts`

```typescript
// Extracted from: lib/science/svelte/organism/ontology/graph-editor/index.svelte:16
export type NodeData = LitegraphNodeRecipe & {
		properties?: readonly { id: string; name: string; type?: string; value?: unknown; label?: string }[];
	};
```

---

### `ConnectionData`

| Параметр | Значение |
|---|---|
| **Категория** | unknown |
| **Компонент** | `lib/science/svelte/organism/ontology/graph-editor/index.svelte` |
| **Строка** | 20 |
| **Целевой путь** | `science/type/unknown/connection-data/index.ts` |

#### 📝 Определение типа

```typescript
type ConnectionData = ConnectionLineRecipe;
```

#### 🔗 Зависимости

**Используемые типы:**

- `ConnectionData` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `ConnectionLineRecipe` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from 'svelte';
import ... from '$stylist';
import ... from '$stylist';
import ... from '$stylist';
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `science/type/unknown/connection-data/index.ts`

```typescript
// Extracted from: lib/science/svelte/organism/ontology/graph-editor/index.svelte:20
export type ConnectionData = ConnectionLineRecipe;
```

---

### `PaletteNode`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/science/svelte/organism/ontology/graph-editor/index.svelte` |
| **Строка** | 22 |
| **Целевой путь** | `science/type/struct/palette-node/index.ts` |

#### 📝 Определение типа

```typescript
type PaletteNode = {
		id: string;
		type: string;
		title: string;
		description?: string;
		color?: string;
		category: string;
	};
```

#### 🔗 Зависимости

**Используемые типы:**

- `PaletteNode` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from 'svelte';
import ... from '$stylist';
import ... from '$stylist';
import ... from '$stylist';
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `science/type/struct/palette-node/index.ts`

```typescript
// Extracted from: lib/science/svelte/organism/ontology/graph-editor/index.svelte:22
export type PaletteNode = {
		id: string;
		type: string;
		title: string;
		description?: string;
		color?: string;
		category: string;
	};
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/science/svelte/organism/ontology/graph-editor/index.svelte` |
| **Строка** | 31 |
| **Целевой путь** | `science/type/struct/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = {
		nodes?: readonly NodeData[];
		connections?: readonly ConnectionData[];
		selectedNodeIds?: readonly string[];
		zoom?: number;
		offset?: { x: number; y: number };
		showToolbar?: boolean;
		showMiniMap?: boolean;
		showNodePalette?: boolean;
		showPropertiesPanel?: boolean;
		showGrid?: boolean;
		palettePosition?: { x: number; y: number };
		toolbarItems?: readonly GraphToolbarRecipe[];
		paletteNodes?: PaletteNode[];
		onNodeSelect?: (nodeId: string) => void;
		onNodeDrag?: (nodeId: string, position: { x: number; y: number }) => void;
		onNodeDelete?: (nodeId: string) => void;
		onNodeDuplicate?: (nodeId: string) => void;
		onNodeAdd?: (node: NodeData) => void;
		onPropertyChange?: (nodeId: string, propertyId: string, value: unknown) => void;
		onZoomChange?: (zoom: number) => void;
		onOffsetChange?: (offset: { x: number; y: number }) => void;
		onSave?: (data: { nodes: readonly NodeData[]; connections: readonly ConnectionData[] }) => void;
		onExport?: () => void;
		onImport?: (data: unknown) => void;
		children?: Snippet;
		class?: string;
	};
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `NodeData` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `ConnectionData` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `GraphToolbarRecipe` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `PaletteNode` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `NodeData` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `NodeData` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `ConnectionData` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Snippet` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from 'svelte';
import ... from '$stylist';
import ... from '$stylist';
import ... from '$stylist';
import ... from '$stylist';
```

#### 💡 Рекомендация по миграции

Создать файл: `science/type/struct/props/index.ts`

```typescript
// Extracted from: lib/science/svelte/organism/ontology/graph-editor/index.svelte:31
export type Props = {
		nodes?: readonly NodeData[];
		connections?: readonly ConnectionData[];
		selectedNodeIds?: readonly string[];
		zoom?: number;
		offset?: { x: number; y: number };
		showToolbar?: boolean;
		showMiniMap?: boolean;
		showNodePalette?: boolean;
		showPropertiesPanel?: boolean;
		showGrid?: boolean;
		palettePosition?: { x: number; y: number };
		toolbarItems?: readonly GraphToolbarRecipe[];
		paletteNodes?: PaletteNode[];
		onNodeSelect?: (nodeId: string) => void;
		onNodeDrag?: (nodeId: string, position: { x: number; y: number }) => void;
		onNodeDelete?: (nodeId: string) => void;
		onNodeDuplicate?: (nodeId: string) => void;
		onNodeAdd?: (node: NodeData) => void;
		onPropertyChange?: (nodeId: string, propertyId: string, value: unknown) => void;
		onZoomChange?: (zoom: number) => void;
		onOffsetChange?: (offset: { x: number; y: number }) => void;
		onSave?: (data: { nodes: readonly NodeData[]; connections: readonly ConnectionData[] }) => void;
		onExport?: () => void;
		onImport?: (data: unknown) => void;
		children?: Snippet;
		class?: string;
	};
```

---

### `GraphNodeCardData`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/science/svelte/organism/ontology/graph-node-card/index.svelte` |
| **Строка** | 11 |
| **Целевой путь** | `science/type/struct/graph-node-card-data/index.ts` |

#### 📝 Определение типа

```typescript
type GraphNodeCardData = GraphNodeCardRecipe & {
    name: string;
    type: string;
    description?: string;
    fields?: { name: string; type: string; isRequired?: boolean }[];
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `GraphNodeCardData` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `GraphNodeCardRecipe` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist';
import ... from 'svelte';
import ... from '$stylist/science/class/style-manager/graph-node-card';
import ... from '$stylist';
import ... from '$stylist/layout/type/struct';
```

#### 💡 Рекомендация по миграции

Создать файл: `science/type/struct/graph-node-card-data/index.ts`

```typescript
// Extracted from: lib/science/svelte/organism/ontology/graph-node-card/index.svelte:11
export type GraphNodeCardData = GraphNodeCardRecipe & {
    name: string;
    type: string;
    description?: string;
    fields?: { name: string; type: string; isRequired?: boolean }[];
  };
```

---

### `GraphNodeCardProps`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/science/svelte/organism/ontology/graph-node-card/index.svelte` |
| **Строка** | 18 |
| **Целевой путь** | `science/type/struct/graph-node-card-props/index.ts` |

#### 📝 Определение типа

```typescript
type GraphNodeCardProps = {
    node: GraphNodeCardData;
    expanded?: boolean;
    showDetails?: boolean;
    selected?: boolean;
    highlight?: boolean;
    variant?: string;
    size?: string;
    class?: string;
  } & ArchitectureHTMLAttributes<HTMLDivElement>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `GraphNodeCardProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `GraphNodeCardData` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `ArchitectureHTMLAttributes` → импортируется из `$stylist//...`
- `HTMLDivElement` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist';
import ... from 'svelte';
import ... from '$stylist/science/class/style-manager/graph-node-card';
import ... from '$stylist';
import ... from '$stylist/layout/type/struct';
```

#### 💡 Рекомендация по миграции

Создать файл: `science/type/struct/graph-node-card-props/index.ts`

```typescript
// Extracted from: lib/science/svelte/organism/ontology/graph-node-card/index.svelte:18
export type GraphNodeCardProps = {
    node: GraphNodeCardData;
    expanded?: boolean;
    showDetails?: boolean;
    selected?: boolean;
    highlight?: boolean;
    variant?: string;
    size?: string;
    class?: string;
  } & ArchitectureHTMLAttributes<HTMLDivElement>;
```

---

### `NodeAddPayload`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/science/svelte/organism/ontology/litegraph-canvas/index.svelte` |
| **Строка** | 34 |
| **Целевой путь** | `science/type/struct/node-add-payload/index.ts` |

#### 📝 Определение типа

```typescript
type NodeAddPayload = LitegraphNodeType & {
		properties?: readonly LitegraphNodePropertyRecipe[];
	};
```

#### 🔗 Зависимости

**Используемые типы:**

- `NodeAddPayload` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `LitegraphNodeType` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `LitegraphNodePropertyRecipe` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from 'svelte';
import ... from '$stylist/science/interface/record/science';
import ... from '$stylist';
import ... from '$stylist';
import ... from '$stylist';
import ... from '$stylist';
import ... from '$stylist';
import ... from '$stylist/science/interface/record/science';
```

#### 💡 Рекомендация по миграции

Создать файл: `science/type/struct/node-add-payload/index.ts`

```typescript
// Extracted from: lib/science/svelte/organism/ontology/litegraph-canvas/index.svelte:34
export type NodeAddPayload = LitegraphNodeType & {
		properties?: readonly LitegraphNodePropertyRecipe[];
	};
```

---

---

## Домен: `social` (22 типов)

### `FriendStatus`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/social/svelte/organism/friend-list/index.svelte` |
| **Строка** | 17 |
| **Целевой путь** | `social/type/enum/friend-status/index.ts` |

#### 📝 Определение типа

```typescript
type FriendStatus = 'online' | 'offline' | 'away' | 'busy';
```

#### 🔗 Зависимости

**Используемые типы:**

- `FriendStatus` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/information/type/struct';
import ... from '$stylist';
import ... from '$lib';
```

#### 💡 Рекомендация по миграции

Создать файл: `social/type/enum/friend-status/index.ts`

```typescript
// Extracted from: lib/social/svelte/organism/friend-list/index.svelte:17
export type FriendStatus = 'online' | 'offline' | 'away' | 'busy';
```

---

### `Friend`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/social/svelte/organism/friend-list/index.svelte` |
| **Строка** | 19 |
| **Целевой путь** | `social/type/struct/friend/index.ts` |

#### 📝 Определение типа

```typescript
type Friend = {
    id: string;
    name: string;
    username?: string;
    avatar?: string;
    status: FriendStatus;
    lastSeen?: Date;
    isOnline?: boolean;
    isFavorite?: boolean;
    tags?: string[];
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `Friend` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `FriendStatus` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Date` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/information/type/struct';
import ... from '$stylist';
import ... from '$lib';
```

#### 💡 Рекомендация по миграции

Создать файл: `social/type/struct/friend/index.ts`

```typescript
// Extracted from: lib/social/svelte/organism/friend-list/index.svelte:19
export type Friend = {
    id: string;
    name: string;
    username?: string;
    avatar?: string;
    status: FriendStatus;
    lastSeen?: Date;
    isOnline?: boolean;
    isFavorite?: boolean;
    tags?: string[];
  };
```

---

### `RestProps`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/social/svelte/organism/friend-list/index.svelte` |
| **Строка** | 31 |
| **Целевой путь** | `social/type/struct/rest-props/index.ts` |

#### 📝 Определение типа

```typescript
type RestProps = Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `RestProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `InformationHTMLAttributes` → импортируется из `$stylist//...`
- `HTMLDivElement` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/information/type/struct';
import ... from '$stylist';
import ... from '$lib';
```

#### 💡 Рекомендация по миграции

Создать файл: `social/type/struct/rest-props/index.ts`

```typescript
// Extracted from: lib/social/svelte/organism/friend-list/index.svelte:31
export type RestProps = Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'>;
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/social/svelte/organism/friend-list/index.svelte` |
| **Строка** | 33 |
| **Целевой путь** | `social/type/enum/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = RestProps & {
    friends: Friend[];
    showStatus?: boolean;
    showLastSeen?: boolean;
    showTags?: boolean;
    showSearch?: boolean;
    showInviteButton?: boolean;
    sortBy?: 'name' | 'status' | 'lastSeen';
    sortOrder?: 'asc' | 'desc';
    groupByStatus?: boolean;
    maxFriends?: number;
    onFriendSelect?: (friend: Friend) => void;
    onSendMessage?: (friend: Friend) => void;
    onCall?: (friend: Friend) => void;
    onVideoCall?: (friend: Friend) => void;
    onAddFriend?: () => void;
    onStatusChange?: (friendId: string, status: FriendStatus) => void;
    class?: string;
    itemClass?: string;
    headerClass?: string;
    searchClass?: string;
    listClass?: string;
    locale?: string;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `RestProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Friend` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Friend` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Friend` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Friend` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Friend` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `FriendStatus` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/information/type/struct';
import ... from '$stylist';
import ... from '$lib';
```

#### 💡 Рекомендация по миграции

Создать файл: `social/type/enum/props/index.ts`

```typescript
// Extracted from: lib/social/svelte/organism/friend-list/index.svelte:33
export type Props = RestProps & {
    friends: Friend[];
    showStatus?: boolean;
    showLastSeen?: boolean;
    showTags?: boolean;
    showSearch?: boolean;
    showInviteButton?: boolean;
    sortBy?: 'name' | 'status' | 'lastSeen';
    sortOrder?: 'asc' | 'desc';
    groupByStatus?: boolean;
    maxFriends?: number;
    onFriendSelect?: (friend: Friend) => void;
    onSendMessage?: (friend: Friend) => void;
    onCall?: (friend: Friend) => void;
    onVideoCall?: (friend: Friend) => void;
    onAddFriend?: () => void;
    onStatusChange?: (friendId: string, status: FriendStatus) => void;
    class?: string;
    itemClass?: string;
    headerClass?: string;
    searchClass?: string;
    listClass?: string;
    locale?: string;
  };
```

---

### `ActivityType`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/social/svelte/organism/social-activity-feed/index.svelte` |
| **Строка** | 23 |
| **Целевой путь** | `social/type/enum/activity-type/index.ts` |

#### 📝 Определение типа

```typescript
type ActivityType = 
    | 'like' 
    | 'comment' 
    | 'follow' 
    | 'share' 
    | 'mention' 
    | 'achievement'
    | 'system'
    | 'announcement';
```

#### 🔗 Зависимости

**Используемые типы:**

- `ActivityType` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/information/type/struct';
import ... from '$stylist';
import ... from '$lib';
```

#### 💡 Рекомендация по миграции

Создать файл: `social/type/enum/activity-type/index.ts`

```typescript
// Extracted from: lib/social/svelte/organism/social-activity-feed/index.svelte:23
export type ActivityType = 
    | 'like' 
    | 'comment' 
    | 'follow' 
    | 'share' 
    | 'mention' 
    | 'achievement'
    | 'system'
    | 'announcement';
```

---

### `User`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/social/svelte/organism/social-activity-feed/index.svelte` |
| **Строка** | 33 |
| **Целевой путь** | `social/type/struct/user/index.ts` |

#### 📝 Определение типа

```typescript
type User = {
    id: string;
    name: string;
    username?: string;
    avatar?: string;
    isVerified?: boolean;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `User` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/information/type/struct';
import ... from '$stylist';
import ... from '$lib';
```

#### 💡 Рекомендация по миграции

Создать файл: `social/type/struct/user/index.ts`

```typescript
// Extracted from: lib/social/svelte/organism/social-activity-feed/index.svelte:33
export type User = {
    id: string;
    name: string;
    username?: string;
    avatar?: string;
    isVerified?: boolean;
  };
```

---

### `Activity`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/social/svelte/organism/social-activity-feed/index.svelte` |
| **Строка** | 41 |
| **Целевой путь** | `social/type/struct/activity/index.ts` |

#### 📝 Определение типа

```typescript
type Activity = {
    id: string;
    type: ActivityType;
    actor: User;
    target?: User; // For follow activities
    subject?: string; // Object of the activity (e.g., post title)
    content?: string; // Additional content
    timestamp: Date;
    relatedUrl?: string;
    isRead?: boolean;
    isImportant?: boolean;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `Activity` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `ActivityType` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `User` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `User` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `For` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Object` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Additional` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Date` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/information/type/struct';
import ... from '$stylist';
import ... from '$lib';
```

#### 💡 Рекомендация по миграции

Создать файл: `social/type/struct/activity/index.ts`

```typescript
// Extracted from: lib/social/svelte/organism/social-activity-feed/index.svelte:41
export type Activity = {
    id: string;
    type: ActivityType;
    actor: User;
    target?: User; // For follow activities
    subject?: string; // Object of the activity (e.g., post title)
    content?: string; // Additional content
    timestamp: Date;
    relatedUrl?: string;
    isRead?: boolean;
    isImportant?: boolean;
  };
```

---

### `RestProps`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/social/svelte/organism/social-activity-feed/index.svelte` |
| **Строка** | 54 |
| **Целевой путь** | `social/type/struct/rest-props/index.ts` |

#### 📝 Определение типа

```typescript
type RestProps = Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `RestProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `InformationHTMLAttributes` → импортируется из `$stylist//...`
- `HTMLDivElement` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/information/type/struct';
import ... from '$stylist';
import ... from '$lib';
```

#### 💡 Рекомендация по миграции

Создать файл: `social/type/struct/rest-props/index.ts`

```typescript
// Extracted from: lib/social/svelte/organism/social-activity-feed/index.svelte:54
export type RestProps = Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'>;
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/social/svelte/organism/social-activity-feed/index.svelte` |
| **Строка** | 56 |
| **Целевой путь** | `social/type/struct/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = RestProps & {
    activities: Activity[];
    showAvatars?: boolean;
    showTimestamp?: boolean;
    showReadStatus?: boolean;
    enableFiltering?: boolean;
    showLoadMore?: boolean;
    maxActivities?: number;
    onActivityClick?: (activity: Activity) => void;
    onActivityMarkRead?: (activityId: string) => void;
    onActivityMarkUnread?: (activityId: string) => void;
    class?: string;
    itemClass?: string;
    headerClass?: string;
    footerClass?: string;
    locale?: string;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `RestProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Activity` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Activity` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/information/type/struct';
import ... from '$stylist';
import ... from '$lib';
```

#### 💡 Рекомендация по миграции

Создать файл: `social/type/struct/props/index.ts`

```typescript
// Extracted from: lib/social/svelte/organism/social-activity-feed/index.svelte:56
export type Props = RestProps & {
    activities: Activity[];
    showAvatars?: boolean;
    showTimestamp?: boolean;
    showReadStatus?: boolean;
    enableFiltering?: boolean;
    showLoadMore?: boolean;
    maxActivities?: number;
    onActivityClick?: (activity: Activity) => void;
    onActivityMarkRead?: (activityId: string) => void;
    onActivityMarkUnread?: (activityId: string) => void;
    class?: string;
    itemClass?: string;
    headerClass?: string;
    footerClass?: string;
    locale?: string;
  };
```

---

### `Post`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/social/svelte/organism/social-feed/index.svelte` |
| **Строка** | 18 |
| **Целевой путь** | `social/type/struct/post/index.ts` |

#### 📝 Определение типа

```typescript
export type Post = {
    id: string; // Assuming an ID is needed for actions
    title: string;
    subtitle?: string;
    image?: string;
    date?: string;
    excerpt?: string;
    author: string;
    tags?: string[];
    // Additional properties for social feed context
    content: string; // The main content of the post for filtering
    authorAvatar?: string;
    authorIsVerified?: boolean;
    likes: number;
    comments: number;
    shares: number;
    isLiked: boolean;
    isBookmarked: boolean;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `Post` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Assuming` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `ID` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Additional` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `The` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/information/type/struct';
import ... from '$stylist';
import ... from '$stylist';
import ... from '../post-card/PostCard.svelte';
```

#### 💡 Рекомендация по миграции

Создать файл: `social/type/struct/post/index.ts`

```typescript
// Extracted from: lib/social/svelte/organism/social-feed/index.svelte:18
export type Post = {
    id: string; // Assuming an ID is needed for actions
    title: string;
    subtitle?: string;
    image?: string;
    date?: string;
    excerpt?: string;
    author: string;
    tags?: string[];
    // Additional properties for social feed context
    content: string; // The main content of the post for filtering
    authorAvatar?: string;
    authorIsVerified?: boolean;
    likes: number;
    comments: number;
    shares: number;
    isLiked: boolean;
    isBookmarked: boolean;
  };
```

---

### `FilterOption`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/social/svelte/organism/social-feed/index.svelte` |
| **Строка** | 38 |
| **Целевой путь** | `social/type/struct/filter-option/index.ts` |

#### 📝 Определение типа

```typescript
export type FilterOption = {
    id: string;
    label: string;
    active: boolean;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `FilterOption` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/information/type/struct';
import ... from '$stylist';
import ... from '$stylist';
import ... from '../post-card/PostCard.svelte';
```

#### 💡 Рекомендация по миграции

Создать файл: `social/type/struct/filter-option/index.ts`

```typescript
// Extracted from: lib/social/svelte/organism/social-feed/index.svelte:38
export type FilterOption = {
    id: string;
    label: string;
    active: boolean;
  };
```

---

### `FeedUser`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/social/svelte/organism/social-feed/index.svelte` |
| **Строка** | 44 |
| **Целевой путь** | `social/type/struct/feed-user/index.ts` |

#### 📝 Определение типа

```typescript
export type FeedUser = {
    id: string;
    name: string;
    avatar?: string;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `FeedUser` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/information/type/struct';
import ... from '$stylist';
import ... from '$stylist';
import ... from '../post-card/PostCard.svelte';
```

#### 💡 Рекомендация по миграции

Создать файл: `social/type/struct/feed-user/index.ts`

```typescript
// Extracted from: lib/social/svelte/organism/social-feed/index.svelte:44
export type FeedUser = {
    id: string;
    name: string;
    avatar?: string;
  };
```

---

### `RestProps`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/social/svelte/organism/social-feed/index.svelte` |
| **Строка** | 50 |
| **Целевой путь** | `social/type/struct/rest-props/index.ts` |

#### 📝 Определение типа

```typescript
type RestProps = Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `RestProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `InformationHTMLAttributes` → импортируется из `$stylist//...`
- `HTMLDivElement` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/information/type/struct';
import ... from '$stylist';
import ... from '$stylist';
import ... from '../post-card/PostCard.svelte';
```

#### 💡 Рекомендация по миграции

Создать файл: `social/type/struct/rest-props/index.ts`

```typescript
// Extracted from: lib/social/svelte/organism/social-feed/index.svelte:50
export type RestProps = Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'>;
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/social/svelte/organism/social-feed/index.svelte` |
| **Строка** | 52 |
| **Целевой путь** | `social/type/struct/props/index.ts` |

#### 📝 Определение типа

```typescript
export type Props = RestProps & {
    posts: Post[];
    currentUser?: FeedUser;
    showFilters?: boolean;
    showSearch?: boolean;
    showCreatePost?: boolean;
    filters?: FilterOption[];
    showLoadMore?: boolean;
    onPostLike?: (postId: string) => void;
    onPostComment?: (postId: string) => void;
    onPostShare?: (postId: string) => void;
    onPostBookmark?: (postId: string) => void;
    onCreatePost?: () => void;
    onLoadMore?: () => void;
    class?: string;
    headerClass?: string;
    feedItemClass?: string;
    footerClass?: string;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `RestProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Post` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `FeedUser` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `FilterOption` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/information/type/struct';
import ... from '$stylist';
import ... from '$stylist';
import ... from '../post-card/PostCard.svelte';
```

#### 💡 Рекомендация по миграции

Создать файл: `social/type/struct/props/index.ts`

```typescript
// Extracted from: lib/social/svelte/organism/social-feed/index.svelte:52
export type Props = RestProps & {
    posts: Post[];
    currentUser?: FeedUser;
    showFilters?: boolean;
    showSearch?: boolean;
    showCreatePost?: boolean;
    filters?: FilterOption[];
    showLoadMore?: boolean;
    onPostLike?: (postId: string) => void;
    onPostComment?: (postId: string) => void;
    onPostShare?: (postId: string) => void;
    onPostBookmark?: (postId: string) => void;
    onCreatePost?: () => void;
    onLoadMore?: () => void;
    class?: string;
    headerClass?: string;
    feedItemClass?: string;
    footerClass?: string;
  };
```

---

### `Provider`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/social/svelte/organism/social-login/index.svelte` |
| **Строка** | 20 |
| **Целевой путь** | `social/type/enum/provider/index.ts` |

#### 📝 Определение типа

```typescript
type Provider = 'google' | 'facebook' | 'github' | 'twitter' | 'linkedin' | 'apple' | 'microsoft' | 'slack';
```

#### 🔗 Зависимости

**Используемые типы:**

- `Provider` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/information/type/struct';
import ... from '$stylist';
import ... from '$lib';
```

#### 💡 Рекомендация по миграции

Создать файл: `social/type/enum/provider/index.ts`

```typescript
// Extracted from: lib/social/svelte/organism/social-login/index.svelte:20
export type Provider = 'google' | 'facebook' | 'github' | 'twitter' | 'linkedin' | 'apple' | 'microsoft' | 'slack';
```

---

### `ProviderConfig`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/social/svelte/organism/social-login/index.svelte` |
| **Строка** | 22 |
| **Целевой путь** | `social/type/struct/provider-config/index.ts` |

#### 📝 Определение типа

```typescript
type ProviderConfig = {
    id: Provider;
    name: string;
    icon: any;
    color: string;
    textColor: string;
    borderColor: string;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `ProviderConfig` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Provider` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/information/type/struct';
import ... from '$stylist';
import ... from '$lib';
```

#### 💡 Рекомендация по миграции

Создать файл: `social/type/struct/provider-config/index.ts`

```typescript
// Extracted from: lib/social/svelte/organism/social-login/index.svelte:22
export type ProviderConfig = {
    id: Provider;
    name: string;
    icon: any;
    color: string;
    textColor: string;
    borderColor: string;
  };
```

---

### `RestProps`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/social/svelte/organism/social-login/index.svelte` |
| **Строка** | 31 |
| **Целевой путь** | `social/type/struct/rest-props/index.ts` |

#### 📝 Определение типа

```typescript
type RestProps = Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `RestProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `InformationHTMLAttributes` → импортируется из `$stylist//...`
- `HTMLDivElement` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/information/type/struct';
import ... from '$stylist';
import ... from '$lib';
```

#### 💡 Рекомендация по миграции

Создать файл: `social/type/struct/rest-props/index.ts`

```typescript
// Extracted from: lib/social/svelte/organism/social-login/index.svelte:31
export type RestProps = Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'>;
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/social/svelte/organism/social-login/index.svelte` |
| **Строка** | 33 |
| **Целевой путь** | `social/type/struct/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = RestProps & {
    providers?: Provider[];
    showEmailForm?: boolean;
    showPasswordForm?: boolean;
    showSignUp?: boolean;
    showForgotPassword?: boolean;
    title?: string;
    description?: string;
    class?: string;
    buttonClass?: string;
    formClass?: string;
    inputClass?: string;
    onLogin?: (provider: Provider) => void;
    onEmailLogin?: (email: string, password: string) => void;
    onSignUp?: () => void;
    onForgotPassword?: () => void;
    onError?: (error: string) => void;
    locale?: string;
    socialLoginText?: string;
    emailLoginText?: string;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `RestProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Provider` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Provider` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/information/type/struct';
import ... from '$stylist';
import ... from '$lib';
```

#### 💡 Рекомендация по миграции

Создать файл: `social/type/struct/props/index.ts`

```typescript
// Extracted from: lib/social/svelte/organism/social-login/index.svelte:33
export type Props = RestProps & {
    providers?: Provider[];
    showEmailForm?: boolean;
    showPasswordForm?: boolean;
    showSignUp?: boolean;
    showForgotPassword?: boolean;
    title?: string;
    description?: string;
    class?: string;
    buttonClass?: string;
    formClass?: string;
    inputClass?: string;
    onLogin?: (provider: Provider) => void;
    onEmailLogin?: (email: string, password: string) => void;
    onSignUp?: () => void;
    onForgotPassword?: () => void;
    onError?: (error: string) => void;
    locale?: string;
    socialLoginText?: string;
    emailLoginText?: string;
  };
```

---

### `SocialPlatform`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/social/svelte/organism/social-share/index.svelte` |
| **Строка** | 19 |
| **Целевой путь** | `social/type/enum/social-platform/index.ts` |

#### 📝 Определение типа

```typescript
type SocialPlatform = 'facebook' | 'twitter' | 'linkedin' | 'pinterest' | 'reddit' | 'whatsapp' | 'telegram' | 'email' | 'copy';
```

#### 🔗 Зависимости

**Используемые типы:**

- `SocialPlatform` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/information/type/struct';
import ... from '$stylist';
import ... from '$lib';
```

#### 💡 Рекомендация по миграции

Создать файл: `social/type/enum/social-platform/index.ts`

```typescript
// Extracted from: lib/social/svelte/organism/social-share/index.svelte:19
export type SocialPlatform = 'facebook' | 'twitter' | 'linkedin' | 'pinterest' | 'reddit' | 'whatsapp' | 'telegram' | 'email' | 'copy';
```

---

### `ShareOption`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/social/svelte/organism/social-share/index.svelte` |
| **Строка** | 21 |
| **Целевой путь** | `social/type/struct/share-option/index.ts` |

#### 📝 Определение типа

```typescript
type ShareOption = {
    platform: SocialPlatform;
    label: string;
    icon: any; // Lucide icon
    enabled: boolean;
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `ShareOption` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `SocialPlatform` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `Lucide` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/information/type/struct';
import ... from '$stylist';
import ... from '$lib';
```

#### 💡 Рекомендация по миграции

Создать файл: `social/type/struct/share-option/index.ts`

```typescript
// Extracted from: lib/social/svelte/organism/social-share/index.svelte:21
export type ShareOption = {
    platform: SocialPlatform;
    label: string;
    icon: any; // Lucide icon
    enabled: boolean;
  };
```

---

### `RestProps`

| Параметр | Значение |
|---|---|
| **Категория** | struct |
| **Компонент** | `lib/social/svelte/organism/social-share/index.svelte` |
| **Строка** | 28 |
| **Целевой путь** | `social/type/struct/rest-props/index.ts` |

#### 📝 Определение типа

```typescript
type RestProps = Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'>;
```

#### 🔗 Зависимости

**Используемые типы:**

- `RestProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `InformationHTMLAttributes` → импортируется из `$stylist//...`
- `HTMLDivElement` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/information/type/struct';
import ... from '$stylist';
import ... from '$lib';
```

#### 💡 Рекомендация по миграции

Создать файл: `social/type/struct/rest-props/index.ts`

```typescript
// Extracted from: lib/social/svelte/organism/social-share/index.svelte:28
export type RestProps = Omit<InformationHTMLAttributes<HTMLDivElement>, 'class'>;
```

---

### `Props`

| Параметр | Значение |
|---|---|
| **Категория** | enum |
| **Компонент** | `lib/social/svelte/organism/social-share/index.svelte` |
| **Строка** | 30 |
| **Целевой путь** | `social/type/enum/props/index.ts` |

#### 📝 Определение типа

```typescript
type Props = RestProps & {
    title?: string;
    url?: string;
    description?: string;
    platforms?: SocialPlatform[];
    showCopyLink?: boolean;
    showEmbed?: boolean;
    showSave?: boolean;
    showLike?: boolean;
    customOptions?: ShareOption[];
    class?: string;
    buttonClass?: string;
    dropdownClass?: string;
    onShare?: (platform: SocialPlatform, url: string) => void;
    onSave?: () => void;
    onLike?: () => void;
    size?: 'sm' | 'md' | 'lg';
  };
```

#### 🔗 Зависимости

**Используемые типы:**

- `Props` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `RestProps` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `SocialPlatform` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `ShareOption` → ⚠️ источник не найден (возможно, глобальный или локальный)
- `SocialPlatform` → ⚠️ источник не найден (возможно, глобальный или локальный)

**Все импорты компонента:**

```typescript
import ... from '$stylist/information/type/struct';
import ... from '$stylist';
import ... from '$lib';
```

#### 💡 Рекомендация по миграции

Создать файл: `social/type/enum/props/index.ts`

```typescript
// Extracted from: lib/social/svelte/organism/social-share/index.svelte:30
export type Props = RestProps & {
    title?: string;
    url?: string;
    description?: string;
    platforms?: SocialPlatform[];
    showCopyLink?: boolean;
    showEmbed?: boolean;
    showSave?: boolean;
    showLike?: boolean;
    customOptions?: ShareOption[];
    class?: string;
    buttonClass?: string;
    dropdownClass?: string;
    onShare?: (platform: SocialPlatform, url: string) => void;
    onSave?: () => void;
    onLike?: () => void;
    size?: 'sm' | 'md' | 'lg';
  };
```

---

## 🎯 Рекомендации по миграции

### Порядок действий

1. **Начать с типов без зависимостей** — их можно перемещать сразу
2. **Исправить циклические зависимости** — вынести общие части в отдельные модули
3. **Перемещать типы по категориям:**
   - `enum` → union types (`'a' | 'b' | 'c'`)
   - `struct` → object types с именованными свойствами (`Props`, `Config`)
   - `map` → `Record<K, V>` с конкретными ключами
   - `record` → `Record<string, T>` с динамическими ключами
4. **После перемещения** — перегенерировать индексы: `python indexation/cli.py`

### Статистика

- Всего типов: 395
- Уникальных путей для создания: 244
- Типов с циклическими зависимостями: 0
