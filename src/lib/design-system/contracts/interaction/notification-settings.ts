import type { HTMLAttributes } from 'svelte/elements';

export type NotificationChannel = 'email' | 'push' | 'sms' | 'in_app';

export interface INotificationSettingsPreference {
  id: string;
  name: string;
  description?: string;
  channels: Partial<Record<NotificationChannel, boolean>>;
}

export type INotificationPreference = INotificationSettingsPreference;

export interface INotificationSettingsProps extends HTMLAttributes<HTMLDivElement> {
  preferences: INotificationPreference[];
  onPreferenceChange?: (id: string, channel: NotificationChannel, enabled: boolean) => void;
  showEmail?: boolean;
  showPush?: boolean;
  showSms?: boolean;
  showInApp?: boolean;
  class?: string;
  headerClass?: string;
  sectionClass?: string;
  footerClass?: string;
}