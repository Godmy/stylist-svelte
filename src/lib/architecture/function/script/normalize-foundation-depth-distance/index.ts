import { FOUNDATION_DEPTH_RANGE } from '$stylist/architecture/const/script/foundation-depth-range';
import { clampFoundationDepth } from '$stylist/architecture/function/script/depth';

export function normalizeFoundationDepthDistance(distance: number): number {
	return 1 - Math.min(1, Math.max(0, distance / FOUNDATION_DEPTH_RANGE.max));
}
