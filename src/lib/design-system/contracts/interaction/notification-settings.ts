import type { HTMLAttributes } from 'svelte/elements';
import type { TokenNotifictionChannel } from '$stylist/design-system/tokens/interaction/notification-channel';
export interface INotificationSettingsPreference {
  id: string;
  name: string;
  description?: string;
  channels: Partial<Record<TokenNotifictionChannel, boolean>>;
}

export interface INotificationSettingsProps extends HTMLAttributes<HTMLDivElement> {
  preferences: INotificationSettingsPreference[];
  onPreferenceChange?: (id: string, channel: TokenNotifictionChannel, enabled: boolean) => void;
  showEmail?: boolean;
  showPush?: boolean;
  showSms?: boolean;
  showInApp?: boolean;
  class?: string;
  headerClass?: string;
  sectionClass?: string;
  footerClass?: string;
}



