import type { SlotZipEntry } from '$stylist/file/type/struct/zip-viewer/entry';

export function handleDownload(
  entry: SlotZipEntry,
  disabled: boolean,
  onEntryDownload?: (entry: SlotZipEntry) => void
): void {
  if (disabled) return;
  onEntryDownload?.(entry);
}
