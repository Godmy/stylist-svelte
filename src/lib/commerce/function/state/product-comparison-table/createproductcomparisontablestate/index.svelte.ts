import { ProductComparisonTableStyleManager } from '$stylist/commerce/class/style-manager/product-comparison-table';
import type { ProductComparisonTableProps } from '../productcomparisontableprops';

export function createProductComparisonTableState(props: ProductComparisonTableProps) {
	const containerClass = $derived(ProductComparisonTableStyleManager.getContainerClass(props.class ?? ''));

	return {
		get containerClass() { return containerClass; }
	};
}

export default createProductComparisonTableState;
