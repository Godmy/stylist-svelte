# src/routes — песочница и API

Маршруты используют домены `domain` и `server` владельца `modules/sandbox`,
а тема подключается из `modules/design-system/theme`. Ниже описано поведение
исходников на `681e886ea`; успешный запуск этой ревизии здесь не подтверждён.

## Маршруты

| Адрес / метод                          | Реализация                                                       | Назначение                                                           |
| -------------------------------------- | ---------------------------------------------------------------- | -------------------------------------------------------------------- |
| `/`                                    | [+page.server.ts](+page.server.ts), [+page.svelte](+page.svelte) | Получает `{ tree }` через DomainManager и открывает DomainPlayground |
| Общий layout                           | [+layout.svelte](+layout.svelte)                                 | Подключает app.css и ThemeProvider                                   |
| `GET /api/content?path=`               | [api/[endpoint]/+server.ts](api/[endpoint]/+server.ts)           | Возвращает текст файла по логическому адресу                         |
| `GET /api/descriptor?entityPath=`      | Тот же обработчик                                                | Строит проекцию компонента по компактному дереву                     |
| `GET /api/di?component=&dependency=`   | Тот же обработчик                                                | Читает отчёты зависимостей через DiagnosticManager                   |
| `GET /api/dashboard/audit-tree`        | [Обработчик](api/dashboard/audit-tree/+server.ts)                | Дерево аудита                                                        |
| `GET /api/dashboard/errors/latest`     | [Обработчик](api/dashboard/errors/latest/+server.ts)             | Последний отчёт ошибок                                               |
| `GET /api/dashboard/indexation/latest` | [Обработчик](api/dashboard/indexation/latest/+server.ts)         | Последний отчёт индексации                                           |
| `GET /api/dashboard/reports/latest`    | [Обработчик](api/dashboard/reports/latest/+server.ts)            | Сводка отчётов                                                       |

Для известных endpoint `content`, `descriptor`, `di` обработчик POST возвращает
405; неизвестный endpoint возвращает 404. `app.svelte` — обычный файл примера,
а не отдельный маршрут SvelteKit. `hooks.server.ts` находится в корне `src`.

## Страница и stories

Страница начинает с экрана `LANDING`, передавая `initialDomain="wbd"`,
`initialCluster="component"`, `initialJoint="atom"`, `initialPreviewMode="story"`.
В DomainPlayground доступны landing, explorer и diagnostics; explorer и
diagnostics импортируются лениво. Выбор экрана хранится в состоянии компонента.

Explorer восстанавливает файлы из дерева и выбирает domain, cluster, joint и
family. Stories загружаются через glob по физическим `modules/*/*/component/**`,
а для `geo`/`wbd` — по корню домена. Ключи приводятся к прежним логическим
адресам `/src/lib/<domain>/...`. `Story` находится в домене `theme`.

Манифест хранится в
`modules/sandbox/domain/data/json/domain-page-manifest/index.json`. Он содержит
только `tree`; массива `descriptors` нет. DomainManager передаёт компактное
дерево странице, а `resolveComponentDescriptor` строит проекцию по запросу.
Число stories на landing вычисляет `countDomainStories`. Формат и измерения:
[component-manifest-presets.md](../../../.docs/stylist-svelte/component-manifest-presets.md).

## Превью исходников и отчёты

`/api/content` читает зеркало `/generated/lib-source` через `event.fetch`,
на Cloudflare — через `platform.env.ASSETS`, если binding доступен. Зеркало
создаёт [generate-lib-source-mirror.mjs](../../scripts/generate-lib-source-mirror.mjs)
из физических владельцев; Git-метаданные не копируются. Сервер не читает
произвольный исходный файл напрямую: `.` и `..` в адресе отклоняются, для
отсутствующего файла возвращается 404, для превышения лимита — 413.

