import type { ImageProps } from '$stylist/media/type/struct/image';
import { MediaStyleManager } from '$stylist/media/class/style-manager/media';

const SIZE_CLASSES: Record<string, string> = {
	sm: 'max-w-[200px] h-auto',
	md: 'max-w-[400px] h-auto',
	lg: 'max-w-[600px] h-auto',
	xl: 'max-w-full h-auto'
};

export function createImageState(props: ImageProps) {
	let isLoaded = $state(false);
	let hasError = $state(false);

	const src = $derived(props.src);
	const fallback = $derived(props.fallback);
	const loadingProp = $derived(props.loading ?? 'lazy');
	const width = $derived(props.width);
	const height = $derived(props.height);
	const content = $derived(props.content);
	const size = $derived(props.size ?? 'md');
	const sizeClasses = $derived(SIZE_CLASSES[size] ?? '');

	const baseClasses = $derived('block max-w-full h-auto object-cover');
	const transitionClass = $derived('transition-opacity duration-[var(--duration-200)]');

	const containerClass = $derived(
		'relative inline-block overflow-clip bg-[var(--color-background-secondary)] rounded-md'
	);
	const wrapperClass = $derived(
		'flex items-center justify-center w-full h-full min-h-[100px] text-[var(--color-text-secondary)]'
	);

	const imageSource = $derived(hasError && fallback ? fallback : src);
	const loadedClass = $derived(
		isLoaded ? 'opacity-[var(--opacity-100)]' : 'opacity-[var(--opacity-0)]'
	);
	const imageClasses = $derived(
		`${baseClasses} ${loadedClass} ${transitionClass} ${sizeClasses} ${props.class ?? ''}`
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

export default createImageState;
