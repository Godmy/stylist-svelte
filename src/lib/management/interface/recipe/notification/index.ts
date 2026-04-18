import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { INotificationProps } from '$stylist/communication/type/struct/notification-props';

export interface NotificationStateProps extends StructIntersectAll<[INotificationProps]> {
	class?: string;
}
