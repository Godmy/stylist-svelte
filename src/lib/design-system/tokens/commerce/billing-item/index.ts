export const TOKEN_BILLING_ITEM = ['paid', 'pending', 'failed', 'refunded'] as const;

export type TokenBillingItem = (typeof TOKEN_BILLING_ITEM)[number];
