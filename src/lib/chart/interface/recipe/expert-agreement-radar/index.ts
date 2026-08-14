import type { SlotText } from '$stylist/typography/interface/slot/text';

export interface RecipeExpertAgreementRadar extends SlotText {
	axes: {
		text: string;
		value: number;
		target?: number;
	}[];
	width?: number;
	height?: number;
	maxValue?: number;
	class?: string;
}
