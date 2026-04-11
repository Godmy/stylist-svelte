import { ProductRecommendationStyleManager } from '$stylist/commerce/class/style-manager/product-recommendation';

export interface ProductRecommendationProps {
	products: Array<{
		id: string;
		title: string;
		price: number;
		currency: string;
		image: string;
		rating: number;
	}>;
	title?: string;
	onProductClick?: (id: string) => void;
	class?: string;
}

export function createProductRecommendationState(props: ProductRecommendationProps) {
	const containerClass = $derived(ProductRecommendationStyleManager.getContainerClass(props.class ?? ''));

	return {
		get containerClass() { return containerClass; }
	};
}

export default createProductRecommendationState;
