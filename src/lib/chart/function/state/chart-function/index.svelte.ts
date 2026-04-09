import type { ChartFunctionPoint, ChartSeries } from '$stylist/chart/interface/recipe/chart';
import type { ChartProps } from '$stylist/chart/interface/recipe/chart-props';
import type { ChartAxisXProps } from '$stylist/chart/interface/recipe/chart-axis-x';
import type { ChartAxisYProps } from '$stylist/chart/interface/recipe/chart-axis-y-props';
import type { ChartAxisZProps } from '$stylist/chart/interface/recipe/chart-axis-z-props';
import type { ChartBackgroundProps as ChartBackgroundRecipe } from '$stylist/chart/interface/recipe/chart-background-props';
import type { ChartLegendProps } from '$stylist/navigation/interface/recipe/chart-legend';
import type { ChartNameProps } from '$stylist/chart/interface/recipe/chart-name';
import type { ChartPolylineProps } from '$stylist/chart/interface/recipe/chart-polyline';
import type { ChartCanvasRecipe as ChartCanvasProps } from '$stylist/chart/interface/recipe/chart-canvas';
import { ObjectManagerChart } from '$stylist/chart/class/object-manager/chart';
import { ChartStyleManager } from '$stylist/chart/class/style-manager/chart';

function resolveClassName(className: unknown): string | undefined {
	return typeof className === 'string' ? className : undefined;
}

function getChartBounds(series: ChartSeries[]): { minX: number; maxX: number; minY: number; maxY: number } {
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

export function mapPointsToViewBox(
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

function createChartAxisState(className?: string) {
	const axisClasses = $derived(ChartStyleManager.getChartAxisClasses(className));
	const gridClasses = $derived(ChartStyleManager.getChartAxisGridClasses());
	const labelClasses = $derived(ChartStyleManager.getChartAxisLabelClasses());

	return {
		get axisClasses() {
			return axisClasses;
		},
		get gridClasses() {
			return gridClasses;
		},
		get labelClasses() {
			return labelClasses;
		}
	};
}

export function createChartAxisXState(props: ChartAxisXProps) {
	return createChartAxisState(resolveClassName(props.class));
}

export function createChartAxisYState(props: ChartAxisYProps) {
	const state = createChartAxisState(resolveClassName(props.class));
	const metrics = $derived(ObjectManagerChart.getAxisYMetrics(props));

	return {
		...state,
		get x() {
			return metrics.x;
		},
		get startY() {
			return metrics.startY;
		},
		get endY() {
			return metrics.endY;
		},
		get tickSize() {
			return metrics.tickSize;
		},
		get showArrow() {
			return metrics.showArrow;
		},
		get ticks() {
			return metrics.ticks;
		}
	};
}

export function createChartAxisZState(props: ChartAxisZProps) {
	return createChartAxisState(resolveClassName(props.class));
}

export function createChartBackgroundState(props: ChartBackgroundRecipe) {
	const classes = $derived(ChartStyleManager.getChartBackgroundClasses(resolveClassName(props.class)));

	return {
		get classes() {
			return classes;
		}
	};
}

export function createChartPolylineState(props: ChartPolylineProps) {
	const classes = $derived(ChartStyleManager.getChartPolylineClasses(resolveClassName(props.class)));
	const padding = $derived(36);
	const bounds = $derived(ObjectManagerChart.getBounds(props));
	const polylinePoints = $derived(
		mapPointsToViewBox(props.points ?? [], props.width, props.height, padding, bounds)
	);

	return {
		get classes() {
			return classes;
		},
		get padding() {
			return padding;
		},
		get bounds() {
			return bounds;
		},
		get polylinePoints() {
			return polylinePoints;
		}
	};
}

export function createChartNameState(props: ChartNameProps) {
	const classes = $derived(ChartStyleManager.getChartNameClasses(resolveClassName(props.class)));

	return {
		get classes() {
			return classes;
		}
	};
}

export function createChartLegendState(props: ChartLegendProps) {
	const classes = $derived(ChartStyleManager.getChartLegendClasses(resolveClassName(props.class)));
	const itemClasses = $derived(ChartStyleManager.getChartLegendItemClasses());
	const dotClasses = $derived(ChartStyleManager.getChartLegendDotClasses());

	return {
		get classes() {
			return classes;
		},
		get itemClasses() {
			return itemClasses;
		},
		get dotClasses() {
			return dotClasses;
		}
	};
}

export function createChartCanvasState(props: ChartCanvasProps) {
	const width = $derived(props.width ?? 640);
	const height = $derived(props.height ?? 380);
	const padding = $derived(36);
	const wrapperClasses = $derived(
		ChartStyleManager.getChartCanvasWrapperClasses(resolveClassName(props.class))
	);
	const svgClasses = $derived(ChartStyleManager.getChartSvgClasses());

	return {
		get width() {
			return width;
		},
		get height() {
			return height;
		},
		get padding() {
			return padding;
		},
		get wrapperClasses() {
			return wrapperClasses;
		},
		get svgClasses() {
			return svgClasses;
		}
	};
}

export function createChartState(props: ChartProps) {
	const width = $derived(props.width ?? 640);
	const height = $derived(props.height ?? 380);
	const showLegend = $derived(props.showLegend ?? true);
	const showGrid = $derived(props.showGrid ?? true);
	const showZAxis = $derived(props.showZAxis ?? false);
	const containerClasses = $derived(
		ChartStyleManager.getChartContainerClasses(resolveClassName(props.class))
	);
	const bounds = $derived(getChartBounds(props.series ?? []));

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
		get containerClasses() {
			return containerClasses;
		},
		get bounds() {
			return bounds;
		}
	};
}

export default createChartState;


