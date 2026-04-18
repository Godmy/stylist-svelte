import type { Snippet } from 'svelte';

// SlotFolderItem type
export type SlotFolderItem = {
  id: string;
  name: string;
  children?: SlotFolderItem[];
  expanded?: boolean;
  selected?: boolean;
  type?: 'folder' | 'file';
  icon?: Snippet;
  data?: any;
};
