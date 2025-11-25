# CloseButton Component

## Обзор

CloseButton - специализированная кнопка закрытия с иконкой X, построенная по принципам эталонного компонента Button.

## Структура файлов

```
button-close/
├── CloseButton.svelte        # Основной компонент
├── types.ts                  # Типы и интерфейсы
├── styles.ts                 # Менеджер стилей (логика CSS-классов)
├── CloseButton.css           # CSS стили с темизацией
├── CloseButton.story.svelte  # Примеры использования
├── index.ts                  # Публичный API
└── readme.md                 # Документация
```

## Система стилей

### CSS-переменные (Темизация)

```css
.closebutton-variant-solid {
  background-color: var(--color-danger-600);
  color: var(--color-text-inverse);
}

.closebutton-variant-ghost {
  background-color: transparent;
  color: var(--color-text-primary);
}
```

**Используемые переменные темы:**
- `--color-danger-{shade}` - цвета для варианта solid
- `--color-text-primary` - основной текст
- `--color-text-inverse` - инверсный текст
- `--color-border-primary` - границы
- `--color-secondary-{shade}` - hover эффекты

### CloseButtonStyleManager

```typescript
export class CloseButtonStyleManager {
  static getVariantClasses(variant: CloseButtonVariant): string {
    const variantClasses: Record<CloseButtonVariant, string> = {
      solid: 'closebutton-variant-solid',
      outline: 'closebutton-variant-outline',
      ghost: 'closebutton-variant-ghost'
    };
    return variantClasses[variant];
  }

  static getSizeClasses(size: CloseButtonSize): string {
    const sizeClasses: Record<CloseButtonSize, string> = {
      sm: 'w-6 h-6 p-0.5',
      md: 'w-8 h-8 p-1',
      lg: 'w-10 h-10 p-1.5'
    };
    return sizeClasses[size];
  }

  static getDisabledClass(isDisabled: boolean, isLoading: boolean): string {
    return (isDisabled || isLoading)
      ? 'opacity-50 cursor-not-allowed pointer-events-none'
      : '';
  }

  static getLoaderClasses(size: CloseButtonSize): string {
    const loaderSizeClasses: Record<CloseButtonSize, string> = {
      sm: 'closebutton-size-sm',
      md: 'closebutton-size-md',
      lg: 'closebutton-size-lg'
    };
    return loaderSizeClasses[size];
  }
}
```

## Типизация

### CloseButtonVariant (types.ts:8)

```typescript
export type CloseButtonVariant =
  | 'solid'    // Красная кнопка (danger)
  | 'outline'  // Кнопка с обводкой
  | 'ghost';   // Невидимая кнопка (по умолчанию)
```

### CloseButtonSize (types.ts:7)

```typescript
export type CloseButtonSize =
  | 'sm'  // 24x24px
  | 'md'  // 32x32px
  | 'lg'; // 40x40px
```

### ICloseButtonProps (types.ts:10-17)

```typescript
export interface ICloseButtonProps extends HTMLButtonAttributes {
  size?: CloseButtonSize;       // Размер кнопки
  variant?: CloseButtonVariant; // Визуальный стиль
  disabled?: boolean;           // Отключена ли кнопка
  loading?: boolean;            // Состояние загрузки
  class?: string;               // Дополнительные CSS классы
  onclick?: (event: MouseEvent) => void;  // Обработчик клика
}
```

## Реактивность (Svelte 5)

### $props() - Деструктуризация пропсов (CloseButton.svelte:28-35)

```typescript
let {
  size = 'md',
  variant = 'ghost',
  disabled = false,
  loading = false,
  class: className = '',
  ...restProps
}: Props = $props();
```

### $derived - Реактивные вычисления (CloseButton.svelte:37-43)

```typescript
let classes = $derived(CloseButtonStyleManager.getAllClasses(
  size,
  variant,
  disabled,
  loading,
  className
));
```

## Доступность (a11y)

### ARIA атрибуты (CloseButton.svelte:46-51)

```svelte
<button
  {...restProps}
  class={classes}
  aria-label="Close"
  aria-busy={loading}
  disabled={disabled || loading}
>
```

**Реализованные практики:**
- `aria-label="Close"` - явная метка для скринридеров
- `aria-busy={loading}` - сообщает о состоянии загрузки
- `disabled={disabled || loading}` - блокирует кнопку при загрузке
- `aria-hidden="true"` на лоадере - скрывает иконку от скринридеров

