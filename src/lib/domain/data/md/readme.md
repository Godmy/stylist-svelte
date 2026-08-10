# Domain — дерево компонентов

Точка входа приложения: `stylist-svelte/src/routes/+page.svelte` рендерит только
`component/page/page-domain` (бывший `organism/domain-workspace-shell`) — это
единственный компонент домена, подключённый напрямую к route. Всё остальное
подключается уже из него (напрямую или лениво, через `import()`).

## Дерево вложенности

```
component/page/page-domain                — корневой shell приложения, держит состояние экрана
├─ molecule/domain-menu                    — плавающая панель переключения экранов (всегда видна) + кнопка AI
├─ molecule/device-viewport                — mobile/tablet/desktop/fullscreen, видна левее domain-menu во время playground-превью
├─ organism/domain-explorer                — экран "Domain" (каталог сущностей)
│  ├─ organism/domain-sidebar              — левый сайдбар навигации по таксономии
│  │  ├─ molecule/domain-toolbar           — переключатель верхнеуровневого домена
│  │  ├─ molecule/cluster-toolbar          — переключатель кластера домена
│  │  ├─ molecule/joint-toolbar            — переключатель joint (atom/molecule/organism/template/page/const/data/md/…)
│  │  └─ molecule/domain-list              — список сущностей текущего кластера/joint
│  │     ├─ atom/domain-list-header        — заголовок списка (метка + счётчик)
│  │     └─ atom/domain-entity             — строка одной сущности (кликабельная, drag&drop)
│  ├─ molecule/taxonomy-breadcrumbs        — хлебные крошки domain / cluster / joint / family
│  ├─ molecule/domain-search               — оверлей быстрого поиска + кнопка копирования пути сущности
│  │  ├─ atom/domain-search-toggle         — кнопка открытия/закрытия поиска
│  │  ├─ atom/domain-search-field          — поле ввода поискового запроса
│  │  └─ molecule/taxonomy-breadcrumbs     — крошки у каждого результата поиска
│  ├─ molecule/joint-tab-buttons           — вкладки файлов сущности (markdown/story/json/…); 
│  └─ organism/domain-file-preview         — предпросмотр содержимого выбранного файла
│     └─ molecule/json-tree-viewer         — раскрывающийся просмотрщик JSON
├─ organism/domain-builder                 — экран "Builder" (drag&drop-конструктор страниц)
│  ├─ organism/domain-sidebar              — тот же сайдбар, источник сущностей для drag&drop
│  └─ molecule/domain-descriptor-panel     — orbit-панель дескриптора выбранного компонента
├─ organism/domain-backlog                 — экран "Backlog" (issues/kanban/burn-down; компоненты домена portfolio, вне этого дерева)
├─ organism/domain-diagnostics             — экран "Diagnostics" (прогон всех *.story.svelte)
├─ organism/domain-settings                — модальная панель настроек темы (по флагу isSettingsOpen)
└─ organism/domain-ai-agent                — модальная панель для работы с ИИ-агентом (по флагу isAiOpen, пока placeholder)

```

## Назначение компонентов

### Atom
- **domain-entity** — кликабельная/перетаскиваемая строка одной сущности домена (имя, путь, счётчик файлов, активное состояние).
- **domain-list-header** — заголовок списка сущностей с меткой и счётчиком.
- **domain-search-field** — текстовое поле поиска с биндингом значения и обработкой Escape.
- **domain-search-toggle** — круглая кнопка-переключатель открытия/закрытия панели поиска.

### Molecule
- **cluster-toolbar** — переключатель кластера домена (обёртка над `IconToolbar`).
- **device-viewport** — иконки-кнопки mobile/tablet/desktop/fullscreen в стиле domain-menu; управляют шириной превью playground-компонента через `theme`-контекст (см. примечание про Story ниже), сам `device-frame` больше не оборачивает playground.
- **domain-descriptor-panel** — orbit-панель с вкладками (Architecture/Information/Interaction/Controls/Contracts) для дескриптора компонента, данные тянет с `/api/descriptor`.
- **domain-list** — вертикальный список `domain-entity` с заголовком, поддерживает drag&drop и выбор сущности.
- **domain-menu** — плавающая панель навигации по экранам (landing/domain/workspace/builder/backlog/diagnostics/settings/ai) с переключателем темы.
- **domain-search** — оверлей быстрого поиска: поле + список результатов с хлебными крошками, кнопка открытия поиска и кнопка копирования пути `<domain>\<cluster>\<joint>\<family>\<file>` текущей сущности в буфер обмена (иконки чистые inline SVG, не из общего icon-registry — там были графические дефекты).
- **domain-toolbar** — переключатель верхнеуровневого домена (обёртка над `IconToolbar`).
- **joint-tab-buttons** — вкладки файлов сущности (markdown/story/json-tree/файлы) + меню отладочных действий.
- **joint-toolbar** — переключатель joint (atom/molecule/organism/const/type/interface/data и т.д., включая `md`) с фильтром доступных вариантов.
- **json-tree-viewer** — раскрывающийся/сворачиваемый просмотрщик JSON-дерева.
- **taxonomy-breadcrumbs** — хлебные крошки domain / cluster / joint / family (+ опционально файл).

