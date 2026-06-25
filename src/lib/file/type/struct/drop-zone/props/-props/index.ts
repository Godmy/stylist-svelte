import type { Snippet } from 'svelte';
import type { SlotDropItem } from '$stylist/file/type/struct/drop-zone/item';
import type { RestProps } from '$stylist/file/type/struct/drop-zone/props/rest-props';

export type Props = RestProps & {
	children?: Snippet;
	class?: string;
	accept?: string;
	multiple?: boolean;
	disabled?: boolean;
	maxSize?: number;
	maxItems?: number;
	onDrop?: (items: SlotDropItem[]) => void;
	onDragOver?: (items: DragEvent) => void;
	onDragLeave?: (items: DragEvent) => void;
	onItemAdded?: (item: SlotDropItem) => void;
	onItemRemoved?: (item: SlotDropItem) => void;
	preview?: boolean;
	label?: string;
	description?: string;
};
