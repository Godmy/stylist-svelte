import type { InformationHTMLAttributes } from '$stylist/information/type/struct';
import type { TokenShape } from '$stylist/layout/type/enum/shape';
import type { IconSize } from '$stylist/media/type/struct/icon-size';
import type { IconDirection } from '$stylist/media/type/struct/icon-direction';
import type { IconVariant } from '$stylist/media/type/struct/icon-variant';
import type { IconShape } from '$stylist/media/type/struct/icon-shape';
import type { IconColor } from '$stylist/media/type/struct/icon-color';

export interface ContractIcon extends Omit<InformationHTMLAttributes<HTMLSpanElement>, 'class'> {
	/** Icon name */
	name?: string;
	/** Custom SVG */
	svg?: string;
	/** Icon size */
	size?: IconSize;
	/** Stroke width */
	strokeWidth?: number;
	/** Icon variant */
	variant?: IconVariant;
	/** Icon direction */
	direction?: IconDirection;
	/** Is open state */
	isOpen?: boolean;
	/** Disabled state */
	disabled?: boolean;
	/** Container type */
	container?: 'none' | 'wrapper' | 'circle';
	/** Container size */
	containerSize?: Exclude<IconSize, number>;
	/** Container shape */
	shape?: IconShape;
	/** Icon color */
	color?: IconColor;
	/** Filled */
	filled?: boolean;
	/** Additional CSS class */
	class?: string;
	/** Container CSS class */
	containerClass?: string;
}
