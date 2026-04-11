import { ProductComparisonStyleManager } from '$stylist/commerce/class/style-manager/product-comparison';

export interface ProductComparisonProps {
	products: Array<{
		id: string;
		name: string;
		price: number;
		currency: string;
		image: string;
		rating: number;
	}>;
	features: string[];
	class?: string;
}

export function createProductComparisonState(props: ProductComparisonProps) {
	const containerClass = $derived(ProductComparisonStyleManager.getContainerClass(props.class ?? ''));

	return {
		get containerClass() { return containerClass; }
	};
}

export default createProductComparisonState;
