import type { RecipePermissionGate } from '$stylist/management/interface/recipe/permission-gate';

export function createPermissionGateState(getProps: () => RecipePermissionGate) {
	const props = $derived(getProps());
	const hasPermission = $derived(props.hasPermission ?? true);
	const fallback = $derived(props.fallback);

	return {
		get hasPermission() {
			return hasPermission;
		},
		get fallback() {
			return fallback;
		}
	};
}

export default createPermissionGateState;
