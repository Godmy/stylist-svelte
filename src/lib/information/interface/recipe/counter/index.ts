import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { TokenSize } from '$stylist/layout/type/alias/size';
import type { TokenAppearance } from '$stylist/interaction/type/record/appearance';

export interface RecipeCounter
	extends ComputeIntersectAll<[SlotTheme, HTMLAttributes<HTMLSpanElement>]> {
	count?: number;
	max?: number;
	variant?: TokenAppearance;
	size?: TokenSize;
}
