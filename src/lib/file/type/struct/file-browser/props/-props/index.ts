import type { SlotFolderItem } from '../../folder-item';
import type { RestProps } from '../rest-props';

export type Props = RestProps & {
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
};
