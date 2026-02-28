/** Text alignment tokens */
export const TEXT_ALIGNMENTS = ['left', 'center', 'right', 'justify'] as const;
export type TextAlign = (typeof TEXT_ALIGNMENTS)[number];
