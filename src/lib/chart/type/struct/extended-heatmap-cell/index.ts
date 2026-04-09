import type { IHeatmapCell } from '$stylist/chart/type/struct/heatmap/cell';

export interface IExtendedHeatmapCell extends IHeatmapCell {
	id: string;
	x: number;
	y: number;
	width: number;
	height: number;
	color: string;
	intensity: number;
}
