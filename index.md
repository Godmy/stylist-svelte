
# Полная структура проекта stylist-svelte

Этот документ описывает полную структуру проекта `stylist-svelte`, включая все компоненты, утилиты, типы, документацию и вспомогательные файлы.

## Обзор проекта

**Название**: stylist-svelte
**Версия**: 0.6.0
**Тип**: Библиотека Svelte компонентов
**Описание**: Комплексная библиотека UI-компонентов для Svelte 5 с встроенным интерактивным Playground и полной поддержкой TypeScript.

### Основные особенности:
- **Svelte 5 Runes**: Использует последние возможности Svelte 5, включая runes для реактивного программирования
- **Поддержка TypeScript**: Полная типизация с исчерпывающими определениями типов
- **Архитектура Atomic Design**: Компоненты организованы в соответствии с принципами атомического дизайна (атомы, молекулы, организмы)
- **Tailwind CSS**: Стилизация с помощью utility-first Tailwind CSS
- **Доступность**: Поддержка ARIA-атрибутов и навигации с клавиатуры
- **Tree-shakeable**: Импорт только необходимых компонентов
- **Без зависимостей**: Только peer зависимости от Svelte и Tailwind CSS
- **Композиционный дизайн**: Компоненты спроектированы для бесшовной работы друг с другом
- **Настройка**: Простая настройка через props и CSS-переменные
- **Интерактивный Playground**: Встроенный интерфейс для тестирования компонентов

## Структура проекта

