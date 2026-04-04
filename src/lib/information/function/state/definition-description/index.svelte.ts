import type { ThemeDefinitionDescriptionRecipe } from '$stylist/typography/interface/recipe/definition-description';
import { DefinitionDescriptionStyleManager } from '$stylist/typography/class/style-manager/definition-description';

/**
 * DefinitionDescription state creator
 * Provides reactive state management for definition description components using Svelte 5 runes
 *
 * @param props - ThemeDefinitionDescriptionRecipe component props
 * @returns Reactive state object with classes and computed values
 */
export function createDefinitionDescriptionState(props: ThemeDefinitionDescriptionRecipe) {
	const classes = $derived(DefinitionDescriptionStyleManager.getDefinitionDescriptionClasses(props.class ?? ''));

	return {
		get classes() {
			return classes;
		}
	};
}

export default createDefinitionDescriptionState;







