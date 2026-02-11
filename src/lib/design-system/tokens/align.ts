/**
 * Alignment tokens
 * Shared alignment options for layout primitives.
 */

/**
 * Stack (flex align-items) alignment options.
 * Use these for cross-axis alignment in flex-based layouts.
 */
export const STACK_ALIGNMENTS = ['start', 'center', 'end', 'stretch', 'baseline'] as const;
export type StackAlign = (typeof STACK_ALIGNMENTS)[number];

/**
 * Text alignment options for inline content.
 * This is intentionally minimal and CSS-aligned.
 */
export const TEXT_ALIGNMENTS = ['left', 'center', 'right', 'justify'] as const;
export type TextAlign = (typeof TEXT_ALIGNMENTS)[number];
