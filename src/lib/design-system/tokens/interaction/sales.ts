export const PAYMENT_STATUSES = ['pending', 'processing', 'completed', 'failed', 'refunded'] as const;
export type PaymentStatus = (typeof PAYMENT_STATUSES)[number];

export const ORDER_STATUSES = ['processing', 'shipped', 'delivered', 'cancelled'] as const;
export type OrderStatus = (typeof ORDER_STATUSES)[number];

export const BILLING_ITEM_STATUSES = ['paid', 'pending', 'failed', 'refunded'] as const;
export type BillingItemStatus = (typeof BILLING_ITEM_STATUSES)[number];

export const BILLING_SUMMARY_STATUSES = ['paid', 'pending', 'overdue', 'cancelled'] as const;
export type BillingSummaryStatus = (typeof BILLING_SUMMARY_STATUSES)[number];

