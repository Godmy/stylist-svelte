import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { TokenSize } from '$stylist/theme/type/alias/size';
import type { TokenAvailability } from '$stylist/user/type/alias/availability';
import type { TokenColorTone } from '$stylist/theme/type/alias/color-tone';

export interface RecipeStatusIndicator
	extends ComputeIntersectAll<[SlotTheme, HTMLAttributes<HTMLSpanElement>]> {
	status?: TokenAvailability;
	appearance?: TokenColorTone;
	label?: string;
	customColor?: string;
	size?: TokenSize;
	showLabel?: boolean;
	indicatorClass?: string;
	labelClass?: string;
}
