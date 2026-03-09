export const DURATION = {
	0: '0ms',
	75: '75ms',
	100: '100ms',
	150: '150ms',
	200: '200ms',
	300: '300ms',
	400: '400ms',
	500: '500ms',
	700: '700ms',
	1000: '1000ms'
} as const;

export type DurationKey = keyof typeof DURATION;
