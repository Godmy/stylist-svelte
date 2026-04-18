import type { SlotTooltip as TooltipProps } from '$stylist/control/interface/slot/tooltip';
import type { HTMLAttributes } from 'svelte/elements';
import type { TokenAlignment } from '$stylist/layout/type/enum/alignment';

type TooltipStateProps = TooltipProps & HTMLAttributes<HTMLElement>;

function normalizePlacement(
	placement: TokenAlignment
): 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end' | 'right' | 'right-start' | 'right-end' {
	switch (placement) {
		case 'top':
		case 'top-center':
			return 'top';
		case 'top-start':
		case 'left-start':
			return 'top-start';
		case 'top-end':
		case 'right-start':
			return 'top-end';
		case 'bottom':
		case 'bottom-center':
			return 'bottom';
		case 'bottom-start':
		case 'left-end':
			return 'bottom-start';
		case 'bottom-end':
		case 'right-end':
			return 'bottom-end';
		case 'left':
		case 'left-center':
			return 'left';
		case 'right':
		case 'right-center':
			return 'right';
		default:
			return 'top';
	}
}


/**
 * Unified Tooltip state creator
 * Provides reactive state management using Svelte 5 runes
 *
 * @param props - Tooltip component props
 * @returns Reactive state object with classes, visibility, and event handlers
 */
export function createTooltipState(props: TooltipStateProps) {
	let referenceRef: HTMLElement | null = $state(null);
	let tooltipRef: HTMLElement | null = $state(null);

	// Extract props with defaults
	const content = $derived(props.content);
	const placement = $derived(props.placement ?? 'top');
	const trigger = $derived(props.trigger ?? 'hover');
	const variant = $derived(props.variant ?? 'line');
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

	// SlotToggle tooltip visibility
	function toggleTooltip() {
		if (isVisible) {
			hideTooltip();
		} else {
			showTooltip();
		}
	}

	// Handle click outside for click trigger
	function setupClickOutsideListener(referenceEl = referenceRef, tooltipEl = tooltipRef) {
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
		const base = 'absolute z-[var(--z-index-modal)]';
		const normalizedPlacement = normalizePlacement(placement);
		const positions = {
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
		} as const;
		return `${base} ${positions[normalizedPlacement]}`;
	});

	// Compute tooltip content classes based on variant
	const tooltipClasses = $derived(() => {
		const baseClasses = variant === 'invisible'
			? 'px-3 py-2 text-sm font-medium rounded-lg shadow-sm bg-[--color-tooltip-bg] text-[--color-text-inverse]'
			: 'px-2 py-1 text-xs text-[var(--color-text-inverse)] bg-[var(--color-neutral-900)] rounded whitespace-nowrap';

		return `${positionClasses()} ${baseClasses} ${tooltipClassName}`.trim();
	});

	// Compute arrow classes based on placement and variant
	const arrowClasses = $derived(() => {
		if (variant !== 'arrow') return '';

		const arrowBase = 'absolute w-2 h-2 bg-[var(--color-neutral-900)] transform rotate-45';
		const normalizedPlacement = normalizePlacement(placement);
		const arrowPositions = {
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
		} as const;
		return `${arrowBase} ${arrowPositions[normalizedPlacement]} ${arrowClassName}`.trim();
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
		get referenceRef() {
			return referenceRef;
		},
		set referenceRef(value: HTMLElement | null) {
			referenceRef = value;
		},
		get tooltipRef() {
			return tooltipRef;
		},
		set tooltipRef(value: HTMLElement | null) {
			tooltipRef = value;
		},
		showTooltip,
		hideTooltip,
		toggleTooltip,
		setupClickOutsideListener
	};
}

export default createTooltipState;






