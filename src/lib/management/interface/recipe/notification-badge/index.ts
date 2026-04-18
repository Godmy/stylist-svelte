import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotNotificationBadge as INotificationBadgeProps } from '$stylist/notification/interface/slot/notification-badge';

export interface NotificationBadgeStateProps extends StructIntersectAll<[INotificationBadgeProps]> {}
