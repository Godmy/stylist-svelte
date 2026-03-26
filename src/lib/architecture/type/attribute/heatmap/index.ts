export type IHeatmapCell = {
	id: string;
	row: string;
	column: string;
	value: number;
	color?: string;
	description?: string;
};

export type IExtendedHeatmapCell = IHeatmapCell & {
	x: number;
	y: number;
	width: number;
	height: number;
	color: string;
	intensity: number;
};
