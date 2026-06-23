import { clampFoundationDepth } from '$stylist/architecture/function/script/depth';

export function getFoundationDepthDistance(
	worldDepth: number,
	cameraDepth: number
): number {
	return Math.abs(clampFoundationDepth(worldDepth) - clampFoundationDepth(cameraDepth));
}
