import type { CounterRecipe } from '$stylist/information/interface/recipe/counter';
import { IndicatorsStyleManager } from '$stylist/information/class/style-manager/indicators';

/**
 * Counter state creator
 * Provides reactive state management for counter components using Svelte 5 runes
 *
 * @param props - Counter component props
 * @returns Reactive state object with classes and computed values
 */
export function createCounterState(props: CounterRecipe) {
	const count = $derived(props.count ?? 0);
	const max = $derived(props.max ?? 99);
	const variant = $derived(props.variant ?? 'primary');
	const size = $derived(props.size ?? 'md');
	const className = $derived(typeof props.class === 'string' ? props.class : undefined);
	const classes = $derived(
		IndicatorsStyleManager.getCounterClasses(
			variant as Parameters<typeof IndicatorsStyleManager.getCounterClasses>[0],
			size as Parameters<typeof IndicatorsStyleManager.getCounterClasses>[1],
			className
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





