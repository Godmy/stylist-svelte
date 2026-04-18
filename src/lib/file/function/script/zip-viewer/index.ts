import type { SlotZipEntry } from '$stylist/file/type/struct/zip-viewer/entry';

export function handleSearchInput(
  e: Event,
  setSearchQuery: (value: string) => void
): void {
  const target = e.target as HTMLInputElement;
  setSearchQuery(target.value);
}

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

export function handlePreview(
  entry: SlotZipEntry,
  disabled: boolean,
  onEntryPreview?: (entry: SlotZipEntry) => void
): void {
  if (disabled) return;
  onEntryPreview?.(entry);
}

export function handleDownload(
  entry: SlotZipEntry,
  disabled: boolean,
  onEntryDownload?: (entry: SlotZipEntry) => void
): void {
  if (disabled) return;
  onEntryDownload?.(entry);
}

export function handleExtract(
  entry: SlotZipEntry,
  disabled: boolean,
  onEntryExtract?: (entry: SlotZipEntry) => void
): void {
  if (disabled) return;
  onEntryExtract?.(entry);
}

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

export function formatFileSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

export function getEntryIcon(entry: SlotZipEntry): string {
  return entry.type === 'directory' ? 'folder' : 'file';
}
