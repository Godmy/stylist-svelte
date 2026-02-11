# Tokens (Токены)

Токены являются единой точкой истины для всех атомарных значений в дизайн-системе. Это основа всей системы, обеспечивающая консистентность и масштабируемость.

## Структура токенов

```
tokens/
├── badge.ts                    # Токены для бейджей и значков
├── breakpoints.ts              # Токены для точек останова (breakpoints) в адаптивном дизайне
├── colors.ts                   # Цветовые палитры (blue, slate, green, amber, red, neutral, teal)
├── controls.ts                 # Типы контролов (text, number, boolean, select, color, range)
├── flags.ts                    # Флаги по умолчанию для состояний компонентов
├── gradients.ts                # Токены для градиентов
├── indicators.ts               # Токены для индикаторов статуса, активности и прогресса
├── layout.ts                   # Токены для компоновки интерфейса
├── opacity.ts                  # Токены для значений прозрачности
├── radius.ts                   # Радиусы скругления (none, sm, md, lg, full)
├── shadows.ts                  # Значения теней (sm, md, lg, xl)
├── shapes.ts                   # Токены для геометрических и компонентных форм
├── sizes.ts                    # Компонентные размеры и масштабы (COMPONENT_SIZE_SCALE, SIZE_CLASSES)
├── spacing.ts                  # Отступы и размеры (xs, sm, md, lg, xl, и т.д.)
├── transitions.ts              # Токены для анимаций и переходов
├── typography.ts               # Типографские значения (размеры шрифта, вес, высота строки, семейство)
├── variants.ts                 # Вариантные типы (SEMANTIC_VARIANTS, APPEARANCE_STYLES)
├── zIndex.ts                   # Токены для z-index значений
└── index.ts                    # Единая точка экспорта
```

## Типы токенов

### 1. Основные токены (атомарные значения)
- **colors.ts**: Цветовые палитры (blue, slate, green, amber, red, neutral, teal) - каждый цвет представлен в 10 оттенках от 50 до 900
- **spacing.ts**: Стандартные размеры отступов от `0` до `64` в системе отступов (на основе 4px)
- **typography.ts**: Типографские значения (размеры шрифта: `xs`, `sm`, `md`, `lg`, `xl`, `2xl`, `3xl`; вес шрифта: `thin`, `normal`, `medium`, `semibold`, `bold`; высота строки: `none`, `tight`, `snug`, `normal`, `relaxed`, `loose`; семейства шрифтов: `sans`, `serif`, `mono`)
- **radius.ts**: Радиусы скругления (`none`, `sm`, `base`, `md`, `lg`, `xl`, `2xl`, `3xl`, `full`)
- **shadows.ts**: Значения теней (`none`, `sm`, `base`, `md`, `lg`, `xl`, `2xl`, `inner`)
- **sizes.ts**: Компонентные размеры и масштабы (COMPONENT_SIZE_SCALE, COMPACT_SIZE_SCALE, CODE_BLOCK_SIZE_SCALE, LABEL_SIZE_SCALE, EXTENDED_SIZE_SCALE)
- **variants.ts**: Вариантные типы (SEMANTIC_VARIANTS, APPEARANCE_STYLES, BADGE_VARIANTS, CODE_BLOCK_VARIANTS)
- **controls.ts**: Типы контролов (text, number, boolean, select, color, range) и конфигурации
- **flags.ts**: Флаги по умолчанию для состояний компонентов (disabled, loading, readonly, required, closeable)
- **layout.ts**: Токены для компоновки интерфейса (POSITIONS, ORIENTATIONS, ALIGNMENTS, JUSTIFICATIONS)
- **shapes.ts**: Токены для геометрических и компонентных форм (BUTTON_SHAPES, AVATAR_SHAPES, CARD_SHAPES и др.)
- **indicators.ts**: Токены для индикаторов статуса, активности и прогресса (PRESENCE_STATUSES, MESSAGE_STATUSES, PROGRESS_TYPES и др.)
- **badge.ts**: Токены для бейджей и значков (BADGE_LABELS, BadgeType)
- **breakpoints.ts**: Токены для точек останова (breakpoints) в адаптивном дизайне (xs, sm, md, lg, xl, 2xl)
- **transitions.ts**: Токены для анимаций и переходов (duration, easing)
- **zIndex.ts**: Токены для z-index значений (layering context)
- **opacity.ts**: Токены для значений прозрачности (0%, 25%, 50%, 75%, 100% и т.д.)
- **gradients.ts**: Токены для градиентов (linear и radial градиенты)

### 2. Планируемые токены (для будущего развития)
- **motion.ts**: Токены для сложных анимационных последовательностей
- **elevation.ts**: Токены для уровней возвышения (альтернатива теням)

## Использование

### Импорт токенов
Все токены доступны через стандартный путь импорта:

```ts
// Пример импорта конкретных токенов
import { blue, spacing, fontSize, breakpoints, transition, zIndex } from '$stylist/design-system/tokens';
import { BADGE_LABELS } from '$stylist/design-system/tokens/badge';
import { borderRadius } from '$stylist/design-system/tokens/radius';
import { gradients } from '$stylist/design-system/tokens/gradients';
import { opacity } from '$stylist/design-system/tokens/opacity';
```

### Создание новых токенов
При добавлении новых токенов:
1. Определите, к какой категории они относятся (основные или для конкретных компонентов)
2. Добавьте их в соответствующий файл токенов
3. Обновите `index.ts` для включения в публичное API
4. Обновите темы, если токены влияют на них
5. Добавьте соответствующую документацию

## Принципы использования

1. **Единая точка истины**: Все значения должны быть определены как токены
2. **Атомарность**: Токены не должны содержать сложной логики
3. **Консистентность**: Используйте существующие токены вместо дублирования
4. **Масштабируемость**: Новые токены должны подчиняться существующим системам
5. **Организация**: Токены для конкретных компонентов группируются в отдельных файлах
6. **Типизация**: Все токены должны иметь соответствующие TypeScript типы

## Интеграция с другими слоями

- **Темы**: Используют токены для определения цветовых значений
- **Компоненты**: Используют токены для определения стилей, размеров и вариантов
- **Утилиты**: Преобразуют токены в CSS переменные
- **Документация**: Основывается на токенах для демонстрации компонентов

Токены обеспечивают основу для всей дизайн-системы, гарантируя консистентность во всем проекте.
