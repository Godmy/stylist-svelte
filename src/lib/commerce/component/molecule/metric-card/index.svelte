<script lang="ts">
import type { HTMLAttributes } from 'svelte/elements';
	import type { RecipeMetricCard } from '$stylist/commerce/interface/recipe/metric-card';
	import { createMetricCardState } from './state.svelte';

	let props: RecipeMetricCard & HTMLAttributes<HTMLDivElement> = $props();
	const state = createMetricCardState(props);
</script>

<div class="metric-card" role="region" aria-label={`Metric: ${state.label}`}>
	<h3 class="metric-card__title" aria-label={`Metric title: ${state.label}`}>{state.label}</h3>
	<div class="metric-card__value" aria-label={`Value: ${state.value}`}>
		{state.value}
	</div>
	{#if state.description}
		<p class="metric-card__description" aria-label={`Description: ${state.description}`}>
			{state.description}
		</p>
	{/if}

	{#if state.showProgressBar}
		<div class="metric-card__progress-bar-container">
			<div
				class="metric-card__progress-bar"
				role="progressbar"
				aria-valuenow={state.percentage}
				aria-valuemin="0"
				aria-valuemax="100"
				aria-label={`Progress: ${state.percentage}%`}
			>
				<div
					class="metric-card__progress-bar-fill"
					style={`width: ${state.progressBarWidth};`}
					aria-hidden="true"
				></div>
			</div>
			<div class="metric-card__percentage">
				{state.percentage}%
			</div>
		</div>
	{/if}
</div>

<style>
	.metric-card {
		border-radius: 0.5rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		background-color: var(--color-background-primary);
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
		overflow: hidden;
	}

	.metric-card__title {
		margin: 0;
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 500;
		color: var(--color-text-secondary);
	}

	.metric-card__value {
		font-size: 1.5rem;
		line-height: 2rem;
		font-weight: 700;
		color: var(--color-text-primary);
		margin-top: 0.25rem;
	}

	.metric-card__description {
		margin-top: 0.5rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}

	.metric-card__progress-bar-container {
		margin-top: 1rem;
	}

	.metric-card__progress-bar {
		width: 100%;
		height: 0.5rem;
		border-radius: 9999px;
		overflow: hidden;
	}

	.metric-card__progress-bar-fill {
		height: 100%;
		border-radius: inherit;
		background-color: var(--color-primary-500);
		transition: width 150ms ease;
	}

	.metric-card__percentage {
		font-size: 0.75rem;
		line-height: 1rem;
		font-weight: 500;
		margin-top: 0.25rem;
	}
</style>
