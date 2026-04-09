<script lang="ts">
	import type { ChartCanvasRecipe } from '$stylist/chart/interface/recipe/chart-canvas';
	import type { ChartCanvasRecipe as InformationChartCanvasRecipe } from '$stylist/chart/interface/recipe/chart-canvas';
	import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';
	import { createChartCanvasState } from '$stylist/chart/function/state/chart-function';
	import ChartAxisX from '$stylist/chart/svelte/atom/charts/chart-axis-x/index.svelte';
	import ChartAxisY from '$stylist/chart/svelte/atom/charts/chart-axis-y/index.svelte';
	import ChartAxisZ from '$stylist/chart/svelte/atom/charts/chart-axis-z/index.svelte';
	import ChartBackground from '$stylist/chart/svelte/atom/charts/chart-background/index.svelte';
	import ChartName from '$stylist/chart/svelte/atom/charts/chart-name/index.svelte';
	import ChartPolyline from '$stylist/chart/svelte/atom/charts/chart-polyline/index.svelte';
	import { ObjectManagerChartCanvas } from '$stylist/chart/class/object-manager/chart-canvas';

	type AnalyticsChartCanvasProps = ChartCanvasRecipe & {
		xAxisLabel?: string;
		yAxisLabel?: string;
		zAxisLabel?: string;
	};

	let props: AnalyticsChartCanvasProps = $props();
	const state = createChartCanvasState({
		width: props.width,
		height: props.height,
		class: mergeClassNames(props.class)
	} as InformationChartCanvasRecipe);

	const width = $derived(state.width);
	const height = $derived(state.height);
	const padding = $derived(state.padding);
	const series = $derived(ObjectManagerChartCanvas.resolveSeries(props.series));
	const xTickCount = $derived(ObjectManagerChartCanvas.resolveTickCount(props.xTickCount, 1));
	const yTickCount = $derived(ObjectManagerChartCanvas.resolveTickCount(props.yTickCount, 1));
	const zTickCount = $derived(ObjectManagerChartCanvas.resolveTickCount(props.zTickCount, 0));
	const showAxisArrows = $derived(props.showAxisArrows ?? true);

	const bounds = $derived(ObjectManagerChartCanvas.resolveBounds(series));
	const xScale = $derived(ObjectManagerChartCanvas.resolveScale(props.xScale, bounds.minX, bounds.maxX));
	const yScale = $derived(ObjectManagerChartCanvas.resolveScale(props.yScale, bounds.minY, bounds.maxY));
	const xTicks = $derived(ObjectManagerChartCanvas.resolveTickPositions(width, padding, xTickCount));
	const yTicks = $derived(ObjectManagerChartCanvas.resolveVerticalTickPositions(height, padding, yTickCount));
	const xTickLabels = $derived(ObjectManagerChartCanvas.resolveTickLabels(xScale, xTickCount));
	const yTickLabels = $derived(ObjectManagerChartCanvas.resolveVerticalTickLabels(yScale, yTickCount));
</script>

<div class={state.wrapperClasses}>
	<svg class={state.svgClasses} width={width} height={height} role="img" aria-label={props.title ?? 'Chart canvas'}>
		<ChartBackground width={width} height={height} />
		{#if props.title}
			<ChartName text={props.title} x={padding} y={24} />
		{/if}

		<ChartAxisX
			y={height - padding}
			startX={padding}
			endX={width - padding}
			ticks={xTicks}
			tickLabels={xTickLabels}
			tickCount={xTickCount}
			label={props.xAxisLabel}
			showGrid={props.showGrid}
			showArrow={showAxisArrows}
		/>
		<ChartAxisY
			x={padding}
			startY={padding}
			endY={height - padding}
			ticks={yTicks}
			tickLabels={yTickLabels}
			tickCount={yTickCount}
			label={props.yAxisLabel}
			showGrid={props.showGrid}
			gridEndX={width - padding}
			showArrow={showAxisArrows}
		/>
		{#if props.showZAxis}
			<ChartAxisZ
				startX={padding}
				startY={height - padding}
				endX={padding + 72}
				endY={height - padding - 72}
				tickCount={zTickCount}
				label={props.zAxisLabel}
				showArrow={showAxisArrows}
			/>
		{/if}

		{#each series as item (item.id)}
			<ChartPolyline
				points={item.points}
				width={width}
				height={height}
				xDomain={xScale}
				yDomain={yScale}
				color={item.color}
			/>
		{/each}
	</svg>
</div>








