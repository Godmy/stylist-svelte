/**
 * NotificationPreferences types - использует специфичные унифицированные типы из output
 */

import type {
  NotificationChannel,
  INotificationPreferencesCategory as BaseNotificationCategory,
  INotificationPreferencesItem as BaseNotificationPreferencesItem,
  INotificationPreferencesProps as BaseNotificationPreferencesProps
} from '$lib/components/molecules/feedback/notifications/notification copy/UnifiedNotification.types';

export type NotificationPreferencesChannel = NotificationChannel;

export interface INotificationCategory extends BaseNotificationCategory {
  id: string;
  name: string;
  description: string;
  channels: NotificationPreferencesChannel[];
}

export interface INotificationPreferencesItem extends BaseNotificationPreferencesItem {
  categoryId: string;
  channel: NotificationPreferencesChannel;
}

export interface INotificationPreferencesProps extends BaseNotificationPreferencesProps {
  categories: INotificationCategory[];
  preferences: INotificationPreferencesItem[];
  onPreferenceChange?: (categoryId: string, channel: NotificationPreferencesChannel, enabled: boolean) => void;
  onSave?: (preferences: INotificationPreferencesItem[]) => void;
}