import type { RecipeWbdAdminSidebar } from '$stylist/wbd/interface/recipe/admin-sidebar';

export function createWbdAdminSidebarState(props: RecipeWbdAdminSidebar) {
	const className = $derived(props.class ?? '');

	return {
		get items() {
			return props.items;
		},
		get className() {
			return className;
		}
	};
}

export default createWbdAdminSidebarState;
