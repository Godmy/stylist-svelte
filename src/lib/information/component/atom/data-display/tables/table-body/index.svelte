<script lang="ts">
	import type { TableSectionRecipe as TableSectionRecipe } from '$stylist/information/interface/recipe/table-section';
	import { createTableBodyState } from '$stylist/information/function/state/table-body';

	let props: TableSectionRecipe = $props();
	const state = createTableBodyState(props);
</script>

<tbody {...state.restProps} class={state.classes}>
	{#if props.content}
		{@render props.content()}
	{/if}
</tbody>


