# Stylist-Svelte Documentation

## Overview

Stylist-Svelte — крупная библиотека компонентов для Svelte 5 с акцентом на масштабируемость, производительность и темизацию. Архитектура следует SAMO (SOLID, Atomic Design, Molecular Organization).

## Содержание

1. [Начало работы](#начало-работы)
2. [Архитектура](#архитектура)
3. [Компоненты](#компоненты)
4. [Темизация](#темизация)
5. [Утилиты](#утилиты)
6. [Создание компонентов](#создание-компонентов)
7. [Рекомендации](#рекомендации)

## Начало работы

### Установка

```bash
npm install stylist-svelte
```

### Базовое использование

```svelte
<script>
	import { ThemeProvider, Button } from 'stylist-svelte';
</script>

<ThemeProvider initialTheme="light">
	<Button variant="primary">Hello World</Button>
</ThemeProvider>
```

### Пути импортов

- Корневой импорт: `import { Button } from 'stylist-svelte';`
- Прицельный импорт из атомов: `import { Button } from 'stylist-svelte/components/atoms';`
- Отдельные подпапки доступны через сгенерированные `index.ts` (atoms, molecules, organisms, utils, themes, styles).

## Архитектура

- **SOLID**: компоненты имеют чёткие ответственности и небольшие проп-интерфейсы.
- **Atomic Design**: дерево компонентов делится на atoms → molecules → organisms.
- **Molecular Organization**: сложные блоки собираются из базовых примитивов и стилей.
- **Базовый слой**: ThemeProvider для токенов, style managers в компонентах (например, `Button.styles.ts`), дизайн-токены в `src/lib/styles`, утилиты в `src/lib/utils`.

## Компоненты

Категории в `src/lib/components`:

- **Atoms** — кнопки, поля ввода, индикаторы, иконки, навигация и т.п. (`src/lib/components/atoms`)
- **Molecules** — сложные комбинации (формы, карточки, таблицы, выпадающие меню и пр.) (`src/lib/components/molecules`)
- **Organisms** — крупные блоки (layout, hero, навигационные секции и т.д.) (`src/lib/components/organisms`)

Каждая категория имеет `index.ts` для реэкспорта. Подпапки содержат свои `index.ts`, что позволяет импортировать как весь раздел, так и конкретный компонент.

## Темизация

- Текущие темы: `light`, `dark` (см. `src/lib/themes/types.ts`).
- `ThemeProvider` (`src/lib/themes/ThemeProvider.svelte`) принимает пропсы:
  - `initialTheme?: ThemeName` — стартовая тема, по умолчанию `light`.
  - `class?: string` — дополнительный класс для контейнера.
  - `children` — слот со Snippet.
- При монтировании ThemeProvider записывает CSS-переменные на `document.documentElement` для палитр, текста, фона, границ и spacing.
- Подробности — в `THEMING_SYSTEM.md`.

## Утилиты

Экспортируются из `src/lib/utils`:

- `setCSSVariables`, `getCSSVariable`, `getCurrentTheme`, `toggleTheme`, `supportsTheme`, `isDarkTheme`, `normalizeClassNames`, `mergeStyles` — базовые функции тем и стилизации (`base.ts`).
- `clipboard.ts` — работа с буфером обмена (копирование строк).
- `codeGenerator.ts` — вспомогательные функции генерации кода/подсветки.
- `debounce.ts` — простая обёртка для debounce.

См. `UTILS.md` для подробностей.

## Создание компонентов

1. Выберите уровень (atom/molecule/organism) и подходящую подпапку.
2. Используйте существующие дизайн-токены (`src/lib/styles`) и style manager для вариантов.
3. Экспортируйте компонент через `index.ts` в своей папке.
4. Поддерживайте доступность: aria-атрибуты, фокус, hover/active состояния.
5. Проверяйте, что компонент корректно работает с `ThemeProvider` и CSS-переменными.

## Рекомендации

1. Следуйте Atomic Design — не смешивайте ответственность между уровнями.
2. Используйте ThemeProvider и CSS-переменные вместо хардкода цветов.
3. Нормализуйте классы через `normalizeClassNames`.
4. Поддерживайте клавиатурную навигацию и aria-атрибуты; для интерактивных элементов по умолчанию ставьте `type="button"`.
5. Для состояний загрузки добавляйте `aria-busy` и sr-only текст (пример в кнопке).
6. Держите экспорты актуальными: добавляйте компонент в `index.ts` своей папки.
7. Импортируйте ровно то, что нужно: прицельные пути уменьшают бандл.
