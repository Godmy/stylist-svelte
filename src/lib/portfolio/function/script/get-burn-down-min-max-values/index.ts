import type { SlotBurnDownPoint as BurnDownPoint } from '$stylist/portfolio/interface/slot/burn-down-point';
export function getBurnDownMinMaxValues(points: BurnDownPoint[]): {
minActual: number;
	maxActual: number;
	minIdeal: number;
	maxIdeal: number;
} {
	if (!points.length) return { minActual: 0, maxActual: 0, minIdeal: 0, maxIdeal: 0 };

	const actualValues = points.map((point: BurnDownPoint) => point.actual);
	const idealValues = points.map((point: BurnDownPoint) => point.ideal);

	return {
		minActual: Math.min(...actualValues),
		maxActual: Math.max(...actualValues),
		minIdeal: Math.min(...idealValues),
		maxIdeal: Math.max(...idealValues)
	};
}
