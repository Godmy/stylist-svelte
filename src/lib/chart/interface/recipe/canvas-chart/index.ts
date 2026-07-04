import type { SlotChildren } from '$stylist/theme/interface/slot/children';
import type { ComputeIntersectAll } from '$stylist/theme/type/compute/intersect-all';

export interface RecipeCanvasChart extends ComputeIntersectAll<[SlotChildren]> {
	width?: number;
	height?: number;
	data?: Array<Record<string, unknown>>;
	type?: 'line' | 'bar' | 'scatter' | 'area';
	variant?: 'default' | 'minimal' | 'bold' | 'small' | 'large';
	size?: 'sm' | 'md' | 'lg';
	title?: string;
	showGrid?: boolean;
	showLegend?: boolean;
	showTooltip?: boolean;
	colors?: string[];
	xAxisLabel?: string;
	yAxisLabel?: string;
	class?: string;
}
