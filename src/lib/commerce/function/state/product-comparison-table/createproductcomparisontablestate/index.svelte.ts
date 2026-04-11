export function createProductComparisonTableState(props: ProductComparisonTableProps) {
	const containerClass = $derived(ProductComparisonTableStyleManager.getContainerClass(props.class ?? ''));

	return {
		get containerClass() { return containerClass; }
	};
}

export default createProductComparisonTableState;
