<script lang="ts">
	import createRoundSummaryCardState from '$stylist/wbd/function/state/round-summary-card/index.svelte';
	import type { RecipeRoundSummaryCard } from '$stylist/wbd/interface/recipe/round-summary-card';

	let props: RecipeRoundSummaryCard = $props();
	const state = createRoundSummaryCardState(props);
</script>

<div class="wbd-round-summary-card {state.className}">
	<div class="wbd-round-summary-card__header">
		<span class="wbd-round-summary-card__label">{state.task.label}</span>
		<span class="wbd-round-summary-card__spread">spread: {state.spread.toFixed(1)}</span>
	</div>
	<div class="wbd-round-summary-card__stats">
		<span>min {state.summary.min.toFixed(1)}</span>
		<span>mean {state.summary.mean.toFixed(1)}</span>
		<span>median {state.summary.median.toFixed(1)}</span>
		<span>max {state.summary.max.toFixed(1)}</span>
	</div>
</div>

<style>
	.wbd-round-summary-card {
		padding: 0.75rem 1rem;
		border: 1px solid var(--color-border-primary, #e2e8f0);
		border-radius: 0.5rem;
		background: var(--color-background-primary, #fff);
	}
	.wbd-round-summary-card__header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 0.5rem;
	}
	.wbd-round-summary-card__label {
		font-size: 0.875rem;
		font-weight: 600;
		color: var(--color-text-primary, #0f172a);
	}
	.wbd-round-summary-card__spread {
		font-size: 0.75rem;
		color: var(--color-text-tertiary, #64748b);
	}
	.wbd-round-summary-card__stats {
		display: flex;
		gap: 0.75rem;
		font-size: 0.75rem;
		color: var(--color-text-secondary, #475569);
	}
</style>
