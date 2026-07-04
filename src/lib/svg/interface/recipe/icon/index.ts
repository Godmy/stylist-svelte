import type { HTMLAttributes } from 'svelte/elements';
import type { SlotThemeBorder } from '$stylist/theme/interface/slot/theme-border';
import type { BehaviorTypography } from '$stylist/typography/interface/behavior/typography';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { TOKEN_SIZE } from '$stylist/theme/const/array/size';
import type { SlotSvgName } from '$stylist/svg/interface/slot/svg-name';
import type { TokenDirection } from '$stylist/theme/type/alias/direction';
import type { TokenColorTone } from '$stylist/theme/type/alias/color-tone';
import type { TokenShape } from '$stylist/theme/type/alias/shape';

export interface RecipeIcon
	extends ComputeIntersectAll<
		[
			Omit<HTMLAttributes<HTMLSpanElement>, 'class'>,
			Partial<SlotSvgName>,
			SlotThemeBorder, 
			BehaviorTypography
		]
> {
	/** Icon size */
	size?: Extract<(typeof TOKEN_SIZE)[number], 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'> | number;
	/** Stroke width */
	strokeWidth?: number;
	/** Icon variant */
	variant?: TokenColorTone;
	/** Icon direction */
	direction?: TokenDirection;
	/** Is open state */
	isOpen?: boolean;
	/** Disabled state */
	disabled?: boolean;
	/** Container type */
	container?: 'none' | 'wrapper' | 'circle';
	/** Container size */
	containerSize?: Extract<(typeof TOKEN_SIZE)[number], 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'>;
	/** Container shape */
	shape?: TokenShape;
	/** Icon color */
	color?: string;
	/** Filled */
	filled?: boolean;
	/** Additional CSS class */
	class?: string;
	/** Container CSS class */
	containerClass?: string;
}
