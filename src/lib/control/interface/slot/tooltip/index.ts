import type { Snippet } from 'svelte';
import type { TokenAlignment } from '$stylist/layout/type/alias/alignment';
import type { TokenConnector } from '$stylist/architecture/type/alias/connector';
import type { TokenTrigger } from '$stylist/interaction/type/record/trigger';

/**
 * Unified Tooltip props following SOLID principles
 */
export interface SlotTooltip {
	/**
	 * Content to display in the tooltip
	 */
	content: string | Snippet;

	/**
	 * Placement of the tooltip relative to the trigger
	 * @default 'top'
	 */
	placement?: TokenAlignment;

	/**
	 * Trigger mechanism for showing the tooltip
	 * @default 'hover'
	 */
	trigger?: TokenTrigger;

	/**
	 * Visual variant of the tooltip
	 * @default 'default'
	 */
	variant?: TokenConnector;

	/**
	 * Whether the tooltip is shown (controlled mode)
	 * @default undefined (uncontrolled)
	 */
	show?: boolean;

	/**
	 * Additional CSS classes for the container
	 */
	class?: string;

	/**
	 * Additional CSS classes for the tooltip content
	 */
	tooltipClass?: string;

	/**
	 * Additional CSS classes for the arrow (only for with-arrow variant)
	 */
	arrowClass?: string;

	/**
	 * Whether the tooltip is disabled
	 * @default false
	 */
	disabled?: boolean;

	/**
	 * Delay in milliseconds before showing the tooltip
	 * @default 0
	 */
	delay?: number;

	/**
	 * Hide delay in milliseconds before hiding the tooltip
	 * @default 0
	 */
	hideDelay?: number;

	/**
	 * Children snippet for the trigger element
	 */
	/**
	 * Callback when tooltip is shown
	 */
	onShow?: () => void;

	/**
	 * Callback when tooltip is hidden
	 */
	onHide?: () => void;
}
