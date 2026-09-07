export interface SlotShippingOptionInfo {
	id: string;
	name: string;
	description: string;
	price: number;
	estimatedDays: number;
	available?: boolean;
	disabled?: boolean;
	cutoffTime?: string;
	carrier?: string;
	trackingAvailable?: boolean;
	signatureRequired?: boolean;
	insurance?: boolean;
	carbonNeutral?: boolean;
}
