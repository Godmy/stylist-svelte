<script lang="ts">
	import type { RecipeTable as RecipeTable } from '$stylist/table/interface/recipe/table';
	import createTableState from '$stylist/table/function/state/table/index.svelte';

	let props: RecipeTable = $props();
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

<style>
</style>
