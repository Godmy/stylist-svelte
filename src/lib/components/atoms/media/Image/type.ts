import type { HTMLImgAttributes } from 'svelte/elements';

// Define the props type
export interface ImageProps extends HTMLImgAttributes {
  src?: string;
  alt?: string;
  fallback?: string;
  loading?: 'lazy' | 'eager';
  width?: number | string;
  height?: number | string;
  content?: any; // Snippet type
  class?: string;
}

// Define the image state
export interface ImageState {
  error: boolean;
  loaded: boolean;
}