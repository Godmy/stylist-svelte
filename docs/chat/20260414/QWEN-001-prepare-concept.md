# QWEN-001-prepare-concept

## Анализ и предложения по улучшению SAMO

### Предварительные выводы

Изучены ADR.md, AGENTS.md, QWEN.md + фактическая структура проекта (28 доменов, ~8000 файлов).

**Ключевое обнаружение:** фактическая структура значительно богаче документированной. Обнаружены 15+ undocumented joint-типов, которые уже активно используются.

---

### Ответы по пунктам итерации 1:

#### 1. Возможности по улучшению `<cluster>/<joint>`

**Текущее состояние:**

- Документировано: ~19 joint-типов
- Фактически используется: ~34 joint-типов
- **Расхождение 44%** — документация сильно отстаёт от реальности

**Предлагаемые изменения:**

| Действие                           | Joint                                              | Обоснование                                                              |
| ---------------------------------- | -------------------------------------------------- | ------------------------------------------------------------------------ |
| **Добавить в AGENTS.md**           | `icon`                                             | 19 доменов, `const/icon/<family>` — иконочные константы                  |
| **Добавить в AGENTS.md**           | `component`                                        | 22 домена, `interface/component/<family>` — интерфейсы компонентов       |
| **Добавить в AGENTS.md**           | `contract`                                         | `type/contract` и `interface/contract` — валидация и гарантии типов      |
| **Добавить в AGENTS.md**           | `record` под `interface/`                          | 10 доменов — интерфейсы-записи                                           |
| **Добавить в AGENTS.md**           | `struct` под `interface/`                          | management — структурные интерфейсы                                      |
| **Добавить в AGENTS.md**           | `state-manager`                                    | `class/state-manager` — управление состоянием навигации                  |
| **Легализовать домен-специфичные** | `alert-card`, `hero-cta`, `format-date-time` и др. | Прямые семейства под кластерами — это нормально для уникальных сущностей |

---

#### 2. Перспективность `<const>/<enum>/index.ts` на весь домен

**Текущая ситуация:**

- Сейчас: `<const>/<enum>/<family>/index.ts` — каждая константа в своём семействе
- Пример: `architecture/const/enum/axes/index.ts` → `export const AXES = ...`

**Анализ двух подходов:**

| Вариант                       | Структура                          | Плюсы                                | Минусы                        |
| ----------------------------- | ---------------------------------- | ------------------------------------ | ----------------------------- |
| **A: Доменный enum**          | `<const>/<enum>/index.ts`          | Один импорт для всех констант домена | Нарушает SRP, большие баррели |
| **B: Семейство на константу** | `<const>/<enum>/<family>/index.ts` | SRP, точный импорт                   | Больше файлов                 |

**Рекомендация:**

Для **числовых констант** (`DEFAULT_WIDTH = 300`) — предложить **гибридный подход**:

```
<const>/
├── enum/
│   ├── default-width/
│   │   └── index.ts          # export const DEFAULT_WIDTH = 300
│   ├── default-height/
│   │   └── index.ts          # export const DEFAULT_HEIGHT = 400
│   └── index.ts              # баррель: re-export всех констант домена
```

То есть **не выбирать** между A и B, а **использовать оба**:

- Семейства остаются для SRP
- Баррель `<const>/<enum>/index.ts` генерируется автоматически для удобства

**Это уже возможно** благодаря существующей indexation системе.

---

#### 3. Переименование `<enum>` → `<list>`

**Анализ:**

| Аспект                 | `enum`                                                      | `list`                             |
| ---------------------- | ----------------------------------------------------------- | ---------------------------------- |
| Семантика              | TypeScript `enum` (числовой/строковый)                      | Более общее, включает массивы      |
| Текущее использование  | `const/enum/` содержит `export const X = value`, не TS enum | Более точно отражает содержимое    |
| Обратная совместимость | 21 домен использует `enum`                                  | **Миграция затронет ~2000 файлов** |

**Вердикт:**

Предлагаю **не переименовывать**, а **уточнить семантику**:

| Joint        | Содержимое                                     | Пример                                                               |
| ------------ | ---------------------------------------------- | -------------------------------------------------------------------- |
| `enum`       | Одиночные константы, логически сгруппированные | `const/enum/theme-mode/` → `export const THEME_MODE_LIGHT = "light"` |
| **остается** |                                                |                                                                      |

Причина: `list` семантически ближе к массиву/списку, а в папках лежат **именованные константы**, а не списки. Если цель — подчеркнуть что это НЕ TypeScript enum, то лучше переименовать в **`const/const/`** или **`const/value/`**.

**Альтернативное предложение:**

```
<const>/
├── enum/          ← оставить для группы констант (theme-mode, axes)
├── single/        ← НОВЫЙ joint для одиночных констант (DEFAULT_WIDTH)
└── ...
```

---

#### 4. Добавление `<configuration>/<family>`

**Предложение:**

```
<const>/<configuration>/<family>/index.ts
<type>/<configuration>/<family>/index.ts
```

**Анализ:**

`configuration` — это **не joint, а скорее cluster-level concern**. Конфигурации обычно:

