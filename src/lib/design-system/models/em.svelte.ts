import type { InlineBaseProps } from '$stylist/design-system/props';
import { LinkStyleManager } from '$stylist/design-system/styles/link';

/**
 * Em state creator
 * Provides reactive state management for emphasis (italic) components using Svelte 5 runes
 *
 * @param props - InlineBaseProps component props
 * @returns Reactive state object with classes and computed values
 */
export function createEmState(props: InlineBaseProps) {
	const classes = $derived(LinkStyleManager.getEmClasses(props.class ?? ''));

	return {
		get classes() {
			return classes;
		}
	};
}

export default createEmState;
