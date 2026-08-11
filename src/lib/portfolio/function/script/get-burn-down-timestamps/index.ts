import type { SlotBurnDownPoint as BurnDownPoint } from '$stylist/portfolio/interface/slot/burn-down-point';
export function getBurnDownTimestamps(points: BurnDownPoint[]): {
start: number;
	end: number;
} {
	const start = new Date(points[0]?.date ?? Date.now()).getTime();
	const end = new Date(points[points.length - 1]?.date ?? Date.now()).getTime();
	return { start, end };
}
