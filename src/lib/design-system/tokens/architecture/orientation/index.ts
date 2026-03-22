export const TOKEN_ORIENTATION = ['horizontal', 'vertical'] as const;

export type TokenOrientation = (typeof TOKEN_ORIENTATION)[number];
