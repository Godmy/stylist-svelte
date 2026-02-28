export const BILLING_ITEM_STATUSES = ['paid', 'pending', 'failed', 'refunded'] as const;
export type BillingItemStatus = (typeof BILLING_ITEM_STATUSES)[number];

export const BILLING_SUMMARY_STATUSES = ['paid', 'pending', 'overdue', 'cancelled'] as const;
export type BillingSummaryStatus = (typeof BILLING_SUMMARY_STATUSES)[number];
