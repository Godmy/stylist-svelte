# CLAUDE-002-token-cluster-analysis

**Дата:** 2026-04-17  
**Тема:** Кластеры `const` и `type` — анализ предложения о переходе на `token`

---

## I. Что показывает живой код

Прочитал `theme/const/enum/theme-mode` и `theme/type/enum/theme-mode`:

```ts
// const/enum/theme-mode/index.ts
export const TOKEN_THEME_MODE = ['default', 'light', 'dark'] as const;

// type/enum/theme-mode/index.ts
import { TOKEN_THEME_MODE } from '$stylist/theme/const/enum/theme-mode';
export type TokenThemeMode = (typeof TOKEN_THEME_MODE)[number];
```

Это **пара** — тип прямо выводится из константы. Пользователь это почувствовал правильно. Но картина неоднородная:

| Паттерн                         | Пример                                       | Пара?     |
| ------------------------------- | -------------------------------------------- | --------- |
| `const/enum/*` + `type/enum/*`  | `TOKEN_THEME_MODE` + `TokenThemeMode`        | ✅ Всегда |
| `const/value/*`                 | одиночный скаляр                             | 〰️ Иногда |
| `const/struct/*`                | `THEME_MODE_LIGHT: Theme` — 130 строк данных | ❌ Нет    |
| `const/record/*`, `const/map/*` | lookup-таблицы                               | ❌ Редко  |
| `type/struct/*`                 | `Theme`, `ThemeSchemeDefinition`             | ❌ Нет    |
| `type/contract/*`               | `ThemeSchemeDefinition`, `ThemeStorage`      | ❌ Нет    |

Вывод: **пары существуют только для `enum` (и иногда `value`)**. Остальные `const` и `type` — самостоятельные сущности без партнёра.

---

## II. Почему `index.ts` + `index.d.ts` не работает так, как ожидается

Это принципиально важный технический момент.

В TypeScript правило однозначное: **при наличии `index.ts` компилятор игнорирует `index.d.ts` в той же папке**. `.d.ts` файлы в исходниках предназначены для одного сценария — описывать типы для уже скомпилированного `.js` (внешние библиотеки без TypeScript). В исходном коде проекта они теряют смысл.

```
token/enum/theme-mode/
├── index.ts     ← TypeScript видит это
└── index.d.ts   ← TypeScript игнорирует (есть .ts)
```

Результат: тип из `index.d.ts` недоступен при импорте. Эффект — нулевой.

### Что реально даёт выигрыш при сборке

Выигрыш от стирания типов TypeScript **уже есть** — независимо от расположения типов. Весь кластер `type/**` при сборке даёт `0 байт` в output JS. Это не нужно дополнительно настраивать — Vite + TypeScript с `verbatimModuleSyntax` (или `isolatedModules`) делают это автоматически.

```ts
import type { TokenThemeMode } from '$stylist/theme/type/enum/theme-mode';
//     ^^^^
// Эта строка полностью исчезает из output. Уже сейчас.
```

Итог: бандл уже правильно упакован. Переход на `.d.ts` не даст дополнительного выигрыша.

---

## III. Сильная часть идеи: что стоит взять

Предложение `token` как кластера интуитивно верное для **конкретного подмножества** сущностей.

В дизайн-системах **токен** — это пара `значение + тип`. В коде это выглядит как:

```ts
// Один файл, два экспорта — они семантически неразделимы
export const TOKEN_THEME_MODE = ['default', 'light', 'dark'] as const;
export type TokenThemeMode = (typeof TOKEN_THEME_MODE)[number];
```

Имена уже совпадают: `TOKEN_THEME_MODE` (const) и `TokenThemeMode` (type) — один корень `ThemeMode`, один префикс `Token`. Код сам говорит, что это одна сущность.

---

## IV. Анализ: что получится при слиянии

### Вариант A: `token` вместо `const` + `type`

```
token/enum/theme-mode/index.ts   ← export const + export type (два экспорта)
token/struct/theme-mode-light/index.ts  ← только const (нет type-пары)
token/struct/theme-scheme-definition/index.ts  ← только type (нет const-пары)
```

**Проблема:** кластер `token` вынужден содержать три разных ситуации. Правило "один файл — одна роль" размывается. Orphan-сущности (const без type и type без const) ломают идею.

### Вариант B: `token` только для пар, `const` и `type` остаются для orphans

