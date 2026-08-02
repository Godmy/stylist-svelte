import type { StructWbdUser } from '$stylist/wbd/type/struct/user';

export interface BehaviorWbdRoleAssignmentEvents {
	onAssignRole?: (userId: string, role: StructWbdUser['role']) => void;
}
