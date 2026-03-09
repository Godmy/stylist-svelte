/**
 * Toast types and interfaces following SOLID principles
 */

import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';
import type { NotificationType } from '$stylist/design-system/tokens/information/verdicts';

export type ToastType = NotificationType;

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

