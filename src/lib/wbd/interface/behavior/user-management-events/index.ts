import type { StructWbdUser } from '$stylist/wbd/type/struct/user';

export interface BehaviorWbdUserManagementEvents {
	onSelectUser?: (userId: string) => void;
	onUpdateUserRole?: (userId: string, role: StructWbdUser['role']) => void;
}
