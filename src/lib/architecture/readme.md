# Architecture

## Назначение

Домен `architecture` — фундамент системы. Отвечает за **перемещение камеры по сцене**: управление позицией, зумом, семантическим масштабом (depth stages). Все остальные домены строятся поверх него.

```
architecture          ← камера, сцена, WebGL, semantic zoom, LEGO-примитивы
  └── layout          ← раскладки (grid, stack, flex)
       ├── information    ← слоты данных (icon, badge, label)
       ├── interaction    ← поведение (click, focus, drag)
       └── theme          ← визуальные токены (цвет, тень)
            └── ...       ← commerce и другие составные домены
```

---

## Структура

```
architecture/
├── class/           # Классы управления стилями и объектами сцен
├── const/           # Токены, перечисления, маппинги
├── data/            # WebGL-шейдеры, SVG-ресурсы
├── function/        # Логика камеры, сцены, semantic zoom, состояние
├── interface/       # LEGO-примитивы (proto) и рецепты компонентов (recipe)
├── svelte/          # Svelte-компоненты сцен (molecule/organism)
├── type/            # TypeScript-типы
└── index.ts
```

---

## Ключевые концепции

### Camera & Semantic Zoom

Камера движется по оси Z (depth). В зависимости от расстояния до объекта активируется один из 7 визуальных стейджей:

```
dot → icon → pill → minimal → compact → detailed → screen
```

- `function/script/depth/` — пороги и логика стейджей
- `function/script/camera/` — Camera API
- `function/script/camera-state/` — состояние камеры
- `function/script/semantic-zoom/` — `resolveSemanticZoomNode`, `useSemanticZoom`
- `function/state/camera/` — `useCamera` (Svelte store)

### Scene & WebGL

- `svelte/organism/scene/` — `<Scene>` — базовый WebGL-канвас
- `svelte/organism/prezi-scene/` — `<PreziScene>` — Prezi-режим навигации
- `svelte/organism/canvas/presenter-scene/` — `<PresenterScene>` — presenter-оболочка
- `svelte/molecule/canvas/presenter-node-shell/` — `<PresenterNodeShell>` — узел сцены
- `function/script/scene/` — буферы, геометрия, WebGL-программы
- `function/script/math/`, `function/script/matrix4/` — математика для 3D
- `data/shaders/` — GLSL шейдеры (vert/frag)

### LEGO-интерфейсы

Система типов строится по принципу LEGO: атомарные `proto`-интерфейсы собираются в `recipe`-рецепты через `RecordArchitectureMerge`.

```typescript
// proto/ — атомарные кирпичи
interface ISizable { size: TokenSize; density: TokenDensity; shape: TokenShape }
interface IPositionable { x: number; y: number }

// recipe/ — составные контракты
interface ButtonRecipe extends RecordArchitectureMerge<[
  LabelRecipe, IIconSlot, IClickable, IFocusable, ISizable, IBadgeSlot
]> {}
```

- `interface/proto/` — `ISizable`, `IPositionable`, `IScrollable`, `IElevatable`, `IDimensionable`, `IBorderToken`
- `interface/recipe/` — `ButtonRecipe`, `CardRecipe`, `InputFieldRecipe`, `AlertRecipe`, `AvatarRecipe`, `BadgeRecipe`, `IconButtonRecipe`, `LabelRecipe`, `MediaItemRecipe`, `SelectRecipe`, `ToggleRecipe`, `DraggableItemRecipe`
- `type/record/architecture-merge/` — `RecordArchitectureMerge<T>` — утилита слияния контрактов

### Токены и константы

- `const/enum/` — токены: `axes`, `component-type`, `connector`, `functional-taxonomy`, `line-type`, `marker`, `node-type`, `ownership`, `pan-mode`, `relationship`, `skeleton`, `tier`, `trajectory`
- `const/map/` — маппинги: `easing`, `letter-spacing`, `line-height`, `opacity`, `zoom`
- `const/record/` — записи значений: `density`, `frame`, `icon-size`, `layer`, `level`, `shape`, `size`, `text-size`
- `const/struct/scene/` — константы контента сцены

### Style Managers

- `class/style-manager/base/` — `StyleManagerBase` — базовые CSS-утилиты
- `class/style-manager/scene/` — стили сцены
- `class/style-manager/presenter-scene/` — стили presenter-сцены
- `class/style-manager/presenter-node-shell/` — стили узла presenter
- `class/style-manager/state/` — управление состоянием стилей
- `class/object-manager/scene/` — `SceneObjectManager` — управление объектами сцены

### Состояние

- `function/state/camera/` — `useCamera`
- `function/state/focus/` — `useFocus`
- `function/state/presentation/` — `usePresentation`
- `function/state/prezi-scene/` — `usePreziState`
- `function/state/selection/` — `useSelection`
- `function/state/presenter-node-shell/` — состояние узла presenter
- `function/state/presenter-scene/` — состояние presenter-сцены
- `function/state/scene/` — состояние сцены

---

## Связь с другими доменами

`architecture` — только поставщик. Он не импортирует бизнес-логику из других доменов.

| Домен | Использует из architecture |
|---|---|
| `layout` | `ISizable`, `RecordArchitectureMerge`, токены размеров |
| `information` | `RecordArchitectureMerge`, proto-интерфейсы |
| `interaction` | `RecordArchitectureMerge`, `ISizable`, `IScrollable` |
| `commerce` | рецепты компонентов как базу контрактов |
