export const TOKEN_BILLING_SUMMARY = ['paid', 'pending', 'cancelled', 'overdue'] as const;

export type TokenBillingSummary = (typeof TOKEN_BILLING_SUMMARY)[number];
