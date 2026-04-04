import type {
	ScatterPlotRecipe
} from '$stylist/analytics/interface/recipe/scatter-plot';
import type { ScatterPlotDataPoint } from '$stylist/analytics/type/struct/scatter-plot-point';
import { ScatterPlotStyleManager } from '$stylist/analytics/class/style-manager/scatter-plot';

export function createScatterPlotState(props: ScatterPlotRecipe) {
	const maxX = $derived(Math.max(...props.data.map((point: ScatterPlotDataPoint) => point.x), 100));
	const maxY = $derived(Math.max(...props.data.map((point: ScatterPlotDataPoint) => point.y), 100));
	const chartWidth = $derived((props.width ?? 700) - 70);
	const chartHeight = $derived((props.height ?? 420) - 40);
	const rootClass = $derived(ScatterPlotStyleManager.root(String(props.class ?? '')));

	return {
		get maxX() {
			return maxX;
		},
		get maxY() {
			return maxY;
		},
		get chartWidth() {
			return chartWidth;
		},
		get chartHeight() {
			return chartHeight;
		},
		get rootClass() {
			return rootClass;
		},
		getPointX(x: number): number {
			return 50 + (x / (maxX || 1)) * chartWidth;
		},
		getPointY(y: number): number {
			return 10 + chartHeight - (y / (maxY || 1)) * chartHeight;
		}
	};
}

export default createScatterPlotState;

