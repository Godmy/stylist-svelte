import type { TrackingStatusType } from '$stylist/commerce/type/alias/tracking-status-type';
import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
export interface RecipeOrderTracking extends ComputeIntersectAll<[SlotTheme]> {
	onContactCarrier?: () => void;
	onReportIssue?: () => void;
	onDeliveryReschedule?: () => void;

	trackingInfo: {
		orderId: string;
		trackingNumber: string;
		carrier: string;
		estimatedDelivery: Date;
		status: TrackingStatusType;
		progress: number;
		events: {
			id: string;
			status: TrackingStatusType;
			timestamp: Date;
			location?: string;
			description: string;
			notes?: string;
		}[];
		recipientName?: string;
		recipientPhone?: string;
		shippingAddress: string;
		deliveryNotes?: string;
	};

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
