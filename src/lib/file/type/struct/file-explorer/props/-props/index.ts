import type { FileSystemItem } from '../../file-system-item';
import type { ViewMode } from '../../view-mode';
import type { RestProps } from '../rest-props';

export type Props = RestProps & {
  items: FileSystemItem[];
  viewMode?: ViewMode;
  currentPath?: string;
  searchable?: boolean;
  showPath?: boolean;
  enableSelection?: boolean;
  multiselect?: boolean;
  disabled?: boolean;
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
};
