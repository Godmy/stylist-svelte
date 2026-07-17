import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

import type { RecipeProductSort } from '$stylist/product/interface/recipe/product-sort';

export function createProductSortState(props: RecipeProductSort) {
	const options = $derived(props.options ?? []);
	const selectedOption = $derived(props.selectedOption ?? '');
	const onValueChange = $derived.by(() => props.onValueChange || ((option: string) => {}));
	const containerClasses = $derived(mergeClassNames('c-product-sort', props.class));
	const labelClasses = $derived('c-product-sort__label');
	const selectClasses = $derived(mergeClassNames('input__input-base', 'c-product-sort__select'));

	return {
		get options() {
			return options;
		},
		get selectedOption() {
			return selectedOption;
		},
		get classes() {
			return containerClasses;
		},
		get labelClasses() {
			return labelClasses;
		},
		get selectClasses() {
			return selectClasses;
		},
		handleSortChange(option: string) {
			const valueChangeFn = onValueChange;
			valueChangeFn(option);
		}
	};
}

export default createProductSortState;
