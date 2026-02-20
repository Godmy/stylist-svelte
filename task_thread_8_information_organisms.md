# Задание для потока 8: Организменные компоненты - Information

## Обзор задачи
Вам нужно пройтись по всем компонентам в папке `stylist-svelte\src\lib\components\organisms\information` и привести каждый компонент к эталонному стандарту дизайн-системы.

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

### Папка: `stylist-svelte\src\lib\components\organisms\information\calendar`
- `calendar-view/index.svelte`
- `calendar-view/index.ts`
- `calendar-view/index.story.svelte`
- `schedule-calendar/index.svelte`
- `schedule-calendar/index.ts`
- `schedule-calendar/index.story.svelte`

### Папка: `stylist-svelte\src\lib\components\organisms\information\card`
- `comparison-card/index.svelte`
- `comparison-card/index.ts`
- `comparison-card/index.story.svelte`
- `kanban-card/index.svelte`
- `kanban-card/index.ts`
- `kanban-card/index.story.svelte`
- `stat-card/index.svelte`
- `stat-card/index.ts`
- `stat-card/index.story.svelte`
- `user-card/index.svelte`
- `user-card/index.ts`
- `user-card/index.story.svelte`

### Папка: `stylist-svelte\src\lib\components\organisms\information\commerce`
- `billing-summary/index.svelte`
- `billing-summary/index.ts`
- `billing-summary/index.story.svelte`
- `cart-summary/index.svelte`
- `cart-summary/index.ts`
- `cart-summary/index.story.svelte`
- `currency-converter/index.svelte`
- `currency-converter/index.ts`
- `currency-converter/index.story.svelte`
- `discount-applier/index.svelte`
- `discount-applier/index.ts`
- `discount-applier/index.story.svelte`
- `inventory-tracker/index.svelte`
- `inventory-tracker/index.ts`
- `inventory-tracker/index.story.svelte`
- `order-confirmation/index.svelte`
- `order-confirmation/index.ts`
- `order-confirmation/index.story.svelte`
- `order-history/index.svelte`
- `order-history/index.ts`
- `order-history/index.story.svelte`
- `order-tracking/index.svelte`
- `order-tracking/index.ts`
- `order-tracking/index.story.svelte`
- `shipping-info/index.svelte`
- `shipping-info/index.ts`
- `shipping-info/index.story.svelte`
- `subscription-manager/index.svelte`
- `subscription-manager/index.ts`
- `subscription-manager/index.story.svelte`
- `upsell/index.svelte`
- `upsell/index.ts`
- `upsell/index.story.svelte`
- `warranty-info/index.svelte`
- `warranty-info/index.ts`
- `warranty-info/index.story.svelte`

### Папка: `stylist-svelte\src\lib\components\organisms\information\communication\ai`
- `auth-guard/index.svelte`
- `auth-guard/index.ts`
- `auth-guard/index.story.svelte`
- `prediction-result/index.svelte`
- `prediction-result/index.ts`
- `prediction-result/index.story.svelte`
- `prompt-builder/index.svelte`
- `prompt-builder/index.ts`
- `prompt-builder/index.story.svelte`
- `sentiment-analysis/index.svelte`
- `sentiment-analysis/index.ts`
- `sentiment-analysis/index.story.svelte`

### Папка: `stylist-svelte\src\lib\components\organisms\information\communication\comments`
- `comment-system/index.svelte`
- `comment-system/index.ts`
- `comment-system/index.story.svelte`
- `comment-thread/index.svelte`
- `comment-thread/index.ts`
- `comment-thread/index.story.svelte`

### Папка: `stylist-svelte\src\lib\components\organisms\information\communication\social`
- `social-activity-feed/index.svelte`
- `social-activity-feed/index.ts`
- `social-activity-feed/index.story.svelte`
- `social-feed/index.svelte`
- `social-feed/index.ts`
- `social-feed/index.story.svelte`
- `social-login/index.svelte`
- `social-login/index.ts`
- `social-login/index.story.svelte`
- `social-share/index.svelte`
- `social-share/index.ts`
- `social-share/index.story.svelte`

