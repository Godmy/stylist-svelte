import type { SlotLink as BaseBreadcrumbLinkProps } from '$stylist/typography/interface/slot/link';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeBreadcrumbLinkProps
	extends ComputeIntersectAll<[BaseBreadcrumbLinkProps]> {}
