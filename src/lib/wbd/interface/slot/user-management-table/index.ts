import type { StructWbdUser } from '$stylist/wbd/type/struct/user';

export interface SlotWbdUserManagementTable {
	users: StructWbdUser[];
	selectedUserId?: string;
	class?: string;
}
