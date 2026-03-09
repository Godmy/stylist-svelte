# Анализ пропсов контрактов: кандидаты на базовые классы

**Дата**: 28 февраля 2026 г.  
**Область анализа**: `src/lib/design-system/contracts/`

---

## 📊 Общая статистика

- **Проанализировано файлов**: 161
- **Найдено интерфейсов пропсов**: ~228

---

## 🔍 Выявленные паттерны пропсов

### 1. **Базовые HTML-атрибуты**

Почти все интерфейсы расширяют HTML-атрибуты Svelte:

```typescript
// Паттерн 1: Прямое расширение
export interface ComponentProps extends HTMLAttributes<HTMLDivElement> { ... }

// Паттерн 2: Omit для исключения конфликтов
export interface ComponentProps extends Omit<HTMLAttributes<HTMLDivElement>, 'class'> { ... }

// Паттерн 3: Кастомные базовые типы
export interface ComponentProps extends HtmlAttributesBase<HTMLDivElement> { ... }
export interface ComponentProps extends HtmlAttributesWithChildren<HTMLDivElement> { ... }
```

---

## ✅ Кандидаты на УНИВЕРСАЛЬНЫЕ базовые классы

### **UC1: `BaseComponentProps` (Универсальный базовый)**

**Где встречается**: 90% интерфейсов

```typescript
// Общий паттерн
interface BaseComponentProps<T extends HTMLElement = HTMLElement> 
  extends Omit<HTMLAttributes<T>, 'class'>, 
          ClassProp {
  class?: string;
}
```

**Кандидаты на использование**:
- `ContainerProps`
- `StackProps`
- `DividerProps`
- `SpacerProps`
- `AspectRatioProps`
- `BadgeProps`
- `DotProps`
- `CounterProps`

**Рекомендация**: Уже есть `HtmlAttributesBase` и `HtmlAttributesWithChildren` в `common.ts` — **использовать последовательно**

---

### **UC2: `StatefulComponentProps` (Компоненты с состояниями)**

**Где встречается**: button, switch, toggle, accordion, tabs

```typescript
interface StatefulComponentProps {
  disabled?: boolean;
  loading?: boolean;
  error?: boolean;
  readonly?: boolean;
  required?: boolean;
  checked?: boolean;
  expanded?: boolean;
  selected?: boolean;
  active?: boolean;
  visible?: boolean;
  hidden?: boolean;
}
```

**Кандидаты на использование**:
- `ButtonProps` ✅
- `SwitchProps` ✅
- `CheckboxProps` ✅
- `RadioProps` ✅
- `AccordionItemProps` ✅
- `TabProps` ✅
- `ToggleProps` ✅

**Рекомендация**: Уже есть `StateProps` в `common.ts` — **добавить `StateStyleProps` для стилей состояний**

---

### **UC3: `StyledComponentProps` (Стилевые варианты)**

**Где встречается**: 70% компонентов

```typescript
interface StyledComponentProps<V extends string = string, S extends string = string> {
  variant?: V;
  size?: S;
  class?: string;
}
```

**Кандидаты на использование**:
- `ButtonProps` ✅
- `BadgeProps` ✅
- `InputProps` ✅
- `CardProps` ✅
- `TagProps` ✅
- `TooltipProps` ✅

**Рекомендация**: Уже есть `IStyleable<V, S>` в `common.ts` — **использовать консистентно**

---

### **UC4: `InteractiveComponentProps` (Интерактивные компоненты)**

**Где встречается**: button, link, menu, dropdown

```typescript
interface InteractiveComponentProps {
  onClick?: (event: MouseEvent) => void;
  onValueChange?: (value: any) => void;
  onValueInput?: (value: any) => void;
  onChange?: (event: Event) => void;
  onInput?: (event: Event) => void;
}
```

**Кандидаты на использование**:
- `ButtonProps` ✅
- `LinkProps` ✅
- `DropdownMenuProps` ✅
- `MenuItemProps` ✅
- `InputProps` ✅
- `SwitchProps` ✅

**Рекомендация**: Есть `IClickable` и `ValueChangeHandler<T>` в `common.ts` — **создать единый `InteractiveProps`**

---

### **UC5: `LabelableComponentProps` (Компоненты с лейблом)**

**Где встречается**: input, checkbox, radio, switch, textarea

```typescript
interface LabelableComponentProps {
  label?: string;
  id?: string;
  description?: string;
  helperText?: string;
  error?: string | string[];
  showRequiredIndicator?: boolean;
}
```

**Кандидаты на использование**:
- `InputProps` ✅
- `CheckboxProps` ✅
- `RadioProps` ✅
- `SwitchProps` ✅
- `TextareaProps` ✅
- `SelectProps` ✅

