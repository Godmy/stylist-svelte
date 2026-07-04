/** AREA: STYLIST CODER MODEL -> AUTO-GENERATED */
import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { SlotContent } from '$stylist/theme/interface/slot/content';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeCell
	extends ComputeIntersectAll<[SlotTheme, HTMLAttributes<HTMLTableCellElement>, SlotContent]> {
	variant?: 'data' | 'header';
	align?: 'left' | 'center' | 'right';
}
