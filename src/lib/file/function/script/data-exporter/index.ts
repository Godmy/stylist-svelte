import type { ExportFormat } from '$stylist/file/type/enum/data-exporter';
import type { DataItem } from '$stylist/file/type/struct/data-exporter/data-item';
import type { ExportFormatDetails } from '$stylist/file/type/struct/export-format-details';

/**
 * Convert data array to CSV string
 */
export function convertToCSV(objArray: DataItem[]): string {
  if (objArray.length === 0) return '';

  const headers = Object.keys(objArray[0]);
  const headerRow = headers.map(toCsvValue).join(',');
  const dataRows = objArray.map((row) =>
    headers.map((header) => toCsvValue(row[header])).join(',')
  );

  return [headerRow, ...dataRows].join('\n');
}

/**
 * Convert a value to CSV-safe string
 */
export function toCsvValue(value: unknown): string {
  if (value === null || value === undefined) return '';
  const stringValue = String(value);
  const escaped = stringValue.replace(/"/g, '""');
  return /[",\n]/.test(stringValue) ? `"${escaped}"` : escaped;
}

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
