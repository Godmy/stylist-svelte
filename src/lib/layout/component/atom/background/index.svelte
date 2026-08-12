<script lang="ts">
	import type { RecipeBackground } from '$stylist/layout/interface/recipe/background';
	import createBackgroundState from './state.svelte';

	let props: RecipeBackground = $props();
	const state = createBackgroundState(props);
</script>

<div
	class={['layout-bg', props.class].filter(Boolean).join(' ')}
	style={state.inlineStyle}
	{...state.restProps}
>
	{#if props.children}
		{@render props.children()}
	{/if}
</div>

<style>
	.layout-bg {
		position: relative;
	}
</style>
