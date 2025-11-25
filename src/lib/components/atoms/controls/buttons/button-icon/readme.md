# IconButton Component

## Обзор

IconButton - универсальная кнопка для отображения иконок, построенная по принципам эталонного компонента Button. Поддерживает динамические иконки через Svelte 5 Snippet API.

## Структура файлов

```
button-icon/
├── IconButton.svelte        # Основной компонент
├── types.ts                 # Типы и интерфейсы
├── styles.ts                # Менеджер стилей (логика CSS-классов)
├── IconButton.css           # CSS стили с темизацией
├── IconButton.story.svelte  # Примеры использования
├── index.ts                 # Публичный API
└── readme.md                # Документация
```

## Система стилей

### CSS-переменные (Темизация)

```css
.iconbutton-variant-primary {
  background-color: var(--color-primary-600);
  color: var(--color-text-inverse);
}

.iconbutton-variant-ghost {
  border: 2px solid var(--color-border-primary);
  background-color: transparent;
  color: var(--color-text-primary);
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

### IconButtonStyleManager

```typescript
export class IconButtonStyleManager {
  static getVariantClasses(variant: IconButtonVariant): string {
    const variantClasses: Record<IconButtonVariant, string> = {
      primary: 'iconbutton-variant-primary',
      secondary: 'iconbutton-variant-secondary',
      success: 'iconbutton-variant-success',
      warning: 'iconbutton-variant-warning',
      danger: 'iconbutton-variant-danger',
      ghost: 'iconbutton-variant-ghost',
      link: 'iconbutton-variant-link'
    };
    return variantClasses[variant];
  }

  static getSizeClasses(size: IconButtonSize): string {
    const sizeClasses: Record<IconButtonSize, string> = {
      sm: 'p-1.5',
      md: 'p-2',
      lg: 'p-3'
    };
    return sizeClasses[size];
  }

  static getLoaderClasses(size: IconButtonSize): string {
    const loaderSizeClasses: Record<IconButtonSize, string> = {
      sm: 'iconbutton-size-sm',
      md: 'iconbutton-size-md',
      lg: 'iconbutton-size-lg'
    };
    return loaderSizeClasses[size];
  }
}
```

## Типизация

### IconButtonVariant (types.ts:8)

```typescript
export type IconButtonVariant =
  | 'primary'    // Основное действие
  | 'secondary'  // Второстепенное действие
  | 'success'    // Успешное действие
  | 'warning'    // Предупреждение
  | 'danger'     // Опасное действие
  | 'ghost'      // Невидимая кнопка (по умолчанию)
  | 'link';      // Текстовая ссылка
```

### IconButtonSize (types.ts:9)

```typescript
export type IconButtonSize =
  | 'sm'  // Маленький: padding 1.5
  | 'md'  // Средний: padding 2
  | 'lg'; // Большой: padding 3
```

### IIconButtonProps (types.ts:11-20)

```typescript
export interface IIconButtonProps extends HTMLButtonAttributes {
  variant?: IconButtonVariant;      // Визуальный стиль
  size?: IconButtonSize;            // Размер
  disabled?: boolean;               // Отключена ли кнопка
  loading?: boolean;                // Состояние загрузки
  icon?: Snippet | any;             // Иконка (Svelte 5 Snippet)
  ariaLabel?: string;               // Доступная метка
  class?: string;                   // Дополнительные CSS классы
  onclick?: (event: MouseEvent) => void;  // Обработчик клика
}
```

## Работа с иконками (Svelte 5 Snippet API)

### Передача иконки через пропс

IconButton принимает иконку через проп `icon` как Svelte 5 Snippet:

```svelte
<script>
  import { Home } from 'lucide-svelte';
  import IconButton from './IconButton.svelte';
</script>

