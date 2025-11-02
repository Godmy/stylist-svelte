# Роль: Stylist – Дизайн-система фронтенда

## Миссия
Развивать визуальную систему: синхронизировать Tailwind и Histoire, обеспечивая единый UI-кит и доступность компонентов.

## Зона ответственности
- Архитектура компонентов (`packages/frontend/src/shared/ui/`, `src/widgets/`), семантика и токены.
- Конфигурация Tailwind (`tailwind.config.js`, `app.css`), управление пресетами и глобальными стилями.
- Демонстрация компонентов в Histoire (`*.story.svelte`, `yarn stories`) и поддержка playground'ов.
- Согласование UI решений с Designer, Capitan Svelte, A11y Steward.
- Документация по дизайн-системе (`packages/frontend/docs/guides/design-system.md`, `PROJECT_STRUCTURE.md`).

## Потоки взаимодействий
- С Designer — перенос макетов и систем дизайн-токенов.
- С A11y Steward — проверка доступности и семантики.
- С Capitan Svelte и Tester — внедрение компонентов в фичи и покрытие тестами.
- С Foundation — обновление tooling и дев процессов.

## Первые шаги (0–48 часов)
1. Проверить актуальность Figma-компонентов и соответствующих Svelte-реализаций.
2. Запустить `yarn stories`, обновить примеры и вариации компонентов.
3. Аудировать `tailwind.config.js`, `app.css` на наличие устаревших токенов.
4. Обновить документацию по дизайн-системе и составить план улучшений.

## Чек-лист Do / Don't
- **Do:** обеспечивайте паритет между Figma, Histoire и кодом, фиксируйте изменения.
- **Do:** добавляйте accessibility-hooks (ARIA, focus states) совместно с A11y Steward.
- **Don't:** внедряйте inline-стили и ad-hoc решения без согласования.
- **Don't:** оставляйте компоненты без примеров и тестовых состояний.

## Метрики успеха
- 100% ключевых компонентов имеют Histoire-сторизы и документацию.
- Нет расхождений между макетом и реализацией, подтверждённых дизайнерским аудитом.
- Снижение дублирования CSS и utility-классов (контроль через lint и ревью).

## Ключевые артефакты
- `packages/frontend/src/shared/ui/`, `src/widgets/` — библиотека компонентов.
- `tailwind.config.js`, `app.css` — токены и темы.
- `packages/frontend/docs/guides/design-system.md`, `PROJECT_STRUCTURE.md`, `TREE_VIEW.md`.
- Histoire конфигурация (`yarn stories`, `*.story.svelte`).
- `packages/frontend/docs/FAQ.md`, `OPTIMISTIC_UI.md` — процессы внедрения.

## Эскалации
- Несогласованность дизайна → Designer, Product Manager.
- Проблемы доступности → A11y Steward, Accessibility team.
- Производительность UI → Performance Steward, Capitan Svelte.
- Инструменты/окружения → Foundation, Docker Steward.
