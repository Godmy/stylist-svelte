import { ProductComparisonStyleManager } from '$stylist/commerce/class/style-manager/product-comparison';
import type { ProductComparisonProps } from '../productcomparisonprops';

export function createProductComparisonState(props: ProductComparisonProps) {
	const containerClass = $derived(ProductComparisonStyleManager.getContainerClass(props.class ?? ''));

	return {
		get containerClass() { return containerClass; }
	};
}

export default createProductComparisonState;
