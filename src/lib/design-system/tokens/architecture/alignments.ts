/** Alignment tokens */
export const ALIGNMENTS = [
	'top',
	'top-center',
	'top-start',
	'top-end',
	'bottom',
	'bottom-center',
	'bottom-start',
	'bottom-end',
	'left',
	'left-center',
	'left-start',
	'left-end',
	'right',
	'right-center',
	'right-start',
	'right-end',
	'center',
	'justify'
] as const;
export type Alignment = (typeof ALIGNMENTS)[number];

export type DividerAlign = Extract<Alignment, 'left' | 'center' | 'right'>;
export type TextAlign = Alignment;

/** Justification tokens */
export const JUSTIFICATIONS = ['stretch', 'baseline', 'between', 'around', 'evenly', 'justify'] as const;
export type Justification = (typeof JUSTIFICATIONS)[number];


