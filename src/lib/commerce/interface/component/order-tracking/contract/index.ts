/**
 * OrderTrackingContract — отслеживание статуса заказа.
 *
 * LEGO-состав:
 *   ThemeAttributes   (theme) — class, data-variant, data-tone
 */
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';

export type TrackingStatusType = 'pending' | 'processing' | 'shipped' | 'out-for-delivery' | 'delivered' | 'delayed' | 'returned';

export interface TrackingEventContract {
	id: string;
	status: TrackingStatusType;
	timestamp: Date;
	location?: string;
	description: string;
	notes?: string;
}

export interface TrackingInfoContract {
	orderId: string;
	trackingNumber: string;
	carrier: string;
	estimatedDelivery: Date;
	status: TrackingStatusType;
	progress: number;
	events: TrackingEventContract[];
	recipientName?: string;
	recipientPhone?: string;
	shippingAddress: string;
	deliveryNotes?: string;
}

export interface OrderTrackingEventsContract {
	onContactCarrier?: () => void;
	onReportIssue?: () => void;
	onDeliveryReschedule?: () => void;
}

export interface OrderTrackingContract
	extends RecordArchitectureMerge<[
		ThemeAttributes<HTMLDivElement>
	]>, OrderTrackingEventsContract {
	/** Tracking information */
	trackingInfo: TrackingInfoContract;
	/** Show recipient details */
	showRecipientDetails?: boolean;
	/** Show delivery notes */
	showDeliveryNotes?: boolean;
	/** Show contact carrier button */
	showContactCarrier?: boolean;
	/** Show report issue button */
	showReportIssue?: boolean;
	/** Show delivery reschedule button */
	showDeliveryReschedule?: boolean;
	/** Additional CSS class for header */
	headerClass?: string;
	/** Additional CSS class for timeline */
	timelineClass?: string;
	/** Additional CSS class for event */
	eventClass?: string;
	/** Additional CSS class for actions */
	actionsClass?: string;
}
