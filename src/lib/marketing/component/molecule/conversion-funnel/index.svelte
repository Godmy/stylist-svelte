<script lang="ts">
	import { Icon as BaseIcon } from '$stylist/media';
	import type { ConversionFunnelProps } from '$stylist/marketing/type/struct/conversion-funnel';
	import { createConversionFunnelState } from '$stylist/marketing/function/state/conversion-funnel';
	import { ConversionFunnelStyleManager } from '$stylist/marketing/class/style-manager/conversion-funnel';

	const BarChart3 = 'bar-chart-3';
	const ArrowRight = 'arrow-right';

	let props: ConversionFunnelProps = $props();
	const state = createConversionFunnelState(props);
</script>

<div class={state.containerClasses} {...state.restProps}>
	<div class={state.headerClasses}>
		<div class="flex items-center">
			<BaseIcon name={BarChart3} class="mr-2 h-5 w-5 text-[var(--color-text-secondary)]" />
			<h3 class="text-lg font-medium text-[var(--color-text-primary)]">{state.title}</h3>
		</div>
		{#if state.subtitle}
			<p class="mt-1 text-sm text-[var(--color-text-secondary)]">{state.subtitle}</p>
		{/if}
	</div>

	<div class="p-6">
		<div class="space-y-8">
			{#each state.steps as step, index}
				<div>
					<div class="mb-2 flex items-center justify-between">
						<div class="flex items-center">
							<span class="text-sm font-medium text-[var(--color-text-primary)]">{step.name}</span>
							{#if state.showValues}
								<span class="ml-2 text-sm text-[var(--color-text-secondary)]">({step.value})</span>
							{/if}
							{#if state.showPercentage}
								<span class="ml-2 text-sm text-[var(--color-text-secondary)]"
									>({Math.round((step.value / state.steps[0].value) * 100)}% of initial)</span
								>
							{/if}
						</div>

						{#if state.showConversionRate && index > 0}
							<div class="text-sm text-[var(--color-text-secondary)]">
								Conversion: {state.getConversionRate(index)}%
								{#if state.showTrend}
									<span class="ml-2 text-xs">(Dropoff: {state.getDropoff(index)}%)</span>
								{/if}
							</div>
						{/if}
					</div>

					<div class="relative">
						<div
							class={ConversionFunnelStyleManager.getFunnelStepVisualizationClass()}
							style={ConversionFunnelStyleManager.getFunnelStepVisualizationStyle(
								step.value,
								state.maxValue,
								step.color
							)}
						>
							<span class="ml-3 text-xs font-medium text-[var(--color-text-inverse)]"
								>{step.value} ({Math.round((step.value / state.steps[0].value) * 100)}%)</span
							>
						</div>

						{#if state.showPercentage}
							<div
								class={ConversionFunnelStyleManager.getPercentageLabelClass()}
								style={`width: ${(step.value / state.maxValue) * 100}%;`}
							>
								{Math.round((step.value / state.steps[0].value) * 100)}%
							</div>
						{/if}
					</div>

					{#if index < state.steps.length - 1}
						<div class="mt-4 flex justify-center">
							<BaseIcon name={ArrowRight} class="h-5 w-5 text-[var(--color-text-tertiary)]" />
						</div>
					{/if}
				</div>
			{/each}
		</div>
	</div>
</div>
