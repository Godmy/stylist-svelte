import type { HTMLAttributes } from 'svelte/elements';
import type { BehaviorBorderToken } from '$stylist/layout/interface/behavior/border-token';
import type { BehaviorTypography } from '$stylist/typography/interface/behavior/typography';
import type { IconSize } from '$stylist/media/type/struct/icon-size';
import type { IconDirection } from '$stylist/media/type/struct/icon-direction';
import type { IconVariant } from '$stylist/media/type/struct/icon-variant';
import type { IconShape } from '$stylist/media/type/struct/icon-shape';

export interface ContractIcon extends Omit<HTMLAttributes<HTMLSpanElement>, 'class'>, BehaviorBorderToken, BehaviorTypography {
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
	color?: string;
	/** Filled */
	filled?: boolean;
	/** Additional CSS class */
	class?: string;
	/** Container CSS class */
	containerClass?: string;
}
