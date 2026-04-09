import { createBadgeState as createBaseBadgeState } from '$stylist/information/function/state/badge';
import { BadgeStyleManager } from '$stylist/typography/class/style-manager/badge';
import type { BadgeRecipe } from '$stylist/typography/interface/recipe/badge';

export function createBadgeState(props: BadgeRecipe) {
	const baseState = createBaseBadgeState(props);
	const classes = $derived(BadgeStyleManager.root(baseState.classes));
	return { get classes() { return classes; } };
}

export default createBadgeState;
