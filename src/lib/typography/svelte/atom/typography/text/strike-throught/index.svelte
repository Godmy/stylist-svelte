<script lang="ts">
	import type { ThemeStrikeThroughtRecipe } from '$stylist/typography/interface/recipe/strike-throught';
	import { createStrikeThroughtState } from '$stylist/typography/function/state/strike-throught';

	let props: ThemeStrikeThroughtRecipe = $props();
	const state = createStrikeThroughtState(props);
</script>

<span {...state.restProps} class={state.classes}>
	{#if state.children}
		{@render state.children?.()}
	{/if}
</span>





