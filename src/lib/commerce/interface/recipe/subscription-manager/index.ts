/**
 * SubscriptionManagerContract вЂ” СѓРїСЂР°РІР»РµРЅРёРµ РїРѕРґРїРёСЃРєРѕР№.
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ILabelSlot        (information) вЂ” title (Р·Р°РіРѕР»РѕРІРѕРє)
 *   ICaptionSlot      (information) вЂ” subtitle (РїРѕРґР·Р°РіРѕР»РѕРІРѕРє)
 *   ThemeAttributes   (theme)       вЂ” class, data-variant, data-tone
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';
import type { SlotCaption as ICaptionSlot } from '$stylist/typography/interface/slot/caption';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';
import type { SlotSubscription } from '$stylist/commerce/interface/slot/subscription';
import type { BehaviorSubscriptionManagerEvents } from '$stylist/commerce/interface/behavior/subscription-manager-events';
import type { SlotCaption } from '$stylist/typography/interface/slot/caption';
import type { SlotLabel } from '$stylist/typography/interface/slot/label';

export interface RecipeSubscriptionManager extends StructIntersectAll<[ SlotLabel, SlotCaption, ThemeAttributes<HTMLDivElement> ]>, BehaviorSubscriptionManagerEvents {
	/** SlotSubscription data */
	subscription: SlotSubscription;
	/** Show actions */
	showActions?: boolean;
	/** Show billing info */
	showBillingInfo?: boolean;
	/** Show payment method */
	showPaymentMethod?: boolean;
	/** Additional CSS class for header */
	headerClass?: string;
	/** Additional CSS class for plan */
	planClass?: string;
	/** Additional CSS class for actions */
	actionsClass?: string;
	/** Additional CSS class for footer */
	footerClass?: string;
}
