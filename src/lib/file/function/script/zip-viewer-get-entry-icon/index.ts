import type { SlotZipEntry } from '$stylist/file/type/struct/zip-viewer/entry';

export function getEntryIcon(entry: SlotZipEntry): string {
  return entry.type === 'directory' ? 'folder' : 'file';
}
