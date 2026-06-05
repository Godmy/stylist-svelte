<script lang="ts">
	import createMetricBarState from '$stylist/information/function/state/metric-bar/index.svelte';
	import type { MetricBarRecipe } from '$stylist/information/interface/recipe/metric-bar';

	let props: MetricBarRecipe = $props();
	const state = createMetricBarState(props);
</script>

<div
	class={state.containerClasses}
	style={state.combinedStyle}
	role="group"
	aria-label={`Metric row: ${state.label}`}
	{...state.restProps}
>
	<div class={state.headerClasses}>
		<span class={state.labelClasses}>{state.label}</span>
		<span class={state.valueClasses}>{state.valueLabel}</span>
	</div>

	<div
		class={state.trackClasses}
		role="progressbar"
		aria-valuenow={state.percentage}
		aria-valuemin="0"
		aria-valuemax="100"
		aria-label={`${state.label}: ${state.percentage}%`}
	>
		<div class={state.fillClasses} style={state.widthStyle} aria-hidden="true"></div>
	</div>
</div>
