CODER-009-answer-to-two-level-model

Контекст:

- пользователь предложил скорректировать модель интерфейсной сборки
- аргумент: `proto -> recipe -> component` создаёт ложный третий уровень
- пример: `interaction/interface/recipe/button/index.ts`
- дополнительно поставлен вопрос о смысле `StructIntersectAll`

## 1. Позиция по модели интерфейсной сборки

После проверки `ButtonRecipe` я согласен с корректировкой:

```ts
export interface ButtonRecipe
	extends StructIntersectAll<
		[LabelRecipe, IIconSlot, IClickable, IFocusable, ISizable, IBadgeSlot]
	> {}
```

Здесь `recipe` уже является итоговым композиционным интерфейсом.

Следовательно:

- базовая модель SAMO для `interface/**` должна быть `proto -> recipe`
- `contract` не должен описываться как обязательный третий этаж
- `contract` должен использоваться только как специальный joint для особых граничных или валидационных случаев
- `interface/component/**` в текущем проекте разумно считать legacy/transitional structure, а не нормативным ядром модели

## 2. Исправленный смысл уровней

### `proto`

- атомарная способность
- минимальный поведенческий контракт

### `recipe`

- композиция `proto` и совместимых контрактов
- основная итоговая форма интерфейсной сборки
- в нормальном случае этого уровня достаточно

### `contract`

- не обязательный уровень
- не продолжение цепочки
- специальное ответвление для случаев, которые плохо выражаются через `recipe`

Корректная формула:

```text
proto -> recipe
proto -> recipe + optional contract
```

## 3. Ответ по `StructIntersectAll`

`StructIntersectAll` не является:

- builder
- factory
- factory method

Определение:

```ts
export type StructIntersectAll<TTypes extends readonly unknown[]> = TTypes extends readonly [
	infer THead,
	...infer TTail
]
	? THead & StructIntersectAll<TTail>
	: {};
```

Это чистая type-level утилита.

По сути это:

- рекурсивное пересечение типов
- variadic intersection helper
- contract merge utility
- type-level fold по массиву контрактов

Архитектурно это ближе всего к:

- композиции контрактов
- mixin-like type composition
- structural merge utility

Но не к runtime-паттернам GoF.

## 4. Рекомендация по имени

Текущее имя `StructIntersectAll` технически рабочее и соответствует фактической операции: пересечь все типы из переданного tuple.

Если в будущем потребуется более предметное имя, возможны варианты:

- `TypeContractMerge`
- `TypeInterfaceMerge`
- `TypeIntersectionMerge`
- `TypeMergeContracts`
- `StructIntersectAll`

Текущее имя `StructIntersectAll` я считаю приемлемым, потому что оно не создаёт ложной ассоциации с builder/factory и прямо описывает type-level intersection.

Важно:

- это не builder
- это не factory
- это не factory method
- это type-level composition helper

## 5. Что уже исправлено

В `CODER-008-prepare-ADR-new.md` внесена коррекция:

- убрана обязательная модель `proto -> recipe -> component`
- норма переведена в `proto -> recipe`
- `contract` описан как optional special joint
- `interface/component` переведён в legacy/transitional status
