# Accordion Models Decomposition

## Problem

Три файла accordion содержат дублирование кода и нарушают SRP:

```
src/lib/design-system/models/
├── accordion-header.svelte.ts (120 строк, 5 функций)
├── accordion-header-double.svelte.ts (120 строк, 5 функций)
└── accordion-complex.svelte.ts (120 строк, 5 функций)
```

Каждый файл содержит все 5 функций:
1. `createAccordionHeaderState`
2. `createAccordionHeaderDoubleState`
3. `createAccordionItemState`
4. `createAccordionPanelState`
5. `createComplexAccordionState`

## Target Structure

```
src/lib/design-system/models/
├── accordion.svelte.ts (базовые функции - ~80 строк)
├── accordion-header.svelte.ts (только createAccordionHeaderState - ~30 строк)
├── accordion-header-double.svelte.ts (только createAccordionHeaderDoubleState - ~30 строк)
├── accordion-item.svelte.ts (только createAccordionItemState - ~20 строк)
├── accordion-panel.svelte.ts (только createAccordionPanelState - ~30 строк)
└── accordion-complex.svelte.ts (только createComplexAccordionState - ~30 строк)
```

## Steps

### Step 1: Создать accordion.svelte.ts с базовыми функциями

### Step 2: Обновить accordion-header.svelte.ts
Оставить только `createAccordionHeaderState` с импортом из базового файла

### Step 3: Обновить accordion-header-double.svelte.ts
Оставить только `createAccordionHeaderDoubleState`

### Step 4: Создать accordion-item.svelte.ts
Выделить `createAccordionItemState` в отдельный файл

### Step 5: Создать accordion-panel.svelte.ts
Выделить `createAccordionPanelState` в отдельный файл

### Step 6: Обновить accordion-complex.svelte.ts
Оставить только `createComplexAccordionState`

### Step 7: Обновить models/index.ts
Добавить новые экспорты

## Acceptance Criteria

- [ ] Каждый файл содержит ровно одну функцию состояния
- [ ] Нет дублирования кода между файлами
- [ ] Все импорты работают корректно
- [ ] TypeScript компилируется без ошибок
- [ ] Компоненты рендерятся корректно
