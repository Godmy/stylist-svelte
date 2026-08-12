import type { LayoutHTMLAttributes } from '$stylist/layout/interface/behavior/layout-html-attributes';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { TokenOrientation } from '$stylist/layout/type/alias/orientation';
export interface RecipeDivider extends ComputeIntersectAll<[LayoutHTMLAttributes<HTMLDivElement>]> {
	class?: string;
	orientation?: TokenOrientation;
	align?: string;
	dashed?: boolean;
	label?: string;
}
