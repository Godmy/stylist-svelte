CODER-007-backlog-to-target-architecture-and-patent-readiness

Контекст на момент создания:

- прочитаны `QWEN-003-критическая-оценка-коммерциализации-и-права.md`
- прочитаны `CLAUDE-003-critique-patent-and-commercial.md`
- прочитаны `CODER-003-strict-review-commercialization-and-ip.md`
- прочитаны `CODER-004-prepare-commercial-matrix.md`
- прочитаны `CODER-005-prepare-ip-matrix.md`
- прочитаны `CODER-006-prepare-novelty-map.md`

Цель backlog:

- привести `stylist-svelte` и сопутствующие документы к целевой архитектуре SAMO
- отделить нормативную часть от гипотез
- подготовить измеримую базу для коммерциализации
- довести правовую и патентную подготовку до профессионально обсуждаемого уровня

## 1. Целевые состояния

### Целевое состояние A: Архитектурная нормализация

- кодовая база согласована с нормативным ADR
- `AGENTS.md` и живое дерево `src/lib/**` не противоречат друг другу
- нестандартные кластеры и joint либо легализованы, либо мигрированы, либо запрещены

### Целевое состояние B: Governance-ready tooling

- `indexation`, `errors`, `audit` умеют проверять утверждённый словарь SAMO
- нарушения структуры считаются автоматически
- результаты baseline и прогресса фиксируются в отчётах

### Целевое состояние C: Commercial readiness

- определён основной продукт
- определён ICP
- определён платный актив
- определены базовые KPI ценности

### Целевое состояние D: IP readiness

- режимы защиты разложены по активам
- брендовая стратегия отделена от copyright и trade secret
- novelty discussion переведена из манифеста в formal preparation

### Целевое состояние E: Patent readiness candidate

- есть prior art map
- есть claim candidates
- есть измеримый technical effect
- есть набор воспроизводимых доказательств

## 2. Главные принципы выполнения backlog

- сначала норма, потом миграция
- сначала измеримость, потом громкие claims
- сначала adoption и tooling value, потом сайт и эквайринг
- никакие новые joint не попадают в нормативные документы без живого use-case или отдельного ADR

## 3. Backlog по потокам работ

## Поток A. Нормативная архитектура

### A-001. Подготовить `ADR-new` как единственный нормативный источник

Приоритет: `P0`

Задача:

- создать новый ADR без манифестного стиля
- зафиксировать только принятые решения
- развести normative rules и proposed extensions

Включить:

- термины `domain/cluster/joint/family`
- assembly direction
- DSIAP: `proto -> recipe -> component`
- легализованные joint
- запрещённые отклонения
- правила миграции legacy-структур

Метрики:

- `1` утверждённый ADR-документ
- `0` противоречий между ADR и `AGENTS.md` после синхронизации

Критерий завершения:

- команда согласовала документ как source of truth

### A-002. Синхронизировать `AGENTS.md` с новым ADR

Приоритет: `P0`

Задача:

- убрать расхождения между регламентом и фактическим кодом
- не добавлять спорные joint без консенсуса

Минимальный ожидаемый scope:

- `interface/component`
- `interface/contract`
- `interface/record`
- `class/state-manager`
- `const/icon`
- `data/md`
- решение по `value`, `configuration`, `alias`, `hook`, `transform`

Метрики:

- `0` известных противоречий ADR vs AGENTS
- `100%` обязательных joint из ADR отражены в `AGENTS.md`

Критерий завершения:

- `AGENTS.md` не противоречит утверждённому ADR

### A-003. Переписать `QWEN.md` как рабочий operational context

Приоритет: `P1`

Задача:

- убрать устаревшие описания структуры компонентов
- синхронизировать терминологию с ADR
- явно отделить проектное описание от нормативного языка

Метрики:

- `0` терминологических конфликтов с ADR
- `1` актуальная версия operational guide

### A-004. Нормализовать глоссарий

Приоритет: `P1`

Задача:

