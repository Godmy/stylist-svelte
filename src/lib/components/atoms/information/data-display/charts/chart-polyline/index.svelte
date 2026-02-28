<script lang="ts">
	import type { ChartPolylineProps } from '$stylist/design-system';
	import {
		createChartPolylineState,
		mapPointsToViewBox
	} from '$stylist/design-system/models/information/chart-function.svelte';

	let props: ChartPolylineProps = $props();
	const state = createChartPolylineState(props);

	const padding = 36;
	const bounds = $derived.by(() => {
		if (props.xDomain && props.yDomain) {
			return {
				minX: props.xDomain[0],
				maxX: props.xDomain[1],
				minY: props.yDomain[0],
				maxY: props.yDomain[1]
			};
		}

		const points = props.points ?? [];
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

	const polylinePoints = $derived(
		mapPointsToViewBox(props.points ?? [], props.width, props.height, padding, bounds)
	);
</script>

<polyline
	class={state.classes}
	points={polylinePoints}
	stroke={props.color ?? 'var(--color-primary-500)'}
	stroke-width={props.strokeWidth ?? 2}
	stroke-linecap="round"
	stroke-linejoin="round"
	fill="none"
/>
