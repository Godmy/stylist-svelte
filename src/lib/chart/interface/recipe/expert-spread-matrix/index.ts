import type { SlotText } from '$stylist/typography/interface/slot/text';

export interface RecipeExpertSpreadMatrix extends SlotText {
	experts: string[];
	periods: string[];
	values: {
		expert: string;
		period: string;
		value: number;
		outlier?: boolean;
	}[];
	width?: number;
	cellSize?: number;
	minValue?: number;
	maxValue?: number;
	class?: string;
}
