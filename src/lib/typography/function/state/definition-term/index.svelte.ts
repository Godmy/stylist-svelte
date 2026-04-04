import { createDefinitionTermState as createBaseDefinitionTermState } from '$stylist/information/function/state/definition-term';
import { DefinitionTermStyleManager } from '$stylist/typography/class/style-manager/definition-term';
import type { ThemeDefinitionTermRecipe } from '$stylist/typography/interface/recipe/definition-term';

export function createDefinitionTermState(props: ThemeDefinitionTermRecipe) {
	const baseState = createBaseDefinitionTermState(props);
	const classes = $derived(DefinitionTermStyleManager.getDefinitionTermClasses(baseState.classes));
	return {
		get classes() {
			return classes;
		}
	};
}

export default createDefinitionTermState;
