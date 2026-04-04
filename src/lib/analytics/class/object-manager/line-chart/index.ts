import type { LineChartData, LineChartPoint } from '$stylist/analytics/type/struct/line-chart';

const LINE_CHART_COLOR_SCHEME = {
	default: [
		'var(--color-primary-500)',
		'var(--color-success-500)',
		'var(--color-error-500)',
		'var(--color-warning-500)',
		'var(--color-secondary-500)',
		'var(--color-danger-500)'
	],
	warm: [
		'var(--color-danger-400)',
		'var(--color-warning-500)',
		'var(--color-warning-400)',
		'var(--color-warning-300)',
		'var(--color-warning-200)'
	],
	cool: [
		'var(--color-primary-400)',
		'var(--color-success-400)',
		'var(--color-success-300)',
		'var(--color-info-400)',
		'var(--color-info-300)'
	],
	neutral: [
		'var(--color-text-tertiary)',
		'var(--color-text-secondary)',
		'var(--color-border-secondary)',
		'var(--color-border-primary)',
		'var(--color-background-tertiary)'
	]
} as const;

export class ObjectManagerLineChart {
	static resolveMaxValue(data: LineChartData[], maxValue?: number): number {
		if (typeof maxValue === 'number') {
			return maxValue;
		}

		const allValues = data.flatMap((series) => series.data.map((point) => point.value));
		return allValues.length > 0 ? Math.max(...allValues) : 100;
	}

	static resolveChartWidth(width: number, showAxis: boolean): number {
		return width - (showAxis ? 60 : 10);
	}

	static resolveChartHeight(height: number, showAxis: boolean): number {
		return height - (showAxis ? 40 : 10);
	}

	static resolveYAxisValues(maxValue: number): number[] {
		return [0, maxValue * 0.25, maxValue * 0.5, maxValue * 0.75, maxValue];
	}

	static resolveDefaultColor(
		index: number,
		scheme: 'default' | 'warm' | 'cool' | 'neutral' = 'default'
	): string {
		const colorList = LINE_CHART_COLOR_SCHEME[scheme] ?? LINE_CHART_COLOR_SCHEME.default;
		return colorList[index % colorList.length];
	}

	static resolvePointPosition(params: {
		pointIndex: number;
		seriesLength: number;
		chartWidth: number;
		chartHeight: number;
		showAxis: boolean;
		calculatedMaxValue: number;
		pointValue: number;
	}) {
		const {
			pointIndex,
			seriesLength,
			chartWidth,
			chartHeight,
			showAxis,
			calculatedMaxValue,
			pointValue
		} = params;
		const segmentWidth = chartWidth / (seriesLength - 1 || 1);
		const x = (showAxis ? 50 : 5) + pointIndex * segmentWidth;
		const y =
			chartHeight +
			(showAxis ? 10 : 5) -
			((pointValue / (calculatedMaxValue || 1)) * chartHeight);

		return { x, y };
	}

	static resolveLinePaths(params: {
		data: LineChartData[];
		chartWidth: number;
		chartHeight: number;
		showAxis: boolean;
		calculatedMaxValue: number;
		smooth: boolean;
	}): string[] {
		const { data, chartWidth, chartHeight, showAxis, calculatedMaxValue, smooth } = params;

		return data.map((series) => {
			const points = series.data.map((point, index) =>
				this.resolvePointPosition({
					pointIndex: index,
					seriesLength: series.data.length,
					chartWidth,
					chartHeight,
					showAxis,
					calculatedMaxValue,
					pointValue: point.value
				})
			);

			return points.reduce((path, point, index) => {
				if (index === 0) {
					return `M ${point.x} ${point.y} `;
				}

				if (!smooth) {
					return `${path}L ${point.x} ${point.y} `;
				}

				const previousPoint = points[index - 1];
				const controlPointX = previousPoint.x + (point.x - previousPoint.x) / 2;
				return `${path}C ${controlPointX} ${previousPoint.y}, ${controlPointX} ${point.y}, ${point.x} ${point.y} `;
			}, '');
		});
	}

	static resolveAriaLabel(point: LineChartPoint): string {
		return `Data point: ${point.name}, Value: ${point.value}`;
	}
}
