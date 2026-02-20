# План доработки дизайн-системы для библиотеки stylist-svelte

## Введение

В результате анализа архитектуры дизайн-системы выявлены ключевые компоненты, которые требуют доработки. В данном документе представлен план для распределения работы между 9 потоками разработки.

## Архитектура дизайн-системы

Дизайн-система состоит из следующих ключевых частей:

1. **tokens** - определяет базовые значения (варианты, размеры, цвета и т.д.)
2. **props** - определяет типы пропсов для компонентов
3. **classes** - определяет CSS-классы для различных состояний
4. **styles** - содержит стилевые менеджеры для компонентов
5. **models** - содержит логику управления состоянием компонентов
6. **state** - определяет пресеты и значения по умолчанию
7. **playground** - содержит компонент Story для демонстрации

## Структура компонента в дизайн-системе

Каждый компонент в дизайн-системе должен включать:

1. **Файл в tokens** (при необходимости) - определяет специфичные для компонента токены
2. **Файл в props** - определяет типы пропсов
3. **Файл в classes** (при необходимости) - определяет CSS-классы
4. **Файл в styles** - содержит стилевой менеджер
5. **Файл в models** - содержит модель состояния
6. **Файл в state** - определяет пресеты и значения по умолчанию
7. **Story-файл** - для демонстрации в playground

## Потоки разработки

### Поток 1: Атомарные компоненты - Controls (Buttons, Icons, etc.)
**Каталоги:**
- `src/lib/components/atoms/interaction/controls/`

**Задачи:**
- Убедиться, что каждый компонент имеет все необходимые файлы в дизайн-системе
- Проверить соответствие пропсов, стилей и состояний
- Обновить story-файлы для интерактивности

**Компоненты:**
- Buttons (button, icon-button, close-button, copy-button, page-button, split-button)
- Icons (icon, icon-chevron, icon-circle, icon-wrapper)
- Toggles (checkbox, radio, switch, toggle, advanced-toggle)

### Поток 2: Атомарные компоненты - Inputs
**Каталоги:**
- `src/lib/components/atoms/interaction/input/`

**Задачи:**
- Убедиться, что каждый компонент имеет все необходимые файлы в дизайн-системе
- Проверить соответствие пропсов, стилей и состояний
- Обновить story-файлы для интерактивности

**Компоненты:**
- Input fields (input-text, input-password, input-email, input-pin-digit, input-addon)
- Number inputs (number-input, phone-number-input)
- Special inputs (file-input, advanced-input)

### Поток 3: Атомарные компоненты - Data Display
**Каталоги:**
- `src/lib/components/atoms/information/data-display/`

**Задачи:**
- Убедиться, что каждый компонент имеет все необходимые файлы в дизайн-системе
- Проверить соответствие пропсов, стилей и состояний
- Обновить story-файлы для интерактивности

**Компоненты:**
- Charts (chart-pie, bar-chart, line-chart, scatter-plot, heatmap)
- Display elements (color-swatch, animated-number, number-flow, npm-badge)

### Поток 4: Атомарные компоненты - Typography & Media
**Каталоги:**
- `src/lib/components/atoms/information/typography/`
- `src/lib/components/atoms/information/media/`

**Задачи:**
- Убедиться, что каждый компонент имеет все необходимые файлы в дизайн-системе
- Проверить соответствие пропсов, стилей и состояний
- Обновить story-файлы для интерактивности

**Компоненты:**
- Typography (text, heading, paragraph, strong, em, link, badge, code-block)
- Media (avatar, image, icon, country-flag, favicon)

### Поток 5: Атомарные компоненты - Layout & Navigation
**Каталоги:**
- `src/lib/components/atoms/architecture/layout/`
- `src/lib/components/atoms/architecture/navigation/`

**Задачи:**
- Убедиться, что каждый компонент имеет все необходимые файлы в дизайн-системе
- Проверить соответствие пропсов, стилей и состояний
- Обновить story-файлы для интерактивности

**Компоненты:**
- Layout (container, divider, spacer, aspect-ratio, grid-layout)
- Navigation (process-step, permission-gate)

### Поток 6: Молекулярные компоненты - Forms & Controls
**Каталоги:**
- `src/lib/components/molecules/interaction/controls/`

**Задачи:**
- Убедиться, что каждый компонент имеет все необходимые файлы в дизайн-системе
- Проверить соответствие пропсов, стилей и состояний
- Обновить story-файлы для интерактивности

