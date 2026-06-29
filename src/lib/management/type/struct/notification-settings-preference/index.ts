import type { TokenNotifictionChannel } from '$stylist/management/type/alias/notification-channel';

export type INotificationSettingsPreference = {
	id: string;
	name: string;
	description?: string;
	channels: Partial<Record<TokenNotifictionChannel, boolean>>;
};
