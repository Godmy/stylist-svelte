import type { LinkProps } from '$stylist/design-system/props';
import { LinkStyleManager } from '$stylist/design-system/styles/link';
import type { CompactSize } from '$stylist/design-system/tokens/sizes';

type LinkVariant =
	| 'default'
	| 'primary'
	| 'secondary'
	| 'success'
	| 'warning'
	| 'danger'
	| 'info'
	| 'solid'
	| 'outline'
	| 'ghost'
	| 'link'
	| 'subtle'
	| 'neutral'
	| 'gray'
	| 'muted'
	| 'dark'
	| 'light';

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
			variant as LinkVariant,
			size as CompactSize,
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
