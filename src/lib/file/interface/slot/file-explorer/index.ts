import type { SlotFileSystemItem } from '$stylist/file/interface/slot/file-system-item';
import type { ViewMode } from '$stylist/token/type/alias/file-explorer-view-mode';

export interface SlotFileExplorer {
	items: SlotFileSystemItem[];
	viewMode?: ViewMode;
	currentPath?: string;
	searchable?: boolean;
	showPath?: boolean;
	enableSelection?: boolean;
	multiselect?: boolean;
	disabled?: boolean;
	onItemSelect?: (item: SlotFileSystemItem) => void;
	onItemDoubleClick?: (item: SlotFileSystemItem) => void;
	onItemAction?: (item: SlotFileSystemItem, action: string) => void;
	class?: string;
	itemClass?: string;
	headerClass?: string;
	toolbarClass?: string;
	searchClass?: string;
	pathClass?: string;
	onUpload?: (files: FileList) => void;
	onDownload?: (item: SlotFileSystemItem) => void;
	[key: string]: unknown;
}

