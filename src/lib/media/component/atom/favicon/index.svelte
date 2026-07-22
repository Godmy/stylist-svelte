<script lang="ts">
	import type { RecipeFavicon } from '$stylist/media/interface/recipe/favicon';
	import { createFaviconState } from '$stylist/media/function/state/favicon/index.svelte';

	let props: RecipeFavicon = $props();
	const state = createFaviconState(props);
</script>

{#if state.faviconUrl && !state.error}
	<img
		src={state.faviconUrl}
		width={state.size}
		height={state.size}
		class={state.classes.image}
		onerror={() => state.handleError()}
		{...state.restProps}
	/>
{:else}
	<div class={state.classes.fallback} style={state.sizeStyle}>
		{#if props.content}
			{@render props.content()}
		{:else}
			?
		{/if}
	</div>
{/if}

<style>
	.favicon__favicon-image {
		display: inline-block;
		border-radius: 0.125rem;
		object-fit: contain;
	}
	.favicon__favicon-fallback {
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: var(--color-background-secondary);
		color: var(--color-text-secondary);
		font-size: 0.75rem;
		border-radius: 0.125rem;
	}
</style>
