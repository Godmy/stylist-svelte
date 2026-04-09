import type { SceneCameraInput } from '$stylist/architecture/type/struct/camera-input';
import { clampFoundationDepth } from '$stylist/architecture/function/script/depth';
import { DEFAULT_FOUNDATION_CAMERA } from '$stylist/architecture/function/script/default-foundation-camera';
import type { FoundationCameraState } from '$stylist/architecture/function/script/foundation-camera-state';

export function createFoundationCameraState(
	overrides: SceneCameraInput = {}
): FoundationCameraState {
	return {
		...DEFAULT_FOUNDATION_CAMERA,
		...overrides,
		depth: clampFoundationDepth(overrides.depth ?? DEFAULT_FOUNDATION_CAMERA.depth)
	};
}