```
stylist-svelte/
├── .claude/                                                                # Конфигурация для Claude AI
│   └── settings.local.json                                                 # Локальные настройки Claude
├── .gitignore                                                              # Файл исключений для Git
├── .npmrc                                                                  # Конфигурационный файл для npm/yarn
├── .prettierignore                                                         # Файлы и директории, игнорируемые Prettier
├── .prettierrc                                                             # Конфигурация Prettier
├── .yarnrc.yml                                                             # Конфигурация Yarn
├── LICENSE                                                                 # Файл лицензии проекта
├── QWEN.md                                                                 # Контекст для Qwen AI
├── README.md                                                               # Основная документация проекта
├── docs/                                                                   # Дополнительная документация проекта
│   ├── ad/                                                                 # Документы по архитектуре Atomic Design
│   │   ├── ATOMIC_DESIGN_GUIDE.md                                          # Руководство по атомическому дизайну
│   │   ├── ATOMIC_DESIGN_GUIDE_RU.md                                       # Руководство по атомическому дизайну (рус)
│   │   ├── CanvasComponents.md                                             # Документация по Canvas-компонентам
│   │   ├── GRAPHQL_VISUALIZER_PLAN.md                                      # План визуализатора GraphQL
│   │   ├── GRAPHVIZ_VISUALIZER_PLAN.md                                     # План визуализатора Graphviz
│   │   ├── IMPLEMENTATION_DOCS.md                                          # Документы по реализации
│   │   ├── PLAYGROUND.md                                                   # Документация по Playground
│   │   └── component-diagram.mmd                                           # Диаграмма компонентов (Mermaid)
│   ├── adr/                                                                # Архитектурные решения
│   │   ├── 0001-use-svelte-5-runes.md                                      # Использование Svelte 5 Runes
│   │   ├── 0002-use-tailwind-css.md                                        # Использование Tailwind CSS
│   │   ├── 0003-build-playground-system.md                                 # Создание системы Playground
│   │   ├── 0004-component-architecture.md                                  # Архитектура компонентов
│   │   ├── 0005-yarn-workspaces.md                                         # Использование Yarn Workspaces
│   │   ├── 0006-tailwind-postcss-implementation.md                         # Реализация Tailwind PostCSS
│   │   ├── 0007-design-system-types.md                                     # Типы для Design System
│   │   ├── 0007-playground-story-architecture.md                           # Архитектура Playground Story
│   │   ├── 0008-new-atoms-switch-radio-slider.md                           # Новые атомы Switch, Radio, Slider
│   │   ├── 0008-slot-usage-guidelines.md                                   # Руководство по использованию слотов
│   │   ├── 0008-utility-functions-implementation.md                        # Реализация утилит
│   │   ├── 0009-form-handling-architecture.md                              # Архитектура обработки форм
│   │   ├── 0009-new-molecules-suite.md                                     # Новый набор молекул
│   │   ├── 0010-table-component-architecture.md                            # Архитектура табличных компонентов
│   │   ├── 0011-error-types-and-solutions.md                               # Типы ошибок и решения
│   │   ├── 0012-component-library-error-fixes.md                           # Исправления ошибок библиотеки
│   │   └── 0012-error-types-and-solutions.md                               # Типы ошибок и решения
│   └── cookbooks/                                                          # Руководства по исправлению кода и работе с проектом
│       ├── COOKBOOK_AI_EN.md                                               # Руководство для AI (англ)
│       └── COOKBOOK_HUMAN_RU.md                                            # Руководство для людей (рус)
├── index.md                                                                # Основной индексный файл (этот файл)
├── package.json                                                            # Основной файл зависимостей и скриптов
├── package.tgz                                                             # Собранный пакет
├── src/                                                                    # Исходный код библиотеки компонентов
│   ├── app.html                                                            # HTML-шаблон приложения
│   └── lib/                                                                # Основная библиотека
│       ├── components/                                                     # Компоненты пользовательского интерфейса
│       │   ├── atoms/                                                      # Атомарные компоненты (кнопки, инпуты, лейблы и т.д.)
│       │   │   ├── ExampleAtom.svelte                                      # Пример простого атомарного компонента
│       │   │   ├── TestButton.svelte                                       # Тестовый компонент кнопки
│       │   │   ├── animation/                                              # Анимационные атомы
│       │   │   │   ├── NumberFlow.svelte                                   # Анимированное отображение числовых значений
│       │   │   │   ├── NumberFlow.story.svelte                             # Стори для NumberFlow
│       │   │   │   └── index.ts                                            # Экспорт анимационных атомов
│       │   │   ├── feedback/                                               # Компоненты обратной связи
│       │   │   │   ├── Alert.svelte                                        # Компонент для отображения важных сообщений
│       │   │   │   ├── ProgressBar.svelte                                  # Индикатор выполнения задачи
│       │   │   │   ├── Skeleton.svelte                                     # Заглушка с анимацией для загрузки данных
│       │   │   │   ├── TableSkeleton.svelte                                # Заглушка для таблицы
│       │   │   │   └── index.ts                                            # Экспорт компонентов обратной связи
│       │   │   ├── forms/                                                  # Компоненты форм
│       │   │   │   ├── Checkbox.svelte                                     # Стандартный чекбокс
│       │   │   │   ├── Checkbox.story.svelte                               # Стори для Checkbox
│       │   │   │   ├── Input.svelte                                        # Поле для ввода текста
│       │   │   │   ├── Input.story.svelte                                  # Стори для Input
│       │   │   │   ├── Label.svelte                                        # Текстовая метка для элементов формы
│       │   │   │   ├── Label.story.svelte                                  # Стори для Label
│       │   │   │   ├── RangeSlider.svelte                                  # Ползунок для выбора значения в диапазоне
│       │   │   │   ├── RangeSlider.story.svelte                            # Стори для RangeSlider
│       │   │   │   ├── Select.svelte                                       # Выпадающий список
│       │   │   │   ├── Select.story.svelte                                 # Стори для Select
│       │   │   │   ├── Switch.svelte                                       # Переключатель
│       │   │   │   ├── Switch.story.svelte                                 # Стори для Switch
│       │   │   │   ├── Textarea.svelte                                     # Многострочное поле ввода
│       │   │   │   ├── Textarea.story.svelte                               # Стори для Textarea
│       │   │   │   └── index.ts                                            # Экспорт компонентов форм
│       │   │   ├── indicators/                                             # Индикаторы статуса
│       │   │   │   ├── ChatStatusIndicator.svelte                          # Индикатор статуса в чате
│       │   │   │   ├── MessageStatus.svelte                                # Индикатор статуса сообщения
│       │   │   │   ├── MessageTimestamp.svelte                             # Отображение временной метки сообщения
│       │   │   │   ├── Spinner.svelte                                      # Индикатор загрузки
│       │   │   │   ├── Spinner.story.svelte                                # Стори для Spinner
│       │   │   │   ├── StatusIndicator.svelte                              # Индикатор статуса с иконкой и текстом
│       │   │   │   └── index.ts                                            # Экспорт индикаторов
│       │   │   ├── media/                                                  # Медиа компоненты
│       │   │   │   ├── Avatar.svelte                                       # Отображение аватара пользователя
│       │   │   │   ├── Avatar.story.svelte                                 # Стори для Avatar
│       │   │   │   ├── Icon.svelte                                         # Отображение иконки
│       │   │   │   ├── Icon.story.svelte                                   # Стори для Icon
│       │   │   │   └── index.ts                                            # Экспорт медиа компонентов
│       │   │   ├── typography/                                             # Типографские компоненты
│       │   │   │   ├── CodeBlock.svelte                                    # Блок для отображения форматированного кода
│       │   │   │   ├── InlineCode.svelte                                   # Отображение кода внутри текста
│       │   │   │   ├── Kbd.svelte                                          # Компонент для отображения клавиш клавиатуры
│       │   │   │   ├── Kbd.story.svelte                                    # Стори для Kbd
│       │   │   │   ├── Link.svelte                                         # Ссылка
│       │   │   │   ├── Link.story.svelte                                   # Стори для Link
│       │   │   │   └── index.ts                                            # Экспорт типографских компонентов
│       │   │   ├── ui-elements/                                            # Основные UI-элементы
│       │   │   │   ├── Badge.svelte                                        # Небольшой элемент для отображения статуса
│       │   │   │   ├── Badge.story.svelte                                  # Стори для Badge
│       │   │   │   ├── Button.svelte                                       # Универсальная кнопка
│       │   │   │   ├── Button.story.svelte                                 # Стори для Button
│       │   │   │   ├── Chip.svelte                                         # Компактный элемент для отображения информации
│       │   │   │   ├── Chip.story.svelte                                   # Стори для Chip
│       │   │   │   ├── Divider.svelte                                      # Горизонтальный или вертикальный разделитель
│       │   │   │   ├── Divider.story.svelte                                # Стори для Divider
│       │   │   │   ├── Tag.svelte                                          # Тег для маркировки
│       │   │   │   ├── Tag.story.svelte                                    # Стори для Tag
│       │   │   │   ├── Toggle.svelte                                       # Переключатель для включения/выключения состояния
│       │   │   │   ├── Toggle.story.svelte                                 # Стори для Toggle
│       │   │   │   └── index.ts                                            # Экспорт UI-элементов
│       │   │   └── index.ts                                                # Объединяющий экспорт всех атомов
│       │   ├── molecules/                                                  # Составные компоненты (формы, карточки и т.д.)
│       │   │   ├── CopyButton.svelte                                       # Кнопка для копирования текста
│       │   │   ├── CopyButton.story.svelte                                 # Стори для CopyButton
│       │   │   ├── EmptyState.svelte                                       # Компонент для отображения при отсутствии данных
│       │   │   ├── EmptyState.story.svelte                                 # Стори для EmptyState
│       │   │   ├── FormFieldGroup.story.svelte                             # Стори для FormFieldGroup
│       │   │   ├── FormSection.story.svelte                                # Стори для FormSection
│       │   │   ├── InputField.svelte                                       # Поле ввода с дополнительным текстом справки
│       │   │   ├── SearchBar.story.svelte                                  # Стори для SearchBar
│       │   │   ├── canvas/                                                 # Canvas-компоненты
│       │   │   │   └── canvas-tools/                                       # Инструменты для canvas
│       │   │   │       ├── CanvasToolbar.svelte                            # Панель инструментов для холста
│       │   │   │       └── index.ts                                        # Экспорт инструментов для canvas
│       │   │   │   └── index.ts                                            # Экспорт canvas-компонентов
│       │   │   ├── chat/                                                   # Компоненты чата
│       │   │   │   ├── AttachmentPreview.svelte                            # Предварительный просмотр вложений
│       │   │   │   ├── ChatHeader.svelte                                   # Заголовок чата
│       │   │   │   ├── MessageInput.svelte                                 # Поле ввода сообщения
│       │   │   │   ├── MessageMeta.svelte                                  # Метаданные сообщения
│       │   │   │   ├── UserStatus.svelte                                   # Индикатор статуса пользователя
│       │   │   │   └── index.ts                                            # Экспорт компонентов чата
│       │   │   ├── code/                                                   # Компоненты для работы с кодом
│       │   │   │   ├── CodeWithCopy.svelte                                 # Компонент кода с возможностью копирования
│       │   │   │   ├── ResponseViewer.svelte                               # Компонент просмотра ответов
│       │   │   │   ├── SyntaxHighlightedCode.svelte                        # Компонент с подсветкой синтаксиса
│       │   │   │   └── index.ts                                            # Экспорт кодовых компонентов
│       │   │   ├── controls/                                               # Контролы
│       │   │   │   ├── NumberFlow.svelte                                   # Анимированное отображение числовых значений
│       │   │   │   ├── NumberFlow.story.svelte                             # Стори для NumberFlow
│       │   │   │   ├── RadioGroup.svelte                                   # Группа переключателей
│       │   │   │   ├── RadioGroup.story.svelte                             # Стори для RadioGroup
│       │   │   │   └── index.ts                                            # Экспорт контрол-компонентов
│       │   │   ├── data-display/                                           # Компоненты отображения данных
│       │   │   │   ├── CardSkeleton.svelte                                 # Заглушка для карточки
│       │   │   │   ├── ExpandableTableRow.svelte                           # Расширяемая строка таблицы
│       │   │   │   ├── KanbanCard.svelte                                   # Карточка для доски Kanban
│       │   │   │   ├── KanbanCard.story.svelte                             # Стори для KanbanCard
│       │   │   │   ├── Rating.svelte                                       # Компонент оценки
│       │   │   │   ├── Rating.story.svelte                                 # Стори для Rating
│       │   │   │   ├── StatsCard.svelte                                    # Карточка статистики
│       │   │   │   ├── StatsCard.story.svelte                              # Стори для StatsCard
│       │   │   │   ├── TableSkeleton.svelte                                # Заглушка для таблицы
│       │   │   │   ├── TreeNodeItem.svelte                                 # Элемент дерева
│       │   │   │   └── index.ts                                            # Экспорт компонентов отображения данных
│       │   │   ├── feedback/                                               # Компоненты обратной связи
│       │   │   │   ├── ErrorMessage.svelte                                 # Компонент ошибки
│       │   │   │   ├── LoadingOverlay.svelte                               # Оверлей загрузки
│       │   │   │   ├── NotificationItem.svelte                             # Элемент уведомления
│       │   │   │   ├── NotificationItem.story.svelte                       # Стори для NotificationItem
│       │   │   │   └── index.ts                                            # Экспорт компонентов обратной связи
│       │   │   ├── forms/                                                  # Форм-компоненты
│       │   │   │   ├── FieldHighlighter.svelte                             # Инструмент для выделения полей формы
│       │   │   │   ├── FileUpload.svelte                                   # Компонент загрузки файлов
│       │   │   │   ├── FileUpload.story.svelte                             # Стори для FileUpload
│       │   │   │   ├── FilterPanel.svelte                                  # Панель фильтров
│       │   │   │   ├── FormFieldGroup.svelte                               # Группировка полей формы
│       │   │   │   ├── FormFieldGroup.story.svelte                         # Стори для FormFieldGroup
│       │   │   │   ├── FormSection.svelte                                  # Секция формы
│       │   │   │   ├── FormSection.story.svelte                            # Стори для FormSection
│       │   │   │   ├── InputField.svelte                                   # Поле ввода с дополнительной информацией
│       │   │   │   ├── InputGroup.svelte                                   # Группа полей ввода
│       │   │   │   ├── RadioGroup.svelte                                   # Группа переключателей
│       │   │   │   ├── RadioGroup.story.svelte                             # Стори для RadioGroup
│       │   │   │   ├── SearchBar.svelte                                    # Панель поиска
│       │   │   │   ├── SearchBar.story.svelte                              # Стори для SearchBar
│       │   │   │   ├── SearchInput.svelte                                  # Поле ввода поиска
│       │   │   │   ├── SearchInput.story.svelte                            # Стори для SearchInput
│       │   │   │   ├── TagInput.svelte                                     # Компонент ввода тегов
│       │   │   │   ├── TagInput.story.svelte                               # Стори для TagInput
│       │   │   │   └── index.ts                                            # Экспорт форм-компонентов
│       │   │   ├── graph/                                                  # Графовые компоненты
│       │   │   │   ├── GraphEdge.svelte                                    # Ребро графа
│       │   │   │   ├── GraphNode.svelte                                    # Узел графа
│       │   │   │   ├── GraphvizCluster.svelte                              # Кластер для Graphviz
│       │   │   │   ├── GraphvizEdge.svelte                                 # Ребро для Graphviz
│       │   │   │   ├── GraphvizNode.svelte                                 # Узел для Graphviz
│       │   │   │   ├── GraphvizSubgraph.svelte                             # Подграф для Graphviz
│       │   │   │   └── index.ts                                            # Экспорт графовых компонентов
│       │   │   ├── navigation/                                             # Навигационные компоненты
│       │   │   │   ├── Breadcrumb.svelte                                   # Навигационная цепочка
│       │   │   │   ├── Breadcrumb.story.svelte                             # Стори для Breadcrumb
│       │   │   │   ├── BurgerMenu.svelte                                   # Кнопка-гамбургер для меню
│       │   │   │   ├── BurgerMenu.story.svelte                             # Стори для BurgerMenu
│       │   │   │   ├── DropdownMenu.svelte                                 # Выпадающее меню
│       │   │   │   ├── MenuItem.svelte                                     # Элемент меню
│       │   │   │   ├── MenuItem.story.svelte                               # Стори для MenuItem
│       │   │   │   ├── QuickAccessButtons.svelte                           # Кнопки быстрого доступа
│       │   │   │   ├── Toolbar.svelte                                      # Панель инструментов
│       │   │   │   └── index.ts                                            # Экспорт навигационных компонентов
│       │   │   ├── search/                                                 # Компоненты поиска
│       │   │   │   ├── SearchBar.svelte                                    # Панель поиска
│       │   │   │   └── index.ts                                            # Экспорт компонентов поиска
│       │   │   ├── tools/                                                  # Инструменты
│       │   │   │   ├── ButtonGroup.svelte                                  # Группа кнопок
│       │   │   │   ├── FilterPanel.svelte                                  # Панель фильтров
│       │   │   │   ├── OperationsHistory.svelte                            # История операций
│       │   │   │   ├── Toolbar.svelte                                      # Панель инструментов
│       │   │   │   ├── VariablesEditor.svelte                              # Редактор переменных
│       │   │   │   └── index.ts                                            # Экспорт инструментов
│       │   │   ├── tooltips/                                               # Подсказки
│       │   │   │   ├── Tooltip.svelte                                      # Всплывающая подсказка
│       │   │   │   ├── Tooltip.story.svelte                                # Стори для Tooltip
│       │   │   │   └── index.ts                                            # Экспорт подсказок
│       │   │   ├── visualization/                                          # Компоненты визуализации
│       │   │   │   ├── GraphNodeCard.svelte                                # Карточка узла графа
│       │   │   │   ├── GraphvizCluster.svelte                              # Кластер для Graphviz
│       │   │   │   ├── GraphvizClusterWithTitle.svelte                     # Кластер с заголовком для Graphviz
│       │   │   │   ├── GraphvizDirectedEdge.svelte                         # Направленное ребро для Graphviz
│       │   │   │   ├── GraphvizEdge.svelte                                 # Ребро для Graphviz
│       │   │   │   ├── GraphvizNode.svelte                                 # Узел для Graphviz
│       │   │   │   ├── GraphvizNodeConnection.svelte                       # Соединение узлов в Graphviz
│       │   │   │   ├── GraphvizNodeWithLabel.svelte                        # Узел с меткой для Graphviz
│       │   │   │   ├── GraphvizUndirectedEdge.svelte                       # Ненаправленное ребро для Graphviz
│       │   │   │   ├── LegendItem.svelte                                   # Элемент легенды
│       │   │   │   ├── OntologyEdgeComponent.svelte                        # Компонент ребра для онтологий
│       │   │   │   ├── OntologyNodeComponent.svelte                        # Компонент узла для онтологий
│       │   │   │   └── index.ts                                            # Экспорт компонентов визуализации
│       │   │   └── index.ts                                                # Объединяющий экспорт всех молекул
│       │   └── organisms/                                                  # Сложные структуры (навигация, таблицы и т.д.)
│       │       ├── Accordion/                                              # Компоненты аккордеона
│       │       │   ├── Accordion.svelte                                    # Аккордеон
│       │       │   ├── AccordionHeader.svelte                              # Заголовок аккордеона
│       │       │   ├── AccordionItem.svelte                                # Элемент аккордеона
│       │       │   ├── AccordionPanel.svelte                               # Панель аккордеона
│       │       │   └── index.ts                                            # Экспорт компонентов аккордеона
│       │       ├── Breadcrumbs.svelte                                      # Навигационные хлебные крошки
│       │       ├── ColumnManager.svelte                                    # Инструмент управления колонками таблицы
│       │       ├── ConfirmDialog.svelte                                    # Диалог подтверждения
│       │       ├── DataTable.svelte                                        # Интерактивная таблица
│       │       ├── FolderTree.svelte                                       # Структура папок
│       │       ├── Modal.svelte                                            # Модальное окно
│       │       ├── Pagination.svelte                                       # Компонент навигации по страницам
│       │       ├── Tabs/                                                   # Компоненты вкладок
│       │       │   ├── Tab.svelte                                          # Вкладка
│       │       │   ├── TabList.svelte                                      # Список вкладок
│       │       │   ├── TabPanel.svelte                                     # Панель вкладки
│       │       │   ├── TabPanels.svelte                                    # Контейнер панелей вкладок
│       │       │   ├── Tabs.svelte                                         # Компонент системы вкладок
│       │       │   └── index.ts                                            # Экспорт компонентов вкладок
│       │       ├── agile/                                                  # Agile-компоненты
│       │       │   ├── Backlog.svelte                                      # Бэклог
│       │       │   ├── Backlog.story.svelte                                # Стори для Backlog
│       │       │   ├── BurnDownChart.svelte                                # Диаграмма сгорания
│       │       │   ├── BurnDownChart.story.svelte                          # Стори для BurnDownChart
│       │       │   └── index.ts                                            # Экспорт Agile-компонентов
│       │       ├── canvas/                                                 # Canvas-организмы
│       │       │   ├── CanvasBoard.svelte                                  # Доска для рисования
│       │       │   ├── EraserTool.svelte                                   # Инструмент ластик
│       │       │   ├── PenTool.svelte                                      # Инструмент перо
│       │       │   └── index.ts                                            # Экспорт Canvas-организмов
│       │       ├── chat/                                                   # Чат-организмы
│       │       │   ├── ChatItem.svelte                                     # Элемент чата
│       │       │   ├── ChatList.svelte                                     # Список чатов
│       │       │   ├── ChatWindow.svelte                                   # Окно чата
│       │       │   ├── MessageItem.svelte                                  # Элемент сообщения
│       │       │   ├── MessageList.svelte                                  # Список сообщений
│       │       │   └── index.ts                                            # Экспорт чат-организмов
│       │       ├── code/                                                   # Код-организмы
│       │       │   ├── CodeSection.svelte                                  # Секция кода
│       │       │   ├── DocumentationBlock.svelte                           # Блок документации
│       │       │   └── index.ts                                            # Экспорт код-организмов
│       │       ├── data-display/                                           # Организмы отображения данных
│       │       │   ├── ColumnManager.svelte                                # Менеджер колонок
│       │       │   ├── DataTable.svelte                                    # Таблица данных
│       │       │   ├── FlatTree.svelte                                     # Плоское дерево
│       │       │   ├── FolderTree.svelte                                   # Дерево папок
│       │       │   ├── Table.svelte                                        # Базовая таблица
│       │       │   ├── TreeViewer.svelte                                   # Просмотр дерева
│       │       │   ├── VirtualTree.svelte                                  # Виртуальное дерево
│       │       │   └── index.ts                                            # Экспорт организмов отображения данных
│       │       ├── interactive/                                            # Интерактивные компоненты
│       │       │   ├── Combobox.svelte                                     # Комбинированный список
│       │       │   ├── Combobox.story.svelte                               # Стори для Combobox
│       │       │   ├── ControlPanel.svelte                                 # Панель управления
│       │       │   ├── ExportPanel.svelte                                  # Панель экспорта
│       │       │   ├── FilterBar.svelte                                    # Панель фильтра
│       │       │   ├── FilterBar.story.svelte                              # Стори для FilterBar
│       │       │   └── index.ts                                            # Экспорт интерактивных компонентов
│       │       ├── kanban/                                                 # Kanban-компоненты
│       │       │   ├── KanbanBoard.svelte                                  # Доска Kanban
│       │       │   ├── KanbanBoard.story.svelte                            # Стори для KanbanBoard
│       │       │   ├── KanbanColumn.svelte                                 # Колонка Kanban
│       │       │   ├── KanbanColumn.story.svelte                           # Стори для KanbanColumn
│       │       │   └── index.ts                                            # Экспорт Kanban-компонентов
│       │       ├── tables/                                                 # Табличные компоненты
│       │       │   ├── Table.svelte                                        # Таблица
│       │       │   ├── TableBody.svelte                                    # Тело таблицы
│       │       │   ├── TableCell.svelte                                    # Ячейка таблицы
│       │       │   ├── TableHeader.svelte                                  # Заголовок таблицы
│       │       │   ├── TableRow.svelte                                     # Строка таблицы
│       │       │   └── index.ts                                            # Экспорт табличных компонентов
│       │       └── index.ts                                                # Объединяющий экспорт всех организмов
│       ├── playground/                                                     # Интерактивный playground для компонентов
│       │   ├── components/                                                 # Компоненты интерфейса для playground
│       │   │   ├── Canvas.svelte                                           # Canvas для playground
│       │   │   ├── CodeViewer.svelte                                       # Просмотр кода в playground
│       │   │   ├── ControlPanel.svelte                                     # Панель управления в playground
│       │   │   ├── Navigator.svelte                                        # Навигатор в playground
│       │   │   ├── Story.svelte                                            # Компонент для отображения стори
│       │   │   ├── StoryRoot.svelte                                        # Корневой компонент стори
│       │   │   └── Toolbar.svelte                                          # Панель инструментов в playground
│       │   ├── index.ts                                                    # Экспорт компонентов playground
│       │   ├── stores/                                                     # Хранилища состояния для playground
│       │   │   └── playground.svelte.ts                                    # Хранилище состояния playground
│       │   ├── types/                                                      # Типы данных для playground
│       │   │   └── index.ts                                                # Экспорт типов данных для playground
│       │   └── utils/                                                      # Вспомогательные утилиты для playground
│       │       └── code-generator.ts                                       # Генератор кода для playground
│       ├── types/                                                          # Определения типов TypeScript
│       │   ├── components.ts                                               # Типы для компонентов
│       │   ├── form.ts                                                     # Типы для форм
│       │   ├── index.ts                                                    # Экспорт типов
│       │   └── table.ts                                                    # Типы для таблиц
│       ├── utils/                                                          # Вспомогательные функции
│       │   ├── clipboard.ts                                                # Функции для работы с буфером обмена
│       │   ├── debounce.ts                                                 # Утилита дебаунсинга
│       │   └── index.ts                                                    # Экспорт утилит
│       └── index.ts                                                        # Главный файл экспорта библиотеки
│   └── routes/                                                             # Маршруты SvelteKit
│       └── +page.svelte                                                    # Главная страница
├── stylist-svelte-v0.1.0.tgz                                               # Архив старой версии
├── svelte.config.js                                                        # Конфигурация компилятора Svelte
├── tsconfig.json                                                           # Конфигурация TypeScript
├── vite.config.ts                                                          # Конфигурация сборки Vite
└── yarn.lock                                                               # Блокировка версий зависимостей
```

