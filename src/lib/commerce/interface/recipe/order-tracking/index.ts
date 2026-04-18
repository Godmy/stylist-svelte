/**
 * OrderTrackingContract вЂ” РѕС‚СЃР»РµР¶РёРІР°РЅРёРµ СЃС‚Р°С‚СѓСЃР° Р·Р°РєР°Р·Р°.
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ThemeAttributes   (theme) вЂ” class, data-variant, data-tone
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';
import type { SlotTrackingInfo } from '$stylist/commerce/interface/slot/tracking-info';
import type { BehaviorOrderTrackingEvents } from '$stylist/commerce/interface/behavior/order-tracking-events';

export interface RecipeOrderTracking extends StructIntersectAll<[ ThemeAttributes<HTMLDivElement> ]>, BehaviorOrderTrackingEvents {
	/** Tracking information */
	trackingInfo: SlotTrackingInfo;
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