### Organism
- **device-frame** — декоративная рамка устройства (mobile/tablet/desktop) с notch/кнопками; в живом приложении сейчас нигде не подключена (playground-превью её больше не использует), остаётся только в собственной story.
- **domain-ai-agent** — модальная панель для работы с ИИ-агентом; пока placeholder без реальной интеграции, открывается кнопкой AI в `domain-menu`.
- **domain-backlog** — экран бэклога/спринта с метриками и переключением видов (issues, kanban, burn-down, scrum); использует компоненты домена `portfolio`.
- **domain-builder** — визуальный конструктор страниц: drag&drop сущностей (atom/molecule/organism) в колонки, live-рендер, сохранение черновика layout на `/api/builder`, перестановка секций местами (Section up/down). Плюс реальный экспорт: панель "Export as template" (домен + family) шлёт текущие sections/instances на `POST /api/template-export`, который кодогенерит настоящий `component/template/<family>/index.svelte` (импорты + разметка по секциям/колонкам + CSS-грид) и пишет его на диск через `writeLibTextFile` — то есть визуальная сборка становится реальным исходником template, а не только черновиком. После экспорта нужно вручную прогнать индексацию, чтобы обновились barrel-экспорты. Загрузка уже существующего template обратно в конструктор (reverse-parse) не реализована — только генерация "с нуля"/перезапись.
- **domain-diagnostics** — "Library Story Runner": находит все `*.story.svelte`, монтирует их по очереди, замеряет время и перехватывает ошибки, выводит результат таблицей.
- **domain-explorer** — основной экран-каталог домена: сайдбар слева, крошки/поиск/вкладки файлов/предпросмотр справа.
- **domain-file-preview** — предпросмотр содержимого файла сущности: markdown, JSON-дерево, SVG, сырой текст/код или интерактивная сторис (`index.story.svelte` рендерится напрямую; viewport из `device-viewport` прокидывается в `theme`-контекст, а не через `device-frame`).
- **domain-settings** — плавающая панель настроек темы (обёртка над `ThemeSettings`).
- **domain-sidebar** — левый сайдбар навигации по таксономии (toolbar-ы + список сущностей).

### Page
- **page-domain** (было `organism/domain-workspace-shell`, теперь `component/page/page-domain`) — корневой shell-контейнер приложения, переключает экраны и держит поверх всего `domain-menu`/`device-viewport`/`domain-settings`/`domain-ai-agent`.

## Примечания
- `molecule/functional-taxonomy`, `molecule/domain-table` и `organism/domain-dashboard` удалены — нигде не подключались (только barrel-экспорты).
- `molecule/token-settings` перенесён в `token/component/molecule/token-setting` (единственное число). Переименован при переносе: в `token/component/organism/token-settings` уже существовал другой компонент (панель-грид из многих токенов) с тем же именем экспорта `TokenSettings` — оставить оба как `TokenSettings` означало бы конфликт в общем barrel `token/component/index.ts`.
- при переключении сущности, домена, кластера или joint'а по умолчанию открывает playground, если у выбранной сущности есть index.story.svelte
- у всех atom/molecule/organism/page в `domain/component/**` (включая `page-domain`) есть `index.story.svelte`
- **viewport playground-компонента не трогает шапку истории.** Раньше `domain-file-preview` оборачивал весь `index.story.svelte` (заголовок + описание + controls-panel + сам компонент) в `organism/device-frame`, поэтому переключение mobile/tablet/desktop/fullscreen двигало вообще всё, включая текст и панель настроек. Теперь `device-viewport` пишет выбранный viewport в `storyDevice`, `domain-file-preview` кладёт его в Svelte context (`theme/class/manager/story-viewport-context` → `ManagerStoryViewportContext`, ключ `theme/const/value/story-viewport-context`), а `theme/component/molecule/story` сам читает контекст и ограничивает шириной только свой `.component-preview` — заголовок, описание и панель контролов остаются на всю ширину. `device-frame` при этом всё ещё существует как самостоятельный organism (демо в собственной story), но в реальном приложении его никто не рендерит.