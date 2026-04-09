import type { ExportFormat } from '$stylist/file/type/enum/data-exporter';
import type { DataItem } from '$stylist/file/type/struct/data-exporter';

export function createDataExporterState(
  props: {
    data?: DataItem[];
    format?: ExportFormat;
    disabled?: boolean;
    fileName?: string;
    class?: string;
  } & Record<string, unknown>
) {
  const disabled = $derived(props.disabled ?? false);
  const format = $derived(props.format ?? 'csv');
  const fileName = $derived(props.fileName ?? 'export');
  const data = $derived(props.data ?? []);

  const formats: Record<ExportFormat, { ext: string; mime: string }> = {
    csv: { ext: 'csv', mime: 'text/csv' },
    json: { ext: 'json', mime: 'application/json' },
    excel: { ext: 'xlsx', mime: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' }
  };

  return {
    get disabled() {
      return disabled;
    },
    get format() {
      return format;
    },
    get fileName() {
      return fileName;
    },
    get data() {
      return data;
    },
    get formats() {
      return formats;
    }
  };
}

export default createDataExporterState;
