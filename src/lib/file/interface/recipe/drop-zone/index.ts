import type { SlotDropItem } from '$stylist/file/type/object/drop-zone/item';
import type { SlotChildren } from '$stylist/theme/interface/slot/children';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
export interface RecipeDropZone
	extends ComputeIntersectAll<[({
class?: string;
	accept?: string;
	multiple?: boolean;
	disabled?: boolean;
	maxSize?: number;
	maxItems?: number;
	onDrop?: (items: SlotDropItem[]) => void;
	onDragOver?: (e: DragEvent) => void;
	onDragLeave?: (e: DragEvent) => void;
	onItemAdded?: (item: SlotDropItem) => void;
	onItemRemoved?: (item: SlotDropItem) => void;
	preview?: boolean;
	label?: string;
	description?: string;
}), SlotChildren]> {
	onDrop?: (items: ({
id: string;
	name: string;
	type: string;
	size?: number;
	data?: unknown;
})[]) => void;
	onDragOver?: (e: DragEvent) => void;
	onDragLeave?: (e: DragEvent) => void;
	onItemAdded?: (item: ({
id: string;
	name: string;
	type: string;
	size?: number;
	data?: unknown;
})) => void;
	onItemRemoved?: (item: ({
id: string;
	name: string;
	type: string;
	size?: number;
	data?: unknown;
})) => void;
}