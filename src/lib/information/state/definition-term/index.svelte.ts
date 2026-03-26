import type { InlineBaseProps } from '$stylist';
import { LinkStyleManager } from '$stylist/interaction/class/style-manager/link';

/**
 * DefinitionTerm state creator
 * Provides reactive state management for definition term components using Svelte 5 runes
 *
 * @param props - InlineBaseProps component props
 * @returns Reactive state object with classes and computed values
 */
export function createDefinitionTermState(props: InlineBaseProps) {
	const classes = $derived(LinkStyleManager.getDefinitionTermClasses(props.class ?? ''));

	return {
		get classes() {
			return classes;
		}
	};
}

export default createDefinitionTermState;







