import type { SlotFileSystemItem } from '$stylist/file/type/struct/file-explorer/file-system-item';

export function handleItemDoubleClick(
  item: SlotFileSystemItem,
  onItemDoubleClick?: (item: SlotFileSystemItem) => void
): void {
  onItemDoubleClick?.(item);
}
