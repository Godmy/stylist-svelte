import type { SlotFileSystemItem } from '../../file-system-item';
import type { ViewMode } from '../../view-mode';
import type { RestProps } from '../rest-props';

export type Props = RestProps & {
  items: SlotFileSystemItem[];
  viewMode?: ViewMode;
  currentPath?: string;
  searchable?: boolean;
  showPath?: boolean;
  enableSelection?: boolean;
  multiselect?: boolean;
  disabled?: boolean;
  onItemSelect?: (item: SlotFileSystemItem) => void;
  onItemDoubleClick?: (item: SlotFileSystemItem) => void;
  onItemAction?: (item: SlotFileSystemItem, action: string) => void;
  class?: string;
  itemClass?: string;
  headerClass?: string;
  toolbarClass?: string;
  searchClass?: string;
  pathClass?: string;
  onUpload?: (files: FileList) => void;
  onDownload?: (item: SlotFileSystemItem) => void;
};
