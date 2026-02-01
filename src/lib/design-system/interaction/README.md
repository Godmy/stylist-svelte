# Interaction Layer (Слой взаимодействия)

Слой взаимодействия обеспечивает единый паттерн для всех интерактивных компонентов в дизайн-системе. Он определяет, как компоненты выглядят и ведут себя в различных состояниях.

## Структура слоя взаимодействия

```
interaction/
├── preset.ts         # Интерфейс Preset<V,S> для определения пресетов компонентов
├── props.ts          # Базовые интерфейсы для свойств интерактивных компонентов
├── factory.ts        # Фабрика createPreset для создания пресетов
├── tokens.ts         # Набор интерактивных токенов и классов
└── index.ts          # Единая точка экспорта
```

## Архитектура

### 1. Паттерн пресетов (Preset)

Интерфейс `Preset<V,S>` определяет структуру для любого интерактивного компонента:

```ts
interface Preset<V extends string, S extends string> {
  variants: readonly V[];           // Доступные варианты (primary, secondary и т.д.)
  sizes: readonly S[];              // Доступные размеры (sm, md, lg и т.д.)
  defaults: {
    variant: V;                     // Вариант по умолчанию
    size: S;                        // Размер по умолчанию
    disabled: boolean;              // Состояние disabled по умолчанию
    block?: boolean;                // Опционально: блочное отображение
  };
  classes: {
    base: string;                   // Базовые CSS классы
    size: Record<S, string>;        // Классы для каждого размера
    variant: Record<V, string>;     // Классы для каждого варианта
    state: StateClasses;            // Классы для состояний (disabled, loading и т.д.)
    focusVisible?: string;          // Опционально: класс для фокуса
  };
}
```

### 2. Фабрика пресетов (createPreset)

Функция `createPreset` позволяет создавать пресеты с минимальной конфигурацией, используя токены из других слоев:

```ts
import { createPreset } from '$stylist/design-system/interaction';

const BUTTON_PRESET = createPreset({
  defaults: { variant: 'primary', size: 'md' },
  classes: {
    base: 'inline-flex items-center justify-center font-medium rounded-md transition-colors'
  }
});
```

### 3. Интерфейсы свойств (Props)

Файл `props.ts` определяет унифицированные интерфейсы для свойств компонентов:
- `IStyleable`: Стилизуемые компоненты
- `IVariant`: Компоненты с вариантами
- `ISize`: Компоненты с размерами
- `IDisableable`: Компоненты с состоянием disabled
- `ILoadable`: Компоненты с состоянием loading
- `IClickable`: Кликабельные компоненты

### 4. Интерактивные токены (INTERACTION_TOKENS)

Файл `tokens.ts` объединяет все необходимые токены для интерактивных компонентов в единый объект.

## Использование

### Создание пресета для компонента
```ts
import { createPreset } from '$stylist/design-system/interaction';

const myComponentPreset = createPreset({
  defaults: {
    variant: 'primary',
    size: 'md',
    disabled: false
  },
  classes: {
    base: 'my-custom-base-classes',
    // Можно переопределить только необходимые классы
  }
});
```

### Использование в компоненте
```ts
import { type Props } from '$stylist/design-system/interaction';
import { type ThemeName } from '$stylist/design-system/themes';

interface MyComponentProps extends Props<'primary' | 'secondary', 'sm' | 'md' | 'lg'> {
  theme?: ThemeName;
  // другие специфичные свойства
}
```

## Интеграция с другими слоями

- **Токены**: Используются для определения доступных вариантов, размеров и классов
- **Темы**: Пресеты генерируют CSS классы, использующие CSS переменные из тем
- **Утилиты**: Сгенерированные стили зависят от текущей темы через CSS переменные

## Принципы использования

1. **Единообразие**: Все интерактивные компоненты используют одинаковую структуру
2. **Масштабируемость**: Простое добавление новых вариантов и размеров
3. **Адаптивность**: Компоненты автоматически адаптируются к текущей теме
4. **Доступность**: Встроенные классы для доступности (focusVisible и т.д.)

## Публичное API

Через `$stylist/design-system/interaction` доступно:
- `createPreset`: Функция для создания пресетов
- `Preset`, `Props` и другие типы
- `INTERACTION_TOKENS`: Все необходимые токены для интерактивных компонентов

Слой взаимодействия обеспечивает согласованное поведение всех интерактивных элементов интерфейса.
