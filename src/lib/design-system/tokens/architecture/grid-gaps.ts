/** Grid gap tokens */
export const GRID_GAPS = {
	0: '0',
	2: '0.5rem',
	4: '1rem',
	6: '1.5rem',
	8: '2rem',
	12: '3rem'
} as const;

export type GridGapKey = keyof typeof GRID_GAPS;
