import type { FileItem } from '$stylist/file/type/struct/file-list-item/file-item';

export function handleSelect(
  item: FileItem,
  disabled: boolean,
  enableSelection: boolean,
  isSelected: boolean,
  setIsSelected: (value: boolean) => void,
  onItemSelect?: (item: FileItem) => void
): void {
  if (!disabled && enableSelection) {
    const newValue = !isSelected;
    setIsSelected(newValue);
    onItemSelect?.({ ...item, selected: newValue });
  }
}

export function handleDoubleClick(
  item: FileItem,
  disabled: boolean,
  onItemDoubleClick?: (item: FileItem) => void
): void {
  if (!disabled) {
    onItemDoubleClick?.(item);
  }
}

export function handleAction(
  item: FileItem,
  action: string,
  disabled: boolean,
  onItemAction?: (item: FileItem, action: string) => void
): void {
  if (!disabled) {
    onItemAction?.(item, action);
  }
}

export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

export function getFileIcon(item: FileItem): string {
  if (item.type === 'folder') return 'folder';
  if (item.type === 'image') return 'image';
  if (item.type === 'video') return 'video';
  if (item.type === 'audio') return 'music';
  if (item.type === 'archive') return 'archive';
  if (item.type === 'text' || item.type === 'document') return 'file-text';
  if (item.type === 'code') return 'code';
  return 'file';
}
