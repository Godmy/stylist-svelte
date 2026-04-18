import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
export interface NodeDotProps extends StructIntersectAll<[]> {
	accent?: string;
	size?: number;
	opacity?: number;
}
