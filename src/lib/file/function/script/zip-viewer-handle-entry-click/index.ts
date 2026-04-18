import type { SlotZipEntry } from '$stylist/file/type/struct/zip-viewer/entry';

export function handleEntryClick(
  entry: SlotZipEntry,
  disabled: boolean,
  expandedFolders: Set<string>,
  setExpandedFolders: (folders: Set<string>) => void,
  onEntryClick?: (entry: SlotZipEntry) => void
): void {
  if (disabled) return;

  if (entry.type === 'directory') {
    const isExpanded = expandedFolders.has(entry.path);
    const newSet = new Set(expandedFolders);
    if (isExpanded) {
      newSet.delete(entry.path);
    } else {
      newSet.add(entry.path);
    }
    setExpandedFolders(newSet);
  }

  onEntryClick?.(entry);
}
