import type { SceneCamera as FoundationCameraState } from '$stylist/architecture/type/struct/scene-camera';
import { getFoundationDepthDistance } from '$stylist/architecture/function/script/get-foundation-depth-distance';
import { getFoundationCameraDepth } from '$stylist/architecture/function/script/get-foundation-camera-depth';

export function getFoundationCameraDistance(
	camera: FoundationCameraState,
	worldDepth: number
): number {
	return getFoundationDepthDistance(worldDepth, getFoundationCameraDepth(camera));
}
