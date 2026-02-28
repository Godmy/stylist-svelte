/** Table cell variants */
export const TABLE_CELLS = ['header', 'data'] as const;
export type TableCell = (typeof TABLE_CELLS)[number];
