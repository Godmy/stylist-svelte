# ADR 0005: Контракты папок Design System (`src/lib/design-system`)

**Status:** Accepted
**Date:** 2025-01-04

## Контекст
Нужен формальный и проверяемый контракт по каждой папке design-system, чтобы:
- исключить смешение ответственности;
- зафиксировать допустимые зависимости;
- упростить масштабирование и ревью.

## Решение
Контракты фиксируются по каждой папке.

### 1. `tokens/`
**Назначение:** атомарные дизайн-значения и типы шкал.

**Содержит:**
- цветовые палитры, spacing, sizes, radius, shadows, transitions, variants;
- type-alias и ключи токенов.

**Не содержит:**
- runtime-логику;
- компонентные props;
- style manager / state builder.

**Допустимые импорты:**
- только стандартная библиотека TypeScript.

### 2. `themes/`
**Назначение:** сборка тем и контекст темизации.

**Содержит:**
- `light`/`dark` theme objects;
- типы темы;
- Svelte theme context API.

**Не содержит:**
- компонентные контракты;
- runtime state компонентов.

**Допустимые импорты:**
- `tokens`.

### 3. `classes/`
**Назначение:** декларативные карты классов и class-константы.

**Содержит:**
- `Record<Variant, string>` / `Record<Size, string>`;
- базовые class constants.

**Не содержит:**
- пресеты состояния;
- функции вычисления runtime состояния;
- бизнес-валидации.

**Допустимые импорты:**
- `tokens`;
- type-only из `props` только при невозможности выразить тип через `tokens` (временное исключение, под вынос).

### 4. `props/`
**Назначение:** публичные типовые контракты компонентов.

**Содержит:**
- `XProps`, доменные интерфейсы и type alias;
- общие базовые HTML/Svelte prop-контракты.

**Не содержит:**
- style managers;
- runtime state-строители;
- значения токенов как runtime-данные.

**Допустимые импорты:**
- `tokens`;
- `svelte` / `svelte/elements`;
- type-only из `classes` в исключительных случаях (под удаление).

### 5. `state/`
**Назначение:** вычисление runtime-состояния и preset/default конфигураций.

**Содержит:**
- `Preset`, defaults, `createXState` функции;
- нормализацию variant/size/disabled/loading;
- aria/attrs state.

**Не содержит:**
- компонентную разметку;
- визуальные story-демо.

**Допустимые импорты:**
- `tokens`, `classes`, `props` (type-only).

### 6. `styles/`
**Назначение:** менеджеры формирования CSS-классов (`XStyleManager`).

**Содержит:**
- функции/классы сборки итоговых className;
- thin adapters к `classes` и частично к `state` defaults.

**Не содержит:**
- бизнес-логику компонента;
- сложную state-машину;
- сторы/сетевые эффекты.

**Допустимые импорты:**
- `classes`, `tokens`, `utils`;
- `state` (только defaults/preset metadata);
- `props` только type-only и только если тип нельзя выразить через tokens.

### 7. `models/`
**Назначение:** Svelte-ориентированные state adapters (`*.svelte.ts`).

**Содержит:**
- композицию `props + state + styles`;
- runes-based derived state;
- экспорт `createXState` для потребления в компонентах.

**Не содержит:**
- новые design tokens;
- theme definitions.

**Допустимые импорты:**
- `props`, `state`, `styles`, `classes`, `tokens`, `utils`.

### 8. `factory/`
**Назначение:** фабрики пресетов и конфигурационных шаблонов.

**Содержит:**
- `createPreset`/`createArchitecturePreset` и аналоги;
- merge логика preset-конфигов.

**Не содержит:**
- UI rendering;
- story/playground код.

**Допустимые импорты:**
- `state`, `classes`, `tokens`.

### 9. `utils/`
**Назначение:** кросс-доменные утилиты (class merge, css vars, formatting).

**Содержит:**
- `cn`/merge helpers;
- css vars converters/appliers;
- форматирующие функции общего назначения.

**Не содержит:**
- компонентные presets;
- доменную бизнес-логику конкретного компонента.

**Допустимые импорты:**
- `themes`, `tokens` (когда требуется), внешние утилитарные зависимости.

### 10. `playground/`
**Назначение:** story-совместимые примитивы playground-слоя.

**Содержит:**
- `Story.svelte` и вспомогательные типы для demo.

**Не содержит:**
- production state managers;
- бизнес-контракты компонентов.

**Допустимые импорты:**
- ограниченно из `tokens` и внутренних playground зависимостей.

## Матрица зависимостей (целевая)
- `tokens` -> (none)
- `themes` -> `tokens`
- `classes` -> `tokens`
- `props` -> `tokens`
- `state` -> `tokens`, `classes`, `props(type-only)`
- `styles` -> `classes`, `tokens`, `utils`, `state(metadata-only)`
- `models` -> `props`, `state`, `styles`, `classes`, `tokens`, `utils`
- `factory` -> `state`, `classes`, `tokens`
- `utils` -> `themes?`, `tokens?`
- `playground` -> `tokens?`, internal playground files

## Инварианты контракта
1. Одна сущность = одна ответственность слоя.
2. Публичные типы компонентов определяются в `props/`, а не в `styles/` или `models/`.
3. `classes/` остается декларативным слоем без runtime-решений.
4. `index.ts` в `design-system/**` не редактируются вручную (генерируются).

## Проверка по кодовой базе
- В `src/lib/design-system` присутствуют папки: `classes`, `factory`, `models`, `playground`, `props`, `state`, `styles`, `themes`, `tokens`, `utils`.
- Контракты и типы централизованы в `props`/`tokens`.
- Runtime-адаптеры Svelte размещены в `models/*.svelte.ts`.

## Последствия
- Прозрачные границы между слоями.
- Предсказуемая эволюция API и внутренней архитектуры.
- Снижение количества архитектурных коллизий при масштабировании.
