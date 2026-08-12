import type { Token } from '$stylist/token/type/object/token';
import { TOKEN_NOTIFICATION_CHANNEL } from '$stylist/notification/const/array/notification-channel';

export const TOKEN_NOTIFICATION_SETTING = [
	{
		key: 'notification-channel',
		label: 'Notification Channel',
		domain: 'notification',
		controlKind: 'radio',
		values: TOKEN_NOTIFICATION_CHANNEL
	}
] satisfies readonly Token[];
