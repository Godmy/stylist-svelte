import type { TooltipProps, TooltipPlacement } from '../props/tooltip';
import type { HTMLAttributes } from 'svelte/elements';

type TooltipStateProps = TooltipProps & HTMLAttributes<HTMLElement>;

/**
 * Unified Tooltip state creator
 * Provides reactive state management using Svelte 5 runes
 *
 * @param props - Tooltip component props
 * @returns Reactive state object with classes, visibility, and event handlers
 */
export function createTooltipState(props: TooltipStateProps) {
	// Extract props with defaults
	const content = $derived(props.content);
	const placement = $derived(props.placement ?? 'top');
	const trigger = $derived(props.trigger ?? 'hover');
	const variant = $derived(props.variant ?? 'default');
	const disabled = $derived(props.disabled ?? false);
	const delay = $derived(props.delay ?? 0);
	const hideDelay = $derived(props.hideDelay ?? 0);
	const controlledShow = $derived(props.show);
	const className = $derived(props.class ?? '');
	const tooltipClassName = $derived(props.tooltipClass ?? '');
	const arrowClassName = $derived(props.arrowClass ?? '');

	// Internal visibility state (for uncontrolled mode)
	let internalVisible = $state(false);

	// Determine if tooltip is visible (controlled or uncontrolled)
	const isVisible = $derived(controlledShow !== undefined ? controlledShow : internalVisible);

	// Timeout IDs for delayed show/hide
	let showTimeoutId: ReturnType<typeof setTimeout> | null = null;
	let hideTimeoutId: ReturnType<typeof setTimeout> | null = null;

	// Show tooltip with delay
	function showTooltip() {
		if (disabled || controlledShow !== undefined) return;

		if (hideTimeoutId) {
			clearTimeout(hideTimeoutId);
			hideTimeoutId = null;
		}

		if (delay > 0) {
			showTimeoutId = setTimeout(() => {
				internalVisible = true;
				props.onShow?.();
			}, delay);
		} else {
			internalVisible = true;
			props.onShow?.();
		}
	}

	// Hide tooltip with delay
	function hideTooltip() {
		if (controlledShow !== undefined) return;

		if (showTimeoutId) {
			clearTimeout(showTimeoutId);
			showTimeoutId = null;
		}

		if (hideDelay > 0) {
			hideTimeoutId = setTimeout(() => {
				internalVisible = false;
				props.onHide?.();
			}, hideDelay);
		} else {
			internalVisible = false;
			props.onHide?.();
		}
	}

	// Toggle tooltip visibility
	function toggleTooltip() {
		if (isVisible) {
			hideTooltip();
		} else {
			showTooltip();
		}
	}

	// Handle click outside for click trigger
	function setupClickOutsideListener(referenceEl: HTMLElement | null, tooltipEl: HTMLElement | null) {
		if (trigger === 'click' && isVisible && referenceEl && tooltipEl) {
			const handleClickOutside = (event: MouseEvent) => {
				if (
					!referenceEl.contains(event.target as Node) &&
					!tooltipEl.contains(event.target as Node)
				) {
					hideTooltip();
				}
			};

			document.addEventListener('click', handleClickOutside);
			return () => document.removeEventListener('click', handleClickOutside);
		}
		return () => {};
	}

	// Compute position classes
	const positionClasses = $derived(() => {
		const base = 'absolute z-50';
		const positions: Record<TooltipPlacement, string> = {
			top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
			'top-start': 'bottom-full left-0 mb-2',
			'top-end': 'bottom-full right-0 mb-2',
			bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
			'bottom-start': 'top-full left-0 mt-2',
			'bottom-end': 'top-full right-0 mt-2',
			left: 'right-full top-1/2 -translate-y-1/2 mr-2',
			'left-start': 'right-full top-0 mr-2',
			'left-end': 'right-full bottom-0 mr-2',
			right: 'left-full top-1/2 -translate-y-1/2 ml-2',
			'right-start': 'left-full top-0 ml-2',
			'right-end': 'left-full bottom-0 ml-2'
		};
		return `${base} ${positions[placement]}`;
	});

	// Compute tooltip content classes based on variant
	const tooltipClasses = $derived(() => {
		const baseClasses = variant === 'simple'
			? 'px-3 py-2 text-sm font-medium rounded-lg shadow-sm bg-[--color-tooltip-bg] text-[--color-text-inverse]'
			: 'px-2 py-1 text-xs text-white bg-gray-900 rounded whitespace-nowrap';

		return `${positionClasses()} ${baseClasses} ${tooltipClassName}`.trim();
	});

	// Compute arrow classes based on placement and variant
	const arrowClasses = $derived(() => {
		if (variant !== 'with-arrow') return '';

		const arrowBase = 'absolute w-2 h-2 bg-gray-900 transform rotate-45';
		const arrowPositions: Record<TooltipPlacement, string> = {
			top: 'top-full left-1/2 -translate-x-1/2 -mt-1',
			'top-start': 'top-full left-2 -mt-1',
			'top-end': 'top-full right-2 -mt-1',
			bottom: 'bottom-full left-1/2 -translate-x-1/2 -mb-1',
			'bottom-start': 'bottom-full left-2 -mb-1',
			'bottom-end': 'bottom-full right-2 -mb-1',
			left: 'left-full top-1/2 -translate-y-1/2 -ml-1',
			'left-start': 'left-full top-2 -ml-1',
			'left-end': 'left-full bottom-2 -ml-1',
			right: 'right-full top-1/2 -translate-y-1/2 -mr-1',
			'right-start': 'right-full top-2 -mr-1',
			'right-end': 'right-full bottom-2 -mr-1'
		};
		return `${arrowBase} ${arrowPositions[placement]} ${arrowClassName}`.trim();
	});

	// Container classes
	const containerClasses = $derived(`relative inline-block ${className}`.trim());

	// Trigger classes
	const triggerClasses = $derived(
		'cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2'
	);

	// Cleanup on destroy
	$effect(() => {
		return () => {
			if (showTimeoutId) clearTimeout(showTimeoutId);
			if (hideTimeoutId) clearTimeout(hideTimeoutId);
		};
	});

	return {
		get content() {
			return content;
		},
		get placement() {
			return placement;
		},
		get trigger() {
			return trigger;
		},
		get variant() {
			return variant;
		},
		get disabled() {
			return disabled;
		},
		get delay() {
			return delay;
		},
		get hideDelay() {
			return hideDelay;
		},
		get isVisible() {
			return isVisible;
		},
		get containerClasses() {
			return containerClasses;
		},
		get triggerClasses() {
			return triggerClasses;
		},
		get tooltipClasses() {
			return tooltipClasses;
		},
		get arrowClasses() {
			return arrowClasses;
		},
		showTooltip,
		hideTooltip,
		toggleTooltip,
		setupClickOutsideListener
	};
}

export default createTooltipState;
