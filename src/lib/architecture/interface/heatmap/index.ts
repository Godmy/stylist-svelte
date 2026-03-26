import type { ArchitectureHTMLAttributes } from '$stylist/architecture/type/attribute/item';
import type { TokenSchemeId } from '$stylist/information/type/token/theme-scheme-id';
import type { IExtendedHeatmapCell, IHeatmapCell } from '$stylist/architecture/type/attribute/heatmap';

export interface IHeatmapProps extends ArchitectureHTMLAttributes<HTMLDivElement> {
	data: IHeatmapCell[];
	title?: string;
	width?: number;
	height?: number;
	showTooltip?: boolean;
	showLegend?: boolean;
	colorScheme?: TokenSchemeId;
	showAxis?: boolean;
	axisColor?: string;
	cellPadding?: number;
	onCellClick?: (item: IHeatmapCell) => void;
	chartClass?: string;
	maxValue?: number;
	minValue?: number;
}

export type { IExtendedHeatmapCell, IHeatmapCell };
