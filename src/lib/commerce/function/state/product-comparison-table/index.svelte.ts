import { ProductComparisonTableStyleManager } from '$stylist/commerce/class/style-manager/product-comparison-table';

export interface ProductComparisonTableProps {
	products: Array<{
		id: string;
		name: string;
		price: number;
		currency: string;
		image: string;
		rating: number;
	}>;
	specifications: Array<{ name: string; values: string[] }>;
	class?: string;
}

export function createProductComparisonTableState(props: ProductComparisonTableProps) {
	const containerClass = $derived(ProductComparisonTableStyleManager.getContainerClass(props.class ?? ''));

	return {
		get containerClass() { return containerClass; }
	};
}

export default createProductComparisonTableState;
