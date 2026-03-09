# Scripts Guide (`stylist-svelte/scripts`)

Папка `scripts` генерирует данные для библиотеки.
Теперь выход разделен на две зоны:

- `src/lib/json/core` — базовые данные, которые нужны для работы/интеграции
- `src/lib/json/reports` — служебные отчеты анализа

## Быстрый запуск

Из `stylist-svelte`:

```bash
yarn json:generate      # полный прогон генерации
yarn dev:with-json      # генерация -> vite dev
```

Из корня монорепы:

```bash
yarn workspace stylist-svelte json:generate
yarn workspace stylist-svelte dev:with-json
```

## Что генерируется

### `src/lib/json/core`

- `tokens.json`, `tokens-simple.json`
- `contracts.json`, `contracts-simple.json`
- `models.json`, `models-simple.json`
- `styles.json`, `styles-simple.json`
- `components.json`, `components-simple.json`
- `icons.json`, `icons-simple.json`
- `library-schema.json`
- `icon-registry.json`

### `src/lib/json/reports`

- `dependency-tree.json`, `dependency-tree.txt`
- `dependency-short.json`
- `token-audit.json`, `token-audit.txt`
- `contracts-analysis.json`

Дополнительно:

- `src/lib/svg/icons/icon-registry.ts` (TS-реестр иконок)

## Карта скриптов

- `orchestrator.ts` — основной pipeline (рекомендуемый entrypoint)
- `analyzers/*` — базовые анализаторы (tokens/contracts/models/styles/components/icons)
- `dependency-tree.ts` — подробное дерево зависимостей
- `dependency-short.ts` — компактное дерево зависимостей
- `token-audit.ts` — аудит использования токенов
- `contracts-analysis.ts` — глубокий анализ контрактов
- `svg/generate-registry.ts` — генерация реестра SVG

## Команды

- `yarn json:generate` (основная)
- `yarn dev:with-json`
- `yarn analyze` (alias полного pipeline)
- `yarn analyze:tokens`
- `yarn analyze:contracts`
- `yarn analyze:models`
- `yarn analyze:styles`
- `yarn analyze:components`
- `yarn analyze:icons`
- `yarn dep-tree`
- `yarn dep-short`
- `yarn token-audit`
- `yarn contracts-analysis`

## Рекомендуемый порядок

1. `yarn json:generate`
2. `yarn dev`

или одной командой:

- `yarn dev:with-json`
