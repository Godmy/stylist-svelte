/**
 * Architecture z-index tokens for layering and stacking context.
 * Standardized values prevent overlap conflicts across layout surfaces.
 *
 * @example
 * ```ts
 * import { Z_INDEX } from '$stylist/design-system/tokens';
 *
 * const modalStyle = {
 *   Z_INDEX: Z_INDEX.modal
 * };
 * ```
 */

/**
 * Standard z-index values for different UI layers
 * Following a consistent scale to maintain proper stacking order
 *
 * @property {number} auto - Automatic z-index (default)
 * @property {number} base - Base layer (0)
 * @property {number} docked - Docked elements like sidebars (10)
 * @property {number} dropdown - Dropdown menus and selects (1000)
 * @property {number} sticky - Sticky headers and footers (1100)
 * @property {number} banner - Banners and notifications (1200)
 * @property {number} overlay - Overlays and backdrops (1300)
 * @property {number} modal - Modal dialogs (1400)
 * @property {number} popover - Popovers and tooltips (1500)
 * @property {number} skipLink - Skip link for accessibility (1600)
 * @property {number} toast - Toast notifications (1700)
 */
export const Z_INDEX = {
	auto: 'auto',
	base: '0',
	docked: '10',
	dropdown: '1000',
	sticky: '1100',
	banner: '1200',
	overlay: '1300',
	modal: '1400',
	popover: '1500',
	skipLink: '1600',
	toast: '1700'
} as const;

/**
 * Type representing possible z-index values
 */
export type ZIndexKey = keyof typeof Z_INDEX;
