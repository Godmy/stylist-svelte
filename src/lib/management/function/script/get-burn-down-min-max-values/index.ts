import type { SlotBurnDownPoint as BurnDownPoint } from '$stylist/management/interface/slot/burn-down-point';
import type { BurnDownMinMaxResult } from '$stylist/management/interface/slot/burn-down-min-max-result';

export function getBurnDownMinMaxValues(points: BurnDownPoint[]): BurnDownMinMaxResult {
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
