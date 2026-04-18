import type { ChartFunctionPoint } from '$stylist/chart/type/struct';
import type { ChartPolylineRecipe as ChartPolylineProps } from '$stylist/chart/interface/recipe/chart-polyline';
import { ObjectManagerChart } from '$stylist/chart/class/object-manager/chart';
import { ChartStyleManager } from '$stylist/chart/class/style-manager/chart';

function resolveClassName(className: unknown): string | undefined {
	return typeof className === 'string' ? className : undefined;
}

function mapPointsToViewBox(
	points: ChartFunctionPoint[],
	width: number,
	height: number,
	padding: number,
	bounds: { minX: number; maxX: number; minY: number; maxY: number }
): string {
	const plotWidth = Math.max(1, width - padding * 2);
	const plotHeight = Math.max(1, height - padding * 2);

	return points
		.map((point) => {
			const xRatio = (point.x - bounds.minX) / (bounds.maxX - bounds.minX);
			const yRatio = (point.y - bounds.minY) / (bounds.maxY - bounds.minY);
			const x = padding + xRatio * plotWidth;
			const y = height - padding - yRatio * plotHeight;
			return `${x},${y}`;
		})
		.join(' ');
}

export function createChartPolylineState(props: ChartPolylineProps) {
	const classes = $derived(ChartStyleManager.getChartPolylineClasses(resolveClassName(props.class)));
	const padding = $derived(36);
	const bounds = $derived(ObjectManagerChart.getBounds(props));
	const polylinePoints = $derived(
		mapPointsToViewBox(props.points ?? [], props.width, props.height, padding, bounds)
	);

	return {
		get classes() { return classes; },
		get padding() { return padding; },
		get bounds() { return bounds; },
		get polylinePoints() { return polylinePoints; }
	};
}

export default createChartPolylineState;
