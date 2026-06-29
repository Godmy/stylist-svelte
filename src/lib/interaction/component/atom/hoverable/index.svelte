<script lang="ts">
	import type { RecipeHoverable } from '$stylist/interaction/interface/recipe/hoverable';
	import createHoverableState from '$stylist/interaction/function/state/hoverable/index.svelte';

	let props: RecipeHoverable = $props();
	const state = createHoverableState(props);
</script>

<div
	class={state.classes}
	{...state.restProps}
	onmouseenter={state.handleMouseEnter}
	onmouseleave={state.handleMouseLeave}
>
	{#if props.children}
		{#if props.children}{#if props.children}{@render props.children()}{/if}{/if}
	{/if}
</div>

<style>
	.c-hoverable {
		transition: all var(--duration-150, 150ms) var(--easing-smooth, ease-in-out);
	}

	.c-hoverable--hover-effect:hover {
		opacity: 0.8;
		transform: scale(1.05);
	}

	.c-hoverable--hovered {
		opacity: 0.8;
		transform: scale(1.05);
	}

	.c-hoverable--disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}
</style>
