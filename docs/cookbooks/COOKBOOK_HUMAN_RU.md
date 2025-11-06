# Руководство по исправлению кода в Svelte 5 библиотеке компонентов (для человека)

## Введение

Это руководство описывает основные принципы и подходы к исправлению кода в Svelte 5 библиотеке компонентов. Оно поможет вам понять, как обновлять код в соответствии с новыми стандартами и практиками при миграции на Svelte 5 и улучшении архитектуры проекта.

## 1. Замена устаревшего слот-синтаксиса

### Проблема
В Svelte 5 устарел синтаксис `<slot>` и `$$slots.default`. Вместо этого рекомендуется использовать проп `children` для передачи контента дочерних компонентов.

### Решение
Замените устаревший синтаксис на использование `children` пропа, как показано ниже:

**Было:**
```svelte
<script lang="ts">
  // Раньше использовали $$slots.default
</script>

{#if $$slots.default}
  <slot />
{/if}

<!-- Или -->
{@render $$slots.default()}
```

**Стало:**
```svelte
<script lang="ts">
  import type { Snippet } from 'svelte';
  
  type Props = {
    children?: Snippet;
    // другие пропы
  }
  
  let { children, ...restProps }: Props = $props();
</script>

{#if children}
  {@render children()}
{/if}
```

### Приоритетность
При использовании `children` помните о приоритетах:
1. `children` (имеет наивысший приоритет)
2. `content` (если `children` не указан)
3. `label` (если предыдущие не указаны)
4. текст по умолчанию

## 2. Исправление типизации событий

### Проблема
В ранних версиях документации упоминался импорт `MouseEvent` из 'svelte/elements', что неверно, так как этого типа там нет. Также могут возникать конфликты при передаче `KeyboardEvent` в функцию, ожидающую `MouseEvent`.

### Решение

**Неправильно:**
```typescript
import { MouseEvent } from 'svelte/elements'; // Не существует!
```

**Правильно:**
```typescript
// MouseEvent доступен глобально в браузере, не требует импорта
function handleClick(e: MouseEvent) {
  // ваш код
}
```

### Обработка разных типов событий
Когда обработчик ожидает `MouseEvent`, но может быть вызван из `onkeydown`, создайте соответствующее событие:

```svelte
onkeydown={(e: KeyboardEvent) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    const mouseEvent = new MouseEvent('click', {
      view: window,
      bubbles: true,
      cancelable: true
    });
    handleClick(mouseEvent);
  }
}}
```

## 3. Исправление типов и структуры файлов

### Проблема
Иногда типы, определенные в общем файле (например, `$lib/types/components.ts`), не соответствуют реальным использованным типам в компонентах. Также могут возникать конфликты имен между файлами компонентов и файлами типов, особенно с типами `GraphEdge`, `GraphNode` и другими.

### Решение
1. Локальные типы для конкретных компонентов определяйте непосредственно в файлах компонентов, а не в общем файле типов
2. Используйте type-only импорты, когда это возможно: `import type {...}`
3. Убедитесь, что типы, используемые только в одном-двух компонентах, не находятся в глобальном файле типов

**Пример локального определения типа:**
```svelte
<script lang="ts">
  // Локальное определение вместо импорта из общего файла
  interface Position2D {
    x: number;
    y: number;
  }
  
  interface SpecificComponentType {
    id: string;
    position: Position2D;
  }
  
  let { prop }: { prop: SpecificComponentType } = $props();
</script>
```

## 4. Обновление синтаксиса обработчиков событий

### Проблема
В Svelte 5 изменился синтаксис для обработчиков событий - теперь вместо `on:click` используется `onclick`, вместо `on:change` - `onchange` и т.д.

### Решение

**Было:**
```svelte
<button on:click={handleClick} on:change={handleChange}>
  Click me
</button>
```

**Стало:**
```svelte
<button onclick={handleClick} onchange={handleChange} role="button">
  Click me
</button>
```

### Полный список маппингов
- `on:click` → `onclick`
- `on:change` → `onchange`
- `on:input` → `oninput`
- `on:focus` → `onfocus`
- `on:blur` → `onblur`
- `on:mouseenter` → `onmouseenter`
- `on:mouseleave` → `onmouseleave`
- `on:contextmenu` → `oncontextmenu`
- `on:dragover` → `ondragover`
- `on:drop` → `ondrop`
- `on:wheel` → `onwheel`
- `on:mousedown` → `onmousedown`
- `on:mousemove` → `onmousemove`
- `on:mouseup` → `onmouseup`
- `on:mouseout` → `onmouseout`
- `on:dblclick` → `ondblclick`

