import { ProductRecommendationStyleManager } from '$stylist/commerce/class/style-manager/product-recommendation';
import type { ProductRecommendationProps } from '$stylist/commerce/interface/recipe/product-recommendation-props';

export function createProductRecommendationState(props: ProductRecommendationProps) {
	const containerClass = $derived(ProductRecommendationStyleManager.getContainerClass(props.class ?? ''));

	return {
		get containerClass() { return containerClass; }
	};
}

export default createProductRecommendationState;