## Подробное описание файлов и папок

### Корневые файлы и папки

#### `.claude/settings.local.json`
- **Назначение**: Локальные настройки для инструмента Claude AI
- **Содержимое**: Конфигурация Claude AI для работы с проектом

#### `.gitignore`
- **Назначение**: Определяет файлы и директории, которые не должны быть добавлены в репозиторий Git
- **Содержимое**: Паттерны для игнорирования node_modules/, dist/, .svelte-kit/, .DS_Store и других временных файлов

#### `.npmrc`, `.prettierrc`, `.prettierignore`, `.yarnrc.yml`
- **Назначение**: Конфигурационные файлы для различных инструментов
- **Содержимое**: 
  - `.npmrc`: Настройки для менеджера пакетов npm/yarn
  - `.prettierrc`: Правила форматирования кода
  - `.prettierignore`: Файлы и директории, игнорируемые Prettier
  - `.yarnrc.yml`: Конфигурация менеджера пакетов Yarn

#### `LICENSE`
- **Назначение**: Лицензия проекта
- **Содержимое**: Текст лицензии MIT

#### `QWEN.md`
- **Назначение**: Инструкциональный контекст для Qwen AI
- **Содержимое**: Документ с инструкциями для ИИ-ассистента

#### `README.md`
- **Назначение**: Основная документация проекта
- **Содержимое**: Информация о проекте, установке, использовании и вкладе

