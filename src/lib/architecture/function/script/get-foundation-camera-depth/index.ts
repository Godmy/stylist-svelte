import { clampFoundationDepth } from '$stylist/architecture/function/script/depth';
import type { SceneCamera as FoundationCameraState } from '$stylist/architecture/type/struct/scene-camera';

export function getFoundationCameraDepth(camera: FoundationCameraState): number {
	return clampFoundationDepth(camera.depth ?? 500);
}
