import type { BehaviorWbdMutationStatusEvents } from '$stylist/wbd/interface/behavior/mutation-status-events';
import type { SlotWbdMutationStatusToast } from '$stylist/wbd/interface/slot/mutation-status-toast';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeWbdMutationStatusToast
	extends ComputeIntersectAll<[SlotWbdMutationStatusToast, BehaviorWbdMutationStatusEvents]> {}