#### `docs/`
- **Назначение**: Документация проекта
- **Содержимое**: 
  - `ad/`: Документация по архитектуре Atomic Design
  - `adr/`: Архитектурные решения (Architecture Decision Records)
  - `cookbooks/`: Руководства по работе с проектом

#### `package.json`
- **Назначение**: Основной файл зависимостей и скриптов
- **Содержимое**: Определяет метаданные пакета, зависимости и команды для работы с проектом

#### `package.tgz`
- **Назначение**: Собранный пакет
- **Содержимое**: Архив с собранными файлами библиотеки

#### `src/`
- **Назначение**: Исходный код библиотеки компонентов
- **Содержимое**: Все исходники проекта, включая компоненты, утилиты и типы

#### `stylist-svelte-v0.1.0.tgz`
- **Назначение**: Архив старой версии
- **Содержимое**: Архив с версией 0.1.0 библиотеки

#### `svelte.config.js`
- **Назначение**: Конфигурация компилятора Svelte
- **Содержимое**: Определяет препроцессоры и настройки компиляции

#### `tsconfig.json`
- **Назначение**: Конфигурация TypeScript
- **Содержимое**: Определяет параметры компиляции TypeScript

#### `vite.config.ts`
- **Назначение**: Конфигурация сборки Vite
- **Содержимое**: Определяет настройки для разработки и сборки проекта

