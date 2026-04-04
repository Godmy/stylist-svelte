<script lang="ts">
	import type { ThemeSubscriptRecipe } from '$stylist/typography/interface/recipe/subscript';
	import { createSubscriptState } from '$stylist/typography/function/state/subscript';

	let props: ThemeSubscriptRecipe = $props();
	const state = createSubscriptState(props);
</script>

<sub {...state.restProps} class={state.classes}>
	{#if state.children}
		{@render state.children?.()}
	{/if}
</sub>





