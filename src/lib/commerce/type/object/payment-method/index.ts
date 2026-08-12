export type PaymentMethod = {
	id: string;
	type: 'credit_card' | 'paypal' | 'bank_transfer' | 'digital_wallet';
	name?: string;
	nickname?: string;
	description?: string;
	details?: string;
	lastFour?: string;
	expiry?: string;
	enabled?: boolean;
	disabled?: boolean;
	isDefault?: boolean;
	fee?: number;
	processingTime?: string;
};
