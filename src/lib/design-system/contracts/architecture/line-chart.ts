import type { ArchitectureHTMLAttributes } from '$stylist/design-system/html/attributes/architecture';
import type { ComponentSize } from '$stylist/design-system/tokens/architecture/component-size';
import type { LineChartVariant } from '$stylist/design-system/tokens/interaction/variants';

export interface LineChartPoint {
	id: string;
	name: string;
	value: number;
	color?: string;
	description?: string;
}

export interface LineChartData {
	id: string;
	label: string;
	data: LineChartPoint[];
	color?: string;
}

export interface ILineChartProps extends ArchitectureHTMLAttributes<HTMLDivElement> {
	data: LineChartData[];
	title?: string;
	width?: number;
	height?: number;
	showTooltip?: boolean;
	showLegend?: boolean;
	colorScheme?: 'default' | 'warm' | 'cool' | 'neutral';
	maxValue?: number;
	showAxis?: boolean;
	axisColor?: string;
	smooth?: boolean;
	strokeWidth?: number;
	onPointClick?: (item: LineChartPoint, series: LineChartData) => void;
	variant?: LineChartVariant;
	size?: ComponentSize;
	chartClass?: string;
}
