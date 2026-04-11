export type PaymentInfo = {
	method: string;
	lastFour?: string;
	status: 'paid' | 'pending' | 'failed';
}
