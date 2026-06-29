import type { TokenNotifictionChannel } from '$stylist/management/type/alias/notification-channel';
import type { INotificationSettingsPreference } from '$stylist/management/type/struct/notification-settings-preference';

export function updateNotificationPreference(
	preferences: INotificationSettingsPreference[],
	id: string,
	channel: TokenNotifictionChannel,
	enabled: boolean,
	onPreferenceChange?: (id: string, channel: TokenNotifictionChannel, enabled: boolean) => void
): INotificationSettingsPreference[] {
	if (onPreferenceChange) {
		onPreferenceChange(id, channel, enabled);
	}

	return preferences.map((pref) => {
		if (pref.id === id) {
			return {
				...pref,
				channels: {
					...pref.channels,
					[channel]: enabled
				}
			};
		}
		return pref;
	});
}
