<script lang="ts">
	import type { TableRowRecipe as TableRowRecipe } from '$stylist/information/interface/recipe/table-row';
	import createTableRowState from '$stylist/information/function/state/table-row/index.svelte';

	let props: TableRowRecipe = $props();
	const state = createTableRowState(props);
</script>

<tr {...state.restProps} class={state.classes}>
	{#if props.content}
		{@render props.content()}
	{/if}
</tr>
