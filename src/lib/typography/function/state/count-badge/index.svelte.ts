import { createCountBadgeState as createBaseCountBadgeState } from '$stylist/information/function/state/count-badge';
import { StyleManagerCountBadge } from '$stylist/typography/class/style-manager/count-badge';
import type { ThemeCountBadgeRecipe } from '$stylist/typography/interface/recipe/count-badge';

export function createCountBadgeState(props: ThemeCountBadgeRecipe) {
	const baseState = createBaseCountBadgeState(props);
	const classes = $derived(StyleManagerCountBadge.root(baseState.classes));
	return {
		get classes() {
			return classes;
		},
		get count() {
			return baseState.count;
		},
		get showZero() {
			return baseState.showZero;
		},
		get displayCount() {
			return baseState.displayCount;
		}
	};
}

export default createCountBadgeState;
