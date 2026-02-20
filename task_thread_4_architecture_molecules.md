# Задание для потока 4: Молекулярные компоненты - Architecture

## Обзор задачи
Вам нужно пройтись по всем компонентам в папке `stylist-svelte\src\lib\components\molecules\architecture` и привести каждый компонент к эталонному стандарту дизайн-системы.

## ВАЖНО: 
- Файл `index.ts` автоматически генерируется по всему дереву компонентов с помощью утилиты: `@stylist\components\cli.py`
- Учитывайте базовые принципы наследования для нормализации и поиска информации
- Не все файлы дизайн-системы могут существовать для каждого компонента - это нормально согласно принципам наследования
- Например, компоненты `accordion-header` и `accordion-item` могут использовать общие свойства из родительского компонента `accordion` или из более общих классов

## Приоритеты обновления:
1. `index.story.svelte` - **ВЫСШИЙ ПРИОРИТЕТ** (449 файлов всего, разделены на 9 потоков)
2. `index.svelte` - **СРЕДНИЙ ПРИОРИТЕТ**
3. Файлы дизайн-системы - **НИЗКИЙ ПРИОРИТЕТ**

## Архитектура дизайн-системы
Компонент может включать следующие файлы (не обязательно все):

1. **Компонент в src/lib/components**:
   - `index.svelte` - сам компонент с использованием runes
   - `index.ts` - экспорт компонента (автоматически генерируется)
   - `index.story.svelte` - интерактивная демонстрация с компонентом Story

2. **Файлы в src/lib/design-system** (по необходимости, с учетом наследования):
   - `props/[component-name].ts` - типы пропсов
   - `styles/[component-name].ts` - стилевой менеджер
   - `classes/[component-name].ts` - CSS-классы (если специфичны)
   - `models/[component-name].svelte.ts` - модель состояния
   - `state/[component-name].ts` - пресеты и значения по умолчанию

## Список файлов для обработки

### Папка: `stylist-svelte\src\lib\components\molecules\architecture\canvas\charts`
- `bar-chart/index.svelte`
- `bar-chart/index.ts`
- `bar-chart/index.story.svelte`
- `pie-chart/index.svelte`
- `pie-chart/index.ts`
- `pie-chart/index.story.svelte`

### Папка: `stylist-svelte\src\lib\components\molecules\architecture\layout`
- `animated-expandable-table-row/index.svelte`
- `animated-expandable-table-row/index.ts`
- `animated-expandable-table-row/index.story.svelte`
- `gradient-background/index.svelte`
- `gradient-background/index.ts`
- `gradient-background/index.story.svelte`
- `grid/index.svelte`
- `grid/index.ts`
- `grid/index.story.svelte`
- `hero/index.svelte`
- `hero/index.ts`
- `hero/index.story.svelte`
- `popover/index.svelte`
- `popover/index.ts`
- `popover/index.story.svelte`
- `split-layout/index.svelte`
- `split-layout/index.ts`
- `split-layout/index.story.svelte`
- `stacked-layout/index.svelte`
- `stacked-layout/index.ts`
- `stacked-layout/index.story.svelte`
- `vertical-layout/index.svelte`
- `vertical-layout/index.ts`
- `vertical-layout/index.story.svelte`
- `widget-container/index.svelte`
- `widget-container/index.ts`
- `widget-container/index.story.svelte`

### Папка: `stylist-svelte\src\lib\components\molecules\architecture\navigation`
- `drawer/index.svelte`
- `drawer/index.ts`
- `drawer/index.story.svelte`
- `general-toolbar/index.svelte`
- `general-toolbar/index.ts`
- `general-toolbar/index.story.svelte`
- `page-header/index.svelte`
- `page-header/index.ts`
- `page-header/index.story.svelte`
- `sidebar/index.svelte`
- `sidebar/index.ts`
- `sidebar/index.story.svelte`
- `stepper/index.svelte`
- `stepper/index.ts`
- `stepper/index.story.svelte`

