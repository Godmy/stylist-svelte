<script lang="ts">
	import type { ThemeParagraphRecipe } from '$stylist/typography/interface/recipe/paragraph';
	import { createParagraphState } from '$stylist/typography/function/state/paragraph';

	let props: ThemeParagraphRecipe = $props();
	const state = createParagraphState(props);
</script>

<p {...state.restProps} class={state.classes}>
	{#if state.children}
		{@render state.children?.()}
	{/if}
</p>





