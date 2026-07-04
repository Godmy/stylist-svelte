import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { TokenSize } from '$stylist/theme/type/alias/size';
import type { TokenAvailability } from '$stylist/interaction/type/record/availability';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';

export interface RecipeStatusIndicator
	extends ComputeIntersectAll<[SlotTheme, HTMLAttributes<HTMLSpanElement>]> {
	status?: TokenAvailability;
	appearance?: TokenAppearance;
	label?: string;
	customColor?: string;
	size?: TokenSize;
	showLabel?: boolean;
	indicatorClass?: string;
	labelClass?: string;
}
