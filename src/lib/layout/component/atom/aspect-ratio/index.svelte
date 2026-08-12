<script lang="ts">
	import type { RecipeAspectRatio } from '$stylist/layout/interface/recipe/aspect-ratio';
	import createAspectRatioState from './state.svelte';

	let props: RecipeAspectRatio = $props();
	const state = createAspectRatioState(props);
</script>

<div
	class={['layout-aspect-ratio', props.class].filter(Boolean).join(' ')}
	style:--aspect-ratio={state.ratio}
	{...state.restProps}
>
	{#if props.children}{@render props.children()}{/if}
</div>

<style>
	.layout-aspect-ratio {
		position: relative;
		width: 100%;
		aspect-ratio: var(--aspect-ratio, 1);
		overflow: hidden;
	}
</style>
