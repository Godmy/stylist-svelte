import { ProductCardStyleManager } from '$stylist/commerce/class/style-manager/product-card';
import type { TierContent } from '$stylist/architecture/type/enum/tier';
import type { ProductCardStateProps } from '$stylist/commerce/interface/recipe/product-card-state-props';

export function createProductCardState(props: ProductCardStateProps) {
	// Props with defaults
	const variant = $derived(props.variant ?? 'detailed' as TierContent);
	const title = $derived(props.title ?? '');
	const price = $derived(props.price ?? 0);
	const currency = $derived(props.currency ?? '$');
	const image = $derived(props.image ?? '');
	const rating = $derived(props.rating ?? 0);
	const reviewCount = $derived(props.reviewCount ?? 0);
	const badge = $derived(props.badge ?? '');
	const description = $derived(props.description ?? '');

	// Computed
	const badgeKey = $derived(
		badge === 'sale' || badge === 'new' || badge === 'popular' ? badge : 'default'
	);
	const badgeStyles = $derived({
		sale: ProductCardStyleManager.getSaleBadgeClass(),
		new: ProductCardStyleManager.getNewBadgeClass(),
		popular: ProductCardStyleManager.getPopularBadgeClass(),
		default: ProductCardStyleManager.getDefaultBadgeClass()
	}[badgeKey]);

	// Classes
	const containerClass = $derived(ProductCardStyleManager.getContainerClass(props.class ?? '', variant));
	const imageContainerClass = $derived(ProductCardStyleManager.getImageContainerClass(variant));
	const imageClass = $derived(ProductCardStyleManager.getImageClass());
	const badgeClass = $derived(ProductCardStyleManager.getBadgeClass(badgeStyles));
	const titleClass = $derived(ProductCardStyleManager.getTitleClass());
	const priceClass = $derived(ProductCardStyleManager.getPriceClass());
	const descriptionClass = $derived(ProductCardStyleManager.getDescriptionClass());

	// Rest props
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
		get badgeStyles() {
			return badgeStyles;
		},
		get containerClass() {
			return containerClass;
		},
		get imageContainerClass() {
			return imageContainerClass;
		},
		get imageClass() {
			return imageClass;
		},
		get badgeClass() {
			return badgeClass;
		},
		get titleClass() {
			return titleClass;
		},
		get priceClass() {
			return priceClass;
		},
		get descriptionClass() {
			return descriptionClass;
		},
		get restProps() {
			return restProps;
		}
	};
}

export default createProductCardState;
