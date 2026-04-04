import { createDotState as createBaseDotState } from '$stylist/information/function/state/dot';
import { StyleManagerDot } from '$stylist/typography/class/style-manager/dot';
import type { ThemeDotRecipe } from '$stylist/typography/interface/recipe/dot';

export function createDotState(props: ThemeDotRecipe) {
	const baseState = createBaseDotState(props);
	const classes = $derived(StyleManagerDot.root(baseState.classes));
	return { get classes() { return classes; } };
}

export default createDotState;
