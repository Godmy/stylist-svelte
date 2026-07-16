import type { RecipeProductSorting } from '$stylist/product/interface/recipe/product-sorting';

export function createProductSortingState(props: RecipeProductSorting) {
	function handleChange(event: Event): void {
		props.onchange?.(event);
	}

	function handleInput(event: Event): void {
		props.oninput?.(event);
	}

	return {
		get containerClass() {
			return ['product-sorting', props.class].filter(Boolean).join(' ');
		},
		get selectClass() {
			return 'product-sorting__select';
		},
		get optionClass() {
			return 'product-sorting__option';
		},
		handleChange,
		handleInput
	};
}
