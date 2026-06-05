<script lang="ts">
	import Icon from '$stylist/media/component/atom/icon/index.svelte';
	import createPerformanceDashboardState from '$stylist/management/function/state/performance-dashboard/index.svelte';
	import type { PerformanceDashboardRecipe } from '$stylist/management/interface/recipe/performance-dashboard';
	import type { TokenTimeRange } from '$stylist/management/type/enum/time-range/token-time-range';

	let props: PerformanceDashboardRecipe = $props();
	const state = createPerformanceDashboardState(props);
</script>

<div class={state.containerClass} {...state.restProps}>
	<div class={state.headerClassComputed}>
		<div class="flex flex-col p-4 sm:flex-row sm:items-center sm:justify-between">
			<div>
				<div class="flex items-center">
					<Icon name="activity" size="md" class="mr-2 text-[--color-text-secondary]" />
					<h3 class="text-lg font-medium text-[--color-text-primary]">{state.label}</h3>
				</div>
				{#if state.subtitle}
					<p class="mt-1 text-sm text-[--color-text-secondary]">{state.subtitle}</p>
				{/if}
			</div>

			{#if state.showTimeRangeSelector}
				<div class="mt-4 sm:mt-0">
					<div class="flex rounded-md shadow-sm">
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
					<div class={`rounded-md p-3 ${metric.color} text-[var(--color-text-inverse)]`}>
						<metric.icon class="h-6 w-6" />
					</div>
					<div
						class={`flex items-center text-sm font-medium ${
							metric.changeType === 'positive' ? state.trendPositiveClass : state.trendNegativeClass
						}`}
					>
						{#if metric.changeType === 'positive'}
							<Icon name="trending-up" size="sm" class="mr-1" />
						{:else}
							<Icon name="trending-down" size="sm" class="mr-1" />
						{/if}
						<span>{Math.abs(metric.change)}%</span>
					</div>
				</div>
				<div class="mt-4">
					<h3 class={state.metricTitleClass}>{metric.title}</h3>
					<p class={state.metricValueClass}>{metric.value}</p>
				</div>
			</div>
		{/each}

		<div class={state.chartContainerClass}>
			<div class="mb-4 flex items-center justify-between">
				<h4 class="text-sm font-medium text-[--color-text-primary]">Performance Trend</h4>
				<div class="flex items-center text-sm">
					<span class="mr-4 text-[--color-success-600]">
						<Icon name="arrow-up" size="sm" class="mr-1 inline" />
						Good
					</span>
					<span class="text-[--color-danger-600]">
						<Icon name="arrow-down" size="sm" class="mr-1 inline" />
						Needs attention
					</span>
				</div>
			</div>
			<div class="flex h-48 items-end space-x-2">
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
