# src/lib — точки входа библиотеки

Реализации доменов перенесены в `modules/`. Владельцы и физические пути заданы
в [modules.json](../../modules.json); полный список — в
[modules/readme.md](../../modules/readme.md).

| Файл                           | Роль                                                            |
| ------------------------------ | --------------------------------------------------------------- |
| [index.ts](index.ts)           | Генерируемая публичная точка входа с фильтром доменов пакета    |
| [index.full.ts](index.full.ts) | Генерируемая полная точка входа для workspace; исключена из npm |

Наличие домена в реестре, наличие checkout, наличие его в манифесте и экспорт
из публичного корня — разные свойства. Манифест не подтверждает доступность
приватного репозитория или работоспособность компонента.

## Адреса исходников

Пример физического адреса: `modules/interaction/button/component/atom/button/index.svelte`.
Логический адрес того же компонента: `button/component/atom/button/index.svelte`.
В workspace допустим импорт `$stylist/button/component/atom/button/index.svelte`;
пакет предоставляет подмаршрут `stylist-svelte/button/component/atom/button/index.svelte`.

Внутри владельца сохраняется структура `<domain>/<cluster>/<joint>/<family>`.
Для `geo` и `wbd` сам корень репозитория уже является доменом. Модуль обозначает
владельца Git-истории, а не дополнительный уровень предметной классификации.

## Генерация и упаковка

Barrel-файлы вручную не редактируются. `scripts/assemble-package-source.mjs`
копирует публичные реализации в игнорируемый `.package-input` и меняет пути
только в скопированной корневой точке входа. Исходные barrel-файлы сохраняются.

На ревизии `681e886ea` оба umbrella-корня ещё используют пути `./<domain>`.
Публичный корень также содержит travel-экспорты. Проверка
`node scripts/check-package-source.mjs` останавливается на сообщении
`Generated umbrella entrypoint still references removed domain folders.`
Исправление требует человеческой регенерации; это не выполнено документационным PR.

После готовности исходников Дмитрий запускает `yarn stylist:manifest` **из корня
сайта**, затем проверяет публичный источник пакета. Этот скрипт не объявлен в
`package.json` отдельного клона библиотеки. Задачи выпуска и критерии проверки:
[backlog.md](../backlog.md).

## Аналитическая сводка

Подробные таблицы и оценки возвращены из ревизии до PR #4; количественная
инвентаризация обновлена по физическим владельцам, а выводы о переносах
сохранены как предложения.

| Метрика локального снимка 2026-10-08  | Значение | Граница интерпретации                           |
| ------------------------------------- | -------: | ----------------------------------------------- |
| Зарегистрированные и доступные домены |       51 | Доступность этого checkout, не анонимного клона |
| Файлы внутри доменов                  |     6129 | Включая генерируемые индексы и metadata         |
| Компонентные index.svelte             |      788 | Инвентарь, не число работающих компонентов      |
| index.story.svelte                    |      752 | Наличие примера, не прохождение теста           |

## 2. Домены

Колонки: файлов в домене / компонентных `index.svelte` / atom / molecule / organism / template / page / stories.

Числа пересчитаны 2026-10-08 по текущему локальному checkout после PR #4
(`b77ecf8c9`) и закреплённым module-ревизиям. Учтены все 51 домен, включая
business/travel/geo/wbd, доступные в этом окружении. Незакоммиченные изменения
вложенных репозиториев входят в снимок; это не инвентаризация только Git HEAD.
Исключены `.git`, `node_modules`, `dist`, `.svelte-kit`, `.package-input`.
«Файлы» включают barrel-файлы и metadata внутри домена; «компонент» —
`component/<joint>/<family>/index.svelte`, «story» — `index.story.svelte`.
Наличие story не подтверждает её успешный запуск.

**Наполненность** сохранена из авторской оценки аудита `81bd28b90`: пять точек —
широкий набор, три — основа с пробелами, одна — небольшая заготовка. Это
субъективная оценка функционального охвата, не тестовое покрытие, доступность
или готовность к production. После переноса доменов рейтинг заново не выставлялся.
Группы ниже — аналитическая классификация; физических владельцев определяет
[modules/readme.md](../../modules/readme.md). Например, token принадлежит sandbox,
animation — interaction, webgl — architecture; booking и travel-* — private travel.

