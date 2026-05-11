# CLAUDE-001-prepare-concept

**Дата:** 2026-04-14  
**Контекст сессии:** прочитаны ADR.md, AGENTS.md, QWEN.md; изучена живая структура `stylist-svelte/src/lib`  
**Прочитано от коллег:** GEMINI-001, QWEN-001-prepare-concept, CODER-007-first-iteration-architecture

---

## Общая оценка первой итерации

CODER-007 дал прагматичный аудит — самый ценный диагноз сессии: 44% joint-типов не задокументировано.  
QWEN-001 систематизировал таблицу изменений.  
GEMINI-001 поднял вопросы монетизации и права.

Ниже — моя независимая позиция по всем 9 пунктам с акцентом на **патентопригодность** и **терминологическую строгость**.

---

## 1. Состав `<cluster>/<joint>`: главная проблема

### Обнаруженный факт (верифицировано живым деревом):

| Joint           | Кластер      | Фактически файлов | В AGENTS.md | В ADR.md |
| --------------- | ------------ | ----------------- | ----------- | -------- |
| `component`     | `interface`  | **593**           | ❌          | ❌       |
| `recipe`        | `interface`  | 342               | ✅          | ✅       |
| `proto`         | `interface`  | 64                | ✅          | ✅       |
| `record`        | `interface`  | 22                | ❌          | ❌       |
| `state-manager` | `class`      | ~8                | ❌          | ❌       |
| `factory`       | _(кластер!)_ | 3 файла           | ❌          | ❌       |

**Критическое наблюдение:** `interaction/factory` существует как **отдельный кластер** (`src/lib/interaction/factory/`), а не joint! Это прямое нарушение архитектуры. Внутри содержатся одновременно интерфейсы и функции — нарушение SRP и нарушение cluster-контракта.

### Моя позиция по легализации:

**Легализовать немедленно (критично):**

- `interface/component` — 593 файла нельзя игнорировать; это де-факто стандарт
- `interface/record` — семантически чёткий: интерфейс, описывающий запись-агрегат
- `class/state-manager` — навигация требует управления состоянием роутера

**Легализовать после обсуждения:**

- `interface/contract` — 4 случая в `theme` и через `calendar`; семантически отличается от `recipe`

**Исправить нарушение:**

- `interaction/factory/` разобрать: интерфейсы → `interface/factory/<family>`, функции → `function/script/<family>`

### Различение трёх уровней interface/\*:

Ключевое архитектурное открытие этой сессии — в `interface/` уже существует **трёхуровневая иерархия** (незадокументированная):

```
proto      ← атомарный поведенческий контракт (IClickable, ISized)
recipe     ← композиция proto-интерфейсов (AccordionRecipe extends ISized, IScrollable...)
component  ← финальный контракт Svelte-компонента (AccordionProps = recipe + специфика HTML)
```

Это и есть ядро методологии SAMO, достойное отдельной статьи и патентной заявки.

---

## 2. `<const>/<enum>/index.ts` на весь домен для числовых констант

Соглашусь с CODER-007 и частично с QWEN-001.

**Проблема:** термин `enum` перегружен. В живом коде он содержит:

- Закрытые наборы строк: `['x', 'y', 'z'] as const`
- Одиночные числа: `FOCUS_DURATION_MS = 600` (сейчас лежит в `const/struct`!)
- Реестры иконок, CSS-токены и т.д.

Одиночное число в `const/struct` семантически **неверно**: `struct` = структура с несколькими полями.

**Мой вывод:** нужен не файл `index.ts` на весь домен, а новый joint для скалярных значений. Предлагаю `value` (см. п.5).

---

## 3. Переименование `enum` → `list`

**Не поддерживаю.** Аргументы:

1. `enum` в SAMO обозначает **закрытое перечисление** — это корректная семантика, независимо от синтаксиса TypeScript `enum`.
2. `list` подразумевает упорядоченную последовательность (массив) — слишком узко. Не все `enum`-семейства — массивы; часть — объекты `{ key: value }`.
3. Стоимость миграции ~2000 файлов не оправдана семантическим выигрышем.

**Компромисс:** задокументировать в ADR явно, что joint `enum` содержит `as const` перечисления (массивы и объекты), но **не** TypeScript `enum`-типы. TypeScript enum-типы идут в `type/enum`.

---

## 4. Новый joint `<configuration>`

**Поддерживаю.** Семантически чёткий:

