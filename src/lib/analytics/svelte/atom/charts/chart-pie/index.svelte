<script lang="ts">
	import type { PieChartProps } from '$stylist/analytics/interface/recipe/pie-chart';
	import { createPieChartState } from '$stylist/analytics/function/state/chart-pie';

let props: PieChartProps & { width?: number; height?: number } = $props();
	const state = createPieChartState(props);
	const restProps = $derived(
		(() => {
			const {
				class: _class,
				label: _label,
				badge: _badge,
				data: _data,
				width: _width,
				height: _height,
				...rest
			} = props;

			return rest;
		})()
	);
</script>

<div class={state.containerClasses} {...(restProps as any)}>
	<svg width={state.width} height={state.height} class={state.svgClasses}>
		{#each state.segments as segment, i (i)}
			<path d={segment.path} fill={segment.fill} />
		{/each}
	</svg>
</div>


