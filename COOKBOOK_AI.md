# Cookbook: Руководство для ИИ-агента по исправлению ошибок в Svelte 5 библиотеке компонентов

## Правила приоритетности
1. Всегда придерживайся принципа: если `children` присутствует, то он имеет приоритет над любыми другими текстовыми пропами
2. Приоритет: `children` > `content` > `label` > `text` > текст по умолчанию

## Проверки и исправления

### 1. Замена `$$slots.default` на `children`
**Поиск**: `{#if $$slots.default}` или `$$slots.default`
**Замена на**:
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

### 2. Исправление типизации `MouseEvent`
**Поиск**: `import { MouseEvent } from 'svelte/elements';`
**Замена на**: Удалить импорт; `MouseEvent` доступен глобально

### 3. Исправление конфликтов типов между файлами компонентов и типов
**Поиск**: Интерфейсы `GraphEdge`, `GraphNode` и др. в `$lib/types/components.ts`, если они используются только в одном/двух компонентах
**Замена на**: Удалить из файла типов и определить локально в компонентах

### 4. Исправление ошибок типов в обработчиках событий
**Поиск**: `onkeydown={(e: KeyboardEvent) => handleClick(e)}` где `handleClick` ожидает `MouseEvent`
**Замена на**:
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

### 5. Исправление `NumberFlow.story.svelte`
**Поиск**: `format={getFormatOptions(props.format) as Intl.NumberFormatOptions}`
**Замена на**: `format={getFormatOptions(props.format as string) as Intl.NumberFormatOptions}`

### 6. Исправление конфликтов имен при `export *`
**Поиск**: Компоненты с одинаковыми именами в разных уровнях (атомы/организмы)
**Действие**: Удалить дублирующийся компонент из более простого уровня (атомы)

### 7. Исправление `TimingConfig` и `NumberFlowProps` экспорта
**В NumberFlow.svelte**:
- Изменить `type NumberFlowProps` на `export type NumberFlowProps`
- Оставить `export interface TimingConfig` как есть

### 8. Удаление `TableBody`, `TableCell`, `TableHeader`, `TableRow` из атомов
**Действие**: Удалить эти компоненты из `$lib/components/atoms/` если они существуют в `$lib/components/organisms/`

## Общие правила редактирования

### Для каждого компонента
1. Добавь `import type { Snippet } from 'svelte'`
2. Добавь `children?: Snippet` к пропсам
3. Замени `$$slots.default` на `children`
4. Добавь комментарий о приоритетах

### Для файлов историй
1. Заменить импорты типа `import('$lib/components/...').TypeName` на конкретный тип
2. Использовать `props: Record<string, any>` для временного решения проблем с типами
3. Уточнить типы при необходимости

### Для файлов типов
1. Удаляй типы, которые используются только в одном-двух компонентах
2. Оставляй только общие типы, используемые в нескольких местах

## Последовательность действий
1. Найти все новые компоненты в `src/lib/components/atoms/`
2. Добавить их в `index.ts` файл
3. Пробежаться по всем компонентам, применяя вышеуказанные исправления
4. Запустить `yarn check` и устранить выявленные ошибки
5. Повторять до тех пор, пока `yarn check` не выдает ошибок
6. Запустить `yarn build` для финальной проверки

## Проверочные команды
- `yarn check` - проверка типов
- `yarn build` - сборка проекта
- После исправления всех ошибок обе команды должны завершаться успешно без ошибок

## Файлы для проверки
- `$lib/components/atoms/index.ts` - обновить экспорт новых компонентов
- `$lib/types/components.ts` - удалить специфичные типы
- Все файлы новых компонентов
- Все файлы историй для новых компонентов