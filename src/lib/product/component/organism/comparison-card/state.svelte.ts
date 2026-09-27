import type { HTMLAttributes } from 'svelte/elements';
import type { RecipeComparisonCard } from '$stylist/product/interface/recipe/comparison-card';

export function createComparisonCardState(
	getProps: () => RecipeComparisonCard & HTMLAttributes<HTMLDivElement>
) {
	const props = $derived(getProps());
	return {
		get containerClass() {
			return ['comparison-card', props.class].filter(Boolean).join(' ');
		}
	};
}
