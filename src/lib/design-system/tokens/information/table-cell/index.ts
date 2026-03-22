export const TOKEN_TABLE_CELL = ['header', 'data'] as const;

export type TokenTableCell = (typeof TOKEN_TABLE_CELL)[number];
