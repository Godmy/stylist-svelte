import type { RecipeComparisonCard } from '$stylist/product/interface/recipe/comparison-card';

export function createComparisonCardState(props: RecipeComparisonCard) {
	return {
		get containerClass() {
			return ['comparison-card', props.class].filter(Boolean).join(' ');
		}
	};
}
