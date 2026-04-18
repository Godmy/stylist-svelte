import type { SlotFolderItem } from '$stylist/file/type/struct/file-browser/folder-item';

export function handleAction(
  item: SlotFolderItem,
  action: string,
  onItemAction?: (item: SlotFolderItem, action: string) => void
): void {
  onItemAction?.(item, action);
}
