import type { HTMLAttributes } from 'svelte/elements';
import type { BehaviorBorderToken } from '$stylist/layout/interface/behavior/border-token';
import type { BehaviorTypography } from '$stylist/typography/interface/behavior/typography';
import type { IconColor } from '$stylist/media/type/alias/icon-color';
import type { IconDirection } from '$stylist/media/type/struct/icon-direction';
import type { IconShape } from '$stylist/media/type/alias/icon-shape';
import type { IconSize } from '$stylist/media/type/alias/icon-size';
import type { IconVariant } from '$stylist/media/type/alias/icon-variant';

export interface IconProps
	extends HTMLAttributes<HTMLSpanElement>, BehaviorBorderToken, BehaviorTypography {
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
