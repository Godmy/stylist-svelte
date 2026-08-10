import type { HTMLAttributes } from 'svelte/elements';
import type { RecipeComparisonCard } from '$stylist/product/interface/recipe/comparison-card';

export function createComparisonCardState(props: RecipeComparisonCard & HTMLAttributes<HTMLDivElement>) {
	return {
		get containerClass() {
			return ['comparison-card', props.class].filter(Boolean).join(' ');
		}
	};
}
