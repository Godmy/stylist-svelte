import type { InlineCodeProps } from '$stylist/design-system/contracts';
import { LinkStyleManager } from '$stylist/design-system/styles/interaction/link';

/**
 * InlineCode state creator
 * Provides reactive state management for inline code components using Svelte 5 runes
 *
 * @param props - InlineCode component props
 * @returns Reactive state object with classes and computed values
 */
export function createInlineCodeState(props: InlineCodeProps) {
	const classes = $derived(
		LinkStyleManager.getInlineCodeClasses(props.class ?? '')
	);

	return {
		get classes() {
			return classes;
		}
	};
}

export default createInlineCodeState;







