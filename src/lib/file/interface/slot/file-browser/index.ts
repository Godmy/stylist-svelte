import type { Snippet } from 'svelte';
import type { SlotFolderItem } from '$stylist/file/type/struct/file-browser/folder-item';

export interface SlotFileBrowser {
  items: SlotFolderItem[];
  class?: string;
  itemClass?: string;
  contentClass?: string;
  onItemSelect?: (item: SlotFolderItem) => void;
  onItemToggle?: (item: SlotFolderItem, expanded: boolean) => void;
  onItemAction?: (item: SlotFolderItem, action: string) => void;
  showItemCount?: boolean;
  enableSelection?: boolean;
  defaultExpanded?: boolean;
  disabled?: boolean;
  [key: string]: unknown;
}
