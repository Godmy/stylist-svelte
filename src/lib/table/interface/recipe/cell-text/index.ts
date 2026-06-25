/** AREA: STYLIST CODER MODEL -> AUTO-GENERATED */
import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeCellText
	extends ComputeIntersectAll<[SlotTheme, HTMLAttributes<HTMLTableCellElement>]> {
	value?: string | number | null;
	truncate?: boolean;
	align?: 'left' | 'center' | 'right';
}
