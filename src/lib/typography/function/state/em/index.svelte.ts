import { createEmState as createBaseEmState } from '$stylist/information/function/state/em';
import { EmStyleManager } from '$stylist/typography/class/style-manager/em';
import type { ThemeEmRecipe } from '$stylist/typography/interface/recipe/em';

export function createEmState(props: ThemeEmRecipe) {
	const baseState = createBaseEmState(props);
	const classes = $derived(EmStyleManager.getEmClasses(baseState.classes));
	return {
		get classes() {
			return classes;
		}
	};
}

export default createEmState;
