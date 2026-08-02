<script lang="ts">
	import createWbdConfidenceDistributionChartState from '$stylist/wbd/function/state/confidence-distribution-chart/index.svelte';
	import type { RecipeWbdConfidenceDistributionChart } from '$stylist/wbd/interface/recipe/confidence-distribution-chart';

	let props: RecipeWbdConfidenceDistributionChart = $props();
	const state = createWbdConfidenceDistributionChartState(props);
</script>

<section class="wbd-confidence-chart {state.className}">
	<strong>Confidence distribution</strong>
	<div>
		{#each state.bars as bar (bar.confidence)}
			<article>
				<span style={`height: ${Math.max(4, bar.heightPercent)}%;`}></span>
				<small>{bar.count}</small>
				<span class="wbd-confidence-chart__label">{bar.confidence}</span>
			</article>
		{/each}
	</div>
</section>

<style>
	.wbd-confidence-chart {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}
	.wbd-confidence-chart > strong {
		font-size: 0.875rem;
		color: var(--color-text-primary, #0f172a);
	}
	.wbd-confidence-chart div {
		display: flex;
		align-items: end;
		gap: 0.75rem;
		height: 8rem;
	}
	.wbd-confidence-chart article {
		display: grid;
		grid-template-rows: minmax(0, 1fr) auto auto;
		justify-items: center;
		align-items: end;
		gap: 0.25rem;
		height: 100%;
	}
	.wbd-confidence-chart article span {
		width: 1.75rem;
		border-radius: 0.25rem 0.25rem 0 0;
		background: var(--color-success-500, #22c55e);
	}
	.wbd-confidence-chart small,
	.wbd-confidence-chart__label {
		font-size: 0.6875rem;
		color: var(--color-text-tertiary, #64748b);
	}
</style>
