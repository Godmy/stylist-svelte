import type { SceneCameraInput } from '$stylist/architecture/type/struct/camera-input';
import { clampFoundationDepth } from '$stylist/architecture/function/script/depth';
import { DEFAULT_FOUNDATION_CAMERA } from '$stylist/architecture/const/script/default-foundation-camera';
import type { SceneCamera as FoundationCameraState } from '$stylist/architecture/type/struct/scene-camera';

export function createFoundationCameraState(
	overrides: SceneCameraInput = {}
): FoundationCameraState {
	return {
		...DEFAULT_FOUNDATION_CAMERA,
		...overrides,
		depth: clampFoundationDepth(overrides.depth ?? DEFAULT_FOUNDATION_CAMERA.depth)
	};
}
