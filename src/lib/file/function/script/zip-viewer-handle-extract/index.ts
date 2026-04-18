import type { SlotZipEntry } from '$stylist/file/type/struct/zip-viewer/entry';

export function handleExtract(
  entry: SlotZipEntry,
  disabled: boolean,
  onEntryExtract?: (entry: SlotZipEntry) => void
): void {
  if (disabled) return;
  onEntryExtract?.(entry);
}