#### `yarn.lock`
- **Назначение**: Блокировка версий зависимостей
- **Содержимое**: Файл с точными версиями всех зависимостей

### Папка src/lib/components

#### `atoms/`
- **Назначение**: Атомарные компоненты - базовые строительные блоки интерфейса
- **Содержимое**: 
  - `animation/`: Анимационные компоненты (например, NumberFlow)
  - `feedback/`: Компоненты обратной связи (Alert, ProgressBar, Spinner)
  - `forms/`: Компоненты форм (Input, Checkbox, Select)
  - `indicators/`: Индикаторы и статусы (ChatStatusIndicator, MessageStatus)
  - `media/`: Медиа компоненты (Avatar, Icon)
  - `typography/`: Типографские компоненты (CodeBlock, Link)
  - `ui-elements/`: Основные UI-элементы (Button, Badge, Divider)

#### `molecules/`
- **Назначение**: Молекулярные компоненты - комбинации атомов, работающие как единое целое
- **Содержимое**: 
  - `canvas/`: Canvas-молекулы
  - `chat/`: Компоненты для чата (ChatHeader, MessageInput)
  - `code/`: Компоненты для работы с кодом (CodeWithCopy, SyntaxHighlightedCode)
  - `controls/`: Контролы (NumberFlow, RadioGroup)
  - `data-display/`: Компоненты отображения данных (DataTable, StatsCard)
  - `feedback/`: Компоненты обратной связи
  - `forms/`: Компоненты форм (FormFieldGroup, FormSection)
  - `graph/`: Графовые компоненты
  - `navigation/`: Навигационные компоненты (Breadcrumb, DropdownMenu)
  - `search/`: Компоненты поиска (SearchBar)
  - `tools/`: Инструменты (ButtonGroup, FilterPanel)
  - `tooltips/`: Подсказки (Tooltip)
  - `visualization/`: Компоненты визуализации

