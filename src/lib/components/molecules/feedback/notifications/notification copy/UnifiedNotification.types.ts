/**
 * Объединенные типы для уведомлений (унифицированный атомарный компонент)
 *
 * Централизованное определение всех типов, связанных с уведомлениями,
 * объединяющее определения из разных молекул и обеспечивающее согласованность
 */

import type { HTMLAttributes } from 'svelte/elements';

/**
 * Тип уведомления, включающий все возможные значения
 */
export type UnifiedNotificationType =
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
 * Каналы уведомлений (унифицированный формат с поддержкой обоих конвенций)
 * Поддерживает как 'in-app' так и 'in_app' форматы для обеспечения совместимости
 */
export type UnifiedNotificationChannel = 'email' | 'push' | 'sms' | 'in-app' | 'in_app';

/**
 * Интерфейс базового уведомления
 */
export interface IUnifiedNotification {
  id: string;
  title?: string;
  message: string;
  type: UnifiedNotificationType;
  timestamp?: Date;
  read?: boolean;
  actions?: Array<{
    label: string;
    handler: () => void;
  }>;
}

/**
 * Интерфейс категории уведомлений
 */
export interface IUnifiedNotificationCategory {
  id: string;
  name: string;
  description: string;
  channels: UnifiedNotificationChannel[];
}

/**
 * Специфические интерфейсы для молекулярных компонентов
 */

// Для NotificationSettings - детализированные настройки с id, именем и описанием
export interface IUnifiedNotificationSettingsPreference {
  id: string;
  name: string;
  description: string;
  channels: Partial<Record<UnifiedNotificationChannel, boolean>>;
}

// Для NotificationPreferences - элементы с категорией и каналом
export interface IUnifiedNotificationPreferencesItem {
  categoryId: string;
  channel: UnifiedNotificationChannel;
  enabled: boolean;
}

// Для NotificationPreferences - категории
export interface IUnifiedNotificationPreferencesCategory {
  id: string;
  name: string;
  description: string;
  channels: UnifiedNotificationChannel[];
}

/**
 * Пропсы для атомарного компонента уведомления
 */
export interface IUnifiedNotificationProps extends HTMLAttributes<HTMLDivElement> {
  notification: IUnifiedNotification;
  showCloseButton?: boolean;
  autoDismiss?: boolean;
  dismissDelay?: number;
  onDismiss?: (id: string) => void;
  class?: string;
}

/**
 * Пропсы для списка уведомлений
 */
export interface IUnifiedNotificationListProps extends HTMLAttributes<HTMLDivElement> {
  notifications: IUnifiedNotification[];
  onNotificationDismiss?: (id: string) => void;
  showDismissAll?: boolean;
  onDismissAll?: () => void;
  class?: string;
}

/**
 * Пропсы для настроек уведомлений
 */
export interface IUnifiedNotificationSettingsProps extends HTMLAttributes<HTMLDivElement> {
  preferences: IUnifiedNotificationSettingsPreference[];
  onPreferenceChange?: (id: string, channel: UnifiedNotificationChannel, enabled: boolean) => void;
  showEmail?: boolean;
  showPush?: boolean;
  showSms?: boolean;
  showInApp?: boolean;
  class?: string;
  headerClass?: string;
  sectionClass?: string;
  footerClass?: string;
}

/**
 * Пропсы для детализированных настроек уведомлений
 */
export interface IUnifiedNotificationPreferencesProps extends HTMLAttributes<HTMLDivElement> {
  categories: IUnifiedNotificationPreferencesCategory[];
  preferences: IUnifiedNotificationPreferencesItem[];
  onPreferenceChange?: (categoryId: string, channel: UnifiedNotificationChannel, enabled: boolean) => void;
  onSave?: (preferences: IUnifiedNotificationPreferencesItem[]) => void;
  showEmail?: boolean;
  showPush?: boolean;
  showSms?: boolean;
  showInApp?: boolean;
  title?: string;
  description?: string;
  class?: string;
  headerClass?: string;
  categoryClass?: string;
  channelClass?: string;
  footerClass?: string;
}

// Aliases for backward compatibility with legacy names
export type NotificationChannel = UnifiedNotificationChannel;
export type INotificationSettingsPreference = IUnifiedNotificationSettingsPreference;
export interface INotificationSettingsProps extends IUnifiedNotificationSettingsProps {}
export type INotificationPreferencesItem = IUnifiedNotificationPreferencesItem;
export type INotificationPreferencesCategory = IUnifiedNotificationPreferencesCategory;
export interface INotificationPreferencesProps extends IUnifiedNotificationPreferencesProps {}
export type NotificationType = UnifiedNotificationType;
export interface INotification extends IUnifiedNotification {}
export type INotificationPreference = IUnifiedNotificationSettingsPreference;
