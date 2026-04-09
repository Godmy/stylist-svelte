export function resolveMinimapFitZoom(
	bounds: { minX: number; minY: number; maxX: number; maxY: number },
	width: number,
	height: number
): number {
	const contentWidth = bounds.maxX - bounds.minX;
	const contentHeight = bounds.maxY - bounds.minY;

	if (contentWidth <= 0 || contentHeight <= 0) return 1;

	return Math.min(width / contentWidth, height / contentHeight, 1);
}
