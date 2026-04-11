export function createProductWishlistState(props: ProductWishlistProps) {
	const containerClass = $derived(ProductWishlistStyleManager.getContainerClass(props.class ?? ''));

	return {
		get containerClass() { return containerClass; }
	};
}

export default createProductWishlistState;
