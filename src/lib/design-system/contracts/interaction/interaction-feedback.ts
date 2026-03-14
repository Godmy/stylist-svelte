import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

export interface SimpleModalProps extends HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  title?: string;
  class?: string;
  onClose?: () => void;
}

export interface LazyLoaderProps extends HTMLAttributes<HTMLDivElement> {
  loading?: boolean;
  text?: string;
  class?: string;
  children?: Snippet;
}

export interface LoadingBoundaryProps extends HTMLAttributes<HTMLDivElement> {
  loading?: boolean;
  error?: string;
  class?: string;
  children?: Snippet;
}

export interface ResponseViewerProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  response?: string;
  status?: 'success' | 'error' | 'info';
  class?: string;
}


