import { mergeClasses } from '$stylist/layout/function/script/join-class-names';
import type { BadgeRecipe } from '$stylist/information/interface/recipe/badge';
import { BadgeStyleManager } from '$stylist/information/class/style-manager/badge';

/**
 * Badge state creator
 * Provides reactive state management for badge components using Svelte 5 runes
 *
 * @param props - Badge component props
 * @returns Reactive state object with classes and computed values
 */
export function createBadgeState(props: BadgeRecipe) {
	const variant = $derived(props.variant ?? 'default');
	const size = $derived(props.size ?? 'md');
	const className = $derived(typeof props.class === 'string' ? props.class : '');
	const classes = $derived(
		mergeClasses(
			'inline-flex items-center font-semibold rounded-full',
			BadgeStyleManager.getBadgeVariantClass(variant),
			BadgeStyleManager.getBadgeSizeClass(size),
			className
		)
	);

	return {
		get variant() {
			return variant;
		},
		get size() {
			return size;
		},
		get classes() {
			return classes;
		}
	};
}

export default createBadgeState;