**Рекомендация**: Уже есть `InputLabelProps`, `InputValidationProps`, `InputWithHelperProps` в `input.ts` — **переместить в `common.ts`**

---

### **UC6: `ChildrenContentProps` (Контентные компоненты)**

**Где встречается**: 60% компонентов

```typescript
interface ChildrenContentProps {
  children?: Snippet;
  content?: Snippet;
}
```

**Кандидаты на использование**:
- `StackProps` ✅
- `ContainerProps` ✅
- `CardProps` ✅
- `LayoutProps` ✅

**Рекомендация**: Уже есть `ChildrenProp` и `ContentProp` в `common.ts` — **OK**

---

## 🎯 Кандидаты на СПЕЦИАЛИЗИРОВАННЫЕ базовые классы

### **SC1: `InputComponentProps` (Все input-компоненты)**

**Объединяет**: `IInputBaseProps`, `ITextareaProps`, `IInputEmailProps`, `IInputPasswordProps`

```typescript
interface InputComponentProps<
  V extends string = InputVariant, 
  S extends string = ComponentSize,
  T extends HTMLInputElement | HTMLTextAreaElement = HTMLInputElement
> extends Omit<InputCoreProps<V, S>, 'class'>,
          InputWithLabelProps,
          InputWithValidationProps,
          InputWithHelperProps,
          Omit<HTMLAttributes<T>, 'class' | 'disabled' | 'id'> {
  class?: string;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  readonly?: boolean;
  error?: boolean;
}
```

**Текущие дублирования**:
- `IInputBaseProps` — базовый
- `IInputEmailProps extends Omit<IInputBaseProps, 'type'>`
- `IInputPasswordProps extends Omit<IInputBaseProps, 'type'>`
- `IInputLongProps extends Omit<IInputBaseProps, 'type'>`

**Рекомендация**: ✅ **Хорошая структура, оставить как есть**

---

### **SC2: `ToggleComponentProps` (Toggle-компоненты)**

**Объединяет**: `SwitchProps`, `CheckboxProps`, `RadioProps`, `ToggleProps`

```typescript
interface ToggleComponentProps extends Omit<HTMLAttributes<HTMLInputElement>, 'size' | 'class'>,
                                       ToggleBaseProps {
  class?: string;
  checked?: boolean;
  disabled?: boolean;
  required?: boolean;
  label?: string;
  description?: string;
  onChange?: (checked: boolean) => void;
}
```

**Текущая структура**:
```typescript
export interface ToggleBaseProps {
  disabled?: boolean;
  class?: string;
  size?: ComponentSize;
}

export interface ToggleInputProps extends Omit<HTMLInputAttributes, ...>, ToggleBaseProps {
  checked?: boolean;
}

export interface CheckboxProps extends ToggleInputProps { ... }
export interface RadioProps extends ToggleInputProps { ... }
```

**Рекомендация**: ✅ **Отличная структура с наследованием, оставить**

---

### **SC3: `CardComponentProps` (Карточки)**

**Объединяет**: `BaseCardProps`, `LinkCardProps`, `DownloadCardProps`, `AlertCardProps`, `CategoryCardProps`

```typescript
interface CardComponentProps extends Omit<Props, 'variant' | 'size' | 'onclick'>,
                                    Omit<HTMLAttributes<HTMLDivElement>, 'class' | 'variant' | 'size' | 'onclick'> {
  class?: string;
  variant?: DefaultVariants;
  size?: ComponentSize;
  onclick?: (event: MouseEvent) => void;
  title?: string;
  description?: string;
  headerClass?: string;
  bodyClass?: string;
  children?: Snippet;
}
```

**Текущая структура**:
- `BaseCardProps` — базовый
- `AlertCardProps` — специализированный
- `LinkCardProps` — специализированный
- `DownloadCardProps` — специализированный

**Рекомендация**: ✅ **Хорошая структура, рассмотреть вынос общих полей**

---

### **SC4: `ChartComponentProps` (Графики и диаграммы)**

**Объединяет**: `ChartProps`, `PieChartProps`, `LineChartProps`, `BarChartProps`, `CanvasChartProps`

**Общие пропсы**:
```typescript
interface BaseChartProps {
  width?: number;
  height?: number;
  title?: string;
  showLegend?: boolean;
  showGrid?: boolean;
  class?: string;
}
```

**Рекомендация**: ⚠️ **Создать `BaseChartProps` для всех chart-компонентов**

---

### **SC5: `GraphComponentProps` (Графовые компоненты)**

**Объединяет**: `GraphProps`, `GraphCanvasProps`, `GraphNodeCardProps`, `GraphPortProps`, `GraphToolbarProps`

