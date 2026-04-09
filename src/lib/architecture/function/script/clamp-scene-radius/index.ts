export function clampSceneRadius(radius: number): number {
	return Math.max(2, Math.min(50, radius));
}
