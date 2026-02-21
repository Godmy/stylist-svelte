<script lang="ts">
	import type { PieChartProps, ChartDataPoint } from '$stylist/design-system';
	import { createPieChartState } from '$stylist/design-system/models/information/chart-pie.svelte';

	type Props = PieChartProps & { width?: number; height?: number };
	let props: Props = $props();
	const state = createPieChartState(props);
	const data = $derived(props.data ?? []);
	const width = $derived(props.width ?? 200);
	const height = $derived(props.height ?? 200);
	const restProps = $derived(
		(() => {
			const { class: _class, data: _data, width: _width, height: _height, ...rest } = props;
			return rest;
		})()
	);

	const total = $derived(data.reduce((sum: number, item: ChartDataPoint) => sum + item.y, 0));
	const centerX = $derived(width / 2);
	const centerY = $derived(height / 2);
	const radius = $derived(Math.max(10, Math.min(width, height) / 2 - 10));
	const startAngle = 0;
</script>

<div class={state.containerClasses} {...restProps}>
	<svg width={width} height={height} class={state.svgClasses}>
		{#each data as item, i (i)}
			{@const value = item.y}
			{@const sliceAngle = total === 0 ? 0 : (value / total) * 360}
			{@const currentSliceStartAngle =
				i === 0
					? startAngle
					: data
							.slice(0, i)
							.reduce((sum: number, d: ChartDataPoint) => sum + (total === 0 ? 0 : (d.y / total) * 360), startAngle)}
			{@const currentSliceEndAngle = currentSliceStartAngle + sliceAngle}

			{@const startRad = (currentSliceStartAngle * Math.PI) / 180}
			{@const endRad = (currentSliceEndAngle * Math.PI) / 180}

			{@const x1 = centerX + radius * Math.cos(startRad)}
			{@const y1 = centerY + radius * Math.sin(startRad)}
			{@const x2 = centerX + radius * Math.cos(endRad)}
			{@const y2 = centerY + radius * Math.sin(endRad)}

			<path
				d={`M ${centerX} ${centerY} L ${x1} ${y1} A ${radius} ${radius} 0 ${sliceAngle > 180 ? 1 : 0} 1 ${x2} ${y2} Z`}
				fill={item.color || `hsl(${(i * 137.5) % 360}, 70%, 50%)`}
			/>
		{/each}
	</svg>
</div>
