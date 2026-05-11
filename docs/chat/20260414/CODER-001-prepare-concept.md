CODER-007-first-iteration-architecture

На текущий момент в папке сессии зафиксированы материалы:

- `GEMINI-001.md`
- `CODER-007-first-iteration-architecture.md`

Главный вывод первой итерации: сначала нужен новый ADR на синхронизацию правил с реальным деревом проекта, а уже потом изменение `AGENTS.md` и `QWEN.md`. Сейчас правила в `AGENTS.md` уже расходятся с живой структурой `stylist-svelte/src/lib`: в коде есть `interface/component`, `interface/contract`, `interface/provider`, `const/icon`, `class/state-manager`, `svelte/playground`, `data/md` и даже дополнительные верхние кластеры вне регламента. Без легализации этого расхождения методология SAMO будет неустойчивой.

1. По улучшению `<cluster>\<joint>`:

- Рекомендую держать `joint` маленьким и поперечно-доменным словарём.
- Имеет смысл легализовать уже существующие и архитектурно осмысленные `joint`: `interface/component`, `interface/contract`, `interface/provider`, `class/state-manager`, `const/icon`.
- Не рекомендую легализовать доменно-специфичные `joint` вида `const/alert-card`, `type/hero-cta`: это должны быть `family`, а не `joint`.

2. По `const/enum` для числовых констант:

- Вариант `const/enum/index.ts` на весь домен не подходит: это быстро превращается в “god-file” и конфликтует с SRP.
- Для `DEFAULT_WIDTH = 300` лучше не `enum`, а отдельное семейство: `const/configuration/<family>/index.ts` или `const/value/<family>/index.ts`.
- `enum` стоит оставлять только для конечных наборов значений, а не для произвольных чисел.

3. Переименование `enum -> list`:

- Не рекомендую.
- `enum` означает закрытый словарь вариантов.
- `list` означает последовательность или набор и по смыслу ближе к массиву, а не к перечислению.
- Если такие сущности реально нужны, лучше добавить новый `joint` `list`, а не переименовывать `enum`.

4. Новый `joint` `configuration`:

- Да, это перспективно.
- Хорошо ложится на `const/configuration/<family>` и `type/configuration/<family>`.
- Это лучшее место для defaults, presets, thresholds, limits, feature flags, runtime settings schema.
- Я бы предпочёл короткое имя `config`, но если нужна максимальная формальность для документации и патентного текста, `configuration` допустим.

5. Новый `joint` `single`:

- Не рекомендую.
- Название описывает количество, а не архитектурную роль.
- Лучше `value`, `scalar` или вообще использовать `configuration`, если речь о дефолтных числах и одиночных настройках.
- Из ваших примеров `single` выглядит слабее всех вариантов.

6. `interface/factory` для `accordion`:

- Для `AccordionRecipe` `factory` и `builder` не подходят.
- Там нет процесса создания объекта; там описан композиционный контракт пропсов.
- Подходящее имя паттерна: `recipe` или, если захотите унифицировать публичные API компонентов, `component`.
- Практически: `recipe` оставить для compositional contract, `factory` вводить только для интерфейсов создателей (`create*`, `build*`).

7. Как называется паттерн у `interaction/interface/proto/clickable`:

- Это role interface, capability interface или trait-like contract.
- Для TypeScript это хороший кандидат на `proto`: интерфейс-поведение, которое подмешивается в состав более крупного контракта.

8. Какие паттерны уже встречаются в проекте:

- `proto`: capability или role contract.
- `recipe`: compositional contract.
- `contract`: явный формальный контракт границы.
- `component`: контракт конкретного компонентного семейства.
- `provider`: поставщик контекста или состояния.
- `manager`, `state-manager`, `style-manager`, `object-manager`: управленческие классы.
- `state`: реактивное состояние.
- `script`: свободные вычислительные функции.
- `atom`, `molecule`, `organism`: Atomic Design.
- По факту проекта также видны `preset`, `factory`, `catalogs`, `samo`, но это уже требует отдельной нормализации на уровне ADR.

9. `function/method`:

- Не рекомендую.
- `method` в архитектурном смысле принадлежит `class` или члену `interface`, а не top-level `function`.
- Для свободных функций лучше сохранять предметные имена: `script`, `state`, `test`, а при необходимости добавить `compose`, `resolve`, `select`, `adapt`.
- Если ввести `function/method`, граница между процедурным и объектным стилем станет размытой.

Предварительный вердикт для нового ADR:

- Оставить `enum`, не переименовывать в `list`.
- Добавить `configuration`.
- Не добавлять `single`, заменить на `value` или покрыть через `configuration`.
- Не добавлять `function/method`.
- Для `interface` формализовать минимум: `proto`, `recipe`, `contract`, `component`, `provider`, `api`.
- Отдельно зафиксировать правило: `joint` не может быть доменно-специфичным.
