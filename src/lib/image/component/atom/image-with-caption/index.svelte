<script lang="ts">
	import type { RecipeImageWithCaption } from '$stylist/image/interface/recipe/image-with-caption';
	import { createImageWithCaptionState } from '$stylist/image/function/state/image-with-caption/index.svelte';

	let props: RecipeImageWithCaption = $props();
	const state = createImageWithCaptionState(props);
</script>

<div class={state.hostClasses} {...state.restProps}>
	<img
		src={props.src}
		alt={props.alt ?? 'Image'}
		width={props.width ?? '100%'}
		height={props.height ?? 'auto'}
		loading={props.loading ?? 'lazy'}
		class={state.imageClasses}
	/>
	{#if props.caption}
		<div class={state.captionClasses}>
			{props.caption}
		</div>
	{/if}
</div>

<style>
	.c-image-with-caption {
		display: inline-flex;
		flex-direction: column;
		overflow: hidden;
		border-radius: 0.375rem;
	}
	.c-image-with-caption--rounded {
		border-radius: 0.75rem;
	}
	.c-image-with-caption--bordered {
		border: 1px solid var(--color-border-primary);
	}
	.c-image-with-caption--shadow {
		box-shadow: var(--shadow-sm, 0 1px 2px 0 rgb(0 0 0 / 0.05));
	}
	.c-image-with-caption__image {
		display: block;
		width: 100%;
		object-fit: cover;
	}
	.c-image-with-caption__image--rounded {
		border-radius: 0.75rem;
	}
	.c-image-with-caption__caption {
		padding: 0.5rem 0.75rem;
		font-size: 0.85rem;
		color: var(--color-text-secondary);
		background-color: var(--color-background-secondary);
	}
</style>
