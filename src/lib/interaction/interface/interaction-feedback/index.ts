import type { HTMLAttributes } from 'svelte/elements';
import type { InteractionHTMLAttributes } from '$stylist/interaction/type/attribute/interaction';
import type { Snippet } from 'svelte';

export interface SimpleModalProps extends InteractionHTMLAttributes<HTMLDivElement> {
  open?: boolean;
  title?: string;
  class?: string;
  onClose?: () => void;
}

export interface LazyLoaderProps extends InteractionHTMLAttributes<HTMLDivElement> {
  loading?: boolean;
  text?: string;
  class?: string;
  children?: Snippet;
}

export interface LoadingBoundaryProps extends InteractionHTMLAttributes<HTMLDivElement> {
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