## Состояние загрузки (Loading)

### Индикатор загрузки (CloseButton.svelte:53-57)

```svelte
{#if loading}
  <Loader2 class="animate-spin closebutton-loader" aria-hidden="true" />
{:else}
  <X class="w-full h-full" />
{/if}
```

**Логика:**
- При `loading=true` показывается анимированная иконка `Loader2`
- Размер лоадера адаптируется к размеру кнопки через CSS-классы
- Иконка X заменяется на лоадер

## Варианты кнопок

### Solid (По умолчанию для важных действий)
```css
.closebutton-variant-solid {
  background-color: var(--color-danger-600);
  color: var(--color-text-inverse);
}
```
- Красная кнопка (danger)
- Используется для критичных действий закрытия

### Outline (С обводкой)
```css
.closebutton-variant-outline {
  border: 2px solid var(--color-border-primary);
  background-color: transparent;
  color: var(--color-text-primary);
}
```
- Минималистичный стиль
- Видимая обводка

### Ghost (Невидимая - по умолчанию)
```css
.closebutton-variant-ghost {
  background-color: transparent;
  color: var(--color-text-primary);
}
```
- Максимально ненавязчива
- Для встроенных UI элементов (модалки, уведомления)

## Примеры использования

### Базовое использование

```svelte
<CloseButton />
```

### С вариантами

```svelte
<CloseButton variant="solid" />
<CloseButton variant="outline" />
<CloseButton variant="ghost" />
```

### Размеры

```svelte
<CloseButton size="sm" />
<CloseButton size="md" />
<CloseButton size="lg" />
```

### Состояния

```svelte
<CloseButton disabled />
<CloseButton loading />
```

### Кастомный обработчик

```svelte
<CloseButton onclick={() => console.log('Closing...')} />
```

### В модальном окне

```svelte
<div class="modal">
  <CloseButton
    variant="ghost"
    onclick={closeModal}
    aria-label="Close modal"
  />
  <p>Modal content</p>
</div>
```

### В уведомлении

```svelte
<div class="notification">
  <p>Notification message</p>
  <CloseButton
    size="sm"
    variant="ghost"
    onclick={dismissNotification}
  />
</div>
```

## Принципы SOLID

### Single Responsibility
- **CloseButton.svelte**: только рендеринг кнопки закрытия
- **CloseButtonStyleManager**: только управление стилями
- **types.ts**: только определение типов
- **CloseButton.css**: только стили

### Open/Closed
- Компонент расширяется через пропсы
- Новые варианты добавляются в `CloseButtonVariant` без изменения логики
- Кастомные классы через проп `class`

### Liskov Substitution
- Компонент совместим с нативным `<button>`
- Принимает все HTML атрибуты через `HTMLButtonAttributes`
- Может заменить обычную кнопку

### Interface Segregation
- Маленький сфокусированный интерфейс `ICloseButtonProps`
- Только необходимые свойства
- Опциональные поля для гибкости

### Dependency Inversion
- Зависит от абстракций (интерфейсы `ICloseButtonProps`)
- CSS-переменные как абстракция над цветами
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
- ARIA атрибуты
- Keyboard navigation (нативный `<button>`)
- Screen reader поддержка

### 5. Реактивность (Svelte 5 Runes)
- `$props()` для пропсов
- `$derived` для вычисляемых значений
- Современный Svelte 5 API

### 6. Специализация
- Фиксированная иконка X
- Оптимизированные размеры для кнопки закрытия
- Круглая форма (rounded-full)

### 7. Разделение ответственности
- Компонент - рендеринг
- StyleManager - логика стилей
- CSS - визуальное оформление
- Types - контракты

## Отличия от эталонной кнопки (Button)

1. **Специализация**: CloseButton имеет фиксированную иконку X
2. **Форма**: Круглая (rounded-full) вместо скругленной (rounded-md)
3. **Размеры**: Квадратная форма (w-6 h-6) вместо прямоугольной
4. **Варианты**: 3 варианта (solid, outline, ghost) вместо 8
5. **Использование**: Специфична для действия закрытия

## Заключение

Компонент CloseButton следует всем принципам эталонного компонента Button, но адаптирован для специализированного случая использования - кнопки закрытия.