## 5. Исправление TypeScript ошибок

### Проблема
Иногда возникают типизированные ошибки при индексации объектов или использовании HTMLAttributes без указания типа элемента.

### Решение

**Для индексации объектов:**
```typescript
// Когда индексируем объект строковыми литералами, определяем тип явно
type Size = 'sm' | 'md' | 'lg';

let sizeClasses = $derived({
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-3 py-1 text-sm', 
  lg: 'px-4 py-1.5 text-base'
}[size as Size]); // исправлено
```

**Для HTMLAttributes:**
```typescript
// Вместо специфических типов аттрибутов используем общий тип с указанием элемента
import type { HTMLAttributes } from 'svelte/elements';

let props: { 
  label: string;
} & HTMLAttributes<HTMLButtonElement> = $props(); // исправлено
```

### Общие типизированные ошибки

#### Проблема: Generic types без типа аргументов
**Сообщение об ошибке**: `Type 'HTMLAttributes<T>' requires 1 type argument(s)`

**Было:**
```typescript
let props: { 
  label: string;
} & HTMLAttributes = $props();
```

**Стало:**
```typescript
import type { HTMLAttributes } from 'svelte/elements';

let props: { 
  label: string;
} & HTMLAttributes<HTMLElement> = $props();
```

## 6. Исправление конфликтов имен

### Проблема
Иногда одинаковые имена компонентов могут присутствовать в разных уровнях архитектуры (атомы, молекулы, организмы), что вызывает конфликты.

### Решение
1. Убедитесь, что компоненты не дублируются на разных уровнях
2. Удалите дублирующиеся компоненты из более простого уровня (например, атомы), если они существуют в более сложном (организмы)
3. Например, компоненты TableBody, TableCell, TableHeader, TableRow существуют в организмах, а не должны быть в атомах

## 7. Особенности работы с NumberFlow

### Проблема
В компоненте NumberFlow были определены типы `TimingConfig` и `NumberFlowProps`, где `TimingConfig` экспортировался как интерфейс, а `NumberFlowProps` как тип, но в файле историй использовались прямые импорты типов, что могло вызвать проблемы типизации.

### Решение
1. В файле NumberFlow.svelte тип `export type NumberFlowProps` и интерфейс `export interface TimingConfig` должны быть экспортами, чтобы быть доступными для импорта в файле историй
2. В файле историй правильно использовать приведение типов, как показано ниже:

```svelte
format={getFormatOptions(props.format as string) as Intl.NumberFormatOptions}
```

## 8. Исправления, связанные с миграцией на Svelte 5

### Проблема синтаксиса слотов
В Svelte 5 устарел старый синтаксис `<slot>`, его нужно заменить на новый подход:

**Было:**
```svelte
<div class="container">
  <slot />
</div>

<!-- С fallback -->
<div class="container">
  <slot>Default content</slot>
</div>

<!-- Условный слот -->
<div class="container">
  {#if condition}
    <slot />
  {/if}
</div>
```

**Стало:**
```svelte
<div class="container">
  {@render typeof $$slots.default === 'function' ? $$slots.default() : null}
</div>

<!-- С fallback -->
<div class="container">
  {@render typeof $$slots.default === 'function' ? $$slots.default() : 'Default content'}
</div>

<!-- Условный слот -->
<div class="container">
  {#if condition}
    {@render typeof $$slots.default === 'function' ? $$slots.default() : null}
  {/if}
</div>
```

### Проблема с импортом HTML атрибутов
**Проблема**
```
Error: '"svelte/elements"' has no exported member named 'HTMLSVGAttributes'. Did you mean 'HTMLAttributes'?
```

**Решение**
Замените специфические типы атрибутов общим типом HTMLAttributes:

**Было:**
```typescript
import type { HTMLSVGAttributes } from 'svelte/elements';
import type { HTMLLabelAttributes } from 'svelte/elements';
import type { HTMLPreAttributes } from 'svelte/elements';
import type { HTMLCodeAttributes } from 'svelte/elements';
```

