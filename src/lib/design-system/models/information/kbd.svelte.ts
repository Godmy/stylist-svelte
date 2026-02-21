import type { InlineBaseProps } from '$stylist/design-system/props';
import { LinkStyleManager } from '$stylist/design-system/styles/interaction/link';

/**
 * Kbd state creator
 * Provides reactive state management for keyboard (kbd) components using Svelte 5 runes
 *
 * @param props - InlineBaseProps component props
 * @returns Reactive state object with classes and computed values
 */
export function createKbdState(props: InlineBaseProps) {
	const classes = $derived(LinkStyleManager.getKbdClasses(props.class ?? ''));

	return {
		get classes() {
			return classes;
		}
	};
}

export default createKbdState;
