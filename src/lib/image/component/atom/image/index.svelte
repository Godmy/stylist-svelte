<script lang="ts">
	import type { RecipeImage } from '$stylist/image/interface/recipe/image';
	import { createImageState } from './state.svelte';

	let props: RecipeImage = $props();
	const state = createImageState(props);
</script>

<div class={state.containerClass}>
	{#if state.content && !state.isLoaded && !state.hasError}
		<div class={state.wrapperClass}>
			{@render state.content()}
		</div>
	{/if}

	<img
		src={state.imageSource}
		alt={props.imageAlt ?? ''}
		loading={state.loadingProp}
		width={state.imageWidth}
		height={state.imageHeight}
		class={state.imageClasses}
		onerror={() => state.handleError()}
		onload={() => state.handleLoad()}
	/>
</div>

<style>
	.c-image {
		position: relative;
		display: inline-block;
		overflow: hidden;
		background-color: var(--image-background, var(--color-background-secondary));
		border-radius: var(--image-radius, 0.375rem);
	}
	.c-image__placeholder {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		min-height: 6.25rem;
		color: var(--color-text-secondary);
	}
	.c-image__img {
		display: block;
		max-width: 100%;
		width: var(--image-width, auto);
		height: var(--image-height, auto);
		object-fit: var(--image-object-fit, cover);
		opacity: 0;
		transition: opacity var(--duration-200, 200ms) var(--easing-smooth, ease-in-out);
	}
	.c-image__img--loaded {
		opacity: 1;
	}
	.c-image__img--sm {
		max-width: 12.5rem;
	}
	.c-image__img--md {
		max-width: 25rem;
	}
	.c-image__img--lg {
		max-width: 37.5rem;
	}
	.c-image__img--xl {
		max-width: none;
	}
</style>
