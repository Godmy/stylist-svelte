/**
 * Семантические варианты и стили внешнего вида
 * Единый источник истины для вариантов компонентов в дизайн-системе
 */

/**
 * Основные семантические варианты - представляют назначение/роль компонента
 * Эти варианты сопоставляются с конкретными цветовыми палитрами и передают смысл
 */
export const SEMANTIC_VARIANTS = [
	'primary', // Основное действие или акцент (сопоставляется с синим)
	'secondary', // Второстепенное действие или меньший акцент (сопоставляется с серым)
	'success', // Успешное завершение или положительное состояние (сопоставляется с зеленым)
	'warning', // Предупреждение или осторожность (сопоставляется с оранжевым)
	'danger', // Опасное действие или состояние ошибки (сопоставляется с красным)
	'info' // Информационное сообщение (сопоставляется с бирюзовым)
] as const;

export type SemanticVariant = (typeof SEMANTIC_VARIANTS)[number];

/**
 * Стили визуального внешнего вида - определяют, как выглядит компонент
 * Эти стили определяют визуальное оформление независимо от семантического значения
 */
export const APPEARANCE_STYLES = [
	'solid', // Заполненный фон
	'outline', // Только граница
	'ghost', // Прозрачный, показывается при наведении
	'link', // Стилизован как гиперссылка
	'subtle' // Приглушенный, низкий контраст
] as const;

export type AppearanceStyle = (typeof APPEARANCE_STYLES)[number];

export type DefaultVariants = SemanticVariant | AppearanceStyle;

/**
 * Нейтральные варианты - без семантики, общего назначения
 */
export const NEUTRAL_VARIANTS = [
	'default', // Состояние по умолчанию/нейтральное
	'neutral' // Явно нейтральный (для значков, статусов)
] as const;

export type NeutralVariant = (typeof NEUTRAL_VARIANTS)[number];

/**
 * Состоянные варианты - для элементов форм и полей ввода
 */
export const STATE_VARIANTS = [
	'error', // Состояние ошибки для полей ввода
	'valid', // Состояние корректности/успеха для полей ввода
	'disabled' // Состояние отключения
] as const;

export type StateVariant = (typeof STATE_VARIANTS)[number];

/**
 * Варианты прогресса/потока - для пошаговых индикаторов, прогресса
 */
export const FLOW_VARIANTS = [
	'completed', // Завершенный шаг/этап
	'current', // Текущий/активный шаг
	'upcoming', // Будущий/ожидаемый шаг
	'skipped' // Пропущенный шаг
] as const;

export type FlowVariant = (typeof FLOW_VARIANTS)[number];

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

export type VariantPaletteName = (typeof VARIANT_TO_PALETTE)[keyof typeof VARIANT_TO_PALETTE];

/**
 * Все доступные варианты, объединенные
 * Используется, когда компоненту требуется доступ ко всем типам вариантов
 */
export const ALL_VARIANTS = [...SEMANTIC_VARIANTS, ...NEUTRAL_VARIANTS] as const;

export type AllVariants = (typeof ALL_VARIANTS)[number];

/**
 * Варианты для полей ввода - расширенный набор, включающий стили и состояния
 * Объединяет APPEARANCE_STYLES с дополнительными вариантами, специфичными для полей ввода
 */
export const INPUT_VARIANTS_EXTENDED = [
	...APPEARANCE_STYLES,
	'filled', // Заполненный стиль (для полей ввода)
	'outlined', // Обведенный стиль (для полей ввода)
	...SEMANTIC_VARIANTS, // Семантические варианты также могут использоваться в полях ввода
	...STATE_VARIANTS // Состояния также могут использоваться в полях ввода
] as const;

export const INPUT_VARIANTS = INPUT_VARIANTS_EXTENDED;

export type InputVariant = (typeof INPUT_VARIANTS_EXTENDED)[number];

/**
 * Общие цветовые варианты - для компонентов, использующих семантические цвета
 * Объединяет семантические варианты с дополнительными цветами
 */
export const COLOR_VARIANTS = [
	...SEMANTIC_VARIANTS,
	'gray' // Дополнительный цвет, часто используемый для нейтральных элементов
] as const;

export type ColorVariant = (typeof COLOR_VARIANTS)[number];

/**
 * Общие размеры компонентов - стандартные размеры для большинства интерактивных элементов
 */
export const COMMON_SIZES = [
	'sm', // Маленький
	'md', // Средний
	'lg' // Большой
] as const;

export type CommonSize = (typeof COMMON_SIZES)[number];

/**
 * Расширенные размеры - включая дополнительные размеры
 */
export const EXTENDED_SIZES = [
	...COMMON_SIZES,
	'xl' // Очень большой
] as const;

export type VariantExtendedSize = (typeof EXTENDED_SIZES)[number];

/**
 * Вспомогательный тип для компонентов, поддерживающих как семантические варианты, так и стили
 */
export type VariantWithAppearance = {
	variant?: SemanticVariant | NeutralVariant;
	appearance?: AppearanceStyle;
};
