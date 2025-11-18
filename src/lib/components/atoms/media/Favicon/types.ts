/**
 * Favicon types and interfaces following SOLID principles
 */

import type { HTMLImgAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

export type FaviconSize = number;

export interface IFaviconProps {
  url?: string;
  size?: FaviconSize;
  class?: string;
  content?: Snippet;
}

export interface IFaviconStyleClasses {
  image: string;
  fallback: string;
}

export type FaviconProps = IFaviconProps & HTMLImgAttributes;