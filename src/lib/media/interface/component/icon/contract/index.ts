import type { InformationHTMLAttributes } from '$stylist/information/type/struct/item';
import type { TokenShape } from '$stylist/layout/type/enum/shape';

export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | number;
export type IconDirection = 'up' | 'down' | 'left' | 'right';
export type IconVariant =
	| 'default'
	| 'primary'
	| 'secondary'
	| 'success'
	| 'warning'
	| 'danger'
	| 'info'
	| 'solid'
	| 'outline'
	| 'ghost'
	| 'link'
	| 'subtle'
	| 'neutral'
	| 'dark'
	| 'light';
export type IconShape = TokenShape | 'rounded';
export type IconColor = IconVariant | 'gray';

export interface IconContract extends Omit<InformationHTMLAttributes<HTMLSpanElement>, 'class'> {
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
