/**
 * Breakpoint tokens - Responsive design breakpoints
 * Standardized screen width values for responsive layouts
 *
 * @example
 * ```ts
 * import { breakpoints } from '$stylist/design-system/tokens';
 *
 * const mediaQuery = `@media (min-width: ${breakpoints.md})`;
 * ```
 */

/**
 * Standard breakpoint values for responsive design
 * Following a mobile-first approach with common device widths
 *
 * @property {string} xs - Extra small screens (0px)
 * @property {string} sm - Small screens (640px)
 * @property {string} md - Medium screens (768px)
 * @property {string} lg - Large screens (1024px)
 * @property {string} xl - Extra large screens (1280px)
 * @property {string} '2xl' - 2x extra large screens (1536px)
 */
export const breakpoints = {
	xs: '0px',
	sm: '640px',
	md: '768px',
	lg: '1024px',
	xl: '1280px',
	'2xl': '1536px'
} as const;

/**
 * Type representing possible breakpoint values
 */
export type BreakpointKey = keyof typeof breakpoints;

/**
 * Breakpoint ranges for min-max queries
 * Useful for targeting specific screen size ranges
 */
export const breakpointRanges = {
	xs_sm: `(min-width: ${breakpoints.xs}) and (max-width: ${parseInt(breakpoints.sm as string) - 1}px)`,
	sm_md: `(min-width: ${breakpoints.sm}) and (max-width: ${parseInt(breakpoints.md as string) - 1}px)`,
	md_lg: `(min-width: ${breakpoints.md}) and (max-width: ${parseInt(breakpoints.lg as string) - 1}px)`,
	lg_xl: `(min-width: ${breakpoints.lg}) and (max-width: ${parseInt(breakpoints.xl as string) - 1}px)`,
	xl_2xl: `(min-width: ${breakpoints.xl}) and (max-width: ${parseInt((breakpoints['2xl'] as string)) - 1}px)`,
	'2xl_up': `(min-width: ${breakpoints['2xl']})`
} as const;

/**
 * Type representing possible breakpoint range values
 */
export type BreakpointRangeKey = keyof typeof breakpointRanges;