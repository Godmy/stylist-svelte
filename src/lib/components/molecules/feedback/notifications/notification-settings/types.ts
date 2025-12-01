/**
 * NotificationSettings types - использует специфичные унифицированные типы из output
 */

import type {
  INotificationSettingsProps as BaseNotificationSettingsProps,
  INotificationSettingsPreference
} from '$lib/components/molecules/feedback/notifications/notification copy/UnifiedNotification.types';

// Create an alias for consistency
export type INotificationPreference = INotificationSettingsPreference;

// Экспортируем специфичный интерфейс для этого компонента
export interface INotificationSettingsProps extends BaseNotificationSettingsProps {
  preferences: INotificationPreference[];
}