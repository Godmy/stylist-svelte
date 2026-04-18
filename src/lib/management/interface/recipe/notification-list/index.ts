import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { NotificationListProps } from '$stylist/communication/type/struct/notification-list-props';

export interface NotificationListStateProps extends StructIntersectAll<[NotificationListProps]> {}
