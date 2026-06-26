import type { ComparisonTableProps } from '$stylist/table/type/struct/comparison-table-props';

export function createComparisonTableState(props: ComparisonTableProps) {
	const containerClass = $derived(['c-comparison-table', props.class].filter(Boolean).join(' '));
	const headerClass = $derived(
		['c-comparison-table__head', props.headerClass, (props.showHeader ?? true) ? '' : 'sr-only']
			.filter(Boolean)
			.join(' ')
	);
	const featureClass = $derived(
		['c-comparison-table__feature-cell', props.featureClass].filter(Boolean).join(' ')
	);
	const productClass = $derived(
		['c-comparison-table__product', props.productClass].filter(Boolean).join(' ')
	);
	const valueClass = $derived(
		['c-comparison-table__value-cell', props.valueClass].filter(Boolean).join(' ')
	);
	const primaryProductClass = $derived(
		['c-comparison-table__product--primary', props.primaryProductClass].filter(Boolean).join(' ')
	);

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
