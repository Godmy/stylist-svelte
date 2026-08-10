import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotPageHeader as IPageHeaderProps } from '$stylist/management/interface/slot/page-header';
import type { Snippet } from 'svelte';

export interface PageHeaderStateProps extends ComputeIntersectAll<[IPageHeaderProps]> {
	description?: string;
	breadcrumbs?: ({
label: string;
	href?: string;
})[];
	actions?: Snippet;
	class?: string;
}
