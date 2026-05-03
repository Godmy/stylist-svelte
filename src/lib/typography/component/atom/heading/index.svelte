<script lang="ts">
	import type { ThemeHeadingRecipe } from '$stylist/typography/interface/recipe/heading';
	import { createHeadingState } from '$stylist/typography/function/state/heading';

	let props: ThemeHeadingRecipe = $props();
	const state = createHeadingState(props);
</script>

<h2 {...state.restProps} class={state.classes} {...state.attrs}>
	{#if state.children}
		{#if state.children}{#if state.children}{@render state.children()}{/if}{/if}
	{/if}
</h2>




