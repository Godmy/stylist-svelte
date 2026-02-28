/**
 * Marker tokens for list and indicator marker shapes.
 */
export const MARKERS = [
	'dot',
	'number',
	'letter',
	'check',
	'x',
	'arrow',
	'star'
] as const;

export type MarkerType = (typeof MARKERS)[number];
