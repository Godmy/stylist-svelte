import type { BehaviorRangeBarSelect } from '$stylist/chart/interface/behavior/range-bar-select';
import type { SlotRangeBarsChart } from '$stylist/chart/interface/slot/range-bars-chart';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeRangeBarsChart extends ComputeIntersectAll<[SlotRangeBarsChart, BehaviorRangeBarSelect]> {}
