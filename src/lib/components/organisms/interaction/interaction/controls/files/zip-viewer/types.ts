/**
 * ZipViewer types and interfaces following SOLID principles
 */

import type { Snippet } from 'svelte';

export type ZipEntryType = 'file' | 'directory';

export type ZipEntry = {
  id: string;
  name: string;
  type: ZipEntryType;
  size?: number; // in bytes
  compressedSize?: number;
  modified?: Date;
  isText?: boolean; // Is it a text file that can be viewed
  path: string;
  parentPath?: string;
};

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

export interface IZipViewerStyleClasses {
  base: string;
  header: string;
  entry: string;
  directory: string;
  file: string;
  expanded: string;
  collapsed: string;
  search: string;
  icon: string;
}