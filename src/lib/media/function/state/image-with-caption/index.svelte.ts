import type { ContractImageWithCaption } from '$stylist/media/interface/contract/image-with-caption';

export function createImageWithCaptionState(props: ContractImageWithCaption) {
	const hostClasses = $derived(
		[
			'c-image-with-caption',
			props.class,
			props.rounded && 'c-image-with-caption--rounded',
			props.bordered && 'c-image-with-caption--bordered',
			props.shadow && 'c-image-with-caption--shadow',
		]
			.filter(Boolean)
			.join(' ')
	);

	const imageClasses = $derived(
		[
			'c-image-with-caption__image',
			props.imageClass,
			props.rounded && 'c-image-with-caption__image--rounded',
		]
			.filter(Boolean)
			.join(' ')
	);

	const captionClasses = $derived(
		['c-image-with-caption__caption', props.captionClass].filter(Boolean).join(' ')
	);

	return {
		get hostClasses() {
			return hostClasses;
		},
		get imageClasses() {
			return imageClasses;
		},
		get captionClasses() {
			return captionClasses;
		}
	};
}
