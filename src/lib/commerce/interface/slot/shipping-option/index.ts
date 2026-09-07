export interface SlotShippingOption {
	id: string;
	name: string;
	description: string;
	price: number;
	estimatedDays: number;
	carrier?: string;
	trackingAvailable?: boolean;
}
