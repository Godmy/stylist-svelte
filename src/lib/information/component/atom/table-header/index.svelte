<script lang="ts">
	import type { TableSectionRecipe as TableSectionRecipe } from '$stylist/information/interface/recipe/table-section';
	import { createTableHeaderState } from '$stylist/information/function/state/table-header';

	let props: TableSectionRecipe = $props();
	const state = createTableHeaderState(props);
</script>

<thead {...state.restProps} class={state.classes}>
	{#if props.content}
		{@render props.content()}
	{/if}
</thead>