#### `organisms/`
- **Назначение**: Организменные компоненты - сложные структуры из атомов, молекул и других организмов
- **Содержимое**: 
  - `Accordion/`: Компоненты аккордеона
  - `Tabs/`: Компоненты вкладок
  - `agile/`: Agile-компоненты (Backlog, BurnDownChart)
  - `canvas/`: Canvas-организмы
  - `chat/`: Чат-организмы
  - `code/`: Код-организмы
  - `data-display/`: Компоненты отображения данных
  - `interactive/`: Интерактивные компоненты
  - `kanban/`: Kanban-компоненты
  - `tables/`: Табличные компоненты

### Папка src/lib/playground

#### `components/`
- **Назначение**: Компоненты интерфейса для Playground
- **Содержимое**: Компоненты для интерактивного тестирования компонентов

#### `stores/`
- **Назначение**: Хранилища состояния для Playground
- **Содержимое**: Файлы с Svelte-хранилищами для управления состоянием Playground

#### `types/`
- **Назначение**: Типы данных для Playground
- **Содержимое**: TypeScript-типы, используемые в Playground

#### `utils/`
- **Назначение**: Вспомогательные утилиты для Playground
- **Содержимое**: Функции, используемые в Playground (например, code-generator.ts)

### Папка src/lib/types

