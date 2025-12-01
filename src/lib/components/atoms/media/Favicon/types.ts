/**
 * Favicon types and interfaces following SOLID principles
 */

import type { HTMLImgAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

export interface IFaviconProps extends HTMLImgAttributes {
  url: string;
  size?: number;
  content?: Snippet;
}

export interface IFaviconStyleClasses {
  image: string;
  fallback: string;
}