import type { HTMLAttributes } from 'svelte/elements';
import type { RecipeCategoryCard } from '$stylist/commerce/interface/recipe/category-card';
export function createCategoryCardState(
	getProps: () => RecipeCategoryCard & HTMLAttributes<HTMLDivElement>
) {
	const props = $derived(getProps());
	const ariaLabel = $derived(`${props.title} category with ${props.count} components`);
	const classes = $derived(props.class == null ? undefined : String(props.class));

	return {
		get classes() {
			return classes;
		},
		get ariaLabel() {
			return ariaLabel;
		}
	};
}

export default createCategoryCardState;
