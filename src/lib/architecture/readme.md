# Architecture

## Обзор

Папка `architecture` — это центральный модуль системы дизайна **Stylist**, который определяет фундаментальные архитектурные паттерны, компоненты и систему управления стилями. Этот модуль следует принципам атомарного дизайна и построен на основе композиции интерфейсов по принципу LEGO.

## Структура директории

```
architecture/
├── class/           # Классы для управления стилями и объектами
├── const/           # Константы и токены дизайн-системы
├── data/            # Данные (шейдеры, SVG и другие ресурсы)
├── function/        # Функции и утилиты
├── interface/       # Интерфейсы и рецепты компонентов
├── svelte/          # Svelte-компоненты (молекулы и организмы)
├── type/            # TypeScript типы
└── index.ts         # Главный файл экспортов
```

---

## Подробное описание разделов

### 1. `class/` — Классы

Содержит классы для управления стилями и объектами сцен.

#### Структура:
- **`object-manager/`** — Менеджеры объектов
  - `scene/` — Управление объектами сцен

- **`style-manager/`** — Менеджеры стилей
  - `base/` — Базовый класс `StyleManagerBase` с общими стилями
  - `presenter-node-shell/` — Стили для узлов презентера
  - `presenter-scene/` — Стили для сцен презентера
  - `scene/` — Стили для сцен
  - `state/` — Управление состоянием стилей

#### Ключевые классы:
- **`StyleManagerBase`** — базовый класс со статическими методами для работы с CSS-классами
- **`SceneObjectManager`** — управление объектами сцен
- **`PresenterSceneStyleManager`** — управление стилями сцен презентера

#### Пример использования:
```typescript
import { StyleManagerBase } from '$stylist/architecture';

const className = StyleManagerBase.getClass('interactive', 'my-custom-class');
// Результат: "inline-flex items-center justify-center font-medium rounded-md transition-colors my-custom-class"
```

---

### 2. `const/` — Константы

Содержит все константы, токены и перечисления дизайн-системы.

#### Структура:
- **`enum/`** — Перечисления
  - `component-type/` — Типы компонентов (text, image, video, button и т.д.)
  - `border-style/`, `corner/`, `shape/` — Стили границ, углов, форм
  - `density/`, `ownership/`, `relationship/` — Плотность, владение, связи
  - `functional-taxonomy/` — Функциональная таксономия
  - `node-type/`, `line-type/`, `marker/` — Типы узлов, линий, маркеров
  - `pan-mode/`, `trajectory/`, `skeleton/` — Режимы панорамирования, траектории
  - `axes/` — Оси координат (X, Y, Z)
  - `tier/` — Уровни иерархии

- **`map/`** — Маппинги токенов
  - Соотношения сторон, затухания, межбуквенные интервалы
  - Высота строк, прозрачность, зум, z-index

- **`record/`** — Записи значений
  - `size/`, `spacing/`, `padding/` — Размеры, отступы, внутренние отступы
  - `border-radius/`, `elevation/` — Радиусы углов, возвышения
  - `frame/`, `layer/`, `level/` — Фреймы, слои, уровни
  - `shape/`, `density/` — Формы, плотность
  - `icon-size/`, `text-size/`, `class-size/` — Размеры иконок, текста, классов
  - `size-map/` — Карты размеров

- **`struct/`** — Структурные константы
  - `SCENE_CONTENT` — Контент сцен

#### Примеры:
```typescript
import { TOKEN_COMPONENT_TYPE, RECORD_SIZE } from '$stylist/architecture';

// TOKEN_COMPONENT_TYPE = ['text', 'image', 'video', 'button', ...]
// RECORD_SIZE = { dot: 'xs', icon: 'sm', pill: 'md', ... }
```

---

### 3. `data/` — Данные

Содержит данные приложения, в основном ресурсы для рендеринга.

#### Структура:
- **`shaders/`** — WebGL шейдеры для 3D-графики
  - `ARCHITECTURE_SHADER_CATALOG` — каталог шейдеров
- **`svg/`** — SVG-ресурсы

---

### 4. `function/` — Функции

Содержит вспомогательные функции и логику работы со сценами, камерой и состоянием.

#### Структура:
- **`script/`** — Основная логика
  - `camera/` — Работа с камерой
  - `camera-state/` — Состояние камеры
  - `components/` — Компонентные функции (getComponentClasses, getSizeClasses и т.д.)
  - `content/` — Загрузка и управление контентом
  - `depth/` — Управление глубиной (semantic zoom stages)
  - `hook/` — Хуки
  - `math/` — Математические утилиты
  - `matrix4/` — Работа с 4x4 матрицами
  - `molecules/` — Молекулярные функции
  - `scene/` — Функции для работы со сценами (создание буферов, геометрии, программ WebGL)
  - `semantic-zoom/` — Семантический зум

