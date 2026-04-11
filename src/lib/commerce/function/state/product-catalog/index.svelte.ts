import type { Props, Layout } from '$stylist/commerce/type/struct/product-catalog';

export function createProductCatalogState(props: Props) {
	const layout = $derived(props.layout ?? 'grid');
	const containerClass = $derived(`bg-[var(--color-background-primary)] rounded-lg shadow ${props.class ?? ''}`);

	const contentClass = $derived(layout === 'grid'
		? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6'
		: 'flex flex-col p-4'
	);

	function getGridItemClass(): string {
		return 'border rounded-lg overflow-hidden';
	}

	function getListItemClass(): string {
		return 'flex border-b py-4 last:border-b-0';
	}

	function isGridLayout(): boolean {
		return layout === 'grid';
	}

	return {
		get layout() { return layout; },
		get containerClass() { return containerClass; },
		get contentClass() { return contentClass; },
		getGridItemClass,
		getListItemClass,
		isGridLayout
	};
}

export default createProductCatalogState;
