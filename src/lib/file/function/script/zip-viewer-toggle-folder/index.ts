import type { SlotZipEntry } from '$stylist/file/type/struct/zip-viewer/entry';

export function toggleFolder(
  entry: SlotZipEntry,
  disabled: boolean,
  expandedFolders: Set<string>,
  setExpandedFolders: (folders: Set<string>) => void
): void {
  if (entry.type === 'file' || disabled) return;

  const newSet = new Set(expandedFolders);
  const isExpanded = newSet.has(entry.path);
  if (isExpanded) {
    newSet.delete(entry.path);
  } else {
    newSet.add(entry.path);
  }
  setExpandedFolders(newSet);
}
