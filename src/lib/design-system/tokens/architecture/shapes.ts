/** Shapes grouped by usage */
export const SHAPES = {
	component: ['circle', 'square', 'rounded', 'pill'],
	geometric: ['circle', 'square', 'rectangle', 'rounded', 'pill', 'diamond', 'triangle']
} as const;

export type ComponentShape = (typeof SHAPES.component)[number];
export type Shape = (typeof SHAPES.geometric)[number];
