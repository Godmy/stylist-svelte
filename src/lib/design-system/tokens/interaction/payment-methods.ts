export const PAYMENT_METHOD_TYPES = [
	'credit_card',
	'debit_card',
	'paypal',
	'bank_transfer',
	'digital_wallet',
	'cash_on_delivery',
	'crypto',
	'apple_pay',
	'google_pay',
	'bank_account'
] as const;

export type PaymentMethodType = (typeof PAYMENT_METHOD_TYPES)[number];