- разделить `GEMINI-005-GLOSSARY.md` на:
  - normative glossary
  - proposed glossary

Обязательно исключить или отложить до живых use-cases:

- `director`
- `builder`
- `logic`

Обязательно развести:

- `component` vs `contract`
- `configuration` vs `config`

Метрики:

- `0` неподтверждённых joint в normative glossary
- `1` таблица терминов "term -> exact meaning -> status"

## Поток B. Архитектурная миграция кода

### B-001. Провести baseline inventory фактической структуры

Приоритет: `P0`

Задача:

- автоматически собрать все `cluster/joint/family`
- отметить:
  - compliant
  - undocumented but valid
  - conflicting
  - invalid

Метрики:

- `100%` доменов просканированы
- есть baseline report:
  - число доменов
  - число cluster
  - число joint
  - число конфликтных путей

Критерий завершения:

- существует воспроизводимый baseline отчёт в папке сессии или в `stylist/audit/output`

### B-002. Исправить критические структурные нарушения

Приоритет: `P0`

Минимальный фокус:

- разобрать `interaction/factory/`
- найти и описать другие верхнеуровневые кластеры вне регламента
- решить судьбу доменно-специфичных joint

Метрики:

- `0` top-level cluster вне утверждённого словаря в целевых доменах
- `0` критических нарушений типа "cluster outside ADR"

### B-003. Подготовить migration map для legacy-путей

Приоритет: `P1`

Задача:

- для каждого конфликтного пути указать:
  - текущий путь
  - целевой путь
  - тип миграции
  - риск
  - нужно ли регенерировать индексы

Метрики:

- `100%` известных конфликтных путей покрыты migration map

### B-004. Провести итеративную миграцию структуры

Приоритет: `P1`

Задача:

- мигрировать код пакетами
- после каждого пакета прогонять:
  - `stylist/indexation`
  - `stylist/errors`
  - `stylist/audit`

Метрики:

- снижение числа архитектурных нарушений по пакетам
- отсутствие регрессии в type-check после каждого пакета

### B-005. Ввести status dashboard по миграции

Приоритет: `P2`

Показывать:

- total violations
- resolved violations
- remaining violations
- domains normalized
- domains blocked

Метрики:

- `1` воспроизводимый dashboard/report

## Поток C. Tooling и самоанализ

### C-001. Обновить `stylist/audit` под утверждённый словарь SAMO

Приоритет: `P0`

Задача:

- формализовать правила проверки по ADR
- различать:
  - warning
  - violation
  - unsupported extension

Метрики:

- `100%` joint из ADR валидируются автоматически
- `0` silent failures по критическим нарушениям

### C-002. Добавить audit report с архитектурными KPI

Приоритет: `P1`

KPI:

- количество нарушений на домен
- количество legacy-path
- количество undocumented joint
- доля compliant сущностей
- доля автоловимых нарушений

Метрики:

- `1` стандартный машиночитаемый отчёт
- `1` человекочитаемый summary report

### C-003. Добавить baseline и trend reports

Приоритет: `P1`

Задача:

- фиксировать снимки состояния по датам
- считать прогресс по violations и coverage

Метрики:

- минимум `3` snapshot-а для тренда
- видимый тренд уменьшения structural violations

### C-004. Подготовить требования для `SAMO-Lint` / IDE integration

Приоритет: `P2`

Задача:

- не писать сразу плагин
- сначала описать спецификацию realtime checks

Метрики:

- `1` spec document
- список MVP checks

## Поток D. Метрики архитектурной ценности

### D-001. Определить canonical metric set

Приоритет: `P0`

Обязательные метрики:

- `structural_violations_total`
- `undocumented_joints_total`
- `invalid_clusters_total`
- `domains_normalized_ratio`
- `type_errors_total`
- `manual_review_exceptions_total`

Рекомендуемые продуктовые метрики:

- `entity_search_time_median`
- `onboarding_task_time`
- `pr_architecture_comments_count`
- `violations_caught_pre_merge_ratio`