### 2.1 Фундамент (дизайн-система)

| Домен               | Назначение                                                    | Файлы | Svelte | A/M/O/T/P   | Stories | Наполненность |
| ------------------- | ------------------------------------------------------------- | ----: | -----: | ----------- | ------: | ------------- |
| `theme` (субмодуль) | ThemeProvider, режимы, палитры, `Story` — каркас всех stories |   207 |     11 | 4/5/2/0/0   |      11 | ●●●●○         |
| `token`             | дизайн-токены, редакторы токенов, «орбиты»                    |   133 |     20 | 12/5/3/0/0  |      20 | ●●●○○         |
| `svg` (субмодуль)   | SVG-примитивы, `icon`, `flag`; преобладают ресурсы            |   751 |     11 | 11/0/0/0/0  |      10 | ●●●●○         |
| `typography`        | текст, заголовки, ссылки, `kbd`, `badge`                      |    72 |     11 | 8/3/0/0/0   |      11 | ●●●○○         |
| `layout`            | контейнеры, сетки, разделители, sticky/split/overlay          |   251 |     30 | 17/12/1/0/0 |      30 | ●●●●○         |
| `animation`         | спиннеры, skeleton, marquee, 3D-куб, «пляжные» сцены          |   176 |     27 | 21/3/3/0/0  |      27 | ●●●○○         |
| `webgl`             | GL-холст и шейдерные сцены                                    |    32 |      5 | 1/3/1/0/0   |       5 | ●●○○○         |

### 2.2 Ввод и управление

| Домен      | Назначение                                                             | Файлы | Svelte | A/M/O/T/P  | Stories | Наполненность |
| ---------- | ---------------------------------------------------------------------- | ----: | -----: | ---------- | ------: | ------------- |
| `button`   | кнопки, включая анимированные варианты                                 |    95 |     16 | 16/0/0/0/0 |      16 | ●●●●○         |
| `control`  | checkbox, radio, switch, chip, stepper, slider, combobox, multi-select |   159 |     21 | 12/6/3/0/0 |      21 | ●●●●○         |
| `input`    | поля ввода, email/phone/password, textarea, rich text, tag-input       |   138 |     23 | 7/14/2/0/0 |      23 | ●●●●○         |
| `form`     | заголовок/футер формы, валидация, адрес, schema-form                   |    76 |     12 | 2/4/6/0/0  |      12 | ●●●○○         |
| `calendar` | дни, слоты, date/time/range pickers, event calendar                    |   109 |     17 | 2/6/9/0/0  |      16 | ●●●●○         |
| `file`     | загрузка, drop-zone, файловый браузер, превью, экспорт                 |   141 |     16 | 1/5/10/0/0 |      16 | ●●●●○         |
| `search`   | строка поиска, подсказки, автодополнение, результаты                   |    53 |      6 | 2/1/3/0/0  |       6 | ●●○○○         |

### 2.3 Навигация и обратная связь

| Домен          | Назначение                                                        | Файлы | Svelte | A/M/O/T/P | Stories | Наполненность |
| -------------- | ----------------------------------------------------------------- | ----: | -----: | --------- | ------: | ------------- |
| `menu`         | burger, dropdown, mega-menu, drawer, app-header                   |    75 |     11 | 4/4/3/0/0 |      11 | ●●●○○         |
| `navigation`   | pagination, sidebar, bottom-sheet                                 |    34 |      5 | 2/0/3/0/0 |       5 | ●●○○○         |
| `dialog`       | modal, confirm, **а также** tabs, accordion, breadcrumbs, stepper |   140 |     23 | 9/9/5/0/0 |      23 | ●●●○○         |
| `notification` | alert, badge, toast-stack, центр уведомлений                      |    74 |     10 | 5/2/3/0/0 |      10 | ●●●○○         |
| `list`         | маркер, drag-and-drop/сортируемый список                          |    37 |      4 | 1/2/1/0/0 |       4 | ●○○○○         |
| `tree`         | flat-tree, tree-viewer                                            |    29 |      3 | 0/3/0/0/0 |       3 | ●●○○○         |
| `table`        | ячейки, строки, колонки, фильтры, data-table                      |   134 |     18 | 7/7/4/0/0 |      17 | ●●●●○         |

