import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface LinkSpecificProps extends ComputeIntersectAll<[]> {
	type?: 'link' | 'breadcrumb' | 'inline' | 'button';
	href?: string;
	target?: '_blank' | '_self' | '_parent' | '_top';
	rel?: string;
	download?: string;
}
