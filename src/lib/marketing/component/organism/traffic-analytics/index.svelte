<script lang="ts">
	import { Icon as BaseIcon } from '$stylist/media';
	const Globe = 'globe';
	const Users = 'users';
	const Eye = 'eye';
	const Clock = 'clock';
	const BarChart3 = 'bar-chart-3';
	const Calendar = 'calendar';
	const Filter = 'filter';

	import type {
		TrafficAnalyticsProps,
		TimeRange
	} from '$stylist/marketing/type/struct/traffic-analytics';
	import { createTrafficAnalyticsState } from '$stylist/marketing/function/state/traffic-analytics';

	let props: TrafficAnalyticsProps = $props();
	const state = createTrafficAnalyticsState(props);
</script>

<div class={state.containerClasses} {...state.restProps}>
	<div class={`border-b ${state.headerClassName}`}>
		<div class="flex flex-col p-4 md:flex-row md:items-center md:justify-between">
			<div>
				<div class="flex items-center">
					<BaseIcon name={Globe} class="mr-2 h-5 w-5 text-[var(--color-text-secondary)]" />
					<h3 class="text-lg font-medium text-[var(--color-text-primary)]">{state.title}</h3>
				</div>
				{#if state.subtitle}
					<p class="mt-1 text-sm text-[var(--color-text-secondary)]">{state.subtitle}</p>
				{/if}
			</div>

			<div class="mt-4 flex items-center space-x-3 md:mt-0">
				<div class="relative">
					<select
						class="appearance-none rounded-md border border-[var(--color-border-primary)] bg-[var(--color-background-primary)] py-2 pr-10 pl-3 text-left text-sm focus:border-[var(--color-primary-500)] focus:ring-1 focus:ring-blue-500 focus:outline-none"
						bind:value={state.selectedTimeRange}
						onchange={() => state.handleTimeRangeChange(state.selectedTimeRange as TimeRange)}
					>
						<option value="1d">Last 24 hours</option>
						<option value="7d">Last 7 days</option>
						<option value="30d">Last 30 days</option>
						<option value="90d">Last 90 days</option>
						<option value="1y">Last year</option>
					</select>
					<div
						class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[var(--color-text-primary)]"
					>
						<BaseIcon name={Calendar} class="h-4 w-4" />
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Summary metrics -->
	<div class={`border-b p-4 ${state.summaryClassName}`}>
		<div class="grid grid-cols-2 gap-4 md:grid-cols-5">
			<div class="p-3 text-center">
				<div class="text-lg font-semibold text-[var(--color-text-primary)]">
					{state.totalVisitors}
				</div>
				<div class="flex items-center justify-center text-xs text-[var(--color-text-secondary)]">
					<BaseIcon name={Users} class="mr-1 h-3 w-3" />
					Total Visitors
				</div>
			</div>
			<div class="p-3 text-center">
				<div class="text-lg font-semibold text-[var(--color-text-primary)]">
					{state.uniqueVisitors}
				</div>
				<div class="flex items-center justify-center text-xs text-[var(--color-text-secondary)]">
					<BaseIcon name={Users} class="mr-1 h-3 w-3" />
					Unique Visitors
				</div>
			</div>
			<div class="p-3 text-center">
				<div class="text-lg font-semibold text-[var(--color-text-primary)]">{state.pageViews}</div>
				<div class="flex items-center justify-center text-xs text-[var(--color-text-secondary)]">
					<BaseIcon name={Eye} class="mr-1 h-3 w-3" />
					Page Views
				</div>
			</div>
			<div class="p-3 text-center">
				<div class="text-lg font-semibold text-[var(--color-text-primary)]">{state.timeOnPage}</div>
				<div class="flex items-center justify-center text-xs text-[var(--color-text-secondary)]">
					<BaseIcon name={Clock} class="mr-1 h-3 w-3" />
					Time on Page
				</div>
			</div>
			<div
				class={`p-3 text-center ${
					state.bounceRate > 60
						? 'text-[var(--color-danger-600)]'
						: state.bounceRate > 40
							? 'text-yellow-600'
							: 'text-[var(--color-success-600)]'
				}`}
			>
				<div class="text-lg font-semibold">{state.bounceRate}%</div>
				<div class="flex items-center justify-center text-xs">
					<BaseIcon name={BarChart3} class="mr-1 h-3 w-3" />
					Bounce Rate
				</div>
			</div>
		</div>
	</div>

	<!-- Traffic chart -->
	<div class={`border-b p-4 ${state.chartClassName}`}>
		<h4 class="mb-4 text-sm font-medium text-[var(--color-text-primary)]">Traffic Overview</h4>
		<div class="flex h-64 items-end space-x-1 md:space-x-2">
			{#each state.trafficData as dataPoint, i}
				{@const barHeight = (dataPoint.value / state.maxValue) * 200}
				<div class="flex flex-1 flex-col items-center" style="min-width: 15px;">
					<div
						class="w-full rounded-t bg-[var(--color-primary-500)] transition-colors hover:bg-[var(--color-primary-600)]"
						style={`height: ${barHeight}px;`}
						title={`${dataPoint.date.toLocaleDateString()}: ${dataPoint.value}`}
					></div>
					{#if i % 3 === 0}
						<div class="mt-1 text-xs text-[var(--color-text-secondary)]">
							{dataPoint.date.toLocaleDateString([], { month: 'short', day: 'numeric' })}
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>

	<!-- Traffic sources -->
	<div class={`p-4 ${state.sourcesClassName}`}>
		<h4 class="mb-4 text-sm font-medium text-[var(--color-text-primary)]">Traffic Sources</h4>
		<div class="space-y-3">
			{#each state.trafficSources as source}
				<div>
					<div class="mb-1 flex justify-between text-sm">
						<div class="flex items-center">
							<div
								class="mr-2 h-3 w-3 rounded-full"
								style={`background-color: ${source.color}`}
							></div>
							<span class="text-[var(--color-text-primary)]">{source.name}</span>
						</div>
						<span class="text-[var(--color-text-primary)]"
							>{source.value} ({source.percentage}%)</span
						>
					</div>
					<div class="h-2 w-full rounded-full bg-[var(--color-background-tertiary)]">
						<div
							class="h-2 rounded-full"
							style={`width: ${source.percentage}%; background-color: ${source.color};`}
						></div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
