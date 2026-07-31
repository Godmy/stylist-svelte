<script lang="ts">
	import createConvergenceChartState from '$stylist/wbd/function/state/convergence-chart/index.svelte';
	import type { RecipeConvergenceChart } from '$stylist/wbd/interface/recipe/convergence-chart';

	let props: RecipeConvergenceChart = $props();
	const state = createConvergenceChartState(props);
</script>

<div class="wbd-convergence-chart {state.className}">
	<span class="wbd-convergence-chart__label">{state.taskLabel}</span>
	<div class="wbd-convergence-chart__bars">
		{#each state.bars as bar (bar.roundNumber)}
			<div class="wbd-convergence-chart__bar-wrap">
				<div
					class="wbd-convergence-chart__bar"
					style={`height: ${Math.max(bar.heightPercent, 4)}%;`}
				></div>
				<span class="wbd-convergence-chart__round">R{bar.roundNumber}</span>
			</div>
		{/each}
	</div>
</div>

<style>
	.wbd-convergence-chart {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
	.wbd-convergence-chart__label {
		font-size: 0.875rem;
		font-weight: 600;
		color: var(--color-text-primary, #0f172a);
	}
	.wbd-convergence-chart__bars {
		display: flex;
		align-items: flex-end;
		gap: 0.75rem;
		height: 6rem;
	}
	.wbd-convergence-chart__bar-wrap {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.25rem;
		height: 100%;
		justify-content: flex-end;
	}
	.wbd-convergence-chart__bar {
		width: 1.5rem;
		border-radius: 0.25rem 0.25rem 0 0;
		background: var(--color-primary-500, #3b82f6);
		transition: height var(--duration-300, 300ms) var(--animation-ease, ease);
	}
	.wbd-convergence-chart__round {
		font-size: 0.6875rem;
		color: var(--color-text-tertiary, #64748b);
	}
</style>
