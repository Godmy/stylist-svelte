import type { IBarPosition } from '$stylist/chart/type/struct/bar-chart-bar-position';
import type { IChartDataPoint } from '$stylist/chart/type/struct/bar-chart';
import type { TokenThemeScheme } from '$stylist/theme/type/enum/theme-scheme';
import { BAR_CHART_COLOR_SCHEME } from '$stylist/chart/const/preset/bar-chart-color-scheme';

export class ObjectManagerBarChart {
	static resolveMaxValue(data: IChartDataPoint[], maxValue?: number): number {
		if (typeof maxValue === 'number') {
			return maxValue;
		}

		return Math.max(...data.map((item) => item.value), 0);
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

	static resolveDefaultColor(index: number, scheme: TokenThemeScheme = 'minimal'): string {
		const colorList = BAR_CHART_COLOR_SCHEME[scheme] ?? BAR_CHART_COLOR_SCHEME.minimal;
		return colorList[index % colorList.length];
	}

	static resolveBarPositions(params: {
		data: IChartDataPoint[];
		barWidth: number;
		barGap: number;
		chartHeight: number;
		showAxis: boolean;
		calculatedMaxValue: number;
		colorScheme?: TokenThemeScheme;
	}): IBarPosition[] {
		const { data, barWidth, barGap, chartHeight, showAxis, calculatedMaxValue, colorScheme } =
			params;
		const startX = showAxis ? 50 : 5;

		return data.map((item, index) => {
			const x = startX + index * (barWidth + barGap);
			const barHeight =
				calculatedMaxValue === 0 ? 0 : (item.value / calculatedMaxValue) * chartHeight;
			const y = chartHeight + (showAxis ? 10 : 5) - barHeight;

			return {
				x,
				y,
				width: barWidth,
				height: barHeight,
				color: item.color || this.resolveDefaultColor(index, colorScheme)
			};
		});
	}
}
