# Полная структура проекта stylist-svelte

Этот документ описывает полную структуру проекта `stylist-svelte`, включая все компоненты, утилиты, типы, документацию и вспомогательные файлы.

## Обзор проекта

**Название**: stylist-svelte
**Версия**: 0.7.0
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
├── .git/                                                                   # Git метаданные
├── .svelte-kit/                                                            # Временные файлы SvelteKit
│   ├── ambient.d.ts                                                        # Типы SvelteKit
│   ├── generated/                                                          # Сгенерированные файлы
│   │   ├── client/                                                         # Клиентские сгенерированные файлы
│   │   │   └── nodes/                                                      # Узлы роутинга
│   │   │       ├── 0.js
│   │   │       ├── 1.js
│   │   │       └── 2.js
│   │   ├── root.js
│   │   ├── root.svelte
│   │   └── server/                                                         # Серверные сгенерированные файлы
│   │       └── internal.js
│   ├── non-ambient.d.ts
│   ├── tsconfig.json
│   └── types/                                                              # Типы роутинга
│       └── src/
│           └── routes/
│               └── $types.d.ts
├── .yarn/                                                                  # Управление зависимостями Yarn
├── dist/                                                                   # Собранные файлы
├── docs/                                                                   # Дополнительная документация
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
├── node_modules/                                                           # Зависимости проекта
├── src/                                                                    # Исходный код библиотеки компонентов
│   ├── app.html                                                            # HTML-шаблон приложения
│   └── lib/                                                                # Основная библиотека
│       ├── components/                                                     # Компоненты пользовательского интерфейса
│       │   ├── atoms/                                                      # Атомарные компоненты (кнопки, инпуты, лейблы и т.д.)
│       │   │   ├── animation/                                              # Анимационные атомы
│       │   │   │   ├── NumberFlow.svelte                                   # Анимированное отображение числовых значений
│       │   │   │   ├── NumberFlow.story.svelte                             # Стори для NumberFlow
│       │   │   │   └── index.ts                                            # Экспорт анимационных атомов
│       │   │   ├── controls/                                               # Контрольные элементы
│       │   │   │   ├── buttons/                                            # Кнопочные элементы
│       │   │   │   │   ├── Button.svelte                                   # Универсальная кнопка
│       │   │   │   │   ├── Button.story.svelte                             # Стори для Button
│       │   │   │   │   ├── Buttons.story.svelte                            # Стори для нескольких кнопок
│       │   │   │   │   ├── CloseButton.svelte                              # Кнопка закрытия
│       │   │   │   │   ├── IconButton.svelte                               # Иконка-кнопка
│       │   │   │   │   ├── index.ts                                        # Экспорт кнопочных элементов
│       │   │   │   │   └── SplitButton.svelte                              # Раздельная кнопка
│       │   │   │   ├── overlays/                                           # Элементы оверлея
│       │   │   │   │   ├── index.ts                                        # Экспорт элементов оверлея
│       │   │   │   │   ├── Overlays.story.svelte                           # Стори для оверлеев
│       │   │   │   │   └── SimpleTooltip.svelte                            # Простой тултип
│       │   │   │   ├── selectors/                                          # Элементы выбора
│       │   │   │   │   ├── ColorSwatch.svelte                              # Цветовая палитра
│       │   │   │   │   ├── index.ts                                        # Экспорт элементов выбора
│       │   │   │   │   ├── InputAddon.svelte                               # Дополнение к инпуту
│       │   │   │   │   ├── Select.svelte                                   # Выпадающий список
│       │   │   │   │   ├── Select.story.svelte                             # Стори для Select
│       │   │   │   │   └── Selectors.story.svelte                          # Стори для селекторов
│       │   │   │   ├── sliders/                                            # Слайдерные элементы
│       │   │   │   │   ├── index.ts                                        # Экспорт слайдерных элементов
│       │   │   │   │   ├── RangeSlider.svelte                              # Слайдер диапазона
│       │   │   │   │   ├── RangeSlider.story.svelte                        # Стори для RangeSlider
│       │   │   │   │   └── Sliders.story.svelte                            # Стори для слайдеров
│       │   │   │   └── toggles/                                            # Переключательные элементы
│       │   │   │       ├── Checkbox.svelte                                 # Флажок
│       │   │   │       ├── Checkbox.story.svelte                           # Стори для Checkbox
│       │   │   │       ├── index.ts                                        # Экспорт переключательных элементов
│       │   │   │       ├── Radio.svelte                                    # Радио-кнопка
│       │   │   │       ├── Radio.story.svelte                              # Стори для Radio
│       │   │   │       ├── Switch.svelte                                   # Переключатель
│       │   │   │       ├── Switch.story.svelte                             # Стори для Switch
│       │   │   │       ├── Toggle.svelte                                   # Переключатель
│       │   │   │       └── Toggle.story.svelte                             # Стори для Toggle
│       │   │   ├── feedback/                                               # Компоненты обратной связи
│       │   │   │   ├── index.ts                                            # Экспорт компонентов обратной связи
│       │   │   │   └── placeholders/                                       # Заполнители
│       │   │   │       ├── index.ts                                        # Экспорт заполнителей
│       │   │   │       ├── Skeleton.svelte                                 # Заглушка с анимацией для загрузки данных
│       │   │   │       ├── Skeleton.story.svelte                           # Стори для Skeleton
│       │   │   │       ├── SkeletonCircle.svelte                           # Круглая заглушка
│       │   │   │       ├── SkeletonRectangle.svelte                        # Прямоугольная заглушка
│       │   │   │       ├── SkeletonText.svelte                             # Текстовая заглушка
│       │   │   │       ├── TableSkeleton.svelte                            # Заглушка для таблицы
│       │   │   │       └── TableSkeleton.story.svelte                      # Стори для TableSkeleton
│       │   │   ├── input/                                                  # Компоненты ввода
│       │   │   │   ├── base/                                               # Базовые элементы ввода
│       │   │   │   │   ├── index.ts                                        # Экспорт базовых элементов ввода
│       │   │   │   │   ├── Input.svelte                                    # Поле для ввода текста
│       │   │   │   │   ├── Input.story.svelte                              # Стори для Input
│       │   │   │   │   ├── Textarea.svelte                                 # Многострочное поле ввода
│       │   │   │   │   └── Textarea.story.svelte                           # Стори для Textarea
│       │   │   │   ├── helpers/                                            # Вспомогательные элементы ввода
│       │   │   │   │   ├── CharacterCount.svelte                           # Счетчик символов
│       │   │   │   │   ├── FormErrorMessage.svelte                         # Сообщение об ошибке формы
│       │   │   │   │   ├── FormHelperText.svelte                           # Вспомогательный текст формы
│       │   │   │   │   ├── Helpers.story.svelte                            # Стори для вспомогательных элементов
│       │   │   │   │   ├── index.ts                                        # Экспорт вспомогательных элементов ввода
│       │   │   │   │   └── PinInputDigit.svelte                            # Цифра PIN-кода
│       │   │   │   └── specialized/                                        # Специализированные элементы ввода
│       │   │   │       ├── EmailInput.svelte                               # Ввод email
│       │   │   │       ├── index.ts                                        # Экспорт специализированных элементов ввода
│       │   │   │       ├── PasswordInput.svelte                            # Ввод пароля
│       │   │   │       ├── PhoneNumberInput.svelte                         # Ввод номера телефона
│       │   │   │       └── SpecializedInputs.story.svelte                  # Стори для специализированных элементов ввода
│       │   │   ├── media/                                                  # Медиа компоненты
│       │   │   │   ├── Avatar.svelte                                       # Отображение аватара пользователя
│       │   │   │   ├── Avatar.story.svelte                                 # Стори для Avatar
│       │   │   │   ├── CountryFlag.svelte                                  # Флаг страны
│       │   │   │   ├── Favicon.svelte                                      # Фавикон
│       │   │   │   ├── Icon.svelte                                         # Отображение иконки
│       │   │   │   ├── Icon.story.svelte                                   # Стори для Icon
│       │   │   │   ├── IconWrapper.svelte                                  # Обертка иконки
│       │   │   │   ├── Image.svelte                                        # Изображение
│       │   │   │   ├── index.ts                                            # Экспорт медиа компонентов
│       │   │   │   └── Media.story.svelte                                  # Стори для медиа компонентов
│       │   │   ├── process/                                                # Компоненты процессов
│       │   │   │   ├── index.ts                                            # Экспорт компонентов процессов
│       │   │   │   ├── Spinner.svelte                                      # Индикатор загрузки
│       │   │   │   └── Spinner.story.svelte                                # Стори для Spinner
│       │   │   ├── progress/                                               # Компоненты прогресса
│       │   │   │   ├── index.ts                                            # Экспорт компонентов прогресса
│       │   │   │   ├── ProgressBar.svelte                                  # Индикатор выполнения задачи
│       │   │   │   ├── ProgressBar.story.svelte                            # Стори для ProgressBar
│       │   │   │   ├── ProgressCircle.svelte                               # Круговой индикатор прогресса
│       │   │   │   ├── ProgressCircle.story.svelte                         # Стори для ProgressCircle
│       │   │   │   └── steps/                                              # Компоненты шагов
│       │   │   │       ├── index.ts                                        # Экспорт компонентов шагов
│       │   │   │       ├── StepConnector.svelte                            # Соединитель шагов
│       │   │   │       ├── StepConnector.story.svelte                      # Стори для StepConnector
│       │   │   │       ├── StepIcon.svelte                                 # Иконка шага
│       │   │   │       └── StepIcon.story.svelte                           # Стори для StepIcon
│       │   │   └── typography/                                             # Типографские компоненты
│       │   │       ├── accordion/                                          # Компоненты аккордеона
│       │   │       │   ├── AccordionIcon.svelte                            # Иконка аккордеона
│       │   │       │   ├── AccordionIcon.story.svelte                      # Стори для иконки аккордеона
│       │   │       │   ├── index.ts                                        # Экспорт компонентов аккордеона
│       │   │       ├── animation/                                          # Анимационные компоненты
│       │   │       │   ├── index.ts                                        # Экспорт анимационных компонентов
│       │   │       │   ├── NumberFlow.svelte                               # Анимированное число
│       │   │       │   └── NumberFlow.story.svelte                         # Стори для NumberFlow
│       │   │       ├── block/                                              # Блочные компоненты
│       │   │       │   ├── Block.svelte                                    # Блок
│       │   │       │   ├── Block.story.svelte                              # Стори для блока
│       │   │       │   ├── Blockquote.svelte                               # Цитата
│       │   │       │   ├── index.ts                                        # Экспорт блочных компонентов
│       │   │       ├── elements/                                           # Элементы типографики
│       │   │       │   ├── Badge.svelte                                    # Значок
│       │   │       │   ├── Badge.story.svelte                              # Стори для Badge
│       │   │       │   ├── Chip.svelte                                     # Компактный элемент для отображения информации
│       │   │       │   ├── Chip.story.svelte                               # Стори для Chip
│       │   │       │   ├── CodeBlock.svelte                                # Блок для отображения форматированного кода
│       │   │       │   ├── CodeBlock.story.svelte                          # Стори для CodeBlock
│       │   │       │   ├── Elements.story.svelte                           # Стори для элементов типографики
│       │   │       │   ├── index.ts                                        # Экспорт элементов типографики
│       │   │       │   ├── Label.svelte                                    # Текстовая метка для элементов формы
│       │   │       │   ├── Label.story.svelte                              # Стори для Label
│       │   │       │   ├── Tag.svelte                                      # Тег для маркировки
│       │   │       │   └── Tag.story.svelte                                # Стори для Tag
│       │   │       ├── indicators/                                         # Индикаторы
│       │   │       │   ├── BreadcrumbSeparator.svelte                      # Разделитель хлебных крошек
│       │   │       │   ├── BreadcrumbSeparator.story.svelte                # Стори для разделителя хлебных крошек
│       │   │       │   ├── CountBadge.svelte                               # Значок с числом
│       │   │       │   ├── Counter.svelte                                  # Счетчик
│       │   │       │   ├── Dot.svelte                                      # Точка
│       │   │       │   ├── Dot.story.svelte                                # Стори для точки
│       │   │       │   ├── index.ts                                        # Экспорт индикаторов
│       │   │       │   ├── Indicators.story.svelte                         # Стори для индикаторов
│       │   │       │   ├── ListItemMarker.svelte                           # Маркер элемента списка
│       │   │       │   ├── ListItemMarker.story.svelte                     # Стори для маркера элемента списка
│       │   │       │   ├── PageEllipsis.svelte                             # Эллипсис страницы
│       │   │       │   ├── StatusIndicator.atom.svelte                     # Атомный индикатор статуса
│       │   │       │   └── StatusIndicator.svelte                          # Индикатор статуса
│       │   │       ├── inline/                                             # Встроенные элементы
│       │   │       │   ├── Abbr.svelte                                     # Аббревиатура
│       │   │       │   ├── Counter.story.svelte                            # Стори для счетчика
│       │   │       │   ├── DefinitionDescription.svelte                    # Описание определения
│       │   │       │   ├── DefinitionTerm.svelte                           # Термин определения
│       │   │       │   ├── Divider.svelte                                  # Разделитель
│       │   │       │   ├── Divider.story.svelte                            # Стори для Divider
│       │   │       │   ├── Em.svelte                                       # Курсив
│       │   │       │   ├── Highlight.svelte                                # Выделение
│       │   │       │   ├── index.ts                                        # Экспорт встроенных элементов
│       │   │       │   ├── Inline.story.svelte                             # Стори для встроенных элементов
│       │   │       │   ├── InlineCode.svelte                               # Отображение кода внутри текста
│       │   │       │   ├── InlineCode.story.svelte                         # Стори для InlineCode
│       │   │       │   ├── Kbd.svelte                                      # Компонент для отображения клавиш клавиатуры
│       │   │       │   ├── Kbd.story.svelte                                # Стори для Kbd
│       │   │       │   ├── Link.svelte                                     # Ссылка
│       │   │       │   ├── Link.story.svelte                               # Стори для Link
│       │   │       │   ├── Separator.svelte                                # Разделитель
│       │   │       │   ├── Separator.story.svelte                          # Стори для Separator
│       │   │       │   ├── Spacer.svelte                                   # Отступ
│       │   │       │   ├── Spacer.story.svelte                             # Стори для Spacer
│       │   │       │   ├── Strikethrough.svelte                            # Зачеркивание
│       │   │       │   ├── Strong.svelte                                   # Жирный текст
│       │   │       │   ├── Subscript.svelte                                # Подстрочный текст
│       │   │       │   └── Superscript.svelte                              # Надстрочный текст
│       │   │       ├── tabs/                                               # Компоненты вкладок
│       │   │       │   ├── index.ts                                        # Экспорт компонентов вкладок
│       │   │       │   ├── TabIndicator.svelte                             # Индикатор вкладки
│       │   │       │   └── TabIndicator.story.svelte                       # Стори для индикатора вкладки
│       │   │       └── text/                                               # Текстовые компоненты
│       │   │           ├── Caption.svelte                                  # Подпись
│       │   │           ├── Heading.svelte                                  # Заголовок
│       │   │           ├── index.ts                                        # Экспорт текстовых компонентов
│       │   │           ├── Paragraph.svelte                                # Параграф
│       │   │           ├── SectionHeading.svelte                           # Заголовок секции
│       │   │           ├── Small.svelte                                    # Маленький текст
│       │   │           ├── Text.svelte                                     # Текст
│       │   │           └── Text.story.svelte                               # Стори для Text
│       │   ├── molecules/                                                  # Составные компоненты (формы, карточки и т.д.)
│       │   │   ├── canvas/                                                 # Canvas-компоненты
│       │   │   │   ├── CanvasDrawingSurface.svelte                         # Поверхность рисования
│       │   │   │   ├── CanvasToolbar.svelte                                # Панель инструментов для холста
│       │   │   │   ├── ChartCanvas.svelte                                  # Холст для диаграмм
│       │   │   │   ├── ImageEditorCanvas.svelte                            # Холст редактора изображений
│       │   │   │   └── index.ts                                            # Экспорт canvas-компонентов
│       │   │   ├── chat/                                                   # Компоненты чата
│       │   │   │   ├── AttachmentPreview.svelte                            # Предварительный просмотр вложений
│       │   │   │   ├── ChatHeader.svelte                                   # Заголовок чата
│       │   │   │   ├── index.ts                                            # Экспорт компонентов чата
│       │   │   │   ├── MessageInput.svelte                                 # Поле ввода сообщения
│       │   │   │   ├── MessageMeta.svelte                                  # Метаданные сообщения
│       │   │   │   └── UserStatus.svelte                                   # Индикатор статуса пользователя
│       │   │   │   └── atoms/                                              # Атомы чата
│       │   │   │       ├── ChatStatusIndicator.svelte                      # Индикатор статуса в чате
│       │   │   │       ├── ChatStatusIndicator.story.svelte                # Стори для индикатора статуса чата
│       │   │   │       ├── MessageStatus.svelte                            # Индикатор статуса сообщения
│       │   │   │       ├── MessageStatus.story.svelte                      # Стори для индикатора статуса сообщения
│       │   │   │       ├── MessageTimestamp.svelte                         # Отображение временной метки сообщения
│       │   │   │       ├── MessageTimestamp.story.svelte                   # Стори для временной метки сообщения
│       │   │   │       └── index.ts                                        # Экспорт атомов чата
│       │   │   ├── code/                                                   # Компоненты для работы с кодом
│       │   │   │   ├── CodeWithCopy.svelte                                 # Компонент кода с возможностью копирования
│       │   │   │   ├── index.ts                                            # Экспорт кодовых компонентов
│       │   │   │   ├── ResponseViewer.svelte                               # Компонент просмотра ответов
│       │   │   │   └── SyntaxHighlightedCode.svelte                        # Компонент с подсветкой синтаксиса
│       │   │   ├── controls/                                               # Контролы
│       │   │   │   ├── copy/                                               # Контролы копирования
│       │   │   │   │   ├── CodeWithCopy.svelte                             # Копирование кода
│       │   │   │   │   ├── CopyButton.svelte                               # Кнопка копирования
│       │   │   │   │   ├── CopyButton.story.svelte                         # Стори для кнопки копирования
│       │   │   │   │   └── index.ts                                        # Экспорт контролей копирования
│       │   │   │   ├── menus/                                              # Меню
│       │   │   │   │   ├── BurgerMenu.svelte                               # Меню-бургер
│       │   │   │   │   ├── BurgerMenu.story.svelte                         # Стори для меню-бургера
│       │   │   │   │   ├── DropdownMenu.svelte                             # Выпадающее меню
│       │   │   │   │   ├── index.ts                                        # Экспорт контролей меню
│       │   │   │   │   ├── MenuItem.svelte                                 # Элемент меню
│       │   │   │   │   └── MenuItem.story.svelte                           # Стори для элемента меню
│       │   │   │   ├── toggles/                                            # Переключатели
│       │   │   │   │   ├── index.ts                                        # Экспорт контролей переключателей
│       │   │   │   │   ├── ToggleGroupItem.svelte                          # Элемент группы переключателей
│       │   │   │   │   └── ToggleGroupRoot.svelte                          # Корень группы переключателей
│       │   │   │   └── trees/                                              # Деревья
│       │   │   │       ├── index.ts                                        # Экспорт контролей деревьев
│       │   │   │       └── TreeNodeItem.svelte                             # Элемент узла дерева
│       │   │   ├── data-display/                                           # Компоненты отображения данных
│       │   │   │   ├── CardSkeleton.svelte                                 # Заглушка для карточки
│       │   │   │   ├── ExpandableTableRow.svelte                           # Расширяемая строка таблицы
│       │   │   │   ├── index.ts                                            # Экспорт компонентов отображения данных
│       │   │   │   ├── Rating.svelte                                       # Компонент оценки
│       │   │   │   ├── Rating.story.svelte                                 # Стори для Rating
│       │   │   │   ├── StatsCard.svelte                                    # Карточка статистики
│       │   │   │   └── StatsCard.story.svelte                              # Стори для StatsCard
│       │   │   ├── dialogs/                                                # Диалоговые компоненты
│       │   │   ├── feedback/                                               # Компоненты обратной связи
│       │   │   │   ├── alerts/                                             # Оповещения
│       │   │   │   │   ├── Alert.svelte                                    # Оповещение
│       │   │   │   │   ├── Alert.story.svelte                              # Стори для оповещения
│       │   │   │   │   ├── ErrorMessage.svelte                             # Сообщение об ошибке
│       │   │   │   │   └── index.ts                                        # Экспорт компонентов оповещений
│       │   │   │   ├── overlays/                                           # Оверлеи
│       │   │   │   │   ├── index.ts                                        # Экспорт компонентов оверлея
│       │   │   │   │   └── LoadingOverlay.svelte                           # Оверлей загрузки
│       │   │   │   ├── states/                                             # Состояния
│       │   │   │   │   ├── EmptyState.svelte                               # Пустое состояние
│       │   │   │   │   ├── EmptyState.story.svelte                         # Стори для пустого состояния
│       │   │   │   │   └── index.ts                                        # Экспорт компонентов состояния
│       │   │   │   └── toasts/                                             # Всплывающие уведомления
│       │   │   │       ├── index.ts                                        # Экспорт компонентов всплывающих уведомлений
│       │   │   │       ├── NotificationItem.svelte                         # Элемент уведомления
│       │   │   │       ├── NotificationItem.story.svelte                   # Стори для элемента уведомления
│       │   │   │       └── Toast.svelte                                    # Всплывающее уведомление
│       │   │   ├── forms/                                                  # Форм-компоненты
│       │   │   │   ├── base/                                               # Базовые форм-компоненты
│       │   │   │   │   ├── index.ts                                        # Экспорт базовых форм-компонентов
│       │   │   │   │   ├── InputField.svelte                               # Поле ввода формы
│       │   │   │   │   ├── InputGroup.svelte                               # Группа полей ввода
│       │   │   │   │   ├── SearchBar.svelte                                # Панель поиска
│       │   │   │   │   ├── SearchBar.story.svelte                          # Стори для панели поиска
│       │   │   │   │   ├── SearchInput.svelte                              # Поле ввода поиска
│       │   │   │   │   └── SearchInput.story.svelte                        # Стори для поля ввода поиска
│       │   │   │   ├── composite/                                          # Композитные форм-компоненты
│       │   │   │   │   ├── FileUpload.svelte                               # Загрузка файла
│       │   │   │   │   ├── FileUpload.story.svelte                         # Стори для загрузки файла
│       │   │   │   │   ├── FormSection.svelte                              # Секция формы
│       │   │   │   │   ├── FormSection.story.svelte                        # Стори для секции формы
│       │   │   │   │   ├── index.ts                                        # Экспорт композитных форм-компонентов
│       │   │   │   │   ├── RadioGroup.svelte                               # Группа радио-кнопок
│       │   │   │   │   ├── RadioGroup.story.svelte                         # Стори для группы радио-кнопок
│       │   │   │   │   ├── TagInput.svelte                                 # Ввод тегов
│       │   │   │   │   └── TagInput.story.svelte                           # Стори для ввода тегов
│       │   │   │   └── validation/                                         # Компоненты валидации
│       │   │   │       ├── FormFieldGroup.svelte                           # Группа полей формы
│       │   │   │       ├── FormFieldGroup.story.svelte                     # Стори для группы полей формы
│       │   │   │       └── index.ts                                        # Экспорт компонентов валидации
│       │   │   ├── graph/                                                  # Графовые компоненты
│       │   │   │   ├── GraphEdge.svelte                                    # Ребро графа
│       │   │   │   ├── GraphNode.svelte                                    # Узел графа
│       │   │   │   └── index.ts                                            # Экспорт графовых компонентов
│       │   │   ├── input/                                                  # Компоненты ввода
│       │   │   │   ├── base/                                               # Базовые компоненты ввода
│       │   │   │   │   ├── index.ts                                        # Экспорт базовых компонентов ввода
│       │   │   │   │   └── SearchInput.svelte                              # Поле ввода поиска
│       │   │   │   ├── helpers/                                            # Вспомогательные компоненты ввода
│       │   │   │   │   ├── FieldHighlighter.svelte                         # Выделитель полей
│       │   │   │   │   └── index.ts                                        # Экспорт вспомогательных компонентов ввода
│       │   │   │   ├── pickers/                                            # Компоненты выбора
│       │   │   │   │   ├── ColorPicker.svelte                              # Выбор цвета
│       │   │   │   │   ├── DatePicker.svelte                               # Выбор даты
│       │   │   │   │   └── index.ts                                        # Экспорт компонентов выбора
│       │   │   │   └── upload/                                             # Компоненты загрузки
│       │   │   │       ├── FileInput.svelte                                # Поле загрузки файла
│       │   │   │       └── index.ts                                        # Экспорт компонентов загрузки
│       │   │   ├── layout/                                                 # Компоненты макета
│       │   │   │   ├── AspectRatio.svelte                                  # Соотношение сторон
│       │   │   │   ├── AspectRatio.story.svelte                            # Стори для соотношения сторон
│       │   │   │   ├── Container.svelte                                    # Контейнер
│       │   │   │   ├── Container.story.svelte                              # Стори для контейнера
│       │   │   │   ├── index.ts                                            # Экспорт компонентов макета
│       │   │   │   ├── Stack.svelte                                        # Стек
│       │   │   │   └── Stack.story.svelte                                  # Стори для стека
│       │   │   ├── navigation/                                             # Навигационные компоненты
│       │   │   │   ├── Breadcrumb.svelte                                   # Цепочка навигации
│       │   │   │   ├── Breadcrumb.story.svelte                             # Стори для цепочки навигации
│       │   │   │   ├── BreadcrumbLink.svelte                               # Ссылка в цепочке навигации
│       │   │   │   ├── index.ts                                            # Экспорт навигационных компонентов
│       │   │   │   └── PageButton.svelte                                   # Кнопка страницы
│       │   │   ├── search/                                                 # Компоненты поиска
│       │   │   │   ├── index.ts                                            # Экспорт компонентов поиска
│       │   │   │   └── SearchBar.svelte                                    # Панель поиска
│       │   │   ├── tools/                                                  # Инструменты
│       │   │   │   ├── ButtonGroup.svelte                                  # Группа кнопок
│       │   │   │   ├── DesignTokens.svelte                                 # Токены дизайна
│       │   │   │   ├── FilterPanel.svelte                                  # Панель фильтров
│       │   │   │   ├── index.ts                                            # Экспорт инструментов
│       │   │   │   ├── OperationsHistory.svelte                            # История операций
│       │   │   │   ├── Toolbar.svelte                                      # Панель инструментов
│       │   │   │   ├── VariablesEditor.svelte                              # Редактор переменных
│       │   │   │   └── general/                                            # Общие инструменты
│       │   │   │       ├── index.ts                                        # Экспорт общих инструментов
│       │   │   │       ├── QuickAccessButtons.svelte                       # Кнопки быстрого доступа
│       │   │   │       └── Toolbar.svelte                                  # Панель инструментов
│       │   │   ├── tooltips/                                               # Подсказки
│       │   │   │   ├── index.ts                                            # Экспорт подсказок
│       │   │   │   ├── Tooltip.svelte                                      # Всплывающая подсказка
│       │   │   │   └── Tooltip.story.svelte                                # Стори для подсказки
│       │   │   └── visualization/                                          # Компоненты визуализации
│       │   │       ├── GraphNodeCard.svelte                                # Карточка узла графа
│       │   │       ├── GraphvizCluster.svelte                              # Кластер для Graphviz
│       │   │       ├── GraphvizClusterWithTitle.svelte                     # Кластер с заголовком для Graphviz
│       │   │       ├── GraphvizDirectedEdge.svelte                         # Направленное ребро для Graphviz
│       │   │       ├── GraphvizEdge.svelte                                 # Ребро для Graphviz
│       │   │       ├── GraphvizNode.svelte                                 # Узел для Graphviz
│       │   │       ├── GraphvizNodeConnection.svelte                       # Соединение узлов для Graphviz
│       │   │       ├── GraphvizNodeWithLabel.svelte                        # Узел с меткой для Graphviz
│       │   │       ├── GraphvizSubgraph.svelte                             # Подграф для Graphviz
│       │   │       ├── GraphvizUndirectedEdge.svelte                       # Ненаправленное ребро для Graphviz
│       │   │       ├── index.ts                                            # Экспорт компонентов визуализации
│       │   │       ├── LegendItem.svelte                                   # Элемент легенды
│       │   │       ├── OntologyEdgeComponent.svelte                        # Компонент ребра для онтологий
│       │   │       └── OntologyNodeComponent.svelte                        # Компонент узла для онтологий
│       │   └── organisms/                                                  # Сложные структуры (навигация, таблицы и т.д.)
│       │       ├── canvas/                                                 # Canvas-организмы
│       │       │   ├── CanvasBoard.svelte                                  # Доска для рисования
│       │       │   ├── EraserTool.svelte                                   # Инструмент ластик
│       │       │   ├── index.ts                                            # Экспорт Canvas-организмов
│       │       │   └── PenTool.svelte                                      # Инструмент перо
│       │       ├── code/                                                   # Код-организмы
│       │       │   ├── CodeSection.svelte                                  # Секция кода
│       │       │   ├── DocumentationBlock.svelte                           # Блок документации
│       │       │   └── index.ts                                            # Экспорт код-организмов
│       │       ├── controls/                                               # Контрольные организмы
│       │       │   ├── Combobox.svelte                                     # Комбинированный список
│       │       │   ├── Combobox.story.svelte                               # Стори для Combobox
│       │       │   ├── ControlPanel.svelte                                 # Панель управления
│       │       │   ├── ExportPanel.svelte                                  # Панель экспорта
│       │       │   ├── FilterBar.svelte                                    # Панель фильтра
│       │       │   ├── FilterBar.story.svelte                              # Стори для FilterBar
│       │       │   ├── index.ts                                            # Экспорт контрольных организмов
│       │       │   ├── accordion/                                          # Аккордеонные контрольные элементы
│       │       │   │   ├── Accordion.svelte                                # Аккордеон
│       │       │   │   ├── AccordionHeader.svelte                          # Заголовок аккордеона
│       │       │   │   ├── AccordionItem.svelte                            # Элемент аккордеона
│       │       │   │   ├── AccordionPanel.svelte                           # Панель аккордеона
│       │       │   │   └── index.ts                                        # Экспорт аккордеонных контрольных элементов
│       │       │   ├── tables/                                             # Табличные контрольные элементы
│       │       │   │   ├── ColumnManager.svelte                            # Менеджер колонок
│       │       │   │   ├── ColumnManager.story.svelte                      # Стори для менеджера колонок
│       │       │   │   ├── DataTable.svelte                                # Таблица данных
│       │       │   │   ├── index.ts                                        # Экспорт табличных контрольных элементов
│       │       │   │   ├── Table.svelte                                    # Таблица
│       │       │   │   ├── TableBody.svelte                                # Тело таблицы
│       │       │   │   ├── TableCell.svelte                                # Ячейка таблицы
│       │       │   │   ├── TableHeader.svelte                              # Заголовок таблицы
│       │       │   │   └── TableRow.svelte                                 # Строка таблицы
│       │       │   ├── tabs/                                               # Табличные элементы вкладок
│       │       │   │   ├── index.ts                                        # Экспорт табличных элементов вкладок
│       │       │   │   ├── Tab.svelte                                      # Вкладка
│       │       │   │   ├── TabList.svelte                                  # Список вкладок
│       │       │   │   ├── TabPanel.svelte                                 # Панель вкладки
│       │       │   │   ├── TabPanels.svelte                                # Контейнер панелей вкладок
│       │       │   │   └── Tabs.svelte                                     # Компонент системы вкладок
│       │       │   └── trees/                                              # Деревья контрольных элементов
│       │       │       ├── AdvancedVirtualTree.svelte                      # Продвинутое виртуальное дерево
│       │       │       ├── FlatTree.svelte                                 # Плоское дерево
│       │       │       ├── FolderTree.svelte                               # Дерево папок
│       │       │       ├── FolderTree.story.svelte                         # Стори для дерева папок
│       │       │       ├── index.ts                                        # Экспорт деревьев контрольных элементов
│       │       │       ├── TreeViewer.svelte                               # Просмотр дерева
│       │       │       └── VirtualTree.svelte                              # Виртуальное дерево
│       │       ├── dialogs/                                                # Диалоговые организмы
│       │       │   ├── ConfirmDialog.svelte                                # Диалог подтверждения
│       │       │   ├── index.ts                                            # Экспорт диалоговых организмов
│       │       │   └── Modal.svelte                                        # Модальное окно
│       │       ├── layout/                                                 # Организмы макета
│       │       │   ├── index.ts                                            # Экспорт организмов макета
│       │       │   ├── agile/                                              # Agile-организмы
│       │       │   │   ├── Backlog.svelte                                  # Бэклог
│       │       │   │   ├── Backlog.story.svelte                            # Стори для бэклога
│       │       │   │   ├── BurnDownChart.svelte                            # Диаграмма сгорания
│       │       │   │   ├── BurnDownChart.story.svelte                      # Стори для диаграммы сгорания
│       │       │   │   └── index.ts                                        # Экспорт Agile-организмов
│       │       │   ├── chat/                                               # Чат-организмы
│       │       │   │   ├── ChatItem.svelte                                 # Элемент чата
│       │       │   │   ├── ChatList.svelte                                 # Список чатов
│       │       │   │   ├── ChatWindow.svelte                               # Окно чата
│       │       │   │   ├── index.ts                                        # Экспорт чат-организмов
│       │       │   │   ├── MessageItem.svelte                              # Элемент сообщения
│       │       │   │   └── MessageList.svelte                              # Список сообщений
│       │       │   └── kanban/                                             # Kanban-организмы
│       │       │       ├── index.ts                                        # Экспорт Kanban-организмов
│       │       │       ├── KanbanBoard.svelte                              # Доска Kanban
│       │       │       ├── KanbanBoard.story.svelte                        # Стори для доски Kanban
│       │       │       ├── KanbanColumn.svelte                             # Колонка Kanban
│       │       │       ├── KanbanColumn.story.svelte                       # Стори для колонки Kanban
│       │       │       └── molecules/                                      # Молекулы Kanban
│       │       │           ├── index.ts                                    # Экспорт молекул Kanban
│       │       │           ├── KanbanCard.svelte                           # Карточка Kanban
│       │       │           └── KanbanCard.story.svelte                     # Стори для карточки Kanban
│       │       └── navigation/                                             # Навигационные организмы
│       │           ├── index.ts                                            # Экспорт навигационных организмов
│       │           ├── breadcrumbs/                                        # Организмы хлебных крошек
│       │           │   ├── Breadcrumbs.svelte                              # Хлебные крошки
│       │           │   └── index.ts                                        # Экспорт организмов хлебных крошек
│       │           └── pagination/                                         # Организмы пагинации
│       │               ├── index.ts                                        # Экспорт организмов пагинации
│       │               └── Pagination.svelte                               # Компонент навигации по страницам
│       ├── playground/                                                     # Интерактивный playground для компонентов
│       │   ├── components/                                                 # Компоненты интерфейса для playground
│       │   │   ├── Canvas.svelte                                           # Canvas для playground
│       │   │   ├── CodeViewer.svelte                                       # Просмотр кода в playground
│       │   │   ├── ControlPanel.svelte                                     # Панель управления в playground
│       │   │   ├── index.ts                                                # Экспорт компонентов интерфейса для playground
│       │   │   ├── MarkdownRenderer.svelte                                 # Рендер Markdown в playground
│       │   │   ├── Navigator.svelte                                        # Навигатор в playground
│       │   │   ├── Story.svelte                                            # Компонент для отображения стори
│       │   │   ├── StoryRoot.svelte                                        # Корневой компонент стори
│       │   │   ├── Toolbar.svelte                                          # Панель инструментов в playground
│       │   │   └── tree/                                                   # Компоненты дерева в playground
│       │   ├── stores/                                                     # Хранилища состояния для playground
│       │   │   ├── index.ts                                                # Экспорт хранилищ состояния для playground
│       │   │   └── playground.svelte.ts                                    # Хранилище состояния playground
│       │   ├── types/                                                      # Типы данных для playground
│       │   │   └── index.ts                                                # Экспорт типов данных для playground
│       │   └── utils/                                                      # Вспомогательные утилиты для playground
│       │       ├── code-generator.ts                                       # Генератор кода для playground
│       │       ├── index.ts                                                # Экспорт утилит для playground
│       │       ├── keyboard.ts                                             # Утилиты клавиатуры для playground
│       │       └── syntax-highlighter.ts                                   # Подсветчик синтаксиса для playground
│       ├── styles/                                                         # Стили проекта
│       │   ├── design-tokens.css                                           # Дизайн-токены
│       │   ├── index.ts                                                    # Экспорт стилей проекта
│       │   └── variables.css                                               # CSS переменные
│       ├── types/                                                          # Определения типов TypeScript
│       │   ├── components.ts                                               # Типы для компонентов
│       │   ├── design-tokens.ts                                            # Типы для дизайн-токенов
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
├── .gitignore                                                              # Файл исключений для Git
├── .npmrc                                                                  # Конфигурационный файл для npm/yarn
├── .prettierignore                                                         # Файлы и директории, игнорируемые Prettier
├── .prettierrc                                                             # Конфигурация Prettier
├── .yarnrc.yml                                                             # Конфигурация Yarn
├── all_atoms.txt                                                           # Список всех атомарных компонентов
├── analyze_errors.py                                                       # Скрипт для анализа ошибок
├── component_list.txt                                                      # Список всех компонентов
├── CONTRIBUTING.md                                                         # Руководство для контрибьюторов
├── dependencies-diagram.mmd                                                # Диаграмма зависимостей (Mermaid)
├── full-dependencies-diagram.mmd                                           # Полная диаграмма зависимостей (Mermaid)
├── index.md                                                                # Основной индексный файл (этот файл)
├── LICENSE                                                                 # Файл лицензии проекта
├── missing_stories.txt                                                     # Список компонентов без стори
├── package.json                                                            # Основной файл зависимостей и скриптов
├── package.tgz                                                             # Собранный пакет
├── QWEN.md                                                                 # Контекст для Qwen AI
├── README.md                                                               # Основная документация проекта
├── simple-dependencies-diagram.mmd                                         # Простая диаграмма зависимостей (Mermaid)
├── stories_count.txt                                                       # Количество стори
├── story_list.txt                                                          # Список стори
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

