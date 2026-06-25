<script lang="ts">
	import type { RecipeTableRow as RecipeTableRow } from '$stylist/table/interface/recipe/table-row';
	import createTableRowState from '$stylist/table/function/state/table-row/index.svelte';

	let props: RecipeTableRow = $props();
	const state = createTableRowState(props);
</script>

<tr {...state.restProps} class={state.classes}>
	{#if props.content}
		{@render props.content()}
	{/if}
</tr>

<style>
</style>
