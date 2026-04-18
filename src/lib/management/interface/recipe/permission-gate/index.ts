import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { Snippet } from 'svelte';

export interface PermissionGateProps extends StructIntersectAll<[]> {
	hasPermission?: boolean;
	fallback?: Snippet | null;
	children: Snippet;
}
