import { clampFoundationDepth } from '$stylist/architecture/function/script/depth';
import type { FoundationDepth } from '$stylist/architecture/type/script/foundation-depth-range';
import type { FoundationCameraState } from '$stylist/architecture/type/script/foundation-camera-state';

export function getFoundationCameraDepth(camera: FoundationCameraState): FoundationDepth {
	return clampFoundationDepth(camera.depth ?? 500);
}
