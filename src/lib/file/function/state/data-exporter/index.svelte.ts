import { createEventDispatcher } from 'svelte';
import type { DataExporterFormat } from '$stylist/file/type/alias/data-exporter-format';
import type { DataItem } from '$stylist/file/type/struct/data-exporter/data-item';
import { exportData as exportDataFn } from '$stylist/file/function/script/data-exporter';

export function createDataExporterState(
	props: {
		data?: DataItem[];
		format?: DataExporterFormat;
		disabled?: boolean;
		fileName?: string;
		class?: string;
	} & Record<string, unknown>
) {
	const disabled = $derived(props.disabled ?? false);
	const format = $derived(props.format ?? 'csv');
	const fileName = $derived(props.fileName ?? 'export');
	const data = $derived(props.data ?? []);
	let selectedFormat = $state<DataExporterFormat>(props.format ?? 'csv');
	const dispatch = createEventDispatcher<{ export: { format: DataExporterFormat; fileName: string } }>();

	const formats: Record<DataExporterFormat, { ext: string; mime: string }> = {
		csv: { ext: 'csv', mime: 'text/csv' },
		json: { ext: 'json', mime: 'application/json' },
		excel: {
			ext: 'xlsx',
			mime: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
		}
	};

	function exportData(): void {
		if (disabled) {
			return;
		}

		exportDataFn(data, selectedFormat, fileName, formats, dispatch);
	}

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
		},
		get selectedFormat() {
			return selectedFormat;
		},
		set selectedFormat(value: DataExporterFormat) {
			selectedFormat = value;
		},
		exportData
	};
}

export default createDataExporterState;


