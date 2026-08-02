import type { RecipeWbdUserManagementTable } from '$stylist/wbd/interface/recipe/user-management-table';
import type { StructWbdUser } from '$stylist/wbd/type/struct/user';

export function createWbdUserManagementTableState(props: RecipeWbdUserManagementTable) {
	const className = $derived(props.class ?? '');
	const users = $derived([...props.users].sort((a, b) => a.email.localeCompare(b.email)));

	return {
		get users() {
			return users;
		},
		get selectedUserId() {
			return props.selectedUserId;
		},
		get className() {
			return className;
		},
		selectUser(userId: string) {
			props.onSelectUser?.(userId);
		},
		updateRole(userId: string, role: StructWbdUser['role']) {
			props.onUpdateUserRole?.(userId, role);
		}
	};
}

export default createWbdUserManagementTableState;
