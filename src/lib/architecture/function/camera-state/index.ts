import type { PlacePoint } from '$stylist/architecture/interface/place-point/index';
import { clampFoundationDepth, getFoundationDepthDistance, type FoundationDepth } from '$stylist/architecture/function/depth';

export interface FoundationCameraState {
	position: PlacePoint;
	zoom: number;
	viewportWidth: number;
	viewportHeight: number;
}

export const DEFAULT_FOUNDATION_CAMERA: FoundationCameraState = {
	position: { x: 0, y: 0, z: 500, space: 'world' },
	zoom: 1,
	viewportWidth: 1280,
	viewportHeight: 720
};

export function createFoundationCameraState(
	overrides: Partial<FoundationCameraState> = {}
): FoundationCameraState {
	return {
		...DEFAULT_FOUNDATION_CAMERA,
		...overrides,
		position: {
			...DEFAULT_FOUNDATION_CAMERA.position,
			...overrides.position,
			z: clampFoundationDepth(overrides.position?.z ?? DEFAULT_FOUNDATION_CAMERA.position.z ?? 500),
			space: 'world'
		}
	};
}

export function getFoundationCameraDepth(camera: FoundationCameraState): FoundationDepth {
	return clampFoundationDepth(camera.position.z ?? FOUNDATION_DEPTH_RANGE_FALLBACK);
}

export function getFoundationCameraDistance(
	camera: FoundationCameraState,
	worldDepth: FoundationDepth
): number {
	return getFoundationDepthDistance(worldDepth, getFoundationCameraDepth(camera));
}

const FOUNDATION_DEPTH_RANGE_FALLBACK = 500;
