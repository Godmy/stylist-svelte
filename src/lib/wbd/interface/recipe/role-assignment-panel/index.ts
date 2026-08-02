import type { BehaviorWbdRoleAssignmentEvents } from '$stylist/wbd/interface/behavior/role-assignment-events';
import type { SlotWbdRoleAssignmentPanel } from '$stylist/wbd/interface/slot/role-assignment-panel';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeWbdRoleAssignmentPanel
	extends ComputeIntersectAll<[SlotWbdRoleAssignmentPanel, BehaviorWbdRoleAssignmentEvents]> {}
