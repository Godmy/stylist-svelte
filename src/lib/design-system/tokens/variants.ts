/**
 * Семантические варианты и стили внешнего вида
 * Единый источник истины для вариантов компонентов в дизайн-системе
 */

import type { CompactSize, ComponentSize } from './sizes';

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

export type DefaultVariants = SemanticVariant | AppearanceStyle | NeutralVariant | 'dark' | 'light';

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
	'disabled', // Состояние отключения
	'readonly', // Состояние поля только для чтения без ввода
	'loading' // Состояние загрузки
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
export const INPUT_VARIANTS = [
	...APPEARANCE_STYLES,
	'filled', // Заполненный стиль (для полей ввода)
	'outlined', // Обведенный стиль (для полей ввода)
	...SEMANTIC_VARIANTS, // Семантические варианты также могут использоваться в полях ввода
	...STATE_VARIANTS, // Состояния также могут использоваться в полях ввода
	...NEUTRAL_VARIANTS // Нейтральные варианты также могут использоваться в полях ввода
] as const;

export type InputVariant = (typeof INPUT_VARIANTS)[number];

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
 * Общий размер компонентов - стандартные размеры для большинства элементов
 * Использует те же значения, что и COMPACT_SIZE_SCALE из sizes.ts
 */
export type CommonSize = CompactSize;

/**
 * Расширенный размер для компонентов - включает стандартные размеры и дополнительные
 */
export type VariantExtendedSize = ComponentSize | 'xl';

/**
 * Вспомогательный тип для компонентов, поддерживающих как семантические варианты, так и стили
 */
export type VariantWithAppearance = {
	variant?: SemanticVariant | NeutralVariant;
	appearance?: AppearanceStyle;
};

/**
 * Варианты бейджей - определяют визуальное оформление бейджей
 */
export const BADGE_VARIANTS = [
	'default',  // Нейтральный стиль
	'primary',  // Основной акцентный стиль
	'secondary', // Второстепенный стиль
	'success',  // Стиль успеха
	'warning',  // Стиль предупреждения
	'danger',   // Стиль опасности/ошибки
	'error',    // Стиль ошибки (альтернатива danger)
	'info',     // Информационный стиль
	'gray'      // Нейтральный серый стиль
] as const;

export type BadgeVariant = (typeof BADGE_VARIANTS)[number];

/**
 * Варианты для блоков кода - определяют визуальное представление кода
 */
export const CODE_BLOCK_VARIANTS = [
	'default',  // Стандартный вид блока кода
	'terminal', // Терминальный стиль (обычно черный фон с зеленым текстом)
	'diff'      // Стиль для отображения различий (обычно с цветовой индикацией изменений)
] as const;

export type CodeBlockVariant = (typeof CODE_BLOCK_VARIANTS)[number];

/**
 * Варианты компоновки потока сообщений.
 */
export const MESSAGE_THREAD_VARIANTS = ['default', 'compact', 'spacious'] as const;
export type MessageThreadVariant = (typeof MESSAGE_THREAD_VARIANTS)[number];

/**
 * Варианты скелетона.
 */
export const SKELETON_VARIANTS = ['text', 'circular', 'rectangular'] as const;
export type SkeletonVariant = (typeof SKELETON_VARIANTS)[number];

/**
 * Варианты ячейки таблицы.
 */
export const TABLE_CELL_VARIANTS = ['header', 'data'] as const;
export type TableCellVariant = (typeof TABLE_CELL_VARIANTS)[number];