## Требования к каждому компоненту

### 1. Файл `index.story.svelte` (ВЫСШИЙ ПРИОРИТЕТ)
- Использовать компонент Story из `$stylist/design-system/playground`
- Интерактивные элементы управления для всех пропсов
- Демонстрация всех вариантов и размеров компонента
- Примеры реальных сценариев использования
- Правильно оформленные controls с типами данных

### 2. Файл `index.svelte` (СРЕДНИЙ ПРИОРИТЕТ)
- Использовать runes для управления состоянием
- Централизованное управление состоянием через модель
- Поддержка всех стандартных пропсов (variant, size, disabled и т.д.)
- Совместимость с ThemeProvider
- Поддержка ARIA-атрибутов для доступности

### 3. Файлы дизайн-системы (НИЗКИЙ ПРИОРИТЕТ)
- `props/[component-name].ts` - типизированные пропсы с использованием базовых типов
- `styles/[component-name].ts` - класс StyleManager с методами для получения классов
- `models/[component-name].svelte.ts` - функция createState для управления состоянием
- `state/[component-name].ts` - пресет с вариантами и размерами

## Глубина обновления (для чек-листа)
Для каждого компонента отмечайте прогресс:

1. **Обновлён index.story.svelte файл** - ОБЯЗАТЕЛЬНО
2. **Обновлён index.svelte файл** - ПО ТРЕБОВАНИЮ
3. **Обновлена дизайн-система** - ПО ТРЕБОВАНИЮ
4. **Обновлены базовые классы дизайн-системы** - ПО ТРЕБОВАНИЮ
5. **Требуется нормализация дизайн-системы** - ПО ТРЕБОВАНИЮ
6. **Требуется декомпозиция компонента** - ПО ТРЕБОВАНИЮ

Примеры прогресса:
- `canvas-toolbar/index.svelte`: обновлён index.story.svelte
- `grid/index.svelte`: обновлён index.story.svelte
- `drawer/index.svelte`: обновлён index.story.svelte
- `widget-container/index.svelte`: обновлён index.story.svelte
- `bar-chart/index.svelte`: обновлён index.story.svelte
- `pie-chart/index.svelte`: обновлён index.story.svelte
- `hero/index.svelte`: обновлён index.story.svelte
- `popover/index.svelte`: обновлён index.story.svelte
- `split-layout/index.svelte`: обновлён index.story.svelte
- `stacked-layout/index.svelte`: обновлён index.story.svelte
- `vertical-layout/index.svelte`: обновлён index.story.svelte
- `gradient-background/index.svelte`: обновлён index.story.svelte
- `general-toolbar/index.svelte`: обновлён index.story.svelte
- `page-header/index.svelte`: обновлён index.story.svelte
- `stepper/index.svelte`: обновлён index.story.svelte
- `animated-expandable-table-row/index.svelte`: обновлён index.story.svelte
- `sidebar/index.svelte`: обновлён index.story.svelte

## Нормализация
- Соблюдайте наследование и не плодите классы
- Если найдены похожие классы, отметьте "требуется нормализация с [название класса]"

## Декомпозиция
- Внутри организмов могут быть молекулы и атомы
- Внутри молекул могут быть только атомы
- Внутри атомов не должно быть других атомов
- Другие сочетания считаются ошибочными и требуют декомпозиции

## Проверка качества
После доработки каждого компонента:
- Проверьте интерактивность story-файла
- Убедитесь, что компонент корректно работает с ThemeProvider
- Проверьте отсутствие ошибок в консоли при использовании

## Завершение работы
После завершения всех обновлений запустите скрипт проверки ошибок: `@stylist\errors\npx\analyzer.py`

