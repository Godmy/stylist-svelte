import type { ProductSortingProps as Props } from '$stylist/commerce/type/struct/product-sorting-props';
import { ProductSortingStyleManager } from '$stylist/commerce/class/style-manager/product-sorting';

export function createProductSortingState(props: Props) {
	const baseClasses = $derived(ProductSortingStyleManager.getBaseClasses(props.class ?? ''));
	const selectClasses = $derived(ProductSortingStyleManager.getSelectClasses());

	function getOptionClasses(): string {
		return ProductSortingStyleManager.getOptionClasses();
	}

	function handleChange(event: Event): void {
		props.onchange?.(event);
	}

	function handleInput(event: Event): void {
		props.oninput?.(event);
	}

	return {
		get baseClasses() { return baseClasses; },
		get selectClasses() { return selectClasses; },
		getOptionClasses,
		handleChange,
		handleInput
	};
}

export default createProductSortingState;