### 2.4 Медиа и визуализация

| Домен             | Назначение                                                      | Файлы | Svelte | A/M/O/T/P  | Stories | Наполненность |
| ----------------- | --------------------------------------------------------------- | ----: | -----: | ---------- | ------: | ------------- |
| `image`           | image, caption, gallery, редактор на canvas                     |    46 |      7 | 2/3/2/0/0  |       7 | ●●○○○         |
| `audio`           | плеер, визуализатор, запись                                     |    41 |      4 | 3/0/1/0/0  |       4 | ●●○○○         |
| `video`           | плеер, видео-сцена                                              |    16 |      2 | 0/2/0/0/0  |       2 | ●○○○○         |
| `canvas`          | рисование, палитра, совместный холст, выбор области скриншота   |    68 |      7 | 0/5/2/0/0  |       7 | ●●○○○         |
| `chart`           | оси, bar/pie/line/scatter/heatmap, Delphi-диаграммы, риск-карты |   227 |     31 | 7/9/15/0/0 |      31 | ●●●●○         |
| `graph`           | узлы/рёбра, онтологии, 3D-сцены, `zwicky-scene`                 |   132 |     14 | 5/7/2/0/0  |      10 | ●●●○○         |
| `erd`             | ER-диаграмма схемы БД                                           |    72 |      9 | 3/1/5/0/0  |       8 | ●●●○○         |
| `idef-zero`       | IDEF0-диаграммы                                                 |    43 |      7 | 3/3/1/0/0  |       7 | ●●●○○         |
| `workspace`       | нодовый редактор (порты, связи, minimap, палитра)               |   119 |     15 | 7/4/4/0/0  |      13 | ●●●○○         |
| `presentation`    | Prezi-подобный движок (сцена, инспектор, рабочее место)         |    74 |      5 | 0/2/2/0/1  |       5 | ●●○○○         |
| `geo` (приватный) | карты, пины; числа получены из доступного checkout              |    78 |      8 | 0/0/8/0/0  |       8 | ●●○○○         |

### 2.5 Прикладные (бизнес) домены

| Домен          | Назначение                                                       | Файлы | Svelte | A/M/O/T/P   | Stories | Наполненность      |
| -------------- | ---------------------------------------------------------------- | ----: | -----: | ----------- | ------: | ------------------ |
| `auth`         | логин, регистрация, восстановление, сессии, social-login         |   107 |     15 | 4/3/8/0/0   |      15 | ●●●●○              |
| `user`         | avatar, avatar-group, профиль, настройки аккаунта                |    50 |      5 | 2/1/2/0/0   |       5 | ●●○○○              |
| `chat`         | сообщения, композер, треды, список чатов                         |   140 |     23 | 8/12/3/0/0  |      23 | ●●●●○              |
| `social`       | рейтинг, реакции, лента, комментарии, друзья                     |   104 |     10 | 1/2/7/0/0   |      10 | ●●●○○              |
| `commerce`     | карточки, цены, оплата, доставка, заказы, налоги                 |   262 |     38 | 0/13/25/0/0 |      38 | ●●●●○              |
| `product`      | карточка/каталог/сравнение/отзывы/вишлист                        |    86 |     16 | 1/10/5/0/0  |      16 | ●●●○○              |
| `booking`      | поля и виджет бронирования туров                                 |    78 |     19 | 1/14/4/0/0  |      18 | ●●●○○              |
| `marketing`    | баннеры, hero, воронка, A/B-тесты, аналитика                     |    68 |      9 | 2/3/4/0/0   |       9 | ●●○○○              |
| `landing`      | секции лендинга (hero, кейсы, workflow, nav-bar)                 |    55 |     11 | 0/5/6/0/0   |      10 | ●●●○○              |
| `management`   | KPI, дашборды, карточки статистики, команда                      |   118 |     14 | 3/6/5/0/0   |      14 | ●●●○○              |
| `portfolio`    | на деле — управление проектами: kanban, scrum-backlog, burn-down |    97 |     14 | 3/9/2/0/0   |       6 | ●●○○○              |
| `localization` | флаг страны, переключатель языка/локали, редактор переводов      |    45 |      4 | 1/0/3/0/0   |       4 | ●●○○○              |
| `science`      | таблица Менделеева, спектры поглощения                           |    57 |     12 | 4/5/3/0/0   |       3 | ●●●○○ (узкая тема) |

