CODER-010-component-assembly-model

# Модель сборки компонентов SAMO

**Статус:** сессионная нормативная заметка  
**Дата:** 2026-04-16  
**Область:** `stylist-svelte/src/lib/**`

## 1. Главный принцип

Компонент в SAMO собирается не только через интерфейсный `recipe`, но и через композицию runtime-реализаций в `function/state`.

Базовая интерфейсная цепочка:

```text
proto -> recipe
```

Полная цепочка компонента:

```text
interface/proto -> interface/recipe -> function/state -> svelte/(atom|molecule|organism)
```

`contract` не является обязательным этапом после `recipe`. Он нужен только там, где требуется отдельный граничный, интеграционный или валидационный контракт.

## 2. Роль `proto`

`proto` — атомарная способность или минимальный поведенческий контракт.

Примеры:

- `IClickable`
- `IFocusable`
- `ISizable`
- `IIconSlot`
- `IBadgeSlot`

`proto` должен описывать один узкий аспект поведения или совместимости.

Хороший `proto`:

- малый
- переиспользуемый
- не знает о конкретном компоненте
- не содержит финальной сборки компонента

## 3. Роль `recipe`

`recipe` — итоговая композиция нескольких `proto`, других `recipe` и совместимых структур.

Именно `recipe` является основной моделью готового компонента на уровне интерфейса.

Пример:

```ts
export interface ButtonRecipe
	extends StructIntersectAll<
		[LabelRecipe, IIconSlot, IClickable, IFocusable, ISizable, IBadgeSlot]
	> {}
```

В этом примере `ButtonRecipe` уже является готовой интерфейсной сборкой кнопки:

- текстовая часть приходит из `LabelRecipe`
- иконки приходят из `IIconSlot`
- клик приходит из `IClickable`
- фокус приходит из `IFocusable`
- размерность приходит из `ISizable`
- бейдж приходит из `IBadgeSlot`

Никакой обязательный `ButtonComponent` после этого не нужен.

## 4. Роль `StructIntersectAll`

`StructIntersectAll` — type-level utility для пересечения списка типов.

Определение:

```ts
export type StructIntersectAll<TTypes extends readonly unknown[]> = TTypes extends readonly [
	infer THead,
	...infer TTail
]
	? THead & StructIntersectAll<TTail>
	: {};
```

Смысл:

- взять tuple типов
- рекурсивно пересечь их через `&`
- получить единый структурный контракт

Это не runtime-паттерн.

`StructIntersectAll` не является:

- builder
- factory
- factory method
- director

Точное архитектурное описание:

- type-level intersection helper
- structural composition utility
- contract composition helper

## 4.1 Роль `function/state`

`function/state` — слой сборки реализации.

Если `recipe` складывает интерфейсы, то `state` складывает поведение:

- обработчики событий
- вычисленные классы
- inline styles
- ARIA attributes
- disabled/loading/focus/drag state
- rest props для Svelte-элемента

Пример runtime-сборки:

```text
createButtonComposedState
  -> createClickableState
  -> createFocusableState
  -> createContainerState
  -> createBackgroundState
  -> createBorderState
```

Это не наследование, а композиция реализаций.

Правило:

```text
interface/proto собирается в interface/recipe
function/state атомов поведения собирается в function/state компонента
svelte-компонент потребляет уже собранный state
```

## 5. Роль `contract`

`contract` — специальный joint для случаев, которые не должны смешиваться с обычным `recipe`.

`contract` уместен, если:

- описывается внешняя интеграционная граница
- описывается валидационный контракт
- описывается контракт темы, контекста или среды
- интерфейс не является обычной композицией поведенческих `proto`

`contract` не должен использоваться как новое имя для каждого готового компонента.

Правило:

```text
если сущность является обычной сборкой component props -> recipe
если сущность является специальной границей или обязательством -> contract
```

## 6. Статус `interface/component`

`interface/component/**` в текущем проекте считается legacy/transitional structure.

Причина:

