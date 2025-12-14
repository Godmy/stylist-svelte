/**
 * Layout Primitives
 * Common layout-related types and values used across components
 */

/**
 * Position values for absolute/relative positioning
 */
export const POSITIONS = ['top', 'bottom', 'left', 'right'] as const;
export type Position = typeof POSITIONS[number];

/**
 * Orientation for components that can be laid out in two directions
 */
export const ORIENTATIONS = ['horizontal', 'vertical'] as const;
export type Orientation = typeof ORIENTATIONS[number];

/**
 * Alignment options
 */
export const ALIGNMENTS = ['start', 'center', 'end', 'stretch'] as const;
export type Alignment = typeof ALIGNMENTS[number];

/**
 * Justification options
 */
export const JUSTIFICATIONS = ['start', 'center', 'end', 'between', 'around', 'evenly'] as const;
export type Justification = typeof JUSTIFICATIONS[number];

/**
 * 2D position interface for coordinate-based positioning
 */
export interface Position2D {
  x: number;
  y: number;
}

/**
 * Placement options combining position with alignment
 */
export type Placement =
  | 'top-start' | 'top' | 'top-end'
  | 'right-start' | 'right' | 'right-end'
  | 'bottom-start' | 'bottom' | 'bottom-end'
  | 'left-start' | 'left' | 'left-end';
