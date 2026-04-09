<script lang="ts">
	import type { ChartRecipe } from '$stylist/chart/interface/recipe/chart';
	import type { ChartProps as InformationChartProps } from '$stylist/chart/interface/recipe/chart-props';
	import { createChartState } from '$stylist/chart/function/state/chart-function';
	import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
	import ChartCanvas from '$stylist/chart/svelte/molecule/charts/chart-canvas/index.svelte';
	import ChartLegend from '$stylist/chart/svelte/molecule/charts/chart-legend/index.svelte';
	import { ObjectManagerChart } from '$stylist/chart/class/object-manager/chart';

	type AnalyticsChartProps = ChartRecipe & {
		xTickCount?: number;
		yTickCount?: number;
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
		class: mergeClassNames(props.class)
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