<IconButton icon={Home} ariaLabel="Home" />
```

### Рендеринг иконки (IconButton.svelte:58-62)

```svelte
{#if loading}
  <Loader2 class="animate-spin iconbutton-loader" aria-hidden="true" />
{:else if icon !== undefined && icon !== null}
  {@render icon()}
{/if}
```

**Логика:**
- Если `loading=true`, показывается лоадер
- Если `icon` передан, рендерится через `{@render icon()}`
- Svelte 5 Snippet API обеспечивает type-safe рендеринг компонентов

## Реактивность (Svelte 5)

### $props() - Деструктуризация пропсов (IconButton.svelte:30-39)

```typescript
let {
  variant = 'ghost',
  size = 'md',
  disabled = false,
  loading = false,
  icon = undefined,
  ariaLabel = '',
  class: className = '',
  ...restProps
}: Props = $props();
```

### $derived - Реактивные вычисления (IconButton.svelte:41-47)

```typescript
let classes = $derived(IconButtonStyleManager.getAllClasses(
  variant,
  size,
  disabled,
  loading,
  className
));
```

## Доступность (a11y)

### ARIA атрибуты (IconButton.svelte:50-56)

```svelte
<button
  {...restProps}
  class={classes}
  aria-label={ariaLabel}
  aria-busy={loading}
  disabled={disabled || loading}
>
```

**Реализованные практики:**
- `aria-label={ariaLabel}` - обязательная метка для скринридеров (иконки не читаемы)
- `aria-busy={loading}` - сообщает о состоянии загрузки
- `disabled={disabled || loading}` - блокирует кнопку при загрузке
- `aria-hidden="true"` на лоадере - скрывает иконку от скринридеров

**Важно:** Всегда указывайте `ariaLabel` для IconButton, так как иконки не предоставляют текстового контекста.

## Состояние загрузки (Loading)

### Индикатор загрузки с адаптивным размером

```css
.iconbutton-size-sm .iconbutton-loader {
  width: var(--iconbutton-loader-size-sm);
  height: var(--iconbutton-loader-size-sm);
}
```

**Размеры лоадера:**
- `sm`: 1rem (16px)
- `md`: 1.25rem (20px)
- `lg`: 1.5rem (24px)

Размер лоадера автоматически адаптируется к размеру кнопки.

## Варианты кнопок

### Primary (Основная)
- Используется для главных действий
- Яркий акцентный цвет

### Secondary (Второстепенная)
- Для второстепенных действий
- Светлый фон

### Success (Успех)
- Для подтверждений
- Зеленый цвет

### Warning (Предупреждение)
- Для действий, требующих внимания
- Желто-оранжевый цвет

### Danger (Опасность)
- Для деструктивных действий
- Красный цвет

### Ghost (Призрачная - по умолчанию)
- Максимально ненавязчива
- С обводкой
- **Рекомендуется по умолчанию** для иконочных кнопок

### Link (Ссылка)
- Выглядит как текстовая ссылка
- Для навигационных действий

## Примеры использования

### Базовое использование

```svelte
<script>
  import { Settings } from 'lucide-svelte';
  import IconButton from './IconButton.svelte';
</script>

<IconButton icon={Settings} ariaLabel="Settings" />
```

### С вариантами

```svelte
<IconButton icon={Home} variant="primary" ariaLabel="Home" />
<IconButton icon={Settings} variant="secondary" ariaLabel="Settings" />
<IconButton icon={Trash} variant="danger" ariaLabel="Delete" />
```

### Размеры

```svelte
<IconButton icon={User} size="sm" ariaLabel="User profile" />
<IconButton icon={User} size="md" ariaLabel="User profile" />
<IconButton icon={User} size="lg" ariaLabel="User profile" />
```

### Состояния

```svelte
<IconButton icon={Save} disabled ariaLabel="Save" />
<IconButton icon={Save} loading ariaLabel="Saving..." />
```

### Кастомный обработчик

```svelte
<IconButton
  icon={Bookmark}
  onclick={() => console.log('Bookmarked!')}
  ariaLabel="Bookmark"
/>
```

### В панели инструментов

```svelte
<div class="toolbar">
  <IconButton icon={Bold} variant="ghost" ariaLabel="Bold" />
  <IconButton icon={Italic} variant="ghost" ariaLabel="Italic" />
  <IconButton icon={Underline} variant="ghost" ariaLabel="Underline" />
  <div class="separator"></div>
  <IconButton icon={AlignLeft} variant="ghost" ariaLabel="Align left" />
  <IconButton icon={AlignCenter} variant="ghost" ariaLabel="Align center" />
  <IconButton icon={AlignRight} variant="ghost" ariaLabel="Align right" />
</div>
```

### Группа действий

```svelte
<div class="action-group">
  <IconButton icon={ThumbsUp} variant="success" ariaLabel="Like" />
  <IconButton icon={Share2} variant="primary" ariaLabel="Share" />
  <IconButton icon={Bookmark} variant="ghost" ariaLabel="Save" />
</div>
```

### С динамической иконкой

```svelte
<script>
  import { Play, Pause } from 'lucide-svelte';

  let isPlaying = $state(false);
  const icon = $derived(isPlaying ? Pause : Play);
  const label = $derived(isPlaying ? 'Pause' : 'Play');

  const togglePlay = () => {
    isPlaying = !isPlaying;
  };
</script>

<IconButton
  icon={icon}
  variant="primary"
  ariaLabel={label}
  onclick={togglePlay}
/>
```

## Принципы SOLID

### Single Responsibility
- **IconButton.svelte**: только рендеринг иконочной кнопки
- **IconButtonStyleManager**: только управление стилями
- **types.ts**: только определение типов
- **IconButton.css**: только стили

### Open/Closed
- Компонент расширяется через пропсы
- Новые варианты добавляются в `IconButtonVariant` без изменения логики
- Любая иконка может быть передана через `icon`
- Кастомные классы через проп `class`

### Liskov Substitution
- Компонент совместим с нативным `<button>`
- Принимает все HTML атрибуты через `HTMLButtonAttributes`
- Может заменить обычную кнопку

### Interface Segregation
- Маленький сфокусированный интерфейс `IIconButtonProps`
- Только необходимые свойства
- Опциональные поля для гибкости

### Dependency Inversion
- Зависит от абстракций (интерфейсы `IIconButtonProps`)
- CSS-переменные как абстракция над цветами
- Snippet API как абстракция над иконками
- Не зависит от конкретных реализаций

## Ключевые особенности

### 1. Полная типизация
- Все пропсы типизированы
- Type-safe варианты и размеры
- Интеграция с TypeScript

### 2. Темизация
- CSS-переменные для всех цветов
- Легкая смена темы
- Консистентность с системой дизайна

### 3. Гибридный подход к стилям
- Кастомные CSS классы для вариантов
- Tailwind для размеров и утилит
- Баланс между гибкостью и консистентностью

### 4. Доступность (a11y)
- Обязательный `ariaLabel` для контекста
- ARIA атрибуты
- Keyboard navigation (нативный `<button>`)
- Screen reader поддержка

### 5. Реактивность (Svelte 5 Runes)
- `$props()` для пропсов
- `$derived` для вычисляемых значений
- Современный Svelte 5 API

### 6. Гибкость иконок
- Snippet API для динамических иконок
- Поддержка любых компонентов иконок
- Type-safe рендеринг

### 7. Адаптивный лоадер
- Размер лоадера адаптируется к размеру кнопки
- CSS-переменные для гибкой настройки
- Плавная анимация

### 8. Разделение ответственности
- Компонент - рендеринг
- StyleManager - логика стилей
- CSS - визуальное оформление
- Types - контракты

## Отличия от эталонной кнопки (Button)

1. **Содержимое**: Принимает иконку через Snippet вместо текста
2. **Форма**: Обычно квадратная (padding одинаковый по всем сторонам)
3. **Размеры**: Размеры определяются padding, а не width/height
4. **Варианты**: 7 вариантов (нет outline)
5. **Доступность**: Обязателен `ariaLabel` для контекста
6. **Использование**: Специфична для действий с иконками

## Best Practices

### 1. Всегда указывайте ariaLabel

```svelte
<!-- ✅ Хорошо -->
<IconButton icon={Settings} ariaLabel="Settings" />

<!-- ❌ Плохо -->
<IconButton icon={Settings} />
```

### 2. Используйте ghost вариант по умолчанию

```svelte
<!-- ✅ Хорошо для toolbar -->
<IconButton icon={Bold} variant="ghost" ariaLabel="Bold" />

<!-- ⚠️ Может быть слишком ярко -->
<IconButton icon={Bold} variant="primary" ariaLabel="Bold" />
```

### 3. Группируйте связанные действия

```svelte
<div class="flex gap-2">
  <IconButton icon={Copy} ariaLabel="Copy" />
  <IconButton icon={Paste} ariaLabel="Paste" />
  <IconButton icon={Cut} ariaLabel="Cut" />
</div>
```

### 4. Используйте соответствующие варианты

```svelte
<!-- Деструктивные действия -->
<IconButton icon={Trash} variant="danger" ariaLabel="Delete" />

<!-- Подтверждения -->
<IconButton icon={Check} variant="success" ariaLabel="Confirm" />

<!-- Предупреждения -->
<IconButton icon={AlertTriangle} variant="warning" ariaLabel="Warning" />
```

## Заключение

Компонент IconButton следует всем принципам эталонного компонента Button, но специализирован для работы с иконками через современный Svelte 5 Snippet API.
