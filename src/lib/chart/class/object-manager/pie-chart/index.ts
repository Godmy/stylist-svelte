import type {
	AnalyticsPieChartSegment,
	PieChartDataPoint
} from '$stylist/chart/type/struct/pie-chart-segment';

const PIE_CHART_DEFAULT_COLOR = [
	'var(--color-primary-500)',
	'var(--color-success-500)',
	'var(--color-warning-500)',
	'var(--color-error-500)',
	'var(--color-secondary-500)'
] as const;

export class ObjectManagerPieChart {
	static resolveTotal(data: PieChartDataPoint[]): number {
		return data.reduce((sum, item) => sum + item.value, 0);
	}

	static resolveColors(colors?: string[]): string[] {
		return colors && colors.length > 0 ? colors : [...PIE_CHART_DEFAULT_COLOR];
	}

	static resolveSegments(
		data: PieChartDataPoint[],
		total: number,
		colors: string[]
	): AnalyticsPieChartSegment[] {
		let startAngle = 0;

		return data.map((item, index) => {
			const angle = total === 0 ? 0 : (item.value / total) * 360;
			const segment = {
				...item,
				startAngle,
				endAngle: startAngle + angle,
				color: colors[index % colors.length]
			};
			startAngle += angle;
			return segment;
		});
	}
}
