import type { InlineBaseProps } from '$stylist';
import { LinkStyleManager } from '$stylist/interaction/class/style-manager/link';

/**
 * DefinitionDescription state creator
 * Provides reactive state management for definition description components using Svelte 5 runes
 *
 * @param props - InlineBaseProps component props
 * @returns Reactive state object with classes and computed values
 */
export function createDefinitionDescriptionState(props: InlineBaseProps) {
	const classes = $derived(LinkStyleManager.getDefinitionDescriptionClasses(props.class ?? ''));

	return {
		get classes() {
			return classes;
		}
	};
}

export default createDefinitionDescriptionState;







