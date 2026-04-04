export type FileSystemItemType = 'file' | 'folder';

export type FileSystemItem = {
  id: string;
  name: string;
  type: FileSystemItemType;
  size?: number;
  modified?: Date;
  created?: Date;
  children?: FileSystemItem[];
  path?: string;
  icon?: string;
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
  [key: string]: unknown;
}
