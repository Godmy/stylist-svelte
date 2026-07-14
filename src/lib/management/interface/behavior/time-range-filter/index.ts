import type { TokenTimeRange } from '$stylist/management/type/alias/token-time-range';

export interface BehaviorTimeRangeFilter {
	timeRange?: TokenTimeRange;
	showTimeRangeSelector?: boolean;
	onTimeRangeChange?: (range: TokenTimeRange) => void;
}
