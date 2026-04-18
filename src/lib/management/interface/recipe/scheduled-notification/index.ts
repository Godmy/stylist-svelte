import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { ScheduledNotificationProps } from '$stylist/communication/type/struct/scheduled-notification-props';

export interface ScheduledNotificationStateProps extends StructIntersectAll<[ScheduledNotificationProps]> {}
