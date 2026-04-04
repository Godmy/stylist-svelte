import type { Snippet } from 'svelte';

export interface FolderItemContract {
	id: string;
	name: string;
	children?: FolderItemContract[];
	expanded?: boolean;
	selected?: boolean;
	type?: 'folder' | 'file';
	icon?: Snippet;
	data?: unknown;
}

export interface FileBrowserEventsContract {
	onItemSelect?: (item: FolderItemContract) => void;
	onItemToggle?: (item: FolderItemContract, expanded: boolean) => void;
	onItemAction?: (item: FolderItemContract, action: string) => void;
}

export interface FileBrowserContract extends FileBrowserEventsContract {
	/** List of folder items */
	items: FolderItemContract[];
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
