import type { SlotFileSystemItem } from '$stylist/file/interface/slot/file-system-item';

export interface BehaviorFileExplorerEvents {
	onItemSelect?: (item: SlotFileSystemItem) => void;
	onItemDoubleClick?: (item: SlotFileSystemItem) => void;
	onItemAction?: (item: SlotFileSystemItem, action: string) => void;
	onUpload?: (files: FileList) => void;
	onDownload?: (item: SlotFileSystemItem) => void;
}
