export type Props = RestProps & {
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
};
