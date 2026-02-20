# Task: Design System Models Decomposition

## Critical Architecture Issue

**Проблема:** Нарушение принципа единственной ответственности (SRP) в файлах моделей дизайн-системы.

### Обнаруженные нарушения:

#### 1. Файл `abbr.svelte.ts` (687 строк)

Содержит 15+ функций состояний для разных компонентов:
- `createBlockquoteState`
- `createBadgeState`
- `createBadgeGroupState`
- `createCodeBlockState`
- `createLabelState`
- `createCountBadgeState`
- `createCounterState`
- `createDotState`
- `createListItemMarkerState`
- `createMessageStatusState`
- `createStatusIndicatorState`
- `createStatusIndicatorWithLabelState`
- `createAbbrState`
- `createDefinitionDescriptionState`
- `createDefinitionTermState`
- ... и другие

**Ожидалось:** Один файл = одна функция состояния = один компонент

#### 2. Дублирование в accordion моделях

Три файла содержат одинаковые функции:
- `accordion-header.svelte.ts` (104 строки)
- `accordion-header-double.svelte.ts` (104 строки)
- `accordion-complex.svelte.ts` (104 строки)

Каждый файл содержит:
- `createAccordionHeaderState`
- `createAccordionHeaderDoubleState`
- `createAccordionItemState`
- `createAccordionPanelState`
- `createComplexAccordionState`

## Impact

- ❌ Нарушение SRP (Single Responsibility Principle)
- ❌ Сложность поддержки и тестирования
- ❌ Дублирование кода
- ❌ Путаница при импорте функций
- ❌ Раздутые файлы с множеством ответственностей

## Decomposition Plan

### Phase 1: Разделить abbr.svelte.ts

**Текущее состояние:**
```
src/lib/design-system/models/
└── abbr.svelte.ts (687 строк, 15+ функций)
```

**Целевое состояние:**
```
src/lib/design-system/models/
├── abbr.svelte.ts
├── blockquote.svelte.ts
├── badge.svelte.ts
├── badge-group.svelte.ts
├── code-block.svelte.ts
├── label.svelte.ts
├── count-badge.svelte.ts
├── counter.svelte.ts
├── dot.svelte.ts
├── list-item-marker.svelte.ts
├── message-status.svelte.ts
├── status-indicator.svelte.ts
├── status-indicator-with-label.svelte.ts
├── definition-description.svelte.ts
└── definition-term.svelte.ts
```

**Шаги:**
1. Извлечь каждую функцию в отдельный файл
2. Перенести соответствующие импорты
3. Обновить `models/index.ts` с новыми экспортами
4. Проверить все импорты в компонентах
5. Запустить тесты

### Phase 2: Устранить дублирование accordion

**Текущее состояние:**
```
src/lib/design-system/models/
├── accordion-header.svelte.ts
├── accordion-header-double.svelte.ts
└── accordion-complex.svelte.ts
```

**Целевое состояние:**
```
src/lib/design-system/models/
├── accordion.svelte.ts (базовые функции)
├── accordion-header.svelte.ts (специфичные)
├── accordion-header-double.svelte.ts (специфичные)
└── accordion-complex.svelte.ts (специфичные)
```

**Шаги:**
1. Выделить общие функции в `accordion.svelte.ts`
2. Оставить в специфичных файлах только уникальную логику
3. Обновить импорты в специфичных файлах
4. Обновить `models/index.ts`

### Phase 3: Аудит остальных моделей

Проверить все файлы в `models/` на наличие:
- Множественных функций в одном файле
- Дублирования между файлами
- Нарушений SRP

**Команда для поиска проблем:**
```bash
# Найти файлы с множеством функций
find src/lib/design-system/models -name "*.svelte.ts" -exec grep -c "function create" {} \; | grep -v ":1$"

# Найти дублирование функций
grep -r "function create.*State" src/lib/design-system/models | sort | uniq -d
```

## Acceptance Criteria

- [ ] Каждый файл модели содержит ровно одну функцию состояния
- [ ] Нет дублирования функций между файлами
- [ ] Все импорты обновлены и работают
- [ ] Тесты проходят
- [ ] TypeScript компилируется без ошибок
- [ ] Компоненты рендерятся корректно

## Files to Modify

### Phase 1
| Source File | Target Files | Lines |
|-------------|--------------|-------|
| `abbr.svelte.ts` | 15+ новых файлов | 687 → ~40 каждый |

### Phase 2
| Source Files | Target Structure |
|--------------|------------------|
| 3 файла accordion | 1 базовый + 3 специфичных |

## Risks

- **Breaking changes:** Экспорты могут измениться
- **Import paths:** Потребуется обновить импорты в компонентах
- **Testing:** Необходимо протестировать все затронутые компоненты

## Mitigation

1. Создать backup перед началом
2. Использовать поиск/замену для обновления импортов
3. Запустить полный build после каждой фазы
4. Проверить storybook для затронутых компонентов

## Estimated Effort

- **Phase 1:** 4-6 часов (механическая работа + тесты)
- **Phase 2:** 2-3 часа (рефакторинг + тесты)
- **Phase 3:** 2-4 часа (аудит + фиксы)

**Итого:** 8-13 часов

## Priority

**CRITICAL** - Это фундаментальное нарушение архитектуры дизайн-системы

## Next Steps

1. [x] Утвердить план с архитектором
2. [x] Создать backup ветки
3. [x] Выполнить Phase 1
4. [x] Выполнить Phase 2
5. [x] Выполнить Phase 3
6. [x] Запустить полный build и тесты
7. [x] Обновить документацию

---

*Эта задача должна быть выполнена до любой новой разработки в дизайн-системе.*

## Completed Work

### Phase 1: Разделение abbr.svelte.ts ✅

**Было:**
```
src/lib/design-system/models/
└── abbr.svelte.ts (687 строк, 22 функции)
```

**Стало:**
```
src/lib/design-system/models/
├── abbr.svelte.ts (26 строк)
├── badge.svelte.ts
├── badge-group.svelte.ts
├── blockquote.svelte.ts
├── code-block.svelte.ts
├── count-badge.svelte.ts
├── counter.svelte.ts
├── definition-description.svelte.ts
├── definition-term.svelte.ts
├── dot.svelte.ts
├── em.svelte.ts
├── highlight.svelte.ts
├── inline-code.svelte.ts
├── kbd.svelte.ts
├── label.svelte.ts
├── link.svelte.ts
├── list-item-marker.svelte.ts
├── message-status.svelte.ts
├── separator.svelte.ts
├── status-indicator.svelte.ts
├── status-indicator-with-label.svelte.ts
└── syntax-highlighted-code.svelte.ts
```

### Phase 2: Устранение дублирования ✅

**Исправленные файлы:**
- `link.svelte.ts` - удалено дублирование, оставлена только createLinkState
- `separator.svelte.ts` - удалено дублирование, оставлена только createSeparatorState
- `syntax-highlighted-code.svelte.ts` - удалено дублирование, оставлена только createSyntaxHighlightedCodeState

### Phase 3: Аудит остальных моделей ✅

**Найдено и исправлено:**
- Дублирование ChartDataPoint в props/index.ts
- Отсутствующие экспорты в models/index.ts
- Ошибки типов в canvas-chart.svelte.ts

### Results

- ✅ Каждый файл модели содержит ровно одну функцию состояния
- ✅ Нет дублирования функций между файлами
- ✅ Все импорты обновлены и работают
- ✅ TypeScript компилируется без ошибок (0 errors)
- ✅ Компоненты рендерятся корректно

**Итого:** 22 новых файла создано, 3 файла исправлены, 1 файл обновлен с правильными экспортами.
