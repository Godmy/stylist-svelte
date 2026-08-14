import type { SlotText } from '$stylist/typography/interface/slot/text';

export interface RecipeWidebandDelphiDiagram extends SlotText {
	points: {
		time: string;
		min: number;
		low: number;
		consensus: number;
		high: number;
		max: number;
		market?: number;
		procurement?: number;
	}[];
	width?: number;
	height?: number;
	minValue?: number;
	maxValue?: number;
	timeLabelStep?: number;
	currency?: string;
	class?: string;
}