### 2.6 Продуктовые/брендовые домены

| Домен             | Назначение                                              | Файлы | Svelte | A/M/O/T/P    | Stories |
| ----------------- | ------------------------------------------------------- | ----: | -----: | ------------ | ------: |
| `travel-commerce` | витрина туров (Шри-Ланка), корзина, маршрут, «черепаха» |   181 |     42 | 1/18/18/5/0  |      42 |
| `travel-admin`    | админка туров: прайс-матрица, редактор продукта, аддоны |    90 |     12 | 0/1/7/4/0    |      12 |
| `spanish`         | лендинг осенней школы испанского                        |    50 |     14 | 4/4/5/0/1    |      14 |
| `wbd` (приватный) | продуктовые компоненты; числа из доступного checkout    |   478 |     88 | 3/20/54/11/0 |      85 |

### 2.7 Служебные домены

| Домен                | Назначение                                                                               | Файлы | Svelte | Stories |
| -------------------- | ---------------------------------------------------------------------------------------- | ----: | -----: | ------: |
| `domain`             | сама песочница: explorer, sidebar, toolbars, device frame/viewport, диагностика, лендинг |   212 |     33 |      29 |
| `server` (субмодуль) | менеджеры для API песочницы (`DomainManager`, `DiagnosticManager`, `DashboardManager`)   |    19 |      0 |       0 |

## 3. Предлагаемые недостающие компоненты

Ориентир — Material Design 3 (issue прямо называет его образцом) плюс то, что нужно самой
песочнице и Prezi/WebGL-направлению. Таблица и список восстановлены из аудита
`81bd28b90`. «Нет»/«есть» отражают его инвентаризацию, а не свежую проверку API.
Перед реализацией нужно проверить текущего владельца, варианты и семантику;
наличие имени не доказывает эквивалентность реализации. Предложения не являются
утверждённым планом; новые домены требуют согласования по AGENTS.md.

### 3.1 Кандидаты на дополнение набора Material Design 3

| MD3-компонент                               | Есть сейчас                                                            | Предложение                                                                   |
| ------------------------------------------- | ---------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| FAB / Extended FAB                          | нет                                                                    | `button/component/atom/fab`, `button/component/molecule/fab-menu`             |
| Navigation bar (нижняя панель вкладок)      | нет                                                                    | `navigation/component/molecule/navigation-bar`                                |
| Navigation rail                             | нет                                                                    | `navigation/component/organism/navigation-rail`                               |
| Navigation drawer                           | `menu/organism/drawer` (не MD3-модель)                                 | `navigation/component/organism/navigation-drawer`                             |
| Top app bar (small/medium/large)            | `menu/organism/app-header`                                             | `navigation/component/organism/top-app-bar` с вариантами                      |
| Snackbar                                    | `notification/molecule/toast-stack`                                    | `notification/component/atom/snackbar` (одиночный, с action)                  |
| Tooltip (plain/rich)                        | `animation/atom/tooltip`                                               | `dialog/component/atom/tooltip`, `dialog/component/molecule/rich-tooltip`     |
| Progress indicator (linear/circular)        | `animation/atom/{progress-bar,spinner}`                                | `notification/component/atom/{linear-progress,circular-progress}`             |
| Side sheet                                  | нет                                                                    | `dialog/component/organism/side-sheet`                                        |
| Search view (полноэкранный)                 | `search/molecule/search-bar`                                           | `search/component/organism/search-view`                                       |
| Carousel (MD3 hero/multi-browse)            | `animation/organism/media-slider`, `product/molecule/product-carousel` | `layout/component/organism/carousel` (общий)                                  |
| Segmented button                            | `control/atom/action-segmented-control`                                | переименовать/выровнять API под MD3                                           |
| Divider с подписью / List item (1–3 строки) | `layout/atom/divider`, `list` почти пуст                               | `list/component/atom/list-item`, `list/component/molecule/list-item-two-line` |