```
token/enum/theme-mode/index.ts   ← const + type (всегда пара)
const/struct/theme-mode-light/index.ts  ← большие данные без type-пары
type/struct/theme/index.ts  ← чистые структурные типы
```

Три кластера вместо двух — усложнение.

### Вариант C: разделить по природе, не по языку

Посмотреть на сущности иначе:

| Природа                                 | Текущий кластер                              | Примеры                                  |
| --------------------------------------- | -------------------------------------------- | ---------------------------------------- |
| Design token (пара value + type)        | `const/enum` + `type/enum`                   | `TOKEN_THEME_MODE` / `TokenThemeMode`    |
| Данные (чистые данные, большие объекты) | `const/struct`, `const/record`, `const/map`  | `THEME_MODE_LIGHT`, `COLORS_SCALES_BLUE` |
| Структурный тип (чистая типизация)      | `type/struct`, `type/contract`, `type/alias` | `Theme`, `ThemeSchemeDefinition`         |

Это три реально разные вещи. Текущие кластеры `const` и `type` объединяют их не по природе, а по языковой форме.

---

## V. Предложение

### Сохранить `const` и `type`, но ввести конвенцию токен-пар

Вместо переименования кластеров — зафиксировать правило:

> Если в `const/enum/<family>` или `const/value/<family>` есть значение, из которого выводится тип — соответствующий `type/enum/<family>` с тем же именем семейства **обязателен** и является частью того же токена.

И разрешить в `const/enum/<family>/index.ts` экспортировать обе сущности сразу:

```ts
// Допустимо для enum-токенов: единственный файл содержит неразделимую пару
export const TOKEN_THEME_MODE = ['default', 'light', 'dark'] as const;
export type TokenThemeMode = (typeof TOKEN_THEME_MODE)[number];
```

Это убирает необходимость в `type/enum/` целиком — все `type/enum/*` перемещаются в `const/enum/*` как второй экспорт того же файла. Исключение из правила "один экспорт" обосновано: `const` и `type` — не две сущности, а два аспекта одного токена.

`type/struct/*`, `type/contract/*`, `type/alias/*` — остаются в `type`, потому что у них нет const-пары.

### Итоговая структура

```
const/
├── enum/theme-mode/      → const TOKEN_THEME_MODE + type TokenThemeMode  (пара)
├── enum/theme-scheme/    → const TOKEN_THEME_SCHEME + type TokenThemeScheme (пара)
├── value/default-width/  → export const DEFAULT_WIDTH (одиночный скаляр)
├── struct/theme-mode-light/ → большие данные (без type-пары)
├── record/theme-mode/    → lookup-таблица
└── map/color/            → словарь

type/
├── struct/theme/         → чистый структурный тип
├── struct/color-token/   → то же
├── contract/theme-scheme-definition/ → составной тип
└── alias/callback/       → псевдоним типа
```

**Кластер `const` становится кластером токенов и данных.  
Кластер `type` становится кластером чистой типизации.**

---

## VI. Что это даёт реально

1. **Меньше файлов**: `type/enum/**` (весь подкластер) мигрирует в соответствующие `const/enum/**`
2. **Один импорт вместо двух**: `import { TOKEN_THEME_MODE, type TokenThemeMode }` из одного пути
3. **Явная семантика**: `const/enum/*` = токен (пара), `const/struct/*` = данные, `type/*` = чистая типизация
4. **Нет нарушения Assembly Direction**: `data → const → type → interface` — порядок сохраняется, просто `type/enum` фактически исчезает
5. **Бандл**: не хуже и не лучше текущего — типы стираются в любом случае

---

## VII. Что НЕ стоит делать

- Не вводить `.d.ts` в исходниках — TypeScript их игнорирует при наличии `.ts`
- Не создавать кластер `token` — он не решает проблему orphan-сущностей и усложняет модель
- Не разрешать `export type` в `const/struct/*` — там нет type-пар, правило не применяется

---

## VIII. Вопрос к владельцу

Предложение: **разрешить двойной экспорт (const + type) в `const/enum/<family>/index.ts`** и **упразднить `type/enum/` как подкластер** путём миграции всех type/enum в const/enum.

До принятия этого решения — нужна инвентаризация всех `type/enum/**` файлов и проверка: все ли они выводятся из const через `typeof`.
