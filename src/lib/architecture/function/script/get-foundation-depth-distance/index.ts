import { clampFoundationDepth } from '$stylist/architecture/function/script/depth';
import type { FoundationDepth } from '$stylist/architecture/type/script/foundation-depth-range';

export function getFoundationDepthDistance(
	worldDepth: FoundationDepth,
	cameraDepth: FoundationDepth
): number {
	return Math.abs(clampFoundationDepth(worldDepth) - clampFoundationDepth(cameraDepth));
}
