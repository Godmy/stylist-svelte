export const TOKEN_BORDER_STYLE = ['solid', 'dashed', 'dotted', 'double', 'none', 'bold', 'tapered', 'invisible'] as const;

export type TokenBorderStyle = (typeof TOKEN_BORDER_STYLE)[number];
