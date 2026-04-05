import type { ChartFunctionPoint, ChartSeries } from '$stylist/analytics/interface/recipe/chart';
import type { ChartAxisYProps } from '$stylist/analytics/interface/recipe/chart-axis-y';
import type { ChartPolylineProps } from '$stylist/analytics/interface/recipe/chart-polyline';
import type { PieChartProps } from '$stylist/analytics/interface/recipe/pie-chart';
import type { AnalyticsChartDataPoint } from '$stylist/analytics/type/struct/analytics-chart';
import type { ChartLegendItem } from '$stylist/analytics/type/struct';

export interface ChartBounds {
	minX: number;
	maxX: number;
	minY: number;
	maxY: number;
}

export interface ChartAxisYMetrics {
	x: number;
	startY: number;
	endY: number;
	tickCount: number;
	tickSize: number;
	showArrow: boolean;
	ticks: number[];
}

export interface InformationPieChartSegment {
	fill: string;
	path: string;
}

export class ObjectManagerChart {
	static resolveSeries(series?: ChartSeries[]): ChartSeries[] {
		return series ?? [];
	}

	static resolveLegendItems(series: ChartSeries[]): ChartLegendItem[] {
		return series.map((s, index) => ({
			id: s.id ?? `series-${index}`,
			name: s.name ?? `Series ${index + 1}`,
			color: s.color
		}));
	}

	static getAxisYMetrics(props: ChartAxisYProps): ChartAxisYMetrics {
		const x = props.x ?? 0;
		const startY = props.startY ?? 0;
		const endY = props.endY ?? 100;
		const tickCount = Math.max(0, props.tickCount ?? 5);

		if (props.ticks && props.ticks.length > 0) {
			return {
				x,
				startY,
				endY,
				tickCount,
				tickSize: 6,
				showArrow: props.showArrow ?? true,
				ticks: props.ticks
			};
		}

		const ticks =
			tickCount === 0
				? []
				: Array.from(
						{ length: tickCount + 1 },
						(_, index) => endY - ((endY - startY) * index) / tickCount
				  );

		return {
			x,
			startY,
			endY,
			tickCount,
			tickSize: 6,
			showArrow: props.showArrow ?? true,
			ticks
		};
	}

	static getBounds(props: ChartPolylineProps): ChartBounds {
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

		const minX = Math.min(...points.map((point: ChartFunctionPoint) => point.x));
		const maxX = Math.max(...points.map((point: ChartFunctionPoint) => point.x));
		const minY = Math.min(...points.map((point: ChartFunctionPoint) => point.y));
		const maxY = Math.max(...points.map((point: ChartFunctionPoint) => point.y));

		return {
			minX,
			maxX: maxX === minX ? minX + 1 : maxX,
			minY,
			maxY: maxY === minY ? minY + 1 : maxY
		};
	}

	static getPieChartRestProps(
		props: PieChartProps & { width?: number; height?: number }
	) {
		const {
			class: _class,
			data: _data,
			width: _width,
			height: _height,
			...rest
		} = props;

		return rest;
	}

	static getPieChartSegments(
		data: readonly AnalyticsChartDataPoint[],
		width: number,
		height: number
	): InformationPieChartSegment[] {
		const total = data.reduce((sum, item) => sum + item.value, 0);
		const centerX = width / 2;
		const centerY = height / 2;
		const radius = Math.max(10, Math.min(width, height) / 2 - 10);
		let startAngle = 0;

		return data.map((item, index) => {
			const sliceAngle = total === 0 ? 0 : (item.value / total) * 360;
			const endAngle = startAngle + sliceAngle;
			const startRad = (startAngle * Math.PI) / 180;
			const endRad = (endAngle * Math.PI) / 180;
			const x1 = centerX + radius * Math.cos(startRad);
			const y1 = centerY + radius * Math.sin(startRad);
			const x2 = centerX + radius * Math.cos(endRad);
			const y2 = centerY + radius * Math.sin(endRad);
			const path = `M ${centerX} ${centerY} L ${x1} ${y1} A ${radius} ${radius} 0 ${sliceAngle > 180 ? 1 : 0} 1 ${x2} ${y2} Z`;
			const fill = item.color || `hsl(${(index * 137.5) % 360}, 70%, 50%)`;

			startAngle = endAngle;

			return { fill, path };
		});
	}
}
