/** Positioning tokens */
export const POSITIONS = ['top', 'bottom', 'left', 'right'] as const;
export type Position = (typeof POSITIONS)[number];

export interface Position2D {
	x: number;
	y: number;
}

export type Placement =
	| 'top-start'
	| 'top'
	| 'top-end'
	| 'right-start'
	| 'right'
	| 'right-end'
	| 'bottom-start'
	| 'bottom'
	| 'bottom-end'
	| 'left-start'
	| 'left'
	| 'left-end';
