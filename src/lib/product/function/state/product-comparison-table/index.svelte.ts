import type { RecipeProductComparisonTable } from '$stylist/product/interface/recipe/product-comparison-table';

export function createProductComparisonTableState(props: RecipeProductComparisonTable) {
	return {
		get containerClass() {
			return ['product-comparison-table', props.class].filter(Boolean).join(' ');
		},
		get tableClass() {
			return 'product-comparison-table__table';
		},
		get spacerCellClass() {
			return 'product-comparison-table__spacer-cell';
		},
		get productCellClass() {
			return 'product-comparison-table__product-cell';
		},
		get productHeaderClass() {
			return 'product-comparison-table__product-header';
		},
		get imageClass() {
			return 'product-comparison-table__image';
		},
		get nameClass() {
			return 'product-comparison-table__name';
		},
		get ratingClass() {
			return 'product-comparison-table__rating';
		},
		get priceClass() {
			return 'product-comparison-table__price';
		},
		get specCellClass() {
			return 'product-comparison-table__spec-cell';
		},
		get valueCellClass() {
			return 'product-comparison-table__value-cell';
		},
		getRowClass(index: number) {
			return index % 2 === 0
				? 'product-comparison-table__row product-comparison-table__row--even'
				: 'product-comparison-table__row product-comparison-table__row--odd';
		},
		getStarClass(active: boolean) {
			return active
				? 'product-comparison-table__star product-comparison-table__star--active'
				: 'product-comparison-table__star product-comparison-table__star--inactive';
		}
	};
}
