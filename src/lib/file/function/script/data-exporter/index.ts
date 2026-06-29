import type { AnyProperty } from '$stylist/layout/type/object/any-property';
import type { DataExporterFormat } from '$stylist/file/type/alias/data-exporter-format';
import type { DataItem } from '$stylist/file/type/struct/data-exporter/data-item';
import { convertToCSV } from '$stylist/file/function/script/convert-to-csv';

/**
 * Export data as file
 */
export function exportData(
	data: DataItem[],
	format: DataExporterFormat,
	fileName: string,
	formats: Record<DataExporterFormat, AnyProperty>,
	dispatch: (event: 'export', detail: { format: DataExporterFormat; fileName: string }) => void
): void {
	const selectedFormat = formats[format as keyof typeof formats];
	const dataStr =
		format === 'json'
			? JSON.stringify(data, null, 2)
			: format === 'csv'
				? convertToCSV(data)
				: JSON.stringify(data);

	const dataUri = `data:${selectedFormat.mime};charset=utf-8,${encodeURIComponent(dataStr)}`;

	const link = document.createElement('a');
	link.href = dataUri;
	link.download = `${fileName}.${selectedFormat.ext}`;
	link.click();

	dispatch('export', { format, fileName });
}


