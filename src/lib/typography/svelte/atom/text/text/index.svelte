<script lang="ts">
	import type { ThemeTextRecipe } from '$stylist/typography/interface/recipe/text';
	import { createTextState } from '$stylist/typography/function/state/text';

	let props: ThemeTextRecipe = $props();
	const state = createTextState(props);
</script>

<span {...state.restProps} class={state.classes}>
	{#if state.children}
		{@render state.children?.()}
	{/if}
</span>





