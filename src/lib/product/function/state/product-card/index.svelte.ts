import type { TierContent } from '$stylist/architecture/type/alias/tier';
import type { RecipeProductCard } from '$stylist/product/interface/recipe/product-card';

export function createProductCardState(props: RecipeProductCard) {
	const variant = $derived(props.variant ?? ('detailed' as TierContent));
	const title = $derived(props.title ?? '');
	const price = $derived(props.price ?? 0);
	const currency = $derived(props.currency ?? '$');
	const image = $derived(props.image ?? '');
	const rating = $derived(props.rating ?? 0);
	const reviewCount = $derived(props.reviewCount ?? 0);
	const badge = $derived(props.badge ?? '');
	const description = $derived(props.description ?? '');
	const badgeKind = $derived(
		badge === 'sale' || badge === 'new' || badge === 'popular' ? badge : 'default'
	);

	const restProps = $derived.by(() => {
		const {
			class: _class,
			variant: _variant,
			title: _title,
			price: _price,
			currency: _currency,
			image: _image,
			rating: _rating,
			reviewCount: _reviewCount,
			badge: _badge,
			description: _description,
			actions: _actions,
			...rest
		} = props;
		return rest;
	});

	function getStarClass(isFilled: boolean) {
		return isFilled ? 'product-card__star product-card__star--filled' : 'product-card__star';
	}

	return {
		get variant() {
			return variant;
		},
		get title() {
			return title;
		},
		get price() {
			return price;
		},
		get currency() {
			return currency;
		},
		get image() {
			return image;
		},
		get rating() {
			return rating;
		},
		get reviewCount() {
			return reviewCount;
		},
		get badge() {
			return badge;
		},
		get description() {
			return description;
		},
		get containerClass() {
			return ['product-card', props.class].filter(Boolean).join(' ');
		},
		get imageContainerClass() {
			return 'product-card__image-container';
		},
		get imageClass() {
			return 'product-card__image';
		},
		get badgeClass() {
			return `product-card__badge product-card__badge--${badgeKind}`;
		},
		get contentClass() {
			return 'product-card__content';
		},
		get titleClass() {
			return 'product-card__title';
		},
		get descriptionClass() {
			return 'product-card__description';
		},
		get priceClass() {
			return 'product-card__price';
		},
		get priceContainerClass() {
			return 'product-card__price-container';
		},
		get actionsContainerClass() {
			return 'product-card__actions-container';
		},
		get restProps() {
			return restProps;
		},
		getStarClass
	};
}
