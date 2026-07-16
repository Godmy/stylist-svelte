import type { RecipeProductCardExtended } from '$stylist/product/interface/recipe/product-card-extended';

export function createProductCardExtendedState(props: RecipeProductCardExtended) {
	return {
		get containerClass() {
			return ['product-card-extended', props.class].filter(Boolean).join(' ');
		},
		get mediaClass() {
			return 'product-card-extended__media';
		},
		get imageClass() {
			return 'product-card-extended__image';
		},
		getBadgeClass() {
			return [
				'product-card-extended__badge',
				props.badge
					? `product-card-extended__badge--${props.badge}`
					: 'product-card-extended__badge--default'
			].join(' ');
		},
		get contentClass() {
			return 'product-card-extended__content';
		},
		get titleClass() {
			return 'product-card-extended__title';
		},
		get ratingRowClass() {
			return 'product-card-extended__rating-row';
		},
		get ratingClass() {
			return 'product-card-extended__rating';
		},
		get reviewCountClass() {
			return 'product-card-extended__review-count';
		},
		get descriptionClass() {
			return 'product-card-extended__description';
		},
		get featureListClass() {
			return 'product-card-extended__feature-list';
		},
		get featureItemClass() {
			return 'product-card-extended__feature-item';
		},
		get checkIconClass() {
			return 'product-card-extended__check-icon';
		},
		get featureTextClass() {
			return 'product-card-extended__feature-text';
		},
		get footerClass() {
			return 'product-card-extended__footer';
		},
		get priceClass() {
			return 'product-card-extended__price';
		},
		get actionsClass() {
			return 'product-card-extended__actions';
		},
		get addButtonClass() {
			return 'product-card-extended__button product-card-extended__button--add';
		},
		get wishlistButtonClass() {
			return 'product-card-extended__button product-card-extended__button--wishlist';
		},
		get wishlistIconClass() {
			return 'product-card-extended__wishlist-icon';
		},
		getStarClass(active: boolean) {
			return active
				? 'product-card-extended__star product-card-extended__star--active'
				: 'product-card-extended__star product-card-extended__star--inactive';
		}
	};
}
