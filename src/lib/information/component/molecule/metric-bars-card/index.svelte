<script lang="ts">
	import MetricBar from '$stylist/information/component/atom/metric-bar/index.svelte';
	import createMetricBarsCardState from '$stylist/information/function/state/metric-bars-card/index.svelte';
	import type { RecipeMetricBarsCard } from '$stylist/information/interface/recipe/metric-bars-card';

	let props: RecipeMetricBarsCard = $props();
	const state = createMetricBarsCardState(props);
</script>

<article class={state.containerClasses} {...state.restProps}>
	<div class={state.headerClasses}>
		<div>
			<h3 class={state.titleClasses}>{state.label}</h3>
			{#if state.caption}
				<p class={state.captionClasses}>{state.caption}</p>
			{/if}
		</div>

		{#if state.total !== undefined}
			<div class={state.totalClasses}>{state.total}</div>
		{/if}
	</div>

	<div class={state.barsClasses}>
		{#each state.bars as bar}
			<MetricBar
				label={bar.label}
				value={bar.value}
				valueLabel={bar.valueLabel ?? bar.value}
				percentage={bar.percentage}
				color={bar.color ?? state.color}
				trackColor={state.trackColor}
			/>
		{/each}
	</div>
</article>

<style>
	.metric-bars-card {
		display: flex;
		flex-direction: column;
		gap: 1.25rem;
		min-width: 0;
		padding: 1.5rem;
		border: 1px solid var(--color-border-default, var(--color-border-primary, #d1d5db));
		border-radius: 1rem;
		background: var(--color-background-primary, #ffffff);
		box-shadow: var(--shadow-sm, 0 1px 2px rgb(15 23 42 / 0.08));
	}

	.metric-bars-card__header {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
		gap: 1rem;
		min-width: 0;
	}

	.metric-bars-card__title {
		margin: 0;
		font-size: 1.125rem;
		font-weight: 700;
		line-height: 1.5rem;
		color: var(--color-text-primary, #111827);
	}

	.metric-bars-card__caption {
		margin: 0.25rem 0 0;
		font-size: 0.875rem;
		line-height: 1.35rem;
		color: var(--color-text-secondary, #4b5563);
	}

	.metric-bars-card__total {
		flex: 0 0 auto;
		font-size: 1.125rem;
		font-weight: 700;
		line-height: 1.5rem;
		color: var(--color-text-primary, #111827);
		font-variant-numeric: tabular-nums;
	}

	.metric-bars-card__bars {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
</style>
