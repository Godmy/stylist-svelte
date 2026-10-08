# src/lib — домены предметной области

> Часть ответа на [Godmy/stylist-svelte#1](https://github.com/Godmy/stylist-svelte/issues/1).
> Общая оценка архитектуры — в [`../readme.md`](../readme.md), песочница — в
> [`../routes/readme.md`](../routes/readme.md).
>
> Методика: посчитаны файлы на диске (`find`) в чистом клоне без приватных субмодулей `wbd` и `geo`;
> для `wbd`/`geo` использован манифест `domain/data/json/domain-page-manifest/index.json`.
> «Компонент» = папка семьи в кластере `component` с `index.svelte`.

## 1. Сводка

- Корневых доменов: **51** (на диске и в `tree` манифеста совпадают). В issue — 54.
- Компонентов на диске (без `wbd`, `geo`): **689**; в манифесте **779** дескрипторов
  (из них `wbd` — 88, `geo` — 8). В issue — 793.
- Распределение по уровням Atomic Design (манифест): atom 209, molecule 270, organism 276,
  template 20, page 4. Шаблонов и страниц почти нет — библиотека «снизу тяжёлая».
- Stories на диске: 658 (95 % компонентов). Без stories: `science` (9 из 12), `portfolio` (8 из 14),
  `graph` (4 из 14), `domain` (4 из 33), `workspace` (2 из 15) и по одной в `erd`, `landing`, `svg`, `table`.
- Unit-тестов: 1 (`theme`).
- Манифест отстаёт от диска: нет `button/component/atom/{animated,arrow,fill,glow,morph,selection,shine}-button`,
  у `commerce/component/molecule/post-card` пустой `componentModulePath`.

Шкала наполненности (оценка автора документа относительно «типичного» набора в зрелых
дизайн-системах — Material Design 3, Carbon, Ant Design — для данного домена):

- ●●●●● — полноценный домен, отдельные пробелы;
- ●●●○○ — основа есть, заметные пробелы;
- ●○○○○ — заготовка / 1–3 компонента.

## 2. Домены

Колонки: файлов в домене / `index.svelte` / atom / molecule / organism / template / page / stories.

### 2.1 Фундамент (дизайн-система)

| Домен               | Назначение                                                     | Файлы | Svelte | A/M/O/T/P   | Stories | Наполненность |
| ------------------- | -------------------------------------------------------------- | ----: | -----: | ----------- | ------: | ------------- |
| `theme` (субмодуль) | ThemeProvider, режимы, палитры, `Story` — каркас всех stories  |   208 |     11 | 4/5/2/0/0   |      11 | ●●●●○         |
| `token`             | дизайн-токены, редакторы токенов, «орбиты»                     |   133 |     20 | 12/5/3/0/0  |      20 | ●●●○○         |
| `svg` (субмодуль)   | SVG-примитивы, `icon`, `flag` (749 файлов — в основном иконки) |   749 |     11 | 11/0/0/0/0  |      10 | ●●●●○         |
| `typography`        | текст, заголовки, ссылки, `kbd`, `badge`                       |    70 |     11 | 8/3/0/0/0   |      11 | ●●●○○         |
| `layout`            | контейнеры, сетки, разделители, sticky/split/overlay           |   249 |     30 | 17/12/1/0/0 |      30 | ●●●●○         |
| `animation`         | спиннеры, skeleton, marquee, 3D-куб, «пляжные» сцены           |   176 |     27 | 21/3/3/0/0  |      27 | ●●●○○         |
| `webgl`             | GL-холст и шейдерные сцены                                     |    32 |      5 | 1/3/1/0/0   |       5 | ●●○○○         |

### 2.2 Ввод и управление

| Домен      | Назначение                                                             | Файлы | Svelte | A/M/O/T/P  | Stories | Наполненность |
| ---------- | ---------------------------------------------------------------------- | ----: | -----: | ---------- | ------: | ------------- |
| `button`   | кнопки (16 видов, включая 7 новых анимированных)                       |    95 |     16 | 16/0/0/0/0 |      16 | ●●●●○         |
| `control`  | checkbox, radio, switch, chip, stepper, slider, combobox, multi-select |   159 |     21 | 12/6/3/0/0 |      21 | ●●●●○         |
| `input`    | поля ввода, email/phone/password, textarea, rich text, tag-input       |   138 |     23 | 7/14/2/0/0 |      23 | ●●●●○         |
| `form`     | заголовок/футер формы, валидация, адрес, schema-form                   |    76 |     12 | 2/4/6/0/0  |      12 | ●●●○○         |
| `calendar` | дни, слоты, date/time/range pickers, event calendar                    |   107 |     16 | 2/6/8/0/0  |      16 | ●●●●○         |
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
| `geo` (приватный) | карты, пины (по манифесту: organism 8, recipe 10, slot 14)      |     — |      8 | 0/0/8/0/0  |       — | ●●○○○         |

### 2.5 Прикладные (бизнес) домены

| Домен          | Назначение                                                        | Файлы | Svelte | A/M/O/T/P   | Stories | Наполненность      |
| -------------- | ----------------------------------------------------------------- | ----: | -----: | ----------- | ------: | ------------------ |
| `auth`         | логин, регистрация, восстановление, сессии, social-login          |   107 |     15 | 4/3/8/0/0   |      15 | ●●●●○              |
| `user`         | avatar, avatar-group, профиль, настройки аккаунта                 |    50 |      5 | 2/1/2/0/0   |       5 | ●●○○○              |
| `chat`         | сообщения, композер, треды, список чатов                          |   140 |     23 | 8/12/3/0/0  |      23 | ●●●●○              |
| `social`       | рейтинг, реакции, лента, комментарии, друзья                      |   104 |     10 | 1/2/7/0/0   |      10 | ●●●○○              |
| `commerce`     | карточки, цены, оплата, доставка, заказы, налоги (38 компонентов) |   262 |     38 | 0/13/25/0/0 |      38 | ●●●●○              |
| `product`      | карточка/каталог/сравнение/отзывы/вишлист                         |    86 |     16 | 1/10/5/0/0  |      16 | ●●●○○              |
| `booking`      | поля и виджет бронирования туров                                  |    76 |     18 | 1/13/4/0/0  |      18 | ●●●○○              |
| `marketing`    | баннеры, hero, воронка, A/B-тесты, аналитика                      |    68 |      9 | 2/3/4/0/0   |       9 | ●●○○○              |
| `landing`      | секции лендинга (hero, кейсы, workflow, nav-bar)                  |    55 |     11 | 0/5/6/0/0   |      10 | ●●●○○              |
| `management`   | KPI, дашборды, карточки статистики, команда                       |   118 |     14 | 3/6/5/0/0   |      14 | ●●●○○              |
| `portfolio`    | на деле — управление проектами: kanban, scrum-backlog, burn-down  |    97 |     14 | 3/9/2/0/0   |       6 | ●●○○○              |
| `localization` | флаг страны, переключатель языка/локали, редактор переводов       |    45 |      4 | 1/0/3/0/0   |       4 | ●●○○○              |
| `science`      | таблица Менделеева, спектры поглощения                            |    57 |     12 | 4/5/3/0/0   |       3 | ●●●○○ (узкая тема) |

### 2.6 Продуктовые/брендовые домены

| Домен             | Назначение                                                             | Файлы | Svelte | A/M/O/T/P    | Stories |
| ----------------- | ---------------------------------------------------------------------- | ----: | -----: | ------------ | ------: |
| `travel-commerce` | витрина туров (Шри-Ланка), корзина, маршрут, «черепаха»                |   173 |     41 | 1/18/17/5/0  |      41 |
| `travel-admin`    | админка туров: прайс-матрица, редактор продукта, аддоны                |    90 |     12 | 0/1/7/4/0    |      12 |
| `spanish`         | лендинг осенней школы испанского                                       |    50 |     14 | 4/4/5/0/1    |      14 |
| `wbd` (приватный) | по манифесту: atom 3, molecule 20, organism 54, template 11, recipe 87 |     — |     88 | 3/20/54/11/0 |       — |

### 2.7 Служебные домены

| Домен                | Назначение                                                                               | Файлы | Svelte | Stories |
| -------------------- | ---------------------------------------------------------------------------------------- | ----: | -----: | ------: |
| `domain`             | сама песочница: explorer, sidebar, toolbars, device frame/viewport, диагностика, лендинг |   194 |     33 |      29 |
| `server` (субмодуль) | менеджеры для API песочницы (`DomainManager`, `DiagnosticManager`, `DashboardManager`)   |    20 |      0 |       — |

## 3. Предлагаемые недостающие компоненты

Ориентир — Material Design 3 (issue прямо называет его образцом) плюс то, что нужно самой
песочнице и Prezi/WebGL-направлению.

### 3.1 Material Design 3 — чего нет

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

### 3.2 Пробелы в существующих доменах

- `list` — нет базового `list-item`, `virtual-list`, `infinite-scroll`, `description-list`.
- `navigation` — нет `tabs` (лежат в `dialog`), `breadcrumbs` (в `dialog`), `skip-link`, `stepper` (в `dialog`).
- `typography` — нет `code-block` с подсветкой (хотя `shiki` объявлен runtime-зависимостью, он нигде не импортируется), `prose`, `truncate`/`line-clamp`.
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

## 4. Компоненты не на своём месте и дубли

### 4.1 Не в своём домене

| Где сейчас                                                                                                                                                 | Куда                                                  | Почему                                                                                                                   |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `dialog/component/atom/{breadcrumbs,breadcrumb-link,breadcrumb-dropdown,breadcrumb-separator}`, `dialog/component/molecule/breadcrumbs`                    | `navigation`                                          | навигация, а не диалог; к тому же дубль atom/molecule                                                                    |
| `dialog/component/{atom/tab,tab-list,tab-panel,tab-panels; molecule/tabs,stylist-tab}`                                                                     | `navigation` (или `layout`)                           | вкладки — навигация по содержимому                                                                                       |
| `dialog/component/{atom/accordion-layout; molecule/accordion,accordion-group}`                                                                             | `layout` (disclosure)                                 | не модальное окно                                                                                                        |
| `dialog/component/molecule/stepper`                                                                                                                        | `navigation`                                          | дубль по смыслу с `control/atom/stepper` (числовой stepper) — нужно развести имена: `step-indicator` vs `number-stepper` |
| `dialog/component/molecule/general-toolbar`, `dialog/component/organism/component-info-card`                                                               | `domain`                                              | служебные компоненты песочницы                                                                                           |
| `animation/component/atom/tooltip`                                                                                                                         | `dialog`                                              | всплывающая подсказка — overlay                                                                                          |
| `animation/component/atom/{progress-bar,spinner,skeleton}`, `animation/component/molecule/loading`                                                         | `notification` / новый `feedback`                     | индикаторы состояния, а не анимации                                                                                      |
| `animation/component/atom/{beach-water,palm-sway,whale-spout,wave-surf,turtle-crawl,turtle-logo-mark}`                                                     | `travel-commerce` (или `wbd`)                         | брендовая графика тура/«черепахи»                                                                                        |
| `animation/component/molecule/atomic-tier-card`, `animation/component/organism/{atomic-principles-showcase,component-library-stats}`                       | `domain` (лендинг песочницы)                          | рассказывают о самой библиотеке                                                                                          |
| `animation/component/atom/scroll-phase-debug`                                                                                                              | `domain` или удалить                                  | отладочный компонент в публичном домене                                                                                  |
| `layout/component/molecule/popover`                                                                                                                        | `dialog`                                              | overlay                                                                                                                  |
| `layout/component/molecule/animated-expandable-table-row`                                                                                                  | `table`                                               | строка таблицы                                                                                                           |
| `layout/component/atom/node-dot`                                                                                                                           | `graph` / `workspace`                                 | элемент графа                                                                                                            |
| `file/component/molecule/quantity-selector`                                                                                                                | `commerce` или `control`                              | не про файлы                                                                                                             |
| `form/component/organism/login-form`                                                                                                                       | `auth`                                                | дубль `auth/molecule/login`                                                                                              |
| `form/component/organism/screen-reader`                                                                                                                    | `a11y`/`layout`                                       | не форма                                                                                                                 |
| `form/component/organism/search-form`                                                                                                                      | `search`                                              | дубль `search/organism/search-form`                                                                                      |
| `form/component/molecule/checkbox-group` ↔ `input/component/molecule/checkbox-group`                                                                      | один из них (`control`)                               | полный дубль имени                                                                                                       |
| `input/component/molecule/{radio-button-group,radio-group}`                                                                                                | `control` (рядом с `control/atom/radio`)              | группа радио-кнопок — control                                                                                            |
| `chat/component/molecule/icon-picker`                                                                                                                      | `control`                                             | не специфичен для чата                                                                                                   |
| `chat/component/organism/list-with-avatars`                                                                                                                | `list` / `user`                                       | общий список                                                                                                             |
| `chat/component/atom/{status-indicator,dot}`                                                                                                               | `user` / `notification`                               | presence используется не только в чате                                                                                   |
| `commerce/component/molecule/{alert-card,article-card,card-with-image,category-card,data-display-card,expandable-card,link-card,metric-card}`              | новый домен `card` (или `layout`)                     | универсальные карточки, к коммерции не относятся                                                                         |
| `commerce/component/molecule/post-card` ↔ `social/component/molecule/post-card`                                                                           | `social`                                              | дубль; к тому же в манифесте без `componentModulePath`                                                                   |
| `commerce/component/organism/user-card`                                                                                                                    | `user`                                                | карточка пользователя                                                                                                    |
| `commerce/component/organism/filter-bar` ↔ `table/component/molecule/filter-bar`                                                                          | `search` (общий) или развести имена                   | дубль имени                                                                                                              |
| `commerce/component/organism/cart-summary` ↔ `travel-commerce/component/organism/cart-summary-panel`                                                      | `commerce` (общий) + travel-обёртка                   | дублирование логики корзины                                                                                              |
| `image/component/molecule/card`, `list/component/molecule/base-card`, `management/component/molecule/draggable-card`                                       | `card`                                                | три разные «базовые карточки»                                                                                            |
| `management/component/organism/stat-card` ↔ `management/component/molecule/stats-card`                                                                    | один компонент с вариантами                           | почти одинаковые имена на разных уровнях                                                                                 |
| `management/component/atom/kpiindicator`                                                                                                                   | `chart` (`metric`), имя `kpi-indicator`               | потерян дефис в имени семьи                                                                                              |
| `portfolio/*` (kanban, scrum-backlog, burn-down-chart, issues-table)                                                                                       | переименовать домен в `project` / `agile`             | «портфолио» вводит в заблуждение                                                                                         |
| `portfolio/component/molecule/burn-down-chart`                                                                                                             | `chart`                                               | график                                                                                                                   |
| `navigation/component/organism/sidebar` ↔ `menu/component/organism/drawer` ↔ `navigation/component/organism/bottom-sheet`                                | `navigation` (+ `dialog/side-sheet`)                  | три близких «выезжающих панели» в двух доменах                                                                           |
| `typography/component/atom/badge` ↔ `notification/component/atom/{count-badge,notification-badge}` ↔ `control/component/atom/tag`                        | развести: `badge` (статус), `count-badge`, `tag/chip` | пересекающиеся понятия                                                                                                   |
| `layout/component/atom/grid` ↔ `layout/component/molecule/grid` ↔ `layout/component/atom/grid-layout`                                                    | один `grid`                                           | три сетки                                                                                                                |
| `table/component/organism/component`                                                                                                                       | переименовать (`table-component`?)                    | имя семьи совпадает с именем кластера — ломает читаемость пути `table/component/organism/component`                      |
| `theme/component/molecule/story`                                                                                                                           | `domain` (или отдельный `story`)                      | каркас stories — инструмент песочницы; тянет `theme` в зависимость каждой story                                          |
| `token/component/molecule/domain-descriptor-panel`                                                                                                         | `domain`                                              | показывает дескриптор манифеста                                                                                          |
| `marketing/component/molecule/hero` ↔ `landing/component/organism/hero-section` ↔ `landing/component/molecule/hero-media-section`                        | `landing`                                             | три hero                                                                                                                 |
| `travel-commerce/component/molecule/{turtle-hero-photo-scene,turtle-hero-wordmark,turtle-photo-to-mark}`, `webgl/component/molecule/turtle-dissolve-scene` | отдельный брендовый пакет                             | брендовая графика                                                                                                        |
| `token/const/object/geo`                                                                                                                                   | `geo`                                                 | публичный домен импортирует приватный `geo` и ломает сборку без него                                                     |
| `input/const/style`                                                                                                                                        | `input/const/preset` или `input/const/record`         | joint `style` вне белого списка AGENTS.md                                                                                |
| `localization/function/format-date-time`                                                                                                                   | `localization/function/transform/format-date-time`    | пропущен joint                                                                                                           |

### 4.2 Домены, которые стоит вынести из ядра

`spanish`, `travel-commerce`, `travel-admin`, `booking` (сильно завязан на туры:
`booking-adventure-list`, `booking-physical-load-filter`, `booking-tour-type-filter`), `science`
(узкоспециализированный) — кандидаты в отдельные субмодули/пакеты по образцу `wbd` и `geo`.
Это уменьшит пакет, манифест и время старта песочницы, а ядро станет чище.

### 4.3 Предлагаемое слияние/переименование доменов

| Было                                                          | Стало            |
| ------------------------------------------------------------- | ---------------- |
| `portfolio`                                                   | `project`        |
| карточки из `commerce`, `image`, `list`, `management`         | новый `card`     |
| индикаторы из `animation`, `notification` + empty/error-state | новый `feedback` |
| `tabs`, `breadcrumbs`, `stepper` из `dialog`                  | `navigation`     |
| `landing` + hero из `marketing`                               | `landing`        |
> Обновление структуры, 2026-10-08: домены перенесены в `../../modules/*`.
> Старые папки-ссылки удалены; `geo` и `wbd` находятся в `../../modules/geo` и `../../modules/wbd`. Ниже сохранён исходный аудит.
> Актуальная структура и условия регенерации: [docs/modules.md](../../docs/modules.md).
