import type { TokenBreakpoint } from '$stylist/layout/type/enum/breakpoint';

/**
 * Минимальная ширина экрана для каждого breakpoint.
 * Используется для документации и в inline-style container queries.
 */
export const RECORD_BREAKPOINT_SCREEN: Record<TokenBreakpoint, string> = {
	xs: '0px',
	sm: '640px',
	md: '768px',
	lg: '1024px',
	xl: '1280px',
	'2xl': '1536px'
};
