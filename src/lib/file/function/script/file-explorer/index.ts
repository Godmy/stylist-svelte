import type { SlotFileSystemItem } from '$stylist/file/type/struct/file-explorer/file-system-item';

export function handleItemClick(
  item: SlotFileSystemItem,
  enableSelection: boolean,
  multiselect: boolean,
  selectedItems: SlotFileSystemItem[],
  setSelectedItems: (items: SlotFileSystemItem[]) => void,
  onItemSelect?: (item: SlotFileSystemItem) => void
): void {
  if (enableSelection) {
    if (multiselect) {
      if (selectedItems.some(i => i.id === item.id)) {
        setSelectedItems(selectedItems.filter(i => i.id !== item.id));
      } else {
        setSelectedItems([...selectedItems, item]);
      }
    } else {
      setSelectedItems([item]);
    }
  }

  onItemSelect?.(item);
}
