import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';
import type { Alignment } from '$stylist/design-system/tokens/architecture/alignments';
import type { TooltipTrigger } from '$stylist/design-system/tokens/interaction/triggers';

import type { TooltipPlacement, TooltipVariant } from '$stylist/design-system/tokens/interaction/tooltip';
/**
 * Unified Tooltip props following SOLID principles
 */
export interface TooltipProps extends HTMLAttributes<HTMLElement> {
	/**
	 * Content to display in the tooltip
	 */
	content: string | Snippet;

	/**
	 * Placement of the tooltip relative to the trigger
	 * @default 'top'
	 */
	placement?: TooltipPlacement;

	/**
	 * Trigger mechanism for showing the tooltip
	 * @default 'hover'
	 */
	trigger?: TooltipTrigger;

	/**
	 * Visual variant of the tooltip
	 * @default 'default'
	 */
	variant?: TooltipVariant;

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
	children?: Snippet;

	/**
	 * Callback when tooltip is shown
	 */
	onShow?: () => void;

	/**
	 * Callback when tooltip is hidden
	 */
	onHide?: () => void;
}



