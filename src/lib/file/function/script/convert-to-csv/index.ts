import type { DataItem } from '$stylist/file/type/struct/data-exporter/data-item';
import { toCsvValue } from '$stylist/file/function/script/to-csv-value';

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
