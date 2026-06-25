<script lang="ts">
	import type { RecipeTableCell as RecipeTableCell } from '$stylist/table/interface/recipe/table-cell';
	import createTableCellState from '$stylist/table/function/state/table-cell/index.svelte';

	let props: RecipeTableCell = $props();
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

<style>
</style>
