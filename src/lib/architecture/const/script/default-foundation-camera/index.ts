import type { SceneCamera as FoundationCameraState } from '$stylist/architecture/type/struct/scene-camera';

export const DEFAULT_FOUNDATION_CAMERA: FoundationCameraState = {
	x: 0,
	y: 0,
	depth: 500,
	zoom: 1,
	viewportWidth: 1280,
	viewportHeight: 720
};