### 3.2 Предложения по существующим доменам

- `list` — нет базового `list-item`, `virtual-list`, `infinite-scroll`, `description-list`.
- `navigation` — нет `tabs` (лежат в `dialog`), `breadcrumbs` (в `dialog`), `skip-link`, `stepper` (в `dialog`).
- `typography` — нет `code-block` с подсветкой, `prose`, `truncate`/`line-clamp`.
- `feedback` (нового домена нет) — `empty-state`, `error-state`, `result`/`404`, `skeleton` (в `animation`).
- `form` — нет `form-field` (label + control + helper + error как одна обёртка), `fieldset`,
  `otp-input` (есть только атом `input/atom/input-pin-digit`), `password-strength-meter`.
- `auth` — `two-factor`, `passkey`, `otp-verification`.
- `chart` — `area-chart`, `donut`, `gauge`, `sparkline`, `treemap`, `sankey`, `candlestick`.
- `video` — 2 компонента: нет `video-controls`, `captions`, `playlist`, `picture-in-picture`.
- `audio` — `waveform`, `playlist`.
- `presentation` — `slide`, `slide-thumbnail-strip`, `presenter-notes`, `transition-picker`,
  `timeline` — без этого Prezi-движок пока только сцена + инспектор.
- `user` — `user-menu`, `presence-indicator` (сейчас `chat/atom/status-indicator`).
- `localization` — `formatted-date`, `formatted-number`, `rtl-provider`.
- Доступность (нового домена нет, предлагается `a11y` или `layout`) — `visually-hidden`, `live-region`,
  `focus-trap`, `skip-link`.
- `domain` (песочница) — `story-iframe` (превью в iframe для честного `@media`), `screenshot-panel`,
  `viewport-size-input` — см. `routes/readme.md`.
- Шаблоны/страницы: всего 20 templates и 4 pages. Не хватает типовых шаблонов вне travel:
  `dashboard-page`, `settings-page`, `auth-page`, `list-detail-page`, `error-page`.

## 4. Размещение компонентов и кандидаты на объединение

Восстановлена подробная карта пересечений из `81bd28b90`. «Куда» — авторская
гипотеза для архитектурного обсуждения. Одинаковые имена и близкая тема не
доказывают дублирование поведения. Перед переносом сравнить recipe, состояния,
вызовы, стили и обратную совместимость. Пути в таблице логические; физический
владелец находится через modules.json. Перенос из публичного домена в travel/wbd
требует отдельного решения: публичное ядро не должно зависеть от приватного.

### 4.1 Не в своём домене

