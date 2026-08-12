import { ClassNamesManager } from '$stylist/layout/class/object-manager/class-names';
import type { RecipePromoBanner } from '$stylist/marketing/interface/recipe/promo-banner';

export function createPromoBannerState(props: RecipePromoBanner) {
	const title = $derived(props.title ?? '');
	const description = $derived(props.description ?? '');
	const cta = $derived(props.cta ?? 'Learn More');
	const image = $derived(props.image ?? '');
	const variant = $derived(props.variant ?? 'primary');
	const onCtaClick = $derived(props.onCtaClick ?? (() => {}));
	const className = $derived(props.class ?? '');
	const variantClasses = $derived(`pb-host--${variant}`);
	const hostClasses = $derived(ClassNamesManager.merge('pb-host', variantClasses, className));

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
