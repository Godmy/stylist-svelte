<script lang="ts">
	import type { ChartRecipe } from '$stylist/analytics/interface/recipe/chart';
	import type { ChartProps as InformationChartProps } from '$stylist/analytics/interface/recipe/chart';
	import { createChartState } from '$stylist/analytics/function/state/chart-function';
	import { cn } from '$stylist/layout/function/script/merge-class-names';
	import ChartCanvas from '$stylist/analytics/svelte/molecule/charts/chart-canvas/index.svelte';
	import ChartLegend from '$stylist/analytics/svelte/molecule/charts/chart-legend/index.svelte';
	import { ObjectManagerChart } from '$stylist/analytics/class/object-manager/chart';

	type AnalyticsChartProps = ChartRecipe & {
		xAxisLabel?: string;
		yAxisLabel?: string;
		zAxisLabel?: string;
	};

	let props: AnalyticsChartProps = $props();
	const state = createChartState({
		width: props.width,
		height: props.height,
		showLegend: props.showLegend,
		showGrid: props.showGrid,
		showZAxis: props.showZAxis,
		series: props.series,
		class: cn(props.class)
	} as InformationChartProps);

	const series = $derived(ObjectManagerChart.resolveSeries(props.series));
	const legendItems = $derived(ObjectManagerChart.resolveLegendItems(series));
</script>

<section class={state.containerClasses}>
	<ChartCanvas
		width={state.width}
		height={state.height}
		title={props.title}
		series={series}
		xScale={props.xScale}
		yScale={props.yScale}
		xTickCount={props.xTickCount}
		yTickCount={props.yTickCount}
		zTickCount={props.zTickCount}
		xAxisLabel={props.xAxisLabel}
		yAxisLabel={props.yAxisLabel}
		zAxisLabel={props.zAxisLabel}
		showGrid={state.showGrid}
		showZAxis={state.showZAxis}
		showAxisArrows={props.showAxisArrows}
	/>
	{#if state.showLegend}
		<ChartLegend items={legendItems} />
	{/if}
</section>








