import type { PerformanceDashboardRecipe } from '$stylist/management/interface/recipe/performance-dashboard';
import type { TokenTimeRange } from '$stylist/management/type/enum/time-range';
import { TOKEN_PERFORMANCE_RANGE } from '$stylist/management/const/enum/performance-range';
import { TOKEN_PERFORMANCE_BARS } from '$stylist/management/const/enum/performance-bars';

export class ObjectManagerPerformanceDashboard {
	static resolveTimeRanges(): readonly TokenTimeRange[] {
		return TOKEN_PERFORMANCE_RANGE;
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
		return TOKEN_PERFORMANCE_BARS;
	}
}
