import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotPageHeader as IPageHeaderProps } from '$stylist/management/interface/slot/page-header';
import type { BreadcrumbItem } from '$stylist/management/interface/slot/breadcrumb-item';
import type { Snippet } from 'svelte';

export interface PageHeaderStateProps extends StructIntersectAll<[IPageHeaderProps]> {
	description?: string;
	breadcrumbs?: BreadcrumbItem[];
	actions?: Snippet;
	class?: string;
}
