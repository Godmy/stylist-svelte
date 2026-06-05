<script lang="ts">
	import MetricBar from '$stylist/information/component/atom/metric-bar/index.svelte';
	import createMetricBarsCardState from '$stylist/information/function/state/metric-bars-card/index.svelte';
	import type { MetricBarsCardRecipe } from '$stylist/information/interface/recipe/metric-bars-card';

	let props: MetricBarsCardRecipe = $props();
	const state = createMetricBarsCardState(props);
</script>

<article class={state.containerClasses} {...state.restProps}>
	<div class={state.headerClasses}>
		<div>
			<h3 class={state.titleClasses}>{state.label}</h3>
			{#if state.caption}
				<p class={state.captionClasses}>{state.caption}</p>
			{/if}
		</div>

		{#if state.total !== undefined}
			<div class={state.totalClasses}>{state.total}</div>
		{/if}
	</div>

	<div class={state.barsClasses}>
		{#each state.bars as bar}
			<MetricBar
				label={bar.label}
				value={bar.value}
				valueLabel={bar.valueLabel ?? bar.value}
				percentage={bar.percentage}
				color={bar.color ?? state.color}
				trackColor={state.trackColor}
			/>
		{/each}
	</div>
</article>
