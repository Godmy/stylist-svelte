import type { RecipeWbdRoleAssignmentPanel } from '$stylist/wbd/interface/recipe/role-assignment-panel';
import type { StructWbdUser } from '$stylist/wbd/type/struct/user';

export function createWbdRoleAssignmentPanelState(props: RecipeWbdRoleAssignmentPanel) {
	const className = $derived(props.class ?? '');
	const roles = $derived(['coordinator', 'expert', 'admin'] as const);

	return {
		get user() {
			return props.user;
		},
		get roles() {
			return roles;
		},
		get className() {
			return className;
		},
		assignRole(role: StructWbdUser['role']) {
			props.onAssignRole?.(props.user.id, role);
		}
	};
}

export default createWbdRoleAssignmentPanelState;
