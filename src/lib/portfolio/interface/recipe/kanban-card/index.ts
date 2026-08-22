import type { SlotChildren } from '$stylist/theme/interface/slot/children';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
export interface RecipeKanbanCard extends ComputeIntersectAll<[SlotChildren]> {
	card: Record<string, unknown>;
	draggable?: boolean;
	selected?: boolean;
	editable?: boolean;
	archivable?: boolean;
	deletable?: boolean;
	ondragstart?: (event: DragEvent) => void;
	ondragend?: (event: DragEvent) => void;
	onTitleChange?: (title: string) => void;
	onArchive?: () => void;
	onDelete?: () => void;
}
