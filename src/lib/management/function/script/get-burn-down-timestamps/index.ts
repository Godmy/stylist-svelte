import type { SlotBurnDownPoint as BurnDownPoint } from '$stylist/management/interface/slot/burn-down-point';
import type { BurnDownTimestamps } from '$stylist/management/interface/slot/burn-down-timestamps';

export function getBurnDownTimestamps(points: BurnDownPoint[]): BurnDownTimestamps {
	const start = new Date(points[0]?.date ?? Date.now()).getTime();
	const end = new Date(points[points.length - 1]?.date ?? Date.now()).getTime();
	return { start, end };
}
