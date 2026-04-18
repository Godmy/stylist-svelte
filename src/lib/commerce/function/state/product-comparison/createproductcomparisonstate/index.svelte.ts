import { ProductComparisonStyleManager } from '$stylist/commerce/class/style-manager/product-comparison';
import type { ProductComparisonProps } from '$stylist/commerce/interface/recipe/product-comparison-props';

export function createProductComparisonState(props: ProductComparisonProps) {
	const containerClass = $derived(ProductComparisonStyleManager.getContainerClass(props.class ?? ''));

	return {
		get containerClass() { return containerClass; }
	};
}

export default createProductComparisonState;
