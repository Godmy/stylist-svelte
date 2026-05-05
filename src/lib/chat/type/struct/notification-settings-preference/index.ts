import type { TokenNotifictionChannel } from '$stylist/chat/type/enum/notification-channel';

export type INotificationSettingsPreference = {
  id: string;
  name: string;
  description?: string;
  channels: Partial<Record<TokenNotifictionChannel, boolean>>;
}
