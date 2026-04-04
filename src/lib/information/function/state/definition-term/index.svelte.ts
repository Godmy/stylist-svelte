import type { ThemeDefinitionTermRecipe } from '$stylist/typography/interface/recipe/definition-term';
import { DefinitionTermStyleManager } from '$stylist/typography/class/style-manager/definition-term';

/**
 * DefinitionTerm state creator
 * Provides reactive state management for definition term components using Svelte 5 runes
 *
 * @param props - ThemeDefinitionTermRecipe component props
 * @returns Reactive state object with classes and computed values
 */
export function createDefinitionTermState(props: ThemeDefinitionTermRecipe) {
	const classes = $derived(DefinitionTermStyleManager.getDefinitionTermClasses(props.class ?? ''));

	return {
		get classes() {
			return classes;
		}
	};
}

export default createDefinitionTermState;







