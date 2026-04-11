import type { TokenBreakpoint } from '$stylist/layout/type/enum/breakpoint';

/**
 * Tailwind responsive префикс для каждого breakpoint.
 * xs — мобильная база (mobile-first), префикса нет.
 */
export const RECORD_BREAKPOINT_PREFIX: Record<TokenBreakpoint, string> = {
	xs: '',
	sm: 'sm:',
	md: 'md:',
	lg: 'lg:',
	xl: 'xl:',
	'2xl': '2xl:'
};
