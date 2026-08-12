import type { TokenBillingItem } from '$stylist/commerce/type/alias/billing-item';
import type { HtmlAttributesBase } from '$stylist/information/interface/slot/html-attributes-base';
import type { TokenBillingSummary } from '$stylist/commerce/type/alias/billing-summary';
import type { SlotTheme } from '$stylist/theme/interface/slot/theme';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';
import type { SlotText } from '$stylist/typography/interface/slot/text';

export interface RecipeBillingSummary extends ComputeIntersectAll<[((HtmlAttributesBase<HTMLDivElement> & {
title?: string;
	subtitle?: string;
	totalAmount?: number;
	currency?: string;
	dueDate?: Date;
	status?: TokenBillingSummary;
	items: ({
id: string;
	description: string;
	amount: number;
	currency: string;
	date: Date;
	status: TokenBillingItem;
})[];
	showDetails?: boolean;
	showDueDate?: boolean;
	showStatus?: boolean;
	class?: string;
	headerClass?: string;
	summaryClass?: string;
	itemsClass?: string;
	footerClass?: string;
})), SlotTheme, SlotText, SlotText]> {}
