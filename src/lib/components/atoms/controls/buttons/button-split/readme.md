# SplitButton Component

## Обзор

SplitButton - сложная кнопка с основным действием и выпадающим меню дополнительных действий, построенная по принципам эталонного компонента Button.

**Примечание:** Этот компонент имеет высокую сложность и управляет собственным состоянием, что делает его более подходящим для категории "molecules". Однако он следует тем же принципам, что и остальные кнопки.

## Структура файлов

```
button-split/
├── SplitButton.svelte        # Основной компонент
├── types.ts                  # Типы и интерфейсы
├── styles.ts                 # Менеджер стилей (логика CSS-классов)
├── SplitButton.css           # CSS стили с темизацией
├── SplitButton.story.svelte  # Примеры использования
├── index.ts                  # Публичный API
└── readme.md                 # Документация
```

## Система стилей

### CSS-переменные (Темизация)

```css
.splitbutton-variant-primary {
  border: 2px solid var(--color-border-primary);
  background-color: var(--color-primary-600);
  color: var(--color-text-inverse);
}

.splitbutton-dropdown {
  background-color: var(--color-background-primary);
  border: 2px solid var(--color-border-primary);
}

.splitbutton-dropdown-item:hover {
  background-color: var(--color-background-secondary);
}
```

**Используемые переменные темы:**
- `--color-primary-{shade}` - основные цвета
- `--color-secondary-{shade}` - вторичные цвета
- `--color-success-{shade}` - цвета успеха
- `--color-warning-{shade}` - цвета предупреждения
- `--color-danger-{shade}` - цвета ошибки
- `--color-text-primary` - основной текст
- `--color-text-inverse` - инверсный текст
- `--color-border-primary` - границы
- `--color-background-primary` - основной фон
- `--color-background-secondary` - вторичный фон (hover)

### SplitButtonStyleManager

```typescript
export class SplitButtonStyleManager {
  static getVariantClasses(variant: SplitButtonVariant): string {
    const variantClasses: Record<SplitButtonVariant, string> = {
      primary: 'splitbutton-variant-primary',
      secondary: 'splitbutton-variant-secondary',
      success: 'splitbutton-variant-success',
      warning: 'splitbutton-variant-warning',
      danger: 'splitbutton-variant-danger',
      ghost: 'splitbutton-variant-ghost',
      link: 'splitbutton-variant-link'
    };
    return variantClasses[variant];
  }

  static getSizeTextClasses(size: SplitButtonSize): string {
    const sizeClasses: Record<SplitButtonSize, string> = {
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg'
    };
    return sizeClasses[size];
  }

  static getButtonSizeClasses(size: SplitButtonSize): string {
    const buttonSizeClasses: Record<SplitButtonSize, string> = {
      sm: 'px-3 py-1.5',
      md: 'px-4 py-2',
      lg: 'px-6 py-3'
    };
    return buttonSizeClasses[size];
  }

  static getDropdownSizeClasses(size: SplitButtonSize): string {
    const dropdownSizeClasses: Record<SplitButtonSize, string> = {
      sm: 'p-1.5 min-w-[8rem]',
      md: 'p-2 min-w-[10rem]',
      lg: 'p-2.5 min-w-[12rem]'
    };
    return dropdownSizeClasses[size];
  }

  static getPrimaryButtonClasses(
    variantClasses: string,
    buttonSizeClasses: string,
    textSizeClasses: string
  ): string {
    return `relative inline-flex items-center rounded-l-md border border-r-0 border-[--color-border-primary] ${variantClasses} ${buttonSizeClasses} ${textSizeClasses}`;
  }

  static getSecondaryButtonClasses(
    variantClasses: string,
    buttonSizeClasses: string,
    textSizeClasses: string
  ): string {
    return `relative inline-flex items-center rounded-r-md border border-[--color-border-primary] ${variantClasses} ${buttonSizeClasses} ${textSizeClasses}`;
  }

  static getDropdownClasses(dropdownSizeClasses: string): string {
    return `splitbutton-dropdown absolute z-10 top-full mt-1 origin-top-left rounded-md shadow-lg focus:outline-none ${dropdownSizeClasses}`;
  }

  static getDropdownItemClasses(): string {
    return 'splitbutton-dropdown-item text-left rounded px-3 py-1.5 text-sm';
  }
}
```

## Типизация

### SplitButtonVariant (types.ts:7)

