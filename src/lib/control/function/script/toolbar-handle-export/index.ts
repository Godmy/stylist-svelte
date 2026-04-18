import type { ToolbarExportFormat } from '$stylist/control/type/script/toolbar';

export function toolbarHandleExport(format: ToolbarExportFormat, onExportImage?: (format: ToolbarExportFormat) => void): void {
	onExportImage?.(format);
}
