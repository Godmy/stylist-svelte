import type { SlotText } from '$stylist/typography/interface/slot/text';

export interface RecipeLegendBandDiagram extends SlotText {
	items: {
		text: NonNullable<SlotText['text']>;
		value?: number;
		atom?: number;
		molecule?: number;
		organism?: number;
		template?: number;
		page?: number;
		atoms?: number;
		molecules?: number;
		organisms?: number;
		templates?: number;
		pages?: number;
		color?: string;
	}[];
	width?: number;
	height?: number;
	plotHeight?: number;
	labelAreaHeight?: number;
	bandWidth?: number;
	minValue?: number;
	maxValue?: number;
	tickCount?: number;
	color?: string;
	class?: string;
}
