import type { SlotBurnDownPoint as BurnDownPoint } from '$stylist/management/interface/slot/burn-down-point';
import type { BurnDownChartMargins } from '$stylist/management/interface/slot/burn-down-chart-margins';
import { getBurnDownMinMaxValues } from '$stylist/management/function/script/get-burn-down-min-max-values';

export function generateBurnDownIdealPath(
	points: BurnDownPoint[],
	margins: BurnDownChartMargins,
	innerWidth: number,
	innerHeight: number
): string {
	if (!points.length) return '';

	const { maxIdeal } = getBurnDownMinMaxValues(points);

	const pathPoints = points.map((point: BurnDownPoint, index: number) => {
		const x = margins.left + (index * innerWidth) / (points.length - 1);
		const y = margins.top + innerHeight - (point.ideal / maxIdeal) * innerHeight;
		return `${index === 0 ? 'M' : 'L'}${x},${y}`;
	});

	return pathPoints.join(' ');
}
