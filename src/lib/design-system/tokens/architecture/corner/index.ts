export const TOKEN_CORNER = ['rounded', 'sharp'] as const;

export type TokenCorner = (typeof TOKEN_CORNER)[number];