`yarn dev` сам зеркало не создаёт. Для просмотра исходников локально запустите
`node scripts/generate-lib-source-mirror.mjs` из корня библиотеки; это снимок
файлов, который нужно обновлять после изменений. `build:site` выполняет этот
шаг автоматически. DI/dashboard используют результаты внешних инструментов
`stylist/*/output`; их наличие не гарантируется checkout библиотеки.

## Размер превью и скриншоты

Device switcher задаёт поверхности Story `max-width`: Mobile — 375 px,
Tablet — 768 px, Desktop — 1440 px, Fullscreen — без ограничения. Поверхность
использует `container-type: inline-size`. Это изменение контейнера; `@media`
продолжает зависеть от окна браузера. Доступная ширина также ограничена оболочкой.

[examples/capture-story-screenshots.mjs](../../examples/capture-story-screenshots.mjs)
переключает эти режимы в explorer и сохраняет PNG и JSON с метриками.
Playwright не объявлен зависимостью проекта. Пример пока читает исходники из
старого `src/lib/<entityPath>`: после переноса модулей эти поля контекста могут
быть `null`. Его совместимость с текущей песочницей не подтверждена.

Скриншоты в `.docs/stylist-svelte/screenshots` относятся к предыдущему аудиту из PR #2.
Они не доказывают текущее состояние UI. Проверки сайта перед выпуском описаны
в [backlog.md](../backlog.md).

## 2. Как устроен UI песочницы

`DomainPlayground` (`modules/sandbox/domain/component/page/domain-playground`) — три экрана.
Раздел восстанавливает подробный анализ из аудита `81bd28b90`, сохранённого до
PR #4. Пути и формат манифеста обновлены; старые скриншоты и browser-замеры
остаются историческими свидетельствами, не результатом нового запуска.

| Экран         | Компонент                   | Содержимое                                                                                                                                               |
| ------------- | --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `LANDING`     | `domain-landing`            | hero, число доменов из tree и stories через countDomainStories, карточки перехода в песочницу                                                            |
| `DOMAIN`      | `domain-explorer` (lazy)    | сам браузер компонентов                                                                                                                                  |
| `DIAGNOSTICS` | `domain-diagnostics` (lazy) | последовательно импортирует и монтирует **каждую** story, меряет `importMs`/`mountMs`, ловит ошибки `import`/`mount`/`window.error`/`unhandledrejection` |

Плавающее меню справа сверху (`domain-menu`): Landing, Components, Diagnostics, Reload manifest
(`window.location.reload()`), Settings (`domain-settings`), переключатель темы. Слева от него —
`device-viewport` (Mobile / Tablet / Desktop / Fullscreen), только на экране `DOMAIN` и только когда
загружена story.

![Лендинг песочницы](../../../.docs/stylist-svelte/screenshots/sandbox-landing.png)

### 2.1 Explorer: меню доменов, переключение кластеров и joint’ов

Сетка `249px | 1fr`. Сайдбар (`domain-sidebar`) состоит из трёх `control/component/molecule/icon-toolbar`
и списка сущностей:

1. **DomainToolbar** — вертикальная колонка доменов (`showLabel={false}`), подпись только в
   `aria-label`/tooltip.
2. **ClusterToolbar** — горизонтальный ряд из 7 кластеров `DOMAIN_CLUSTER`
   (`data, const, type, interface, class, function, component`); показывается **всегда один и тот же
   набор**, даже если в домене нет такого кластера.
3. **JointToolbar** — joint’ы активного кластера из `JOINT_TOOLBAR_ITEMS`, фильтруются
   по `availableItems`; при отсутствии — «no joints».
4. **DomainList** — сущности (семьи) выбранного joint’а с числом файлов.

Справа: строка таксономии (`taxonomy-breadcrumbs` `domain / cluster / joint / family / file`,
поиск `domain-search`, копирование пути), вкладки режимов (`playground`, `DI`, затем файлы
семьи `index.story.svelte`, `index.svelte`, `index.ts`, `state.svelte.ts`) и область превью
(`domain-file-preview`).

