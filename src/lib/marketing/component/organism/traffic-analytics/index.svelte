<script lang="ts">
	import BaseIcon from '$stylist/svg/component/atom/icon/index.svelte';
	const Globe = 'globe';
	const Users = 'users';
	const Eye = 'eye';
	const Clock = 'clock';
	const BarChart3 = 'bar-chart-3';
	const Calendar = 'calendar';
	const Filter = 'filter';

	import type { TrafficAnalyticsProps } from '$stylist/marketing/type/struct/traffic-analytics/trafficanalytics-props';
	import type { TimeRange } from '$stylist/token/type/alias/traffic-analytics-time-range';
	import createTrafficAnalyticsState from '$stylist/marketing/function/state/traffic-analytics/index.svelte';

	let props: TrafficAnalyticsProps = $props();
	const state = createTrafficAnalyticsState(props);
</script>

<div class={state.containerClasses} {...state.restProps}>
	<div class={`ta-header-border ${state.headerClassName}`}>
		<div class="ta-header-inner">
			<div>
				<div class="ta-row">
					<BaseIcon
						name={Globe}
						style="margin-right:0.5rem;width:1.25rem;height:1.25rem;color:var(--color-text-secondary)"
					/>
					<h3 class="ta-title">{state.title}</h3>
				</div>
				{#if state.subtitle}
					<p class="ta-subtitle">{state.subtitle}</p>
				{/if}
			</div>

			<div class="ta-controls">
				<div class="ta-select-wrap">
					<select
						class="ta-select"
						bind:value={state.selectedTimeRange}
						onchange={() => state.handleTimeRangeChange(state.selectedTimeRange as TimeRange)}
					>
						<option value="1d">Last 24 hours</option>
						<option value="7d">Last 7 days</option>
						<option value="30d">Last 30 days</option>
						<option value="90d">Last 90 days</option>
						<option value="1y">Last year</option>
					</select>
					<div class="ta-select-icon">
						<BaseIcon name={Calendar} style="width:1rem;height:1rem" />
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Summary metrics -->
	<div class={`ta-summary-border ${state.summaryClassName}`}>
		<div class="ta-summary-grid">
			<div class="ta-metric">
				<div class="ta-metric-value">{state.totalVisitors}</div>
				<div class="ta-metric-label">
					<BaseIcon name={Users} style="margin-right:0.25rem;width:0.75rem;height:0.75rem" />
					Total Visitors
				</div>
			</div>
			<div class="ta-metric">
				<div class="ta-metric-value">{state.uniqueVisitors}</div>
				<div class="ta-metric-label">
					<BaseIcon name={Users} style="margin-right:0.25rem;width:0.75rem;height:0.75rem" />
					Unique Visitors
				</div>
			</div>
			<div class="ta-metric">
				<div class="ta-metric-value">{state.pageViews}</div>
				<div class="ta-metric-label">
					<BaseIcon name={Eye} style="margin-right:0.25rem;width:0.75rem;height:0.75rem" />
					Page Views
				</div>
			</div>
			<div class="ta-metric">
				<div class="ta-metric-value">{state.timeOnPage}</div>
				<div class="ta-metric-label">
					<BaseIcon name={Clock} style="margin-right:0.25rem;width:0.75rem;height:0.75rem" />
					Time on Page
				</div>
			</div>
			<div
				class={`ta-metric ${
					state.bounceRate > 60
						? 'ta-metric--danger'
						: state.bounceRate > 40
							? 'ta-metric--warning'
							: 'ta-metric--success'
				}`}
			>
				<div class="ta-metric-value">{state.bounceRate}%</div>
				<div class="ta-metric-label">
					<BaseIcon name={BarChart3} style="margin-right:0.25rem;width:0.75rem;height:0.75rem" />
					Bounce Rate
				</div>
			</div>
		</div>
	</div>

	<!-- Traffic chart -->
	<div class={`ta-chart-border ${state.chartClassName}`}>
		<h4 class="ta-section-title">Traffic Overview</h4>
		<div class="ta-bar-chart">
			{#each state.trafficData as dataPoint, i}
				{@const barHeight = (dataPoint.value / state.maxValue) * 200}
				<div class="ta-bar-col" style="min-width: 15px;">
					<div
						class="ta-bar"
						style={`height: ${barHeight}px;`}
						title={`${dataPoint.date.toLocaleDateString()}: ${dataPoint.value}`}
					></div>
					{#if i % 3 === 0}
						<div class="ta-bar-label">
							{dataPoint.date.toLocaleDateString([], { month: 'short', day: 'numeric' })}
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>

	<!-- Traffic sources -->
	<div class={`ta-sources ${state.sourcesClassName}`}>
		<h4 class="ta-section-title">Traffic Sources</h4>
		<div class="ta-sources-list">
			{#each state.trafficSources as source}
				<div>
					<div class="ta-source-row">
						<div class="ta-row">
							<div class="ta-source-dot" style={`background-color: ${source.color}`}></div>
							<span class="ta-source-name">{source.name}</span>
						</div>
						<span class="ta-source-value">{source.value} ({source.percentage}%)</span>
					</div>
					<div class="ta-track">
						<div
							class="ta-track-fill"
							style={`width: ${source.percentage}%; background-color: ${source.color};`}
						></div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	.ta-row {
		display: flex;
		align-items: center;
	}

	.ta-header-border {
		border-bottom: 1px solid;
	}
	.ta-header-inner {
		display: flex;
		flex-direction: column;
		padding: 1rem;
	}

	@media (min-width: 768px) {
		.ta-header-inner {
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
		}
	}

	.ta-title {
		font-size: 1.125rem;
		font-weight: 500;
		color: var(--color-text-primary);
	}
	.ta-subtitle {
		margin-top: 0.25rem;
		font-size: 0.875rem;
		color: var(--color-text-secondary);
	}

	.ta-controls {
		margin-top: 1rem;
		display: flex;
		align-items: center;
		gap: 0.75rem;
	}

	@media (min-width: 768px) {
		.ta-controls {
			margin-top: 0;
		}
	}

	.ta-select-wrap {
		position: relative;
	}

	.ta-select-icon {
		pointer-events: none;
		position: absolute;
		top: 0;
		bottom: 0;
		right: 0;
		display: flex;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text-primary);
	}

	.ta-summary-border {
		border-bottom: 1px solid;
		padding: 1rem;
	}

	.ta-summary-grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 1rem;
	}

	@media (min-width: 768px) {
		.ta-summary-grid {
			grid-template-columns: repeat(5, 1fr);
		}
	}

	.ta-metric {
		padding: 0.75rem;
		text-align: center;
	}
	.ta-metric-value {
		font-size: 1.125rem;
		font-weight: 600;
		color: var(--color-text-primary);
	}
	.ta-metric-label {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 0.75rem;
		color: var(--color-text-secondary);
	}

	.ta-metric--danger {
		color: var(--color-danger-600);
	}
	.ta-metric--warning {
		color: #ca8a04;
	}
	.ta-metric--success {
		color: var(--color-success-600);
	}
	.ta-metric--danger .ta-metric-value,
	.ta-metric--warning .ta-metric-value,
	.ta-metric--success .ta-metric-value {
		color: inherit;
	}
	.ta-metric--danger .ta-metric-label,
	.ta-metric--warning .ta-metric-label,
	.ta-metric--success .ta-metric-label {
		color: inherit;
	}

	.ta-chart-border {
		border-bottom: 1px solid;
		padding: 1rem;
	}

	.ta-section-title {
		margin-bottom: 1rem;
		font-size: 0.875rem;
		font-weight: 500;
		color: var(--color-text-primary);
	}

	.ta-bar-chart {
		display: flex;
		height: 16rem;
		align-items: flex-end;
		gap: 0.25rem;
	}

	@media (min-width: 768px) {
		.ta-bar-chart {
			gap: 0.5rem;
		}
	}

	.ta-bar-col {
		display: flex;
		flex: 1;
		flex-direction: column;
		align-items: center;
	}

	.ta-bar {
		width: 100%;
		border-radius: 0.25rem 0.25rem 0 0;
		background-color: var(--color-primary-500);
		transition: background-color 0.15s;
	}

	.ta-bar:hover {
		background-color: var(--color-primary-600);
	}

	.ta-bar-label {
		margin-top: 0.25rem;
		font-size: 0.75rem;
		color: var(--color-text-secondary);
	}

	.ta-sources {
		padding: 1rem;
	}
	.ta-sources-list {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.ta-source-row {
		margin-bottom: 0.25rem;
		display: flex;
		justify-content: space-between;
		font-size: 0.875rem;
	}

	.ta-source-dot {
		margin-right: 0.5rem;
		width: 0.75rem;
		height: 0.75rem;
		border-radius: 9999px;
	}

	.ta-source-name {
		color: var(--color-text-primary);
	}
	.ta-source-value {
		color: var(--color-text-primary);
	}

	.ta-track {
		height: 0.5rem;
		width: 100%;
		border-radius: 9999px;
		background-color: var(--color-background-tertiary);
	}

	.ta-track-fill {
		height: 0.5rem;
		border-radius: 9999px;
	}

	.ta-select {
		appearance: none;
		border-radius: 0.375rem;
		border: 1px solid var(--color-border-primary);
		background-color: var(--color-background-primary);
		padding: 0.5rem 2.5rem 0.5rem 0.75rem;
		font-size: 0.875rem;
	}

	.ta-select:focus {
		border-color: var(--color-primary-500);
		outline: none;
	}
</style>

