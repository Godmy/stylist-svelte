<script lang="ts">
	import type { ThemeBackgroundRecipe } from '$stylist/layout/interface/recipe/background';
	import { createBackgroundState } from '$stylist/layout/function/state/background';

	let props: ThemeBackgroundRecipe = $props();
	const state = createBackgroundState(props);
</script>

<div class={state.classes} style={state.inlineStyle} {...state.restProps}>
	{#if props.children}
		{@render props.children?.()}
	{/if}
</div>
