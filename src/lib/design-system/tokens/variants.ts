/**
 * Семантические варианты и стили внешнего вида
 * Единый источник истины для вариантов компонентов в дизайн-системе
 */

/**
 * Основные семантические варианты - представляют назначение/роль компонента
 * Эти варианты сопоставляются с конкретными цветовыми палитрами и передают смысл
 */
export const SEMANTIC_VARIANTS = [
  'primary',    // Основное действие или акцент (сопоставляется с синим)
  'secondary',  // Второстепенное действие или меньший акцент (сопоставляется с серым)
  'success',    // Успешное завершение или положительное состояние (сопоставляется с зеленым)
  'warning',    // Предупреждение или осторожность (сопоставляется с оранжевым)
  'danger',     // Опасное действие или состояние ошибки (сопоставляется с красным)
  'info'        // Информационное сообщение (сопоставляется с бирюзовым)
] as const;

export type SemanticVariant = typeof SEMANTIC_VARIANTS[number];

/**
 * Стили визуального внешнего вида - определяют, как выглядит компонент
 * Эти стили определяют визуальное оформление независимо от семантического значения
 */
export const APPEARANCE_STYLES = [
  'solid',      // Заполненный фон
  'outline',    // Только граница
  'ghost',      // Прозрачный, показывается при наведении
  'link',       // Стилизован как гиперссылка
  'subtle'      // Приглушенный, низкий контраст
] as const;

export type AppearanceStyle = typeof APPEARANCE_STYLES[number];

export type DefaultVariants = SemanticVariant | AppearanceStyle;


/**
 * Нейтральные варианты - без семантики, общего назначения
 */
export const NEUTRAL_VARIANTS = [
  'default',    // Состояние по умолчанию/нейтральное
  'neutral'     // Явно нейтральный (для значков, статусов)
] as const;

export type NeutralVariant = typeof NEUTRAL_VARIANTS[number];

/**
 * Состоянные варианты - для элементов форм и полей ввода
 */
export const STATE_VARIANTS = [
  'error',      // Состояние ошибки для полей ввода
  'valid',      // Состояние корректности/успеха для полей ввода
  'disabled'    // Состояние отключения
] as const;

export type StateVariant = typeof STATE_VARIANTS[number];

/**
 * Варианты прогресса/потока - для пошаговых индикаторов, прогресса
 */
export const FLOW_VARIANTS = [
  'completed',  // Завершенный шаг/этап
  'current',    // Текущий/активный шаг
  'upcoming',   // Будущий/ожидаемый шаг
  'skipped'     // Пропущенный шаг
] as const;

export type FlowVariant = typeof FLOW_VARIANTS[number];

/**
 * Сопоставление семантических вариантов с цветовыми палитрами
 * Создает связь между смыслом и визуальным дизайном
 */
export const VARIANT_TO_PALETTE = {
  primary: 'blue',
  secondary: 'slate',
  success: 'green',
  warning: 'amber',
  danger: 'red',
  info: 'teal'
} as const;

export type VariantPaletteName = typeof VARIANT_TO_PALETTE[keyof typeof VARIANT_TO_PALETTE];

/**
 * Все доступные варианты, объединенные
 * Используется, когда компоненту требуется доступ ко всем типам вариантов
 */
export const ALL_VARIANTS = [
  ...SEMANTIC_VARIANTS,
  ...NEUTRAL_VARIANTS
] as const;

export type AllVariants = typeof ALL_VARIANTS[number];

/**
 * Вспомогательный тип для компонентов, поддерживающих как семантические варианты, так и стили
 */
export type VariantWithAppearance = {
  variant?: SemanticVariant | NeutralVariant;
  appearance?: AppearanceStyle;
};
