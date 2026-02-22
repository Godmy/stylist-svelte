import type { HtmlAttributesBase, HtmlAttributesWithContent } from './common';
import type { ChartDataPoint } from './canvas-chart';

export interface PieChartProps extends HtmlAttributesBase<HTMLDivElement> {
	data: ChartDataPoint[];
}

export interface ColorSwatchProps extends HtmlAttributesWithContent<HTMLDivElement> {
	color?: string;
	size?: number;
}
