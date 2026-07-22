import type { RecipeImage } from '$stylist/media/interface/recipe/image';
import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

export function createImageState(props: RecipeImage) {
	let isLoaded = $state(false);
	let hasError = $state(false);

	const src = $derived(props.src);
	const fallback = $derived(props.fallback);
	const loadingProp = $derived(props.loading ?? 'lazy');
	const width = $derived(props.width);
	const height = $derived(props.height);
	const content = $derived(props.content);
	const size = $derived(props.size ?? 'md');

	const containerClass = $derived('c-image');
	const wrapperClass = $derived('c-image__placeholder');

	const imageSource = $derived(hasError && fallback ? fallback : src);
	const imageClasses = $derived(
		mergeClassNames(
			'c-image__img',
			`c-image__img--${size}`,
			isLoaded ? 'c-image__img--loaded' : '',
			props.class ?? ''
		)
	);

	const restProps = $derived.by(() => {
		const {
			src: _src,
			alt: _alt,
			fallback: _fallback,
			loading: _loading,
			width: _width,
			height: _height,
			content: _content,
			onLoad: _onLoad,
			onError: _onError,
			children: _children,
			class: _class,
			variant: _variant,
			size: _size,
			...rest
		} = props;
		return rest;
	});

	function handleLoad() {
		isLoaded = true;
		props.onLoad?.();
	}

	function handleError() {
		hasError = true;
		props.onError?.();
	}

	return {
		get isLoaded() {
			return isLoaded;
		},
		get hasError() {
			return hasError;
		},
		get imageSource() {
			return imageSource;
		},
		get imageClasses() {
			return imageClasses;
		},
		get containerClass() {
			return containerClass;
		},
		get wrapperClass() {
			return wrapperClass;
		},
		get loadingProp() {
			return loadingProp;
		},
		get width() {
			return width;
		},
		get height() {
			return height;
		},
		get content() {
			return content;
		},
		get restProps() {
			return restProps;
		},
		handleLoad,
		handleError
	};
}
