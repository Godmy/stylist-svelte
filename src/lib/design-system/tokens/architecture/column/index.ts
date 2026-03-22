export const TOKEN_COLUMN = [2, 3, 4, 5, 6, 7, 8] as const;

export type TokenColumn = (typeof TOKEN_COLUMN)[number];
