import { createSeparatorState as createBaseSeparatorState } from '$stylist/information/function/state/separator';
import { StyleManagerSeparator } from '$stylist/typography/class/style-manager/separator';
import type { ThemeSeparatorRecipe } from '$stylist/typography/interface/recipe/separator';

export function createSeparatorState(props: ThemeSeparatorRecipe) {
	const baseState = createBaseSeparatorState(props);
	const classes = $derived(StyleManagerSeparator.root(baseState.classes));
	return {
		get classes() {
			return classes;
		},
		get orientation() {
			return baseState.orientation;
		},
		get decorative() {
			return baseState.decorative;
		}
	};
}

export default createSeparatorState;
