import type { SlotBurnDownPoint as BurnDownPoint } from '$stylist/management/interface/slot/burn-down-point';
import type { BurnDownChartMargins } from '$stylist/management/interface/slot/burn-down-chart-margins';
import type { BurnDownLabel } from '$stylist/management/interface/slot/burn-down-label';

export function generateBurnDownXLabels(
	points: BurnDownPoint[],
	margins: BurnDownChartMargins,
	innerWidth: number,
	height: number
): BurnDownLabel[] {
	if (!points.length) return [];

	const labels: BurnDownLabel[] = [];
	const interval = Math.ceil(points.length / 5);

	for (let index = 0; index < points.length; index += interval) {
		const point = points[index];
		const x = margins.left + (index * innerWidth) / (points.length - 1);
		const dateStr = new Date(point.date).toLocaleDateString('ru-RU', { day: 'numeric', month: 'short' });

		labels.push({ x, y: height - 10, text: dateStr });
	}

	return labels;
}
