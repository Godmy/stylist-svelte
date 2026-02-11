/**
 * Gradient tokens - Standardized gradient definitions
 * Consistent gradient values for backgrounds and visual effects
 *
 * @example
 * ```ts
 * import { gradients } from '$stylist/design-system/tokens';
 *
 * const gradientStyle = {
 *   background: gradients.primary
 * };
 * ```
 */

/**
 * Standard gradient definitions for various use cases
 * Following consistent color combinations and directions
 *
 * @property {string} primary - Primary brand gradient
 * @property {string} secondary - Secondary brand gradient
 * @property {string} success - Success state gradient
 * @property {string} warning - Warning state gradient
 * @property {string} danger - Danger/error state gradient
 * @property {string} info - Info state gradient
 * @property {string} neutral - Neutral gradient
 * @property {string} sunset - Sunset-themed gradient
 * @property {string} ocean - Ocean-themed gradient
 * @property {string} forest - Forest-themed gradient
 * @property {string} cosmic - Cosmic-themed gradient
 */
export const gradients = {
	primary: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
	secondary: 'linear-gradient(135deg, #64748b 0%, #94a3b8 100%)',
	success: 'linear-gradient(135deg, #22c55e 0%, #86efac 100%)',
	warning: 'linear-gradient(135deg, #f59e0b 0%, #fde68a 100%)',
	danger: 'linear-gradient(135deg, #ef4444 0%, #fca5a5 100%)',
	info: 'linear-gradient(135deg, #06b6d4 0%, #7dd3fc 100%)',
	neutral: 'linear-gradient(135deg, #6b7280 0%, #d1d5db 100%)',
	sunset: 'linear-gradient(135deg, #f97316 0%, #ec4899 100%)',
	ocean: 'linear-gradient(135deg, #0ea5e9 0%, #8b5cf6 100%)',
	forest: 'linear-gradient(135deg, #22c55e 0%, #14b8a6 100%)',
	cosmic: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)'
} as const;

/**
 * Directional gradient variations
 * Gradients with different angle directions
 *
 * @property {string} horizontal - Left to right gradient
 * @property {string} vertical - Top to bottom gradient
 * @property {string} diagonal - Diagonal gradient (top-left to bottom-right)
 * @property {string} reverseDiagonal - Reverse diagonal gradient (top-right to bottom-left)
 */
export const directionalGradients = {
	horizontal: 'linear-gradient(to right, var(--gradient-start), var(--gradient-end))',
	vertical: 'linear-gradient(to bottom, var(--gradient-start), var(--gradient-end))',
	diagonal: 'linear-gradient(135deg, var(--gradient-start), var(--gradient-end))',
	reverseDiagonal: 'linear-gradient(-135deg, var(--gradient-start), var(--gradient-end))'
} as const;

/**
 * Radial gradient variations
 * Circular gradients for specific visual effects
 *
 * @property {string} center - Radial gradient centered
 * @property {string} corner - Radial gradient from corner
 */
export const radialGradients = {
	center: 'radial-gradient(circle at center, var(--gradient-inner), var(--gradient-outer))',
	corner: 'radial-gradient(circle at corner, var(--gradient-inner), var(--gradient-outer))'
} as const;

/**
 * Type representing possible gradient values
 */
export type GradientKey = keyof typeof gradients;

/**
 * Type representing possible directional gradient values
 */
export type DirectionalGradientKey = keyof typeof directionalGradients;

/**
 * Type representing possible radial gradient values
 */
export type RadialGradientKey = keyof typeof radialGradients;