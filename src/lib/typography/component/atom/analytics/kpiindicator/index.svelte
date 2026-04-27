<script lang="ts">
	import type { KPIIndicatorRecipe } from '$stylist/typography/interface/recipe/kpi-indicator';
	import { Icon as BaseIcon } from '$stylist';
	import { createKPIIndicatorState } from '$stylist/typography/function/state/kpi-indicator';

	let props: KPIIndicatorRecipe = $props();
	const state = createKPIIndicatorState(props);
</script>

<div class={state.containerClasses} {...state.restProps}>
	<div class="flex items-center justify-between">
		<div>
			<h3 class={state.titleClasses}>{state.label}</h3>
			<p class={state.valueClasses}>
				{state.currentValue}{state.unit} <span class="text-sm font-normal text-[--stylist-kpi-subvalue-text]">/ {state.targetValue}{state.unit}</span>
			</p>
		</div>
		<div class="flex items-center">
			<div class="mr-3">
				<div class="w-3 h-3 rounded-full bg-current"></div>
			</div>
			<div class="flex items-center">
				<span class={state.trendColorClasses}>
					<BaseIcon name={state.trendIcon} class="h-5 w-5" />
				</span>
				{#if state.trendValue !== 0}
					<span class={`ml-1 text-sm ${state.trendColorClasses}`}>
						{state.trendValue > 0 ? '+' : ''}{state.trendValue}%
					</span>
				{/if}
			</div>
		</div>
	</div>

	<div class="mt-3">
		<div class="flex items-center justify-between text-sm text-[--stylist-kpi-status-text] mb-1">
			<span>{state.statusText}</span>
			<span>{state.percentage}%</span>
		</div>
		<div class={state.progressTrackClasses}>
			<div
				class={state.progressFillClasses}
				style={`width: ${state.percentage}%`}
			></div>
		</div>
	</div>
</div>






