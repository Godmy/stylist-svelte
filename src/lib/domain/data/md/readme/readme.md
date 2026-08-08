# Domain — дерево компонентов

Точка входа приложения: `stylist-svelte/src/routes/+page.svelte` рендерит только
`component/page/page-domain` (бывший `organism/domain-workspace-shell`) — это
единственный компонент домена, подключённый напрямую к route. Всё остальное
подключается уже из него (напрямую или лениво, через `import()`).

> Примечание об архитектуре: `component/page` — новый joint внутри cluster
> `component`, введённый по прямому запросу пользователя в обход `AGENTS.md`
> (там для `component` разрешены только `atom/molecule/organism/template`).
> Конфликт был явно зафиксирован и подтверждён пользователем перед переносом.
> В `joint-toolbar` для него добавлена отдельная иконка `page`.

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
│  ├─ molecule/joint-tab-buttons           — вкладки файлов сущности (markdown/story/json/…); при переключении сущности, домена, кластера или joint'а по умолчанию открывает playground, если у выбранной сущности есть index.story.svelte
│  └─ organism/domain-file-preview         — предпросмотр содержимого выбранного файла
│     ├─ molecule/json-tree-viewer         — раскрывающийся просмотрщик JSON
│     └─ organism/device-frame             — рамка устройства для интерактивной сторис (viewport задаётся снаружи, через device-viewport)
├─ organism/domain-builder                 — экран "Builder" (drag&drop-конструктор страниц)
│  ├─ organism/domain-sidebar              — тот же сайдбар, источник сущностей для drag&drop
│  └─ molecule/domain-descriptor-panel     — orbit-панель дескриптора выбранного компонента
├─ organism/domain-backlog                 — экран "Backlog" (issues/kanban/burn-down; компоненты домена portfolio, вне этого дерева)
├─ organism/domain-diagnostics             — экран "Diagnostics" (прогон всех *.story.svelte)
├─ organism/domain-settings                — модальная панель настроек темы (по флагу isSettingsOpen)
└─ organism/domain-ai-agent                — модальная панель для работы с ИИ-агентом (по флагу isAiOpen, пока placeholder)

organism/domain-dashboard                  — обёртка-модалка вокруг domain-diagnostics; НИГДЕ не подключена в коде (только barrel-экспорты)
organism/stylist-ribbon-menu               — самостоятельный FAB-виджет с разделами; НИГДЕ не подключён в коде (только собственная story)

molecule/functional-taxonomy               — не вложен ни в один organism из этого дерева (не найден импорт)
molecule/domain-table                      — не вложен ни в один organism из этого дерева (не найден импорт)
molecule/token-settings                    — используется вне этого дерева (виджет настройки одного дизайн-токена)
```

## Назначение компонентов

### Atom
- **domain-entity** — кликабельная/перетаскиваемая строка одной сущности домена (имя, путь, счётчик файлов, активное состояние).
- **domain-list-header** — заголовок списка сущностей с меткой и счётчиком.
- **domain-search-field** — текстовое поле поиска с биндингом значения и обработкой Escape.
- **domain-search-toggle** — круглая кнопка-переключатель открытия/закрытия панели поиска.

### Molecule
- **cluster-toolbar** — переключатель кластера домена (обёртка над `IconToolbar`).
- **device-viewport** — иконки-кнопки mobile/tablet/desktop/fullscreen в стиле domain-menu, переключают viewport `device-frame` во время просмотра playground.
- **domain-descriptor-panel** — orbit-панель с вкладками (Architecture/Information/Interaction/Controls/Contracts) для дескриптора компонента, данные тянет с `/api/descriptor`.
- **domain-list** — вертикальный список `domain-entity` с заголовком, поддерживает drag&drop и выбор сущности.
- **domain-menu** — плавающая панель навигации по экранам (landing/domain/workspace/builder/backlog/diagnostics/settings/ai) с переключателем темы.
- **domain-search** — оверлей быстрого поиска: поле + список результатов с хлебными крошками, кнопка открытия поиска и кнопка копирования пути `<domain>\<cluster>\<joint>\<family>\<file>` текущей сущности в буфер обмена (иконки чистые inline SVG, не из общего icon-registry — там были графические дефекты).
- **domain-table** — табличное представление списка сущностей домена (Name/Path/Files).
- **domain-toolbar** — переключатель верхнеуровневого домена (обёртка над `IconToolbar`).
- **functional-taxonomy** — плоская 4-колоночная разметка таксономии domain/cluster/joint/family текущей сущности.
- **joint-tab-buttons** — вкладки файлов сущности (markdown/story/json-tree/файлы) + меню отладочных действий.
- **joint-toolbar** — переключатель joint (atom/molecule/organism/const/type/interface/data и т.д., включая `md`) с фильтром доступных вариантов.
- **json-tree-viewer** — раскрывающийся/сворачиваемый просмотрщик JSON-дерева.
- **taxonomy-breadcrumbs** — хлебные крошки domain / cluster / joint / family (+ опционально файл).
- **token-settings** — виджет настройки одного дизайн-токена (иконка-триггер + панель с range/select/radio/text).

### Organism
- **device-frame** — декоративная рамка устройства (mobile/tablet/desktop), внутрь которой рендерятся произвольные дочерние элементы; текущий viewport передаётся снаружи (см. `device-viewport`).
- **domain-ai-agent** — модальная панель для работы с ИИ-агентом; пока placeholder без реальной интеграции, открывается кнопкой AI в `domain-menu`.
- **domain-backlog** — экран бэклога/спринта с метриками и переключением видов (issues, kanban, burn-down, scrum); использует компоненты домена `portfolio`.
- **domain-builder** — визуальный конструктор страниц: drag&drop сущностей в колонки, live-рендер выбранного компонента, сохранение layout на `/api/builder`.
- **domain-dashboard** — модальная обёртка вокруг `domain-diagnostics`; фактически нигде не подключена.
- **domain-diagnostics** — "Library Story Runner": находит все `*.story.svelte`, монтирует их по очереди, замеряет время и перехватывает ошибки, выводит результат таблицей.
- **domain-explorer** — основной экран-каталог домена: сайдбар слева, крошки/поиск/вкладки файлов/предпросмотр справа.
- **domain-file-preview** — предпросмотр содержимого файла сущности: markdown, JSON-дерево, SVG, сырой текст/код или интерактивная сторис в `device-frame`.
- **domain-settings** — плавающая панель настроек темы (обёртка над `ThemeSettings`).
- **domain-sidebar** — левый сайдбар навигации по таксономии (toolbar-ы + список сущностей).
- **stylist-ribbon-menu** — самостоятельный ленточный FAB-виджет с иконками разделов; в продакшен-коде нигде не подключён.

### Page
- **page-domain** (было `organism/domain-workspace-shell`, теперь `component/page/page-domain`) — корневой shell-контейнер приложения, переключает экраны и держит поверх всего `domain-menu`/`device-viewport`/`domain-settings`/`domain-ai-agent`.
