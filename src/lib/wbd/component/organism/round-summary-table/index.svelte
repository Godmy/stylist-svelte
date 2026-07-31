<script lang="ts">
	import createRoundSummaryTableState from '$stylist/wbd/function/state/round-summary-table/index.svelte';
	import type { RecipeRoundSummaryTable } from '$stylist/wbd/interface/recipe/round-summary-table';
	import RoundSummaryCard from '$stylist/wbd/component/molecule/round-summary-card/index.svelte';

	let props: RecipeRoundSummaryTable = $props();
	const state = createRoundSummaryTableState(props);
</script>

<div class="wbd-round-summary-table {state.className}">
	{#each state.rows as row (row.task.id)}
		<RoundSummaryCard task={row.task} summary={row.summary} />
	{/each}
</div>

<style>
	.wbd-round-summary-table {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
		gap: 0.75rem;
	}
</style>
