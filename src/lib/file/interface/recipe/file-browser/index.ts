import type { SlotFolderItem } from '$stylist/file/type/object/file-browser/folder-item';
import type { Snippet } from 'svelte';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
export interface RecipeFileBrowser
	extends ComputeIntersectAll<[({
items: ({
id: string;
	name: string;
	children?: SlotFolderItem[];
	expanded?: boolean;
	selected?: boolean;
	type?: 'folder' | 'file';
	icon?: Snippet;
	data?: unknown;
})[];
	class?: string;
	itemClass?: string;
	contentClass?: string;
	onItemSelect?: (item: ({
id: string;
	name: string;
	children?: SlotFolderItem[];
	expanded?: boolean;
	selected?: boolean;
	type?: 'folder' | 'file';
	icon?: Snippet;
	data?: unknown;
})) => void;
	onItemToggle?: (item: ({
id: string;
	name: string;
	children?: SlotFolderItem[];
	expanded?: boolean;
	selected?: boolean;
	type?: 'folder' | 'file';
	icon?: Snippet;
	data?: unknown;
}), expanded: boolean) => void;
	onItemAction?: (item: ({
id: string;
	name: string;
	children?: SlotFolderItem[];
	expanded?: boolean;
	selected?: boolean;
	type?: 'folder' | 'file';
	icon?: Snippet;
	data?: unknown;
}), action: string) => void;
	showItemCount?: boolean;
	enableSelection?: boolean;
	defaultExpanded?: boolean;
	disabled?: boolean;
	[key: string]: unknown;
})]> {
	onItemSelect?: (item: ({
id: string;
	name: string;
	children?: SlotFolderItem[];
	expanded?: boolean;
	selected?: boolean;
	type?: 'folder' | 'file';
	icon?: Snippet;
	data?: unknown;
})) => void;
	onItemToggle?: (item: ({
id: string;
	name: string;
	children?: SlotFolderItem[];
	expanded?: boolean;
	selected?: boolean;
	type?: 'folder' | 'file';
	icon?: Snippet;
	data?: unknown;
}), expanded: boolean) => void;
	onItemAction?: (item: ({
id: string;
	name: string;
	children?: SlotFolderItem[];
	expanded?: boolean;
	selected?: boolean;
	type?: 'folder' | 'file';
	icon?: Snippet;
	data?: unknown;
}), action: string) => void;
}
