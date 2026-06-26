import { ZWICKY_LAYOUT_SCALE } from '$stylist/graph/const/value/zwicky-layout-scale';

export function clampZwickyRadius(radius: number): number {
	return Math.max(ZWICKY_LAYOUT_SCALE.cameraMinRadius, Math.min(ZWICKY_LAYOUT_SCALE.cameraMaxRadius, radius));
}
