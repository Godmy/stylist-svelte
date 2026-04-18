import type { SlotZipEntry } from '$stylist/file/type/struct/zip-viewer/entry';

export function handlePreview(
  entry: SlotZipEntry,
  disabled: boolean,
  onEntryPreview?: (entry: SlotZipEntry) => void
): void {
  if (disabled) return;
  onEntryPreview?.(entry);
}
