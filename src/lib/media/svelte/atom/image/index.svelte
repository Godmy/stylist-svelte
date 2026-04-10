<script lang="ts">
	import type { HTMLImgAttributes } from 'svelte/elements';
	import { createImageState, type ImageProps } from '$stylist/media/function/state/image';

	let props: ImageProps & HTMLImgAttributes = $props();
	const vm = createImageState(props);

	let isLoaded = $state(false);
	let hasError = $state(false);

	// Определяем, какой источник использовать
	const imageSource = $derived(hasError && vm.fallback ? vm.fallback : vm.src);

	// Генерируем CSS классы
	const loadedClass = $derived(isLoaded ? 'opacity-[var(--opacity-100)]' : 'opacity-[var(--opacity-0)]');
	const imageClasses = $derived(
		`${vm.baseClasses} ${loadedClass} ${vm.transitionClass} ${vm.sizeClasses} ${props.class ?? ''}`
	);

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
</script>

<div class={vm.containerClass}>
	{#if vm.content && !isLoaded && !hasError}
		<div class={vm.wrapperClass}>
			{@render vm.content()}
		</div>
	{/if}

	<img
		{...vm.restProps}
		src={imageSource}
		alt={props.alt ?? ''}
		loading={vm.loadingProp}
		width={vm.width}
		height={vm.height}
		class={imageClasses}
		onerror={handleError}
		onload={handleLoad}
	/>
</div>
