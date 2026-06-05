import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { InformationHTMLAttributes } from '$stylist/information/type/struct/information-html-attributes';

export interface SvgProps extends StructIntersectAll<[InformationHTMLAttributes<HTMLSpanElement>]> {
	svg: string;
	size?: number | string;
	strokeWidth?: number;
	class?: string;
}
