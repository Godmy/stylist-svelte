import type { Snippet } from 'svelte';

export type ZipEntryType = 'file' | 'directory';

export interface ZipEntryContract {
	id: string;
	name: string;
	type: ZipEntryType;
	size?: number;
	compressedSize?: number;
	modified?: Date;
	isText?: boolean;
	path: string;
	parentPath?: string;
}

export interface ZipViewerEventsContract {
	onEntryClick?: (entry: ZipEntryContract) => void;
	onEntryPreview?: (entry: ZipEntryContract) => void;
	onEntryDownload?: (entry: ZipEntryContract) => void;
	onEntryExtract?: (entry: ZipEntryContract) => void;
}

export interface ZipViewerContract extends ZipViewerEventsContract {
	/** List of zip entries */
	entries: ZipEntryContract[];
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
