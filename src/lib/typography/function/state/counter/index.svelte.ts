import { createCounterState as createBaseCounterState } from '$stylist/information/function/state/counter';
import { StyleManagerCounter } from '$stylist/typography/class/style-manager/counter';
import type { ThemeCounterRecipe } from '$stylist/typography/interface/recipe/counter';

export function createCounterState(props: ThemeCounterRecipe) {
	const baseState = createBaseCounterState(props);
	const classes = $derived(StyleManagerCounter.root(baseState.classes));
	return {
		get classes() {
			return classes;
		},
		get displayCount() {
			return baseState.displayCount;
		}
	};
}

export default createCounterState;
