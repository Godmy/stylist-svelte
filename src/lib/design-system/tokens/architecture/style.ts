/** Border style tokens */
export const STYLE = ['solid', 'dashed', 'dotted', 'double', 'none'] as const;

export type Style = (typeof STYLE)[number];
