# CLAUDE-006-correction-dsiap-and-merge-pattern

**Дата:** 2026-04-16  
**Тип:** Исправление — по замечанию владельца проекта

---

## I. Исправление DSIAP: уровней два, а не три

Владелец проекта прав. Вся сессия ошибочно строила трёхуровневую цепочку.

### Факты из живого кода:

`ButtonRecipe` — это уже **финальный интерфейс компонента**:

```typescript
export interface ButtonRecipe
	extends StructIntersectAll<
		[
			LabelRecipe, // recipe из typography
			IIconSlot, // proto из media
			IClickable, // proto из interaction
			IFocusable, // proto из interaction
			ISizable, // proto из layout
			IBadgeSlot // proto из typography
		]
	> {}
```

`ButtonRecipe` — и есть то, что Svelte-компонент принимает как props. Никакого отдельного `ButtonContract` или `ButtonComponent` поверх него не существует и не нужно.

### Исправленная модель DSIAP:

```
proto   ← атомарная поведенческая способность (IClickable, ISizable, IFocusable)
recipe  ← финальный интерфейс компонента, слияние proto-единиц (ButtonRecipe)
```

**Двух уровней достаточно.**

При этом:

- в `recipe` может участвовать другой `recipe` — это нормально (`LabelRecipe` внутри `ButtonRecipe`)
- depth может быть любым, это не третий уровень DSIAP — это просто композиция

### Что делать с `interface/component` (20 директорий):

Это легаси. Он возник как обходной путь там, где recipe не использовался или нарушался. Стратегия:

- Новые компоненты: только `interface/recipe/<family>`
- Существующие `interface/component/<family>`: постепенная миграция в `recipe` по мере касания кода
- Не легализовывать `component` в ADR-005 — убрать его из нормативной части

### Что делать с `interface/contract`:

`interface/contract` — **существует**, но это отдельный joint с другой семантикой.

Примеры из кода:

```
theme/interface/contract/theme-context           → ThemeContext (Svelte context interface)
theme/interface/contract/theme-settings-view-model → ThemeSettingsViewModel (ViewModel pattern)
```

Эти интерфейсы — **не рецепты компонентов**. Это контракты систем/сервисов:

- `ThemeContext` — что кладётся в Svelte Context и что оттуда достаётся
- `ThemeSettingsViewModel` — View Model паттерн, агрегирует данные для UI из нескольких источников

`contract` как joint = интерфейс для нетривиальных архитектурных соглашений, которые не являются props-рецептом компонента.

### Итоговая таблица interface/\*:

| Joint      | Семантика                                      | Пример                                   | Уровень DSIAP |
| ---------- | ---------------------------------------------- | ---------------------------------------- | ------------- |
| `proto`    | Атомарная поведенческая способность            | `IClickable`, `ISizable`                 | Уровень 1     |
| `recipe`   | Финальный интерфейс компонента (мерж proto)    | `ButtonRecipe`, `AccordionRecipe`        | Уровень 2     |
| `contract` | Архитектурный контракт не-компонентной системы | `ThemeContext`, `ThemeSettingsViewModel` | Вне DSIAP     |
| `record`   | Интерфейс-агрегат данных (DTO-подобный)        | —                                        | Вне DSIAP     |
| `provider` | Svelte Context provider interface              | —                                        | Вне DSIAP     |
| `factory`  | DTO для фабричных функций                      | `ButtonFactoryInput`                     | Вне DSIAP     |
| `api`      | Внешний API контракт                           | —                                        | Вне DSIAP     |

---

## II. StructIntersectAll — что за паттерн

Финальное решение по итогам сессии:

- Имя: `StructIntersectAll<T>`
- Расположение: `architecture/type/struct/intersect-all/index.ts`

Код:

```typescript
export type StructIntersectAll<TContracts extends readonly unknown[]> =
	TContracts extends readonly [infer THead, ...infer TTail]
		? THead & StructIntersectAll<TTail>
		: {};
```

### Что это делает:

Принимает кортеж типов `[A, B, C]` и рекурсивно применяет оператор пересечения `&`:

```
StructIntersectAll<[A, B, C]>
  = A & StructIntersectAll<[B, C]>
  = A & B & StructIntersectAll<[C]>
  = A & B & C & {}
  = A & B & C
```

### Как называется паттерн:

Это **не** Builder, **не** Factory, **не** Factory Method.

| Контекст                        | Название                                                     |
| ------------------------------- | ------------------------------------------------------------ |
| TypeScript                      | Recursive Conditional Type + Intersection (`&`)              |
| Функциональное программирование | **Fold / Reduce** — свёртка кортежа с бинарной операцией `&` |
| ООП (аналог)                    | **Mixin** — но только на уровне типов, без поведения         |
| GoF паттерны                    | Ближе всего к **Composite** — но для типов, не для объектов  |
| SAMO-документация               | **Type-Level Assembler**                                     |
| Патентные материалы             | **Recursive Intersection Fold**                              |

### Использование в recipe:

```typescript
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';

export interface ButtonRecipe
	extends StructIntersectAll<[LabelRecipe, IClickable, IFocusable, ISizable]> {}
```

---

## III. Исправления для ADR-005

| Было (версия CLAUDE-005-strategy)           | Стало                                                    |
| ------------------------------------------- | -------------------------------------------------------- |
| DSIAP: `proto → recipe → contract`          | DSIAP: `proto → recipe` (два уровня)                     |
| `interface/contract` — третий уровень DSIAP | `interface/contract` — отдельный joint, вне DSIAP        |
| `interface/component` — легализовать        | `interface/component` — легаси, план миграции в `recipe` |
| `RecordArchitectureMerge` в `type/record`   | `StructIntersectAll` в `type/struct/intersect-all`       |
