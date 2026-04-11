export function createProductDemoState(props: ProductDemoProps) {
	const containerClass = $derived(ProductDemoStyleManager.getContainerClass(props.class ?? ''));

	return {
		get containerClass() { return containerClass; }
	};
}

export default createProductDemoState;
