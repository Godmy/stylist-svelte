<script lang="ts">
	import type { RecipeAnimatedNumber } from '$stylist/animation/interface/recipe/animated-number';
	import createAnimatedNumberState from './state.svelte';

	let props: RecipeAnimatedNumber = $props();
	const state = createAnimatedNumberState(props);
</script>

<span class={state.classes}>
	{state.prefix}{state.formattedValue}{state.suffix}
</span>

<style>
	.c-animation-animated-number {
		font-family: var(--font-family-mono, monospace);
		font-variant-numeric: tabular-nums;
	}
</style>
