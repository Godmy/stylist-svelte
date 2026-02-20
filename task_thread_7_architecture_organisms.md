# Задание для потока 7: Организменные компоненты - Architecture

## Обзор задачи
Вам нужно пройтись по всем компонентам в папке `stylist-svelte\src\lib\components\organisms\architecture` и привести каждый компонент к эталонному стандарту дизайн-системы.

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

### Папка: `stylist-svelte\src\lib\components\organisms\architecture\canvas`
- `shared-canvas/index.svelte`
- `shared-canvas/index.ts`
- `shared-canvas/index.story.svelte`

### Папка: `stylist-svelte\src\lib\components\organisms\architecture\card`
- `graph-node-card/index.svelte`
- `graph-node-card/index.ts`
- `graph-node-card/index.story.svelte`

### Папка: `stylist-svelte\src\lib\components\organisms\architecture\dashboards`
- `performance-dashboard/index.svelte`
- `performance-dashboard/index.ts`
- `performance-dashboard/index.story.svelte`
- `status-dashboard/index.svelte`
- `status-dashboard/index.ts`
- `status-dashboard/index.story.svelte`

### Папка: `stylist-svelte\src\lib\components\organisms\architecture\interaction\controls`
- `accessibility-toolbar/index.svelte`
- `accessibility-toolbar/index.ts`
- `accessibility-toolbar/index.story.svelte`

### Папка: `stylist-svelte\src\lib\components\organisms\architecture\interaction\controls\grids`
- `sortable-grid/index.svelte`
- `sortable-grid/index.ts`
- `sortable-grid/index.story.svelte`

### Папка: `stylist-svelte\src\lib\components\organisms\architecture\interaction\navigation`
- `pagination/index.svelte`
- `pagination/index.ts`
- `pagination/index.story.svelte`
- `sidebar/index.svelte`
- `sidebar/index.ts`
- `sidebar/index.story.svelte`

### Папка: `stylist-svelte\src\lib\components\organisms\architecture\media\canvas`
- `canvas-image-editor/index.svelte`
- `canvas-image-editor/index.ts`
- `canvas-image-editor/index.story.svelte`

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
- `time-grid/index.svelte`: обновлён index.story.svelte
- `canvas-chart/index.svelte`: обновлён index.story.svelte
- `line-chart/index.svelte`: обновлён index.story.svelte
- `heatmap/index.svelte`: обновлён index.story.svelte
- `shared-canvas/index.svelte`: обновлён index.story.svelte
- `graph-node-card/index.svelte`: обновлён index.story.svelte
- `dashboard-layout/index.svelte`: обновлён index.story.svelte
- `performance-dashboard/index.svelte`: обновлён index.story.svelte
- `status-dashboard/index.svelte`: обновлён index.story.svelte
- `accessibility-toolbar/index.svelte`: обновлён index.story.svelte
- `sortable-grid/index.svelte`: обновлён index.story.svelte
- `pagination/index.svelte`: обновлён index.story.svelte
- `sidebar/index.svelte`: обновлён index.story.svelte
- `canvas-image-editor/index.svelte`: обновлён index.story.svelte

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

## Отчет о проделанной работе и анализе компонентов

### Обновленные компоненты:
1. **calendar/time-grid** - компонент для отображения временных сеток календаря
2. **canvas/canvas-chart** - универсальный холстовый компонент для диаграмм
3. **canvas/charts/line-chart** - линейная диаграмма на основе canvas
4. **canvas/heatmap** - тепловая карта для визуализации данных
5. **canvas/shared-canvas** - совместный холст для коллаборативного рисования
6. **card/graph-node-card** - карточка для отображения узлов графа
7. **dashboards/dashboard-layout** - макет дашборда с заголовком и боковой панелью
8. **dashboards/performance-dashboard** - дашборд производительности
9. **dashboards/status-dashboard** - дашборд статуса системы
10. **interaction/controls/accessibility-toolbar** - панель инструментов доступности
11. **interaction/controls/grids/sortable-grid** - сортируемая сетка элементов
12. **interaction/navigation/pagination** - компонент навигации по страницам
13. **interaction/navigation/sidebar** - боковая панель навигации
14. **media/canvas/canvas-image-editor** - редактор изображений на основе canvas

### Найденные проблемы и рекомендации по нормализации:

#### 1. Недостающие файлы дизайн-системы:
- Большинство компонентов не имеют полной реализации дизайн-системы (props, styles, models, state)
- Требуется создание файлов `props/[component-name].ts`, `styles/[component-name].ts`, `models/[component-name].svelte.ts`, `state/[component-name].ts` для каждого компонента

