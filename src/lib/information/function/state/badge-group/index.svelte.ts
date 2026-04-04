import { mergeClasses } from '$stylist/layout/function/script/join-class-names';
import type { BadgeGroupRecipe } from '$stylist/information/interface/recipe/badge-group';

/**
 * BadgeGroup state creator
 * Provides reactive state management for badge group components using Svelte 5 runes
 *
 * @param props - BadgeGroup component props
 * @returns Reactive state object with classes and computed values
 */
export function createBadgeGroupState(props: BadgeGroupRecipe) {
	const className = $derived(typeof props.class === 'string' ? props.class : '');
	const badges = $derived(props.badges ?? []);
	const maxVisible = $derived(props.maxVisible ?? 5);
	const showOverflow = $derived(props.showOverflow ?? true);
	const badgeClass = $derived(props.badgeClass ?? '');
	const overflowClass = $derived(props.overflowClass ?? '');
	const containerClasses = $derived(mergeClasses('flex flex-wrap items-center gap-2', className));
	const overflowClasses = $derived(
		mergeClasses(
			'inline-flex items-center rounded-full text-xs font-medium bg-[var(--color-neutral-100)] text-[var(--color-neutral-800)] px-2.5 py-0.5',
			overflowClass
		)
	);
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




