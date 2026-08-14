import type { SlotText } from '$stylist/typography/interface/slot/text';

export interface RecipeOutlierConstellation extends SlotText {
	points: {
		id: string;
		text: string;
		x: number;
		y: number;
		confidence: number;
		outlier?: boolean;
	}[];
	width?: number;
	height?: number;
	class?: string;
}