Логика переключения (`domain-explorer/state.svelte.ts`):

- при смене домена/кластера/joint’а `$effect`’ы автоматически выбирают **первый** кластер, joint и сущность;
- у сущности предпочитается `index.story.svelte` → режим `story`; иначе — `index.md` → `markdown`; иначе `file`;
- режимы превью: `file | markdown | story | json-tree | di`;
- исходники грузятся `fetch('/api/content?path=…')`, story — из ленивых glob по физическим владельцам; ключ приводится к логическому адресу.

![Story кнопки](../../../.docs/stylist-svelte/screenshots/sandbox-story-button.png)

### 2.2 Подробная карта проблем и предложений

Таблица сохраняет предложения прежнего браузерного аудита. Свежая проверка
исходников подтверждает private wbd по умолчанию, поиск index.md и отсутствие
отдельных /components и /playground; поведение в браузере повторно не измерялось.
Визуальные перекрытия и удобство навигации требуют нового capture.

![Стартовый экран explorer’а без приватного wbd](../../../.docs/stylist-svelte/screenshots/sandbox-explorer-wbd-missing.png)

| #   | Проблема                                                                                                                                  | Где                               | Рекомендация                                                                                                                                          |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Стартовый домен — приватный `wbd`. В публичном клоне первое, что видит человек/ИИ, — «Story playground is not available for this entity.» | `routes/+page.svelte`             | стартовать с публичного домена (`button`) или с первого домена, у которого есть story на диске                                                        |
| 2   | Домены — 51 иконка без подписей                                                                                                           | `domain-toolbar`                  | группировать (Фундамент / Ввод / Навигация / Медиа / Бизнес / Продукты — как в `lib/readme.md`) и показывать подписи хотя бы при наведении/расширении |
| 3   | Кластеры показываются статично (7 штук), даже пустые                                                                                      | `cluster-toolbar`                 | дизейблить/скрывать кластеры, которых нет в `tree` домена, показывать счётчик                                                                         |
| 4   | Согласованность JOINT_TOOLBAR_ITEMS с AGENTS.md требует проверки по текущему списку; прежний аудит отмечал несовпадения                   | `JOINT_TOOLBAR_ITEMS`             | генерировать список из того же источника, что и линтер таксономии                                                                                     |
| 5   | Вкладка Markdown ищет index.md, тогда как компонентная политика предусматривает readme.md                                                 | domain-explorer/state.svelte.ts   | искать `readme.md` (или привести AGENTS.md и файлы к одному имени)                                                                                    |
| 6   | Выбор не отражается в URL — нельзя дать ссылку на компонент, нельзя открыть story из теста/скрипта                                        | `state.svelte.ts`                 | `?d=button&c=component&j=atom&f=button&m=story&device=mobile` или маршрут `/[domain]/[cluster]/[joint]/[family]`                                      |
| 7   | Выбор результата поиска всегда переключает в режим `file`, даже если есть story                                                           | `selectSearchEntry`               | использовать ту же логику предпочтения story, что и при выборе сущности                                                                               |
| 8   | В state остаются локальные interface/type; часть tree-типов уже импортируется из доменов                                                  | `domain-explorer/state.svelte.ts` | Проверить возможность использования существующих контрактов, без механического переноса всех локальных типов                                          |
| 9   | Tree — генерируемый снимок, который может разойтись с физическими checkout; прежнее отсутствие 7 кнопок заново не подтверждено            | манифест                          | Дмитрий регенерирует manifest; затем сверить дерево с доступными файлами и stories                                                                    |
| 10  | Плавающая панель device switcher перекрывает правую часть строки вкладок файлов                                                           | `domain-playground`               | встроить switcher в шапку превью                                                                                                                      |
| 11  | Ссылки `/components`, `/playground` ведут на 404, нет `favicon.png`                                                                       | см. раздел 1                      | добавить маршруты или поменять `href`                                                                                                                 |

