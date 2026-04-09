# ERROR-004: Неверный тип экспорта

**Серьёзность:** ❌ Error  
**Правило ADR:** Кластер определяет допустимый тип экспорта. Файл должен экспортировать именно то, что предписывает его кластер.

| Кластер     | Ожидаемый тип      |
|-------------|--------------------|
| `const`     | `export const`     |
| `type`      | `export type`      |
| `interface` | `export interface` |
| `class`     | `export class`     |
| `function`  | `export function`  |

---

## Что произошло

Файл лежит в кластерной папке одного типа, а экспортирует сущность другого типа.  
Сущность «не там, где её ищут» по архитектурному адресу.

---

## Примеры

```ts
// ❌ Файл лежит в: layout/type/struct/separator/separator-props.ts
// Но содержит:
export interface SeparatorProps { ... }
// Ожидался: export type
```

```ts
// ❌ Файл лежит в: typography/interface/recipe/badge/index.ts
// Но содержит:
export type BadgeRecipe = { ... }
// Ожидался: export interface
```

```ts
// ❌ Файл лежит в: analytics/type/enum/time-range/index.ts
// Но содержит:
export const TimeRange = { ... } as const
// Ожидался: export type
```

---

## Как исправить

Переместить файл в кластер, соответствующий фактическому типу экспорта.

### Таблица перемещения

| Что написано в файле           | Где лежит сейчас             | Куда переместить                                             |
|--------------------------------|------------------------------|--------------------------------------------------------------|
| `export interface X`           | `type/struct/<family>/`      | `interface/recipe/<family>/` или `interface/proto/<family>/` |
| `export type X`                | `interface/recipe/<family>/` | `type/struct/<family>/`                                      |
| `export const X`               | `type/enum/<family>/`        | `const/enum/<family>/`                                       |
| `export type X = Record<K, V>` | `type/map/<family>/`         | `type/record/<family>/`                                      |

### Выбор joint для interface

- `proto` — базовые поведенческие контракты (clickable, hoverable, draggable)
- `recipe` — рецепты сборки компонентов (конкретные Props-интерфейсы)
- `contract` — контракты для внешних потребителей (context, settings)

### Массовый случай — весь домен не в том кластере

Если **все** файлы домена содержат `export type` вместо `export interface` (например, `typography/interface/recipe/*`) — нужно принять решение для домена целиком:

**Вариант А.** Конвертировать `type` → `interface`, если семантика подходит:
```ts
// Было:
export type BadgeRecipe = { label: string }
// Стало:
export interface BadgeRecipe { label: string }
```

**Вариант Б.** Перенести весь домен в `type/struct/`, если интерфейсная семантика не подходит:
```
typography/interface/recipe/badge/ → typography/type/struct/badge/
```

После перемещения обновить все импорты.

---

## Связанные правила

- [ERROR-002](../ERROR-002/) — Множественные экспорты
- [ERROR-003](../ERROR-003/) — Реэкспорт запрещён
