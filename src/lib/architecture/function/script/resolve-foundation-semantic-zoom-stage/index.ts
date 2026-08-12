import { FOUNDATION_DEPTH_THRESHOLDS } from '$stylist/architecture/const/array/foundation-depth-thresholds';
import type { FoundationSemanticZoomStage } from '$stylist/architecture/type/alias/foundation-semantic-zoom-stage';
import { getFoundationDepthDistance } from '$stylist/architecture/function/script/get-foundation-depth-distance';

export function resolveFoundationSemanticZoomStage(
	worldDepth: number,
	cameraDepth: number
): FoundationSemanticZoomStage {
	const distance = getFoundationDepthDistance(worldDepth, cameraDepth);
	return (
		FOUNDATION_DEPTH_THRESHOLDS.find(
			(threshold: { maxDistance: number; stage: FoundationSemanticZoomStage }) =>
				distance <= threshold.maxDistance
		)?.stage ?? 'dot'
	);
}
