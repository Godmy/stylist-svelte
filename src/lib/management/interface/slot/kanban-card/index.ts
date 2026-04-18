import type { Snippet } from 'svelte';

export interface SlotKanbanCard {
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
	children?: Snippet;
}
