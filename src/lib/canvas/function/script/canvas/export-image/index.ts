export function exportCanvasImage(
	canvas: HTMLCanvasElement | null | undefined,
	filename: string
): void {
	if (!canvas) return;

	const link = document.createElement('a');
	link.download = filename;
	link.href = canvas.toDataURL();
	link.click();
}
