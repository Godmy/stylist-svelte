import type { Snippet } from 'svelte';

export type FolderItem = {
  id: string;
  name: string;
  children?: FolderItem[];
  expanded?: boolean;
  selected?: boolean;
  type?: 'folder' | 'file';
  icon?: Snippet;
  data?: unknown;
};

export interface IFileBrowserProps {
  items: FolderItem[];
  class?: string;
  itemClass?: string;
  contentClass?: string;
  onItemSelect?: (item: FolderItem) => void;
  onItemToggle?: (item: FolderItem, expanded: boolean) => void;
  onItemAction?: (item: FolderItem, action: string) => void;
  showItemCount?: boolean;
  enableSelection?: boolean;
  defaultExpanded?: boolean;
  disabled?: boolean;
  [key: string]: unknown;
}
