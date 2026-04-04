import { createHighlightState as createBaseHighlightState } from '$stylist/information/function/state/highlight';
import { HighlightStyleManager } from '$stylist/typography/class/style-manager/highlight';
import type { ThemeHighlightRecipe } from '$stylist/typography/interface/recipe/highlight';

export function createHighlightState(props: ThemeHighlightRecipe) {
	const baseState = createBaseHighlightState(props);
	const classes = $derived(HighlightStyleManager.getHighlightClasses(baseState.classes));
	return {
		get classes() {
			return classes;
		}
	};
}

export default createHighlightState;
