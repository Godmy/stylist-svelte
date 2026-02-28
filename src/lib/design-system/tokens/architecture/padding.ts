/** Padding tokens */
export const PADDING = {
	sm: '1rem',
	md: '1.5rem',
	lg: '2rem',
	xl: '3rem'
} as const;

export type PaddingKey = keyof typeof PADDING;
