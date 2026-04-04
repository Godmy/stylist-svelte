export type FileSystemItemType = 'file' | 'folder';

export interface FileSystemItemContract {
	id: string;
	name: string;
	type: FileSystemItemType;
	size?: number;
	modified?: Date;
	created?: Date;
	children?: FileSystemItemContract[];
	path?: string;
	icon?: string;
}

export type ViewMode = 'list' | 'grid';

export interface FileExplorerEventsContract {
	onItemSelect?: (item: FileSystemItemContract) => void;
	onItemDoubleClick?: (item: FileSystemItemContract) => void;
	onItemAction?: (item: FileSystemItemContract, action: string) => void;
	onUpload?: (files: FileList) => void;
	onDownload?: (item: FileSystemItemContract) => void;
}

export interface FileExplorerContract extends FileExplorerEventsContract {
	/** List of file system items */
	items: FileSystemItemContract[];
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
