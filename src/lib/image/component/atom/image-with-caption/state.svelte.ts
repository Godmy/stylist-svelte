import type { RecipeImageWithCaption } from '$stylist/image/interface/recipe/image-with-caption';

export function createImageWithCaptionState(props: RecipeImageWithCaption) {
	const hostClasses = $derived(
		[
			'c-image-with-caption',
			props.class,
			props.rounded && 'c-image-with-caption--rounded',
			props.bordered && 'c-image-with-caption--bordered',
			props.shadow && 'c-image-with-caption--shadow'
		]
			.filter(Boolean)
			.join(' ')
	);

	const imageClasses = $derived(
		[
			'c-image-with-caption__image',
			props.imageClass,
			props.rounded && 'c-image-with-caption__image--rounded'
		]
			.filter(Boolean)
			.join(' ')
	);

	const captionClasses = $derived(
		['c-image-with-caption__caption', props.captionClass].filter(Boolean).join(' ')
	);

	const restProps = $derived.by(() => {
		const {
			class: _class,
			src: _src,
			alt: _alt,
			caption: _caption,
			width: _width,
			height: _height,
			imageClass: _imageClass,
			captionClass: _captionClass,
			rounded: _rounded,
			bordered: _bordered,
			shadow: _shadow,
			loading: _loading,
			...rest
		} = props;
		return rest;
	});

	return {
		get hostClasses() {
			return hostClasses;
		},
		get imageClasses() {
			return imageClasses;
		},
		get captionClasses() {
			return captionClasses;
		},
		get restProps() {
			return restProps;
		}
	};
}
