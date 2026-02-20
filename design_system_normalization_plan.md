# Design System Normalization Plan

## Overview
План нормализации дизайн-системы на основе анализа компонентов.

## Progress

### ✅ Completed

#### 1. Interaction Molecules Migration (56 components)
Все story-файлы interaction molecules мигрированы на использование общего компонента `Story.svelte`:
- Chat: 6 компонентов
- Controls: 28 компонентов
- Dialogs: 2 компонента
- Editors: 1 компонент
- Feedback: 4 компонента
- Forms: 5 компонентов
- Input: 11 компонентов
- Search: 1 компонент

#### 2. ControlConfig Type Normalization
- ✅ Добавлен `CONTROL_TYPES` enum для обратной совместимости
- ✅ Помечен как `@deprecated` с рекомендацией использовать строковые литералы
- ✅ Все новые компоненты используют строковые литералы (`'text'`, `'select'`, `'boolean'`)

#### 3. Style Manager Normalization
- ✅ `DataDisplayStyleManager.getColorSwatchClasses()` теперь принимает `color` и `size` параметры
- ✅ Старый метод `getColorSwatchStyle()` помечен как `@deprecated`
- ✅ Устранено дублирование между `DataDisplayStyleManager` и `ChartStyleManager`

### 🔄 In Progress

#### 4. Inline Styles to CSS Classes
**Problem:** Некоторые компоненты всё ещё используют inline-стили

**Files to update:**
- [ ] `src/lib/design-system/styles/data-display.ts` - `getColorSwatchStyle()` - DONE (deprecated added)
- [ ] Update all usages of `getColorSwatchStyle()` to use `getColorSwatchClasses()`

### 📋 TODO

#### 5. Formatting Utilities Centralization
**Problem:** Функции форматирования дублируются в нескольких файлах

**Plan:**
- [ ] Создать `src/lib/design-system/utils/format.ts`
- [ ] Переместить `formatAnimatedValue`, `formatNumberFlowValue`
- [ ] Обновить все импорты

#### 6. Story File Category Consistency
**Problem:** Некоторые story-файлы имеют неверную категорию

**Plan:**
- [ ] Проверить все story-файлы на соответствие категории расположению
- [ ] Обновить или удалить поле `category`

## Guidelines

### New Components
Для новых компонентов используйте следующий паттерн:

```typescript
import Story from '$stylist/design-system/playground/Story.svelte';
import type { ControlType } from '$stylist/design-system/tokens/controls';

const controls = [
  {
    name: 'variant',
    type: 'select' as ControlType,  // или просто 'select'
    defaultValue: 'primary',
    options: ['primary', 'secondary'],
    description: 'Visual variant'
  }
];
```

### Style Managers
Используйте CSS-классы вместо inline-стилей:

```typescript
// ✅ Правильно
static getColorSwatchClasses(color: string, size: number): string {
  return cn(BASE_CLASSES, `bg-[${color}]`, `w-[${size}px]`);
}

// ❌ Неправильно
static getColorSwatchStyle(color: string, size: number): string {
  return `background-color: ${color}; width: ${size}px;`;
}
```

## Metrics

| Metric | Before | After | Target |
|--------|--------|-------|--------|
| Components using Story.svelte | 0 | 56 | 100% |
| Inline style methods | 3 | 1 (deprecated) | 0 |
| Duplicate format functions | 2 | 2 | 0 (centralized) |

## Next Steps

1. **Update usages of deprecated methods**
   - Найти все вызовы `getColorSwatchStyle()`
   - Заменить на `getColorSwatchClasses()`

2. **Centralize formatting utilities**
   - Создать `utils/format.ts`
   - Переместить функции форматирования

3. **Documentation**
   - Обновить документацию дизайн-системы
   - Добавить guidelines для новых разработчиков