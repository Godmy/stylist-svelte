export const TOKEN_PAYMENT_STATUS = [
	'pending',
	'failed',
	'refunded',
	'processing',
	'completed'
] as const;

export type TokenPaymentStatus = (typeof TOKEN_PAYMENT_STATUS)[number];
