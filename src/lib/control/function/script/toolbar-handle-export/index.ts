import type { ExportFormat } from '$stylist/control/type/alias/export-format';

export function toolbarHandleExport(
	format: ExportFormat,
	onExportImage?: (format: ExportFormat) => void
): void {
	onExportImage?.(format);
}
