<script lang="ts">
	import type { TextRecipe } from '$stylist/typography/interface/recipe/text';
	import createParagraphState from '$stylist/typography/function/state/paragraph/index.svelte';

	let props: TextRecipe = $props();
	const state = createParagraphState(props);
</script>

<p {...state.restProps} class={state.classes} style={state.style}>
	{#if state.children}
		{@render state.children()}
	{:else if state.text}
		{state.text}
	{/if}
</p>

<style>
	.c-typography-paragraph {
		display: block;
		margin: 0;
		font-size: var(--typography-font-size, var(--text-size-md, 1rem));
		font-weight: var(--typography-font-weight, 400);
		font-family: var(--typography-font-family, inherit);
		line-height: var(--typography-line-height, 1.625);
		letter-spacing: var(--typography-letter-spacing, normal);
		color: var(--typography-color, var(--color-text-primary));
	}

	.c-typography-paragraph--block {
		display: block;
	}

	.c-typography-paragraph--disabled {
		color: var(--color-text-tertiary);
	}
</style>