- **`state/`** — Управление состоянием
  - `camera/` — useCamera
  - `focus/` — useFocus
  - `presentation/` — usePresentation
  - `prezi-scene/` — usePreziState
  - `selection/` — useSelection
  - `presenter-node-shell/` — Состояние узла презентера
  - `presenter-scene/` — Состояние сцены презентера
  - `scene/` — Состояние сцены

#### Ключевые функции:
- **Camera API**: `useCamera`, `createFoundationCameraState`, `clampFoundationDepth`
- **Scene API**: `createSceneBuffers`, `createSceneGeometry`, `drawSceneBuffers`
- **Component utilities**: `getComponentClasses`, `getSizeClasses`, `getStateClasses`
- **Content**: `getDependencyPageData`, `getSamoReportPackData`
- **Semantic Zoom**: `resolveSemanticZoomNode`, `useSemanticZoom`

---

### 5. `interface/` — Интерфейсы

Определяет интерфейсы и рецепты компонентов, следуя LEGO-композиции.

#### Структура:
- **`proto/`** — Протоинтерфейсы (базовые "кирпичики")
  - `border-token/` — `IBorderToken`
  - `dimensionable/` — `IDimensionable` (ширина, высота)
  - `elevatable/` — `IElevatable` (возвышение, тени)
  - `positionable/` — `IPositionable` (позиционирование)
  - `scrollable/` — `IScrollable` (прокрутка)
  - `sizable/` — `ISizable` (размер, плотность, форма)

- **`recipe/`** — Рецепты компонентов (композиции протоинтерфейсов)
  - `alert/`, `avatar/`, `badge/` — AlertRecipe, AvatarRecipe, BadgeRecipe
  - `button/`, `icon-button/` — ButtonRecipe, IconButtonRecipe
  - `card/` — CardRecipe
  - `draggable-item/` — DraggableItemRecipe
  - `input-field/`, `select/` — InputFieldRecipe, SelectRecipe
  - `label/` — LabelRecipe
  - `media-item/` — MediaItemRecipe
  - `toggle/` — ToggleRecipe

- **`mapping/`** — Маппинги интерфейсов

#### Принцип LEGO-композиции:

```typescript
// Пример ButtonRecipe из button/index.ts:
/**
 * Button = Label + иконки + клик + размер + тема.
 *
 * LEGO-состав:
 *   LabelRecipe       (recipe)      — базовый текстовый кирпич
 *   IIconSlot         (information) — iconLeft, iconRight
 *   IClickable        (interaction) — onClick, disabled, loading
 *   IFocusable        (interaction) — onFocus, onBlur, tabIndex
 *   ISizable          (architecture) — size, density, shape
 *   IBadgeSlot        (information) — count, dot (опционально)
 */
export interface ButtonRecipe extends RecordArchitectureMerge<[
  LabelRecipe,
  IIconSlot,
  IClickable,
  IFocusable,
  ISizable,
  IBadgeSlot
]> {}
```

Каждый рецепт — это композиция более простых интерфейсов, что обеспечивает:
- Переиспользуемость
- Консистентность API
- Простоту расширения

---

### 6. `svelte/` — Svelte компоненты

Содержит Svelte-компоненты, организованные по принципу атомарного дизайна.

#### Структура:
- **`molecule/`** — Молекулы (простые составные компоненты)
  - `canvas/` — Canvas-компонент

- **`organism/`** — Организмы (сложные составные компоненты)
  - `canvas/` — Сложные canvas-компоненты
  - `scene/` — Scene компоненты
  - `prezi-scene/` — PreziScene компоненты

#### Экспортируемые компоненты:
- **`PresenterNodeShell`** — Оболочка узла презентера
- **`PresenterScene`** — Сцена презентера
- **`PreziScene`** — Prezi-сцена
- **`Scene`** — Базовая сцена
- **`StoryDemo`** — Демо-компонент истории

---

### 7. `type/` — TypeScript типы

Содержит все TypeScript типы, используемые в модуле.

#### Структура:
- **`enum/`** — Типы перечислений
  - `aspect-ratio/`, `axes/`, `border-style/` — Соотношения сторон, оси, стили границ
  - `component-type/`, `connector/`, `corner/` — Типы компонентов, соединителей, углов
  - `density/`, `easing/`, `functional-taxonomy/` — Плотность, затухание, таксономия
  - `letter-spacing/`, `line-height/`, `line-type/` — Межбуквенные интервалы, высота строк
  - `marker/`, `node-type/`, `opacity/` — Маркеры, типы узлов, прозрачность
  - `ownership/`, `pan-mode/`, `relationship/` — Владение, режимы панорамирования
  - `shape/`, `skeleton/`, `tier/` — Формы, скелеты, уровни
  - `trajectory/`, `z-index/`, `zoom/` — Траектории, z-индекс, зум

