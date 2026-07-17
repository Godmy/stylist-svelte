import type { RecipeProductCollection } from '$stylist/product/interface/recipe/product-collection';

export function createProductRecommendationState(props: RecipeProductCollection) {
	return {
		get containerClass() {
			return ['product-recommendation', props.class].filter(Boolean).join(' ');
		},
		get titleClass() {
			return 'product-recommendation__title';
		},
		get gridClass() {
			return 'product-recommendation__grid';
		},
		get cardClass() {
			return 'product-recommendation__card';
		},
		get imageClass() {
			return 'product-recommendation__image';
		},
		get contentClass() {
			return 'product-recommendation__content';
		},
		get productTitleClass() {
			return 'product-recommendation__product-title';
		},
		get ratingRowClass() {
			return 'product-recommendation__rating-row';
		},
		get ratingClass() {
			return 'product-recommendation__rating';
		},
		get priceRowClass() {
			return 'product-recommendation__price-row';
		},
		get priceClass() {
			return 'product-recommendation__price';
		},
		getStarClass(active: boolean) {
			return active
				? 'product-recommendation__star product-recommendation__star--active'
				: 'product-recommendation__star product-recommendation__star--inactive';
		}
	};
}
