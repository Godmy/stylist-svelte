import { clampFoundationDepth } from '$stylist/architecture/function/script/depth';
import type { FoundationDepth } from '$stylist/architecture/type/script/foundation-depth-range';
import type { FoundationCameraState } from '$stylist/architecture/type/script/foundation-camera-state';

const FOUNDATION_DEPTH_RANGE_FALLBACK = 500;

export function getFoundationCameraDepth(camera: FoundationCameraState): FoundationDepth {
	return clampFoundationDepth(camera.depth ?? FOUNDATION_DEPTH_RANGE_FALLBACK);
}
