import type { FoundationCameraState } from '$stylist/architecture/function/script/foundation-camera-state';
import type { FoundationDepth } from '$stylist/architecture/function/script/foundation-depth-range';
import { getFoundationDepthDistance } from '$stylist/architecture/function/script/get-foundation-depth-distance';
import { getFoundationCameraDepth } from '$stylist/architecture/function/script/get-foundation-camera-depth';

export function getFoundationCameraDistance(
	camera: FoundationCameraState,
	worldDepth: FoundationDepth
): number {
	return getFoundationDepthDistance(worldDepth, getFoundationCameraDepth(camera));
}
