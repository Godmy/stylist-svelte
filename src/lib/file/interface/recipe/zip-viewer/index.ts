import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { Snippet } from 'svelte';
import type { SlotZipEntry } from '$stylist/file/interface/slot/zip-entry';
import type { BehaviorZipViewerEvents } from '$stylist/file/interface/behavior/zip-viewer-events';

export interface RecipeZipViewer extends StructIntersectAll<[BehaviorZipViewerEvents]> {
	/** List of zip entries */
	entries: SlotZipEntry[];
	/** Archive name */
	archiveName?: string;
	/** Searchable */
	searchable?: boolean;
	/** Show path */
	showPath?: boolean;
	/** Enable filtering */
	enableFiltering?: boolean;
	/** Default expanded */
	defaultExpanded?: boolean;
	/** Disabled state */
	disabled?: boolean;
	/** Children slot */
	children?: Snippet;
	/** Additional CSS class */
	class?: string;
	/** Entry CSS class */
	entryClass?: string;
	/** Header CSS class */
	headerClass?: string;
}
