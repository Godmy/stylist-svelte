<script lang="ts">
	import type { ThemeStrikeThroughtRecipe } from '$stylist/typography/interface/recipe/strike-throught';
	import { createStrikeThroughState } from '$stylist/typography/function/state/strike-throught';

	let props: ThemeStrikeThroughtRecipe = $props();
	const state = createStrikeThroughState(props);
</script>

<span {...state.restProps} class={state.classes}>
	{#if state.children}
		{@render state.children?.()}
	{/if}
</span>





