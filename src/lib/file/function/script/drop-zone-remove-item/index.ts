import type { SlotDropItem } from '$stylist/file/type/struct/drop-zone/item';

export function removeItem(
  id: string,
  items: SlotDropItem[],
  onItemRemoved?: (item: SlotDropItem) => void
): SlotDropItem[] {
  const item = items.find(i => i.id === id);
  if (item) {
    onItemRemoved?.(item);
    return items.filter(i => i.id !== id);
  }
  return items;
}
