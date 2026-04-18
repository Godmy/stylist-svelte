import type { PermissionGateProps } from '$stylist/management/interface/recipe/permission-gate';

export function createPermissionGateState(props: PermissionGateProps) {
	const hasPermission = $derived(props.hasPermission ?? true);
	const fallback = $derived(props.fallback);

	return {
		get hasPermission() { return hasPermission; },
		get fallback() { return fallback; }
	};
}

export default createPermissionGateState;
