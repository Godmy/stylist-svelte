import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { NotificationPreferencesProps } from '$stylist/chat/type/struct/notification-preferences-props';

export interface NotificationPreferencesStateProps extends StructIntersectAll<[NotificationPreferencesProps]> {
	email?: boolean;
	push?: boolean;
	sms?: boolean;
}
