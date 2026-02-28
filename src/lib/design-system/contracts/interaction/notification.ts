/**
 * Notification types and interfaces following SOLID principles
 */

import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';
import type { NotificationType as NotificationTypeToken, NotificationPosition } from '../../tokens/interaction/notification';

export type NotificationType = NotificationTypeToken;

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
