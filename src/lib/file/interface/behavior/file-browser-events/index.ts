import type { Snippet } from 'svelte';
import type { SlotFolderItem } from '$stylist/file/interface/slot/folder-item';

export interface BehaviorFileBrowserEvents {
	onItemSelect?: (item: SlotFolderItem) => void;
	onItemToggle?: (item: SlotFolderItem, expanded: boolean) => void;
	onItemAction?: (item: SlotFolderItem, action: string) => void;
}