Критерий завершения:

- утверждён один список официальных KPI

### D-002. Провести baseline measurement

Приоритет: `P0`

Задача:

- измерить исходное состояние проекта до миграции
- сохранить baseline как reference point

Метрики:

- baseline зафиксирован по всем canonical KPI

### D-003. Провести post-normalization measurement

Приоритет: `P1`

Задача:

- повторить измерения после 1-2 волн миграции
- получить comparison table

Метрики:

- минимум `1` before/after report

### D-004. Подготовить evidence pack

Приоритет: `P1`

Содержимое:

- baseline
- post-state
- diff
- графики
- комментарии о причинах изменений

Это ключевой материал для:

- коммерческих кейсов
- novelty preparation
- переговоров с патентным поверенным

## Поток E. Коммерциализация

### E-001. Утвердить основной коммерческий продукт

Приоритет: `P0`

Нужно выбрать один главный стартовый оффер:

- architecture audit
- migration sprint
- enterprise policy pack

Не запускать все сразу.

Метрики:

- `1` выбранный primary offer
- `1` целевой ICP для primary offer

### E-002. Подготовить `offer sheet`

Приоритет: `P1`

Включить:

- кто покупает
- какую боль решаем
- какой deliverable получает клиент
- какой срок внедрения
- какие KPI улучшаем

Метрики:

- `1` одностраничный sellable offer

### E-003. Определить границу open-source и paid

Приоритет: `P0`

Разделить:

- open layer
- protected commercial layer
- enterprise-only assets

Метрики:

- `100%` ключевых активов разнесены по слоям
- `0` стратегических противоречий "это и открыто, и коммерчески закрыто"

### E-004. Собрать ICP validation notes

Приоритет: `P1`

Задача:

- провести минимум несколько интервью или письменных validation notes
- проверить, есть ли реальная готовность платить

Метрики:

- минимум `5` ICP observations
- минимум `3` сформулированные боли, повторяющиеся у разных респондентов

### E-005. Подготовить кейс "до/после"

Приоритет: `P1`

Задача:

- на реальном домене или модуле показать:
  - хаос до
  - структуру после
  - метрики улучшения

Метрики:

- `1` publishable case study

## Поток F. IP и юридическая подготовка

### F-001. Зафиксировать актуальный перечень активов

Приоритет: `P0`

Категории:

- тексты
- код
- бренд
- закрытые профили
- исследовательские материалы

Метрики:

- `1` asset register

### F-002. Определить лицензионную модель

Приоритет: `P0`

Нужно решить:

- MIT
- Apache 2.0
- dual license

Критерии выбора:

- риск патентных конфликтов
- удобство adoption
- совместимость с будущей коммерцией

Метрики:

- `1` выбранная license strategy

### F-003. Подготовить trademark readiness pack

Приоритет: `P1`

Включить:

- shortlist брендов
- usage model
- product naming hierarchy
- предполагаемые классы МКТУ

Метрики:

- `1` trademark prep doc

### F-004. Подготовить software registration pack

Приоритет: `P1`

Для:

- `stylist/indexation`
- `stylist/errors`
- `stylist/audit`

Метрики:

- `1` пакет описания программы для ЭВМ

### F-005. Выделить закрываемые enterprise assets

Приоритет: `P1`

Задача:

- не объявлять ноу-хау абстрактно
- конкретно назвать закрытые материалы

Метрики:

- `1` список proprietary assets
- `1` policy по доступу и раскрытию

## Поток G. Patent readiness candidate

### G-001. Подготовить prior art map

Приоритет: `P0`

Минимальные направления сравнения:

- Atomic Design
- Feature-Sliced Design
- DDD-style organization
- contract-first UI systems
- architecture linting / static governance

Метрики:

- `1` complete prior art table
- минимум `5` сравниваемых подходов

### G-002. Подготовить claim candidates

Приоритет: `P1`

Фокус:

- не весь SAMO
- а узкий формализуемый набор признаков

Кандидаты:

