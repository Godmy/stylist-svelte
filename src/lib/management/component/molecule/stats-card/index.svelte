<script lang="ts">
	import BaseIcon from '$stylist/svg/component/atom/icon/index.svelte';
	import createStatsCardState from '$stylist/management/function/state/stats-card/index.svelte';
	import type { RecipeStatsCard } from '$stylist/management/interface/recipe/stats-card';

	let stateProps: RecipeStatsCard = $props();

	const state = createStatsCardState(stateProps as Parameters<typeof createStatsCardState>[0]);
</script>

<article class={state.containerClasses}>
	<div class={state.headerClasses}>
		<div>
			<p class={state.labelClasses}>{state.label}</p>
			<p class={state.valueClasses}>{state.value}</p>
		</div>

		{#if state.icon}
			<div class={state.iconWrapperClasses}>
				{@render state.icon()}
			</div>
		{/if}
	</div>

	<div class={state.footerClasses}>
		{#if state.trendValue}
			<span class={state.trendContainerClasses}>
				<BaseIcon name={state.trendIconName} class={state.trendIconClasses} />
				{state.trendValue}
			</span>
		{/if}

		{#if state.description}
			<span class={state.descriptionClasses}>{state.description}</span>
		{/if}
	</div>
</article>

<style>
	.c-stats-card {
		border-radius: 0.75rem;
		border: 1px solid var(--color-border-primary);
		background-color: var(--color-background-primary);
		padding: 1.25rem;
		box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
		transition: box-shadow var(--duration-150, 150ms) var(--easing-smooth, ease-in-out);
	}
	.c-stats-card:hover {
		box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
	}
	.c-stats-card__header {
		display: flex;
		align-items: flex-start;
		justify-content: space-between;
	}
	.c-stats-card__label {
		font-size: 0.875rem;
		font-weight: 500;
		color: var(--color-text-secondary);
	}
	.c-stats-card__value {
		margin-top: 0.5rem;
		font-size: 1.5rem;
		font-weight: 600;
		color: var(--color-text-primary);
	}
	.c-stats-card__icon-wrap {
		border-radius: 9999px;
		background-color: var(--color-primary-50);
		padding: 0.75rem;
		color: var(--color-primary-500);
	}
	.c-stats-card__footer {
		margin-top: 0.75rem;
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.875rem;
	}
	.c-stats-card__trend {
		display: inline-flex;
		align-items: center;
		gap: 0.25rem;
		font-weight: 500;
	}
	.c-stats-card__trend--up {
		color: var(--color-success-600, #059669);
	}
	.c-stats-card__trend--down {
		color: var(--color-danger-600);
	}
	.c-stats-card__trend--neutral {
		color: var(--color-text-secondary);
	}
	:global(.c-stats-card__trend-icon) {
		width: 1rem;
		height: 1rem;
	}
	.c-stats-card__description {
		color: var(--color-text-secondary);
	}
</style>
