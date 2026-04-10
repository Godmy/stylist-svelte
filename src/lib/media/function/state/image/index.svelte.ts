import type { HTMLImgAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

export type ImageSize = 'sm' | 'md' | 'lg' | 'xl';

const SIZE_CLASSES: Record<ImageSize, string> = {
	sm: 'max-w-[200px] h-auto',
	md: 'max-w-[400px] h-auto',
	lg: 'max-w-[600px] h-auto',
	xl: 'max-w-full h-auto'
};

export interface ImageProps {
	variant?: 'default';
	size?: ImageSize;
	src: string;
	alt?: string;
	fallback?: string;
	loading?: 'lazy' | 'eager';
	width?: number | string;
	height?: number | string;
	content?: Snippet;
	onLoad?: () => void;
	onError?: () => void;
	children?: any;
	class?: string;
}

export function createImageState(props: ImageProps & HTMLImgAttributes) {
	const src = $derived(props.src);
	const fallback = $derived(props.fallback);
	const loadingProp = $derived(props.loading ?? 'lazy');
	const width = $derived(props.width);
	const height = $derived(props.height);
	const content = $derived(props.content);
	const size = $derived((props.size ?? 'md') as ImageSize);
	const sizeClasses = $derived(SIZE_CLASSES[size]);

	const baseClasses = $derived('block max-w-full h-auto object-cover');
	const transitionClass = $derived('transition-opacity duration-[var(--duration-200)]');

	const containerClass = $derived('relative inline-block overflow-clip bg-[var(--color-background-secondary)] rounded-md');
	const wrapperClass = $derived('flex items-center justify-center w-full h-full min-h-[100px] text-[var(--color-text-secondary)]');

	const restProps = $derived.by(() => {
		const { src: _src, alt: _alt, fallback: _fallback, loading: _loading, width: _width, height: _height, content: _content, onLoad: _onLoad, onError: _onError, children: _children, class: _class, variant: _variant, size: _size, ...rest } = props;
		return rest;
	});

	return {
		get src() { return src; },
		get fallback() { return fallback; },
		get loadingProp() { return loadingProp; },
		get width() { return width; },
		get height() { return height; },
		get content() { return content; },
		get size() { return size; },
		get sizeClasses() { return sizeClasses; },
		get baseClasses() { return baseClasses; },
		get transitionClass() { return transitionClass; },
		get containerClass() { return containerClass; },
		get wrapperClass() { return wrapperClass; },
		get restProps() { return restProps; }
	};
}

export default createImageState;
