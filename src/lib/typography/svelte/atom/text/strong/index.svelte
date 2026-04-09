<script lang="ts">
	import type { ThemeStrongRecipe } from '$stylist/typography/interface/recipe/strong';
	import { createStrongState } from '$stylist/typography/function/state/strong';

	let props: ThemeStrongRecipe = $props();
	const state = createStrongState(props);
</script>

<strong {...state.restProps} class={state.classes}>
	{#if state.children}
		{@render state.children?.()}
	{/if}
</strong>





