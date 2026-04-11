import type { FileItem } from '../../file-item';
import type { RestProps } from '../rest-props';

export type Props = RestProps & {
  item: FileItem;
  class?: string;
  cellClass?: string;
  onItemSelect?: (item: FileItem) => void;
  onItemDoubleClick?: (item: FileItem) => void;
  onItemAction?: (item: FileItem, action: string) => void;
  showThumbnail?: boolean;
  showSize?: boolean;
  showModified?: boolean;
  showOwner?: boolean;
  enableSelection?: boolean;
  disabled?: boolean;
  variant?: 'default' | 'compact';
};
