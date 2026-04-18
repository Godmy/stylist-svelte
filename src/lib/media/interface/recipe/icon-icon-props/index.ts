import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { InformationHTMLAttributes } from '$stylist/information/type/struct';
import type { IconColor } from '$stylist/media/type/alias/icon-color';
import type { IconDirection } from '$stylist/media/type/alias/icon-direction';
import type { IconShape } from '$stylist/media/type/alias/icon-shape';
import type { IconSize } from '$stylist/media/type/alias/icon-size';
import type { IconVariant } from '$stylist/media/type/alias/icon-variant';

export interface IconProps extends StructIntersectAll<[InformationHTMLAttributes<HTMLSpanElement>]> {
	name?: string;
	svg?: string;
	size?: IconSize;
	strokeWidth?: number;
	variant?: IconVariant;
	direction?: IconDirection;
	isOpen?: boolean;
	disabled?: boolean;
	class?: string;
	containerClass?: string;
	container?: 'none' | 'wrapper' | 'circle';
	containerSize?: Exclude<IconSize, number>;
	shape?: IconShape;
	color?: IconColor;
	filled?: boolean;
}
