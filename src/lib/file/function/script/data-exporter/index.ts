import type { ExportFormat } from '$stylist/file/type/enum/data-exporter';
import type { DataItem } from '$stylist/file/type/struct/data-exporter/data-item';
import type { ExportFormatDetails } from '$stylist/file/type/struct/export-format-details';
import { convertToCSV } from '$stylist/file/function/script/convert-to-csv';

/**
 * Export data as file
 */
export function exportData(
  data: DataItem[],
  format: ExportFormat,
  fileName: string,
  formats: Record<ExportFormat, ExportFormatDetails>,
  dispatch: (event: 'export', detail: { format: ExportFormat; fileName: string }) => void
): void {
  const selectedFormat = formats[format as keyof typeof formats];
  const dataStr = format === 'json'
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
