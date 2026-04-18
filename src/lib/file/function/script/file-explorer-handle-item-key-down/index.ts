import type { SlotFileSystemItem } from '$stylist/file/type/struct/file-explorer/file-system-item';

export function handleItemKeyDown(
  event: KeyboardEvent,
  item: SlotFileSystemItem,
  handleItemClickFn: () => void,
  handleItemDoubleClickFn: () => void
): void {
  void item;
  if (event.key === ' ' || event.key === 'Spacebar') {
    event.preventDefault();
    handleItemClickFn();
    return;
  }

  if (event.key === 'Enter') {
    event.preventDefault();
    handleItemClickFn();
    handleItemDoubleClickFn();
  }
}
