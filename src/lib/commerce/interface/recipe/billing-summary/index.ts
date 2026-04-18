/**
 * BillingSummaryContract вЂ” СЃРІРѕРґРєР° РїРѕ СЃС‡С‘С‚Сѓ.
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
import type { TokenBillingItem } from '$stylist/commerce/type/enum/billing-item';
import type { TokenBillingSummary } from '$stylist/commerce/type/enum/billing-summary';
import type { ContractBillingItem } from '$stylist/commerce/interface/contract/billing-item';
import type { SlotCaption } from '$stylist/typography/interface/slot/caption';
import type { SlotLabel } from '$stylist/typography/interface/slot/label';

export interface RecipeBillingSummary extends StructIntersectAll<[ SlotLabel, SlotCaption, ThemeAttributes<HTMLDivElement> ]> {
	/** Total amount */
	totalAmount?: number;
	/** SlotCurrency code */
	currency?: string;
	/** Due date */
	dueDate?: Date;
	/** Billing status */
	status?: TokenBillingSummary;
	/** List of billing items */
	items: ContractBillingItem[];
	/** Show details section */
	showDetails?: boolean;
	/** Show due date */
	showDueDate?: boolean;
	/** Show status badge */
	showStatus?: boolean;
	/** Additional CSS class for header */
	headerClass?: string;
	/** Additional CSS class for summary */
	summaryClass?: string;
	/** Additional CSS class for items list */
	itemsClass?: string;
	/** Additional CSS class for footer */
	footerClass?: string;
}