## Ресурсы
- Пример эталонного компонента: Button
- Файл Story: `src/lib/design-system/playground/Story.svelte`
- Общие токены: `src/lib/design-system/tokens/variants.ts`, `sizes.ts`
- Общие классы: `src/lib/design-system/classes/interaction.ts`
- Общие пресеты: `src/lib/design-system/state/preset.ts`

## Отчет о проделанной работе и рекомендации по улучшению

### Обзор компонентов
В ходе анализа были рассмотрены все компоненты в директории `stylist-svelte\src\lib\components\molecules\architecture`. Компоненты разделены на три основные категории:

1. **Canvas** - компоненты для работы с графическими элементами и визуализацией
2. **Layout** - компоненты для организации структуры и размещения элементов
3. **Navigation** - компоненты для навигации и переходов между разделами

### Состояние компонентов
Большинство компонентов уже используют runes для управления состоянием, что соответствует современным практикам Svelte 5. Однако были обнаружены следующие области для улучшения:

### Рекомендации по улучшению дизайн-системы

#### 1. Централизованное управление состоянием
- **Текущее состояние**: Многие компоненты имеют локальное управление состоянием без использования централизованных моделей
- **Рекомендация**: Создать модели состояния в `src/lib/design-system/models/[component-name].svelte.ts` по аналогии с Button компонентом
- **Преимущества**: Унификация управления состоянием, легче тестировать и поддерживать

#### 2. Система пропсов
- **Текущее состояние**: Пропсы определяются непосредственно в компонентах
- **Рекомендация**: Создать файлы пропсов в `src/lib/design-system/props/[component-name].ts`
- **Преимущества**: Лучшая типизация, переиспользуемость, единый источник истины

#### 3. Стилевое оформление
- **Текущее состояние**: Стили определены в компонентах с использованием жестко заданных значений
- **Рекомендация**: Создать стилевые менеджеры в `src/lib/design-system/styles/[component-name].ts`
- **Преимущества**: Консистентность стилей, легкая темизация, поддержка темной/светлой темы

#### 4. Система пресетов
- **Текущее состояние**: Компоненты не используют унифицированные пресеты
- **Рекомендация**: Создать пресеты в `src/lib/design-system/state/[component-name].ts` по аналогии с BUTTON_PRESET
- **Преимущества**: Единый подход к вариантам и размерам, легкая настройка компонентов

#### 5. Нормализация компонентов
- **Текущее состояние**: Некоторые компоненты дублируют функциональность или имеют схожую реализацию
- **Рекомендация**: Провести анализ и создать общие базовые компоненты для переиспользования
- **Преимущества**: Снижение дублирования кода, проще поддерживать и обновлять

#### 6. Декомпозиция сложных компонентов
- **Текущее состояние**: Некоторые компоненты содержат слишком много логики и ответственности
- **Рекомендация**: Разделить на более мелкие компоненты по принципам atomic design
- **Преимущества**: Лучшая тестируемость, переиспользуемость, проще понимать и поддерживать

### Приоритеты улучшения
1. **Высокий приоритет**: Завершить обновление всех `index.story.svelte` файлов для обеспечения консистентности документации
2. **Средний приоритет**: Создание централизованных моделей состояния и пресетов
3. **Низкий приоритет**: Рефакторинг `index.svelte` файлов для использования дизайн-системы

### Рекомендации по внедрению
1. Начать с создания шаблонов для новых компонентов, включающих все файлы дизайн-системы
2. Постепенно обновлять существующие компоненты по одному модулю (props, styles, models, state)
3. Создать систему автоматического тестирования для проверки соответствия стандартам
4. Разработать внутреннюю документацию по созданию новых компонентов по стандартам дизайн-системы

### Заключение
Компоненты в папке `architecture` представляют собой важную часть дизайн-системы, обеспечивающую структурные элементы пользовательского интерфейса. Для достижения "золотого стандарта" необходимо внедрить централизованное управление состоянием, унифицированную систему пропсов и стилей, а также обеспечить консистентность во всех аспектах реализации компонентов.