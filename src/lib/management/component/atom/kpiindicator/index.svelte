<script lang="ts">
	import type { KPIIndicatorRecipe } from '$stylist/management/interface/recipe/kpi-indicator';
	import BaseIcon from '$stylist/media/component/atom/icon/index.svelte';
	import { createKPIIndicatorState } from '$stylist/management/function/state/kpi-indicator';

	let props: KPIIndicatorRecipe = $props();
	const state = createKPIIndicatorState(props);
</script>

<div class={state.containerClasses} {...state.restProps}>
	<div class="flex items-center justify-between">
		<div>
			<h3 class={state.titleClasses}>{state.label}</h3>
			<p class={state.valueClasses}>
				{state.currentValue}{state.unit}
				<span class="text-sm font-normal text-[--stylist-kpi-subvalue-text]"
					>/ {state.targetValue}{state.unit}</span
				>
			</p>
		</div>
		<div class="flex items-center">
			<div class="mr-3">
				<div class="h-3 w-3 rounded-full bg-current"></div>
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
		<div class="mb-1 flex items-center justify-between text-sm text-[--stylist-kpi-status-text]">
			<span>{state.statusText}</span>
			<span>{state.percentage}%</span>
		</div>
		<div class={state.progressTrackClasses}>
			<div class={state.progressFillClasses} style={`width: ${state.percentage}%`}></div>
		</div>
	</div>
</div>
