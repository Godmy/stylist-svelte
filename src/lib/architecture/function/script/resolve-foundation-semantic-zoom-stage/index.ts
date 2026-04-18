import { FOUNDATION_DEPTH_THRESHOLDS } from '$stylist/architecture/const/script/foundation-semantic-zoom-stages';
import type { FoundationDepth } from '$stylist/architecture/type/script/foundation-depth-range';
import type { FoundationSemanticZoomStage } from '$stylist/architecture/type/script/foundation-semantic-zoom-stages';
import { getFoundationDepthDistance } from '$stylist/architecture/function/script/get-foundation-depth-distance';

export function resolveFoundationSemanticZoomStage(
	worldDepth: FoundationDepth,
	cameraDepth: FoundationDepth
): FoundationSemanticZoomStage {
	const distance = getFoundationDepthDistance(worldDepth, cameraDepth);
	return (
		FOUNDATION_DEPTH_THRESHOLDS.find((threshold: { maxDistance: number; stage: FoundationSemanticZoomStage }) => distance <= threshold.maxDistance)?.stage ??
		'dot'
	);
}
