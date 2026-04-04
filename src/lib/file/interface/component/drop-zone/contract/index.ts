import type { Snippet } from 'svelte';

export interface DropItemContract {
	id: string;
	name: string;
	type: string;
	size?: number;
	data?: unknown;
}

export interface DropZoneEventsContract {
	onDrop?: (items: DropItemContract[]) => void;
	onDragOver?: (e: DragEvent) => void;
	onDragLeave?: (e: DragEvent) => void;
	onItemAdded?: (item: DropItemContract) => void;
	onItemRemoved?: (item: DropItemContract) => void;
}

export interface DropZoneContract extends DropZoneEventsContract {
	/** Children slot */
	children?: Snippet;
	/** Accepted file types */
	accept?: string;
	/** Multiple files allowed */
	multiple?: boolean;
	/** Disabled state */
	disabled?: boolean;
	/** Maximum file size */
	maxSize?: number;
	/** Maximum items */
	maxItems?: number;
	/** Show preview */
	preview?: boolean;
	/** Label text */
	label?: string;
	/** Description text */
	description?: string;
	/** Additional CSS class */
	class?: string;
}
