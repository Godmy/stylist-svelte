import { FOUNDATION_DEPTH_RANGE } from '$stylist/architecture/const/value/foundation-depth-range';

export function normalizeFoundationDepthDistance(distance: number): number {
	return 1 - Math.min(1, Math.max(0, distance / FOUNDATION_DEPTH_RANGE.max));
}
