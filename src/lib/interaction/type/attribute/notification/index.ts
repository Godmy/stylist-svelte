import type { TokenAlignment as NotificationPosition } from '$stylist/architecture/type/token/alignment';

/**
 * Notification types and interfaces following SOLID principles
 */

import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';
import type { TokenAppearance } from '$stylist/information/type/token/appearance';
export type NotificationType =
	| 'silent'
	| Extract<TokenAppearance, 'info' | 'success' | 'warning' | 'error'>;
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




