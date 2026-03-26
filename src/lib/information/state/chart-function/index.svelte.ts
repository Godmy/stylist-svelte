import type {
	ChartAxisXProps,
	ChartAxisYProps,
	ChartAxisZProps,
	ChartBackgroundProps,
	ChartCanvasProps,
	ChartFunctionPoint,
	ChartLegendProps,
	ChartNameProps,
	ChartPolylineProps,
	ChartProps,
	ChartSeries
} from '$stylist/information/interface/chart';
import { ChartStyleManager } from '$stylist/information/class/style-manager/chart';

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
	return createChartAxisState(props.class);
}

export function createChartAxisYState(props: ChartAxisYProps) {
	return createChartAxisState(props.class);
}

export function createChartAxisZState(props: ChartAxisZProps) {
	return createChartAxisState(props.class);
}

export function createChartBackgroundState(props: ChartBackgroundProps) {
	const classes = $derived(ChartStyleManager.getChartBackgroundClasses(props.class));

	return {
		get classes() {
			return classes;
		}
	};
}

export function createChartPolylineState(props: ChartPolylineProps) {
	const classes = $derived(ChartStyleManager.getChartPolylineClasses(props.class));

	return {
		get classes() {
			return classes;
		}
	};
}

export function createChartNameState(props: ChartNameProps) {
	const classes = $derived(ChartStyleManager.getChartNameClasses(props.class));

	return {
		get classes() {
			return classes;
		}
	};
}

export function createChartLegendState(props: ChartLegendProps) {
	const classes = $derived(ChartStyleManager.getChartLegendClasses(props.class));
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
	const wrapperClasses = $derived(ChartStyleManager.getChartCanvasWrapperClasses(props.class));
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
	const containerClasses = $derived(ChartStyleManager.getChartContainerClasses(props.class));
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