#### `.git/`
- **Назначение**: Служебная директория Git
- **Содержимое**: Содержит метаданные репозитория, историю коммитов, конфигурацию и другие служебные данные Git

#### `.svelte-kit/`
- **Назначение**: Временные файлы и артефакты, создаваемые SvelteKit при сборке и разработке
- **Содержимое**: Генерируемые файлы, типы роутинга, вспомогательные скрипты для выполнения и отладки приложения

#### `.yarn/`
- **Назначение**: Директория для хранения зависимостей и кэша Yarn
- **Содержимое**: Кэш пакетов, плагинов и внутренние файлы, используемые Yarn для управления зависимостями

#### `dist/`
- **Назначение**: Директория с собранными файлами библиотеки
- **Содержимое**: Скомпилированные и минимизированные файлы, готовые к использованию в других проектах

#### `docs/`
- **Назначение**: Документация проекта
- **Содержимое**:
  - `ad/`: Документация по архитектуре Atomic Design
  - `adr/`: Архитектурные решения (Architecture Decision Records)
  - `cookbooks/`: Руководства по работе с проектом

#### `node_modules/`
- **Назначение**: Директория с установленными зависимостями проекта
- **Содержимое**: Все зависимости, указанные в package.json, включая прямые и транзитивные зависимости

