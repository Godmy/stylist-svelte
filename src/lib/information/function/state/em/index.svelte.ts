import type { ThemeEmRecipe } from '$stylist/typography/interface/recipe/em';
import { EmStyleManager } from '$stylist/typography/class/style-manager/em';

/**
 * Em state creator
 * Provides reactive state management for emphasis (italic) components using Svelte 5 runes
 *
 * @param props - Em component props
 * @returns Reactive state object with classes and computed values
 */
export function createEmState(props: ThemeEmRecipe) {
	const classes = $derived(EmStyleManager.getEmClasses(props.class ?? ''));

	return {
		get classes() {
			return classes;
		}
	};
}

export default createEmState;







