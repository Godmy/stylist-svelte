<script lang="ts">
	import type { RecipeImage } from '$stylist/media/interface/recipe/image';
	import { createImageState } from '$stylist/media/function/state/image/index.svelte';

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
		{...state.restProps}
		src={state.imageSource}
		alt={props.alt ?? ''}
		loading={state.loadingProp}
		width={state.width}
		height={state.height}
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
		background-color: var(--color-background-secondary);
		border-radius: 0.375rem;
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
		height: auto;
		object-fit: cover;
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
		max-width: 100%;
	}
	.image__favicon-image {
		display: inline-block;
		border-radius: 0.125rem;
	}

	.image__favicon-fallback {
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: var(--color-background-secondary);
		color: var(--color-text-secondary);
		font-size: 0.75rem;
		line-height: 1rem;
	}
</style>