#### 2. Проблемы с централизованным управлением состоянием:
- Многие компоненты используют локальное состояние вместо централизованной модели
- Требуется внедрение моделей состояния по аналогии с Button компонентом

#### 3. Несогласованность в типизации пропсов:
- Некоторые компоненты используют разные подходы к определению пропсов
- Требуется унификация с использованием файлов props/[component-name].ts

#### 4. Проблемы с наследованием:
- Некоторые компоненты повторяют код, который мог бы быть вынесен в общие классы
- Требуется анализ и нормализация общих классов и стилей

#### 5. Недостаточная семантика и доступность:
- Некоторые компоненты нуждаются в улучшении ARIA-атрибутов
- Требуется добавление семантических HTML-элементов

### Рекомендации по улучшению:

#### 1. Создание эталонных шаблонов:
- Разработать шаблоны для каждого типа компонента (organism, molecule, atom)
- Обеспечить единообразие в структуре файлов и подходах к реализации

#### 2. Улучшение системы контролов:
- Внедрить единые типы контролов (CONTROL_TYPES) во всех story-файлах
- Обеспечить согласованность в именовании и типах пропсов

#### 3. Стандартизация обработки событий:
- Унифицировать обработку пользовательских событий
- Обеспечить согласованность в сигнатурах callback-функций

#### 4. Улучшение темизации:
- Обеспечить полную поддержку темизации через ThemeProvider
- Использовать CSS-переменные для всех стилевых значений

#### 5. Документирование компонентов:
- Добавить JSDoc комментарии ко всем пропсам
- Обеспечить документирование сложных логик и алгоритмов

### План будущих работ:

#### Этап 1: Создание недостающих файлов дизайн-системы
- Для каждого компонента создать файлы props, styles, models, state
- Реализовать централизованное управление состоянием

#### Этап 2: Нормализация и декомпозиция
- Проанализировать компоненты на предмет возможной декомпозиции
- Вынести общие элементы в атомы и молекулы
- Обеспечить соблюдение принципов наследования

#### Этап 3: Улучшение доступности
- Добавить ARIA-атрибуты ко всем интерактивным элементам
- Проверить контрастность цветов
- Обеспечить клавиатурную навигацию

#### Этап 4: Тестирование и верификация
- Написать тесты для каждого компонента
- Проверить работу в разных браузерах
- Обеспечить соответствие WCAG

### Заключение:
Все story-файлы успешно обновлены и теперь соответствуют эталонному стандарту с использованием компонента Story и единообразными контролами. Однако для достижения полного соответствия золотому стандарту требуется дальнейшая работа по созданию недостающих файлов дизайн-системы, нормализации компонентов и улучшению их архитектуры.

## Результаты нормализации (выполнено)

### Созданные файлы стилей:
1. ✅ **dashboard-layout.ts** - создан новый файл стилевого менеджера для компонента dashboard-layout
2. ✅ **canvas-chart.ts** - создан новый файл стилевого менеджера для компонента canvas-chart

### Созданные файлы props:
1. ✅ **props/dashboard-layout.ts** - типизированные пропсы для DashboardLayout
2. ✅ **props/canvas-chart.ts** - типизированные пропсы для CanvasChart

### Созданные файлы models:
1. ✅ **models/dashboard-layout.svelte.ts** - модель состояния с createState функцией
2. ✅ **models/canvas-chart.svelte.ts** - модель состояния с createState функцией

### Созданные файлы state:
1. ✅ **state/dashboard-layout.ts** - пресеты и значения по умолчанию (DASHBOARD_LAYOUT_PRESET, COMPACT, SPACIOUS, FIXED_SIDEBAR)
2. ✅ **state/canvas-chart.ts** - пресеты и значения по умолчанию (CANVAS_CHART_PRESET, MINIMAL, BOLD, SMALL, LARGE)

### Обновлённые файлы index.ts:
1. ✅ **styles/index.ts** - добавлены экспорты DashboardLayoutStyleManager и CanvasChartStyleManager
2. ✅ **props/index.ts** - добавлены экспорты типов
3. ✅ **models/index.ts** - добавлены экспорты createDashboardLayoutState и createCanvasChartState
4. ✅ **state/index.ts** - добавлены экспорты пресетов

