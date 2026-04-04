import type { Snippet } from 'svelte';
import type { ZipEntry } from '$stylist/file/type/struct/zip-viewer/entry';

// ZipViewer props interface
export interface IZipViewerProps {
  entries: ZipEntry[];
  archiveName?: string;
  class?: string;
  entryClass?: string;
  headerClass?: string;
  onEntryClick?: (entry: ZipEntry) => void;
  onEntryPreview?: (entry: ZipEntry) => void;
  onEntryDownload?: (entry: ZipEntry) => void;
  onEntryExtract?: (entry: ZipEntry) => void;
  searchable?: boolean;
  showPath?: boolean;
  enableFiltering?: boolean;
  defaultExpanded?: boolean;
  disabled?: boolean;
  children?: Snippet;
}