## 3. Организация `index.story.svelte` и влияние на старт сервера

### 3.1 Инвентарь и стоимость загрузки

| Аспект                 | Текущее устройство / измерение                                    | Что это позволяет заключить                                                 |
| ---------------------- | ----------------------------------------------------------------- | --------------------------------------------------------------------------- |
| Stories на диске       | 752 index.story.svelte во всех 51 локальных доменах на 2026-10-08 | Наличие примера; работоспособность каждой story не проверена                |
| Компонентные семьи     | 788 index.svelte; подробная методика в lib/readme.md              | Не все семейства имеют story; сравнивать нужно попарно                      |
| Ленивые импорты        | Физические glob владельцев; логические ключи сохранены            | Dev трансформирует запрошенные модули; production build разрешает весь граф |
| Explorer и diagnostics | Есть отдельные потребители story-модулей                          | Проверить единую нормализацию путей и масок                                 |
| Graph dataset          | Восстановлен в static; story использует fetch                     | Старое сообщение об удалённом JSON не актуально                             |
| Controls и snippets    | Прежний аудит отмечал values:any / as any                         | Нужна проверка типизации текущих stories; старые количества не переносим    |
| Историческая сборка    | 1685 client JS-чанков, cold request 18.8 с на старом аудите       | Это baseline прежнего окружения, не замер после tree-only и module-переноса |

### 3.2 Риски организации stories

| Риск                                        | Причина                                          | Предлагаемая проверка / действие                                                 |
| ------------------------------------------- | ------------------------------------------------ | -------------------------------------------------------------------------------- |
| Каталог знает story, которой нет в checkout | Tree и glob формируются разными этапами          | После human regen сравнить доступные loader-ключи и tree                         |
| Одна story нарушает production build        | Lazy import не исключает модуль из build-графа   | Диагностика именует сломанную story; CI проверяет затронутые наборы              |
| Controls теряют тип компонента              | Record<string, unknown> и any в примерах         | Story<TArgs>, типизированные controls/snippets как проектное предложение         |
| Тяжёлые demo-данные влияют на граф          | Статические импорты данных в stories             | Обоснованно выбирать static/fetch или lazy import; graph уже использует static   |
| Зависимость всех stories от theme/Story     | Общая оболочка находится в theme                 | Перед переносом оценить связи и выигрыш; новый домен не вводить без согласования |
| Дублированная адресация loader-ов           | Explorer и diagnostics получают stories отдельно | Проверить общий механизм физических glob и логических ключей                     |

### 3.3 Рекомендации и состояние реализации

| Предложение старого аудита                              | Состояние после обновлений                                            | Следующее действие                                                    |
| ------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| Малое дерево в SSR и descriptor по запросу              | Реализовано: tree-only и resolveComponentDescriptor                   | Проверять API shape и roundtrip, измерить фактический HTTP payload    |
| Типизированные stories и переиспользуемые args/variants | Предложение; текущую типизацию каждого набора не проверяли            | Согласовать формат, совместимый с правилом экспорта сущностей         |
| Тяжёлые JSON вынести из статического графа              | Для graph dataset выполнено                                           | Проверить оставшиеся story-ресурсы по фактическому размеру            |
| Изоляция диагностики story                              | Есть runtime diagnostics; не доказана независимая сборка каждой story | Отдельно проверять импорт, рендер, события и build-ошибки             |
| Единый loader для explorer/diagnostics                  | Кандидат на уменьшение расхождений                                    | Сопоставить маски, нормализацию путей и приватные checkout            |
| Вынести Story/SlotStory из theme                        | Архитектурное предложение                                             | Проверить API и зависимость потребителей; сохранить историю владельца |

## 4. Влияние манифеста: обновлённая оценка

