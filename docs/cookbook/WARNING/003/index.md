# WARNING-003: Неэкспортируемое объявление

**Серьёзность:** ⚠ Warning  
**Правило ADR:** Запрещено объявление неэкспортируемых `const`, `type`, `interface`, `function`, `class`. Все объявления верхнего уровня должны быть экспортированы.

---

## Что произошло

Скрипт нашёл объявление верхнего уровня без ключевого слова `export`.  
Такое объявление создаёт скрытую зависимость внутри файла, нарушает SRP и делает граф зависимостей непрозрачным.

---

## Примеры

```ts
// ❌ layout/type/struct/layout-extended/layout-extended-props.ts
// Найдено неэкспортируемое объявление: BaseLayoutProps

type BaseLayoutProps = {
  className?: string;
}

export type LayoutExtendedProps = BaseLayoutProps & {
  padding?: string;
}
```

```ts
// ❌ theme/type/struct/theme/theme.ts
// Найдены: StringMap, UnknownMap, ThemeColorGraph, ThemeColors

type StringMap = Record<string, string>;
type UnknownMap = Record<string, unknown>;

export type Theme = {
  colors: ThemeColorGraph;
  ...
}
```

---

## Как исправить

Каждое неэкспортируемое объявление выносится в отдельную папку-семейство в своём кластере.

```
# ✅ layout/type/struct/
  base-layout-props/
    index.ts          ← export type BaseLayoutProps = { className?: string }
  layout-extended-props/
    index.ts          ← import { BaseLayoutProps } from '../base-layout-props';
                         export type LayoutExtendedProps = BaseLayoutProps & { ... }
```

```
# ✅ theme/type/struct/
  string-map/
    index.ts          ← export type StringMap = Record<string, string>
  unknown-map/
    index.ts          ← export type UnknownMap = Record<string, unknown>
  theme-color-graph/
    index.ts          ← export type ThemeColorGraph = { ... }
  theme/
    index.ts          ← import и export type Theme = { colors: ThemeColorGraph; ... }
```

### Когда нет смысла выносить

Если тип служит только как промежуточная переменная в generics и не имеет самостоятельного смысла — рассмотрите встраивание прямо в использование:

```ts
// Вместо:
type Keys = keyof SomeType;
export type Mapped = Record<Keys, string>;

// Можно:
export type Mapped = Record<keyof SomeType, string>;
```

---

## Исключения

Скрипт не проверяет:
- Объявления внутри тела `export class` (поля класса)
- Объявления внутри тела `export function` (локальные переменные)
- Файлы `index.svelte.ts` с паттерном `export default`

---

## Связанные правила

- [ERROR-002](../ERROR-002/) — Множественные экспорты
- [ERROR-004](../ERROR-004/) — Неверный тип экспорта