**Компоненты:**
- Complex controls (dropdown-menu, accordion, tabs, sliders, range-slider)
- Form elements (checkbox-group, radio-group, multi-select, selectors)

### Поток 7: Молекулярные компоненты - Cards & Data Display
**Каталоги:**
- `src/lib/components/molecules/information/cards/`
- `src/lib/components/molecules/information/data-display/`

**Задачи:**
- Убедиться, что каждый компонент имеет все необходимые файлы в дизайн-системе
- Проверить соответствие пропсов, стилей и состояний
- Обновить story-файлы для интерактивности

**Компоненты:**
- Cards (base-card, article-card, link-card, expandable-card, alert-card)
- Data display (data-table, charts, analytics components)

### Поток 8: Молекулярные компоненты - Commerce & Communication
**Каталоги:**
- `src/lib/components/molecules/commerce/`
- `src/lib/components/molecules/communication/`

**Задачи:**
- Убедиться, что каждый компонент имеет все необходимые файлы в дизайн-системе
- Проверить соответствие пропсов, стилей и состояний
- Обновить story-файлы для интерактивности

**Компоненты:**
- Commerce (product components, wishlist, pricing)
- Communication (chat components, notifications)

### Поток 9: Организменные компоненты - Layout & Complex UI
**Каталоги:**
- `src/lib/components/organisms/`

**Задачи:**
- Убедиться, что каждый компонент имеет все необходимые файлы в дизайн-системе
- Проверить соответствие пропсов, стилей и состояний
- Обновить story-файлы для интерактивности

**Компоненты:**
- Layout (sidebar, pagination, page-header, drawer)
- Complex UI (modals, dialogs, forms, dashboards)

## Общие требования для всех потоков

### Для каждого компонента необходимо:

#### 1. Файл в props
- [ ] Определить интерфейс пропсов
- [ ] Наследовать от базовых типов (Props, IStyleable и т.д.)
- [ ] Добавить документацию к каждому пропсу

#### 2. Файл в styles
- [ ] Создать StyleManager с методами для получения классов
- [ ] Обеспечить поддержку всех вариантов и размеров
- [ ] Добавить методы для различных состояний компонента

#### 3. Файл в models
- [ ] Создать функцию createState для управления состоянием
- [ ] Использовать пресеты из state
- [ ] Обеспечить реактивность с использованием runes

#### 4. Файл в state
- [ ] Определить пресет с вариантами и размерами
- [ ] Установить значения по умолчанию
- [ ] Обеспечить совместимость с токенами

#### 5. Story-файл
- [ ] Добавить интерактивные элементы управления
- [ ] Показать все варианты и размеры
- [ ] Добавить примеры реальных сценариев использования
- [ ] Использовать компонент Story из playground

## Минимальный эталонный компонент

Для всех потоков использовать Button как эталон:

**Файлы:**
1. `src/lib/components/atoms/interaction/controls/buttons/button/index.svelte` - сам компонент
2. `src/lib/components/atoms/interaction/controls/buttons/button/index.ts` - экспорт
3. `src/lib/components/atoms/interaction/controls/buttons/button/index.story.svelte` - демонстрация
4. `src/lib/design-system/props/button.ts` - типы пропсов
5. `src/lib/design-system/styles/button.ts` - стилевой менеджер
6. `src/lib/design-system/models/button.svelte.ts` - модель состояния
7. `src/lib/design-system/state/button.ts` - пресеты и значения по умолчанию

## Проверка качества

После доработки каждого компонента необходимо проверить:

- [ ] Все файлы существуют и правильно экспортируются
- [ ] Типы пропсов корректно определены
- [ ] Стилевой менеджер поддерживает все варианты и размеры
- [ ] Модель состояния корректно обрабатывает все пропсы
- [ ] Story-файл интерактивен и показывает все возможности
- [ ] Компонент корректно работает с ThemeProvider
- [ ] Нет ошибок в консоли при использовании

## Ресурсы

- Пример эталонного компонента: Button
- Файл Story: `src/lib/design-system/playground/Story.svelte`
- Общие токены: `src/lib/design-system/tokens/variants.ts`, `sizes.ts`
- Общие классы: `src/lib/design-system/classes/interaction.ts`
- Общие пресеты: `src/lib/design-system/state/preset.ts`