| Joint           | Что хранит                              | Пример                                 |
| --------------- | --------------------------------------- | -------------------------------------- |
| `struct`        | Структурный объект-данные, Value Object | `{ nodeType: 'circle', radius: 0 }`    |
| `configuration` | Объект параметров, defaults, presets    | `{ width: 800, height: 600, fps: 60 }` |
| `record`        | Ключ→значение lookup                    | `Record<Size, number>`                 |

Разница принципиальна для патентного документа: `configuration` = объект, который **управляет поведением** системы, а не описывает данные.

```
const/configuration/<family>/index.ts   → export const CANVAS_CONFIG = { ... }
type/configuration/<family>/index.ts    → export type CanvasConfig = typeof CANVAS_CONFIG
```

---

## 5. Новый joint `<single>` или альтернативы

Здесь я расхожусь с QWEN-001 (который поддержал `single`) и согласен с CODER-007 (который предложил `value`).

**Проблема с `single`:** название описывает **количество**, а не семантическую роль. Это нарушает принцип именования joint по архитектурной функции.

**Мой выбор: `value`**

| Joint           | Семантика                       | Пример                                           |
| --------------- | ------------------------------- | ------------------------------------------------ |
| `value`         | Скалярная именованная константа | `FOCUS_DURATION_MS = 600`, `DEFAULT_WIDTH = 300` |
| `enum`          | Закрытое перечисление           | `['xs', 'sm', 'md', 'lg'] as const`              |
| `struct`        | Структурный объект              | `{ x: 0, y: 0, z: 0 }`                           |
| `record`        | Lookup-таблица                  | `Record<Axis, number>`                           |
| `map`           | Словарь с явными ключами        | `Map<string, StyleValue>`                        |
| `configuration` | Конфигурационный объект         | `{ maxItems: 10, debounce: 300 }`                |

Итого для `const` и `type` предлагаю 6 joint: `value`, `enum`, `struct`, `record`, `map`, `configuration`.

---

## 6. Паттерн для сборки компонентов: `factory` / `builder` / `compose`?

### Текущая ситуация:

- `interface/recipe/accordion` = интерфейс, расширяющий набор proto-интерфейсов → **Composite Interface Pattern**
- `interaction/factory/` (кластер!) = функции, разбивающие props на части → **Decomposition + Factory Method**

### Какой паттерн подходит для НОВОГО joint `interface/<X>`?

Цель вопроса — возможно, создать `interface/factory/accordion/index.ts` для интерфейсов **фабричных входных данных**.

| Название   | Паттерн GoF     | Подходит?   | Почему                                                              |
| ---------- | --------------- | ----------- | ------------------------------------------------------------------- |
| `factory`  | Factory Method  | ✅ Частично | Для входных DTO фабрики (`ButtonFactoryInput`)                      |
| `builder`  | Builder         | ❌          | Требует stateful builder-объект, это class, не interface            |
| `compose`  | Composite       | ⚠️ Конфликт | `compose` — функциональный термин, в interface-контексте неочевиден |
| `assembly` | Template Method | ✅ Хорошо   | Подчёркивает намерение «собрать» компонент                          |

**Мой вывод:**

- Для интерфейсов DTO фабричных функций → `interface/factory/<family>`
- Текущий `recipe` оставить как есть (Composite Interface)
- Ввести `interface/component` (уже легализуется по п.1) как финальный contract компонента

Иерархия становится:

```
proto      → единица поведения (role interface)
recipe     → композиция proto-единиц (composite interface)
component  → компонентный контракт (facade interface)
factory    → входные данные для фабричных функций (DTO interface)
```

---

## 7. Паттерн `interaction/interface/proto/clickable`

**Точное название: Role Interface** (по Мартину Фаулеру).

Дополнительные имена одного и того же паттерна:

- **Capability Interface** (способность)
- **Behavioral Mixin** (TypeScript-контекст)
- **Trait** (Scala/Rust-контекст)
- **Protocol** (Swift/Objective-C)

В контексте SAMO и ISP (из SOLID): `proto` = **минимальный поведенческий контракт**, реализующий один принцип ISP. Это **патентопригодный термин**: "Proto-interface as atomic behavioral unit in component composition methodology".

---

## 8. Другие архитектурные паттерны в проекте

