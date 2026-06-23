<script lang="ts">
	import type { UserBehaviorMetricsProps } from '$stylist/marketing/type/struct/user-behavior-metrics/userbehaviormetrics-props';
	import type { TimeRange } from '$stylist/marketing/type/struct/traffic-analytics/timerange';
	import createUserBehaviorMetricsState from '$stylist/marketing/function/state/user-behavior-metrics/index.svelte';

	let props: UserBehaviorMetricsProps = $props();
	const state = createUserBehaviorMetricsState(props);
</script>

<div class={state.containerClasses} {...state.restProps}>
	<div class={`ubm-header-border ${state.headerClassName}`}>
		<div class="ubm-header-inner">
			<div>
				<div class="ubm-row">
					<span class="ubm-emoji">📊</span>
					<h3 class="ubm-title">{state.title}</h3>
				</div>
				{#if state.subtitle}
					<p class="ubm-subtitle">{state.subtitle}</p>
				{/if}
			</div>
			<div class="ubm-ranges">
				<div class="ubm-range-group">
					{#each ['1d', '7d', '30d', '90d'] as range}
						<button
							type="button"
							class="ubm-range-btn"
							class:ubm-range-btn--active={state.selectedTimeRange === range}
							onclick={() => state.handleTimeRangeChange(range as TimeRange)}
						>
							{range.toUpperCase()}
						</button>
					{/each}
				</div>
			</div>
		</div>
	</div>
	<div class={`ubm-body ${state.metricsClassName}`}>
		<div class="ubm-metrics-grid">
			{#each state.metrics as metric}
				<div class={`ubm-metric-card ${state.metricCardClassName}`}>
					<div class="ubm-metric-header">
						<div>
							<h3 class="ubm-metric-name">{metric.name}</h3>
							<p class="ubm-metric-value">{metric.value}</p>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	.ubm-row {
		display: flex;
		align-items: center;
	}

	.ubm-header-border {
		border-bottom: 1px solid;
	}

	.ubm-header-inner {
		display: flex;
		flex-direction: column;
		padding: 1rem;
	}

	@media (min-width: 640px) {
		.ubm-header-inner {
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
		}
	}

	.ubm-emoji {
		margin-right: 0.5rem;
		width: 1.25rem;
		height: 1.25rem;
	}
	.ubm-title {
		font-size: 1.125rem;
		font-weight: 500;
		color: var(--color-text-primary);
	}
	.ubm-subtitle {
		margin-top: 0.25rem;
		font-size: 0.875rem;
		color: var(--color-text-secondary);
	}

	.ubm-ranges {
		margin-top: 1rem;
	}

	@media (min-width: 640px) {
		.ubm-ranges {
			margin-top: 0;
		}
	}

	.ubm-range-group {
		display: flex;
		border-radius: 0.375rem;
		box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
	}

	.ubm-range-btn {
		border: 1px solid;
		padding: 0.5rem 0.75rem;
		font-size: 0.75rem;
		font-weight: 500;
	}

	.ubm-range-btn--active {
		background-color: var(--color-primary-100);
	}

	.ubm-body {
		padding: 1.5rem;
	}

	.ubm-metrics-grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1.5rem;
	}

	@media (min-width: 768px) {
		.ubm-metrics-grid {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (min-width: 1024px) {
		.ubm-metrics-grid {
			grid-template-columns: repeat(3, 1fr);
		}
	}

	.ubm-metric-card {
		border-radius: 0.5rem;
		border: 1px solid;
		padding: 1.25rem;
	}

	.ubm-metric-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.ubm-metric-name {
		font-size: 0.875rem;
		font-weight: 500;
		color: var(--color-text-secondary);
	}
	.ubm-metric-value {
		margin-top: 0.25rem;
		font-size: 1.5rem;
		font-weight: 600;
		color: var(--color-text-primary);
	}
</style>
