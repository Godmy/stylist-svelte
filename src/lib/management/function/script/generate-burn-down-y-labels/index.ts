import type { SlotBurnDownPoint as BurnDownPoint } from '$stylist/management/interface/slot/burn-down-point';
import type { BurnDownChartMargins } from '$stylist/management/interface/slot/burn-down-chart-margins';
import type { BurnDownLabel } from '$stylist/management/interface/slot/burn-down-label';
import { getBurnDownMinMaxValues } from '$stylist/management/function/script/get-burn-down-min-max-values';

export function generateBurnDownYLabels(
	points: BurnDownPoint[],
	margins: BurnDownChartMargins,
	innerHeight: number,
	marginTop: number
): BurnDownLabel[] {
	const { maxActual, maxIdeal } = getBurnDownMinMaxValues(points);
	const maxVal = Math.max(maxActual, maxIdeal);
	const step = Math.ceil(maxVal / 5);
	const labels: BurnDownLabel[] = [];

	for (let index = 0; index <= 5; index += 1) {
		const value = index * step;
		const y = marginTop + innerHeight - (value / maxVal) * innerHeight;

		labels.push({ x: 10, y, text: value.toString() });
	}

	return labels;
}
