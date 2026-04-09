import type { PerformanceDashboardRecipe } from '$stylist/management/interface/recipe/performance-dashboard';
import type { TokenTimeRange } from '$stylist/management/type/enum/time-range';

const PERFORMANCE_DASHBOARD_TIME_RANGE = ['1d', '7d', '30d', '90d'] as const satisfies readonly TokenTimeRange[];
const PERFORMANCE_DASHBOARD_CHART_BAR_HEIGHT = [42, 56, 38, 64, 51, 70, 58, 76, 63, 68, 74, 61] as const;

export class ObjectManagerPerformanceDashboard {
	static resolveTimeRanges(): readonly TokenTimeRange[] {
		return PERFORMANCE_DASHBOARD_TIME_RANGE;
	}

	static resolveTimeRangeLabel(range: TokenTimeRange): string {
		switch (range) {
			case '1d':
				return '1D';
			case '7d':
				return '7D';
			case '30d':
				return '30D';
			case '90d':
				return '90D';
		}

		return range;
	}

	static selectTimeRange(
		range: TokenTimeRange,
		onTimeRangeChange?: PerformanceDashboardRecipe['onTimeRangeChange']
	): TokenTimeRange {
		onTimeRangeChange?.(range);
		return range;
	}

	static resolveChartBarHeights(): readonly number[] {
		return PERFORMANCE_DASHBOARD_CHART_BAR_HEIGHT;
	}
}
