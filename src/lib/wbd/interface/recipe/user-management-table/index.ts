import type { BehaviorWbdUserManagementEvents } from '$stylist/wbd/interface/behavior/user-management-events';
import type { SlotWbdUserManagementTable } from '$stylist/wbd/interface/slot/user-management-table';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeWbdUserManagementTable
	extends ComputeIntersectAll<[SlotWbdUserManagementTable, BehaviorWbdUserManagementEvents]> {}
