<script lang="ts">
	import createContainerQueryState from './state.svelte';
	import type { RecipeContainerQuery } from '$stylist/layout/interface/recipe/container-query';

	let props: RecipeContainerQuery = $props();
	const state = createContainerQueryState(props);
</script>

<div
	class={['layout-container-query', props.class].filter(Boolean).join(' ')}
	style={state.containerStyle}
	{...state.restProps}
>
	{#if props.children}{@render props.children()}{/if}
</div>

<style>
	.layout-container-query {
		width: 100%;
	}
</style>