#### Назначение: Определения типов TypeScript
- **Содержимое**: 
  - `components.ts`: Типы для компонентов
  - `form.ts`: Типы для форм
  - `table.ts`: Типы для таблиц
  - `index.ts`: Объединяющий файл экспорта типов

### Папка src/lib/utils

#### Назначение: Вспомогательные функции
- **Содержимое**: 
  - `clipboard.ts`: Функции для работы с буфером обмена
  - `debounce.ts`: Утилита для дебаунсинга
  - `index.ts`: Объединяющий файл экспорта утилит

### Папка src/routes

#### Назначение: Маршруты SvelteKit
- **Содержимое**: 
  - `+page.svelte`: Главная страница приложения

## Сборка и запуск проекта

### Предварительные требования:
- Node.js (v18 или выше)
- Yarn (рекомендуется)

### Установка:
1. Установить зависимости:
   ```bash
   yarn install
   ```

### Доступные скрипты:
- `yarn dev` - Запуск сервера разработки с Playground
- `yarn build` - Сборка библиотеки компонентов
- `yarn preview` - Предварительный просмотр собранной документации
- `yarn check` - Проверка типов Svelte
- `yarn lint` - Проверка кода
- `yarn format` - Форматирование кода с помощью Prettier
- `yarn test` - Запуск тестов
- `yarn clean` - Очистка артефактов сборки

## Конфигурация

### svelte.config.js
Файл конфигурации Svelte, который использует vitePreprocess() и имеет настройки для работы с TypeScript и Tailwind CSS.

### package.json
Важные зависимости:
- svelte: ^5.0.0
- tailwindcss, autoprefixer, postcss
- Типы и инструменты для TypeScript, ESLint и Prettier

## Архитектурные решения

### Использование Svelte 5 Runes:
- `$state()` для реактивного состояния
- `$derived()` для вычисляемых значений
- `$effect()` для побочных эффектов
- `$props()` для пропсов компонента

### Система импортов:
- `import { Component } from 'stylist-svelte'` - основные компоненты
- `import { playgroundStore } from 'stylist-svelte/playground'` - для работы с Playground
- `import type { SomeType } from 'stylist-svelte/types'` - для TypeScript типов

### Структура экспорта:
- `./components/atoms` - Атомарные компоненты
- `./components/molecules` - Молекулярные компоненты
- `./components/organisms` - Организменные компоненты
- `./utils` - Вспомогательные функции
- `./types` - TypeScript типы
- `./playground` - Компоненты и функциональность для Playground
