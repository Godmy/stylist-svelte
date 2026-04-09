export function interpolateFoundationValue(
	start: number,
	end: number,
	progress: number
): number {
	const clampedProgress = Math.min(1, Math.max(0, progress));
	return start + (end - start) * clampedProgress;
}
