/** Alignment tokens */
export const ALIGNMENTS = ['start', 'center', 'end', 'stretch', 'baseline'] as const;
export type Alignment = (typeof ALIGNMENTS)[number];
