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
import type { BehaviorRfqFormEvents } from '$stylist/commerce/interface/behavior/rfq-form-events';
import type { SlotCaption } from '$stylist/typography/interface/slot/caption';
import type { SlotLabel } from '$stylist/typography/interface/slot/label';

export interface RecipeRfqForm extends StructIntersectAll<[ SlotLabel, SlotCaption, ThemeAttributes<HTMLDivElement> ]>, BehaviorRfqFormEvents {
	/** Form data */
	formData?: SlotRfqFormData;
	/** SlotCurrency code */
	currency?: string;
	/** Locale for formatting */
	locale?: string;
	/** Show company info */
	showCompanyInfo?: boolean;
	/** Show shipping address */
	showShippingAddress?: boolean;
	/** Show product list */
	showProductList?: boolean;
	/** Show attachments */
	showAttachments?: boolean;
	/** Show urgent option */
	showUrgentOption?: boolean;
	/** Show delivery terms */
	showDeliveryTerms?: boolean;
	/** Show payment terms */
	showPaymentTerms?: boolean;
	/** Show valid until */
	showValidUntil?: boolean;
	/** Max products */
	maxProducts?: number;
	/** Max attachments */
	maxAttachments?: number;
	/** Allowed file types */
	allowedFileTypes?: string[];
	/** Max file size in MB */
	maxFileSize?: number;
	/** Additional CSS class for form */
	formClass?: string;
	/** Additional CSS class for product list */
	productListClass?: string;
	/** Additional CSS class for actions */
	actionsClass?: string;
}
