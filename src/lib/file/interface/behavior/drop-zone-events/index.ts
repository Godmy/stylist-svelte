import type { Snippet } from 'svelte';
import type { SlotDropItem } from '$stylist/file/interface/slot/drop-item';

export interface BehaviorDropZoneEvents {
	onDrop?: (items: SlotDropItem[]) => void;
	onDragOver?: (e: DragEvent) => void;
	onDragLeave?: (e: DragEvent) => void;
	onItemAdded?: (item: SlotDropItem) => void;
	onItemRemoved?: (item: SlotDropItem) => void;
}
