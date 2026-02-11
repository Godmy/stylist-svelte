/**
 * Opacity tokens - Standardized transparency values
 * Consistent opacity levels for various UI states and effects
 *
 * @example
 * ```ts
 * import { opacity } from '$stylist/design-system/tokens';
 *
 * const disabledStyle = {
 *   opacity: opacity.disabled
 * };
 * ```
 */

/**
 * Standard opacity values for different UI states
 * Following a consistent scale for transparency effects
 *
 * @property {string} 0 - Completely transparent (0%)
 * @property {string} 5 - Very low opacity (5%)
 * @property {string} 10 - Low opacity (10%)
 * @property {string} 20 - Light opacity (20%)
 * @property {string} 25 - Quarter opacity (25%)
 * @property {string} 30 - Moderate low opacity (30%)
 * @property {string} 40 - Moderate opacity (40%)
 * @property {string} 50 - Half opacity (50%)
 * @property {string} 60 - Moderate high opacity (60%)
 * @property {string} 70 - High opacity (70%)
 * @property {string} 75 - Three quarters opacity (75%)
 * @property {string} 80 - Very high opacity (80%)
 * @property {string} 90 - Almost opaque (90%)
 * @property {string} 95 - Very slight transparency (95%)
 * @property {string} 100 - Completely opaque (100%)
 */
export const opacity = {
	0: '0',
	5: '0.05',
	10: '0.1',
	20: '0.2',
	25: '0.25',
	30: '0.3',
	40: '0.4',
	50: '0.5',
	60: '0.6',
	70: '0.7',
	75: '0.75',
	80: '0.8',
	90: '0.9',
	95: '0.95',
	100: '1'
} as const;

/**
 * Semantic opacity values for specific use cases
 * Named values for common opacity applications
 *
 * @property {string} disabled - Opacity for disabled elements
 * @property {string} loading - Opacity for loading states
 * @property {string} subtle - Subtle opacity for secondary elements
 * @property {string} hover - Opacity adjustment for hover states
 * @property {string} focus - Opacity adjustment for focus states
 */
export const semanticOpacity = {
	disabled: opacity[50],
	loading: opacity[70],
	subtle: opacity[70],
	hover: opacity[80],
	focus: opacity[90]
} as const;

/**
 * Type representing possible opacity values
 */
export type OpacityKey = keyof typeof opacity;

/**
 * Type representing possible semantic opacity values
 */
export type SemanticOpacityKey = keyof typeof semanticOpacity;