### Папка: `stylist-svelte\src\lib\components\organisms\information\development`
- `debug-console/index.svelte`
- `debug-console/index.ts`
- `debug-console/index.story.svelte`
- `design-tokens/index.svelte`
- `design-tokens/index.ts`
- `design-tokens/index.story.svelte`
- `development-error-boundary/index.svelte`
- `development-error-boundary/index.ts`
- `development-error-boundary/index.story.svelte`
- `resource-optimizer/index.svelte`
- `resource-optimizer/index.ts`
- `resource-optimizer/index.story.svelte`

### Папка: `stylist-svelte\src\lib\components\organisms\information\geo`
- `geo-jsonviewer/index.svelte`
- `geo-jsonviewer/index.ts`
- `geo-jsonviewer/index.story.svelte`
- `map-marker/index.svelte`
- `map-marker/index.ts`
- `map-marker/index.story.svelte`
- `map-with-markers/index.svelte`
- `map-with-markers/index.ts`
- `map-with-markers/index.story.svelte`
- `route-planner/index.svelte`
- `route-planner/index.ts`
- `route-planner/index.story.svelte`
- `store-locator/index.svelte`
- `store-locator/index.ts`
- `store-locator/index.story.svelte`

### Папка: `stylist-svelte\src\lib\components\organisms\information\marketing`
- `abtest-configurator/index.svelte`
- `abtest-configurator/index.ts`
- `abtest-configurator/index.story.svelte`
- `test-results-viewer/index.svelte`
- `test-results-viewer/index.ts`
- `test-results-viewer/index.story.svelte`
- `traffic-analytics/index.svelte`
- `traffic-analytics/index.ts`
- `traffic-analytics/index.story.svelte`
- `user-behavior-metrics/index.svelte`
- `user-behavior-metrics/index.ts`
- `user-behavior-metrics/index.story.svelte`

### Папка: `stylist-svelte\src\lib\components\organisms\information\media`
- `audio-player/index.svelte`
- `audio-player/index.ts`
- `audio-player/index.story.svelte`
- `media-library/index.svelte`
- `media-library/index.ts`
- `media-library/index.story.svelte`
- `video-player/index.svelte`
- `video-player/index.ts`
- `video-player/index.story.svelte`

### Папка: `stylist-svelte\src\lib\components\organisms\information\product`
- `product-card-extended/index.svelte`
- `product-card-extended/index.ts`
- `product-card-extended/index.story.svelte`
- `product-catalog/index.svelte`
- `product-catalog/index.ts`
- `product-catalog/index.story.svelte`
- `product-reviews/index.svelte`
- `product-reviews/index.ts`
- `product-reviews/index.story.svelte`
- `product-sorting/index.svelte`
- `product-sorting/index.ts`
- `product-sorting/index.story.svelte`
- `product-tour/index.svelte`
- `product-tour/index.ts`
- `product-tour/index.story.svelte`

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
- `calendar-view/index.svelte`: обновлён index.story.svelte
- `comparison-card/index.svelte`: обновлён index.story.svelte
- `order-confirmation/index.svelte`: обновлён index.story.svelte
- `auth-guard/index.svelte`: обновлён index.story.svelte
- `comment-system/index.svelte`: обновлён index.story.svelte
- `product-catalog/index.svelte`: обновлён index.story.svelte
- `video-player/index.svelte`: обновлён index.story.svelte (исправлен импорт $lib/playground → $stylist/playground, добавлены интерактивные элементы управления)
- `audio-player/index.svelte`: обновлён index.story.svelte (исправлен импорт $lib/playground → $stylist/playground, добавлены интерактивные элементы управления)
- `image-gallery/index.svelte`: обновлён index.story.svelte (добавлен компонент Story, исправлен импорт, добавлены интерактивные элементы управления)
- `product-card-extended/index.svelte`: обновлён index.story.svelte (исправлен импорт $lib/playground → $stylist/playground, добавлены интерактивные элементы управления)

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