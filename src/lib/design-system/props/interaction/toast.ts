/**
 * Toast types and interfaces following SOLID principles
 */

import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

export type ToastType = 'info' | 'success' | 'warning' | 'error';

export interface IToastProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  type?: ToastType;
  visible?: boolean;
  duration?: number; // in ms, 0 means persistent
  title?: Snippet;
  description?: Snippet;
  class?: string;
  children?: Snippet;
  ontoastClosed?: (event: CustomEvent) => void;
}

export interface IToastStyleClasses {
  type: string;
  visible: string;
}