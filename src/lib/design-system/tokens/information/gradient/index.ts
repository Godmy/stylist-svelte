export const TOKEN_GRADIENT = ['dynamic', 'static', 'particles'] as const;

export type TokenGradient = (typeof TOKEN_GRADIENT)[number];
