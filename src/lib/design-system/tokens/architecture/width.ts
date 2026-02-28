/** Width tokens grouped by scale */
export const WIDTH = {
	small: {
		0: '0',
		1: '1px',
		2: '2px',
		4: '4px',
		8: '8px'
	},
	large: {
		sm: '640px',
		md: '768px',
		lg: '1024px',
		xl: '1280px',
		'2xl': '1536px',
		none: 'none'
	},
	percentage: {
		full: '100%'
	}
} as const;

export type WidthGroup = keyof typeof WIDTH;
export type WidthKey = keyof typeof WIDTH.small | keyof typeof WIDTH.large | keyof typeof WIDTH.percentage;
