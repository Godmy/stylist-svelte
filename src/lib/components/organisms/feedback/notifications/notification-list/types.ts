/**
 * NotificationList types and interfaces following SOLID principles
 */

import type { HTMLAttributes } from 'svelte/elements';
import type {
  NotificationType as BaseNotificationType,
  INotification as BaseNotification
} from '$lib/components/molecules/feedback/notifications/notification copy';

export type NotificationListType = BaseNotificationType;

export interface INotification extends Omit<BaseNotification, 'message'> {
  content: string; // Renamed from message
  unread?: boolean;
  actions?: {
    label: string;
    handler: () => void;
  }[];
  icon?: string; // Optional custom icon
  dismissible?: boolean;
  avatar?: string; // Sender's avatar
}

export interface INotificationListProps extends HTMLAttributes<HTMLDivElement> {
  notifications: INotification[];
  maxNotifications?: number;
  showUnreadBadge?: boolean;
  showTimestamp?: boolean;
  showActions?: boolean;
  showDismissAll?: boolean;
  showMarkAllAsRead?: boolean;
  enableAutoDismiss?: boolean;
  autoDismissDelay?: number; // in milliseconds
  class?: string;
  itemClass?: string;
  headerClass?: string;
  footerClass?: string;
  onNotificationClick?: (notification: INotification) => void;
  onNotificationDismiss?: (notificationId: string) => void;
  onNotificationMarkRead?: (notificationId: string) => void;
  onDismissAll?: () => void;
  onMarkAllAsRead?: () => void;
  locale?: string;
}