#### `src/lib/components`
- **Назначение**: Компоненты пользовательского интерфейса
- **Содержимое**:
  - `atoms/`: Атомарные компоненты - базовые строительные блоки интерфейса
  - `molecules/`: Молекулярные компоненты - комбинации атомов, работающие как единое целое
  - `organisms/`: Организменные компоненты - сложные структуры из атомов, молекул и других организмов

#### `src/lib/playground`
- **Назначение**: Интерактивный playground для компонентов
- **Содержимое**:
  - `components/`: Компоненты интерфейса для Playground
  - `stores/`: Файлы с Svelte-хранилищами для управления состоянием Playground
  - `types/`: TypeScript-типы, используемые в Playground
  - `utils/`: Функции, используемые в Playground

#### `src/lib/styles`
- **Назначение**: Стили проекта
- **Содержимое**: CSS-переменные, дизайн-токены и другие стили, используемые в проекте

#### `src/lib/types`
- **Назначение**: Определения типов TypeScript
- **Содержимое**:
  - `components.ts`: Типы для компонентов
  - `design-tokens.ts`: Типы для дизайн-токенов
  - `form.ts`: Типы для форм
  - `table.ts`: Типы для таблиц
  - `index.ts`: Объединяющий файл экспорта типов

#### `src/lib/utils`
- **Назначение**: Вспомогательные функции
- **Содержимое**:
  - `clipboard.ts`: Функции для работы с буфером обмена
  - `debounce.ts`: Утилита для дебаунсинга
  - `index.ts`: Объединяющий файл экспорта утилит

