<script lang="ts">
	import type { HeadingRecipe } from '$stylist/typography/interface/recipe/heading';
	import createHeadingState from '$stylist/typography/function/state/heading/index.svelte';

	let props: HeadingRecipe = $props();
	const state = createHeadingState(props);
</script>

<svelte:element
	this={state.tag}
	{...state.restProps}
	class={state.classes}
	style={state.style}
	{...state.attrs}
>
	{#if state.children}
		{@render state.children()}
	{:else if state.text}
		{state.text}
	{/if}
</svelte:element>

<style>
	.c-typography-heading {
		display: block;
		margin: 0;
		font-size: var(--typography-font-size, 1.5rem);
		font-weight: var(--typography-font-weight, 700);
		font-family: var(--typography-font-family, inherit);
		line-height: var(--typography-line-height, 1.2);
		letter-spacing: var(--typography-letter-spacing, normal);
		color: var(--typography-color, var(--color-text-primary));
	}

	.c-typography-heading--disabled {
		color: var(--color-text-tertiary);
	}

	.c-typography-heading--block {
		display: block;
	}
</style>
