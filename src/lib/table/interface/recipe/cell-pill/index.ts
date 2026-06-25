/** AREA: STYLIST CODER MODEL -> AUTO-GENERATED */
import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { HTMLAttributes } from 'svelte/elements';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeCellPill
	extends ComputeIntersectAll<[SlotTheme, HTMLAttributes<HTMLTableCellElement>]> {
	value?: string | null;
	variant?: 'default' | 'primary' | 'success' | 'warning' | 'danger';
}
