import { createInlineCodeState as createBaseInlineCodeState } from '$stylist/information/function/state/inline-code';
import { InlineCodeStyleManager } from '$stylist/typography/class/style-manager/inline-code';
import type { ThemeInlineCodeRecipe } from '$stylist/typography/interface/recipe/inline-code';

export function createInlineCodeState(props: ThemeInlineCodeRecipe) {
	const baseState = createBaseInlineCodeState(props);
	const classes = $derived(InlineCodeStyleManager.getInlineCodeClasses(baseState.classes));
	return {
		get classes() {
			return classes;
		}
	};
}

export default createInlineCodeState;