- DSIAP
- governed assembly pipeline
- machine-enforced morphological governance

Метрики:

- минимум `3` candidate claim formulations

### G-003. Определить measurable technical effect

Приоритет: `P0`

Без этого patent discussion бессмысленна.

Возможные эффекты:

- снижение числа structural violations
- снижение ambiguous imports
- снижение циклических зависимостей
- рост доли architecture checks before merge

Метрики:

- `1` утверждённый список измеримых technical effects
- для каждого эффекта есть method of measurement

### G-004. Подготовить enablement pack

Приоритет: `P1`

Содержимое:

- описание входных данных
- правила классификации
- правила индексации
- правила аудита
- сценарий воспроизведения

Метрики:

- `1` reproducible technical package

### G-005. Провести pre-patent review с патентным поверенным

Приоритет: `P2`

Вход:

- prior art map
- claim candidates
- technical effects
- evidence pack

Метрики:

- `1` expert review result
- решение:
  - go
  - narrow and iterate
  - do not file

## 4. Дорожная карта по кварталам

### Wave 1: Нормализация и доказательная база

Состав:

- A-001
- A-002
- B-001
- C-001
- D-001
- D-002
- E-001
- E-003
- F-001
- F-002
- G-001
- G-003

Ожидаемый результат:

- единый нормативный каркас
- baseline архитектуры
- baseline метрик
- ясная коммерческая и правовая рамка

### Wave 2: Миграция и упаковка

Состав:

- A-003
- A-004
- B-002
- B-003
- B-004
- C-002
- C-003
- D-003
- D-004
- E-002
- E-004
- E-005
- F-003
- F-004
- F-005
- G-002
- G-004

Ожидаемый результат:

- заметно более чистая структура
- publishable case study
- подготовленные пакеты для регистрации и коммерции

### Wave 3: Решение по патентной линии и enterprise launch

Состав:

- B-005
- C-004
- G-005

Ожидаемый результат:

- либо обоснованная подача
- либо осознанный отказ от патента в пользу trademark + tooling moat

## 5. Главные KPI программы

### Архитектурные KPI

- `structural_violations_total`
- `undocumented_joints_total`
- `invalid_clusters_total`
- `domains_normalized_ratio`
- `audit_rule_coverage_ratio`

### Технические KPI

- `type_errors_total`
- `indexation_failures_total`
- `audit_runtime_median`
- `violations_caught_pre_merge_ratio`

### Коммерческие KPI

- `primary_offer_defined`
- `open_vs_paid_boundary_defined`
- `validated_icp_count`
- `case_studies_count`

### IP / Patent KPI

- `asset_register_ready`
- `license_strategy_decided`
- `trademark_pack_ready`
- `prior_art_map_ready`
- `claim_candidates_count`
- `technical_effects_measured`

## 6. Характеристики целевой зрелости

### Уровень 1. Conceptual

- есть идеи и термины
- нет единой нормы

### Уровень 2. Normative

- есть утверждённый ADR
- есть синхронные AGENTS/QWEN

### Уровень 3. Governed

- структура валидируется автоматикой
- миграция измеряется baseline-метриками

### Уровень 4. Productized

- есть оффер
- есть ICP
- есть кейс ценности

### Уровень 5. IP-ready

- активы разведены по режимам защиты
- trademark/software packs готовы
- novelty и claims обсуждаемы профессионально

## 7. Итоговый приоритет

Сейчас нельзя идти прямо в патентную подачу и нельзя идти прямо в сайт с эквайрингом.

Правильный порядок:

1. утвердить нормативный ADR
2. снять baseline структуры и нарушений
3. привести tooling к новой норме
4. провести часть миграции и измерить эффект
5. только потом параллельно двигать:
   - коммерческий оффер
   - trademark/software registration
   - patent candidate review

Итоговый жёсткий вывод:

- архитектурная цель достижима
- коммерческая цель достижима только через tooling + consulting
- патентная цель возможна только как исследовательский трек, а не как ближайшее обещание
