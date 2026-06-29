<script lang="ts">
	import type { RecipeFocusable } from '$stylist/interaction/interface/recipe/focusable';
	import createFocusableState from '$stylist/interaction/function/state/focusable/index.svelte';

	let props: RecipeFocusable = $props();
	const state = createFocusableState(props);
</script>

<div
	class={state.classes}
	{...state.restProps}
	onfocus={state.handleFocus}
	onblur={state.handleBlur}
>
	{#if props.children}
		{#if props.children}{#if props.children}{@render props.children()}{/if}{/if}
	{/if}
</div>

<style>
	.c-focusable {
		transition: all var(--duration-100, 100ms) var(--easing-smooth, ease-in-out);
	}

	.c-focusable--focus-ring:focus {
		outline: 2px solid transparent;
		outline-offset: 2px;
		box-shadow: 0 0 0 2px var(--color-primary-500);
	}

	.c-focusable--focused {
		outline: 2px solid transparent;
		outline-offset: 2px;
		box-shadow: 0 0 0 2px var(--color-primary-500);
	}

	.c-focusable--disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}
</style>
