import { createBadgeGroupState as createBaseBadgeGroupState } from '$stylist/information/function/state/badge-group';
import { StyleManagerBadgeGroup } from '$stylist/typography/class/style-manager/badge-group';
import type { ThemeBadgeGroupRecipe } from '$stylist/typography/interface/recipe/badge-group';

export function createBadgeGroupState(props: ThemeBadgeGroupRecipe) {
	const baseState = createBaseBadgeGroupState(props);
	const containerClasses = $derived(
		StyleManagerBadgeGroup.container(baseState.containerClasses)
	);
	const overflowClasses = $derived(
		StyleManagerBadgeGroup.overflow(baseState.overflowClasses)
	);
	return {
		get containerClasses() {
			return containerClasses;
		},
		get badgeClass() {
			return baseState.badgeClass;
		},
		get visibleBadges() {
			return baseState.visibleBadges;
		},
		get showOverflow() {
			return baseState.showOverflow;
		},
		get overflowCount() {
			return baseState.overflowCount;
		},
		get overflowClasses() {
			return overflowClasses;
		}
	};
}

export default createBadgeGroupState;
