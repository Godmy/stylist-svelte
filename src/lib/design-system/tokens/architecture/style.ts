/** Border style tokens */
export const STYLE = {
	solid: 'solid',
	dashed: 'dashed',
	dotted: 'dotted',
	double: 'double',
	none: 'none'
} as const;

export type Style = (typeof STYLE)[keyof typeof STYLE];
