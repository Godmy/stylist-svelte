<script lang="ts">
	import type { TableRecipe as TableRecipe } from '$stylist/information/interface/recipe/table';
	import { createTableState } from '$stylist/information/function/state/table';

	let props: TableRecipe = $props();
	const state = createTableState(props);
</script>

<table {...state.restProps} class={state.classes}>
	{#if props.caption}
		<caption class={state.captionClasses}>{props.caption}</caption>
	{/if}
	{#if props.content}
		{@render props.content()}
	{/if}
</table>