```typescript
export type SplitButtonVariant =
  | 'primary'    // Основное действие
  | 'secondary'  // Второстепенное действие
  | 'success'    // Успешное действие
  | 'warning'    // Предупреждение
  | 'danger'     // Опасное действие
  | 'ghost'      // Невидимая кнопка
  | 'link';      // Текстовая ссылка
```

### SplitButtonSize (types.ts:8)

```typescript
export type SplitButtonSize =
  | 'sm'  // Маленький
  | 'md'  // Средний
  | 'lg'; // Большой
```

### ISplitButtonItem (types.ts:10-14)

```typescript
export interface ISplitButtonItem {
  label: string;              // Текст пункта меню
  onClick: () => void;        // Обработчик клика
  disabled?: boolean;         // Отключен ли пункт
}
```

### ISplitButtonProps (types.ts:16-24)

```typescript
export interface ISplitButtonProps extends HTMLButtonAttributes {
  variant?: SplitButtonVariant;     // Визуальный стиль
  size?: SplitButtonSize;           // Размер
  disabled?: boolean;               // Отключена ли кнопка
  items: ISplitButtonItem[];        // Пункты dropdown меню
  primaryAction: () => void;        // Основное действие
  primaryLabel?: string;            // Текст основной кнопки
  class?: string;                   // Дополнительные CSS классы
}
```

## Управление состоянием

### Внутреннее состояние (SplitButton.svelte:53-54)

```typescript
let isOpen = $state(false);
let buttonId = `split-button-${Math.random().toString(36).substr(2, 9)}`;
```

**Состояние компонента:**
- `isOpen`: открыто ли dropdown меню
- `buttonId`: уникальный ID для отслеживания кликов вне компонента

### Закрытие при клике вне (SplitButton.svelte:56-69)

```typescript
$effect(() => {
  if (!isOpen) return;

  const handleClickOutside = (event: Event) => {
    if (!event.composedPath().some((el) => el instanceof Element && el.id === buttonId)) {
      isOpen = false;
    }
  };

  document.addEventListener('click', handleClickOutside);
  return () => document.removeEventListener('click', handleClickOutside);
});
```

**Принцип работы:**
- `$effect` устанавливает глобальный обработчик кликов
- Проверяет, был ли клик внутри компонента через `composedPath()`
- Автоматически очищает обработчик при размонтировании

### Реактивные классы (SplitButton.svelte:71-74)

```typescript
let variantClasses = $derived(SplitButtonStyleManager.getVariantClasses(variant));
let textSizeClasses = $derived(SplitButtonStyleManager.getSizeTextClasses(size));
let buttonSizeClasses = $derived(SplitButtonStyleManager.getButtonSizeClasses(size));
let dropdownSizeClasses = $derived(SplitButtonStyleManager.getDropdownSizeClasses(size));
```

**Оптимизация:**
- Классы вычисляются отдельно для переиспользования
- `$derived` пересчитывает только при изменении зависимостей

## Структура компонента

### Основной контейнер (SplitButton.svelte:87)

```svelte
<div class={SplitButtonStyleManager.getMainContainerClasses(className)} id={buttonId}>
```

### Основная кнопка (SplitButton.svelte:88-95)

```svelte
<button
  type="button"
  class={SplitButtonStyleManager.getPrimaryButtonClasses(variantClasses, buttonSizeClasses, textSizeClasses)}
  onclick={primaryAction}
  disabled={disabled}
>
  {primaryLabel}
</button>
```

### Кнопка dropdown (SplitButton.svelte:96-105)

```svelte
<button
  type="button"
  class={SplitButtonStyleManager.getSecondaryButtonClasses(variantClasses, buttonSizeClasses, textSizeClasses)}
  onclick={toggleDropdown}
  aria-haspopup="true"
  aria-expanded={isOpen}
  disabled={disabled}
>
  <ChevronDown class="h-4 w-4" aria-hidden="true" />
</button>
```

### Выпадающее меню (SplitButton.svelte:107-130)

```svelte
{#if isOpen}
  <div
    class={SplitButtonStyleManager.getDropdownClasses(dropdownSizeClasses)}
    role="menu"
    aria-orientation="vertical"
    tabindex="-1"
  >
    <div class="flex flex-col gap-1" role="none">
      {#each items as item, i}
        <button
          class={SplitButtonStyleManager.getDropdownItemClasses()}
          onclick={() => {
            item.onClick();
            closeDropdown();
          }}
          disabled={item.disabled}
          role="menuitem"
        >
          {item.label}
        </button>
      {/each}
    </div>
  </div>
{/if}
```

## Доступность (a11y)

### ARIA атрибуты

