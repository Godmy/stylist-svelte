import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SelectionMode } from '$stylist/architecture/type/struct/selection-mode/index';
import type { SelectedItem } from '$stylist/architecture/interface/slot/selected-item/index';

export interface SelectionState extends StructIntersectAll<[]> {
	selectedIds: Set<string>;
	mode: SelectionMode;
	isSelecting: boolean;
	marqueeStart: { x: number; y: number } | null;
	marqueeCurrent: { x: number; y: number } | null;
}
