import type { ExportFormat } from '$stylist/file/type/alias/export-format';

export function toolbarHandleExport(
	format: ExportFormat,
	onExportImage?: (format: ExportFormat) => void
): void {
	onExportImage?.(format);
}
