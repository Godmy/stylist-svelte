import type { ComparisonTableFeature } from '$stylist/table/type/object/comparison-table-feature';
import type { ComparisonTableProduct } from '$stylist/table/type/object/comparison-table-product';
import type { RecipeWorkflowSection } from '$stylist/landing/interface/recipe/workflow-section';

export function createWorkflowSectionState(props: RecipeWorkflowSection) {
	const features = $derived<ComparisonTableFeature[]>(
		props.comparisonCriteria.map((name, index) => ({ id: `criterion-${index}`, name }))
	);
	const products = $derived<ComparisonTableProduct[]>(
		props.comparisonColumns.map((name, columnIndex) => ({
			id: `column-${columnIndex}`,
			name,
			primary: columnIndex === props.comparisonColumns.length - 1,
			features: Object.fromEntries(
				props.comparisonCriteria.map((_, rowIndex) => [
					`criterion-${rowIndex}`,
					props.comparisonRows[rowIndex][columnIndex]
				])
			)
		}))
	);

	return {
		get features() {
			return features;
		},
		get products() {
			return products;
		}
	};
}

export default createWorkflowSectionState;
