<script lang="ts">
	import createWbdMedianTrendChartState from '$stylist/wbd/function/state/median-trend-chart/index.svelte';
	import type { RecipeWbdMedianTrendChart } from '$stylist/wbd/interface/recipe/median-trend-chart';

	let props: RecipeWbdMedianTrendChart = $props();
	const state = createWbdMedianTrendChartState(props);
</script>

<section class="wbd-median-trend {state.className}">
	<strong>{state.title}</strong>
	<div>
		{#each state.points as point (point.roundNumber)}
			<article>
				<span style={`height: ${Math.max(4, point.heightPercent)}%;`}></span>
				<small>{point.value}</small>
				<label>R{point.roundNumber}</label>
			</article>
		{/each}
	</div>
</section>

<style>
	.wbd-median-trend {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}
	.wbd-median-trend > strong {
		font-size: 0.875rem;
		color: var(--color-text-primary, #0f172a);
	}
	.wbd-median-trend div {
		display: flex;
		align-items: end;
		gap: 0.75rem;
		height: 8rem;
	}
	.wbd-median-trend article {
		display: grid;
		grid-template-rows: minmax(0, 1fr) auto auto;
		justify-items: center;
		align-items: end;
		gap: 0.25rem;
		height: 100%;
	}
	.wbd-median-trend article span {
		width: 1.75rem;
		border-radius: 0.25rem 0.25rem 0 0;
		background: var(--color-primary-500, #3b82f6);
	}
	.wbd-median-trend small,
	.wbd-median-trend label {
		font-size: 0.6875rem;
		color: var(--color-text-tertiary, #64748b);
	}
</style>