- готовый компонент уже выражается через `recipe`
- дополнительный слой `component` создаёт ложное ощущение третьего обязательного этапа
- часть `component/**/contract` фактически дублирует или смешивает роли `recipe` и `contract`

Дальнейшая стратегия:

- новые сущности не создавать в `interface/component`
- существующие пути инвентаризировать
- каждый случай мигрировать отдельно:
  - в `interface/recipe`, если это обычный props recipe
  - в `interface/contract`, если это специальный контракт
  - в иной joint только после отдельного ADR

## 7. Как собирать новый компонент

### Шаг 1. Найти домены способностей

Определить, какие домены дают части поведения:

- `typography` — текст, label, caption
- `media` — icon, image, avatar
- `interaction` — click, focus, selection
- `layout` — size, spacing, shape, scroll
- `theme` — theme compatibility

### Шаг 2. Найти существующие `proto`

Если способность уже существует, использовать её.

Пример:

- `IClickable`
- `IFocusable`
- `IIconSlot`

Не создавать новый `proto`, если существующий уже выражает нужную способность.

### Шаг 3. Найти существующие `recipe`

Если компонент наследует готовую композицию, использовать другой `recipe` как часть сборки.

Пример:

- `ButtonRecipe` может включать `LabelRecipe`
- `IconButtonRecipe` может включать части `ButtonRecipe` или близкие `proto`

### Шаг 4. Собрать `recipe` через `StructIntersectAll`

Использовать:

```ts
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
```

Затем:

```ts
export interface NewComponentRecipe
	extends StructIntersectAll<[SomeRecipe, SomeProto, AnotherProto]> {}
```

### Шаг 5. Собрать runtime state

Для каждого значимого `proto` или доменной способности должен быть найден или создан соответствующий `function/state`.

Пример:

- `IClickable` -> `createClickableState`
- `IFocusable` -> `createFocusableState`
- `ThemeBackgroundRecipe` -> `createBackgroundState`
- `BorderRecipe` -> `createBorderState`
- `ContainerProps` -> `createContainerState`

Компонентный state должен агрегировать эти состояния:

```ts
export function createNewComponentState(props: NewComponentRecipe) {
	const clickable = createClickableState(props);
	const focusable = createFocusableState(props);

	return {
		clickable,
		focusable,
		get classes() {
			return [clickable.classes, focusable.classes].filter(Boolean).join(' ');
		}
	};
}
```

### Шаг 6. Добавить специфичные свойства только если они реально нужны

Если компонент имеет уникальные свойства, допустимо добавить отдельный специфичный `recipe` или `struct`, но не смешивать несколько экспортов в одном файле.

При необходимости:

- вынести специфичную часть в отдельный `interface/recipe/<family-specific>`
- подключить её в основной `recipe`

## 8. Что запрещено

Запрещено:

- создавать третий обязательный уровень `component` после `recipe`
- использовать `contract` как синоним `recipe`
- создавать `builder` или `factory` для type-level сборки
- создавать новый `proto`, если уже есть подходящий
- держать несколько экспортируемых сущностей в одном файле
- оставлять неэкспортируемые top-level объявления

## 9. Минимальный пример

```ts
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { IClickable } from '$stylist/interaction/interface/proto/clickable';
import type { IFocusable } from '$stylist/interaction/interface/proto/focusable';
import type { LabelRecipe } from '$stylist/typography/interface/recipe/label';

export interface ExampleRecipe extends StructIntersectAll<[LabelRecipe, IClickable, IFocusable]> {}
```

Этот интерфейс уже является готовой сборкой component-level props.

## 10. Итоговая формула

SAMO-компонент собирается так:

```text
interface/proto -> interface/recipe -> function/state composition -> svelte implementation
```

Где:

- атомарные способности лежат в `interface/proto`
- композиционный интерфейс лежит в `interface/recipe`
- атомарные реализации поведения лежат в `function/state`
- компонентная реализация поведения собирает другие `function/state`
- Svelte-реализация лежит в `svelte/atom`, `svelte/molecule` или `svelte/organism`
- `contract` используется только для специальных границ
- `interface/component` не является целевым новым местом для сущностей
