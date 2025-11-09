# Атомы (Atoms)

## Обзор
Каталог `stylist-svelte/src/lib/components/atoms` содержит примитивы, из которых собираются молекулы и организмы. После реорганизации структура стала пятиуровневой:

1. `controls/` — интерактивные элементы (кнопки, переключатели и т.д.).
2. `input/` — базовые поля ввода и их вспомогательные части.
3. `feedback/` — состояния загрузки, прогресс и процессы.
4. `media/` — графика, аватары, иконки.
5. `typography/` — текстовые и декоративные элементы (включая анимации/индикаторы).

Каждый раздел имеет собственный `index.ts` и подкаталоги; stories хранятся рядом с компонентами. Ниже приведены подробности.

---

## Controls
`atoms/controls` делится на пять подпапок:

- **buttons/** — `Button`, `IconButton`, `SplitButton`, `CloseButton`.
- **selectors/** — `Select`, `ColorSwatch` и прочие выпадающие списки.
- **sliders/** — `RangeSlider`, `SliderTick` (вспомогательная шкала).
- **toggles/** — `Checkbox`, `Radio`, `Switch`, `Toggle`.
- **overlays/** — `SimpleTooltip` и другие лёгкие оверлеи (если появятся).

Такое деление упрощает поиск нужного примитива и даёт точные импорты, например:
```ts
import { Button, IconButton } from '@stylist/atoms/controls/buttons';
```

---

## Input
`atoms/input` теперь структурирован следующим образом:

- **base/** — базовые поля (`Input`, `Textarea`).
- **helpers/** — `FormHelperText`, `FormErrorMessage`, `CharacterCount`, `PinInputDigit`.
- **specialized/** — поля с дополнительной логикой (например, `EmailInput`).

Это помогает быстро расширять линейку полей, добавляя новые файлы в нужную подпапку и автоматически реэкспортируя их через общий `index.ts`.

---

## Feedback
Ответственных за состояние компонентов теперь три подпапки:

- **placeholders/** — все skeleton-состояния (`Skeleton`, `SkeletonText`, `TableSkeleton`).
- **process/** — процессы/ожидание (`Spinner`).
- **progress/** — индикаторы прогресса (`ProgressBar`, `ProgressCircle`), плюс вложенная папка `progress/steps/` для `StepIcon` и `StepConnector`.

---

## Media
`atoms/media` хранит визуальные аватары и обёртки: `Avatar`, `Image`, `Icon`, `IconWrapper`, `CountryFlag`, `Favicon`. Все они экспортируются через единый `index.ts`.

---

## Typography
Текстовые атомы разбиты на несколько тематических подпапок:

- **animation/** — эффект `NumberFlow` (цифровая анимация).
- **block/** — блочные элементы (`Blockquote`).
- **elements/** — бейджи, метки (`Badge`, `Chip`, `Label`, `Tag`).
- **indicators/** — `CountBadge`, `StatusIndicator` и т.д.
- **inline/** — `Link`, `InlineCode`, `Abbr`, `Strikethrough`, `Highlight` и другие.
- **tabs/**, **accordion/** — декоративные индикаторы (`TabIndicator`, `AccordionIcon`).
- **text/** — базовые единицы текста (`Heading`, `Paragraph`, `Text`, `Small`).

Такое дробление позволяет поддерживать иконки/индикаторы рядом с их UX-контекстом, не смешивая их с контролами.

---

## Импорт и автогенерация
Корневой `atoms/index.ts` просто реэкспортирует все подпапки:
```ts
export * from './controls';
export * from './input';
export * from './feedback';
export * from './media';
export * from './typography';
```

Каждая папка имеет свой `index.ts`, который генерируется скриптом (`tools/generate-atom-index.mjs`). Это гарантирует, что добавление нового файла автоматически делает его доступным потребителям пакета.

---

## Правила добавления атомов
1. Выберите подходящую подпапку (например, новая иконка → `typography/indicators`).
2. Создайте компонент и story рядом друг с другом (`Component.svelte` + `Component.story.svelte`).
3. Запустите генератор индексов или добавьте экспорт вручную, если скрипт отсутствует.
4. Если компонент выходит за рамки атома (например, `ColorPicker` с popover), рассмотрите уровень молекулы.

При необходимости новых категорий придерживайтесь существующего паттерна: папка → `index.ts` → README с описанием.
