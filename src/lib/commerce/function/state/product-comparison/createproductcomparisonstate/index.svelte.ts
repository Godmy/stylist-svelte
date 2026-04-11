export function createProductComparisonState(props: ProductComparisonProps) {
	const containerClass = $derived(ProductComparisonStyleManager.getContainerClass(props.class ?? ''));

	return {
		get containerClass() { return containerClass; }
	};
}

export default createProductComparisonState;
