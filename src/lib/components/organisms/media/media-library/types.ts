/**
 * MediaLibrary types and interfaces following SOLID principles
 */

import type { Snippet } from 'svelte';

export interface IMediaLibraryProps {
  class?: string;
  mediaItems?: Array<{id: string, url: string, type: 'image' | 'video' | 'audio', name?: string}>;
  allowUpload?: boolean;
  allowSelection?: boolean;
  children?: Snippet;
}

export interface IMediaLibraryStyleClasses {
  base: string;
  grid: string;
  item: string;
  upload: string;
}