# Обзор папки `stylist-svelte/scripts`

Папка `scripts` — это служебный слой для анализа и автогенерации артефактов библиотеки.  
Основные выходы: файлы в `src/lib/json` и реестр иконок в `src/lib/svg/icons`.

## Откуда и как запускается

1. Через `yarn`-команды в `package.json`:
- `analyze`
- `dep-tree`
- `dep-short`
- `token-audit`
- `contracts-analysis`
- `contracts-update`
- `remove-duplicates`

2. Во время сборки:
- `build` вызывает `yarn analyze`, затем `svelte-package` и `publint`.

3. Главный вход:
- `yarn analyze` -> `tsx scripts/orchestrator.ts`.
- Оркестратор запускает 6 анализаторов, затем генерацию реестра иконок, потом дополнительные скрипты:
  - `dependency-tree.ts`
  - `dependency-short.ts`
  - `token-audit.ts`

4. CI:
- В текущем репозитории не найдено `.github/workflows`, явный автозапуск в CI не зафиксирован.

## Что делает каждый скрипт

1. `scripts/orchestrator.ts`
- Главный пайплайн анализа.
- Запускает `analyzers/analyze-*.ts`.
- Сохраняет `src/lib/json/library-schema.json`.
- Запускает генерацию SVG-реестра и дополнительные проверки.

2. `scripts/analyzers/analyze-tokens.ts`
- Анализ `src/lib/design-system/tokens`.
- Выход: `src/lib/json/tokens.json` (+ упрощенный вариант).

3. `scripts/analyzers/analyze-contracts.ts`
- Анализ `src/lib/design-system/contracts`.
- Выход: `src/lib/json/contracts.json`.

4. `scripts/analyzers/analyze-models.ts`
- Анализ `src/lib/design-system/models`.
- Выход: `src/lib/json/models.json`.

5. `scripts/analyzers/analyze-styles.ts`
- Анализ `src/lib/design-system/styles`.
- Выход: `src/lib/json/styles.json`.

6. `scripts/analyzers/analyze-components.ts`
- Анализ `src/lib/components`.
- Выход: `src/lib/json/components.json`.

7. `scripts/analyzers/analyze-icons.ts`
- Анализ `src/lib/svg`.
- Выход: `src/lib/json/icons.json`.

8. `scripts/analyzers/parser.ts`
- Общие утилиты парсинга TypeScript/Svelte:
  - exports
  - imports
  - props
- Используется анализаторами.

9. `scripts/dependency-tree.ts`
- Строит полное дерево зависимостей токенов и контрактов.
- Выход:
  - `src/lib/json/dependency-tree.json`
  - `src/lib/json/dependency-tree.txt`
- Требует предварительно `yarn analyze`.

10. `scripts/dependency-short.ts`
- Строит компактное дерево зависимостей.
- Выход: `src/lib/json/dependency-short.json`.
- Требует предварительно `yarn analyze`.

11. `scripts/token-audit.ts`
- Аудит использования токенов в контрактах.
- Находит потенциальные несоответствия и неиспользуемые токены.
- Выход:
  - `src/lib/json/token-audit.json`
  - `src/lib/json/token-audit.txt`
- Требует предварительно `yarn analyze`.

12. `scripts/contracts-analysis.ts`
- Глубокий анализ контрактов на предмет токенизации.
- Выход: `src/lib/json/contracts-analysis.json`.

13. `scripts/contracts-updater.ts`
- Автоматические правки контрактов:
  - замена строковых/локальных типов на токены
  - обновление импортов
- Пишет обновленные `.ts` файлы контрактов и отчет в JSON.

14. `scripts/remove-duplicates.ts`
- Удаляет дублирующие alias-типы в контрактах (например, локальные `*Size` в пользу `ComponentSize`).
- Выход: `src/lib/json/remove-duplicates-report.json`.

15. `scripts/svg/generate-registry.ts`
- Генерация реестра SVG-иконок.
- Выход:
  - `src/lib/json/icon-registry.json`
  - `src/lib/svg/icons/icon-registry.ts`

## Практический безопасный порядок запуска

1. `yarn analyze`
2. `yarn token-audit`
3. `yarn dep-tree` или `yarn dep-short` (при необходимости)
4. `yarn contracts-analysis` (при рефакторинге контрактов)
5. `yarn contracts-update` и `yarn remove-duplicates` только когда вы осознанно готовы к автоизменениям исходников.
