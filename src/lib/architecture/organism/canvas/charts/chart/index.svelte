<script lang="ts">
	import type { ChartProps } from '$stylist';
	import { createChartState } from '$stylist/information/state/chart-function';
	import ChartCanvas from '$stylist/architecture/molecule/canvas/charts/chart-canvas/index.svelte';
	import ChartLegend from '$stylist/architecture/molecule/canvas/charts/chart-legend/index.svelte';

	let props: ChartProps = $props();
	const state = createChartState(props);

	const series = $derived(props.series ?? []);
	const legendItems = $derived(
		series.map((item) => ({
			id: item.id,
			name: item.name,
			color: item.color
		}))
	);
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


