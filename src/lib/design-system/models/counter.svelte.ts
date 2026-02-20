import type { CounterProps } from '$stylist/design-system/props';
import { IndicatorsStyleManager } from '$stylist/design-system/styles/indicators';

/**
 * Counter state creator
 * Provides reactive state management for counter components using Svelte 5 runes
 *
 * @param props - Counter component props
 * @returns Reactive state object with classes and computed values
 */
export function createCounterState(props: CounterProps) {
	const count = $derived(props.count ?? 0);
	const max = $derived(props.max ?? 99);
	const variant = $derived(props.variant ?? 'primary');
	const size = $derived(props.size ?? 'md');
	const classes = $derived(
		IndicatorsStyleManager.getCounterClasses(
			variant as Parameters<typeof IndicatorsStyleManager.getCounterClasses>[0],
			size as Parameters<typeof IndicatorsStyleManager.getCounterClasses>[1],
			props.class ?? ''
		)
	);
	const displayCount = $derived(count > max ? `${max}+` : count);

	return {
		get count() {
			return count;
		},
		get max() {
			return max;
		},
		get variant() {
			return variant;
		},
		get size() {
			return size;
		},
		get classes() {
			return classes;
		},
		get displayCount() {
			return displayCount;
		}
	};
}

export default createCounterState;
