import type { CtaBannerProps } from '$stylist/marketing/type/struct/cta-banner/ctabanner-props';
export function createCtaBannerState(props: CtaBannerProps) {
	const title = $derived(props.title);
	const description = $derived(props.description);
	const buttons = $derived(props.buttons ?? []);
	const backgroundVariant = $derived(props.backgroundVariant ?? 'gradient');
	const backgroundImage = $derived(props.backgroundImage);
	const className = $derived(props.class ?? '');

	const restProps = $derived.by(() => {
		const { class: _class, ...rest } = props;
		return rest;
	});

	return {
		get title() {
			return title;
		},
		get description() {
			return description;
		},
		get buttons() {
			return buttons;
		},
		get backgroundVariant() {
			return backgroundVariant;
		},
		get backgroundImage() {
			return backgroundImage;
		},
		get restProps() {
			return restProps;
		},
		getButtonClasses: (variant: 'primary' | 'secondary' | 'outline') =>
			['cta-banner__button', variant ? `cta-banner__button--selected` : '']
				.filter(Boolean)
				.join(' ')
	};
}

export default createCtaBannerState;
