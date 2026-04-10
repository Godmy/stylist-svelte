import type { TokenPaymentMethod } from '$stylist/commerce/type/enum/payment-method';

export interface PaymentMethod {
	id: string;
	type: TokenPaymentMethod;
	name: string;
	description?: string;
	details?: string;
	lastFour?: string;
	expiry?: string;
	issuer?: string;
	enabled?: boolean;
	fee?: number;
	processingTime?: string;
	limitations?: string[];
	disabled?: boolean;
	isDefault?: boolean;
	isVerified?: boolean;
	nickname?: string;
}
