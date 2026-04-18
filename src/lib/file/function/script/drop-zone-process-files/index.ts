import type { SlotDropItem } from '$stylist/file/type/struct/drop-zone/item';

export function processFiles(
  fileList: FileList,
  items: SlotDropItem[],
  accept: string,
  maxSize: number,
  maxItems: number,
  onItemAdded?: (item: SlotDropItem) => void,
  onDrop?: (items: SlotDropItem[]) => void
): SlotDropItem[] {
  const newItems: SlotDropItem[] = [];

  for (let i = 0; i < fileList.length; i++) {
    const file = fileList[i];

    if (file.size > maxSize) {
      console.warn(`File ${file.name} exceeds max size of ${maxSize} bytes`);
      continue;
    }

    if (accept !== '*' && !accept.split(',').some(type =>
      type.trim().startsWith('.')
        ? file.name.toLowerCase().endsWith(type.trim().toLowerCase())
        : file.type.startsWith(type.trim())
    )) {
      console.warn(`File ${file.name} is not of accepted type ${accept}`);
      continue;
    }

    if (items.length + newItems.length >= maxItems) {
      console.warn(`Maximum number of items (${maxItems}) reached`);
      break;
    }

    const newItem: SlotDropItem = {
      id: `${file.name}-${file.size}-${file.lastModified}`,
      name: file.name,
      type: file.type || 'unknown',
      size: file.size,
      data: file
    };

    newItems.push(newItem);
    onItemAdded?.(newItem);
  }

  if (newItems.length > 0) {
    const allItems = [...items, ...newItems];
    onDrop?.(allItems);
    return allItems;
  }

  return items;
}
