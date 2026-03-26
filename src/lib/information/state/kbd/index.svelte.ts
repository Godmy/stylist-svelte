import type { InlineBaseProps } from '$stylist';
import { LinkStyleManager } from '$stylist/interaction/class/style-manager/link';

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







