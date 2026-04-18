import type { SlotLabel } from '$stylist/typography/interface/slot/label';

/**
 * Параметры осей и шкал аналитического чарта.
 *
 * Примечание: xAxisLabel / yAxisLabel / zAxisLabel удалены — дублировали
 * SlotLabel.title. Для подписей осей используйте SlotLabel в рецепте.
 */
export interface BehaviorChartAxis {
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