**Стало:**
```typescript
import type { HTMLAttributes } from 'svelte/elements';
// Затем используйте с соответствующим типом элемента:
// Для SVG: HTMLAttributes<SVGSVGElement>
// Для Label: HTMLAttributes<HTMLLabelElement>
// Для Pre: HTMLAttributes<HTMLPreElement>
// Для Code: HTMLAttributes<HTMLElement>
```

## 9. Исправления доступности (accessibility)

### Проблема: ярлыки форм не связаны с элементами управления
**Сообщение об ошибке**: `A form label must be associated with a control`

**Было:**
```svelte
<label>Username</label>
<input bind:value={username} id="username-field" />
```

**Стало:**
```svelte
<label for="username-field">Username</label>
<input bind:value={username} id="username-field" />
```

### Проблема: кликовые события без клавиатурных эквивалентов
**Сообщение об ошибке**: `Visible, non-interactive elements with a click event must be accompanied by a keyboard event handler`

**Было:**
```svelte
<div class="clickable-area" on:click={handleClick}>
  Clickable area
</div>
```

**Стало:**
```svelte
<div 
  class="clickable-area" 
  onclick={handleClick}
  role="button"
  tabindex="0"
  onkeydown={(e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleClick();
    }
  }}
>
  Clickable area
</div>
```

### Проблема: статические элементы с взаимодействиями без ARIA ролей
**Сообщение об ошибке**: `<div>` with a click handler must have an ARIA role

**Было:**
```svelte
<div onclick={handleClick}>
  Interactive element
</div>
```

**Стало:**
```svelte
<div 
  onclick={handleClick}
  role="button"
  tabindex="0"
>
  Interactive element
</div>
```

## 10. Прочие ошибки и решения

### Проблема: неиспользуемые CSS селекторы
**Сообщение об ошибке**: `Unused CSS selector ".unused-class"`

**Решение**: Удалите неиспользуемые CSS селекторы из файлов компонентов.

**Было:**
```svelte
<style>
  .used-class {
    color: red;
  }
  
  .unused-class {  /* Это генерирует предупреждение */
    color: blue;
  }
</style>

<div class="used-class">Content</div>
```

**Стало:**
```svelte
<style>
  .used-class {
    color: red;
  }
</style>

<div class="used-class">Content</div>
```

### Проблема: отсутствующие токены
**Сообщение об ошибке**: `Expected token }`

**Было:**
```svelte
<div class="container">
  <Component {prop={value}}  <!-- Отсутствует закрывающая скобка -->
</div>
```

**Стало:**
```svelte
<div class="container">
  <Component {prop={value}} />
</div>
```

### Проблема: неправильное использование состояния
**Сообщение об ошибке**: `$state(...) can only be used as a variable declaration initializer`

**Было:**
```typescript
let myVar;
myVar = $state(initialValue); // Неправильно
```

**Стало:**
```typescript
let myVar = $state(initialValue); // Правильно
```

### Проблема: отсутствующие обязательные свойства
**Сообщение об ошибке**: `Type '{ value: string; placeholder: string; }' is not assignable to type '{ id: string; label: string; ... }'`

**Было:**
```svelte
<Input value="some value" placeholder="Enter text" />
```

**Стало:**
```svelte
<Input id="input-id" label="Input Label" value="some value" placeholder="Enter text" />
```

## Заключение

Следование этим принципам помогает поддерживать высокое качество кода в библиотеке компонентов Svelte 5. Регулярная проверка с помощью `yarn check` и `yarn build` обеспечит отсутствие ошибок и соответствие современным стандартам разработки. Все рекомендации в этом руководстве подтверждены реальным кодом в проекте и проверены на практике.

## Общие рекомендации по тестированию и предотвращению ошибок

1. Запускайте `yarn check`, чтобы убедиться, что конкретные ошибки были устранены
2. Проверяйте, что компоненты по-прежнему работают, как ожидалось
3. Убедитесь, что функции доступности по-прежнему работают правильно
4. Тестируйте разные свойства и состояния компонентов
5. Убедитесь, что ничего не сломано визуально

### Рекомендации по предотвращению ошибок:

1. Используйте последнюю версию расширения Svelte в редакторе, чтобы раньше выявлять синтаксические проблемы
2. Включите строгий режим TypeScript, чтобы находить ошибки типов во время разработки
3. Регулярно запускайте `yarn check` во время разработки
4. Поддерживайте обновленные зависимости
5. Следуйте синтаксису Svelte 5 runes с самого начала для новых компонентов