| Где сейчас                                                                                                                                                 | Куда                                                  | Почему                                                                                                                             |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `dialog/component/atom/{breadcrumbs,breadcrumb-link,breadcrumb-dropdown,breadcrumb-separator}`, `dialog/component/molecule/breadcrumbs`                    | `navigation`                                          | навигация, а не диалог; к тому же дубль atom/molecule                                                                              |
| `dialog/component/{atom/tab,tab-list,tab-panel,tab-panels; molecule/tabs,stylist-tab}`                                                                     | `navigation` (или `layout`)                           | вкладки — навигация по содержимому                                                                                                 |
| `dialog/component/{atom/accordion-layout; molecule/accordion,accordion-group}`                                                                             | `layout` (disclosure)                                 | не модальное окно                                                                                                                  |
| `dialog/component/molecule/stepper`                                                                                                                        | `navigation`                                          | дубль по смыслу с `control/atom/stepper` (числовой stepper) — нужно развести имена: `step-indicator` vs `number-stepper`           |
| `dialog/component/molecule/general-toolbar`, `dialog/component/organism/component-info-card`                                                               | `domain`                                              | служебные компоненты песочницы                                                                                                     |
| `animation/component/atom/tooltip`                                                                                                                         | `dialog`                                              | всплывающая подсказка — overlay                                                                                                    |
| `animation/component/atom/{progress-bar,spinner,skeleton}`, `animation/component/molecule/loading`                                                         | `notification` / новый `feedback`                     | индикаторы состояния, а не анимации                                                                                                |
| `animation/component/atom/{beach-water,palm-sway,whale-spout,wave-surf,turtle-crawl,turtle-logo-mark}`                                                     | `travel-commerce` (или `wbd`)                         | брендовая графика тура/«черепахи»                                                                                                  |
| `animation/component/molecule/atomic-tier-card`, `animation/component/organism/{atomic-principles-showcase,component-library-stats}`                       | `domain` (лендинг песочницы)                          | рассказывают о самой библиотеке                                                                                                    |
| `animation/component/atom/scroll-phase-debug`                                                                                                              | `domain` или удалить                                  | отладочный компонент в публичном домене                                                                                            |
| `layout/component/molecule/popover`                                                                                                                        | `dialog`                                              | overlay                                                                                                                            |
| `layout/component/molecule/animated-expandable-table-row`                                                                                                  | `table`                                               | строка таблицы                                                                                                                     |
| `layout/component/atom/node-dot`                                                                                                                           | `graph` / `workspace`                                 | элемент графа                                                                                                                      |
| `file/component/molecule/quantity-selector`                                                                                                                | `commerce` или `control`                              | не про файлы                                                                                                                       |
| `form/component/organism/login-form`                                                                                                                       | `auth`                                                | дубль `auth/molecule/login`                                                                                                        |
| `form/component/organism/screen-reader`                                                                                                                    | `a11y`/`layout`                                       | не форма                                                                                                                           |
| `form/component/organism/search-form`                                                                                                                      | `search`                                              | дубль `search/organism/search-form`                                                                                                |
| `form/component/molecule/checkbox-group` ↔ `input/component/molecule/checkbox-group`                                                                       | один из них (`control`)                               | полный дубль имени                                                                                                                 |
| `input/component/molecule/{radio-button-group,radio-group}`                                                                                                | `control` (рядом с `control/atom/radio`)              | группа радио-кнопок — control                                                                                                      |
| `chat/component/molecule/icon-picker`                                                                                                                      | `control`                                             | не специфичен для чата                                                                                                             |
| `chat/component/organism/list-with-avatars`                                                                                                                | `list` / `user`                                       | общий список                                                                                                                       |
| `chat/component/atom/{status-indicator,dot}`                                                                                                               | `user` / `notification`                               | presence используется не только в чате                                                                                             |
| `commerce/component/molecule/{alert-card,article-card,card-with-image,category-card,data-display-card,expandable-card,link-card,metric-card}`              | новый домен `card` (или `layout`)                     | универсальные карточки, к коммерции не относятся                                                                                   |
| `commerce/component/molecule/post-card` ↔ `social/component/molecule/post-card`                                                                            | `social`                                              | кандидат на сравнение API; старый дефект descriptor-поля больше не применим к tree-only формату                                    |
| `commerce/component/organism/user-card`                                                                                                                    | `user`                                                | карточка пользователя                                                                                                              |
| `commerce/component/organism/filter-bar` ↔ `table/component/molecule/filter-bar`                                                                           | `search` (общий) или развести имена                   | дубль имени                                                                                                                        |
| `commerce/component/organism/cart-summary` ↔ `travel-commerce/component/organism/cart-summary-panel`                                                       | `commerce` (общий) + travel-обёртка                   | дублирование логики корзины                                                                                                        |
| `image/component/molecule/card`, `list/component/molecule/base-card`, `management/component/molecule/draggable-card`                                       | `card`                                                | три разные «базовые карточки»                                                                                                      |
| `management/component/organism/stat-card` ↔ `management/component/molecule/stats-card`                                                                     | один компонент с вариантами                           | почти одинаковые имена на разных уровнях                                                                                           |
| `management/component/atom/kpiindicator`                                                                                                                   | `chart` (`metric`), имя `kpi-indicator`               | потерян дефис в имени семьи                                                                                                        |
| `portfolio/*` (kanban, scrum-backlog, burn-down-chart, issues-table)                                                                                       | переименовать домен в `project` / `agile`             | «портфолио» вводит в заблуждение                                                                                                   |
| `portfolio/component/molecule/burn-down-chart`                                                                                                             | `chart`                                               | график                                                                                                                             |
| `navigation/component/organism/sidebar` ↔ `menu/component/organism/drawer` ↔ `navigation/component/organism/bottom-sheet`                                  | `navigation` (+ `dialog/side-sheet`)                  | три близких «выезжающих панели» в двух доменах                                                                                     |
| `typography/component/atom/badge` ↔ `notification/component/atom/{count-badge,notification-badge}` ↔ `control/component/atom/tag`                          | развести: `badge` (статус), `count-badge`, `tag/chip` | пересекающиеся понятия                                                                                                             |
| `layout/component/atom/grid` ↔ `layout/component/molecule/grid` ↔ `layout/component/atom/grid-layout`                                                      | один `grid`                                           | три сетки                                                                                                                          |
| `table/component/organism/component`                                                                                                                       | переименовать (`table-component`?)                    | имя семьи совпадает с именем кластера — ломает читаемость пути `table/component/organism/component`                                |
| `theme/component/molecule/story`                                                                                                                           | `domain` (или отдельный `story`)                      | каркас stories — инструмент песочницы; тянет `theme` в зависимость каждой story                                                    |
| `token/component/molecule/domain-descriptor-panel`                                                                                                         | `domain`                                              | показывает дескриптор манифеста                                                                                                    |
| `marketing/component/molecule/hero` ↔ `landing/component/organism/hero-section` ↔ `landing/component/molecule/hero-media-section`                          | `landing`                                             | три hero                                                                                                                           |
| `travel-commerce/component/molecule/{turtle-hero-photo-scene,turtle-hero-wordmark,turtle-photo-to-mark}`, `webgl/component/molecule/turtle-dissolve-scene` | отдельный брендовый пакет                             | брендовая графика                                                                                                                  |
| `token/const/object/geo`                                                                                                                                   | `geo`                                                 | историческая зависимость устранена в afb625862: preset хранит собственные значения; перенос больше не нужен для исправления сборки |
| `input/const/style`                                                                                                                                        | `input/const/preset` или `input/const/record`         | joint `style` вне белого списка AGENTS.md                                                                                          |
| `localization/function/format-date-time`                                                                                                                   | `localization/function/transform/format-date-time`    | пропущен joint                                                                                                                     |

