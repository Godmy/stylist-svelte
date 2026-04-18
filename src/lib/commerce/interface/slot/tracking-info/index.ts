/**
 * OrderTrackingContract вЂ” РѕС‚СЃР»РµР¶РёРІР°РЅРёРµ СЃС‚Р°С‚СѓСЃР° Р·Р°РєР°Р·Р°.
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ThemeAttributes   (theme) вЂ” class, data-variant, data-tone
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';
import type { SlotTrackingEvent } from '$stylist/commerce/interface/slot/tracking-event';
import type { TrackingStatusType } from '$stylist/commerce/type/struct/tracking-status-type';

export interface SlotTrackingInfo {
	orderId: string;
	trackingNumber: string;
	carrier: string;
	estimatedDelivery: Date;
	status: TrackingStatusType;
	progress: number;
	events: SlotTrackingEvent[];
	recipientName?: string;
	recipientPhone?: string;
	shippingAddress: string;
	deliveryNotes?: string;
}
