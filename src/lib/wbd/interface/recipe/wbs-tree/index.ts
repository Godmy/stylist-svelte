import type { SlotWbsTree } from '$stylist/wbd/interface/slot/wbs-tree';
import type { BehaviorWbdTaskSelect } from '$stylist/wbd/interface/behavior/task-select';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeWbsTree extends ComputeIntersectAll<[SlotWbsTree, BehaviorWbdTaskSelect]> {}