| Паттерн (GoF/иной)      | Joint/кластер                            | Пример пути                             |
| ----------------------- | ---------------------------------------- | --------------------------------------- | --------- | --- |
| **Role Interface**      | `interface/proto`                        | `interaction/interface/proto/clickable` |
| **Composite Interface** | `interface/recipe`                       | `control/interface/recipe/accordion`    |
| **Facade Interface**    | `interface/component`                    | `control/interface/component/button`    |
| **Decorator**           | `class/style-manager`                    | `layout/class/style-manager/container`  |
| **Strategy**            | `class/style-manager` + `function/state` | варианты поведения класса               |
| **Observer / Reactive** | `function/state` (`.svelte.ts`)          | `interaction/function/state/clickable`  |
| **Repository**          | `class/object-manager`                   | `canvas/class/object-manager/node`      |
| **Manager/Facade**      | `class/manager`                          | `architecture/class/manager/...`        |
| **State Machine**       | `class/state-manager`                    | `navigation/class/state-manager`        |
| **Factory Method**      | `interaction/factory/` _(нарушение!)_    | `interaction/factory/button`            |
| **Value Object**        | `const/struct`                           | `architecture/const/struct/prezi-scene` |
| **Lookup / Registry**   | `const/record`                           | `architecture/const/record/size`        |
| **Atomic Design**       | `svelte/atom                             | molecule                                | organism` | —   |
| **Design Token**        | `const/enum` + `type/enum`               | `layout/type/enum/size`                 |

**Паттерн, который необходимо выделить отдельно:**  
Трёхуровневая иерархия `proto → recipe → component` — это **Domain-Specific Interface Assembly Pattern**, уникальный для SAMO и отсутствующий в GoF. Это и есть ядро патентной заявки.

---

## 9. Новый joint `<function>/<method>`

**Не поддерживаю в формулировке `method`.**

`method` — термин объектно-ориентированного программирования. В функциональном контексте (а проект движется в сторону функций Svelte 5) использование `method` создаёт терминологическую путаницу.

**Предлагаю вместо этого расширить function-joints по семантике:**

| Joint       | Назначение                           | Тип функции                         |
| ----------- | ------------------------------------ | ----------------------------------- |
| `script`    | Утилиты общего назначения            | `formatDate()`, `debounce()`        |
| `state`     | Реактивное состояние Svelte 5        | `$state`, Runes                     |
| `hook`      | Переиспользуемые реактивные паттерны | `useClickOutside()`                 |
| `transform` | Чистые преобразования данных         | `cssToRecord()`, `propsToClasses()` |

`hook` уже упоминается в ADR.md (но не в AGENTS.md — расхождение!). Его нужно **легализовать** как joint.

---

## Итоговая таблица предложений CLAUDE-001

### Легализовать (уже существует в коде):

| Joint           | Кластер     | Приоритет               |
| --------------- | ----------- | ----------------------- |
| `component`     | `interface` | 🔴 Критично (593 файла) |
| `record`        | `interface` | 🟡 Высокий (22 файла)   |
| `state-manager` | `class`     | 🟡 Высокий              |
| `hook`          | `function`  | 🟢 Средний              |

### Добавить (новые):

| Joint           | Кластер         | Семантика                       |
| --------------- | --------------- | ------------------------------- |
| `value`         | `const`, `type` | Скалярная именованная константа |
| `configuration` | `const`, `type` | Объект параметров/настроек      |
| `factory`       | `interface`     | DTO для фабричных функций       |
| `transform`     | `function`      | Чистые преобразования           |

### Исправить нарушения:

| Проблема                                   | Решение                                                                      |
| ------------------------------------------ | ---------------------------------------------------------------------------- |
| `interaction/factory/` как кластер         | Разобрать: interfaces → `interface/factory/`, functions → `function/script/` |
| `const/struct/prezi-scene` содержит скаляр | Перенести в `const/value/` после введения joint                              |

### Отклонить:

| Предложение                    | Причина                                                |
| ------------------------------ | ------------------------------------------------------ |
| Переименование `enum` → `list` | Высокая стоимость миграции, семантика `enum` корректна |
| `function/method`              | Смешение ООП и функционального стиля                   |
| `const/single`                 | Имя описывает количество, а не роль                    |

---

## Предложения для ADR (следующий шаг)

Новый ADR должен закрепить:

1. **Трёхуровневую иерархию interface/\***: `proto → recipe → component` как формальный паттерн SAMO
2. **Расширенный словарь joint для const/type**: добавить `value` и `configuration`
3. **Легализацию `interface/component`** как самого распространённого joint
4. **Запрет на кластеры вне стандартного перечня** без нового ADR
5. **Определение `hook`** как joint в `function/` для реактивных паттернов Svelte 5

---

## Вопросы к следующей итерации

1. Как разграничить `interface/recipe` и `interface/component` в случаях, когда компонент практически равен своему recipe?
2. Нужен ли joint `interface/api` (сейчас 5 файлов в `input/`) или это частный случай `interface/contract`?
3. Как документировать паттерн `proto → recipe → component` в патентной заявке — как метод, как систему или как устройство?
