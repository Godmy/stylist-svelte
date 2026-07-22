import type { RecipePromoBanner } from '$stylist/media/interface/recipe/promo-banner';
import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

export function createPromoBannerState(props: RecipePromoBanner) {
	const title = $derived(props.title ?? '');
	const description = $derived(props.description ?? '');
	const cta = $derived(props.cta ?? 'Learn More');
	const link = $derived(props.link ?? '#');
	const image = $derived(props.image ?? '');
	const variant = $derived(props.variant ?? 'primary');
	const onCtaClick = $derived(props.onCtaClick ?? (() => {}));
	const className = $derived(props.class ?? '');
	const variantClasses = $derived(`pb-host--${variant}`);
	const hostClasses = $derived(mergeClassNames('pb-host', variantClasses, className));

	return {
		get title() {
			return title;
		},
		get description() {
			return description;
		},
		get cta() {
			return cta;
		},
		get link() {
			return link;
		},
		get image() {
			return image;
		},
		get variant() {
			return variant;
		},
		get onCtaClick() {
			return onCtaClick;
		},
		get className() {
			return className;
		},
		get variantClasses() {
			return variantClasses;
		},
		get hostClasses() {
			return hostClasses;
		}
	};
}