- Собираются из нескольких констант/типов
- Представляют собой объект настроек

**Рекомендация:**

Вместо нового joint, использовать **существующий `struct`**:

```
<const>/<struct>/<config-family>/index.ts   # export const CONFIG = { ... }
<type>/<struct>/<config-type>/index.ts      # export type Config = { ... }
```

Если нужна именно **семантическая маркировка** конфигураций — тогда **добавить `configuration` как joint**, но только под `const/` и `type/`:

| Cluster | Joint           | Family          | Пример                                              |
| ------- | --------------- | --------------- | --------------------------------------------------- |
| `const` | `configuration` | `canvas-config` | `export const CANVAS_CONFIG = { width: 800, ... }`  |
| `type`  | `configuration` | `canvas-config` | `export type CanvasConfig = { width: number, ... }` |

**Статус:** ✅ Поддерживаю добавление, если это решает проблему идентификации конфигурационных объектов.

---

#### 5. Добавление `<single>/<family>`

**Предложение:**

```
<const>/<single>/<family>/index.ts
<type>/<single>/<family>/index.ts
```

**Анализ:**

`single` означает **одиночную сущность** на весь домен. Это отличается от `enum` (группа) и `struct` (структура).

**Примеры использования:**

```
<const>/<single>/<default-width>/index.ts      # export const DEFAULT_WIDTH = 300
<const>/<single>/<version>/index.ts            # export const VERSION = "1.0.0"
<type>/<single>/<callback>/index.ts            # export type Callback = () => void
```

**Рекомендация:**

✅ **Поддерживаю**, но предлагаю альтернативное именование:

| Вариант  | Плюсы                                  | Минусы                       |
| -------- | -------------------------------------- | ---------------------------- |
| `single` | Понятно, что одна сущность             | Может путаться с `singleton` |
| `value`  | Подчёркивает скалярность               | Не ясно, что одна на домен   |
| `token`  | Термин из дизайн-систем (design token) | Может путаться с auth token  |

**Финальное предложение:** использовать **`single`** для констант и **`alias`** для типов:

```
<const>/<single>/<family>/index.ts     # export const X = value
<type>/<alias>/<family>/index.ts       # export type T = ExistingType
```

---

#### 6. `<interface>/<factory>/<family>` или `<interface>/<builder>/<family>` или `<compose>`

**Анализ паттернов:**

| Паттерн      | Назначение                                                 | Подходит для                                         |
| ------------ | ---------------------------------------------------------- | ---------------------------------------------------- |
| **Factory**  | Создаёт объекты одного типа, скрывая конкретную реализацию | `createButton()`, `createModal()`                    |
| **Builder**  | Пошаговое создание сложного объекта с конфигурацией        | `new ButtonBuilder().withSize().withColor().build()` |
| **Composer** | Композиция нескольких компонентов в один                   | `compose(Form, Validation, Submission)`              |

**Текущая ситуация в проекте:**

Обнаружено `interface/component/<family>` в 22 доменах — это **интерфейсы props для Svelte компонентов**.

Пример из `control/interface/component/`:

- `button/index.ts` → `export interface ButtonProps { ... }`

**Рекомендация:**

Для **создания компонентов** предложить **`factory`**:

```
<interface>/<factory>/<family>/index.ts
```

**Почему factory, а не builder/compose:**

| Критерий          | Factory                               | Builder          | Compose             |
| ----------------- | ------------------------------------- | ---------------- | ------------------- |
| Svelte компоненты | ✅ Да                                 | ❌ Избыточен     | ❌ Не подходит      |
| Простота          | ✅ Простой                            | ❌ Сложный       | ✅ Средний          |
| SAMO направление  | ✅ Соответствует const→type→interface | ❌ Требует class | ❌ Требует function |

**Пример:**

```typescript
// control/interface/factory/accordion/index.ts
export interface AccordionFactory {
	create(header: string, content: string): AccordionProps;
	fromConfig(config: AccordionConfig): AccordionProps;
}
```

**Вердикт:** ✅ **Добавить `factory`** как joint под `interface/`.

---

#### 7. Как называется паттерн: `interaction/interface/proto/clickable/index.ts`

**Это паттерн "Protocol Interface" (Протокольный интерфейс).**

**Определение:**

```
Protocol — набор контрактов, которые описывают ПОВЕДЕНИЕ, а не структуру.
```

**Отличие от `recipe`:**

| Аспект     | `proto`                               | `recipe`                                   |
| ---------- | ------------------------------------- | ------------------------------------------ |
| Назначение | Описывает **что** должен уметь объект | Описывает **как** собрать компонент        |
| Уровень    | Низкоуровневый (свойства, события)    | Высокоуровневый (композиция)               |
| Пример     | `Clickable { onClick, onHover }`      | `Accordion = Header + Content + Animation` |

**Происхождение термина:**

- Из **TypeScript structural typing**: "Если объект реализует протокол, он подходит"
- Ближе всего к **Interface Segregation Principle** (ISP из SOLID)
- В SAMO: `proto` — это **минимальный поведенческий контракт**

