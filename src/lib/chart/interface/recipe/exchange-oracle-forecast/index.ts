import type { SlotText } from '$stylist/typography/interface/slot/text';

export interface RecipeExchangeOracleForecast extends SlotText {
	history: {
		time: string;
		value: number;
	}[];
	forecast: {
		time: string;
		min: number;
		low: number;
		consensus: number;
		high: number;
		max: number;
	}[];
	width?: number;
	height?: number;
	currency?: string;
	timeLabelStep?: number;
	class?: string;
}
