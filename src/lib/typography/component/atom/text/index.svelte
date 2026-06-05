<script lang="ts">
	import type { TextRecipe } from '$stylist/typography/interface/recipe/text';
	import createTextState from '$stylist/typography/function/state/text/index.svelte';

	let props: TextRecipe = $props();
	const state = createTextState(props);
</script>

<span {...state.restProps} class={state.classes} style={state.style}>
	{#if state.children}
		{@render state.children()}
	{:else if state.text}
		{state.text}
	{/if}
</span>

<style>
	.c-typography-text {
		display: inline;
		font-size: var(--typography-font-size, var(--text-size-md, 1rem));
		font-weight: var(--typography-font-weight, 400);
		font-family: var(--typography-font-family, inherit);
		line-height: var(--typography-line-height, 1.5);
		letter-spacing: var(--typography-letter-spacing, normal);
		color: var(--typography-color, var(--color-text-primary));
	}

	.c-typography-text--block {
		display: block;
	}

	.c-typography-text--disabled {
		color: var(--color-text-tertiary);
	}
</style>
