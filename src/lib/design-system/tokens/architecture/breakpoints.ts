/** Breakpoint tokens */
export const BREAKPOINTS = {
	xs: '0px',
	sm: '640px',
	md: '768px',
	lg: '1024px',
	xl: '1280px',
	'2xl': '1536px'
} as const;

export type BreakpointKey = keyof typeof BREAKPOINTS;
