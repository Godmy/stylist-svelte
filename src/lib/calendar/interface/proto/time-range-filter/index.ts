import type { TokenTimeRange } from '$stylist/information/type/enum/time-range';

/** Управление временным диапазоном календарного или аналитического представления. */
export interface ITimeRangeFilter {
	timeRange?: TokenTimeRange;
	showTimeRangeSelector?: boolean;
	onTimeRangeChange?: (range: TokenTimeRange) => void;
}
