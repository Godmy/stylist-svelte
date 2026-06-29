import type { TokenTimeRange } from '$stylist/calendar/type/alias/token-time-range';

export interface BehaviorTimeRangeFilter {
	timeRange?: TokenTimeRange;
	showTimeRangeSelector?: boolean;
	onTimeRangeChange?: (range: TokenTimeRange) => void;
}
