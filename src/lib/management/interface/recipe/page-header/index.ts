import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotPageHeader as IPageHeaderProps } from '$stylist/management/interface/slot/page-header';

export interface PageHeaderStateProps extends StructIntersectAll<[IPageHeaderProps]> {
	description?: string;
	breadcrumbs?: Record<string, unknown>[];
	actions?: unknown;
	class?: string;
}
