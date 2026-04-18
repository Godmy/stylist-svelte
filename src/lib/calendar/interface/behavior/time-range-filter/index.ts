import type { TokenTimeRange } from '$stylist/calendar/type/enum/time-range';

/** Управление временным диапазоном календарного или аналитического представления. */
export interface BehaviorTimeRangeFilter {
	timeRange?: TokenTimeRange;
	showTimeRangeSelector?: boolean;
	onTimeRangeChange?: (range: TokenTimeRange) => void;
}
