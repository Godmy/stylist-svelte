import type { HTMLAttributes } from 'svelte/elements';

/**
 * Notification Item data structure
 */
export interface NotificationItem {
  id: string;
  title: string;
  message?: string;
  type?: 'info' | 'success' | 'warning' | 'error';
  read?: boolean;
  timestamp?: Date;
}

/**
 * Notification Preferences Component Props
 * Used for managing user notification settings across different channels
 */
export interface NotificationPreferencesProps extends HTMLAttributes<HTMLDivElement> {
  /** Show email notification settings */
  showEmail?: boolean;
  /** Show push notification settings */
  showPush?: boolean;
  /** Show SMS notification settings */
  showSms?: boolean;
  /** Show in-app notification settings */
  showInApp?: boolean;
  /** Allow bulk toggle of all notifications */
  allowBulkToggle?: boolean;
  /** Custom class name */
  class?: string;
  /** Callback when preferences are saved */
  onSave?: (preferences: NotificationPreferencesData) => void;
  /** Callback when preferences are reset */
  onReset?: () => void;
}

/**
 * Notification preferences data structure
 */
export interface NotificationPreferencesData {
  email: boolean;
  push: boolean;
  sms: boolean;
  inApp: boolean;
}

/**
 * Scheduled Notification Item
 */
export interface ScheduledNotificationItem {
  id: string;
  title: string;
  description?: string;
  scheduledAt: string;
  enabled?: boolean;
  recurrence?: 'daily' | 'weekly' | 'monthly' | 'once';
}

/**
 * Scheduled Notification Component Props
 */
export interface ScheduledNotificationProps extends HTMLAttributes<HTMLDivElement> {
  /** List of scheduled notifications */
  notifications?: ScheduledNotificationItem[];
  /** Show edit button for each notification */
  showEditButton?: boolean;
  /** Show delete button for each notification */
  showDeleteButton?: boolean;
  /** Show recurrence information */
  showRecurrence?: boolean;
  /** Allow reordering of notifications */
  allowReorder?: boolean;
  /** Custom class name */
  class?: string;
  /** Callback when edit is clicked */
  onEdit?: (notification: ScheduledNotificationItem) => void;
  /** Callback when delete is clicked */
  onDelete?: (id: string) => void;
  /** Callback when toggle is clicked */
  onToggle?: (id: string) => void;
}

/**
 * Notification Center Props
 */
export interface NotificationCenterProps extends HTMLAttributes<HTMLDivElement> {
  /** List of notifications */
  notifications?: NotificationItem[];
  /** Show unread count badge */
  showUnreadCount?: boolean;
  /** Show mark all as read button */
  showMarkAllRead?: boolean;
  /** Show clear all button */
  showClearAll?: boolean;
  /** Show timestamp for each notification */
  showTimestamp?: boolean;
  /** Polling interval in milliseconds */
  pollingInterval?: number;
  /** Custom class name */
  class?: string;
  /** Callback when notification is clicked */
  onNotificationClick?: (notification: NotificationItem) => void;
  /** Callback when mark all as read is clicked */
  onMarkAllRead?: () => void;
  /** Callback when clear all is clicked */
  onClearAll?: () => void;
  /** Callback when fetch more is triggered */
  onFetchMore?: () => void;
}

/**
 * Notification List Props
 */
export interface NotificationListProps extends HTMLAttributes<HTMLDivElement> {
  /** List of notifications */
  notifications?: NotificationItem[];
  /** Show dismiss button for each notification */
  showDismiss?: boolean;
  /** Show type icon (info, success, warning, error) */
  showTypeIcon?: boolean;
  /** Show timestamp for each notification */
  showTimestamp?: boolean;
  /** Maximum number of visible notifications */
  maxVisible?: number;
  /** Custom class name */
  class?: string;
  /** Callback when notification is dismissed */
  onDismiss?: (id: string) => void;
  /** Callback when notification is clicked */
  onNotificationClick?: (notification: NotificationItem) => void;
}
