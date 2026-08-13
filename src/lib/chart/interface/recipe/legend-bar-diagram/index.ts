import type { SlotText } from '$stylist/typography/interface/slot/text';

export interface RecipeLegendBarDiagram extends SlotText {
	items: [NonNullable<SlotText['text']>, number][];
	width?: number;
	height?: number;
	plotHeight?: number;
	labelAreaHeight?: number;
	barWidth?: number;
	color?: string;
	class?: string;
}
