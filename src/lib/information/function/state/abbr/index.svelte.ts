import type { AbbrProps } from '$stylist/navigation/interface/component/link/other';
import { AbbrStyleManager } from '$stylist/typography/class/style-manager/abbr';

/**
 * Abbr state creator
 * Provides reactive state management for abbreviation components using Svelte 5 runes
 *
 * @param props - Abbr component props
 * @returns Reactive state object with classes and computed values
 */
export function createAbbrState(props: AbbrProps) {
	const title = $derived(props.title ?? '');
	const classes = $derived(AbbrStyleManager.getAbbrClasses(props.class ?? ''));

	return {
		get title() {
			return title;
		},
		get classes() {
			return classes;
		}
	};
}

export default createAbbrState;







