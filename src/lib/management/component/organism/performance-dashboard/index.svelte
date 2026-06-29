<script lang="ts">
	import Icon from '$stylist/svg/component/atom/icon/index.svelte';
	import createPerformanceDashboardState from '$stylist/management/function/state/performance-dashboard/index.svelte';
	import type { RecipePerformanceDashboard } from '$stylist/management/interface/recipe/performance-dashboard';
	import type { TokenTimeRange } from '$stylist/management/type/alias/token-time-range';

	let props: RecipePerformanceDashboard = $props();
	const state = createPerformanceDashboardState(props);
</script>

<div class={state.containerClass} {...state.restProps}>
	<div class={state.headerClassComputed}>
		<div class="_c1">
			<div>
				<div class="_c2">
					<Icon name="activity" size="md" class="_c3" />
					<h3 class="_c4">{state.label}</h3>
				</div>
				{#if state.subtitle}
					<p class="_c5">{state.subtitle}</p>
				{/if}
			</div>

			{#if state.showTimeRangeSelector}
				<div class="_c6">
					<div class="_c7">
						{#each state.timeRanges as range}
							<button
								type="button"
								class={state.selectedTimeRange === range
									? state.activeTimeRangeButtonClass
									: state.timeRangeButtonClass}
								onclick={() => state.handleTimeRangeChange(range as TokenTimeRange)}
								aria-label={`Set time range to ${range}`}
							>
								{state.getTimeRangeLabel(range as TokenTimeRange)}
							</button>
						{/each}
					</div>
				</div>
			{/if}
		</div>
	</div>

	<div class={state.metricsGridClass}>
		{#each state.metrics as metric}
			<div class={state.metricCardClassComputed}>
				<div class={state.metricHeaderClass}>
					<div class="${metric.color} _c1">
						<metric.icon class="_c8" />
					</div>
					<div
						class="${metric.changeType === 'positive'
							? state.trendPositiveClass
							: state.trendNegativeClass} _c2"
					>
						{#if metric.changeType === 'positive'}
							<Icon name="trending-up" size="sm" class="_c9" />
						{:else}
							<Icon name="trending-down" size="sm" class="_c9" />
						{/if}
						<span>{Math.abs(metric.change)}%</span>
					</div>
				</div>
				<div class="_c10">
					<h3 class={state.metricTitleClass}>{metric.title}</h3>
					<p class={state.metricValueClass}>{metric.value}</p>
				</div>
			</div>
		{/each}

		<div class={state.chartContainerClass}>
			<div class="_c11">
				<h4 class="_c12">Performance Trend</h4>
				<div class="_c13">
					<span class="_c14">
						<Icon name="arrow-up" size="sm" class="_c15" />
						Good
					</span>
					<span class="_c16">
						<Icon name="arrow-down" size="sm" class="_c15" />
						Needs attention
					</span>
				</div>
			</div>
			<div class="_c17">
				{#each state.chartBarHeights as chartBarHeight, i}
					<div
						class={state.chartBarClass}
						style={`height: ${chartBarHeight}%`}
						aria-label={`Chart bar ${i + 1}`}
					></div>
				{/each}
			</div>
		</div>
	</div>
</div>

<style>
	._c1 {
		display: flex;
		flex-direction: column;
		padding: 1rem;
	}
	@media (min-width: 640px) {
		._c1 {
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
		}
	}
	._c10 {
		margin-top: 1rem;
	}
	._c11 {
		margin-bottom: 1rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	._c12 {
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 500;
		color: var(--color-text-primary);
	}
	._c13 {
		display: flex;
		align-items: center;
		font-size: 0.875rem;
		line-height: 1.25rem;
	}
	._c14 {
		margin-right: 1rem;
		color: var(--color-success-600);
	}
	._c15 {
		margin-right: 0.25rem;
		display: inline;
	}
	._c16 {
		color: var(--color-danger-600);
	}
	._c17 {
		display: flex;
		height: 12rem;
		align-items: flex-end;
	}
	._c17 > * + * {
		margin-left: 0.5rem;
	}
	._c2 {
		display: flex;
		align-items: center;
	}
	._c3 {
		margin-right: 0.5rem;
		color: var(--color-text-secondary);
	}
	._c4 {
		font-size: 1.125rem;
		line-height: 1.75rem;
		font-weight: 500;
		color: var(--color-text-primary);
	}
	._c5 {
		margin-top: 0.25rem;
		font-size: 0.875rem;
		line-height: 1.25rem;
		color: var(--color-text-secondary);
	}
	._c6 {
		margin-top: 1rem;
	}
	@media (min-width: 640px) {
		._c6 {
			margin-top: 0;
		}
	}
	._c7 {
		display: flex;
		border-radius: 0.375rem;
		box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
	}
	._c8 {
		height: 1.5rem;
		width: 1.5rem;
	}
	._c9 {
		margin-right: 0.25rem;
	}

	.performance-dashboard {
		background-color: var(--color-background-primary);
		border-radius: 0.5rem;
		box-shadow:
			0 1px 3px 0 rgb(0 0 0 / 0.1),
			0 1px 2px -1px rgb(0 0 0 / 0.1);
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		overflow: hidden;
	}

	.performance-dashboard__header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem;
		border-bottom-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
	}

	.performance-dashboard__active-time-range-button {
		background-color: var(--color-primary-500);
		color: var(--color-text-inverse);
		border-color: var(--color-primary-500);
	}

	.performance-dashboard__metrics-grid {
		display: grid;
		grid-template-columns: repeat(1, minmax(0, 1fr));
		gap: 1rem;
		padding: 1rem;
	}
	@media (min-width: 768px) {
		.performance-dashboard__metrics-grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}
	@media (min-width: 1024px) {
		.performance-dashboard__metrics-grid {
			grid-template-columns: repeat(4, minmax(0, 1fr));
		}
	}

	.performance-dashboard__metric-card {
		background-color: var(--color-background-primary);
		border-radius: 0.5rem;
		border-width: 1px;
		border-style: solid;
		border-color: var(--color-border-primary);
		padding: 1rem;
	}

	.performance-dashboard__metric-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 0.5rem;
	}

	.performance-dashboard__metric-title {
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 500;
		color: var(--color-text-secondary);
	}

	.performance-dashboard__metric-value {
		font-size: 1.5rem;
		line-height: 2rem;
		font-weight: 700;
		color: var(--color-text-primary);
	}

	.performance-dashboard__trend-positive {
		color: var(--color-success-600);
	}

	.performance-dashboard__trend-negative {
		color: var(--color-danger-600);
	}

	.performance-dashboard__chart-container {
		padding: 1rem;
	}

	.performance-dashboard__chart-bar {
		background-color: var(--color-primary-500);
		border-radius: 0.25rem;
	}

	._c1 {
		border-radius: 0.375rem;
		padding: 0.75rem;
		color: var(--color-text-inverse);
	}
	._c2 {
		display: flex;
		align-items: center;
		font-size: 0.875rem;
		line-height: 1.25rem;
		font-weight: 500;
	}
</style>
