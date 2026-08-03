import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotTrackingInfo } from '$stylist/commerce/interface/slot/tracking-info';
import type { BehaviorOrderTrackingEvents } from '$stylist/commerce/interface/behavior/order-tracking-events';

export interface RecipeOrderTracking
	extends ComputeIntersectAll<[SlotTheme]>,
		BehaviorOrderTrackingEvents {
	trackingInfo: SlotTrackingInfo;

	showRecipientDetails?: boolean;

	showDeliveryNotes?: boolean;

	showContactCarrier?: boolean;

	showReportIssue?: boolean;

	showDeliveryReschedule?: boolean;

	headerClass?: string;

	timelineClass?: string;

	eventClass?: string;

	actionsClass?: string;
}