- **`struct/`** — Структурные типы
  - `architecture-state/` — Состояние архитектуры
  - `camera/` — Типы камеры
  - `item/`, `position2d/` — Элементы, позиции 2D
  - `presenter-node-shell/`, `presenter-scene/` — Типы презентера
  - `preset/` — Пресеты
  - `prezi-scene/` — Типы prezi-сцен
  - `scene/`, `scene-node/` — Типы сцен и узлов
  - `semantic-zoom/` — Семантический зум
  - `zoom/` — Зум

- **`map/`** — Типы маппингов

- **`record/`** — Типы записей
  - `architecture-merge/` — Слияние архитектурных типов

#### Ключевые типы:
```typescript
// Примеры типов:
type TokenComponentType = 'text' | 'image' | 'video' | 'button' | ...
type FoundationSemanticZoomStage = 'dot' | 'icon' | 'pill' | 'minimal' | ...
type Position2D = { x: number; y: number }
type SceneCamera = { position: Position2D; zoom: number; ... }
```

---

## Принципы архитектуры

### 1. Атомарный дизайн
Компоненты организованы по уровням:
- **Atoms** (атомы) — базовые элементы в `proto/`
- **Molecules** (молекулы) — простые композиции в `svelte/molecule/`
- **Organisms** (организмы) — сложные композиции в `svelte/organism/`

### 2. LEGO-композиция
Каждый рецепт компонента строится из более простых интерфейсов, как конструктор LEGO:
```
Button = LabelRecipe + IIconSlot + IClickable + IFocusable + ISizable
```

### 3. Design Tokens
Все визуальные значения определены через токены:
- `TOKEN_*` — перечисления токенов
- `RECORD_*` — маппинги значений токенов
- `MAP_ARCHITECTURE` — архитектурный маппинг

### 4. Разделение ответственности
- **Types** (`type/`) — только определения типов
- **Constants** (`const/`) — только константы
- **Functions** (`function/`) — только логика
- **Classes** (`class/`) — только классы
- **Interfaces** (`interface/`) — только контракты
- **Components** (`svelte/`) — только UI

### 5. Semantic Zoom
Система поддерживает семантический зум с уровнями:
```typescript
RECORD_SIZE = {
  dot: 'xs',      // Точка
  icon: 'sm',     // Иконка
  pill: 'md',     // Пилюля
  minimal: 'lg',  // Минимальный
  compact: 'xl',  // Компактный
  detailed: '2xl',// Детальный
  screen: 'full'  // Полноэкранный
}
```

### 6. 3D-сцены и WebGL
Модуль включает поддержку 3D-сцен:
- Управление камерой (Camera API)
- WebGL буферы и геометрия
- Шейдеры (ARCHITECTURE_SHADER_CATALOG)
- Матрицы трансформации (Matrix4)

---

## Использование

### Импорт компонентов:
```typescript
import { Scene, PreziScene, PresenterScene } from '$stylist/architecture';
```

### Импорт типов:
```typescript
import type {
  SceneProps,
  TokenComponentType,
  FoundationSemanticZoomStage
} from '$stylist/architecture';
```

### Импорт констант:
```typescript
import {
  TOKEN_COMPONENT_TYPE,
  RECORD_SIZE,
  MAP_ARCHITECTURE
} from '$stylist/architecture';
```

### Импорт функций:
```typescript
import {
  useCamera,
  createSceneBuffers,
  getComponentClasses
} from '$stylist/architecture';
```

### Импорт классов:
```typescript
import {
  StyleManagerBase,
  SceneObjectManager
} from '$stylist/architecture';
```

---

## Связь с другими модулями

Модуль `architecture` взаимодействует с:
- **`layout/`** — для типов размеров (`TokenSize`)
- **`information/`** — для информационных интерфейсов (`IIconSlot`, `IBadgeSlot`)
- **`interaction/`** — для интерактивных интерфейсов (`IClickable`, `IFocusable`)

---

## Автогенерация

Многие файлы содержат комментарий:
```typescript
/** AREA: STYLIST CODER MODEL -> AUTO-GENERATED */
```

Это указывает на то, что код автоматически генерируется системой **STYLIST CODER MODEL** и не должен редактироваться вручную.

---

## Заключение

Папка `architecture` — это фундамент системы дизайна Stylist, который обеспечивает:
- Единую систему типов и констант
- Переиспользуемые интерфейсы и рецепты
- Управление стилями и состоянием
- 3D-сцены и WebGL-рендеринг
- Семантический зум
- Атомарный дизайн и LEGO-композицию

Все компоненты системы строятся на основе этой архитектуры, обеспечивая консистентность и масштабируемость.
