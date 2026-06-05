import { joinClassNames } from '$stylist/layout/function/script/join-class-names';
import { InputStyleManager } from '$stylist/input/class/style-manager/input';

import type { ProductSortProps } from '$stylist/commerce/type/struct/product-sort-props';

export function createProductSortState(props: ProductSortProps) {
	const options = $derived(props.options);
	const selectedOption = $derived(props.selectedOption ?? '');
	const onValueChange = $derived.by(() => props.onValueChange || ((option: string) => {}));
	const containerClasses = $derived(joinClassNames('c-product-sort', props.class ?? ''));
	const labelClasses = $derived('c-product-sort__label');
	const selectClasses = $derived(
		joinClassNames(InputStyleManager.getInputBaseClass(), 'c-product-sort__select')
	);

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
