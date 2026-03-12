/** Border style tokens */
export const STYLE = ['solid', 'dashed', 'dotted', 'double', 'none', 'bold', 'tapered', 'invisible'] as const;

export type Style = (typeof STYLE)[number];
