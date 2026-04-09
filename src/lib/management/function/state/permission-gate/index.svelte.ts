import type { Snippet } from 'svelte';

export interface PermissionGateProps {
	hasPermission?: boolean;
	fallback?: Snippet | null;
	children: Snippet;
}

export function createPermissionGateState(props: PermissionGateProps) {
	const hasPermission = $derived(props.hasPermission ?? true);
	const fallback = $derived(props.fallback);

	return {
		get hasPermission() { return hasPermission; },
		get fallback() { return fallback; }
	};
}

export default createPermissionGateState;
