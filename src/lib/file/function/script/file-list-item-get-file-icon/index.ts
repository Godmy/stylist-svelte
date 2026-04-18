import type { FileItem } from '$stylist/file/type/struct/file-list-item/file-item';

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
