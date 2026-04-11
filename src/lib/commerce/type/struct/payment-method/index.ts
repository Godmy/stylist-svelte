export type PaymentMethod = {
	id: string;
	type: 'credit_card' | 'paypal' | 'bank_transfer' | 'digital_wallet';
	lastFour?: string;
	expiry?: string;
}
