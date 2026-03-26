<script lang="ts">
	import type { ChartCanvasProps } from '$stylist';
	import { createChartCanvasState } from '$stylist/information/state/chart-function';
	import ChartAxisX from '$stylist/information/atom/data-display/charts/chart-axis-x/index.svelte';
	import ChartAxisY from '$stylist/information/atom/data-display/charts/chart-axis-y/index.svelte';
	import ChartAxisZ from '$stylist/information/atom/data-display/charts/chart-axis-z/index.svelte';
	import ChartBackground from '$stylist/information/atom/data-display/charts/chart-background/index.svelte';
	import ChartName from '$stylist/information/atom/data-display/charts/chart-name/index.svelte';
	import ChartPolyline from '$stylist/information/atom/data-display/charts/chart-polyline/index.svelte';

	let props: ChartCanvasProps = $props();
	const state = createChartCanvasState(props);

	const width = $derived(state.width);
	const height = $derived(state.height);
	const padding = $derived(state.padding);
	const series = $derived(props.series ?? []);
	const xTickCount = $derived(Math.max(1, props.xTickCount ?? 5));
	const yTickCount = $derived(Math.max(1, props.yTickCount ?? 5));
	const zTickCount = $derived(Math.max(0, props.zTickCount ?? 0));
	const showAxisArrows = $derived(props.showAxisArrows ?? true);

	const bounds = $derived.by(() => {
		const points = series.flatMap((item) => item.points);
		if (points.length === 0) {
			return { minX: 0, maxX: 1, minY: 0, maxY: 1 };
		}

		const minX = Math.min(...points.map((point) => point.x));
		const maxX = Math.max(...points.map((point) => point.x));
		const minY = Math.min(...points.map((point) => point.y));
		const maxY = Math.max(...points.map((point) => point.y));

		return {
			minX,
			maxX: maxX === minX ? minX + 1 : maxX,
			minY,
			maxY: maxY === minY ? minY + 1 : maxY
		};
	});

	const xScale = $derived((props.xScale ?? [bounds.minX, bounds.maxX]) as [number, number]);
	const yScale = $derived((props.yScale ?? [bounds.minY, bounds.maxY]) as [number, number]);

	const xTicks = $derived.by(() => {
		const values: number[] = [];
		for (let i = 0; i <= xTickCount; i += 1) {
			values.push(padding + ((width - padding * 2) * i) / xTickCount);
		}
		return values;
	});

	const yTicks = $derived.by(() => {
		const values: number[] = [];
		for (let i = 0; i <= yTickCount; i += 1) {
			values.push(height - padding - ((height - padding * 2) * i) / yTickCount);
		}
		return values;
	});

	const xTickLabels = $derived.by(() =>
		Array.from({ length: xTickCount + 1 }, (_, i) => {
			const value = xScale[0] + ((xScale[1] - xScale[0]) * i) / xTickCount;
			return Number.isInteger(value) ? value : value.toFixed(2);
		})
	);

	const yTickLabels = $derived.by(() =>
		Array.from({ length: yTickCount + 1 }, (_, i) => {
			const value = yScale[0] + ((yScale[1] - yScale[0]) * (yTickCount - i)) / yTickCount;
			return Number.isInteger(value) ? value : value.toFixed(2);
		})
	);
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


