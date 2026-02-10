<script lang="ts">
	import type { HTMLImgAttributes } from 'svelte/elements';
	import type { Snippet } from 'svelte';

	// РРјРїРѕСЂС‚РёСЂСѓРµРј С‚РѕРєРµРЅС‹ РёР· СЃРёСЃС‚РµРјС‹ РґРёР·Р°Р№РЅР°
	import { TRANSITION_CLASSES } from '$stylist/design-system/classes';

	// РўРёРїС‹ РґР»СЏ РёР·РѕР±СЂР°Р¶РµРЅРёСЏ
	export type ImageSize = 'sm' | 'md' | 'lg' | 'xl';
	export type ImageProps = {
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
	};

	let props: ImageProps & HTMLImgAttributes = $props();

	let isLoaded = $state(false);
	let hasError = $state(false);

	const src = $derived(props.src);
	const fallback = $derived(props.fallback);
	const loadingProp = $derived(props.loading ?? 'lazy');
	const width = $derived(props.width);
	const height = $derived(props.height);
	const content = $derived(props.content);
	const children = $derived(props.children);

	// РСЃРєР»СЋС‡Р°РµРј СѓР¶Рµ РёСЃРїРѕР»СЊР·СѓРµРјС‹Рµ props
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
		...imgProps
	} = props;

	// Р Р°Р·РјРµСЂС‹ РґР»СЏ РёР·РѕР±СЂР°Р¶РµРЅРёР№
	const SIZE_CLASSES: Record<ImageSize, string> = {
		sm: 'max-w-[200px] h-auto',
		md: 'max-w-[400px] h-auto',
		lg: 'max-w-[600px] h-auto',
		xl: 'max-w-full h-auto'
	};

	const size = $derived((props.size ?? 'md') as ImageSize);
	const sizeClasses = $derived(SIZE_CLASSES[size]);

	function handleError() {
		if (props.onError) {
			props.onError();
		}
		hasError = true;
	}

	function handleLoad() {
		isLoaded = true;
		if (props.onLoad) {
			props.onLoad();
		}
	}

	// РћРїСЂРµРґРµР»СЏРµРј, РєР°РєРѕР№ РёСЃС‚РѕС‡РЅРёРє РёСЃРїРѕР»СЊР·РѕРІР°С‚СЊ
	const imageSource = $derived(hasError && fallback ? fallback : src);

	// Р“РµРЅРµСЂРёСЂСѓРµРј CSS РєР»Р°СЃСЃС‹
	const baseClasses = 'block max-w-full h-auto object-cover';
	const loadedClass = $derived(isLoaded ? 'opacity-100' : 'opacity-0');
	const transitionClass = TRANSITION_CLASSES.opacity;
	const imageClasses = $derived(
		`${baseClasses} ${loadedClass} ${transitionClass} ${sizeClasses} ${props.class ?? ''}`
	);

	const containerClass =
		'relative inline-block overflow-clip bg-[var(--color-background-secondary)] rounded-md';
	const wrapperClass =
		'flex items-center justify-center w-full h-full min-h-[100px] text-[var(--color-text-secondary)]';
</script>

<div class={containerClass}>
	{#if content && !isLoaded && !hasError}
		<div class={wrapperClass}>
			{@render content()}
		</div>
	{/if}

	<img
		{...imgProps}
		src={imageSource}
		alt={props.alt ?? ''}
		loading={loadingProp}
		{width}
		{height}
		class={imageClasses}
		onerror={handleError}
		onload={handleLoad}
	/>
</div>

