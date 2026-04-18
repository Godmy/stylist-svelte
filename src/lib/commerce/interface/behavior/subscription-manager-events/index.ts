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

export interface BehaviorSubscriptionManagerEvents {
	onUpgrade?: () => void;
	onDowngrade?: () => void;
	onCancel?: () => void;
	onPause?: () => void;
	onResume?: () => void;
	onBillingChange?: () => void;
	onPaymentMethodChange?: () => void;
}
