import type { InlineCodeProps } from '$stylist/design-system/props';
import { LinkStyleManager } from '$stylist/design-system/styles/link';

type InlineCodeVariant = 'default' | 'subtle';

/**
 * InlineCode state creator
 * Provides reactive state management for inline code components using Svelte 5 runes
 *
 * @param props - InlineCode component props
 * @returns Reactive state object with classes and computed values
 */
export function createInlineCodeState(props: InlineCodeProps) {
	const variant = $derived((props.variant ?? 'default') as InlineCodeVariant);
	const classes = $derived(
		LinkStyleManager.getInlineCodeClasses(
			variant,
			props.class ?? ''
		)
	);

	return {
		get variant() {
			return variant;
		},
		get classes() {
			return classes;
		}
	};
}

export default createInlineCodeState;
