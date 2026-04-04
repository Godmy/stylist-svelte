import type { SceneCamera, SceneCameraInput } from '$stylist/architecture/type/struct/camera';
import { clampFoundationDepth, getFoundationDepthDistance, type FoundationDepth } from '$stylist/architecture/function/script/depth';

export type FoundationCameraState = SceneCamera;

export const DEFAULT_FOUNDATION_CAMERA: FoundationCameraState = {
	x: 0,
	y: 0,
	depth: 500,
	zoom: 1,
	viewportWidth: 1280,
	viewportHeight: 720
};

export function createFoundationCameraState(
	overrides: SceneCameraInput = {}
): FoundationCameraState {
	return {
		...DEFAULT_FOUNDATION_CAMERA,
		...overrides,
		depth: clampFoundationDepth(overrides.depth ?? DEFAULT_FOUNDATION_CAMERA.depth)
	};
}

export function getFoundationCameraDepth(camera: FoundationCameraState): FoundationDepth {
	return clampFoundationDepth(camera.depth ?? FOUNDATION_DEPTH_RANGE_FALLBACK);
}

export function getFoundationCameraDistance(
	camera: FoundationCameraState,
	worldDepth: FoundationDepth
): number {
	return getFoundationDepthDistance(worldDepth, getFoundationCameraDepth(camera));
}

const FOUNDATION_DEPTH_RANGE_FALLBACK = 500;
