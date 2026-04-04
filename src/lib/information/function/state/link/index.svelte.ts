import type { LinkProps } from '$stylist/navigation/interface/component/link/other';
import { LinkStyleManager } from '$stylist/navigation/class/style-manager/link';
import type { TokenSize } from '$stylist/layout/type/enum/size';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';

/**
 * Link state creator
 * Provides reactive state management for link components using Svelte 5 runes
 *
 * @param props - Link component props
 * @returns Reactive state object with classes and computed values
 */
export function createLinkState(props: LinkProps) {
	const variant = $derived(props.variant ?? 'default');
	const size = $derived(props.size ?? 'md');
	const disabled = $derived(props.disabled ?? false);
	const underline = $derived(props.underline ?? true);
	const href = $derived(props.href);
	const target = $derived(props.target);
	const text = $derived(props.text);
	const classes = $derived(
		LinkStyleManager.getLinkClasses(
			variant as TokenAppearance,
			size as TokenSize,
			disabled,
			underline,
			props.class ?? ''
		)
	);

	return {
		get variant() {
			return variant;
		},
		get size() {
			return size;
		},
		get disabled() {
			return disabled;
		},
		get underline() {
			return underline;
		},
		get href() {
			return href;
		},
		get target() {
			return target;
		},
		get text() {
			return text;
		},
		get classes() {
			return classes;
		}
	};
}

export default createLinkState;