| Потребитель                   | Текущее поведение                                     | Риск / полезная проверка                                          |
| ----------------------------- | ----------------------------------------------------- | ----------------------------------------------------------------- |
| routes/+page.server.ts        | Получает { tree }, без serialized descriptors         | Замерить текущий SSR payload отдельно от размера файла            |
| DomainManager /api/descriptor | Строит проекцию выбранного компонента по запросу      | Проекция по именам не является графом фактических импортов        |
| DomainPlayground landing      | countDomainStories считает stories через file presets | Манифест может включать отсутствующий private checkout            |
| Explorer                      | expandComponentTree восстанавливает файлы             | Неизвестный preset должен приводить к явной ошибке                |
| Source preview                | Читает отдельное зеркало физических исходников        | После изменения файлов обновить зеркало независимо от дерева      |
| Генерация                     | Внешний auditor; глобальный запуск только Дмитрием    | Регламентировать входы/версии и сверять результат после генерации |

Компактный файл содержит 51 домен и 3257 family-записей; размеры закреплённого
снимка — 181006 байт JSON, 129303 байт compact JSON, 19572 байта gzip.
Методика и ревизии: [component-manifest-presets.md](../../../.docs/stylist-svelte/component-manifest-presets.md).
Старые 2.33 МБ manifest и 1.28 МБ HTML относятся к прежнему descriptor-формату.
Их нельзя использовать как текущую стоимость загрузки.

Прежняя цель «малое дерево + descriptors по требованию» уже реализована в
исходниках. Дальнейшая задача — актуальность и согласованность каталога,
checkout и loader-ов. Reload manifest перезагружает страницу, но не запускает
внешний генератор. Предложение генерировать глобальные файлы в CI требует
отдельного решения владельца и не отменяет human-only правило AGENTS.md.

## 5. Device switcher: как сейчас и что дальше

### 5.1 Как работает сейчас

`domain/component/molecule/device-viewport` → `ManagerStoryViewportContext` → `Story`
(`theme/component/molecule/story`) применяет к `.component-preview__surface` `max-width`
(mobile 375px, tablet 768px, desktop 1440px, fullscreen — без ограничения) и `container-type: inline-size`.

