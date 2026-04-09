# ADR M-0001: Архитектура исходного кода — домен / кластер / соединение / семейство

**Status:** Accepted  
**Date:** 2026-04-05

---

## Контекст

Библиотека содержит тысячи компонентных единиц. Без формальной таксономии путь к любой сущности становится произвольным, автоматизация невозможна, а границы доменов размываются.

---

## Решение

Исходный код организован по четырёхуровневой адресации:

```
src/lib/<domain>/<cluster>/<joint>/<family>/index.ts
```

### Уровень 1 — Домен `<domain>`

Предметная область: `architecture`, `calendar`, `canvas`, `chart`, `color`, `commerce`, `control`, `dashboard`, `development`, `file`, `form`, `geo`, `information`, `input`, `interaction`, `layout`, `localization`, `management`, `marketing`, `media`, `navigation`, `notification`, `product`, `science`, `social`, `theme`, `typography`, …

### Уровень 2 — Кластер `<cluster>`

Тип экспортируемых сущностей. Определяет единственный допустимый тип `export` внутри папки.

| Кластер     | Допустимый экспорт     |
|-------------|------------------------|
| `const`     | `export const`         |
| `type`      | `export type`          |
| `interface` | `export interface`     |
| `class`     | `export class`         |
| `function`  | `export function`      |
| `svelte`    | Svelte-компоненты      |
| `data`      | Вспомогательные данные |

Порядок сборочного конвейера:  
`const` → `type` → `interface` → `class` → `function` → `svelte`

### Уровень 3 — Соединение `<joint>`

Уточняет состав кластера. Перечень закрытый.

| Кластер     | Допустимые соединения                          |
|-------------|------------------------------------------------|
| `const`     | `enum`, `map`, `record`, `struct`              |
| `type`      | `enum`, `map`, `record`, `struct`              |
| `interface` | `proto`, `recipe`, `contract`                  |
| `class`     | `manager`, `object-manager`, `style-manager`   |
| `function`  | `hook`, `script`, `state`                      |
| `svelte`    | `atom`, `molecule`, `organism`                 |
| `data`      | `json`, `shader`, `svg`                        |

### Уровень 4 — Семейство `<family>`

Имя сущности в kebab-case. Может иметь уточнения: `<family-trait>` и в редких случаях `<family-trait-trait>`.

Примеры: `theme`, `theme-consumer`, `theme-provider`, `camera-axis-x`.

---

## Правила файлов

| Тип папки                       | Допустимые файлы                                         |
|---------------------------------|----------------------------------------------------------|
| `atom`, `molecule`, `organism`  | `index.ts`, `index.svelte`, `index.story.svelte`         |
| `state`                         | `index.svelte.ts`, `index.ts`                            |
| Все остальные                   | только `index.ts`                                        |

- `index.ts` рядом с подпапками или `index.svelte` — это **баррель** (генерируется автоматически, не редактировать вручную).
- Все остальные `index.ts` содержат ровно **один экспорт**, тип которого задан кластером.

---

## Запреты

| Запрет | Причина |
|--------|---------|
| Редактировать баррели вручную | После ручного редактирования содержимое уходит в `PROTECTED`-секцию с дублями |
| Реэкспорт (`export { } from`) | Размывает границы доменов и мешает связности |
| Неэкспортируемые объявления | Создают скрытые зависимости внутри файла |
| Более одного экспорта на файл | Нарушение SRP |

---

## Пример: состав кнопки

Кнопка — это мерж нескольких рецептов из разных доменов:

| Адрес | Назначение |
|-------|------------|
| `architecture/interface/recipe/node` | Архитектурный узел сцены |
| `layout/interface/recipe/pill` | Layout-пилюля |
| `information/interface/recipe/background` | Фон |
| `information/interface/recipe/border` | Граница |
| `interaction/interface/recipe/click` | Обработка клика |
| `typography/interface/recipe/label` | Текст |
| `theme/interface/recipe/theme-light` | Тема (Material Design 3) |

---

## Проверка по кодовой базе

- `src/lib` содержит только доменные папки (analytics, architecture, calendar, …).
- Скрипт аудита `stylist/audit/cli.py` проверяет соответствие этим правилам автоматически.
- Книга рецептов ошибок: `docs/cookbook/`.

---

## Последствия

- Автоматическая индексация через баррели без ручного сопровождения.
- Любой путь в кодовой базе читается как архитектурный адрес.
- Аудит структуры поддаётся полной автоматизации.
