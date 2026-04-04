import { createDefinitionDescriptionState as createBaseDefinitionDescriptionState } from '$stylist/information/function/state/definition-description';
import { DefinitionDescriptionStyleManager } from '$stylist/typography/class/style-manager/definition-description';
import type { ThemeDefinitionDescriptionRecipe } from '$stylist/typography/interface/recipe/definition-description';

export function createDefinitionDescriptionState(props: ThemeDefinitionDescriptionRecipe) {
	const baseState = createBaseDefinitionDescriptionState(props);
	const classes = $derived(DefinitionDescriptionStyleManager.getDefinitionDescriptionClasses(baseState.classes));
	return {
		get classes() {
			return classes;
		}
	};
}

export default createDefinitionDescriptionState;
