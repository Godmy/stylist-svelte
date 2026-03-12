/**
 * Notification types and interfaces following SOLID principles
 */

import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';
import type { ToneVariant } from '../../tokens/interaction/variants';
import type { Alignment } from '../../tokens/architecture/alignments';

export type NotificationPosition = Extract<
	Alignment,
	'top-end' | 'top-start' | 'bottom-end' | 'bottom-start' | 'top-center' | 'bottom-center'
>;

export type NotificationType = ToneVariant;

export interface INotificationProps extends HTMLAttributes<HTMLDivElement> {
  show?: boolean;
  title?: string;
  message?: string;
  children?: Snippet;
  type?: NotificationType;
  duration?: number; // in milliseconds, 0 means persistent
  closable?: boolean;
  onClose?: () => void;
  position?: NotificationPosition;
  showIcon?: boolean;
  class?: string;
  contentClass?: string;
  headerClass?: string;
  bodyClass?: string;
}