### Анализ на дублирование:
- **performance-dashboard.ts** и **status-dashboard.ts** - не имеют дублирования, каждый компонент имеет уникальные классы и стили
- **canvas-компоненты** (heatmap.ts, line-chart.ts, shared-canvas.ts, canvas-image-editor.ts) - не имеют дублирования, каждый имеет специфичную стилизацию

### Рекомендации по дальнейшей нормализации:
1. ✅ **Интеграция новых файлов в index.ts** - выполнено
2. ✅ **Создание props файлов** - выполнено
3. ✅ **Создание models файлов** - выполнено
4. ⏳ **Документирование** - добавлены JSDoc комментарии в props файлы

## Анализ декомпозиции компонентов

### Текущее состояние:
Все компоненты в папке `organisms/architecture` соответствуют принципам декомпозиции:

#### ✅ Корректная иерархия:
- **Организмы** используют только **атомы** (Button, Icon из lucide-svelte)
- **Молекулы** не используются напрямую организмами (это допустимо)
- **Атомы** не импортируют другие атомы

#### Проверенные компоненты:
1. **calendar/time-grid** - использует TimeSlot (атом), Button (атом), иконки (lucide)
2. **dashboards/dashboard-layout** - использует Button (атом), иконки (lucide)
3. **dashboards/performance-dashboard** - использует иконки (lucide)
4. **dashboards/status-dashboard** - использует иконки (lucide)
5. **interaction/navigation/sidebar** - использует иконки (lucide)
6. **interaction/navigation/pagination** - использует иконки (lucide)
7. **interaction/controls/accessibility-toolbar** - использует иконки (lucide)
8. **interaction/controls/grids/sortable-grid** - использует иконки (lucide)
9. **canvas/shared-canvas** - использует иконки (lucide)
10. **canvas/charts/line-chart** - использует иконки (lucide)
11. **canvas/heatmap** - использует иконки (lucide)

### Нарушений не обнаружено:
- ❌ Организмы не импортируют другие организмы
- ❌ Атомы не импортируют другие атомы
- ❌ Молекулы не импортируют другие молекулы

### Рекомендации по будущей декомпозиции:

#### 1. Выделение молекул из организмов (опционально):
Некоторые организмы используют одни и те же наборы атомов, которые можно выделить в молекулы:

**SidebarNavItem** (молекула) - может быть выделена из:
- `interaction/navigation/sidebar/index.svelte`
- Повторяющаяся логика отображения элемента навигации с иконкой, бейджем и меткой

**DashboardMetricCard** (молекула) - может быть выделена из:
- `dashboards/performance-dashboard/index.svelte`
- Карточка метрики с заголовком, значением и трендом

**StatusItem** (молекула) - может быть выделена из:
- `dashboards/status-dashboard/index.svelte`
- Элемент статуса с иконкой, заголовком и описанием

**TimeGridHeader** (молекула) - может быть выделена из:
- `calendar/time-grid/index.svelte`
- Заголовок временной сетки с кнопками навигации

#### 2. Приоритеты декомпозиции:
- **Низкий приоритет** - текущая структура работает корректно
- **Средний приоритет** - выделение молекул улучшит переиспользование
- **Высокий приоритет** - если компоненты станут сложнее или потребуется больше вариаций

### Заключение по декомпозиции:
На данный момент **декомпозиция не требуется**. Все компоненты следуют правильным принципам архитектуры. Выделение молекул может быть выполнено в будущем для улучшения переиспользования кода, но это не является критичной необходимостью.

## Выполненная декомпозиция (замена локальных иконок на атомы)

### Созданные атомы:
1. ✅ **IconMenu** (`information/media/icon-menu`) - атом иконки меню (гамбургер)
2. ✅ **IconX** (`information/media/icon-x`) - атом иконки закрытия (крестик)

### Обновлённые компоненты организмов:

#### 1. **interaction/navigation/sidebar**
**Было:**
```svelte
import { Menu, X } from 'lucide-svelte';
<X class="h-6 w-6" />
<Menu class="h-6 w-6" />
```

**Стало:**
```svelte
import { IconMenu, IconX } from '$stylist/components/atoms';
<IconX size="lg" />
<IconMenu size="lg" />
```

#### 2. **dashboards/dashboard-layout**
**Было:**
```svelte
import { Menu, X } from 'lucide-svelte';
<X class="h-4 w-4" />
<Menu class="h-4 w-4" />
```

**Стало:**
```svelte
import { IconMenu, IconX } from '$stylist/components/atoms';
<IconX size="sm" />
<IconMenu size="sm" />
```

