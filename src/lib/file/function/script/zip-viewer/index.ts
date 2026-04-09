import type { ZipEntry } from '$stylist/file/type/struct/zip-viewer/entry';

export function handleSearchInput(
  e: Event,
  setSearchQuery: (value: string) => void
): void {
  const target = e.target as HTMLInputElement;
  setSearchQuery(target.value);
}

export function handleEntryClick(
  entry: ZipEntry,
  disabled: boolean,
  expandedFolders: Set<string>,
  setExpandedFolders: (folders: Set<string>) => void,
  onEntryClick?: (entry: ZipEntry) => void
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
  entry: ZipEntry,
  disabled: boolean,
  onEntryPreview?: (entry: ZipEntry) => void
): void {
  if (disabled) return;
  onEntryPreview?.(entry);
}

export function handleDownload(
  entry: ZipEntry,
  disabled: boolean,
  onEntryDownload?: (entry: ZipEntry) => void
): void {
  if (disabled) return;
  onEntryDownload?.(entry);
}

export function handleExtract(
  entry: ZipEntry,
  disabled: boolean,
  onEntryExtract?: (entry: ZipEntry) => void
): void {
  if (disabled) return;
  onEntryExtract?.(entry);
}

export function toggleFolder(
  entry: ZipEntry,
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

export function getEntryIcon(entry: ZipEntry): string {
  return entry.type === 'directory' ? 'folder' : 'file';
}
