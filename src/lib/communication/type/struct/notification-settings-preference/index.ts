import type { TokenNotifictionChannel } from '$stylist/communication/type/enum/notification-channel';

export interface INotificationSettingsPreference {
  id: string;
  name: string;
  description?: string;
  channels: Partial<Record<TokenNotifictionChannel, boolean>>;
}
