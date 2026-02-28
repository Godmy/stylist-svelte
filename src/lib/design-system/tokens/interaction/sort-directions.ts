export const SORT_DIRECTIONS = ['asc', 'desc', null] as const;

export type SortDirection = (typeof SORT_DIRECTIONS)[number];
