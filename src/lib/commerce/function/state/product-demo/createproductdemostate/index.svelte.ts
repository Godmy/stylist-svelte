import { ProductDemoStyleManager } from '$stylist/commerce/class/style-manager/product-demo';
import type { ProductDemoProps } from '$stylist/commerce/interface/recipe/product-demo-props';

export function createProductDemoState(props: ProductDemoProps) {
	const containerClass = $derived(ProductDemoStyleManager.getContainerClass(props.class ?? ''));

	return {
		get containerClass() { return containerClass; }
	};
}

export default createProductDemoState;
