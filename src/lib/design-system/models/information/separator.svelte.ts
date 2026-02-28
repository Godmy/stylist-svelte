import { mergeClasses } from '$stylist/utils/classes';
import type { SeparatorProps } from '$stylist/design-system/contracts';

/**
 * Separator state creator
 * Provides reactive state management for separator components using Svelte 5 runes
 *
 * @param props - Separator component props
 * @returns Reactive state object with classes and computed values
 */
export function createSeparatorState(props: SeparatorProps) {
	const orientation = $derived(props.orientation ?? 'horizontal');
	const decorative = $derived(props.decorative ?? false);
	const classes = $derived(
		mergeClasses(
			orientation === 'vertical'
				? 'h-full border-l border-[var(--color-border-secondary)]'
				: 'w-full border-t border-[var(--color-border-secondary)]',
			props.class ?? ''
		)
	);

	return {
		get orientation() {
			return orientation;
		},
		get decorative() {
			return decorative;
		},
		get classes() {
			return classes;
		}
	};
}

export default createSeparatorState;