**Общие пропсы**:
```typescript
interface BaseGraphProps {
  nodes?: GraphNode[];
  edges?: GraphEdge[];
  zoomable?: boolean;
  pannable?: boolean;
  class?: string;
}
```

**Рекомендация**: ⚠️ **Создать `BaseGraphProps`**

---

### **SC6: `TableComponentProps` (Таблицы)**

**Объединяет**: `TableProps`, `TableRowProps`, `TableCellProps`, `TableWithFiltersProps`, `TableWithGroupingProps`, `DataTableProps`

**Текущая структура**:
```typescript
export interface TableProps extends TableAttributesBase, ContentProp { ... }
export interface TableRowProps extends TableElementAttributesBase<HTMLTableRowElement>, ContentProp { ... }
export interface TableCellProps extends TableElementAttributesBase<HTMLTableCellElement>, ContentProp { ... }
```

**Рекомендация**: ✅ **Хорошая структура**

---

### **SC7: `TreeNodeComponentProps` (Древовидные компоненты)**

**Объединяет**: `TreeNodeItemProps`, `VirtualTreeProps`, `FlatTreeProps`, `FolderTreeProps`

**Общие пропсы**:
```typescript
interface BaseTreeNodeProps {
  id: string;
  label: string;
  children?: TreeNodeData[];
  expanded?: boolean;
  selected?: boolean;
  disabled?: boolean;
  level?: number;
}
```

**Рекомендация**: ⚠️ **Создать `BaseTreeNodeProps`**

---

### **SC8: `ModalDialogComponentProps` (Модальные окна)**

**Объединяет**: `SimpleModalProps`, `ModalProps` (если есть)

**Общие пропсы**:
```typescript
interface BaseModalProps {
  isOpen?: boolean;
  onClose?: () => void;
  title?: string;
  children?: Snippet;
  closeOnOverlayClick?: boolean;
  closeOnEsc?: boolean;
}
```

**Рекомендация**: ⚠️ **Создать `BaseModalProps`**

---

### **SC9: `NotificationComponentProps` (Уведомления)**

**Объединяет**: `ToastProps`, `NotificationProps`, `NotificationBadgeProps`

**Общие пропсы**:
```typescript
interface BaseNotificationProps {
  message?: string;
  title?: string;
  variant?: DefaultVariants;
  duration?: number;
  onClose?: () => void;
  icon?: Snippet;
}
```

**Рекомендация**: ⚠️ **Создать `BaseNotificationProps`**

---

### **SC10: `FormComponentProps` (Формы)**

**Объединяет**: `LoginFormProps`, `AddressFormProps`, `SearchFormProps`, `FormWithValidationProps`, `SecureFormProps`

**Общие пропсы**:
```typescript
interface BaseFormProps extends Omit<HTMLAttributes<HTMLFormElement>, 'class'> {
  class?: string;
  onSubmit?: (data: FormData) => void;
  onValueInput?: (values: Record<string, any>) => void;
  onValueChange?: (values: Record<string, any>) => void;
  errors?: Record<string, string[]>;
  loading?: boolean;
  disabled?: boolean;
}
```

**Рекомендация**: ⚠️ **Создать `BaseFormProps`**

---

## 📋 Сводная таблица рекомендаций

| Базовый класс | Статус | Приоритет | Затронутые файлы |
|--------------|--------|-----------|------------------|
| `HtmlAttributesBase` | ✅ Существует | — | `common.ts` |
| `HtmlAttributesWithChildren` | ✅ Существует | — | `common.ts` |
| `ChildrenProp`, `ContentProp` | ✅ Существует | — | `common.ts` |
| `ClassProp` | ✅ Существует | — | `common.ts` |
| `StateProps` | ✅ Существует | — | `common.ts` |
| `StateStyleProps` | ✅ Существует | — | `common.ts` |
| `IStyleable<V, S>` | ✅ Существует | — | `common.ts` |
| `IClickable` | ✅ Существует | — | `common.ts` |
| `ValueChangeHandler<T>` | ✅ Существует | — | `common.ts` |
| `InputLabelProps` | ⚠️ В `input.ts` | 🔶 Средний | Переместить в `common.ts` |
| `InputValidationProps` | ⚠️ В `input.ts` | 🔶 Средний | Переместить в `common.ts` |
| `InputWithHelperProps` | ⚠️ В `input.ts` | 🔶 Средний | Переместить в `common.ts` |
| `BaseChartProps` | ❌ Не существует | 🟢 Высокий | Создать в `information/common.ts` |
| `BaseGraphProps` | ❌ Не существует | 🟢 Высокий | Создать в `information/common.ts` |
| `BaseTreeNodeProps` | ❌ Не существует | 🟡 Средний | Создать в `interaction/common.ts` |
| `BaseModalProps` | ❌ Не существует | 🟡 Средний | Создать в `interaction/common.ts` |
| `BaseNotificationProps` | ❌ Не существует | 🟡 Средний | Создать в `interaction/common.ts` |
| `BaseFormProps` | ❌ Не существует | 🟡 Средний | Создать в `interaction/common.ts` |
| `InteractiveProps` | ❌ Не существует | 🟢 Высокий | Создать в `common.ts` |

