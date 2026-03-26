import type { InformationHTMLAttributes } from '$stylist/information/type/attribute/item';

export interface ScatterPlotDataPoint {
	id: string;
	x: number;
	y: number;
	name?: string;
	size?: number;
	color?: string;
	category?: string;
	description?: string;
}

export interface ScatterPlotProps extends InformationHTMLAttributes<HTMLDivElement> {
	data: ScatterPlotDataPoint[];
	title?: string;
	width?: number;
	height?: number;
	showLegend?: boolean;
	colorScheme?: 'default' | 'warm' | 'cool';
	showAxis?: boolean;
	showGrid?: boolean;
	pointSize?: number;
	showLabels?: boolean;
	class?: string;
	onPointClick?: (item: ScatterPlotDataPoint) => void;
}
