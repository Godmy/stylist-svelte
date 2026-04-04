import type { ChartFunctionPoint } from '$stylist/analytics/type/struct/chart-point';

/** Серия графика: идентичность, подпись, цвет и набор точек */
export type ChartSeries = {
	id: string;
	name: string;
	color?: string;
	points: ChartFunctionPoint[];
};
