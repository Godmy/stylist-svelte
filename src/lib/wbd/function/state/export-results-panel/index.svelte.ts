import type { RecipeWbdExportResultsPanel } from '$stylist/wbd/interface/recipe/export-results-panel';
import type { StructWbdExportOption } from '$stylist/wbd/type/struct/export-option';

export function createWbdExportResultsPanelState(props: RecipeWbdExportResultsPanel) {
	const className = $derived(props.class ?? '');
	const defaultOptions = $derived<StructWbdExportOption[]>([
		{ id: 'csv', label: 'CSV', description: 'Flat table for spreadsheets' },
		{ id: 'json', label: 'JSON', description: 'Structured export for integrations' },
		{ id: 'xlsx', label: 'XLSX', description: 'Workbook for coordinators' },
		{ id: 'pdf', label: 'PDF', description: 'Final human-readable report' }
	]);
	const options = $derived(props.options ?? defaultOptions);

	return {
		get options() {
			return options;
		},
		get className() {
			return className;
		},
		exportOption(option: StructWbdExportOption) {
			if (option.disabled) return;
			props.onExport?.(option);
		}
	};
}

export default createWbdExportResultsPanelState;
