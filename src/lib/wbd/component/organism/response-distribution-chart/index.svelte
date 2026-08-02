<script lang="ts">
	import createWbdResponseDistributionChartState from '$stylist/wbd/function/state/response-distribution-chart/index.svelte';
	import type { RecipeWbdResponseDistributionChart } from '$stylist/wbd/interface/recipe/response-distribution-chart';

	let props: RecipeWbdResponseDistributionChart = $props();
	const state = createWbdResponseDistributionChartState(props);
</script>

<section class="wbd-response-distribution {state.className}">
	<strong>{state.title}</strong>
	<div class="wbd-response-distribution__chart">
		{#each state.bars as bar (bar.label)}
			<div class="wbd-response-distribution__bar">
				<span style={`height: ${Math.max(4, bar.heightPercent)}%;`}></span>
				<small>{bar.count}</small>
				<label>{bar.label}</label>
			</div>
		{/each}
	</div>
</section>

<style>
	.wbd-response-distribution {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}
	.wbd-response-distribution > strong {
		font-size: 0.875rem;
		color: var(--color-text-primary, #0f172a);
	}
	.wbd-response-distribution__chart {
		display: flex;
		align-items: end;
		gap: 0.5rem;
		height: 9rem;
		padding-top: 1rem;
	}
	.wbd-response-distribution__bar {
		display: grid;
		grid-template-rows: minmax(0, 1fr) auto auto;
		align-items: end;
		justify-items: center;
		gap: 0.25rem;
		min-width: 2.25rem;
		height: 100%;
	}
	.wbd-response-distribution__bar span {
		width: 1.5rem;
		border-radius: 0.25rem 0.25rem 0 0;
		background: var(--color-primary-500, #3b82f6);
	}
	.wbd-response-distribution__bar small,
	.wbd-response-distribution__bar label {
		font-size: 0.6875rem;
		color: var(--color-text-tertiary, #64748b);
	}
</style>
