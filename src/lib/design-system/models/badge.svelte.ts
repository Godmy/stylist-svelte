import type { BadgeProps } from '$stylist/design-system/props';
import { BASE_BADGE_CLASSES, BADGE_VARIANT_CLASSES, BADGE_SIZE_CLASSES } from '$stylist/design-system/classes';
import { cn } from '$stylist/utils/classes';

/**
 * Badge state creator
 * Provides reactive state management for badge components using Svelte 5 runes
 *
 * @param props - Badge component props
 * @returns Reactive state object with classes and computed values
 */
export function createBadgeState(props: BadgeProps) {
	const variant = $derived(props.variant ?? 'default');
	const size = $derived(props.size ?? 'md');
	const classes = $derived(
		cn(
			BASE_BADGE_CLASSES,
			BADGE_VARIANT_CLASSES[variant as keyof typeof BADGE_VARIANT_CLASSES],
			BADGE_SIZE_CLASSES[size as keyof typeof BADGE_SIZE_CLASSES],
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
		get classes() {
			return classes;
		}
	};
}

export default createBadgeState;
