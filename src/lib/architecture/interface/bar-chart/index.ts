import type { ArchitectureHTMLAttributes } from '$stylist/architecture/type/attribute/item';
import type { TokenSchemeId } from '$stylist/information/type/token/theme-scheme-id';
import type { IBarPosition, IChartDataPoint } from '$stylist/architecture/type/attribute/bar-chart';

export interface IBarChartProps extends ArchitectureHTMLAttributes<HTMLDivElement> {
	data: IChartDataPoint[];
	title?: string;
	width?: number;
	height?: number;
	showTooltip?: boolean;
	showLegend?: boolean;
	colorScheme?: TokenSchemeId;
	maxValue?: number;
	barGap?: number;
	barWidth?: number;
	showAxis?: boolean;
	axisColor?: string;
	onBarClick?: (item: IChartDataPoint) => void;
	chartClass?: string;
}

export type { IBarPosition, IChartDataPoint };
