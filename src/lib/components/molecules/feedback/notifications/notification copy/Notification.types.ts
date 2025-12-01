/**
 * Базовые типы для уведомлений (атомарный компонент)
 * 
 * Объединяет общие типы из всех молекулярных компонентов уведомлений
 */

import type { HTMLAttributes } from 'svelte/elements';

/**
 * Тип уведомления, включающий все возможные значения из разных молекул
 */
export type NotificationType = 
  | 'success' 
  | 'warning' 
  | 'error' 
  | 'info' 
  | 'default'
  | 'message'
  | 'mention'
  | 'follow'
  | 'like'
  | 'comment';

/**
 * Каналы уведомлений
 */
export type NotificationChannel = 'email' | 'push' | 'sms' | 'in-app';

/**
 * Интерфейс базового уведомления
 */
export interface INotification {
  id: string;
  title?: string;
  message: string;
  type: NotificationType;
  timestamp?: Date;
  read?: boolean;
  actions?: Array<{
    label: string;
    handler: () => void;
  }>;
}

/**
 * Интерфейс настройки уведомления
 */
export interface INotificationPreference {
  id?: string;
  category: string;
  name?: string;
  description?: string;
  channels: NotificationChannel[];
  enabled: boolean;
}

/**
 * Пропсы для атомарного компонента уведомления
 */
export interface INotificationProps extends HTMLAttributes<HTMLDivElement> {
  notification: INotification;
  showCloseButton?: boolean;
  autoDismiss?: boolean;
  dismissDelay?: number;
  onDismiss?: (id: string) => void;
  class?: string;
}

/**
 * Пропсы для списка уведомлений
 */
export interface INotificationListProps extends HTMLAttributes<HTMLDivElement> {
  notifications: INotification[];
  onNotificationDismiss?: (id: string) => void;
  showDismissAll?: boolean;
  onDismissAll?: () => void;
  class?: string;
}

/**
 * Пропсы для настроек уведомлений
 */
export interface INotificationSettingsProps extends HTMLAttributes<HTMLDivElement> {
  preferences: INotificationPreference[];
  onPreferenceChange?: (preference: INotificationPreference) => void;
  class?: string;
}
