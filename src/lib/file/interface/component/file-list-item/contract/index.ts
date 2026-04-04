export type FileItemType = 'file' | 'folder' | 'image' | 'video' | 'audio' | 'archive' | 'text' | 'code' | 'document';

export interface FileItemContract {
	id: string;
	name: string;
	type: FileItemType;
	size?: number;
	modified?: Date;
	created?: Date;
	path?: string;
	thumbnail?: string;
	permissions?: string;
	owner?: string;
	icon?: string;
	selected?: boolean;
}

export interface FileListItemEventsContract {
	onItemSelect?: (item: FileItemContract) => void;
	onItemDoubleClick?: (item: FileItemContract) => void;
	onItemAction?: (item: FileItemContract, action: string) => void;
}

export interface FileListItemContract extends FileListItemEventsContract {
	/** File item data */
	item: FileItemContract;
	/** Show thumbnail */
	showThumbnail?: boolean;
	/** Show size */
	showSize?: boolean;
	/** Show modified date */
	showModified?: boolean;
	/** Show owner */
	showOwner?: boolean;
	/** Enable selection */
	enableSelection?: boolean;
	/** Disabled state */
	disabled?: boolean;
	/** Variant */
	variant?: 'default' | 'compact';
	/** Additional CSS class */
	class?: string;
	/** Cell CSS class */
	cellClass?: string;
}