### 4.2 Продуктовые границы: что уже изменилось

| Предложение прежнего аудита                    | Текущее состояние                                                                                            | Следующий критерий                                                |
| ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------- |
| Вынести booking, travel-commerce, travel-admin | Выполнено в исходниках: private workspace `modules/business/travel`; публичная assembly исключает три домена | Регенерация корней, проверки peer-imports и независимой установки |
| Изолировать geo/wbd                            | Независимые приватные репозитории, исключены из публичного npm                                               | Проверить публичный пакет без этих checkout                       |
| Separate spanish/science sources               | spanish is nested at `modules/business/spanish`; science belongs to `modules/management/science`             | Ownership updated without changing logical domain imports         |
| Вынести брендовые сцены из общих доменов       | Остаётся аналитическим кандидатом                                                                            | Проверить текущие зависимости и сохранить публичную границу       |

### 4.3 Предлагаемое слияние/переименование доменов

| Было                                                          | Стало            |
| ------------------------------------------------------------- | ---------------- |
| `portfolio`                                                   | `project`        |
| карточки из `commerce`, `image`, `list`, `management`         | новый `card`     |
| индикаторы из `animation`, `notification` + empty/error-state | новый `feedback` |
| `tabs`, `breadcrumbs`, `stepper` из `dialog`                  | `navigation`     |
| `landing` + hero из `marketing`                               | `landing`        |
