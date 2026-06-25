export function clampSceneVerticalAngle(angle: number): number {
	return Math.max(-Math.PI / 2 + 0.1, Math.min(Math.PI / 2 - 0.1, angle));
}
