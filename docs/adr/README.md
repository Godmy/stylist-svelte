# ADR Index (Отсортировано по Важности)

Этот индекс отражает только архитектурные решения, проверенные на соответствие текущей кодовой базе.

## Критичность A (платформенные решения)
1. `0001-use-svelte-5-runes.md` — реактивная модель проекта.
2. `0002-use-tailwind-css.md` — базовая стратегия стилизации.
3. `0003-component-architecture.md` — общая таксономия компонентов.
4. `0005-design-system-contracts.md` — контракты и типы через design-system.

## Критичность B (архитектура разработки и интеграции)
1. `0004-playground-system.md` — встроенная playground-платформа.
2. `0006-playground-story-architecture.md` — co-located stories.
3. `0009-package-manager-yarn.md` — стандарт управления зависимостями.

## Критичность C (доменные специализированные решения)
1. `0007-form-handling-architecture.md` — архитектура form-handling.
2. `0008-table-component-architecture.md` — композиционная архитектура таблиц.

## Что было вынесено из ADR
Документы с прикладными инструкциями, миграционными заметками и troubleshooting перенесены в:
- `docs/cookbooks/adr-moved/`

Перенесены файлы:
- `0006-tailwind-postcss-implementation.md`
- `0008-new-atoms-switch-radio-slider.md`
- `0008-slot-usage-guidelines.md`
- `0008-utility-functions-implementation.md`
- `0009-new-molecules-suite.md`
- `0011-error-types-and-solutions.md`
- `0012-component-library-error-fixes.md`
- `0012-error-types-and-solutions.md`
- `0013-story-svelte-formatting-guidelines.md`

## Принцип разделения
- `docs/adr` — только долгоживущие архитектурные решения.
- `docs/cookbooks` — практические рецепты, миграционные шаги, гайдлайны и устранение ошибок.

## Принцип структуры компонентов
Для компонентной архитектуры действует фиксированный порядок:
1. Atomic Design деление (`atoms` -> `molecules` -> `organisms`).
2. Функциональная таксономия внутри уровня (`architecture` -> `information` -> `interaction`).
3. Доменная кластеризация внутри функциональной таксономии (`controls`, `chat`, `media` и т.п.).