**Кнопка dropdown (SplitButton.svelte:100-101):**
```svelte
aria-haspopup="true"
aria-expanded={isOpen}
```

**Dropdown меню (SplitButton.svelte:110-112):**
```svelte
role="menu"
aria-orientation="vertical"
tabindex="-1"
```

**Пункты меню (SplitButton.svelte:123):**
```svelte
role="menuitem"
```

**Реализованные практики:**
- `aria-haspopup="true"` - сообщает, что кнопка открывает меню
- `aria-expanded={isOpen}` - сообщает состояние меню
- `role="menu"` - семантическая роль меню
- `role="menuitem"` - семантическая роль пункта меню
- `disabled` - блокирует взаимодействие

## Примеры использования

### Базовое использование

```svelte
<script>
  import SplitButton from './SplitButton.svelte';

  const items = [
    {
      label: 'Save as Draft',
      onClick: () => console.log('Draft saved')
    },
    {
      label: 'Save as Template',
      onClick: () => console.log('Template saved')
    }
  ];

  const handleSave = () => {
    console.log('Saved!');
  };
</script>

<SplitButton
  variant="primary"
  items={items}
  primaryAction={handleSave}
  primaryLabel="Save"
/>
```

### С вариантами

```svelte
<SplitButton
  variant="primary"
  items={items}
  primaryAction={handlePrimary}
  primaryLabel="Primary Action"
/>

<SplitButton
  variant="danger"
  items={deleteItems}
  primaryAction={handleDelete}
  primaryLabel="Delete"
/>
```

### Размеры

```svelte
<SplitButton size="sm" items={items} primaryAction={handleAction} primaryLabel="Small" />
<SplitButton size="md" items={items} primaryAction={handleAction} primaryLabel="Medium" />
<SplitButton size="lg" items={items} primaryAction={handleAction} primaryLabel="Large" />
```

### Состояния

```svelte
<SplitButton disabled items={items} primaryAction={handleAction} primaryLabel="Disabled" />
```

### С отключенными пунктами

```svelte
<script>
  const items = [
    {
      label: 'Option 1',
      onClick: () => console.log('Option 1')
    },
    {
      label: 'Option 2 (Disabled)',
      onClick: () => console.log('Option 2'),
      disabled: true
    },
    {
      label: 'Option 3',
      onClick: () => console.log('Option 3')
    }
  ];
</script>

<SplitButton
  items={items}
  primaryAction={() => console.log('Primary')}
  primaryLabel="Action"
/>
```

### В форме публикации

```svelte
<script>
  import SplitButton from './SplitButton.svelte';

  const publishOptions = [
    {
      label: 'Schedule for later',
      onClick: () => openScheduleModal()
    },
    {
      label: 'Save as draft',
      onClick: () => saveDraft()
    },
    {
      label: 'Preview',
      onClick: () => openPreview()
    }
  ];

  const handlePublish = () => {
    // Publish immediately
    publishPost();
  };
</script>

<SplitButton
  variant="success"
  items={publishOptions}
  primaryAction={handlePublish}
  primaryLabel="Publish"
/>
```

### Действия с файлами

```svelte
<script>
  const saveOptions = [
    {
      label: 'Save as PDF',
      onClick: () => saveAsPDF()
    },
    {
      label: 'Save as Word',
      onClick: () => saveAsWord()
    },
    {
      label: 'Save as HTML',
      onClick: () => saveAsHTML()
    },
    {
      label: 'Email',
      onClick: () => emailDocument(),
      disabled: !isOnline
    }
  ];

  const handleSave = () => {
    saveDocument();
  };
</script>

<SplitButton
  variant="primary"
  size="md"
  items={saveOptions}
  primaryAction={handleSave}
  primaryLabel="Save"
/>
```

## Принципы SOLID

### Single Responsibility
- **SplitButton.svelte**: только рендеринг split button и управление dropdown
- **SplitButtonStyleManager**: только управление стилями
- **types.ts**: только определение типов
- **SplitButton.css**: только стили

### Open/Closed
- Компонент расширяется через пропсы
- Новые варианты добавляются в `SplitButtonVariant` без изменения логики
- Пункты меню передаются через массив `items`
- Кастомные классы через проп `class`

### Liskov Substitution
- Компонент совместим с группой кнопок
- Может использоваться везде, где требуется кнопка с дополнительными действиями

### Interface Segregation
- Интерфейс `ISplitButtonProps` содержит только необходимые свойства
- Интерфейс `ISplitButtonItem` минимален (label, onClick, disabled?)
- Опциональные поля для гибкости

