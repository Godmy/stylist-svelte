import type { ChartSeries } from '$stylist/chart/type/struct/chart-series';
import type { RecipeChart } from '$stylist/chart/interface/recipe/chart';
import { ObjectManagerChart } from '$stylist/chart/class/object-manager/chart';
import { mergeClassNames } from '$stylist/layout/function/script/merge-class-names';

function resolveClassName(className: unknown): string | undefined {
	return typeof className === 'string' ? className : undefined;
}

function getChartBounds(series: ChartSeries[]): {
	minX: number;
	maxX: number;
	minY: number;
	maxY: number;
} {
	const points = series.flatMap((item) => item.points);
	const minX = points.length > 0 ? Math.min(...points.map((point) => point.x)) : 0;
	const maxX = points.length > 0 ? Math.max(...points.map((point) => point.x)) : 1;
	const minY = points.length > 0 ? Math.min(...points.map((point) => point.y)) : 0;
	const maxY = points.length > 0 ? Math.max(...points.map((point) => point.y)) : 1;

	return {
		minX,
		maxX: maxX === minX ? minX + 1 : maxX,
		minY,
		maxY: maxY === minY ? minY + 1 : maxY
	};
}

export function createChartState(props: RecipeChart) {
	const width = $derived(props.width ?? 640);
	const height = $derived(props.height ?? 380);
	const showLegend = $derived(props.showLegend ?? true);
	const showGrid = $derived(props.showGrid ?? true);
	const showZAxis = $derived(props.showZAxis ?? false);
	const containerClasses = $derived(mergeClassNames('c-chart', resolveClassName(props.class)));
	const series = $derived(ObjectManagerChart.resolveSeries(props.series));
	const legendItems = $derived(ObjectManagerChart.resolveLegendItems(series));
	const bounds = $derived(getChartBounds(series));

	return {
		get width() {
			return width;
		},
		get height() {
			return height;
		},
		get showLegend() {
			return showLegend;
		},
		get showGrid() {
			return showGrid;
		},
		get showZAxis() {
			return showZAxis;
		},
		get series() {
			return series;
		},
		get legendItems() {
			return legendItems;
		},
		get containerClasses() {
			return containerClasses;
		},
		get bounds() {
			return bounds;
		}
	};
}

export default createChartState;
