import type { ThemeHighlightRecipe } from '$stylist/typography/interface/recipe/highlight';
import { HighlightStyleManager } from '$stylist/typography/class/style-manager/highlight';

/**
 * Highlight state creator
 * Provides reactive state management for highlight (mark) components using Svelte 5 runes
 *
 * @param props - Highlight component props
 * @returns Reactive state object with classes and computed values
 */
export function createHighlightState(props: ThemeHighlightRecipe) {
	const classes = $derived(HighlightStyleManager.getHighlightClasses(props.class ?? ''));

	return {
		get classes() {
			return classes;
		}
	};
}

export default createHighlightState;







