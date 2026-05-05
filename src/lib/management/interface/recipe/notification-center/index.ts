import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { NotificationCenterProps } from '$stylist/chat/type/struct/notification-center-props';

export interface NotificationCenterStateProps extends StructIntersectAll<[NotificationCenterProps]> {}
