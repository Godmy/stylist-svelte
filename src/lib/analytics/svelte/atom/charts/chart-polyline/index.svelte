<script lang="ts">
	import type { ChartPolylineProps } from '$stylist/analytics/interface/recipe/chart-polyline';
	import { createChartPolylineState } from '$stylist/analytics/function/state/chart-function';

	let props: ChartPolylineProps = $props();
	const state = createChartPolylineState(props);

</script>

<polyline
	class={state.classes}
	points={state.polylinePoints}
	stroke={props.color ?? 'var(--color-primary-500)'}
	stroke-width={props.strokeWidth ?? 2}
	stroke-linecap="round"
	stroke-linejoin="round"
	fill="none"
/>


