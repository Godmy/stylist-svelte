import type { SlotText } from '$stylist/typography/interface/slot/text';

export interface RecipeRiskImpactMap extends SlotText {
	risks: {
		id: string;
		text: string;
		probability: number;
		impact: number;
		exposure: number;
		critical?: boolean;
	}[];
	width?: number;
	height?: number;
	class?: string;
}