### Dependency Inversion
- Зависит от абстракций (`ISplitButtonProps`, `ISplitButtonItem`)
- CSS-переменные как абстракция над цветами
- Не зависит от конкретных реализаций

## Ключевые особенности

### 1. Управление состоянием
- Внутреннее состояние для dropdown
- Svelte 5 `$state` для реактивности
- `$effect` для side-effects (закрытие при клике вне)

### 2. Полная типизация
- Все пропсы типизированы
- Type-safe варианты и размеры
- Типизированные пункты меню

### 3. Темизация
- CSS-переменные для всех цветов
- Легкая смена темы
- Консистентность с системой дизайна

### 4. Гибридный подход к стилям
- Кастомные CSS классы для вариантов
- Tailwind для размеров и утилит
- Баланс между гибкостью и консистентностью

### 5. Доступность (a11y)
- ARIA атрибуты для меню
- Keyboard navigation
- Screen reader поддержка
- Semantic HTML

### 6. Реактивность (Svelte 5 Runes)
- `$props()` для пропсов
- `$derived` для вычисляемых значений
- `$state` для внутреннего состояния
- `$effect` для side-effects
- Современный Svelte 5 API

### 7. Автоматическое закрытие
- Закрывается при клике вне компонента
- Закрывается после выбора пункта
- Плавная работа

### 8. Разделение ответственности
- Компонент - рендеринг и состояние
- StyleManager - логика стилей
- CSS - визуальное оформление
- Types - контракты

## Сложность компонента

### Почему это Molecule, а не Atom?

SplitButton имеет характеристики молекулы:

1. **Композиция**: Состоит из двух кнопок и dropdown меню
2. **Управление состоянием**: Внутреннее состояние для dropdown
3. **Взаимодействие**: Координация между кнопками и меню
4. **Сложность**: Требует `$effect` для side-effects
5. **Семантика**: Представляет сложный UI паттерн

**Однако**, он помещен в atoms для консистентности с остальными кнопками и следует тем же принципам.

## Best Practices

### 1. Ограничивайте количество пунктов

```svelte
<!-- ✅ Хорошо - 3-5 пунктов -->
<SplitButton
  items={[item1, item2, item3]}
  primaryAction={handlePrimary}
  primaryLabel="Action"
/>

<!-- ⚠️ Слишком много - рассмотрите другой UI -->
<SplitButton
  items={[item1, item2, ..., item15]}
  primaryAction={handlePrimary}
  primaryLabel="Action"
/>
```

### 2. Используйте подходящие варианты

```svelte
<!-- ✅ Хорошо - danger для деструктивных действий -->
<SplitButton
  variant="danger"
  items={deleteOptions}
  primaryAction={handleDelete}
  primaryLabel="Delete"
/>

<!-- ✅ Хорошо - success для публикации -->
<SplitButton
  variant="success"
  items={publishOptions}
  primaryAction={handlePublish}
  primaryLabel="Publish"
/>
```

### 3. Группируйте логически связанные действия

```svelte
<!-- ✅ Хорошо - все действия связаны с сохранением -->
const saveOptions = [
  { label: 'Save as PDF', onClick: savePDF },
  { label: 'Save as Word', onClick: saveWord },
  { label: 'Save as HTML', onClick: saveHTML }
];

<!-- ❌ Плохо - несвязанные действия -->
const mixedOptions = [
  { label: 'Save', onClick: save },
  { label: 'Delete', onClick: delete },
  { label: 'Share', onClick: share }
];
```

### 4. Отключайте недоступные опции

```svelte
<script>
  let isOnline = $state(navigator.onLine);

  const items = [
    {
      label: 'Upload to cloud',
      onClick: uploadToCloud,
      disabled: !isOnline  // ✅ Отключено когда оффлайн
    }
  ];
</script>
```

## Отличия от эталонной кнопки (Button)

1. **Структура**: Две кнопки + dropdown меню
2. **Состояние**: Управляет внутренним состоянием (isOpen)
3. **Сложность**: Требует `$effect` для закрытия при клике вне
4. **Действия**: Основное действие + список дополнительных
5. **Интерактивность**: Сложное взаимодействие между элементами
6. **Категория**: По сути molecule, но следует принципам atom

## Заключение

Компонент SplitButton - сложный UI элемент, который следует всем принципам эталонного компонента Button, но расширяет функциональность добавлением dropdown меню и управлением состоянием. Идеально подходит для ситуаций, когда нужно предложить основное действие с набором альтернатив.
