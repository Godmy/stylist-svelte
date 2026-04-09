/**
 * BillingSummaryContract — сводка по счёту.
 *
 * LEGO-состав:
 *   ILabelSlot        (information) — title (заголовок)
 *   ICaptionSlot      (information) — subtitle (подзаголовок)
 *   ThemeAttributes   (theme)       — class, data-variant, data-tone
 */
import type { RecordArchitectureMerge } from '$stylist/architecture/type/record/architecture-merge';
import type { ILabelSlot } from '$stylist/typography/interface/proto/label-slot';
import type { ICaptionSlot } from '$stylist/typography/interface/proto/caption-slot';
import type { ThemeAttributes } from '$stylist/theme/type/struct/theme-attributes';
import type { TokenBillingItem } from '$stylist/commerce/type/enum/billing-item';
import type { TokenBillingSummary } from '$stylist/commerce/type/enum/billing-summary';

export interface BillingItemContract {
	id: string;
	description: string;
	amount: number;
	currency: string;
	date: Date;
	status: TokenBillingItem;
}

export interface BillingSummaryContract
	extends RecordArchitectureMerge<[
		ILabelSlot,
		ICaptionSlot,
		ThemeAttributes<HTMLDivElement>
	]> {
	/** Total amount */
	totalAmount?: number;
	/** Currency code */
	currency?: string;
	/** Due date */
	dueDate?: Date;
	/** Billing status */
	status?: TokenBillingSummary;
	/** List of billing items */
	items: BillingItemContract[];
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
