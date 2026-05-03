<script lang="ts">
	import type { ChartPolylineRecipe as ChartPolylineProps } from '$stylist/chart/interface/recipe/chart-polyline';
	import { createChartPolylineState } from '$stylist/chart/function/state/chart-polyline';

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


