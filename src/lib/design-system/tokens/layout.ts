/**
 * Примитивы компоновки
 * Общие типы и значения, связанные с компоновкой, используемые в компонентах
 */

/**
 * Значения позиции для абсолютного/относительного позиционирования
 */
export const POSITIONS = ['top', 'bottom', 'left', 'right'] as const;
export type Position = typeof POSITIONS[number];

/**
 * Ориентация для компонентов, которые могут быть расположены в двух направлениях
 */
export const ORIENTATIONS = ['horizontal', 'vertical'] as const;
export type Orientation = typeof ORIENTATIONS[number];

/**
 * Варианты выравнивания
 */
export const ALIGNMENTS = ['start', 'center', 'end', 'stretch'] as const;
export type Alignment = typeof ALIGNMENTS[number];

/**
 * Варианты justification (распределения пространства)
 */
export const JUSTIFICATIONS = ['start', 'center', 'end', 'between', 'around', 'evenly'] as const;
export type Justification = typeof JUSTIFICATIONS[number];

/**
 * Интерфейс 2D позиции для координатного позиционирования
 */
export interface Position2D {
  x: number;
  y: number;
}

/**
 * Варианты размещения, объединяющие позицию с выравниванием
 */
export type Placement =
  | 'top-start' | 'top' | 'top-end'
  | 'right-start' | 'right' | 'right-end'
  | 'bottom-start' | 'bottom' | 'bottom-end'
  | 'left-start' | 'left' | 'left-end';