Историческая проверка аудита 81bd28b90 (окно 1440×900, режим Mobile; не повторялась после PR #4):

```js
matchMedia('(max-width: 980px)').matches; // false
document.querySelector('.component-preview__surface').getBoundingClientRect().width; // 375
getComputedStyle(surface).containerType; // "inline-size"
```

Т. е. **`@media` по-прежнему видит окно 1440px**, а `@container` — 375px. Прежний аудит насчитал 367 правил
`@media` в 125 компонентах и 43 `@container` в 32; текущие количества не измерялись. Наглядно:

| `travel-commerce/component/template/store-page` — только `@media (max-width: 980px)`                                                                     | `travel-commerce/component/template/cart-page` — `@media` **и** `@container`                                                                   |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| ![store-page в режиме Mobile: десктопная сетка вылезает за 375px](../../../.docs/stylist-svelte/screenshots/sandbox-store-page-mobile-media-ignored.png) | ![cart-page в режиме Mobile: корректная мобильная раскладка](../../../.docs/stylist-svelte/screenshots/sandbox-cart-page-mobile-container.png) |

Ещё одна деталь: в режиме Desktop (1440px) в прежнем измерении поверхность получала **1109px** — ширину
области превью при окне 1440×900 (сайдбар 249px + отступы), т. е. Desktop от Fullscreen не
отличается, а настоящие 1440px увидеть нельзя.

Автор уже знает о проблеме — в `cart-page/index.svelte` есть комментарий «Duplicated as `@media`
(real device viewport) and `@container` … Keep both in sync». Ручная синхронизация двух копий правил
может создавать ошибки; число затронутых компонентов требует свежей проверки.

Кроме того, в домене уже есть `domain/component/organism/device-frame` (рамки iPhone SE 375×667,
iPad 768×1024, монитор 1440×900, ориентация), но песочница его **не использует** — только его
собственная story.

### 5.2 Предлагаемое будущее device switcher’а

1. **Изолированный маршрут превью** `/preview/[...entity]` (или `/preview?path=…`), который рендерит
   одну story без оболочки песочницы. Explorer показывает его в `<iframe>` нужной ширины/высоты →
   `@media`, `vh`, `dvh` зависят от viewport iframe. Touch, DPR, pointer и prefers-* требуют отдельной эмуляции; сам iframe их не задаёт. Это же основа для
   скриншотов (раздел 6) и для открытия story в новой вкладке.
2. **Два режима:** «Container» (как сейчас — быстро, для атомов/молекул) и «Device» (iframe — для
   организмов/шаблонов/страниц). По умолчанию выбирать по joint’у: `template`/`page` → Device.
3. **Использовать `device-frame`** вокруг iframe: рамка, ориентация (portrait/landscape), safe-area.
4. **Произвольный размер:** поля ширина×высота, drag-ручки по краям, пресеты (320, 360, 375, 390,
   414, 768, 834, 1024, 1280, 1440, 1920), пользовательские пресеты в `localStorage`.
5. **Масштаб (zoom)** — чтобы 1920px помещался в 1100px области превью (`transform: scale` iframe).
6. **DPR/touch-эмуляция** в рамках возможного в браузере; для честной эмуляции — Playwright (раздел 6).
7. **Сравнение рядом:** mobile | tablet | desktop одновременно (три iframe) — сразу видно поведение
   брейкпоинтов.
8. **Синхронизация с URL** (`&device=mobile&w=375&h=667&zoom=0.8&theme=dark`).
9. **Линтер адаптивности:** предупреждение в диагностике, если компонент уровня atom/molecule/organism
   использует `@media` без `@container` (правило: компоненты — `@container`, шаблоны/страницы — `@media`).
10. Плавающую панель switcher’а встроить в шапку превью, чтобы она не перекрывала вкладки файлов.

## 6. Скриншоты компонентов на произвольном экране и передача ИИ

Цель из issue: снимать компонент на любом экране и отдавать снимок ИИ, чтобы он улучшал визуал.

### 6.1 Что уже есть и на чём строить

- `domain-diagnostics` уже умеет пройти по всем stories, импортировать и смонтировать каждую и
  собрать ошибки/время — не хватает только снимка.
- `canvas/component/molecule/screenshot-selector` — выбор области на экране (можно использовать для
  «снять фрагмент»).
- resolveComponentDescriptor строит пути story/recipe/component по дереву и соглашениям —
  это контекст, который нужно отдавать ИИ вместе с картинкой.

### 6.2 Предлагаемые функции

1. **Маршрут `/preview/[...entity]`** (см. 5.2) с параметрами `device`, `w`, `h`, `theme`,
   `variant`, `args` (base64-JSON значений controls). Без оболочки песочницы → стабильный снимок.
2. **Кнопка «Снимок» в explorer’е** — клиентский снимок текущего превью (SVG `foreignObject` →
   canvas, без внешних зависимостей) или запрос к серверу (п. 3) за «честным» снимком. Результат:
   PNG + копирование в буфер, чтобы вставить в чат с ИИ.
3. **Серверный раннер (dev-only) `scripts/capture-stories.mjs`** на Playwright (нужно отдельно обеспечить установку: в зависимостях библиотеки он не объявлен): читает манифест, для каждой сущности × устройства × темы открывает
   `/preview/…`, ждёт `document.fonts.ready` + отсутствие анимаций (`prefers-reduced-motion: reduce`),
   делает `page.screenshot()`; сохраняет в `artifacts/screenshots/<domain>/<cluster>/<joint>/<family>/<device>-<theme>.png`.
4. **Пакет контекста для ИИ** рядом с PNG — `context.json`:
   `{ entityPath, device: {w,h,dpr}, theme, args, recipe (текст интерфейса), story (исходник),
component (исходник), consoleErrors, a11y (axe-core нарушения), layoutIssues (горизонтальный
скролл, элементы за пределами viewport, перекрытия, текст < 12px, контраст) }`.
   Именно автоматические `layoutIssues` позволяют ИИ понять, что исправлять, а не гадать по картинке.
   Исторический пример прежнего capture: `store-page` в режиме Mobile — поверхность 375px, `scrollWidth`
   582px, 56 элементов за её пределами; `cart-page` — 375/373px, 0 элементов.
5. **Визуальный регресс:** сравнение с эталоном (`pixelmatch`-подобный diff) → только изменившиеся
   компоненты уходят на ревью ИИ/человеку; эталоны — в отдельной ветке/артефактах CI, не в основном репо.
6. **Цикл улучшения:** `capture → ИИ-оценка по чек-листу (MD3: отступы, иерархия, контраст,
выравнивание, состояния hover/focus/disabled) → issue/PR с правкой → повторный capture → diff`.
   Это и есть «Hive Mind»-контур: множество агентов параллельно берут домены из манифеста.
7. **MCP-инструмент** `screenshot(entityPath, device, theme, args)` поверх того же раннера — любой
   агент (Claude, Codex, Gemini, Qwen — их логотипы уже на лендинге) может сам посмотреть результат
   своей правки.
8. **Снимки состояний:** для каждого варианта (`variants`) и для `:hover`/`:focus-visible`/`disabled`
   (Playwright `hover()`/`focus()`), тёмная/светлая тема, `rtl`.

Пример прототипа такого раннера из прежнего аудита (через UI explorer’а, без `/preview`) —
[`examples/capture-story-screenshots.mjs`](../../examples/capture-story-screenshots.mjs):

```bash
yarn dev   # в отдельном терминале
NODE_PATH="$(npm root -g)" node examples/capture-story-screenshots.mjs --out artifacts/screenshots \
  travel-commerce/component/template/store-page travel-commerce/component/template/cart-page
# travel-commerce/component/template/store-page Mobile: surface 375px, scrollWidth 582px, 56 overflowing elements
# travel-commerce/component/template/cart-page Mobile: surface 375px, scrollWidth 373px, 0 overflowing elements
```

Перед новым запуском нужно адаптировать чтение исходников: пример использует
старый `src/lib/<entityPath>`, поэтому component/story context может быть null.
Показанные выше результаты относятся к старому capture; текущий запуск не проверен.

Для каждого устройства пример предусматривает `<device>.png` и `<device>.context.json` (размеры, переполнение,
мелкий текст, ошибки консоли, исходники компонента и story) — готовый пакет для модели.

## 7. Приоритетный план для песочницы

| Приоритет | Действие                                              | Проверяемый результат                                                                             |
| --------- | ----------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| 1         | Публичный стартовый домен и корректные ссылки/favicon | Новый участник открывает доступную story без private checkout                                     |
| 2         | Состояние в URL и отдельный preview-route             | Story воспроизводится по ссылке, аргументам и теме                                                |
| 3         | Согласованность дерева и loader-ов                    | После human regen каталог не ссылается на недоступные loader-ключи; private отсутствие обработано |
| 4         | Container и Device режимы                             | Размер контейнера и viewport измеряются отдельно; frame/zoom не подменяют эмуляцию                |
| 5         | Screenshot-runner и context.json                      | Физические исходники, размеры, console errors и PNG сохранены для одной ревизии                   |
| 6         | Типизированные controls и Markdown preview            | Типы сохраняются в snippets, readme.md виден в explorer                                           |

Разделение монолитного descriptor-манифеста больше не числится невыполненной
задачей: tree-only реализован. Генерация глобальных файлов, публикация и
изменение архитектурных границ остаются под действующим регламентом.
