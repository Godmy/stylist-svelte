import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotFileSystemItem } from '$stylist/file/interface/slot/file-system-item';
import type { BehaviorFileExplorerEvents } from '$stylist/file/interface/behavior/file-explorer-events';
import type { ViewMode } from '$stylist/file/type/struct/file-explorer/view-mode';

export interface RecipeFileExplorer extends StructIntersectAll<[BehaviorFileExplorerEvents]> {
	/** List of file system items */
	items: SlotFileSystemItem[];
	/** View mode */
	viewMode?: ViewMode;
	/** Current path */
	currentPath?: string;
	/** Searchable */
	searchable?: boolean;
	/** Show path */
	showPath?: boolean;
	/** Enable selection */
	enableSelection?: boolean;
	/** Multiselect */
	multiselect?: boolean;
	/** Additional CSS class */
	class?: string;
	/** Item CSS class */
	itemClass?: string;
	/** Header CSS class */
	headerClass?: string;
	/** Toolbar CSS class */
	toolbarClass?: string;
	/** Search CSS class */
	searchClass?: string;
	/** Path CSS class */
	pathClass?: string;
}
