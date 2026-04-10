import type { ComparisonTableProps } from '$stylist/control/type/struct/comparison-table-props';

export function createComparisonTableState(props: ComparisonTableProps) {
	const containerClass = $derived(`overflow-x-auto ${props.class ?? ''}`);
	const headerClass = $derived(`${props.headerClass ?? ''} ${(props.showHeader ?? true) ? '' : 'sr-only'}`);
	const featureClass = $derived(props.featureClass ?? '');
	const productClass = $derived(props.productClass ?? '');
	const valueClass = $derived(props.valueClass ?? '');
	const primaryProductClass = $derived(props.primaryProductClass ?? 'ring-2 ring-blue-500 ring-offset-2');

	return {
		get containerClass() {
			return containerClass;
		},
		get headerClass() {
			return headerClass;
		},
		get featureClass() {
			return featureClass;
		},
		get productClass() {
			return productClass;
		},
		get valueClass() {
			return valueClass;
		},
		get primaryProductClass() {
			return primaryProductClass;
		},
		features: props.features ?? [],
		products: props.products ?? [],
		showHeader: props.showHeader ?? true,
		showDescription: props.showDescription ?? false
	};
}

export default createComparisonTableState;
