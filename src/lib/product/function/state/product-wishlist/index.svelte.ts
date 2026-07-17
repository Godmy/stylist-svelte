import type { RecipeProductCollection } from '$stylist/product/interface/recipe/product-collection';

export function createProductWishlistState(props: RecipeProductCollection) {
	return {
		get containerClass() {
			return ['product-wishlist', props.class].filter(Boolean).join(' ');
		},
		get titleClass() {
			return 'product-wishlist__title';
		},
		get emptyClass() {
			return 'product-wishlist__empty';
		},
		get listClass() {
			return 'product-wishlist__list';
		},
		get itemClass() {
			return 'product-wishlist__item';
		},
		get imageClass() {
			return 'product-wishlist__image';
		},
		get contentClass() {
			return 'product-wishlist__content';
		},
		get itemTitleClass() {
			return 'product-wishlist__item-title';
		},
		get ratingRowClass() {
			return 'product-wishlist__rating-row';
		},
		get ratingClass() {
			return 'product-wishlist__rating';
		},
		get priceClass() {
			return 'product-wishlist__price';
		},
		get actionsClass() {
			return 'product-wishlist__actions';
		},
		get moveButtonClass() {
			return 'product-wishlist__button product-wishlist__button--move';
		},
		get removeButtonClass() {
			return 'product-wishlist__button product-wishlist__button--remove';
		},
		getStarClass(active: boolean) {
			return active
				? 'product-wishlist__star product-wishlist__star--active'
				: 'product-wishlist__star product-wishlist__star--inactive';
		}
	};
}
