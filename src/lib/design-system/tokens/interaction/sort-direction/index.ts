export const TOKEN_SORT_DIRECTION = ['asc', 'desc', 'none'] as const;

export type TokenSortDirection = (typeof TOKEN_SORT_DIRECTION)[number];
