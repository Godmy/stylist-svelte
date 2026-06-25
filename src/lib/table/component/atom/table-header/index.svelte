<script lang="ts">
	import type { RecipeTableSection as RecipeTableSection } from '$stylist/table/interface/recipe/table-section';
	import createTableHeaderState from '$stylist/table/function/state/table-header/index.svelte';

	let props: RecipeTableSection = $props();
	const state = createTableHeaderState(props);
</script>

<thead {...state.restProps} class={state.classes}>
	{#if props.content}
		{@render props.content()}
	{/if}
</thead>

<style>
</style>
