/**
 * Примитивы компоновки
 * Общие типы и значения, связанные с компоновкой, используемые в компонентах
 *
 * @example
 * ```ts
 * import { POSITIONS, ORIENTATIONS, ALIGNMENTS } from '$stylist/design-system/tokens';
 *
 * const position = POSITIONS[0]; // 'top'
 * const orientation = ORIENTATIONS[0]; // 'horizontal'
 * ```
 */

/**
 * Значения позиции для абсолютного/относительного позиционирования
 *
 * @example
 * ```ts
 * const positions = POSITIONS; // ['top', 'bottom', 'left', 'right']
 * ```
 */
export const POSITIONS = ['top', 'bottom', 'left', 'right'] as const;
export type Position = (typeof POSITIONS)[number];

/**
 * Ориентация для компонентов, которые могут быть расположены в двух направлениях
 *
 * @example
 * ```ts
 * const orientations = ORIENTATIONS; // ['horizontal', 'vertical']
 * ```
 */
export const ORIENTATIONS = ['horizontal', 'vertical'] as const;
export type Orientation = (typeof ORIENTATIONS)[number];

/**
 * Варианты выравнивания
 *
 * @example
 * ```ts
 * const alignments = ALIGNMENTS; // ['start', 'center', 'end', 'stretch']
 * ```
 */
export const ALIGNMENTS = ['start', 'center', 'end', 'stretch'] as const;
export type Alignment = (typeof ALIGNMENTS)[number];

/**
 * Варианты justification (распределения пространства)
 *
 * @example
 * ```ts
 * const justifications = JUSTIFICATIONS; // ['start', 'center', 'end', 'between', 'around', 'evenly']
 * ```
 */
export const JUSTIFICATIONS = ['start', 'center', 'end', 'between', 'around', 'evenly'] as const;
export type Justification = (typeof JUSTIFICATIONS)[number];

/**
 * Интерфейс 2D позиции для координатного позиционирования
 *
 * @example
 * ```ts
 * const position: Position2D = { x: 10, y: 20 };
 * ```
 */
export interface Position2D {
	x: number;
	y: number;
}

/**
 * Варианты размещения, объединяющие позицию с выравниванием
 *
 * @example
 * ```ts
 * const placement: Placement = 'top-start';
 * ```
 */
export type Placement =
	| 'top-start'
	| 'top'
	| 'top-end'
	| 'right-start'
	| 'right'
	| 'right-end'
	| 'bottom-start'
	| 'bottom'
	| 'bottom-end'
	| 'left-start'
	| 'left'
	| 'left-end';
