/**
 * RFQFormContract вЂ” С„РѕСЂРјР° Р·Р°РїСЂРѕСЃР° РєРѕРјРјРµСЂС‡РµСЃРєРѕРіРѕ РїСЂРµРґР»РѕР¶РµРЅРёСЏ.
 *
 * LEGO-СЃРѕСЃС‚Р°РІ:
 *   ILabelSlot        (information) вЂ” title (Р·Р°РіРѕР»РѕРІРѕРє С„РѕСЂРјС‹)
 *   ICaptionSlot      (information) вЂ” description (РѕРїРёСЃР°РЅРёРµ)
 *   ThemeAttributes   (theme)       вЂ” class, data-variant, data-tone
 */
import type { StructIntersectAll } from '$stylist/architecture/type/struct/intersect-all';
import type { SlotLabel as ILabelSlot } from '$stylist/typography/interface/slot/label';
import type { SlotCaption as ICaptionSlot } from '$stylist/typography/interface/slot/caption';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';
import type { SlotRfqFormData } from '$stylist/commerce/interface/slot/rfq-form-data';

export interface BehaviorRfqFormEvents {
	onSubmit?: (data: SlotRfqFormData) => void;
	onProductAdd?: () => void;
	onProductRemove?: (productId: string) => void;
	onAttachmentChange?: (attachments: File[]) => void;
}
