# Stylist Design System

Design System в `src/lib/design-system` - это контрактный слой библиотеки компонентов Stylist.
Он отвечает за единые правила типизации, токены, темы, классы, пресеты и вычисление состояния компонентов.

Главная цель: чтобы компоненты были предсказуемыми, совместимыми между собой и расширялись без хаотичных правок.

## Для кого это

- Для разработчиков компонентов: берете готовые токены, типы пропсов и class/preset-паттерны вместо ручной сборки.
- Для разработчиков продуктовых экранов: используете стабильный API (`$stylist/design-system`) без знания внутренней кухни.
- Для поддержки и масштабирования: изменения делаются по доменам, а не в одном монолите.

## Что внутри

```text
design-system/
├─ classes/      # Карты классов, пресеты, style-managers, class builders
├─ factory/      # Фабрики пресетов (architecture/information/interaction)
├─ playground/   # Story-слой и demo-точки
├─ props/        # Типы пропсов, разбитые по доменам компонентов
├─ state/        # Вычисление runtime-состояния (classes + attrs)
├─ themes/       # Тема, типы темы, light/dark, Svelte context
├─ tokens/       # Дизайн-токены (цвета, размеры, spacing, variants и т.д.)
├─ utils/        # Утилиты (css vars, class merge, input helpers)
└─ index.ts      # Главный публичный barrel
```

## Архитектурная модель

Поток данных и ответственности:

1. `tokens` задают атомарные значения и словарь допустимых вариантов.
2. `themes` собирают токены в согласованные наборы (light/dark).
3. `classes` описывают как вариант/размер/состояние превращаются в CSS-классы.
4. `factory` создает/кастомизирует пресеты для групп компонентов.
5. `props` задают строгий контракт входных параметров.
6. `state` вычисляет итоговый runtime state (`classes`, `attrs`, disabled/loading/aria).
7. `utils` применяют тему и CSS variables к DOM.

Итог: любой компонент собирается по одному паттерну и ведет себя единообразно.

## Публичный API

Основной импорт:

```ts
import {
  // classes
  BUTTON_PRESET,
  getLinkClasses,

  // state
  createState,

  // tokens
  spacing,
  COMPONENT_SIZE_SCALE,

  // themes
  lightTheme,
  darkTheme,
  setThemeContext,

  // utils
  applyThemeToDOM,
  generateThemeCSS
} from '$stylist/design-system';

import type {
  ButtonElementProps,
  LinkProps,
  Theme,
  SelectProps
} from '$stylist/design-system';
```

## Как это использовать на практике

### 1) Типизировать вход компонента

Используйте доменные типы из `props`, а не ad-hoc интерфейсы в компоненте.

```ts
import type { ButtonElementProps } from '$stylist/design-system';

export type Props = ButtonElementProps;
```

### 2) Получить классы по правилам системы

```ts
import { getLinkClasses } from '$stylist/design-system';

const classes = getLinkClasses(
  'primary', // variant
  'md',      // size
  false,     // disabled
  true,      // underline
  'w-fit'    // extra className
);
```

### 3) Вычислить runtime state

```ts
import { BUTTON_PRESET, createState } from '$stylist/design-system';

const state = createState(BUTTON_PRESET, {
  variant: 'primary',
  size: 'md',
  loading: false,
  disabled: false,
  class: 'w-full'
});

// state.classes -> итоговая строка классов
// state.attrs   -> aria/disabled-атрибуты
```

### 4) Применить тему

```ts
import { darkTheme, applyThemeToDOM } from '$stylist/design-system';

applyThemeToDOM(darkTheme);
```

Для SSR/статической генерации:

```ts
import { lightTheme, generateThemeCSS } from '$stylist/design-system';

const css = generateThemeCSS(lightTheme, ':root');
```

## Что сделано в системе и почему это важно

### 1) `props` организованы по доменным модулям

Типы пропсов распределены по предметным областям:

- `props/button.ts`, `props/input.ts`, `props/tabs.ts`, `props/toggles.ts`
- `props/layout.ts`, `props/table.ts`, `props/feedback.ts`, `props/chat.ts`
- `props/common.ts` для базовых контрактов
- дополнительные домены: `accordion`, `chart`, `image`, `icons`, `interaction`, `indicators` и др.

Практическая ценность:

- проще находить нужные типы;
- ниже вероятность конфликтов при изменениях;
- изменения локализуются в домене;
- ревью и сопровождение становятся быстрее.

### 2) Единая точка потребления API сохранена

Внешний контракт остается единым через `$stylist/design-system` и `props/index.ts`.

Практическая ценность:

- потребителям не нужно знать внутреннюю структуру;
- импорт остается стабильным;
- архитектура может развиваться без усложнения входа в систему.

### 3) Система построена как слоистая модель ответственности

Фактическое разделение обязанностей:

- `tokens`: атомарные значения и типовые шкалы;
- `themes`: композиция токенов в согласованные темы;
- `classes`: правила сборки CSS-классов;
- `factory`: создание и расширение пресетов;
- `props`: типовые входные контракты;
- `state`: вычисление runtime-состояния и ARIA-атрибутов;
- `utils`: применение темы и CSS variables в DOM.

Практическая ценность:

- предсказуемое поведение компонентов;
- минимизация дублирования;
- снижение технического долга при росте библиотеки;
- безопасная масштабируемость API.

## Принципы расширения (рекомендуемый workflow)

1. Добавьте или переиспользуйте токены в `tokens/`.
2. Добавьте/уточните типы пропсов в нужном домене `props/`.
3. Добавьте class mapping или preset в `classes/`.
4. Если нужна runtime-нормализация, расширьте `state/`.
5. Экспортируйте наружу через `index.ts` (автогенерация индексов).
6. Проверьте, что потребители получают новый API через `$stylist/design-system`.

## Стабильность и совместимость

- Design System остается основным публичным контрактом библиотеки.
- Внутренние рефакторинги делаются с сохранением внешнего API где возможно.
- При изменении контрактов типов рекомендуется оформлять ADR/заметку миграции.

## Короткий итог

`design-system` - это не просто набор токенов. Это полноценный инфраструктурный слой, который:

- задает единый язык UI;
- типизирует и стандартизирует поведение компонентов;
- уменьшает стоимость масштабирования библиотеки;
- ускоряет разработку за счет повторного использования и предсказуемых паттернов.

