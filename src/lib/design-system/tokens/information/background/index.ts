export const TOKEN_BACKGROUND = ['default', 'gradient', 'particles', 'image'] as const;

export type TokenBackground = (typeof TOKEN_BACKGROUND)[number];
