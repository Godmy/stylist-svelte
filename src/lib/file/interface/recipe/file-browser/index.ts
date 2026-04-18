import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { Snippet } from 'svelte';
import type { SlotFolderItem } from '$stylist/file/interface/slot/folder-item';
import type { BehaviorFileBrowserEvents } from '$stylist/file/interface/behavior/file-browser-events';

export interface RecipeFileBrowser extends StructIntersectAll<[BehaviorFileBrowserEvents]> {
	/** List of folder items */
	items: SlotFolderItem[];
	/** Show item count */
	showItemCount?: boolean;
	/** Enable selection */
	enableSelection?: boolean;
	/** Default expanded */
	defaultExpanded?: boolean;
	/** Disabled state */
	disabled?: boolean;
	/** Additional CSS class */
	class?: string;
	/** Item CSS class */
	itemClass?: string;
	/** Content CSS class */
	contentClass?: string;
}
