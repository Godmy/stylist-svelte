import { createKbdState as createBaseKbdState } from '$stylist/information/function/state/kbd';
import { KbdStyleManager } from '$stylist/typography/class/style-manager/kbd';
import type { ThemeKbdRecipe } from '$stylist/typography/interface/recipe/kbd';

export function createKbdState(props: ThemeKbdRecipe) {
	const baseState = createBaseKbdState(props);
	const classes = $derived(KbdStyleManager.getKbdClasses(baseState.classes));
	return {
		get classes() {
			return classes;
		}
	};
}

export default createKbdState;
