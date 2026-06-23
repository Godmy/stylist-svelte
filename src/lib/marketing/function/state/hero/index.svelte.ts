import type { SlotHero as IHeroProps } from '$stylist/marketing/interface/slot/hero';
import type { TokenBackground } from '$stylist/layout/type/enum/background';
import type { TokenSize } from '$stylist/layout/type/enum/size';
export function createHeroState(props: IHeroProps) {
	const hostClass = $derived(props.class == null ? undefined : String(props.class));
	const title = $derived(props.title);
	const subtitle = $derived(props.subtitle);
	const stats = $derived(props.stats ?? []);
	const primaryCTA = $derived(props.primaryCTA);
	const secondaryCTA = $derived(props.secondaryCTA);
	const backgroundVariant = $derived(props.backgroundVariant ?? 'gradient');
	const backgroundImage = $derived(props.backgroundImage);
	const height = $derived(props.height ?? 'full');
	const children = $derived(props.children);
	const backgroundClasses = $derived('hero__background');
	const ctaContainerClasses = $derived('hero__cta-container');
	const primaryCTAButtonClasses = $derived('hero__cta-button hero__cta-button--primary');
	const secondaryCTAButtonClasses = $derived('hero__cta-button hero__cta-button--secondary');

	function handlePrimaryClick(): void {
		if (primaryCTA?.onClick) {
			primaryCTA.onClick();
		}
	}

	function handleSecondaryClick(): void {
		if (secondaryCTA?.onClick) {
			secondaryCTA.onClick();
		}
	}

	const restProps = $derived.by(() => {
		const { class: _class, ...rest } = props;
		return rest;
	});

	return {
		get title() {
			return title;
		},
		get subtitle() {
			return subtitle;
		},
		get stats() {
			return stats;
		},
		get primaryCTA() {
			return primaryCTA;
		},
		get secondaryCTA() {
			return secondaryCTA;
		},
		get backgroundVariant() {
			return backgroundVariant;
		},
		get backgroundImage() {
			return backgroundImage;
		},
		get height() {
			return height;
		},
		get children() {
			return children;
		},
		get backgroundClasses() {
			return backgroundClasses;
		},
		get ctaContainerClasses() {
			return ctaContainerClasses;
		},
		get primaryCTAButtonClasses() {
			return primaryCTAButtonClasses;
		},
		get secondaryCTAButtonClasses() {
			return secondaryCTAButtonClasses;
		},
		get restProps() {
			return restProps;
		},
		handlePrimaryClick,
		handleSecondaryClick
	};
}

export default createHeroState;
