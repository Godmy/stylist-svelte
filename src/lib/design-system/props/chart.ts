import type { HtmlAttributesBase, HtmlAttributesWithContent } from './common';

export type ChartDataPoint = {
	label: string;
	value: number;
	color?: string;
};

export interface PieChartProps extends HtmlAttributesBase<HTMLDivElement> {
	data: ChartDataPoint[];
}

export interface ColorSwatchProps extends HtmlAttributesWithContent<HTMLDivElement> {
	color?: string;
	size?: number;
}
