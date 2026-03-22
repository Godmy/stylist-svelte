export const TOKEN_DENSITY = ['default', 'compact', 'spacious'] as const;

export type TokenDensity = (typeof TOKEN_DENSITY)[number];
