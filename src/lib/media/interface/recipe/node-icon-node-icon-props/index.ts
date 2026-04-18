import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
export interface NodeIconProps extends StructIntersectAll<[]> {
	icon?: string;
	size?: number;
	accent?: string;
	background?: string;
}
