import type { BadgeGroupProps } from '$stylist/design-system/props';
import { BADGE_GROUP_CONTAINER_CLASSES, BADGE_GROUP_OVERFLOW_CLASSES } from '$stylist/design-system/classes';
import { cn } from '$stylist/utils/classes';

/**
 * BadgeGroup state creator
 * Provides reactive state management for badge group components using Svelte 5 runes
 *
 * @param props - BadgeGroup component props
 * @returns Reactive state object with classes and computed values
 */
export function createBadgeGroupState(props: BadgeGroupProps) {
	const badges = $derived(props.badges ?? []);
	const maxVisible = $derived(props.maxVisible ?? 5);
	const showOverflow = $derived(props.showOverflow ?? true);
	const badgeClass = $derived(props.badgeClass ?? '');
	const overflowClass = $derived(props.overflowClass ?? '');
	const containerClasses = $derived(cn(BADGE_GROUP_CONTAINER_CLASSES, props.class ?? ''));
	const overflowClasses = $derived(cn(BADGE_GROUP_OVERFLOW_CLASSES, overflowClass));
	const visibleBadges = $derived(badges.slice(0, maxVisible));
	const overflowCount = $derived(Math.max(0, badges.length - maxVisible));

	return {
		get badges() {
			return badges;
		},
		get maxVisible() {
			return maxVisible;
		},
		get showOverflow() {
			return showOverflow;
		},
		get badgeClass() {
			return badgeClass;
		},
		get overflowClass() {
			return overflowClass;
		},
		get containerClasses() {
			return containerClasses;
		},
		get overflowClasses() {
			return overflowClasses;
		},
		get visibleBadges() {
			return visibleBadges;
		},
		get overflowCount() {
			return overflowCount;
		}
	};
}

export default createBadgeGroupState;
