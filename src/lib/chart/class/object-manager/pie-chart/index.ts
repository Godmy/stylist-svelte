import type { AnalyticsPieChartSegment } from '$stylist/chart/type/struct/pie-chart-segment';
import type { PieChartDataPoint } from '$stylist/chart/type/struct/pie-chart';
import { TOKEN_CHART_COLORS } from '$stylist/chart/const/array/chart-colors';

export class ObjectManagerPieChart {
	static resolveTotal(data: PieChartDataPoint[]): number {
		return data.reduce((sum, item) => sum + item.value, 0);
	}

	static resolveColors(colors?: string[]): string[] {
		return colors && colors.length > 0 ? colors : [...TOKEN_CHART_COLORS];
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
