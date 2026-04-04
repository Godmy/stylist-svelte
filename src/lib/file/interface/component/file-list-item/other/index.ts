export type FileItemType = 'file' | 'folder' | 'image' | 'video' | 'audio' | 'archive' | 'text' | 'code' | 'document';

export interface IFileItem {
  id: string;
  name: string;
  type: FileItemType;
  size?: number;
  modified?: Date;
  created?: Date;
  path?: string;
  thumbnail?: string;
  permissions?: string;
  owner?: string;
  icon?: string;
  selected?: boolean;
}

export interface IFileListItemProps {
  item: IFileItem;
  class?: string;
  cellClass?: string;
  onItemSelect?: (item: IFileItem) => void;
  onItemDoubleClick?: (item: IFileItem) => void;
  onItemAction?: (item: IFileItem, action: string) => void;
  showThumbnail?: boolean;
  showSize?: boolean;
  showModified?: boolean;
  showOwner?: boolean;
  enableSelection?: boolean;
  disabled?: boolean;
  variant?: 'default' | 'compact';
  [key: string]: unknown;
}
