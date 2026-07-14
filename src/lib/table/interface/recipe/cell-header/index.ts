/** AREA: STYLIST CODER MODEL -> AUTO-GENERATED */
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { HTMLAttributes } from 'svelte/elements';
import type { TokenSortDirection } from '$stylist/table/type/record/sort-direction';
import type { BehaviorClickable } from '$stylist/interaction/interface/behavior/clickable';
import type { BehaviorFocusable } from '$stylist/interaction/interface/behavior/focusable';

export interface RecipeCellHeader
	extends ComputeIntersectAll<
		[HTMLAttributes<HTMLTableHeaderCellElement>, BehaviorClickable, BehaviorFocusable]
	> {
	title: string;
	sortKey?: string;
	currentSortKey?: string;
	currentSortDirection?: TokenSortDirection;
	onValueInput?: (key: string) => void;
	onValueChange?: (key: string) => void;
}
