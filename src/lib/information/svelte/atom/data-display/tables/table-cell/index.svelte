<script lang="ts">
	import type { TableCellRecipe as TableCellRecipe } from '$stylist/information/interface/recipe/table-cell';
	import { createTableCellState } from '$stylist/information/function/state/table-cell';

	let props: TableCellRecipe = $props();
	const state = createTableCellState(props);

</script>

{#if state.variant === 'header'}
	<th class={state.classes} {...state.restProps}>
		{#if props.content}
			{@render props.content()}
		{/if}
	</th>
{:else}
	<td class={state.classes} {...state.restProps}>
		{#if props.content}
			{@render props.content()}
		{/if}
	</td>
{/if}


