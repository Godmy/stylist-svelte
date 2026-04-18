import type { SlotDropItem } from '$stylist/file/type/struct/drop-zone/item';

export function handleDragOver(
  e: DragEvent,
  setIsDragOver: (value: boolean) => void,
  onDragOver?: (e: DragEvent) => void
): void {
  e.preventDefault();
  setIsDragOver(true);
  onDragOver?.(e);
}

export function handleDragLeave(
  e: DragEvent,
  setIsDragOver: (value: boolean) => void,
  onDragLeave?: (e: DragEvent) => void
): void {
  e.preventDefault();
  setIsDragOver(false);
  onDragLeave?.(e);
}

export function handleDrop(
  e: DragEvent,
  setIsDragOver: (value: boolean) => void,
  disabled: boolean,
  processFilesFn: (files: FileList) => void
): void {
  e.preventDefault();
  setIsDragOver(false);

  if (disabled) return;

  const files = e.dataTransfer?.files;
  if (files && files.length > 0) {
    processFilesFn(files);
  }
}

export function handleFileInput(
  e: Event,
  disabled: boolean,
  processFilesFn: (files: FileList) => void
): void {
  if (disabled) return;

  const target = e.target as HTMLInputElement;
  if (target.files && target.files.length > 0) {
    processFilesFn(target.files);
  }
}

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

export function clearAll(): SlotDropItem[] {
  return [];
}

export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}
