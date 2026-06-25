export function resolveMinimapFitZoom(
	bounds: { minX: number; minY: number; maxX: number; maxY: number },
	width: number,
	height: number
): number {
	if (bounds.maxX - bounds.minX <= 0 || bounds.maxY - bounds.minY <= 0) return 1;

	return Math.min(width / (bounds.maxX - bounds.minX), height / (bounds.maxY - bounds.minY), 1);
}
