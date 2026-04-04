import type { Snippet } from 'svelte';

// FolderItem type
export type FolderItem = {
  id: string;
  name: string;
  children?: FolderItem[];
  expanded?: boolean;
  selected?: boolean;
  type?: 'folder' | 'file';
  icon?: Snippet;
  data?: any;
};
