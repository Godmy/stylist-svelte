# Design System Migration Guide

## Обзор изменений

Реорганизована структура design tokens и тем для устранения дублирования и создания единого источника истины.

## Новая структура

```
src/lib/design-system/
├── tokens/                   # Атомарные значения
│   ├── colors.ts            # Цветовые палитры
│   ├── spacing.ts           # Отступы (0-64)
│   ├── typography.ts        # Шрифты, размеры, веса
│   ├── radius.ts            # Радиусы скругления
│   ├── shadows.ts           # Тени
│   └── index.ts
├── themes/                   # Темы на основе токенов
│   ├── types.ts             # Theme interface
│   ├── light.ts             # Светлая тема
│   ├── dark.ts              # Темная тема
│   ├── context.ts           # Svelte context API
│   └── index.ts
├── utils/                    # Утилиты
│   ├── css-vars.ts          # Генерация CSS переменных
│   └── index.ts
└── index.ts                  # Главный экспорт
```

## Что изменилось

### До

- **6 мест с дублированием**:
  - `types/design-tokens.ts` (TS объекты)
  - `themes/base/types.ts` (TS объекты)
  - `themes/ThemeProvider.svelte` (80+ строк императивного кода)
  - `styles/design-tokens.css` (CSS переменные)
  - `styles/base/base.css` (CSS переменные)
  - `styles/variables.css` (компонент-специфичные)

- **Проблемы**:
  - Разные значения primary цвета в разных файлах
  - Несогласованные naming conventions
  - Ручная синхронизация между TS и CSS
  - 126 строк в ThemeProvider

### После

- **Единый источник**: `design-system/tokens/`
- **Автоматическая генерация**: CSS переменные генерируются из TS объектов
- **51 строка в ThemeProvider** (было 126)
- **Согласованные имена**: `--color-primary-500`, `--spacing-4`, и т.д.

## Использование

### Импорт токенов

```typescript
import { blue, spacing, fontSize } from '@stylist-svelte/design-system/tokens';

// Использование в коде
const buttonPadding = spacing[4]; // '1rem'
const primaryColor = blue[600]; // '#2563eb'
```

### Импорт тем

```typescript
import { lightTheme, darkTheme, themes } from '@stylist-svelte/design-system/themes';

// Получение текущей темы
const theme = themes['light'];
```

### ThemeProvider (упрощенный)

```svelte
<script>
	import { ThemeProvider } from '@stylist-svelte';
</script>

<ThemeProvider initialTheme="light">
	<YourApp />
</ThemeProvider>
```

### Использование CSS переменных

Все CSS переменные автоматически доступны:

```css
.my-component {
	color: var(--color-primary-600);
	padding: var(--spacing-4);
	border-radius: var(--radius-md);
	font-size: var(--font-size-base);
}
```

### Программная работа с темой

```typescript
import { applyThemeToDOM, themes } from '@stylist-svelte';

// Применить тему к элементу
applyThemeToDOM(themes.dark, document.documentElement);

// Или сгенерировать CSS строку
import { generateThemeCSS } from '@stylist-svelte';
const css = generateThemeCSS(themes.light, ':root');
```

## Naming Conventions

### CSS Переменные

- Цвета: `--color-{semantic}-{shade}` → `--color-primary-600`
- Семантические цвета: `--color-{context}-{variant}` → `--color-bg-primary`
- Отступы: `--spacing-{size}` → `--spacing-4`
- Типографика: `--font-{property}-{variant}` → `--font-size-lg`
- Радиусы: `--radius-{size}` → `--radius-md`
- Тени: `--shadow-{size}` → `--shadow-lg`

## Удаленные файлы

- ❌ `types/design-tokens.ts` - заменен на `design-system/tokens/`
- ❌ `themes/base/context.ts` - перемещен в `design-system/themes/context.ts`
- ❌ `themes/base/types.ts` - заменен на `design-system/themes/types.ts`
- ❌ `themes/ThemeProvider.styles.ts` - функционал интегрирован в ThemeProvider
- ❌ `styles/design-tokens.css` - генерируется автоматически
- ❌ `styles/variables.css` - заменен на design-system
- ❌ `styles/base/base.css` - заменен на design-system

## Breaking Changes

### Импорты

Если вы импортировали напрямую из удаленных файлов, обновите импорты:

```typescript
// До
import { colorTokens } from '@stylist-svelte/types/design-tokens';
import { lightTheme } from '@stylist-svelte/themes/base/types';

// После
import { blue, green, red } from '@stylist-svelte/design-system/tokens';
import { lightTheme } from '@stylist-svelte/design-system/themes';
```

### ThemeProvider props

API остался прежним, изменения только внутренние:

```svelte
<ThemeProvider initialTheme="light" class="custom-class">
	<!-- Работает как раньше -->
</ThemeProvider>
```

## Преимущества

1. **Единый источник истины** - все значения в одном месте
2. **Автоматизация** - CSS генерируется из TS
3. **Type-safety** - полная типизация всех токенов
4. **Простота расширения** - добавить новую тему = создать новый объект
5. **Меньше кода** - ThemeProvider сократился с 126 до 51 строки
6. **Согласованность** - нет противоречий между файлами

## Roadmap

### Следующие шаги (опционально)

1. Генерация CSS файлов на build-time
2. Tree-shaking неиспользуемых токенов
3. Дополнительные темы (high-contrast, etc.)
4. CSS-in-JS утилиты для компонентов
5. Автоматическая темизация существующих CSS файлов

## Вопросы?

Если что-то не работает или нужна помощь с миграцией, создайте issue в репозитории.
