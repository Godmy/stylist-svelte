import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';

export interface SlotMenuItem {
	/**
	 * Whether the menu item is active
	 * @default false
	 */
	active?: boolean;

	/**
	 * Variant of the menu item
	 * @default 'default'
	 */
	variant?: TokenAppearance;

	/**
	 * Link URL for the menu item
	 */
	href?: string;

	/**
	 * Icon name for the menu item
	 */
	icon?: string;

	/**
	 * Whether the menu item is disabled
	 * @default false
	 */
	disabled?: boolean;

	/**
	 * Whether the link opens in a new tab
	 * @default false
	 */
	external?: boolean;

	/**
	 * Children snippet for the menu item
	 */
	/**
	 * Additional CSS classes
	 */
	class?: string;

	/**
	 * Canonical callback fired when the menu item receives value interaction
	 */
	onValueInput?: (event: MouseEvent) => void;

	/**
	 * Canonical callback fired when the menu item value is changed
	 */
	onValueChange?: (event: MouseEvent) => void;

	/**
	 * @deprecated use onValueChange
	 */
	onClick?: (event: MouseEvent) => void;
}
