import type { RecipeProductCollection } from '$stylist/product/interface/recipe/product-collection';

export function createProductCatalogState(props: RecipeProductCollection) {
	const layout = $derived(props.layout ?? 'grid');

	function isGridLayout(): boolean {
		return layout === 'grid';
	}

	return {
		get layout() {
			return layout;
		},
		get containerClass() {
			return ['product-catalog', props.class].filter(Boolean).join(' ');
		},
		get contentClass() {
			return layout === 'grid'
				? 'product-catalog__content product-catalog__content--grid'
				: 'product-catalog__content product-catalog__content--list';
		},
		get imageClass() {
			return 'product-catalog__image';
		},
		get listImageClass() {
			return 'product-catalog__image product-catalog__image--list';
		},
		get contentBodyClass() {
			return 'product-catalog__body';
		},
		get titleClass() {
			return 'product-catalog__title';
		},
		get ratingRowClass() {
			return 'product-catalog__rating-row';
		},
		get ratingClass() {
			return 'product-catalog__rating';
		},
		get priceRowClass() {
			return 'product-catalog__price-row';
		},
		get priceClass() {
			return 'product-catalog__price';
		},
		getGridItemClass(): string {
			return 'product-catalog__item product-catalog__item--grid';
		},
		getListItemClass(): string {
			return 'product-catalog__item product-catalog__item--list';
		},
		getStarClass(active: boolean) {
			return active
				? 'product-catalog__star product-catalog__star--active'
				: 'product-catalog__star product-catalog__star--inactive';
		},
		isGridLayout
	};
}
