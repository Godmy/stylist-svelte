import type { ChartFunctionPoint } from '$stylist/chart/type/struct/chart-point';

/** Серия графика: идентичность, подпись, цвет и набор точек */
export type ChartSeries = {
	id: string;
	name: string;
	color?: string;
	points: ChartFunctionPoint[];
};
