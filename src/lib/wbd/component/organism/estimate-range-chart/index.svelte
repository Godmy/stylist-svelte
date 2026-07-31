<script lang="ts">
	import createEstimateRangeChartState from '$stylist/wbd/function/state/estimate-range-chart/index.svelte';
	import type { RecipeEstimateRangeChart } from '$stylist/wbd/interface/recipe/estimate-range-chart';

	let props: RecipeEstimateRangeChart = $props();
	const state = createEstimateRangeChartState(props);
</script>

<div class="wbd-range-chart {state.className}">
	<div class="wbd-range-chart__axis">
		<span>{state.scaleMin}{state.unit}</span>
		<span>{state.scaleMax}{state.unit}</span>
	</div>
	<div class="wbd-range-chart__rows">
		{#each state.bars as bar (bar.taskId)}
			<button type="button" class="wbd-range-chart__row" onclick={() => state.selectTask(bar.taskId)}>
				<span class="wbd-range-chart__label" title={bar.label}>{bar.label}</span>
				<span class="wbd-range-chart__track">
					<span
						class="wbd-range-chart__span"
						style={`left: ${bar.optimisticPercent}%; width: ${bar.pessimisticPercent - bar.optimisticPercent}%;`}
					></span>
					<span class="wbd-range-chart__marker" style={`left: ${bar.expectedPercent}%;`}></span>
				</span>
				<span class="wbd-range-chart__value">
					{bar.optimisticLabel}–{bar.expectedLabel}–{bar.pessimisticLabel}{state.unit}
				</span>
			</button>
		{/each}
	</div>
</div>

<style>
	.wbd-range-chart {
		display: flex;
		flex-direction: column;
		gap: 0.375rem;
	}
	.wbd-range-chart__axis {
		display: flex;
		justify-content: space-between;
		padding-left: 11rem;
		font-size: 0.6875rem;
		color: var(--color-text-tertiary, #64748b);
	}
	.wbd-range-chart__rows {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}
	.wbd-range-chart__row {
		display: grid;
		grid-template-columns: 11rem 1fr 8rem;
		align-items: center;
		gap: 0.75rem;
		padding: 0.25rem 0.375rem;
		border: none;
		border-radius: 0.375rem;
		background: transparent;
		text-align: left;
		cursor: pointer;
		font: inherit;
	}
	.wbd-range-chart__row:hover {
		background: var(--color-background-secondary, #f1f5f9);
	}
	.wbd-range-chart__label {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		font-size: 0.8125rem;
		color: var(--color-text-primary, #0f172a);
	}
	.wbd-range-chart__track {
		position: relative;
		height: 0.5rem;
		border-radius: 9999px;
		background: var(--color-background-secondary, #f1f5f9);
	}
	.wbd-range-chart__span {
		position: absolute;
		top: 0;
		height: 100%;
		border-radius: 9999px;
		background: var(--color-primary-200, #bfdbfe);
	}
	.wbd-range-chart__marker {
		position: absolute;
		top: -0.1875rem;
		width: 0.25rem;
		height: 0.875rem;
		border-radius: 9999px;
		background: var(--color-primary-600, #2563eb);
		transform: translateX(-50%);
	}
	.wbd-range-chart__value {
		font-size: 0.75rem;
		color: var(--color-text-tertiary, #64748b);
		text-align: right;
		white-space: nowrap;
	}
</style>
