import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { NotificationCenterProps } from '$stylist/communication/type/struct/notification-center-props';

export interface NotificationCenterStateProps extends StructIntersectAll<[NotificationCenterProps]> {}
