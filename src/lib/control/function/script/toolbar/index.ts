import type { ToolbarExportFormat } from '$stylist/control/type/script/toolbar';

export function toolbarHandleZoomIn(onZoomIn?: () => void): void {
	onZoomIn?.();
}

export function toolbarHandleZoomOut(onZoomOut?: () => void): void {
	onZoomOut?.();
}

export function toolbarHandleFitView(onFitView?: () => void): void {
	onFitView?.();
}

export function toolbarHandleResetView(onResetView?: () => void): void {
	onResetView?.();
}

export function toolbarHandleExport(format: ToolbarExportFormat, onExportImage?: (format: ToolbarExportFormat) => void): void {
	onExportImage?.(format);
}

export function toolbarHandleLegendToggle(isVisible: boolean, onToggle?: () => void): void {
	onToggle?.();
}

export function toolbarHandleSearchToggle(isVisible: boolean, onToggle?: () => void): void {
	onToggle?.();
}
