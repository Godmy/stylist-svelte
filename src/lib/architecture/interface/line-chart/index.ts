import type { ArchitectureHTMLAttributes } from '$stylist/architecture/type/attribute/item';
import type { TokenLineType } from '$stylist/architecture/type/token/line-type';
import type { TokenSize } from '$stylist/architecture/type/token/size';
import type { LineChartData, LineChartPoint } from '$stylist/architecture/type/attribute/line-chart';

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
	variant?: TokenLineType;
	size?: TokenSize;
	chartClass?: string;
}

export type { LineChartData, LineChartPoint };
