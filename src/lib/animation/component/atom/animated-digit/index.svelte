<script lang="ts">
	import type { RecipeAnimatedDigit } from '$stylist/animation/interface/recipe/animated-digit';
	import createAnimatedDigitState from './state.svelte';

	let props: RecipeAnimatedDigit = $props();
	const state = createAnimatedDigitState(props);
</script>

<div class={state.classes} style={state.inlineStyle}>
	{#if state.children}
		{@render state.children()}
	{:else}
		{state.formattedValue}
	{/if}
</div>

<style>
	.c-animated-digit {
		will-change: transform;
	}

	.c-animated-digit--infinite {
		animation-iteration-count: infinite;
	}
</style>
