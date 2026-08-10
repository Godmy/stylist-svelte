<script lang="ts">
	import type { RecipeAnimated } from '$stylist/animation/interface/recipe/animated';
	import createAnimatedState from './state.svelte';

	let props: RecipeAnimated = $props();
	const state = createAnimatedState(props);
</script>

<div class={state.classes} style={state.inlineStyle}>
	{#if state.children}
		{@render state.children()}
	{:else}
		{state.formattedValue}
	{/if}
</div>

<style>
	.c-animated {
		will-change: transform;
	}

	.c-animated--infinite {
		animation-iteration-count: infinite;
	}
</style>
