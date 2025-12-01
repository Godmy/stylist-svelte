/**
 * NotificationCenter types and interfaces following SOLID principles
 */

import type { HTMLAttributes } from 'svelte/elements';
import type {
  NotificationType as BaseNotificationType,
  INotification as BaseNotification
} from '$lib/components/molecules/feedback/notifications/notification copy';

export type NotificationCenterType = Extract<BaseNotificationType, 'info' | 'success' | 'warning' | 'error'>;

export interface INotificationCenterNotification extends Omit<BaseNotification, 'read'> {
  read: boolean;
  actions?: Array<{
    label: string;
    handler: () => void;
  }>;
}

export type FilterOption = 'all' | 'unread' | 'read';

export interface INotificationCenterProps extends HTMLAttributes<HTMLDivElement> {
  notifications: INotificationCenterNotification[];
  onMarkAsRead?: (id: string) => void;
  onMarkAllAsRead?: () => void;
  onArchive?: (id: string) => void;
  onDelete?: (id: string) => void;
  showFilter?: boolean;
  showMarkAllRead?: boolean;
  maxNotifications?: number;
  class?: string;
  headerClass?: string;
  notificationClass?: string;
  footerClass?: string;
  title?: string;
}