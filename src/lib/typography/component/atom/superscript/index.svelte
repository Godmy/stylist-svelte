<script lang="ts">
	import type { ThemeSuperscriptRecipe } from '$stylist/typography/interface/recipe/superscript';
	import { createSuperscriptState } from '$stylist/typography/function/state/superscript';

	let props: ThemeSuperscriptRecipe = $props();
	const state = createSuperscriptState(props);
</script>

<sup {...state.restProps} class={state.classes}>
	{#if state.children}
		{#if state.children}{#if state.children}{@render state.children()}{/if}{/if}
	{/if}
</sup>





