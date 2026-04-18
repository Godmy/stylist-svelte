import type { SlotFileSystemItem } from '$stylist/file/type/struct/file-explorer/file-system-item';

export function getFileIcon(item: SlotFileSystemItem): string {
  if (item.type === 'folder') return 'folder';
  return 'file';
}
