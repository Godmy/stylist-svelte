import type { ThemeKbdRecipe } from '$stylist/typography/interface/recipe/kbd';
import { KbdStyleManager } from '$stylist/typography/class/style-manager/kbd';

/**
 * Kbd state creator
 * Provides reactive state management for keyboard (kbd) components using Svelte 5 runes
 *
 * @param props - Kbd component props
 * @returns Reactive state object with classes and computed values
 */
export function createKbdState(props: ThemeKbdRecipe) {
	const classes = $derived(KbdStyleManager.getKbdClasses(props.class ?? ''));

	return {
		get classes() {
			return classes;
		}
	};
}

export default createKbdState;







