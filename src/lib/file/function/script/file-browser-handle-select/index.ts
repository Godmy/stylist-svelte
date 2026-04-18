import type { SlotFolderItem } from '$stylist/file/type/struct/file-browser/folder-item';

export function handleSelect(
  item: SlotFolderItem,
  enableSelection: boolean,
  disabled: boolean,
  setSelectedItem: (item: SlotFolderItem | null) => void,
  onItemSelect?: (item: SlotFolderItem) => void
): void {
  if (!enableSelection || disabled) return;
  setSelectedItem(item);
  onItemSelect?.(item);
}
