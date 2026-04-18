import type { HtmlAttributesBase } from '$stylist/information/interface/slot';

export interface SlotPrediction {
	label: string;
	value: number;
	confidence?: number;
}
