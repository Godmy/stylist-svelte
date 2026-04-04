<script lang="ts">
	import type { ChartBackgroundProps } from '$stylist/analytics/interface/recipe/chart-background';
	import { createChartBackgroundState } from '$stylist/analytics/function/state/chart-function';

	let props: ChartBackgroundProps = $props();
	const state = createChartBackgroundState(props);
</script>

<rect
	class={state.classes}
	x="0"
	y="0"
	rx="8"
	ry="8"
	width={props.width}
	height={props.height}
	fill={props.fill ?? 'var(--color-background-secondary)'}
	stroke={props.stroke ?? 'var(--color-border-primary)'}
	stroke-width="1"
/>


