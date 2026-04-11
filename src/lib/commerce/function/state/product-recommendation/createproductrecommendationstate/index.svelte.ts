export function createProductRecommendationState(props: ProductRecommendationProps) {
	const containerClass = $derived(ProductRecommendationStyleManager.getContainerClass(props.class ?? ''));

	return {
		get containerClass() { return containerClass; }
	};
}

export default createProductRecommendationState;
