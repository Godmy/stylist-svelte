import type { HTMLAttributes } from 'svelte/elements';
import type { NotificationChannel } from '$stylist/design-system/tokens/interaction/notification-channels';
export interface INotificationSettingsPreference {
  id: string;
  name: string;
  description?: string;
  channels: Partial<Record<NotificationChannel, boolean>>;
}

export interface INotificationSettingsProps extends HTMLAttributes<HTMLDivElement> {
  preferences: INotificationSettingsPreference[];
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



