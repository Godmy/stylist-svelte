export const PAYMENT_STATUSES = ['pending', 'processing', 'completed', 'failed', 'refunded'] as const;

export type PaymentStatus = (typeof PAYMENT_STATUSES)[number];
