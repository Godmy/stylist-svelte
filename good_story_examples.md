# Компоненты с хорошими story-файлами в библиотеке stylist-svelte

## Обзор

В результате анализа 449 story-файлов было выявлено, что 104 из них (около 23%) имеют хороший уровень документации и примеров использования. Эти файлы могут служить эталоном для улучшения остальных компонентов.

## Компоненты с хорошими story-файлами

Следующие компоненты имеют качественные story-файлы с интерактивными элементами управления и полной демонстрацией возможностей:

1. **Button** - D:\2026\code\template\stylist-svelte\src\lib\components\atoms\interaction\controls\buttons\button\index.story.svelte
2. **Avatar** - D:\2026\code\template\stylist-svelte\src\lib\components\atoms\information\media\avatar\index.story.svelte
3. **DropdownMenu** - D:\2026\code\template\stylist-svelte\src\lib\components\molecules\interaction\controls\menus\dropdown-menu\index.story.svelte
4. **ColorPicker** - D:\2026\code\template\stylist-svelte\src\lib\components\molecules\interaction\input\pickers\color-picker\index.story.svelte
5. **DataTable** - D:\2026\code\template\stylist-svelte\src\lib\components\molecules\interaction\controls\tables\data-table\index.story.svelte
6. **RichTextEditor** - D:\2026\code\template\stylist-svelte\src\lib\components\molecules\interaction\editors\rich-text-editor\index.story.svelte
7. **DatePicker** - D:\2026\code\template\stylist-svelte\src\lib\components\molecules\interaction\input\pickers\date-picker\index.story.svelte
8. **DateTimePicker** - D:\2026\code\template\stylist-svelte\src\lib\components\molecules\interaction\input\pickers\date-time-picker\index.story.svelte
9. **MultiSelect** - D:\2026\code\template\stylist-svelte\src\lib\components\molecules\interaction\controls\selectors\multi-select\index.story.svelte
10. **Tabs** - D:\2026\code\template\stylist-svelte\src\lib\components\molecules\interaction\controls\tabs\tabs\index.story.svelte

## Характеристики хороших story-файлов

Хорошие story-файлы обычно содержат:

1. **Интерактивные элементы управления** - позволяют изменять пропсы компонента в реальном времени
2. **Демонстрацию всех вариантов** - показывают все доступные варианты компонента
3. **Демонстрацию всех размеров** - показывают все доступные размеры компонента
4. **Примеры использования** - демонстрируют реальные сценарии использования компонента
5. **Четкую структуру** - разделяют примеры на логические блоки
6. **Пояснительный текст** - объясняют, что делает компонент и как его использовать

## Пример структуры хорошего story-файла

```svelte
<script lang="ts">
  import { Story } from '$stylist/design-system/playground';
  import type { ControlConfig } from '$stylist/design-system/tokens/controls';

  import MyComponent from './index.svelte';
  import type { IMyComponentProps } from '$stylist/design-system/props/my-component';

  // Определение пропсов для story
  let {
    id = '',
    title = '',
    description = '',
    primaryScenario = undefined,
    variantScenarios = [],
    controls = []
  } = $props<{
    id?: string;
    title?: string;
    description?: string;
    primaryScenario?: IMyComponentProps;
    variantScenarios?: IMyComponentProps[];
    controls?: ControlConfig[]
  }>();

  // Обработка действий
  function handleAction(action: string) {
    console.log(`${action} clicked`);
  }
</script>

<Story
  {id}
  {title}
  {description}
  component={MyComponent}
  category="Atoms"
  controls={controls}
>
  {#snippet children(props)}
    <!-- Интерактивный пример -->
    <MyComponent {...props}>
      {#if props.children}
        {@render props.children()}
      {:else}
        Пример контента
      {/if}
    </MyComponent>
  {/snippet}
</Story>
```

## Рекомендации

Для улучшения остальных story-файлов рекомендуется:

1. Использовать компоненты из списка выше как эталон
2. Следовать общей структуре и подходу к созданию story-файлов
3. Обеспечивать интерактивность для всех настраиваемых параметров
4. Добавлять примеры всех вариантов и размеров компонента
5. Включать реальные сценарии использования компонента