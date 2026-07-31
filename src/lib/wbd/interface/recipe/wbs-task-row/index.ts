import type { SlotWbsTaskRow } from '$stylist/wbd/interface/slot/wbs-task-row';
import type { BehaviorWbdTaskSelect } from '$stylist/wbd/interface/behavior/task-select';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeWbsTaskRow extends ComputeIntersectAll<[SlotWbsTaskRow, BehaviorWbdTaskSelect]> {}
