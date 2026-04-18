import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { Props } from '$stylist/information/type/struct';

export interface AlertCardStateProps extends StructIntersectAll<[Omit<Props, 'variant' | 'size'>]> {
	variant?: string;
	size?: string;
	title?: string;
	subtitle?: string;
}
