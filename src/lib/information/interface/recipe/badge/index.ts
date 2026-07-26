import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotChildren } from '$stylist/theme/interface/slot/children';
import type { TokenColorTone } from '$stylist/theme/type/alias/color-tone';
import type { TokenSize } from '$stylist/theme/type/alias/size';

export interface RecipeBadge
	extends ComputeIntersectAll<[SlotTheme, SlotChildren, HTMLAttributes<HTMLSpanElement>]> {
	variant?: TokenColorTone;
	size?: TokenSize;
	disabled?: boolean;
	label?: string;
}
