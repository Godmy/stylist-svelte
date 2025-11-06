# Cookbook: Принципы исправления кода в Svelte 5 библиотеке стилей

## Введение

Этот cookbook описывает основные принципы и подходы к исправлению кода в Svelte 5 библиотеке компонентов (стилей). Он предназначен для обеспечения согласованности, читаемости и соответствия современным стандартам разработки.

## 1. Обработка устаревшего синтаксиса и предупреждений

### Проблема
Использование устаревшего синтаксиса:
```svelte
{#if $$slots.default}
  {@render $$slots.default()}
{/if}
```

### Решение
1. Замените `$$slots.default` на `children` проп:
```svelte
<script lang="ts">
  import type { Snippet } from 'svelte';
  
  type Props = {
    children?: Snippet;
  }
  
  let { children }: Props = $props();
</script>

{#if children}
  {@render children()}
{/if}
```

2. Добавьте комментарий о приоритетах:
```svelte
<!-- Приоритет: если передан `children`, он будет отображен,
иначе используется `content`, если он передан -->
```

## 2. Исправление типизации компонентов

### Проблема
Неправильные импорты типов:
```ts
import { MouseEvent } from 'svelte/elements'; // Не существует
```

### Решение
1. Удалите неправильные импорты:
```ts
// Удалите или не импортируйте вовсе
```

2. Используйте стандартные типы:
```ts
// MouseEvent не нужно импортировать из svelte/elements
// Он доступен как глобальный тип
function handleClick(e: MouseEvent) {
  // код
}
```

## 3. Исправление конфликтов типов

### Проблема
Конфликт имен между типами в `$lib/types` и компонентами:
```ts
export interface GraphNode { ... } // в types/components.ts
// и
import { GraphNode } from '../types'; // в компоненте
```

### Решение
1. Используйте локальные определения в компонентах, если типы специфичны:
```ts
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

2. Используйте type-only импорты:
```ts
import type { SpecificType } from '$lib/types';
```

## 4. Решение конфликтов имен при экспорте

### Проблема
Конфликты при использовании `export *`:
```
Module './types' has already exported a member named 'ComponentName'
```

### Решение
1. Избегайте дублирования имен между типами и компонентами
2. Удаляйте дублирующиеся компоненты из разных уровней (атомов/организмов)
3. Используйте явные экспортные файлы (index.ts) без `export *` при необходимости

## 5. Исправление обработчиков событий с разными типами

### Проблема
Передача KeyboardEvent в функцию, ожидающую MouseEvent:
```svelte
onkeydown={(e: KeyboardEvent) => {
  handleClick(e); // Ошибка: KeyboardEvent != MouseEvent
}}
```

### Решение
Создайте соответствующее событие:
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

## 6. Совместимость с TypeScript и Svelte 5

### Проблема
Несовместимые определения типов:
```ts
type Props = {
  format?: Intl.NumberFormatOptions;
  // ...
}

// Ошибка: undefined может не соответствовать типу
```

### Решение
1. Уточняйте типы в файлах историй:
```ts
{#snippet children(props: Record<string, any>)}
```

2. Используйте явные приведения типов:
```ts
locales={props.locales as string | string[]}
format={getFormatOptions(props.format as string) as Intl.NumberFormatOptions}
```

## 7. Правила импорта и экспорта

### Используйте для типов:
```ts
import type { TypeName } from 'path/to/types';
```

### Используйте для компонентов:
```ts
import ComponentName from './ComponentName.svelte';
```

### Для экспорта компонентов:
```ts
export { default as ComponentName } from './ComponentName.svelte';
```

## 8. Организация структуры проекта

1. Не дублируйте компоненты в разных уровнях Atomic Design
2. Убедитесь, что компоненты находятся на правильном уровне (атом, молекула, организм)
3. Сохраняйте согласованность в именовании файлов и директорий

## 9. Документирование компонентов

1. Добавляйте JSDoc комментарии к компонентам:
```ts
/**
 * Компонент для отображения статуса
 * Приоритет: если передан `children`, он будет отображен,
 * иначе используется `label`, если он передан
 */
```

2. Указывайте приоритеты обработки свойств:
   - Если передан `children`, он имеет приоритет над `content`
   - Если передан `content`, он используется вместо текста по умолчанию

## 10. Обработка ошибок и предупреждений

1. Устраняйте все ошибки перед коммитом
2. Рассматривайте предупреждения как потенциальные проблемы
3. Используйте `yarn check` и `yarn build` для проверки качества кода

## Заключение

Следование этим принципам поможет поддерживать высокое качество кода в Svelte 5 библиотеке стилей. Регулярная проверка с помощью `yarn check` и `yarn build` обеспечит отсутствие ошибок и совместимость с современными стандартами.