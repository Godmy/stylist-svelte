/**
 * FileExplorer types and interfaces following SOLID principles
 */

import type { Snippet } from 'svelte';

export type FileType = 'file' | 'folder';

export type FileSystemItem = {
  id: string;
  name: string;
  type: FileType;
  size?: number; // in bytes
  modified?: Date;
  created?: Date;
  children?: FileSystemItem[];
  path?: string;
  icon?: string; // Custom icon
};

export type ViewMode = 'list' | 'grid';

export interface IFileExplorerProps {
  items: FileSystemItem[];
  viewMode?: ViewMode;
  currentPath?: string;
  searchable?: boolean;
  showPath?: boolean;
  enableSelection?: boolean;
  multiselect?: boolean;
  onItemSelect?: (item: FileSystemItem) => void;
  onItemDoubleClick?: (item: FileSystemItem) => void;
  onItemAction?: (item: FileSystemItem, action: string) => void;
  class?: string;
  itemClass?: string;
  headerClass?: string;
  toolbarClass?: string;
  searchClass?: string;
  pathClass?: string;
  onUpload?: (files: FileList) => void;
  onDownload?: (item: FileSystemItem) => void;
  children?: Snippet;
}

export interface IFileExplorerStyleClasses {
  base: string;
  header: string;
  toolbar: string;
  search: string;
  path: string;
  item: string;
  grid: string;
  list: string;
  selected: string;
  hovered: string;
}