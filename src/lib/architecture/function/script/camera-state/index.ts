import { clampFoundationDepth } from '$stylist/architecture/function/script/depth';
import { DEFAULT_FOUNDATION_CAMERA } from '$stylist/architecture/const/value/default-foundation-camera';
import type { SceneCamera as FoundationCameraState } from '$stylist/architecture/type/object/scene-camera';

export function createFoundationCameraState(
	overrides: Partial<FoundationCameraState> = {}
): FoundationCameraState {
	return {
		...DEFAULT_FOUNDATION_CAMERA,
		...overrides,
		depth: clampFoundationDepth(overrides.depth ?? DEFAULT_FOUNDATION_CAMERA.depth)
	};
}