#### 3. **interaction/navigation/pagination**
**Было:**
```svelte
import { ChevronLeft, ChevronRight } from 'lucide-svelte';
<ChevronLeft class="h-4 w-4" />
<ChevronRight class="h-4 w-4" />
```

**Стало:**
```svelte
import { IconChevron } from '$stylist/components/atoms';
<IconChevron direction="left" size="sm" />
<IconChevron direction="right" size="sm" />
```

### Обновлённые index.ts файлы:
- ✅ `atoms/information/media/index.ts` - добавлены экспорты IconMenu и IconX

### Преимущества декомпозиции:
1. **Единый источник истины** - иконки определены в одном месте
2. **Согласованность стилей** - все иконки используют одинаковые классы через IconStyleManager
3. **Упрощённая темизация** - иконки автоматически наследуют цвета темы
4. **Снижение зависимостей** - уменьшена зависимость от lucide-svelte в компонентах
5. **Переиспользование** - атомы иконок могут использоваться в любых компонентах

### Оставшиеся компоненты для будущей декомпозиции:
Компоненты, которые всё ещё используют lucide-svelte напрямую и могут быть обновлены:
- `dashboards/status-dashboard` - использует CheckCircle, AlertCircle, XCircle, Clock, MoreHorizontal (частично заменено - CheckCircle и AlertCircle уже созданы)
- `interaction/controls/accessibility-toolbar` - использует Accessibility, Contrast, Volume2, Eye, Minus, Plus, Type, Grid
- `interaction/controls/grids/sortable-grid` - использует GripVertical
- `canvas/shared-canvas` - использует MousePointer2, Square, Circle, Type, Trash2, Download, Redo, Undo, Palette

**Рекомендация:** Создать соответствующие атомы для этих иконок по мере необходимости.

## Выполненная декомпозиция (итоговая версия)

### Созданные атомы (15):
1. ✅ **IconMenu** - иконка меню (гамбургер)
2. ✅ **IconX** - иконка закрытия (крестик)
3. ✅ **IconClock** - иконка часов
4. ✅ **IconMapPin** - иконка метки на карте
5. ✅ **IconUser** - иконка пользователя
6. ✅ **IconCheckCircle** - иконка галочки в круге
7. ✅ **IconAlertCircle** - иконка предупреждения в круге
8. ✅ **IconChevron** - иконка шеврона (уже существовала)
9. ✅ **IconTrendingUp** - иконка тренда вверх
10. ✅ **IconTrendingDown** - иконка тренда вниз
11. ✅ **IconActivity** - иконка активности
12. ✅ **IconArrowUp** - стрелка вверх
13. ✅ **IconArrowDown** - стрелка вниз
14. ✅ **IconGrid3X3** - иконка сетки 3x3
15. ✅ **IconInfo** - иконка информации

### Обновлённые компоненты организмов (7):
1. ✅ **sidebar** - заменены Menu, X на IconMenu, IconX
2. ✅ **dashboard-layout** - заменены Menu, X на IconMenu, IconX
3. ✅ **pagination** - заменены ChevronLeft, ChevronRight на IconChevron
4. ✅ **time-grid** - заменены ChevronLeft, ChevronRight, MapPin на IconChevron, IconMapPin
5. ✅ **performance-dashboard** - заменены Activity, TrendingUp, TrendingDown, ArrowUp, ArrowDown на соответствующие атомы
6. ✅ **heatmap** - заменены Grid3X3, Info на IconGrid3X3, IconInfo
7. ✅ **line-chart** - заменены TrendingUp, Info на IconTrendingUp, IconInfo

### Обновлённые index.ts файлы:
- ✅ `atoms/information/media/index.ts` - добавлены все новые экспорты иконок (15 атомов)

### Преимущества выполненной декомпозиции:
1. **Единый источник истины** - все иконки определены в атомах дизайн-системы
2. **Согласованность стилей** - все иконки используют IconStyleManager для классов
3. **Упрощённая темизация** - иконки автоматически наследуют цвета темы через CSS-переменные
4. **Снижение зависимостей** - значительно уменьшена зависимость от lucide-svelte в компонентах
5. **Переиспользование** - атомы иконок могут использоваться в любых компонентах
6. **Типизация** - все атомы имеют строгую типизацию props
7. **Доступность** - атомы поддерживают ARIA-атрибуты через SVGAttributes
8. **Размеры** - все атомы поддерживают единую систему размеров (xs, sm, md, lg, xl)