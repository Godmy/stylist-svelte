/** Divider alignment tokens */
export const DIVIDER_ALIGNS = ['start', 'center', 'end'] as const;
export type DividerAlign = (typeof DIVIDER_ALIGNS)[number];
