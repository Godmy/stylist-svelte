import type { RecipeProductComparison } from '$stylist/product/interface/recipe/product-comparison';

export function createProductComparisonState(props: RecipeProductComparison) {
	return {
		get containerClass() {
			return ['product-comparison', props.class].filter(Boolean).join(' ');
		},
		get tableClass() {
			return 'product-comparison__table';
		},
		get headerCellClass() {
			return 'product-comparison__header-cell';
		},
		get productCellClass() {
			return 'product-comparison__product-cell';
		},
		get productHeaderClass() {
			return 'product-comparison__product-header';
		},
		get imageClass() {
			return 'product-comparison__image';
		},
		get nameClass() {
			return 'product-comparison__name';
		},
		get ratingClass() {
			return 'product-comparison__rating';
		},
		get priceClass() {
			return 'product-comparison__price';
		},
		get featureCellClass() {
			return 'product-comparison__feature-cell';
		},
		get valueCellClass() {
			return 'product-comparison__value-cell';
		},
		getRowClass(index: number) {
			return index % 2 === 0
				? 'product-comparison__row product-comparison__row--even'
				: 'product-comparison__row product-comparison__row--odd';
		},
		getStarClass(active: boolean) {
			return active
				? 'product-comparison__star product-comparison__star--active'
				: 'product-comparison__star product-comparison__star--inactive';
		}
	};
}
