import type { DataExporterFormat } from '$stylist/file/type/alias/data-exporter-format';
import type { DataItem } from '$stylist/file/type/object/data-exporter/data-item';

export type Props = {
	data?: DataItem[];
	format?: DataExporterFormat;
	disabled?: boolean;
	fileName?: string;
	class?: string;
};


