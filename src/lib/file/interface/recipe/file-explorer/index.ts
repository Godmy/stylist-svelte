import type { FileItemType } from '$stylist/file/type/alias/file-item-type';
import type { SlotFileSystemItem } from '$stylist/file/type/struct/file-explorer/file-system-item';
import type { ViewMode } from '$stylist/file/type/alias/file-explorer-view-mode';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeFileExplorer
	extends ComputeIntersectAll<[({
items: ({
id: string;
	name: string;
	type: FileItemType;
	size?: number;
	modified?: Date;
	created?: Date;
	children?: SlotFileSystemItem[];
	path?: string;
	icon?: string;
})[];
	viewMode?: ViewMode;
	currentPath?: string;
	searchable?: boolean;
	showPath?: boolean;
	enableSelection?: boolean;
	multiselect?: boolean;
	disabled?: boolean;
	onItemSelect?: (item: ({
id: string;
	name: string;
	type: FileItemType;
	size?: number;
	modified?: Date;
	created?: Date;
	children?: SlotFileSystemItem[];
	path?: string;
	icon?: string;
})) => void;
	onItemDoubleClick?: (item: ({
id: string;
	name: string;
	type: FileItemType;
	size?: number;
	modified?: Date;
	created?: Date;
	children?: SlotFileSystemItem[];
	path?: string;
	icon?: string;
})) => void;
	onItemAction?: (item: ({
id: string;
	name: string;
	type: FileItemType;
	size?: number;
	modified?: Date;
	created?: Date;
	children?: SlotFileSystemItem[];
	path?: string;
	icon?: string;
}), action: string) => void;
	class?: string;
	itemClass?: string;
	headerClass?: string;
	toolbarClass?: string;
	searchClass?: string;
	pathClass?: string;
	onUpload?: (files: FileList) => void;
	onDownload?: (item: ({
id: string;
	name: string;
	type: FileItemType;
	size?: number;
	modified?: Date;
	created?: Date;
	children?: SlotFileSystemItem[];
	path?: string;
	icon?: string;
})) => void;
	[key: string]: unknown;
})]> {
	onItemSelect?: (item: ({
id: string;
	name: string;
	type: FileItemType;
	size?: number;
	modified?: Date;
	created?: Date;
	children?: SlotFileSystemItem[];
	path?: string;
	icon?: string;
})) => void;
	onItemDoubleClick?: (item: ({
id: string;
	name: string;
	type: FileItemType;
	size?: number;
	modified?: Date;
	created?: Date;
	children?: SlotFileSystemItem[];
	path?: string;
	icon?: string;
})) => void;
	onItemAction?: (item: ({
id: string;
	name: string;
	type: FileItemType;
	size?: number;
	modified?: Date;
	created?: Date;
	children?: SlotFileSystemItem[];
	path?: string;
	icon?: string;
}), action: string) => void;
	onUpload?: (files: FileList) => void;
	onDownload?: (item: ({
id: string;
	name: string;
	type: FileItemType;
	size?: number;
	modified?: Date;
	created?: Date;
	children?: SlotFileSystemItem[];
	path?: string;
	icon?: string;
})) => void;
}
