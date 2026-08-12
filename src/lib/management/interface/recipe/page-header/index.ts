import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotPageHeader } from '$stylist/management/interface/slot/page-header';
import type { Snippet } from 'svelte';
export interface PageHeaderStateProps extends ComputeIntersectAll<[SlotPageHeader]> {
	description?: string;
	breadcrumbs?: ({
label: string;
	href?: string;
})[];
	actions?: Snippet;
	class?: string;
}
