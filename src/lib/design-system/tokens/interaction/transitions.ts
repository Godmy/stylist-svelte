/**
 * Transition tokens - Duration, easing, and animation properties
 * Standardized values for smooth and consistent animations across the design system
 *
 * @example
 * ```ts
 * import { transitionDuration, transitionEasing } from '$stylist/design-system/tokens';
 *
 * const fadeInStyle = {
 *   transition: `opacity ${transitionDuration.fast} ${transitionEasing.easeInOut}`
 * };
 * ```
 */

/**
 * Standard duration values for transitions and animations
 * Following a consistent scale for different types of animations
 *
 * @property {string} none - No duration (instant change)
 * @property {string} fastest - Very quick transition (75ms)
 * @property {string} faster - Quick transition (100ms)
 * @property {string} fast - Moderately quick transition (150ms)
 * @property {string} normal - Standard transition (200ms)
 * @property {string} slow - Moderately slow transition (300ms)
 * @property {string} slower - Slow transition (400ms)
 * @property {string} slowest - Very slow transition (500ms)
 */
export const transitionDuration = {
	none: '0ms',
	fastest: '75ms',
	faster: '100ms',
	fast: '150ms',
	normal: '200ms',
	slow: '300ms',
	slower: '400ms',
	slowest: '500ms'
} as const;

/**
 * Easing functions for smooth transitions
 * Predefined timing functions for consistent animation curves
 *
 * @property {string} easeLinear - Linear easing (no acceleration/deceleration)
 * @property {string} easeIn - Ease in (slow start, fast end)
 * @property {string} easeOut - Ease out (fast start, slow end)
 * @property {string} easeInOut - Ease in and out (slow start and end)
 * @property {string} easeInQuad - Quadratic ease in
 * @property {string} easeOutQuad - Quadratic ease out
 * @property {string} easeInOutQuad - Quadratic ease in and out
 * @property {string} easeInCubic - Cubic ease in
 * @property {string} easeOutCubic - Cubic ease out
 * @property {string} easeInOutCubic - Cubic ease in and out
 */
export const transitionEasing = {
	easeLinear: 'linear',
	easeIn: 'cubic-bezier(0.42, 0, 1, 1)',
	easeOut: 'cubic-bezier(0, 0, 0.58, 1)',
	easeInOut: 'cubic-bezier(0.42, 0, 0.58, 1)',
	easeInQuad: 'cubic-bezier(0.55, 0.085, 0.68, 0.53)',
	easeOutQuad: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
	easeInOutQuad: 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
	easeInCubic: 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
	easeOutCubic: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
	easeInOutCubic: 'cubic-bezier(0.645, 0.045, 0.355, 1)'
} as const;

/**
 * Standard transition presets combining duration and easing
 * Ready-to-use transition configurations for common animation needs
 *
 * @property {string} instant - No transition
 * @property {string} quick - Fast transition with ease-in-out
 * @property {string} smooth - Moderate transition with ease-in-out
 * @property {string} gentle - Slower transition with ease-in-out
 * @property {string} emphasized - Emphasized transition with custom cubic-bezier
 */
export const transition = {
	instant: `all ${transitionDuration.none} ${transitionEasing.easeInOut}`,
	quick: `all ${transitionDuration.fast} ${transitionEasing.easeInOut}`,
	smooth: `all ${transitionDuration.normal} ${transitionEasing.easeInOut}`,
	gentle: `all ${transitionDuration.slow} ${transitionEasing.easeInOut}`,
	emphasized: `all ${transitionDuration.slower} cubic-bezier(0.2, 0, 0, 1)`
} as const;

/**
 * Types representing possible transition duration values
 */
export type TransitionDurationKey = keyof typeof transitionDuration;

/**
 * Types representing possible transition easing values
 */
export type TransitionEasingKey = keyof typeof transitionEasing;

/**
 * Types representing possible transition preset values
 */
export type TransitionKey = keyof typeof transition;