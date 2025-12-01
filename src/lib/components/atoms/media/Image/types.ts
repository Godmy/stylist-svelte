/**
 * Image types and interfaces following SOLID principles
 */

import type { HTMLImgAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

export interface IImageProps extends HTMLImgAttributes {
  src: string;
  alt?: string;
  fallback?: string;
  loading?: 'lazy' | 'eager';
  width?: number | string;
  height?: number | string;
  content?: Snippet;
}

export interface IImageStyleClasses {
  container: string;
  wrapper: string;
  image: string;
}

export interface ImageState {
  error: boolean;
  loaded: boolean;
}