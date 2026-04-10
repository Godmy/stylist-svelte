import type { ExportFormat } from '$stylist/file/type/enum/data-exporter';
import type { DataItem } from '$stylist/file/type/struct/data-exporter';

export type Props = {
  data?: DataItem[];
  format?: ExportFormat;
  disabled?: boolean;
  fileName?: string;
  class?: string;
};
