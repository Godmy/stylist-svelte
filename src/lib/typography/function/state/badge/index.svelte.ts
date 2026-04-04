import { createBadgeState as createBaseBadgeState } from '$stylist/information/function/state/badge';
import { StyleManagerBadge } from '$stylist/typography/class/style-manager/badge';
import type { ThemeBadgeRecipe } from '$stylist/typography/interface/recipe/badge';

export function createBadgeState(props: ThemeBadgeRecipe) {
	const baseState = createBaseBadgeState(props);
	const classes = $derived(StyleManagerBadge.root(baseState.classes));
	return { get classes() { return classes; } };
}

export default createBadgeState;
