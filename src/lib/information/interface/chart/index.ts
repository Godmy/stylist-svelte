import type { HtmlAttributesBase, HtmlAttributesWithContent } from '$stylist/information/type/attribute/common';
import type { ChartDataPoint } from '$stylist/information/interface/canvas-chart';

export interface PieChartProps extends HtmlAttributesBase<HTMLDivElement> {
	data: ChartDataPoint[];
}

export interface ColorSwatchProps extends HtmlAttributesWithContent<HTMLDivElement> {
	color?: string;
	size?: number;
}

export interface ChartFunctionPoint {
	x: number;
	y: number;
	z?: number;
	label?: string;
}

export interface ChartSeries {
	id: string;
	name: string;
	color?: string;
	points: ChartFunctionPoint[];
}

interface ChartAxisBaseProps extends HtmlAttributesBase<SVGGElement> {
	label?: string;
	ticks?: number[];
	tickLabels?: Array<number | string>;
	tickCount?: number;
	color?: string;
	showGrid?: boolean;
	showArrow?: boolean;
}

export interface ChartAxisXProps extends ChartAxisBaseProps {
	y?: number;
	startX?: number;
	endX?: number;
}

export interface ChartAxisYProps extends ChartAxisBaseProps {
	x?: number;
	startY?: number;
	endY?: number;
	gridEndX?: number;
}

export interface ChartAxisZProps extends ChartAxisBaseProps {
	startX?: number;
	startY?: number;
	endX?: number;
	endY?: number;
}

export interface ChartBackgroundProps extends HtmlAttributesBase<SVGRectElement> {
	width: number;
	height: number;
	fill?: string;
	stroke?: string;
}

export interface ChartPolylineProps extends HtmlAttributesBase<SVGPolylineElement> {
	points: ChartFunctionPoint[];
	width: number;
	height: number;
	xDomain?: [number, number];
	yDomain?: [number, number];
	color?: string;
	strokeWidth?: number;
	smooth?: boolean;
}

export interface ChartNameProps extends HtmlAttributesBase<SVGTextElement> {
	text: string;
	x?: number;
	y?: number;
	color?: string;
}

export interface ChartLegendItem {
	id: string;
	name: string;
	color?: string;
}

export interface ChartLegendProps extends HtmlAttributesBase<HTMLDivElement> {
	items: ChartLegendItem[];
}

export interface ChartCanvasProps extends HtmlAttributesBase<HTMLDivElement> {
	width?: number;
	height?: number;
	title?: string;
	series?: ChartSeries[];
	xScale?: [number, number];
	yScale?: [number, number];
	xTickCount?: number;
	yTickCount?: number;
	zTickCount?: number;
	xAxisLabel?: string;
	yAxisLabel?: string;
	zAxisLabel?: string;
	showZAxis?: boolean;
	showGrid?: boolean;
	showAxisArrows?: boolean;
}

export interface ChartProps extends HtmlAttributesBase<HTMLDivElement> {
	width?: number;
	height?: number;
	title?: string;
	series: ChartSeries[];
	xScale?: [number, number];
	yScale?: [number, number];
	xTickCount?: number;
	yTickCount?: number;
	zTickCount?: number;
	xAxisLabel?: string;
	yAxisLabel?: string;
	zAxisLabel?: string;
	showLegend?: boolean;
	showGrid?: boolean;
	showZAxis?: boolean;
	showAxisArrows?: boolean;
}




