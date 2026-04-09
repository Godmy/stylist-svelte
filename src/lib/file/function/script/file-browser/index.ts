import type { FolderItem } from '$stylist/file/type/struct/file-browser/folder-item';

export function toggleItem(
  item: FolderItem,
  disabled: boolean,
  expandedItems: Set<string>,
  setExpandedItems: (items: Set<string>) => void,
  onItemToggle?: (item: FolderItem, expanded: boolean) => void
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

export function handleSelect(
  item: FolderItem,
  enableSelection: boolean,
  disabled: boolean,
  setSelectedItem: (item: FolderItem | null) => void,
  onItemSelect?: (item: FolderItem) => void
): void {
  if (!enableSelection || disabled) return;
  setSelectedItem(item);
  onItemSelect?.(item);
}

export function handleAction(
  item: FolderItem,
  action: string,
  onItemAction?: (item: FolderItem, action: string) => void
): void {
  onItemAction?.(item, action);
}

export function isExpanded(
  id: string,
  expandedItems: Set<string>
): boolean {
  return expandedItems.has(id);
}

export function getItemCount(item: FolderItem): number {
  if (!item.children) return 0;

  let count = 0;
  const stack = [...item.children];

  while (stack.length) {
    const current = stack.pop()!;
    if (current.children) {
      stack.push(...current.children);
    }
    count++;
  }

  return count;
}
