import { FOUNDATION_DEPTH_RANGE } from '$stylist/architecture/const/script/foundation-depth-range';
import type { FoundationDepth } from '$stylist/architecture/type/script/foundation-depth-range';

export function clampFoundationDepth(depth: number): FoundationDepth {
	return Math.min(FOUNDATION_DEPTH_RANGE.max, Math.max(FOUNDATION_DEPTH_RANGE.min, depth));
}
