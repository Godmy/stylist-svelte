import type { ThemeInlineCodeRecipe } from '$stylist/typography/interface/recipe/inline-code';
import { InlineCodeStyleManager } from '$stylist/typography/class/style-manager/inline-code';

/**
 * InlineCode state creator
 * Provides reactive state management for inline code components using Svelte 5 runes
 *
 * @param props - InlineCode component props
 * @returns Reactive state object with classes and computed values
 */
export function createInlineCodeState(props: ThemeInlineCodeRecipe) {
	const classes = $derived(
		InlineCodeStyleManager.getInlineCodeClasses(props.class ?? '')
	);

	return {
		get classes() {
			return classes;
		}
	};
}

export default createInlineCodeState;