#### `src/routes`
- **Назначение**: Маршруты SvelteKit
- **Содержимое**:
  - `+page.svelte`: Главная страница приложения

### Основные файлы в корне проекта

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

#### `all_atoms.txt`, `component_list.txt`, `story_list.txt`, `missing_stories.txt`, `stories_count.txt`
- **Назначение**: Файлы с информацией о компонентах и стори
- **Содержимое**: Списки компонентов, стори и информации о них

#### `analyze_errors.py`
- **Назначение**: Скрипт для анализа ошибок
- **Содержимое**: Python-скрипт для анализа и обработки ошибок в проекте

#### `CONTRIBUTING.md`
- **Назначение**: Руководство для контрибьюторов
- **Содержимое**: Инструкции по внесению вклада в проект

#### `dependencies-diagram.mmd`, `full-dependencies-diagram.mmd`, `simple-dependencies-diagram.mmd`
- **Назначение**: Диаграммы зависимостей
- **Содержимое**: Mermaid-диаграммы, показывающие зависимости в проекте

#### `index.md`
- **Назначение**: Основной индексный файл (этот файл)
- **Содержимое**: Подробное описание структуры проекта

#### `LICENSE`
- **Назначение**: Лицензия проекта
- **Содержимое**: Текст лицензии MIT

#### `package.json`
- **Назначение**: Основной файл зависимостей и скриптов
- **Содержимое**: Определяет метаданные пакета, зависимости и команды для работы с проектом

#### `package.tgz`, `stylist-svelte-v0.1.0.tgz`
- **Назначение**: Архивы с собранным пакетом
- **Содержимое**: Готовые к публикации версии библиотеки

#### `QWEN.md`
- **Назначение**: Инструкциональный контекст для Qwen AI
- **Содержимое**: Документ с инструкциями для ИИ-ассистента

#### `README.md`
- **Назначение**: Основная документация проекта
- **Содержимое**: Информация о проекте, установке, использовании и вкладе

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