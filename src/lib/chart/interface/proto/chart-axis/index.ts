/**
 * Параметры осей и шкал аналитического чарта.
 *
 * Примечание: xAxisLabel / yAxisLabel / zAxisLabel удалены — дублировали
 * ILabelSlot.title. Для подписей осей используйте ILabelSlot в рецепте.
 */
export interface IChartAxis {
	xScale?: [number, number];
	yScale?: [number, number];
	xTickCount?: number;
	yTickCount?: number;
	zTickCount?: number;
	showAxis?: boolean;
	showGrid?: boolean;
	showZAxis?: boolean;
	showAxisArrows?: boolean;
	axisColor?: string;
	maxValue?: number;
	minValue?: number;
}
