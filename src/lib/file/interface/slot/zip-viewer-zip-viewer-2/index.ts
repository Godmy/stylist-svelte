import type { Snippet } from 'svelte';
import type { SlotZipEntry } from '$stylist/file/type/struct/zip-viewer/entry';

// ZipViewer props interface
export interface SlotZipViewer {
  entries: SlotZipEntry[];
  archiveName?: string;
  class?: string;
  entryClass?: string;
  headerClass?: string;
  onEntryClick?: (entry: SlotZipEntry) => void;
  onEntryPreview?: (entry: SlotZipEntry) => void;
  onEntryDownload?: (entry: SlotZipEntry) => void;
  onEntryExtract?: (entry: SlotZipEntry) => void;
  searchable?: boolean;
  showPath?: boolean;
  enableFiltering?: boolean;
  defaultExpanded?: boolean;
  disabled?: boolean;
  children?: Snippet;
}
