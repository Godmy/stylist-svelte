/**
 * NotificationBadge types and interfaces following SOLID principles
 */

import type { HTMLAttributes } from 'svelte/elements';
import type { Snippet } from 'svelte';

export type NotificationBadgeVariant = 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'number' | 'dot';
export type NotificationBadgePosition = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';

export interface INotificationBadgeProps extends HTMLAttributes<HTMLDivElement> {
  count?: number;
  maxCount?: number;
  variant?: NotificationBadgeVariant;
  position?: NotificationBadgePosition;
  showZero?: boolean;
  class?: string;
  badgeClass?: string;
  children?: Snippet;
}