**Альтернативные названия:**

| Название     | Точность | Причина                                   |
| ------------ | -------- | ----------------------------------------- |
| `proto`      | ✅ 90%   | Коротко, понятно, устоялось в проекте     |
| `behavior`   | ⚠️ 70%   | Шире, может включать не только интерфейсы |
| `capability` | ⚠️ 75%   | Хорошо, но длиннее                        |
| `contract`   | ❌ 60%   | Уже есть `contract` для валидации типов   |

**Вердикт:** ✅ **Оставить `proto`** — это устоявшийся термин в проекте.

---

#### 8. Какие ещё архитектурные паттерны встречаются в проекте

| Паттерн                  | Расположение                   | Joint            | Доменов        |
| ------------------------ | ------------------------------ | ---------------- | -------------- |
| **Protocol**             | `interface/proto/`             | `proto`          | 12             |
| **Recipe/Assembly**      | `interface/recipe/`            | `recipe`         | 24             |
| **Component Interface**  | `interface/component/`         | `component`      | 22             |
| **Manager**              | `class/manager/`               | `manager`        | 2              |
| **Object Manager**       | `class/object-manager/`        | `object-manager` | 16             |
| **Style Manager**        | `class/style-manager/`         | `style-manager`  | 25+            |
| **State Manager**        | `class/state-manager/`         | `state-manager`  | 1 (navigation) |
| **Factory**              | ❌ Отсутствует                 | —                | 0              |
| **Builder**              | ❌ Отсутствует                 | —                | 0              |
| **Strategy**             | ❌ Не выделен                  | —                | 0              |
| **Observer**             | `function/state/`              | `state`          | 27 (скрыто)    |
| **Singleton**            | `const/single/` (предлагаемый) | —                | 0              |
| **Value Object**         | `const/struct/`                | `struct`         | 15             |
| **Data Transfer Object** | `type/struct/`                 | `struct`         | 25             |
| **Contract/Validation**  | `type/contract/`               | `contract`       | 2              |

**Неявные паттерны (не выделены в joint, но присутствуют):**

| Паттерн                      | Где встречается                      | Joint-эквивалент   |
| ---------------------------- | ------------------------------------ | ------------------ |
| **Design Token**             | `const/icon/`, `const/enum/`         | `icon`, `enum`     |
| **Configuration Object**     | `const/struct/`                      | `struct`           |
| **Event Bus**                | `function/state/`                    | `state`            |
| **Presenter**                | `svelte/organism/`                   | `organism`         |
| **Container/Presentational** | `svelte/molecule/` vs `svelte/atom/` | `molecule`, `atom` |

---

#### 9. Предложение `<function>/<method>/<family>`

**Анализ:**

`method` в контексте функций — это **имплементация поведения**, а не просто функция.

**Отличие `method` от существующих joints:**

| Joint                | Назначение               | Пример                                                   |
| -------------------- | ------------------------ | -------------------------------------------------------- |
| `script`             | Утилитарные функции      | `formatDate()`, `parseJSON()`                            |
| `state`              | Реактивное состояние     | `useDraggable()`, `useTheme()`                           |
| `test`               | Тесты                    | `testThemeSwitcher()`                                    |
| **`method`** (новый) | Бизнес-логика, алгоритмы | `calculateTax()`, `validateForm()`, `buildQueryString()` |

**Пример использования:**

```
<localization>/<function>/<method>/<format-date>/index.ts
  # export function formatDate(date: Date, locale: string): string

<commerce>/<function>/<method>/<calculate-shipping>/index.ts
  # export function calculateShipping(weight: number, region: string): number
```

**Рекомендация:**

✅ **Поддерживаю добавление**, но с уточнением:

| Joint    | Критерий                                                     |
| -------- | ------------------------------------------------------------ |
| `script` | Функции **общего назначения**, не зависят от доменной логики |
| `method` | Функции **доменной бизнес-логики**, содержат алгоритмы       |
| `state`  | Функции **реактивного поведения**, работают с Svelte stores  |

---

### Итоговая таблица изменений SAMO

| Действие         | Joint                          | Cluster             | Статус              |
| ---------------- | ------------------------------ | ------------------- | ------------------- |
| **Легализовать** | `icon`                         | `const`             | ✅ В文档            |
| **Легализовать** | `component`                    | `interface`         | ✅ В文档            |
| **Легализовать** | `contract`                     | `type`, `interface` | ✅ В文档            |
| **Легализовать** | `state-manager`                | `class`             | ✅ В文档            |
| **Добавить**     | `single`                       | `const`             | ✅ Новый            |
| **Добавить**     | `alias`                        | `type`              | ✅ Новый            |
| **Добавить**     | `configuration`                | `const`, `type`     | ✅ Новый            |
| **Добавить**     | `factory`                      | `interface`         | ✅ Новый            |
| **Добавить**     | `method`                       | `function`          | ✅ Новый            |
| **Отклонить**    | переименование `enum` → `list` | —                   | ❌ Не рекомендуется |

---

**Готов к следующей итерации.** Жду反馈 от других участников сессии.
