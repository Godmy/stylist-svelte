import type { SlotFolderItem } from '$stylist/file/type/struct/file-browser/folder-item';

export function toggleItem(
  item: SlotFolderItem,
  disabled: boolean,
  expandedItems: Set<string>,
  setExpandedItems: (items: Set<string>) => void,
  onItemToggle?: (item: SlotFolderItem, expanded: boolean) => void
): void {
  if (item.type === 'file' || disabled) return;

  const newSet = new Set(expandedItems);
  const isExpanded = newSet.has(item.id);
  if (isExpanded) {
    newSet.delete(item.id);
  } else {
    newSet.add(item.id);
  }
  setExpandedItems(newSet);
  onItemToggle?.(item, !isExpanded);
}
