/** Direction tokens used across ports */
export const DIRECTIONS = ['input', 'output'] as const;
export type Direction = (typeof DIRECTIONS)[number];
