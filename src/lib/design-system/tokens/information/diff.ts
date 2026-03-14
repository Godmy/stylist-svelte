export const DIFF_LINE_TYPES = ['added', 'removed', 'unchanged'] as const;
export type DiffLineType = (typeof DIFF_LINE_TYPES)[number];