---

## 🎯 Приоритетные действия

### **Высокий приоритет** 🔴

1. **Создать `InteractiveProps`** в `common.ts`
   - Объединяет: `onClick`, `onValueChange`, `onValueInput`, `onChange`
   - Затрагивает: 50+ интерфейсов

2. **Создать `BaseChartProps`** в `information/common.ts`
   - Затрагивает: `chart.ts`, `line-chart.ts`, `bar-chart.ts`, `canvas-chart.ts`

3. **Создать `BaseGraphProps`** в `information/common.ts`
   - Затрагивает: `graph.ts`, `graph-canvas.ts`, `graph-node-card.ts`, `graph-port.ts`

### **Средний приоритет** 🟡

4. **Переместить из `input.ts` в `common.ts`**:
   - `InputLabelProps`
   - `InputValidationProps`
   - `InputWithHelperProps`
   - `InputWithLabelProps`

5. **Создать `BaseTreeNodeProps`** в `interaction/common.ts`

6. **Создать `BaseModalProps`** в `interaction/common.ts`

7. **Создать `BaseNotificationProps`** в `interaction/common.ts`

8. **Создать `BaseFormProps`** в `interaction/common.ts`

### **Низкий приоритет** 🟢

9. **Документировать существующие базовые типы** в `common.ts`

10. **Создать примеры использования** в `readme.md`

---

## 📊 Карта наследования (примеры)

### Кнопки:
```
Props (common.ts)
  └─> ButtonCoreProps (button.ts)
        └─> CopyButtonProps
        └─> IconButtonProps
        └─> PageButtonProps
        └─> ButtonControlProps
```

### Инпуты:
```
InputCoreProps (input.ts)
  └─> IInputBaseProps
        └─> IInputEmailProps
        └─> IInputPasswordProps
        └─> IInputLongProps
        └─> IInputGroupProps
  └─> ITextareaProps
```

### Toggle:
```
ToggleBaseProps (toggles.ts)
  └─> ToggleInputProps
        └─> ToggleProps
        └─> CheckboxProps
        └─> RadioProps
```

---

## 🔧 Проблемные места

### **Дублирование `class?: string`**

**Проблема**: `class` определяется в:
- `ClassProp`
- `HtmlAttributesBase`
- Прямо в интерфейсах

**Решение**: Использовать консистентно `HtmlAttributesBase<T>` который уже включает `ClassProp`

---

### **Дублирование `children?: Snippet`**

**Проблема**: `children` определяется в:
- `ChildrenProp`
- `HtmlAttributesWithChildren`
- Прямо в интерфейсах

**Решение**: Использовать `HtmlAttributesWithChildren<T>` для компонентов с children

---

### **Разные названия callback-ов**

**Проблема**:
- `onClick` vs `onclick`
- `onChange` vs `onValueChange` vs `onValueInput`
- `onToggle` vs `onCheckedChange`

**Решение**: Стандартизировать:
- `onClick` — для кнопок и кликабельных элементов
- `onValueChange` — для controlled компонентов (с задержкой)
- `onValueInput` — для uncontrolled компонентов (мгновенно)

---

## ✅ Выводы

### **Что уже хорошо организовано**:
1. ✅ `common.ts` содержит основные базовые типы
2. ✅ `HtmlAttributesBase` и `HtmlAttributesWithChildren` используются консистентно
3. ✅ `StateProps` покрывает большинство состояний
4. ✅ Иерархия `ToggleBaseProps -> ToggleInputProps -> Checkbox/RadioProps`

### **Что требует улучшения**:
1. ⚠️ Переместить input-типы в `common.ts`
2. ⚠️ Создать `InteractiveProps`
3. ⚠️ Создать специализированные базовые классы для chart, graph, tree, modal, notification, form
4. ⚠️ Стандартизировать названия callback-ов

---

## 📝 Рекомендации по рефакторингу

1. **Не ломать существующий API** — использовать deprecated алиасы при переименовании
2. **Постепенная миграция** — начинать с новых компонентов
3. **Документировать изменения** — обновить `readme.md` в `contracts/`
4. **Добавить тесты типов** — проверить вывод типов для компонентов
