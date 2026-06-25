import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SelectionMode } from '$stylist/token/type/alias/selection-mode/index';

export interface SelectionState extends ComputeIntersectAll<[]> {
	selectedIds: Set<string>;
	mode: SelectionMode;
	isSelecting: boolean;
	marqueeStart: { x: number; y: number } | null;
	marqueeCurrent: { x: number; y: number } | null;
}

