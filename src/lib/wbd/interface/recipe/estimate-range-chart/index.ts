import type { SlotEstimateRangeChart } from '$stylist/wbd/interface/slot/estimate-range-chart';
import type { BehaviorWbdTaskSelect } from '$stylist/wbd/interface/behavior/task-select';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeEstimateRangeChart
	extends ComputeIntersectAll<[SlotEstimateRangeChart, BehaviorWbdTaskSelect]> {}
