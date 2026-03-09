export const SORT_DIRECTIONS = ['asc', 'desc', 'none'] as const;

export type SortDirection = (typeof SORT_DIRECTIONS)[number];

