<script lang="ts">
	import type { UserBehaviorMetricsProps, TimeRange } from '$stylist/marketing/type/struct/user-behavior-metrics';
	import { createUserBehaviorMetricsState } from '$stylist/marketing/function/state/user-behavior-metrics';

	let props: UserBehaviorMetricsProps = $props();
	const state = createUserBehaviorMetricsState(props);
</script>

<div class={state.containerClasses} {...state.restProps}>
	<div class={`border-b ${state.headerClassName}`}>
		<div class="p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
			<div>
				<div class="flex items-center">
					<span class="h-5 w-5 mr-2">📊</span>
					<h3 class="text-lg font-medium text-[var(--color-text-primary)]">{state.title}</h3>
				</div>
				{#if state.subtitle}
					<p class="text-sm text-[var(--color-text-secondary)] mt-1">{state.subtitle}</p>
				{/if}
			</div>
			<div class="mt-4 sm:mt-0">
				<div class="flex rounded-md shadow-sm">
					{#each ['1d', '7d', '30d', '90d'] as range}
						<button
							type="button"
							class="py-2 px-3 text-xs font-medium focus:outline-none border"
							class:bg-[var(--color-primary-100)]={state.selectedTimeRange === range}
							onclick={() => state.handleTimeRangeChange(range as TimeRange)}
						>
							{range.toUpperCase()}
						</button>
					{/each}
				</div>
			</div>
		</div>
	</div>
	<div class={`p-6 ${state.metricsClassName}`}>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each state.metrics as metric}
				<div class={`border rounded-lg p-5 ${state.metricCardClassName}`}>
					<div class="flex items-center justify-between">
						<div>
							<h3 class="text-sm font-medium text-[var(--color-text-secondary)]">{metric.name}</h3>
							<p class="text-2xl font-semibold text-[var(--color-text-primary)] mt-1">{metric.value}</p>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
